import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createLeadToken } from "@/lib/token";

export const dynamic = "force-dynamic";

const TO_EMAIL = "lifegix.contact@gmail.com";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const SERVICE_LABEL: Record<string, string> = {
  website: "Website bouwen",
  ai: "AI Automatisering",
  both: "Beide",
};

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  let name: string, email: string, phone: string, service: string, message: string;
  try {
    ({ name, email, phone, service, message } = await req.json());
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
  }

  const origin =
    req.headers.get("origin") ??
    process.env.NEXT_PUBLIC_BASE_URL ??
    "https://lifegix.nl";

  // Maak intake token (7 dagen geldig)
  const intakeToken = createLeadToken({ name, email, phone, service });
  const intakeUrl = `${origin}/intake?token=${intakeToken}`;

  try {
    // 1. Mail naar Hanibal
    await resend.emails.send({
      from: "Lifegix Contact <hanibal@lifegix.nl>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nieuw bericht van ${escapeHtml(name)} via Lifegix`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0f; color: #ededed; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin-bottom: 24px;">Nieuw contactformulier inzending</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #9ca3af; width: 120px;">Naam</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #a78bfa;">${escapeHtml(email)}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Telefoon</td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>` : ""}
            ${service ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Dienst</td><td style="padding: 8px 0;">${escapeHtml(SERVICE_LABEL[service] ?? service)}</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #1a1a2e; border-radius: 8px; border-left: 3px solid #7c3aed;">
            <p style="color: #9ca3af; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Bericht</p>
            <p style="margin: 0; line-height: 1.6;">${escapeHtml(message).replace(/\n/g, "<br>")}</p>
          </div>
          <div style="margin-top: 24px; padding: 16px; background: #1a1a2e; border-radius: 8px;">
            <p style="color: #9ca3af; margin: 0 0 8px 0; font-size: 12px;">Intake link (automatisch verstuurd naar klant):</p>
            <a href="${intakeUrl}" style="color: #a78bfa; word-break: break-all;">${intakeUrl}</a>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #4b5563;">Verzonden via lifegix.nl</p>
        </div>
      `,
    });

    // 2. Auto-reply naar klant met intake link
    try {
      await resend.emails.send({
        from: "Hanibal via Lifegix <hanibal@lifegix.nl>",
        to: email,
        replyTo: TO_EMAIL,
        subject: `Bedankt voor je bericht, ${escapeHtml(name)}!`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #0a0a0f; color: #ededed; border-radius: 12px;">
            <h2 style="color: #a78bfa; margin-bottom: 8px; font-size: 22px;">Bedankt voor je bericht!</h2>
            <p style="color: #9ca3af; margin: 0 0 28px 0;">Ik heb je aanvraag ontvangen en reageer binnen 24 uur persoonlijk.</p>

            <div style="padding: 20px; background: #1a1a2e; border-radius: 10px; border-left: 3px solid #7c3aed; margin-bottom: 28px;">
              <p style="color: #9ca3af; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Jouw aanvraag</p>
              <p style="margin: 0; font-weight: 600;">${service ? escapeHtml(SERVICE_LABEL[service] ?? service) : "Nader te bepalen"}</p>
            </div>

            <p style="margin-bottom: 16px; color: #d1d5db;">Terwijl je wacht: vul alvast het korte <strong style="color: #fff;">projectformulier</strong> in. Dit helpt mij jouw situatie beter begrijpen zodat ik je meteen een goede offerte kan sturen.</p>

            <a href="${intakeUrl}"
               style="display: inline-block; padding: 14px 28px; background: #7c3aed; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; margin-bottom: 24px;">
              Vul je projectformulier in →
            </a>

            <p style="font-size: 13px; color: #6b7280; margin-bottom: 4px;">Het formulier duurt ongeveer 3 minuten en is 7 dagen geldig.</p>
            <p style="font-size: 13px; color: #6b7280;">Heb je vragen? Stuur een mail naar <a href="mailto:${TO_EMAIL}" style="color: #a78bfa;">${TO_EMAIL}</a></p>

            <hr style="border: none; border-top: 1px solid #1f2937; margin: 28px 0;" />
            <p style="font-size: 12px; color: #4b5563; margin: 0;">
              Lifegix · Warnsveld<br>
              <a href="https://lifegix.nl" style="color: #6d28d9;">lifegix.nl</a>
            </p>
          </div>
        `,
      });
    } catch (replyErr) {
      console.error("Auto-reply error:", replyErr);
    }

    // 3. n8n webhook
    const ROI_MARKER = "[ROI Calculator resultaat]";
    let calculatorData: string | null = null;
    let customerMessage = message;
    if (message.startsWith(ROI_MARKER)) {
      const splitIndex = message.indexOf("\n\n");
      if (splitIndex !== -1) {
        calculatorData = message.slice(0, splitIndex).trim();
        customerMessage = message.slice(splitIndex).trim();
      } else {
        calculatorData = message.trim();
        customerMessage = "";
      }
    }

    try {
      await fetch(
        "https://hanibal-agent.app.n8n.cloud/webhook/lifegix-intake",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "contact",
            name,
            email,
            phone,
            service,
            message,
            calculatorData,
            customerMessage,
            intakeUrl,
          }),
        }
      );
    } catch (webhookErr) {
      console.error("n8n webhook error:", webhookErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Verzenden mislukt. Probeer het opnieuw." },
      { status: 500 }
    );
  }
}
