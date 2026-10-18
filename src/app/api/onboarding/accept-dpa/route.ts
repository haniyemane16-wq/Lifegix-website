import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const NOTION_DB_ID = "fe296bbb-465c-4506-9df2-c1e92ef6c8b7";
const NOTITIES_VELD = "Notities";

function notionHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
  };
}

/**
 * Zoekt de klant-pagina in de Notion CRM op e-mailadres en voegt een regel
 * toe aan het bestaande "Notities"-veld die vastlegt dat de verwerkers-
 * overeenkomst (DPA) is geaccepteerd. Overschrijft bestaande inhoud nooit.
 *
 * Faalt bewust "zacht": als NOTION_API_KEY ontbreekt, de klant (nog) niet
 * gevonden wordt (bijv. race condition met de checkout-webhook die de
 * CRM-entry nog aanmaakt) of Notion een fout teruggeeft, wordt dit alleen
 * server-side gelogd — de klant mag hierop niet vastlopen.
 */
async function legVastDpaAcceptatie(data: { naam: string; email: string }) {
  const token = process.env.NOTION_API_KEY;
  if (!token) {
    console.warn("⚠️ NOTION_API_KEY niet ingesteld — DPA-acceptatie niet vastgelegd in Notion");
    return;
  }

  const regel = `DPA geaccepteerd op ${new Date().toISOString()} door ${data.naam} (${data.email})`;

  // Zoek de klant op e-mail
  const zoekRes = await fetch(`https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`, {
    method: "POST",
    headers: notionHeaders(token),
    body: JSON.stringify({
      filter: { property: "E-mail", email: { equals: data.email } },
    }),
  });

  if (!zoekRes.ok) {
    console.error("Notion zoeken (DPA-acceptatie) mislukt:", zoekRes.status, await zoekRes.text());
    return;
  }

  const zoekData = await zoekRes.json();
  const page = zoekData.results?.[0];
  if (!page) {
    console.warn(
      `⚠️ Notion: klant niet gevonden voor ${data.email} — DPA-acceptatie niet vastgelegd ` +
      `(mogelijk race condition met de checkout-webhook die de CRM-entry nog aanmaakt)`
    );
    return;
  }

  const bestaandeNotities: string =
    page.properties?.[NOTITIES_VELD]?.rich_text
      ?.map((t: { plain_text: string }) => t.plain_text)
      .join("") ?? "";

  const nieuweNotities = (bestaandeNotities ? `${bestaandeNotities}\n${regel}` : regel).slice(0, 2000);

  const updateRes = await fetch(`https://api.notion.com/v1/pages/${page.id}`, {
    method: "PATCH",
    headers: notionHeaders(token),
    body: JSON.stringify({
      properties: {
        [NOTITIES_VELD]: { rich_text: [{ text: { content: nieuweNotities } }] },
      },
    }),
  });

  if (!updateRes.ok) {
    console.error("Notion Notities bijwerken (DPA-acceptatie) mislukt:", updateRes.status, await updateRes.text());
  } else {
    console.log(`✅ DPA-acceptatie vastgelegd in Notion voor ${data.email}`);
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  const { naam, email, bedrijf } = body as Record<string, string>;

  if (!naam || !email || !bedrijf) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
  }

  try {
    await legVastDpaAcceptatie({ naam, email });
  } catch (err) {
    // Fail gracefully: een interne CRM-timing-issue mag de klant niet blokkeren.
    console.error("DPA-acceptatie vastleggen mislukt:", err);
  }

  return NextResponse.json({ ok: true });
}
