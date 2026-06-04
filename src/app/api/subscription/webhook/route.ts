import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO_EMAIL = "lifegix.contact@gmail.com";
const NOTION_DB_ID = "fe296bbb-465c-4506-9df2-c1e92ef6c8b7";

// Mollie valideert de webhook URL met een GET request
export async function GET() {
  return new NextResponse(null, { status: 200 });
}

/* ─── Notion: klant status bijwerken ───────────────────────── */

async function updateNotionKlantStatus(email: string, status: string) {
  const token = process.env.NOTION_API_KEY;
  if (!token) { console.warn("⚠️ NOTION_API_KEY niet ingesteld"); return; }

  // Zoek de klant op e-mail
  const searchRes = await fetch(`https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      filter: { property: "E-mail", email: { equals: email } },
    }),
  });

  if (!searchRes.ok) {
    console.error("Notion zoeken mislukt:", await searchRes.text());
    return;
  }

  const data = await searchRes.json();
  const page = data.results?.[0];
  if (!page) {
    console.warn(`⚠️ Notion: klant niet gevonden voor ${email}`);
    return;
  }

  const updateRes = await fetch(`https://api.notion.com/v1/pages/${page.id}`, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      properties: {
        "Status": { select: { name: status } },
      },
    }),
  });

  if (!updateRes.ok) {
    console.error("Notion status update mislukt:", await updateRes.text());
  } else {
    console.log(`✅ Notion status bijgewerkt voor ${email}: ${status}`);
  }
}

/* ─── Webhook handler ───────────────────────────────────────── */

