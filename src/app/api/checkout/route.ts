import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";

export const dynamic = "force-dynamic";

const PAKKETTEN: Record<string, { eenmalig: number; maandelijks: number; label: string }> = {
  starter:      { eenmalig: 500,  maandelijks: 50,  label: "Website Starter" },
  business:     { eenmalig: 1000, maandelijks: 75,  label: "Website Business" },
  ai_faq:       { eenmalig: 300,  maandelijks: 50,  label: "FAQ Chatbot" },
  ai_leads:     { eenmalig: 600,  maandelijks: 90,  label: "Leadopvolging Agent" },
  ai_afspraken: { eenmalig: 900,  maandelijks: 120, label: "Afspraakplanning Agent" },
  ai_volledig:  { eenmalig: 1500, maandelijks: 175, label: "Volledige AI Agent" },
  test:         { eenmalig: 0.01, maandelijks: 0,   label: "Testbetaling" },
  test_sub:     { eenmalig: 0.01, maandelijks: 0.01, label: "Testbetaling + Abonnement" },
};

function berekenBundel(pakket: string, aiType: string) {
  const website = PAKKETTEN[pakket];
  const ai = PAKKETTEN[aiType];
  if (!website || !ai) return null;
  return {
    eenmalig: Math.round((website.eenmalig + ai.eenmalig) * 0.8),
    maandelijks: Math.round((website.maandelijks + ai.maandelijks) * 0.8),
    label: `${website.label} + ${ai.label}`,
  };
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
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  const { pakket, aiAgent, aiType, naam, bedrijf, email, telefoon } = body;

  if (!pakket || !naam || !email) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
  }

  const p = PAKKETTEN[pakket];
  if (!p) return NextResponse.json({ error: "Ongeldig pakket." }, { status: 400 });

  const isBundle = aiAgent && (pakket === "starter" || pakket === "business") && aiType;
  const bundel = isBundle ? berekenBundel(pakket, aiType!) : null;
  const gekozenPakket = bundel ?? p;
  const eenmaligBedrag = gekozenPakket.eenmalig;
  const maandelijksBedrag = gekozenPakket.maandelijks;
  const beschrijving = gekozenPakket.label;
  const heeftAbonnement = maandelijksBedrag > 0;
  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_BASE_URL ?? "https://lifegix.nl";

  try {
    let subscriptionId: string | undefined;

    // Abonnement aanmaken VOOR de betaling — geen sequenceType nodig op de payment
    if (heeftAbonnement) {
      try {
        const customer = await mollie.customers.create({ name: naam, email });
        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() + 1);

        const sub = await mollie.customerSubscriptions.create({
          customerId: customer.id,
          amount: { currency: "EUR", value: maandelijksBedrag.toFixed(2) },
          interval: "1 month",
          startDate: startDate.toISOString().split("T")[0],
          description: `Maandelijks abonnement — ${beschrijving}`,
          webhookUrl: `${origin}/api/subscription/webhook`,
          metadata: JSON.stringify({ naam, email, pakket }),
        });
        subscriptionId = sub.id;
        console.log(`Abonnement aangemaakt: ${sub.id}`);
      } catch (subErr: unknown) {
        const e = subErr as Record<string, unknown>;
        console.error("Abonnement aanmaken mislukt:", e?.message ?? String(subErr));
      }
    }

    const metadata = {
      naam, bedrijf, email, telefoon, pakket,
      aiAgent: String(aiAgent),
      maandelijksBedrag: String(maandelijksBedrag),
      beschrijving,
      subscriptionId: subscriptionId ?? "",
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paymentParams: any = {
      amount: { currency: "EUR", value: eenmaligBedrag.toFixed(2) },
      description: `${beschrijving} — ${naam}${bedrijf ? ` (${bedrijf})` : ""}`,
      redirectUrl: `${origin}/bedankt`,
      webhookUrl: `${origin}/api/checkout/webhook`,
      metadata,
    };

    // Nu SEPA goedgekeurd: directdebit + sequenceType voor mandaat
    if (heeftAbonnement) {
      paymentParams.method = "directdebit";
      paymentParams.sequenceType = "first";
    }

    const payment = await mollie.payments.create(paymentParams);
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
