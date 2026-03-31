import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Force dynamic so Next.js never statically evaluates this route at build time
export const dynamic = "force-dynamic";

const TO_EMAIL = "haniyemane16@gmail.com";

export async function POST(req: NextRequest) {
  // Instantiate inside handler so build doesn't fail without the env var
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, service, message } = await req.json();

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
      subject: `Nieuw bericht van ${name} via Lifegix`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0f; color: #ededed; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin-bottom: 24px;">Nieuw contactformulier inzending</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #9ca3af; width: 120px;">Naam</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #a78bfa;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Telefoon</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
            ${service ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Dienst</td><td style="padding: 8px 0;">${serviceLabel[service] ?? service}</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #1a1a2e; border-radius: 8px; border-left: 3px solid #7c3aed;">
            <p style="color: #9ca3af; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Bericht</p>
            <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #4b5563;">Verzonden via lifegix.nl</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Verzenden mislukt. Probeer het opnieuw." }, { status: 500 });
  }
}