export async function POST(req: NextRequest) {
  const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! });
  const resend = new Resend(process.env.RESEND_API_KEY);

  let id: string;
  try {
    const body = await req.text();
    const params = new URLSearchParams(body);
    id = params.get("id") ?? "";
  } catch {
    return new NextResponse(null, { status: 200 });
  }

  if (!id) return new NextResponse(null, { status: 200 });

  let payment;
  try {
    payment = await mollie.payments.get(id);
  } catch (err) {
    console.error("Subscription webhook — payment ophalen mislukt:", err);
    return new NextResponse(null, { status: 200 });
  }

  const meta = (payment.metadata ?? {}) as Record<string, string>;
  const { naam, email, pakket } = meta;

  /* ── Geslaagde incasso ─────────────────────────────────────── */
  if (payment.status === "paid") {
    console.log(`✅ Maandelijkse incasso geslaagd: ${naam} (${pakket}) — EUR ${payment.amount.value}`);

    try {
      await resend.emails.send({
        from: "Lifegix Bestellingen <hanibal@lifegix.nl>",
        to: TO_EMAIL,
        subject: `Maandelijkse incasso ontvangen — ${naam ?? "onbekend"}`,
        html: `
          <div style="font-family:sans-serif;padding:24px;background:#0a0a0f;color:#ededed;border-radius:12px;">
            <h2 style="color:#22c55e;">Automatische incasso geslaagd</h2>
            <p><strong>Naam:</strong> ${naam ?? "—"}</p>
            <p><strong>Pakket:</strong> ${pakket ?? "—"}</p>
            <p><strong>Bedrag:</strong> EUR ${payment.amount.value}</p>
            <p style="color:#9ca3af;font-size:13px;">Payment ID: ${id}</p>
          </div>
        `,
      });
    } catch (err) {
      console.error("Subscription betaald — mail error:", err);
    }

    return new NextResponse(null, { status: 200 });
  }

  /* ── Mislukte incasso ──────────────────────────────────────── */
  if (payment.status === "failed") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customerId = (payment as any).customerId as string | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const subscriptionId = (payment as any).subscriptionId as string | undefined;

    // Tel hoeveel keer deze incasso al is mislukt
    let failureCount = 1;
    if (customerId && subscriptionId) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const allPayments = await (mollie as any).subscriptionPayments.page({ customerId, subscriptionId });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        failureCount = allPayments.filter((p: any) => p.status === "failed").length;
      } catch (err) {
        console.warn("Kon subscription payments niet ophalen voor tellen:", err);
      }
    }

    const isDefinitief = failureCount >= 2;

    console.log(`⚠️ Incasso mislukt (${failureCount}x): ${naam} (${pakket}) — EUR ${payment.amount.value}${isDefinitief ? " — WEBSITE OFFLINE" : ""}`);

    // ── Mail naar de klant ──
    if (email) {
      try {
        await resend.emails.send({
          from: "Lifegix <hanibal@lifegix.nl>",
          to: email,
          replyTo: TO_EMAIL,
          subject: isDefinitief
            ? "Belangrijk: je website wordt offline gehaald — LifeGix"
            : "Automatische incasso mislukt — LifeGix",
          html: isDefinitief
            ? `
              <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0a0f;color:#ededed;border-radius:12px;">
                <h2 style="color:#ef4444;">Je website wordt offline gehaald</h2>
                <p>Beste ${naam},</p>
                <p>De automatische incasso van <strong>€${payment.amount.value}</strong> voor je abonnement bij LifeGix is voor de <strong>tweede keer mislukt</strong>.</p>
                <p>Zoals vermeld in onze algemene voorwaarden (Artikel 5b) wordt je website per direct offline gehaald totdat de betaling is voldaan.</p>
                <div style="margin:20px 0;padding:16px;background:#1a1a2e;border-radius:8px;border-left:3px solid #ef4444;">
                  <p style="margin:0;"><strong>Wat kun je doen?</strong></p>
                  <p style="margin:8px 0 0 0;">Neem direct contact op via <a href="mailto:${TO_EMAIL}" style="color:#a78bfa;">${TO_EMAIL}</a>. Na ontvangst van de betaling zetten we je website direct weer online.</p>
                </div>
                <p style="margin-top:24px;font-size:12px;color:#4b5563;">LifeGix · Warnsveld · KvK 98120336</p>
              </div>
            `
            : `
              <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0a0f;color:#ededed;border-radius:12px;">
                <h2 style="color:#f59e0b;">Automatische incasso mislukt</h2>
                <p>Beste ${naam},</p>
                <p>De automatische incasso van <strong>€${payment.amount.value}</strong> voor je abonnement bij LifeGix kon helaas niet worden verwerkt.</p>
                <p>Dit kan komen door onvoldoende saldo of een geblokkeerde machtiging. Mollie probeert het bedrag automatisch opnieuw af te schrijven.</p>
                <div style="margin:20px 0;padding:16px;background:#1a1a2e;border-radius:8px;border-left:3px solid #f59e0b;">
                  <p style="margin:0;color:#f59e0b;font-size:13px;">⚠️ Let op: bij een tweede mislukte incasso wordt je website offline gehaald conform onze algemene voorwaarden.</p>
                </div>
                <p>Problemen? Neem contact op via <a href="mailto:${TO_EMAIL}" style="color:#a78bfa;">${TO_EMAIL}</a>.</p>
                <p style="margin-top:24px;font-size:12px;color:#4b5563;">LifeGix · Warnsveld · KvK 98120336</p>
              </div>
            `,
        });
      } catch (err) {
        console.error("Klant mail mislukte incasso error:", err);
      }
    }

    // ── Notificatie naar Hanibal ──
    try {
      await resend.emails.send({
        from: "Lifegix Bestellingen <hanibal@lifegix.nl>",
        to: TO_EMAIL,
        subject: `${isDefinitief ? "🚫 2e mislukking — website offline" : "⚠️ Incasso mislukt"} — ${naam ?? "onbekend"}`,
        html: `
          <div style="font-family:sans-serif;padding:24px;background:#0a0a0f;color:#ededed;border-radius:12px;">
            <h2 style="color:${isDefinitief ? "#ef4444" : "#f59e0b"};">${isDefinitief ? "🚫 2e mislukte incasso — zet website offline" : "⚠️ Incasso mislukt (1e keer)"}</h2>
            <p><strong>Naam:</strong> ${naam ?? "—"}</p>
            <p><strong>Pakket:</strong> ${pakket ?? "—"}</p>
            <p><strong>Bedrag:</strong> EUR ${payment.amount.value}</p>
            <p><strong>Aantal mislukkingen:</strong> ${failureCount}</p>
            ${isDefinitief
              ? `<p style="color:#ef4444;"><strong>Actie vereist:</strong> Zet de website handmatig offline. Klant heeft een officiële waarschuwingsmail ontvangen.</p>`
              : `<p style="color:#9ca3af;">Klant heeft een herinneringsmail ontvangen. Mollie probeert automatisch opnieuw.</p>`
            }
            <p style="color:#9ca3af;font-size:13px;">Payment ID: ${id}</p>
          </div>
        `,
      });
    } catch (err) {
      console.error("Hanibal mail mislukte incasso error:", err);
    }

    // ── Notion status bijwerken ──
    if (email) {
      try {
        await updateNotionKlantStatus(
          email,
          isDefinitief ? "🚫 Betaling gestopt" : "⚠️ Betaling mislukt"
        );
      } catch (err) {
        console.error("Notion status update error:", err);
      }
    }

    return new NextResponse(null, { status: 200 });
  }

  // Overige statussen (expired, canceled, etc.) — geen actie
  return new NextResponse(null, { status: 200 });
}
