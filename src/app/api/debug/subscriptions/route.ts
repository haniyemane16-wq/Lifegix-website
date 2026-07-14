import { NextRequest, NextResponse } from "next/server";
import createMollieClient from "@mollie/api-client";
import { isValidAdminKey } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  if (!isValidAdminKey(req.headers.get("x-admin-key") ?? req.nextUrl.searchParams.get("key"))) {
    return NextResponse.json({ error: "Geen toegang" }, { status: 401 });
  }

  const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! });
  const customerId = req.nextUrl.searchParams.get("customerId");

  try {
    // Zonder customerId: alle klanten met hun abonnementen
    if (!customerId) {
      const customers = await mollie.customers.page({ limit: 50 });
      const result = [];
      for (const c of customers) {
        const subscriptions = await mollie.customerSubscriptions.page({ customerId: c.id });
        result.push({
          customerId: c.id,
          name: c.name,
          email: c.email,
          subscriptions: subscriptions.map((s) => ({
            id: s.id,
            status: s.status,
            amount: s.amount,
            interval: s.interval,
            startDate: s.startDate,
            nextPaymentDate: s.nextPaymentDate,
            description: s.description,
          })),
        });
      }
      return NextResponse.json({ customers: result });
    }

    const subscriptions = await mollie.customerSubscriptions.page({ customerId });
    const mandates = await mollie.customerMandates.page({ customerId });

    return NextResponse.json({
      customerId,
      subscriptions: subscriptions.map((s) => ({
        id: s.id,
        status: s.status,
        amount: s.amount,
        interval: s.interval,
        startDate: s.startDate,
        nextPaymentDate: s.nextPaymentDate,
        description: s.description,
      })),
      mandates: mandates.map((m) => ({
        id: m.id,
        status: m.status,
        method: m.method,
      })),
    });
  } catch (err: unknown) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// Abonnement opzeggen: DELETE met customerId + subscriptionId
export async function DELETE(req: NextRequest) {
  const key = req.headers.get("x-admin-key") ?? req.nextUrl.searchParams.get("key");
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Geen toegang" }, { status: 401 });
  }

  const customerId = req.nextUrl.searchParams.get("customerId");
  const subscriptionId = req.nextUrl.searchParams.get("subscriptionId");
  if (!customerId || !subscriptionId) {
    return NextResponse.json({ error: "customerId en subscriptionId vereist" }, { status: 400 });
  }

  const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! });
  try {
    const canceled = await mollie.customerSubscriptions.cancel(subscriptionId, { customerId });
    return NextResponse.json({ ok: true, id: canceled.id, status: canceled.status });
  } catch (err: unknown) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
