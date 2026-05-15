import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";

export const dynamic = "force-dynamic";

const PAKKETTEN: Record<string, { eenmalig: number; maandelijks: number }> = {
  starter:  { eenmalig: 500,  maandelijks: 50 },
  business: { eenmalig: 1000, maandelijks: 75 },
  aionly:   { eenmalig: 300,  maandelijks: 75 },
};

const BUNDEL: Record<string, { eenmalig: number; maandelijks: number }> = {
  starter:  { eenmalig: 750,  maandelijks: 110 },
  business: { eenmalig: 1200, maandelijks: 135 },
};

function berekenBedrag(pakket: string, aiAgent: boolean): number | null {
  const p = PAKKETTEN[pakket];
  if (!p) return null;
  if (aiAgent && pakket !== "aionly") {
    return BUNDEL[pakket]?.eenmalig ?? null;
  }
  return p.eenmalig;
}

export async function POST(req: NextRequest) {
  const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! });

  let body: {
    pakket: string;
    aiAgent: boolean;
    naam: string;
    bedrijf: string;
    email: string;
    telefoon: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  const { pakket, aiAgent, naam, bedrijf, email, telefoon } = body;

  if (!pakket || !naam || !email) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
  }

  const eenmaligBedrag = berekenBedrag(pakket, aiAgent);
  if (eenmaligBedrag === null) {
    return NextResponse.json({ error: "Ongeldig pakket." }, { status: 400 });
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
  } catch (err: unknown) {
    const asAny = err as Record<string, unknown>;
    const detail = err instanceof Error
      ? `${err.message}${asAny["field"] ? ` (field: ${asAny["field"]})` : ""}`
      : String(err);
    console.error("Mollie error:", JSON.stringify(err, null, 2));
    return NextResponse.json(
      { error: `Betaling aanmaken mislukt: ${detail}` },
      { status: 500 },
    );
  }
}
