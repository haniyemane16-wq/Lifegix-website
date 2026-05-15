import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO_EMAIL = "haniyemane16@gmail.com";

const PAKKET_LABEL: Record<string, string> = {
  starter:  "Website Starter",
  business: "Website Business",
  aionly:   "Alleen AI Agent",
};

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

  if (!id) {
    return new NextResponse(null, { status: 200 });
  }

  let payment;
  try {
    payment = await mollie.payments.get(id);
  } catch (err) {
    console.error("Mollie get payment error:", err);
    return new NextResponse(null, { status: 200 });
  }

  if (payment.status !== "paid") {
    return new NextResponse(null, { status: 200 });
  }

  const { naam, bedrijf, email, telefoon, pakket, aiAgent } = payment.metadata as Record<string, string>;
  const pakketLabel = PAKKET_LABEL[pakket] ?? pakket;
  const aiLabel = aiAgent === "true" ? " + AI Agent (bundelkorting)" : "";
  const beschrijving = `${pakketLabel}${aiLabel}`;

  // Bevestigingsmail naar de klant
  try {
    await resend.emails.send({
      from: "Lifegix <onboarding@resend.dev>",
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
          <p style="font-size: 14px; color: #9ca3af;">Vragen? Stuur een mail naar <a href="mailto:${TO_EMAIL}" style="color: #a78bfa;">${TO_EMAIL}</a></p>
          <p style="margin-top: 24px; font-size: 12px; color: #4b5563;">Lifegix · Warnsveld</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Resend bevestigingsmail (klant) error:", err);
  }

  // Notificatie naar jou
  try {
    await resend.emails.send({
      from: "Lifegix Bestellingen <onboarding@resend.dev>",
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
    console.error("Resend notificatie (jou) error:", err);
  }

  return new NextResponse(null, { status: 200 });
}
