import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! });

  let id: string;
  try {
    const body = await req.text();
    const params = new URLSearchParams(body);
    id = params.get("id") ?? "";
  } catch {
    return new NextResponse(null, { status: 200 });
  }

  if (!id) return new NextResponse(null, { status: 200 });

  console.log(`Mandate webhook ontvangen: ${id}`);

  try {
    // Haal mandaat op
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mandate = await (mollie as any).mandates?.get?.(id) ?? null;
    if (!mandate) {
      console.warn(`Mandaat ${id} niet gevonden`);
      return new NextResponse(null, { status: 200 });
    }

    if (mandate.status !== "valid") {
      console.log(`Mandaat ${id} status: ${mandate.status} — overgeslagen`);
      return new NextResponse(null, { status: 200 });
    }

    const customerId = mandate.customerId;
    if (!customerId) {
      console.warn("Geen customerId op mandaat");
      return new NextResponse(null, { status: 200 });
    }

    // Haal klant op voor subscription info uit metadata
    const customer = await mollie.customers.get(customerId);
    let meta: Record<string, string> = {};
    try {
      meta = typeof customer.metadata === "string"
        ? JSON.parse(customer.metadata)
        : (customer.metadata as Record<string, string>) ?? {};
    } catch {
      console.warn("Kon metadata niet parsen");
    }

    const maandelijks = parseFloat(meta.maandelijksBedrag ?? "0");
    if (maandelijks <= 0) {
      console.log("Geen maandelijks bedrag — geen subscription aanmaken");
      return new NextResponse(null, { status: 200 });
    }

    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() + 1);
    const startDateStr = startDate.toISOString().split("T")[0];

    await mollie.customerSubscriptions.create({
      customerId,
      amount: { currency: "EUR", value: maandelijks.toFixed(2) },
      interval: "1 month",
      startDate: startDateStr,
      description: `Maandelijks abonnement — ${meta.beschrijving ?? "LifeGix"}`,
      webhookUrl: meta.webhookUrl ?? "https://lifegix.nl/api/subscription/webhook",
      metadata: JSON.stringify({ customerId, pakket: meta.pakket }),
    });

    console.log(`✅ Abonnement aangemaakt voor klant ${customerId}: €${maandelijks}/mnd`);

  } catch (err: unknown) {
    const e = err as Record<string, unknown>;
    console.error("Mandate webhook error:", JSON.stringify({
      message: e?.message ?? String(err),
      statusCode: e?.statusCode,
      detail: e?.detail,
    }));
  }

  return new NextResponse(null, { status: 200 });
}
