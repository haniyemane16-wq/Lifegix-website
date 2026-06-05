import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO_EMAIL = "lifegix.contact@gmail.com";
const GOOGLE_REVIEW_URL = "https://g.page/r/CQwD9ekJjstFEBM/review";

export async function POST(req: NextRequest) {
  // Simpele beveiliging
  const adminKey = req.headers.get("x-admin-key");
  if (adminKey !== process.env.NEXT_PUBLIC_ADMIN_KEY) {
    return NextResponse.json({ error: "Niet toegestaan" }, { status: 401 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let naam: string;
  let email: string;
  let pakket: string;

  try {
    const body = await req.json();
    naam = body.naam ?? "klant";
    email = body.email;
    pakket = body.pakket ?? "je pakket";
    if (!email) throw new Error("Geen e-mail");
  } catch {
    return NextResponse.json({ error: "Ongeldige invoer" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Hanibal — LifeGix <hanibal@lifegix.nl>",
      to: email,
      replyTo: TO_EMAIL,
      subject: "Hoe was je ervaring met LifeGix? ⭐",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;background:#0a0a0f;color:#ededed;border-radius:16px;">

          <h2 style="color:#a78bfa;margin:0 0 8px 0;">Je website is live — wat vind je ervan?</h2>
          <p style="color:#9ca3af;margin:0 0 24px 0;">Een paar vragen over jouw ervaring</p>

          <p>Hoi ${naam},</p>
          <p>Je website staat live en hopelijk ben je er blij mee! Ik ben een eenmanszaak en voor mij zijn eerlijke reviews heel waardevol om te groeien.</p>
          <p>Zou je <strong>1 minuutje</strong> willen nemen om een Google review achter te laten? Het helpt andere ondernemers om LifeGix te vinden.</p>

          <div style="text-align:center;margin:32px 0;">
            <a href="${GOOGLE_REVIEW_URL}"
               style="display:inline-block;background:#a78bfa;color:#0a0a0f;font-weight:700;font-size:16px;padding:14px 32px;border-radius:10px;text-decoration:none;">
              ⭐ Laat een review achter
            </a>
          </div>

          <div style="background:#1a1a2e;border-radius:10px;padding:16px;margin-bottom:24px;">
            <p style="margin:0 0 8px 0;font-weight:600;">Heb je nog feedback voor mij?</p>
            <p style="margin:0;color:#9ca3af;font-size:14px;">Stuur gerust een reply op deze mail. Ik lees alles persoonlijk en gebruik het om mijn diensten te verbeteren.</p>
          </div>

          <p style="color:#9ca3af;font-size:14px;">Bedankt voor je vertrouwen in LifeGix, ${naam}. Het was fijn om voor je te werken!</p>
          <p style="margin-top:24px;font-size:12px;color:#4b5563;">Hanibal — LifeGix · Warnsveld · <a href="https://lifegix.nl" style="color:#a78bfa;">lifegix.nl</a></p>
        </div>
      `,
    });

    console.log(`✅ Review-mail verstuurd naar ${email} (${naam})`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Review-mail error:", err);
    return NextResponse.json({ error: "Mail versturen mislukt" }, { status: 500 });
  }
}
