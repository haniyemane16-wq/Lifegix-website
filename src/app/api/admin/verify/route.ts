import { NextRequest, NextResponse } from "next/server";
import { isValidAdminKey } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

// Valideert een admin-sleutel server-side. De client stuurt de sleutel hierheen
// en krijgt alleen ok:true/false terug — de sleutel zelf staat nergens in de
// browser-code.
export async function POST(req: NextRequest) {
  let key: string | undefined;
  try {
    ({ key } = await req.json());
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  return NextResponse.json({ ok: isValidAdminKey(key) });
}
