import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO_EMAIL = "lifegix.contact@gmail.com";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://lifegix.nl";

const PAKKET_LABEL: Record<string, string> = {
  starter:      "Website Starter",
  business:     "Website Business",
  ai_faq:       "FAQ Chatbot",
  ai_leads:     "Leadopvolging Agent",
  ai_afspraken: "Afspraakplanning Agent",
  ai_volledig:  "Volledige AI Agent",
  test:         "Testbetaling",
  test_sub:     "Testbetaling + Abonnement",
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
  const results = await moneybirdFetch(`${adminId}/contacts?query=${encodeURIComponent(email)}`);
  if (results && results.length > 0) return results[0].id;

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
          tax_rate_id: null,
        },
      ],
    },
  });
}

async function markAsOpen(adminId: string, invoiceId: string) {
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

  // ── Parse webhook body ──
  let id: string;
  try {
    const body = await req.text();
    const params = new URLSearchParams(body);
    id = params.get("id") ?? "";
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  if (!id) return new NextResponse(null, { status: 200 });

  // ── Haal payment op ──
  let payment;
  try {
    payment = await mollie.payments.get(id);
  } catch (err) {
    console.error("Mollie get payment error:", err);
    return new NextResponse(null, { status: 200 });
  }

  // Altijd 200 teruggeven aan Mollie, ook als betaling niet afgerond is
  if (payment.status !== "paid") return new NextResponse(null, { status: 200 });

  // ── Bepaal of dit een eerste of herhalende betaling is ──
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sequenceType = (payment as any).sequenceType ?? "oneoff";
  const isHerhaalbetaling = sequenceType === "recurring";

  // Bij herhalende SEPA-afschrijvingen: geen mail, factuur of abonnement aanmaken
  if (isHerhaalbetaling) {
    console.log(`ℹ️ Herhaalbetaling ontvangen voor payment ${id} — geen actie nodig`);
    return new NextResponse(null, { status: 200 });
  }

  // Vanaf hier: alleen eerste betalingen of losse betalingen
  const meta = payment.metadata as Record<string, string>;
  const {
    naam,
    bedrijf,
    email,
    telefoon,
    pakket,
    aiAgent,
    maandelijksBedrag,
    beschrijving: metaBeschrijving,
    iban,
  } = meta;

  const pakketLabel = PAKKET_LABEL[pakket] ?? pakket;
  const aiLabel = aiAgent === "true" ? " + AI Agent (bundelkorting)" : "";
  const beschrijving = metaBeschrijving || `${pakketLabel}${aiLabel}`;
  const maandelijks = parseFloat(maandelijksBedrag ?? "0");

  // ── Abonnement aanmaken via IBAN (Copilot approach: klant vult IBAN in formulier) ──
  if (maandelijks > 0 && iban) {
    try {
      // Stap 1: Mollie klant aanmaken
      const customer = await mollie.customers.create({ name: naam, email });
      const customerId = customer.id;

      // Stap 2: SEPA mandaat aanmaken met IBAN
      const nameParts = naam.trim().split(" ");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (mollie.customerMandates as any).create({
        customerId,
        method: "directdebit",
        consumerName: naam,
        consumerAccount: iban,
        signatureDate: new Date().toISOString().split("T")[0],
      });
      console.log(`✅ SEPA mandaat aangemaakt voor ${naam}`);

      // Stap 3: Wacht even zodat mandaat verwerkt is
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Stap 4: Subscription aanmaken
      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() + 1);

      await mollie.customerSubscriptions.create({
        customerId,
        amount: { currency: "EUR", value: maandelijks.toFixed(2) },
        interval: "1 month",
        startDate: startDate.toISOString().split("T")[0],
        description: `Maandelijks abonnement — ${beschrijving}`,
        metadata: JSON.stringify({ naam, email, pakket }),
      });
      console.log(`✅ Abonnement aangemaakt voor ${naam}: €${maandelijks}/mnd`);
      void nameParts;
    } catch (err: unknown) {
      const e = err as Record<string, unknown>;
      console.error("Abonnement error:", JSON.stringify({
        message: e?.message ?? String(err),
        statusCode: e?.statusCode,
        detail: e?.detail,
      }));
    }
  } else if (maandelijks > 0 && !iban) {
    console.warn("⚠️ Geen IBAN in metadata — abonnement overgeslagen");
  }

  // ── Bevestigingsmail naar klant ──
  try {
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const nextMonthStr = nextMonth.toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });

    await resend.emails.send({
      from: "Lifegix <hanibal@lifegix.nl>",
      to: email,
      replyTo: TO_EMAIL,
      subject: "Bevestiging van je bestelling — Lifegix",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0f; color: #ededed; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin-bottom: 8px;">Bedankt voor je bestelling, ${naam}!</h2>
          <p style="color: #9ca3af; margin-bottom: 24px;">Je betaling is ontvangen. Ik neem binnen 24 uur persoonlijk contact met je op om te starten.</p>

          <!-- Eenmalige betaling -->
          <div style="padding: 16px; background: #1a1a2e; border-radius: 8px; border-left: 3px solid #7c3aed; margin-bottom: 16px;">
            <p style="color: #9ca3af; margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Eenmalige betaling — voldaan</p>
            <p style="margin: 0; font-weight: 600; font-size: 15px;">${beschrijving}</p>
            ${bedrijf ? `<p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 13px;">${bedrijf}</p>` : ""}
            <p style="margin: 8px 0 0 0; color: #a78bfa; font-size: 13px;">✓ Betaald — je ontvangt de factuur apart via Moneybird</p>
          </div>

          ${maandelijks > 0 ? `
          <!-- Abonnement -->
          <div style="padding: 16px; background: #0d1a0d; border-radius: 8px; border-left: 3px solid #22c55e; margin-bottom: 24px;">
            <p style="color: #9ca3af; margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Maandelijks abonnement — actief</p>
            <p style="margin: 0; font-weight: 600; font-size: 15px;">€${maandelijks.toFixed(2)} per maand</p>
            <p style="margin: 6px 0 0 0; color: #9ca3af; font-size: 13px;">Eerste afschrijving: <strong style="color: #ededed;">${nextMonthStr}</strong></p>
            <p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 13px;">Daarna elke maand automatisch via SEPA-incasso van jouw rekening.</p>
            <p style="margin: 8px 0 0 0; color: #22c55e; font-size: 13px;">✓ Abonnement succesvol aangemaakt</p>
          </div>
          ` : ""}

          <div style="background: #111827; border-radius: 8px; padding: 14px; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 13px; color: #9ca3af;">
              <strong style="color: #ededed;">Opzeggen?</strong> Stuur een mail naar
              <a href="mailto:${TO_EMAIL}" style="color: #a78bfa;">${TO_EMAIL}</a>.
              Opzegtermijn is 1 kalendermaand. De website blijft dan nog 30 dagen online.
            </p>
          </div>

          <p style="font-size: 14px; color: #9ca3af;">Vragen? Stuur een mail naar <a href="mailto:${TO_EMAIL}" style="color: #a78bfa;">${TO_EMAIL}</a></p>
          <p style="margin-top: 24px; font-size: 12px; color: #4b5563;">Lifegix · Warnsveld · KvK 98120336 · Vrijgesteld van BTW (KOR)</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Resend bevestigingsmail error:", err);
  }

  // ── Notificatie naar Hanibal ──
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
            <tr><td style="padding: 8px 0; color: #9ca3af;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #a78bfa;">${email}</td></tr>
            ${telefoon ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Telefoon</td><td style="padding: 8px 0;">${telefoon}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #9ca3af;">Pakket</td><td style="padding: 8px 0;">${beschrijving}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Bedrag</td><td style="padding: 8px 0; font-weight: 600;">€${payment.amount.value}</td></tr>
            ${maandelijks > 0 ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Abonnement</td><td style="padding: 8px 0; color: #a78bfa;">€${maandelijks.toFixed(2)}/mnd — automatisch aangemaakt</td></tr>` : ""}
          </table>
        </div>
      `,
    });
  } catch (err) {
    console.error("Resend notificatie error:", err);
  }

  // ── Moneybird factuur ──
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
          await markAsOpen(adminId, invoice.id);
          await registerPayment(adminId, invoice.id, payment.amount.value);
          await sendInvoice(adminId, invoice.id, email, naam);
          console.log("✅ Moneybird factuur aangemaakt:", invoice.id);
        }
      }
    }
  } catch (err) {
    console.error("Moneybird factuur error:", err);
  }

  return new NextResponse(null, { status: 200 });
}
