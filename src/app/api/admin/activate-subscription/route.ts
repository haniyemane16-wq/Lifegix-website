import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";
import { isValidAdminKey } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (!isValidAdminKey(req.headers.get("x-admin-key"))) {
    return NextResponse.json({ error: "Geen toegang" }, { status: 401 });
  }

  const { customerId, bedrag, beschrijving } = await req.json();

  if (!customerId || !bedrag) {
    return NextResponse.json({ error: "customerId en bedrag zijn verplicht" }, { status: 400 });
  }

  const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! });

  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() + 1);

  const subscription = await mollie.customerSubscriptions.create({
    customerId,
    amount: { currency: "EUR", value: parseFloat(bedrag).toFixed(2) },
    interval: "1 month",
    startDate: startDate.toISOString().split("T")[0],
    description: beschrijving || "Maandelijks abonnement — LifeGix",
    webhookUrl: "https://lifegix.nl/api/subscription/webhook",
  });

  return NextResponse.json({
    ok: true,
    subscriptionId: subscription.id,
    startDate: startDate.toISOString().split("T")[0],
  });
}
