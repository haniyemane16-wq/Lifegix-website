import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO_EMAIL = "lifegix.contact@gmail.com";

// Mollie valideert de webhook URL met een GET request
export async function GET() {
  return new NextResponse(null, { status: 200 });
}

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

  if (payment.status !== "paid") return new NextResponse(null, { status: 200 });

  const meta = (payment.metadata ?? {}) as Record<string, string>;
  const { naam, pakket } = meta;

  console.log(`Maandelijkse incasso ontvangen: ${naam} (${pakket}) - EUR ${payment.amount.value}`);

  try {
    await resend.emails.send({
      from: "Lifegix Bestellingen <hanibal@lifegix.nl>",
      to: TO_EMAIL,
      subject: `Maandelijkse incasso ontvangen - ${naam ?? "onbekend"}`,
      html: `<div style="font-family:sans-serif;padding:24px;background:#0a0a0f;color:#ededed;border-radius:12px;"><h2 style="color:#22c55e;">Automatische incasso geslaagd</h2><p><strong>Naam:</strong> ${naam ?? "—"}</p><p><strong>Pakket:</strong> ${pakket ?? "—"}</p><p><strong>Bedrag:</strong> EUR ${payment.amount.value}</p><p style="color:#9ca3af;font-size:13px;">Payment ID: ${id}</p></div>`,
    });
  } catch (err) {
    console.error("Subscription webhook mail error:", err);
  }

  return new NextResponse(null, { status: 200 });
}
