import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO_EMAIL = "haniyemane16@gmail.com";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  // Instantiate inside handler so build doesn't fail without the env var
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

  const serviceLabel: Record<string, string> = {
    website: "Website bouwen",
    ai: "AI Automatisering",
    both: "Beide",
  };

  try {
    await resend.emails.send({
      from: "Lifegix Contact <onboarding@resend.dev>",
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
            ${service ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Dienst</td><td style="padding: 8px 0;">${escapeHtml(serviceLabel[service] ?? service)}</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #1a1a2e; border-radius: 8px; border-left: 3px solid #7c3aed;">
            <p style="color: #9ca3af; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Bericht</p>
            <p style="margin: 0; line-height: 1.6;">${escapeHtml(message).replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #4b5563;">Verzonden via lifegix.nl</p>
        </div>
      `,
    });

    // Parse calculator data out of the message if present
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

    // Notify n8n webhook — errors are caught so the main flow is never affected
    try {
      await fetch("https://hanibal-agent.app.n8n.cloud/webhook/6ccef574-98b0-49ed-b9b6-10df0b4c6475", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message, calculatorData, customerMessage }),
      });
    } catch (webhookErr) {
      console.error("n8n webhook error:", webhookErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Verzenden mislukt. Probeer het opnieuw." }, { status: 500 });
  }
}
