import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO_EMAIL = "lifegix.contact@gmail.com";

const PAKKET_LABEL: Record<string, string> = {
  starter:      "Website Starter",
  business:     "Website Business",
  ai_faq:       "FAQ Chatbot",
  ai_leads:     "Leadopvolging Agent",
  ai_afspraken: "Afspraakplanning Agent",
  ai_volledig:  "Volledige AI Agent",
  test:         "Testbetaling",
};

/* ─── Moneybird helpers ─────────────────────────────────── */

async function moneybirdFetch(path: string, method = "GET", body?: object) {
  const token = process.env.MONEYBIRD_API_TOKEN;
  if (!token) return null;

  const res = await fetch(`https://moneybird.com/api/v2/${path}`, {
    method,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    console.error(`Moneybird ${method} ${path} failed:`, res.status, await res.text());
    return null;
  }
  return res.json();
}

async function getAdministrationId(): Promise<string | null> {
  const admins = await moneybirdFetch("administrations");
  if (!admins || !admins[0]) return null;
  return String(admins[0].id);
}

async function findOrCreateContact(adminId: string, naam: string, bedrijf: string, email: string, telefoon: string) {
  // Zoek bestaand contact op e-mail
  const results = await moneybirdFetch(`${adminId}/contacts?query=${encodeURIComponent(email)}`);
  if (results && results.length > 0) return results[0].id;

  // Maak nieuw contact aan
  const nameParts = naam.trim().split(" ");
  const firstname = nameParts[0] ?? naam;
  const lastname = nameParts.slice(1).join(" ") || "";

  const contact = await moneybirdFetch(`${adminId}/contacts`, "POST", {
    contact: {
      company_name: bedrijf || naam,
      firstname,
      lastname,
      email,
      phone: telefoon || "",
    },
  });
  return contact?.id ?? null;
}

async function createInvoice(
  adminId: string,
  contactId: string,
  beschrijving: string,
  bedrag: string,
  referentie: string
) {
  const today = new Date().toISOString().split("T")[0];

  return moneybirdFetch(`${adminId}/sales_invoices`, "POST", {
    sales_invoice: {
      contact_id: contactId,
      invoice_date: today,
      reference: referentie,
      send_method: "email",
      details_attributes: [
        {
          description: beschrijving,
          price: bedrag,
          amount: "1",
          tax_rate_id: null, // KOR — geen BTW
        },
      ],
    },
  });
}

async function markAsOpen(adminId: string, invoiceId: string) {
  // Zet factuur van 'draft' naar 'open' zonder e-mail te sturen
  return moneybirdFetch(`${adminId}/sales_invoices/${invoiceId}/send_invoice`, "PATCH", {
    sales_invoice_sending: {
      delivery_method: "Manual",
    },
  });
}

async function registerPayment(adminId: string, invoiceId: string, bedrag: string) {
  const today = new Date().toISOString().split("T")[0];
  return moneybirdFetch(`${adminId}/sales_invoices/${invoiceId}/register_payment`, "PATCH", {
    payment: {
      payment_date: today,
      price: bedrag,
    },
  });
}

async function sendInvoice(adminId: string, invoiceId: string, email: string, naam: string) {
  return moneybirdFetch(`${adminId}/sales_invoices/${invoiceId}/send_invoice`, "PATCH", {
    sales_invoice_sending: {
      delivery_method: "Email",
      email_address: email,
      email_message: `Beste ${naam},\n\nHartelijk dank voor je bestelling bij LifeGix! In de bijlage vind je de betaalde factuur.\n\nMet vriendelijke groet,\nHanibal — LifeGix`,
    },
  });
}

/* ─── Webhook handler ───────────────────────────────────── */

export async function POST(req: NextRequest) {
  const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! });
  const resend = new Resend(process.env.RESEND_API_KEY);

  let id: string;
  try {
    const body = await req.text();
    const params = new URLSearchParams(body);
    id = params.get("id") ?? "";
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  if (!id) return new NextResponse(null, { status: 200 });

  let payment;
  try {
    payment = await mollie.payments.get(id);
  } catch (err) {
    console.error("Mollie get payment error:", err);
    return new NextResponse(null, { status: 200 });
  }

  if (payment.status !== "paid") return new NextResponse(null, { status: 200 });

  const { naam, bedrijf, email, telefoon, pakket, aiAgent, maandelijksBedrag, beschrijving: metaBeschrijving } = payment.metadata as Record<string, string>;
  const pakketLabel = PAKKET_LABEL[pakket] ?? pakket;
  const aiLabel = aiAgent === "true" ? " + AI Agent (bundelkorting)" : "";
  const beschrijving = metaBeschrijving || `${pakketLabel}${aiLabel}`;
  const maandelijks = parseFloat(maandelijksBedrag ?? "0");
  // Bevestigingsmail naar klant
  try {
    await resend.emails.send({
      from: "Lifegix <hanibal@lifegix.nl>",
      to: email,
      replyTo: TO_EMAIL,
      subject: "Bevestiging van je bestelling — Lifegix",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0f; color: #ededed; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin-bottom: 8px;">Bedankt voor je bestelling, ${naam}!</h2>
          <p style="color: #9ca3af; margin-bottom: 24px;">Je betaling is ontvangen. Ik neem binnen 24 uur persoonlijk contact met je op om te starten.</p>
          <div style="padding: 16px; background: #1a1a2e; border-radius: 8px; border-left: 3px solid #7c3aed; margin-bottom: 24px;">
            <p style="color: #9ca3af; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Jouw bestelling</p>
            <p style="margin: 0; font-weight: 600;">${beschrijving}</p>
            ${bedrijf ? `<p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 14px;">${bedrijf}</p>` : ""}
          </div>
          <p style="color: #9ca3af; font-size: 14px;">Je ontvangt de factuur apart per e-mail vanuit Moneybird.</p>
          <p style="font-size: 14px; color: #9ca3af; margin-top: 16px;">Vragen? Stuur een mail naar <a href="mailto:${TO_EMAIL}" style="color: #a78bfa;">${TO_EMAIL}</a></p>
          <p style="margin-top: 24px; font-size: 12px; color: #4b5563;">Lifegix · Warnsveld · KvK 98120336 · Vrijgesteld van BTW (KOR)</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Resend bevestigingsmail error:", err);
  }

  // Notificatie naar Hanibal
  try {
    await resend.emails.send({
      from: "Lifegix Bestellingen <hanibal@lifegix.nl>",
      to: TO_EMAIL,
      subject: `Nieuwe betaling ontvangen — ${naam}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0f; color: #ededed; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin-bottom: 24px;">Betaling ontvangen</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #9ca3af; width: 120px;">Naam</td><td style="padding: 8px 0; font-weight: 600;">${naam}</td></tr>
            ${bedrijf ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Bedrijf</td><td style="padding: 8px 0;">${bedrijf}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #9ca3af;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #a78bfa;">${email}</a></td></tr>
            ${telefoon ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Telefoon</td><td style="padding: 8px 0;">${telefoon}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #9ca3af;">Pakket</td><td style="padding: 8px 0;">${beschrijving}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Bedrag</td><td style="padding: 8px 0; font-weight: 600;">€${payment.amount.value}</td></tr>
          </table>
        </div>
      `,
    });
  } catch (err) {
    console.error("Resend notificatie error:", err);
  }

  // Moneybird factuur aanmaken
  try {
      const adminId = await getAdministrationId();
      if (adminId) {
        const contactId = await findOrCreateContact(adminId, naam, bedrijf, email, telefoon);
        if (contactId) {
          const invoice = await createInvoice(
            adminId,
            contactId,
            beschrijving,
            payment.amount.value,
            `Bestelling lifegix.nl — ${naam}`
          );
          if (invoice?.id) {
            await markAsOpen(adminId, invoice.id);         // 1. draft → open
            await registerPayment(adminId, invoice.id, payment.amount.value); // 2. betaald
            await sendInvoice(adminId, invoice.id, email, naam); // 3. e-mail met betaalde factuur
            console.log("Moneybird factuur aangemaakt, betaald en verstuurd:", invoice.id);
          }
        }
      }
  } catch (err) {
    console.error("Moneybird factuur error:", err);
  }

  // Mollie abonnement aanmaken (alleen als er een maandelijks bedrag is)
  if (maandelijks > 0) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const customerId = (payment as any).customerId as string | undefined;
      if (customerId) {
        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() + 1);
        const startDateStr = startDate.toISOString().split("T")[0];

        await mollie.subscriptions.create({
          customerId,
          amount: {
            currency: "EUR",
            value: maandelijks.toFixed(2),
          },
          interval: "1 month",
          startDate: startDateStr,
          description: `Maandelijks abonnement — ${beschrijving}`,
          webhookUrl: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://lifegix.nl"}/api/subscription/webhook`,
          metadata: { naam, email, pakket, beschrijving },
        });

        console.log(`Abonnement aangemaakt voor ${naam}: €${maandelijks}/mnd`);
      } else {
        console.warn("Geen customerId op betaling — abonnement overgeslagen");
      }
    } catch (err) {
      console.error("Mollie abonnement error:", err);
    }
  }

  return new NextResponse(null, { status: 200 });
}
