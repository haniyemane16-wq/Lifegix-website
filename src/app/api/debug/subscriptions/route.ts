import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const customerId = req.nextUrl.searchParams.get("customerId");
  if (!customerId) {
    return NextResponse.json({ error: "customerId vereist" }, { status: 400 });
  }

  const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! });

  try {
    const subscriptions = await mollie.customerSubscriptions.page({ customerId });
    const mandates = await mollie.customerMandates.page({ customerId });

    return NextResponse.json({
      customerId,
      subscriptions: subscriptions.map((s: any) => ({
        id: s.id,
        status: s.status,
        amount: s.amount,
        interval: s.interval,
        startDate: s.startDate,
        nextPaymentDate: s.nextPaymentDate,
        description: s.description,
      })),
      mandates: mandates.map((m: any) => ({
        id: m.id,
        status: m.status,
        method: m.method,
        consumerAccount: m.consumerAccount,
      })),
    });
  } catch (err: unknown) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
