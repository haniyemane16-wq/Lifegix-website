import { NextRequest, NextResponse } from "next/server";
import { isValidKapsalonOwnerKey } from "@/lib/adminAuth";
import { beantwoordVraag, haalOpenVragen, haalRecentBeantwoordVoorPortaal } from "@/lib/kapsalonVragen";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  if (!isValidKapsalonOwnerKey(req.headers.get("x-admin-key"))) {
    return NextResponse.json({ error: "Geen toegang" }, { status: 401 });
  }

  try {
    const [open, beantwoord] = await Promise.all([haalOpenVragen(), haalRecentBeantwoordVoorPortaal()]);
    return NextResponse.json({ open, beantwoord });
  } catch (err) {
    console.error("Kapsalon vragen ophalen mislukt:", err);
    return NextResponse.json({ error: "Ophalen mislukt" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isValidKapsalonOwnerKey(req.headers.get("x-admin-key"))) {
    return NextResponse.json({ error: "Geen toegang" }, { status: 401 });
  }

  const { pageId, antwoord } = await req.json();
  if (!pageId || !antwoord?.trim()) {
    return NextResponse.json({ error: "pageId en antwoord zijn verplicht" }, { status: 400 });
  }

  try {
    await beantwoordVraag(pageId, antwoord.trim());
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Vraag beantwoorden mislukt:", err);
    return NextResponse.json({ error: "Opslaan mislukt" }, { status: 500 });
  }
}
