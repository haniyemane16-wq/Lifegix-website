import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO_EMAIL = "lifegix.contact@gmail.com";

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
  } catch {
    return new NextResponse(null, { status: 200 });
  }

  if (payment.status !== "paid") return new NextResponse(null, { status: 200 });

  const { naam, email, beschrijving } = (payment.metadata ?? {}) as Record<string, string>;

  // Notificatie naar Hanibal
  try {
    await resend.emails.send({
      from: "Lifegix Bestellingen <hanibal@lifegix.nl>",
      to: TO_EMAIL,
      subject: `Maandelijkse betaling ontvangen — ${naam ?? email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0f; color: #ededed; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin-bottom: 16px;">Maandelijkse betaling ontvangen</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #9ca3af; width: 120px;">Naam</td><td style="padding: 8px 0; font-weight: 600;">${naam ?? "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #a78bfa;">${email ?? "—"}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Pakket</td><td style="padding: 8px 0;">${beschrijving ?? "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Bedrag</td><td style="padding: 8px 0; font-weight: 600;">€${payment.amount.value}</td></tr>
          </table>
        </div>
      `,
    });
  } catch (err) {
    console.error("Subscription notificatie error:", err);
  }

  return new NextResponse(null, { status: 200 });
}
