import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";
import { WEBSITE_PAKKETTEN, AI_PAKKETTEN, bundelPrijs, isWebsitePakket, isAIPakket } from "@/lib/prijzen";
import { isValidAdminKey } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

type Pakket = { eenmalig: number; maandelijks: number; label: string };

const PAKKETTEN: Record<string, Pakket> = Object.fromEntries(
  [...WEBSITE_PAKKETTEN, ...AI_PAKKETTEN].map((p) => [p.id, { eenmalig: p.eenmalig, maandelijks: p.maandelijks, label: p.naam }]),
);

// Testbedragen die met een geldige admin-sleutel het echte bedrag vervangen — zo kan
// Hanibal élk (ook gebundeld) pakket voor een paar cent bestellen om het volledige
// bestelproces te testen, zonder dat willekeurige bezoekers dat kunnen misbruiken.
const TEST_EENMALIG = 0.01;
const TEST_MAANDELIJKS = 0.03;

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
    referral?: string;
    adminKey?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  const { pakket, aiAgent, aiType, naam, bedrijf, email, telefoon, iban, referral, adminKey } = body;

  // Referral is bedoeld als korte referrer-code — server-side afdwingen, client-side filter is te omzeilen.
  const veiligeReferral = (referral ?? "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 40);

  if (!pakket || !naam || !email) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
  }

  const p = PAKKETTEN[pakket];
  if (!p) return NextResponse.json({ error: "Ongeldig pakket." }, { status: 400 });

  const bundel = aiAgent && isWebsitePakket(pakket) && aiType ? berekenBundel(pakket, aiType) : null;
  const gekozenPakket = bundel ?? p;
  const beschrijving = gekozenPakket.label;
  const heeftAbonnement = gekozenPakket.maandelijks > 0;
  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_BASE_URL ?? "https://lifegix.nl";

  // Testmodus: met een geldige admin-sleutel wordt het te betalen bedrag vervangen door
  // een paar cent, ongeacht welk (evt. gebundeld) pakket is gekozen. Zo kan het complete
  // bestelproces — inclusief een website+AI-bundel — getest worden zonder de echte prijs
  // te betalen. Zonder geldige sleutel verandert er niets.
  const testmodusActief = isValidAdminKey(adminKey);
  const eenmaligBedrag = testmodusActief ? TEST_EENMALIG : gekozenPakket.eenmalig;
  const maandelijksBedrag = testmodusActief ? (heeftAbonnement ? TEST_MAANDELIJKS : 0) : gekozenPakket.maandelijks;

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
      referral: veiligeReferral,
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
