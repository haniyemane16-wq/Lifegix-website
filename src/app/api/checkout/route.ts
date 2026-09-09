import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";
import { WEBSITE_PAKKETTEN, AI_PAKKETTEN, bundelPrijs, isWebsitePakket, isAIPakket } from "@/lib/prijzen";

export const dynamic = "force-dynamic";

type Pakket = { eenmalig: number; maandelijks: number; label: string };

// Testbetalingen van €0,01 bestaan alleen buiten productie.
const TEST_PAKKETTEN: Record<string, Pakket> = process.env.NODE_ENV === "production" ? {} : {
  test:     { eenmalig: 0.01, maandelijks: 0,    label: "Testbetaling" },
  test_sub: { eenmalig: 0.01, maandelijks: 0.03, label: "Testbetaling + Abonnement" },
};

const PAKKETTEN: Record<string, Pakket> = {
  ...Object.fromEntries([...WEBSITE_PAKKETTEN, ...AI_PAKKETTEN].map((p) => [p.id, { eenmalig: p.eenmalig, maandelijks: p.maandelijks, label: p.naam }])),
  ...TEST_PAKKETTEN,
};

function berekenBundel(pakket: string, aiType: string) {
  const website = PAKKETTEN[pakket];
  const ai = PAKKETTEN[aiType];
  if (!website || !ai || !isWebsitePakket(pakket) || !isAIPakket(aiType)) return null;
  const b = bundelPrijs(website, ai);
  return { eenmalig: b.eenmalig, maandelijks: b.maandelijks, label: `${website.label} + ${ai.label}` };
}

export async function POST(req: NextRequest) {
  const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! });

  let body: {
    pakket: string;
    aiAgent: boolean;
    aiType?: string;
    naam: string;
    bedrijf: string;
    email: string;
    telefoon: string;
    iban?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  const { pakket, aiAgent, aiType, naam, bedrijf, email, telefoon, iban } = body;

  if (!pakket || !naam || !email) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
  }

  const p = PAKKETTEN[pakket];
  if (!p) return NextResponse.json({ error: "Ongeldig pakket." }, { status: 400 });

  const bundel = aiAgent && isWebsitePakket(pakket) && aiType ? berekenBundel(pakket, aiType) : null;
  const gekozenPakket = bundel ?? p;
  const eenmaligBedrag = gekozenPakket.eenmalig;
  const maandelijksBedrag = gekozenPakket.maandelijks;
  const beschrijving = gekozenPakket.label;
  const heeftAbonnement = maandelijksBedrag > 0;
  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_BASE_URL ?? "https://lifegix.nl";

  // Valideer IBAN als abonnement
  if (heeftAbonnement && !iban) {
    return NextResponse.json({ error: "IBAN is verplicht voor een maandelijks abonnement." }, { status: 400 });
  }

  try {
    const metadata = {
      naam, bedrijf, email, telefoon, pakket,
      aiAgent: String(aiAgent),
      maandelijksBedrag: String(maandelijksBedrag),
      beschrijving,
      iban: iban ?? "",
    };

    // Gewone betaling — geen sequenceType, klant kiest zelf betaalmethode
    const payment = await mollie.payments.create({
      amount: { currency: "EUR", value: eenmaligBedrag.toFixed(2) },
      description: `${beschrijving} — ${naam}${bedrijf ? ` (${bedrijf})` : ""}`,
      redirectUrl: `${origin}/bedankt`,
      webhookUrl: `${origin}/api/checkout/webhook`,
      metadata,
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
