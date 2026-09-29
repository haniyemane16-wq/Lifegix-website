import { NextRequest, NextResponse } from "next/server";
import { isValidKapsalonOwnerKey } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

// Valideert de aparte eigenaar-sleutel voor /demo/kapsalon-eigenaar.
// De sleutel zelf staat nergens in de browser-code — de client stuurt
// hem hierheen en krijgt alleen ok:true/false terug.
export async function POST(req: NextRequest) {
  let key: string | undefined;
  try {
    ({ key } = await req.json());
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  return NextResponse.json({ ok: isValidKapsalonOwnerKey(key) });
}
