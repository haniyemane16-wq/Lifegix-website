import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! });

  let body: {
    pakket: string;
    aiAgent: boolean;
    naam: string;
    bedrijf: string;
    email: string;
    telefoon: string;
    eenmaligBedrag: number;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  const { pakket, aiAgent, naam, bedrijf, email, telefoon, eenmaligBedrag } = body;

  if (!pakket || !naam || !email || !eenmaligBedrag) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_BASE_URL ?? "https://lifegix.nl";

  const pakketLabel: Record<string, string> = {
    starter: "Website Starter",
    business: "Website Business",
    aionly: "Alleen AI Agent",
  };

  const description = aiAgent
    ? `${pakketLabel[pakket] ?? pakket} + AI Agent — ${naam} (${bedrijf || email})`
    : `${pakketLabel[pakket] ?? pakket} — ${naam} (${bedrijf || email})`;

  try {
    const payment = await mollie.payments.create({
      amount: {
        currency: "EUR",
        value: eenmaligBedrag.toFixed(2),
      },
      description,
      redirectUrl: `${origin}/bedankt`,
      webhookUrl: `${origin}/api/checkout/webhook`,
      metadata: {
        naam,
        bedrijf,
        email,
        telefoon,
        pakket,
        aiAgent: String(aiAgent),
      },
    });

    return NextResponse.json({ checkoutUrl: payment.getCheckoutUrl() });
  } catch (err) {
    console.error("Mollie error:", err);
    return NextResponse.json({ error: "Betaling aanmaken mislukt." }, { status: 500 });
  }
}
