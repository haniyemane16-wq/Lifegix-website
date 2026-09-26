// Notion-database voor vragen die de Kapsalon Davines-chatbot niet kon
// beantwoorden. Bewust een aparte database van de echte Klanten CRM
// (NOTION_DB_ID in checkout/webhook), zodat demo-data nooit in de echte
// bedrijfsadministratie terechtkomt.
const VRAGEN_DB_ID = "fa004998-b1f9-44d1-9323-179ed498c58f";

type NotionPage = {
  id: string;
  properties: Record<string, unknown>;
};

function notionHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
  };
}

function vandaagIso() {
  return new Date().toISOString().split("T")[0];
}

/** Slaat een vraag op die de chatbot niet kon beantwoorden. Faalt stil bij ontbrekende config. */
export async function logOnbeantwoordeVraag(vraag: string) {
  const token = process.env.NOTION_API_KEY;
  if (!token) { console.warn("⚠️ NOTION_API_KEY niet ingesteld — vraag niet gelogd"); return; }

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: notionHeaders(token),
    body: JSON.stringify({
      parent: { database_id: VRAGEN_DB_ID },
      properties: {
        "Vraag": { title: [{ text: { content: vraag.slice(0, 2000) } }] },
        "Status": { select: { name: "Open" } },
        "Gesteld op": { date: { start: vandaagIso() } },
      },
    }),
  });

  if (!res.ok) {
    console.error("Notion vraag loggen mislukt:", res.status, await res.text());
  }
}

/** Haalt beantwoorde vragen op, voor gebruik als extra kennis in de chatbot-systeemprompt. */
export async function haalBeantwoordeVragen(): Promise<{ vraag: string; antwoord: string }[]> {
  const token = process.env.NOTION_API_KEY;
  if (!token) return [];

  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${VRAGEN_DB_ID}/query`, {
      method: "POST",
      headers: notionHeaders(token),
      body: JSON.stringify({
        filter: { property: "Status", select: { equals: "Beantwoord" } },
        page_size: 20,
      }),
    });
    if (!res.ok) return [];

    const data = await res.json();
    return (data.results as NotionPage[])
      .map((page) => {
        const props = page.properties as Record<string, { title?: { plain_text: string }[]; rich_text?: { plain_text: string }[] }>;
        const vraag = props["Vraag"]?.title?.[0]?.plain_text ?? "";
        const antwoord = props["Antwoord"]?.rich_text?.[0]?.plain_text ?? "";
        return { vraag, antwoord };
      })
      .filter((qa) => qa.vraag && qa.antwoord);
  } catch (err) {
    console.error("Beantwoorde vragen ophalen mislukt:", err);
    return [];
  }
}

/** Haalt open (nog niet beantwoorde) vragen op voor het eigenaar-portaal. */
export async function haalOpenVragen() {
  const token = process.env.NOTION_API_KEY;
  if (!token) throw new Error("NOTION_API_KEY niet ingesteld");

  const res = await fetch(`https://api.notion.com/v1/databases/${VRAGEN_DB_ID}/query`, {
    method: "POST",
    headers: notionHeaders(token),
    body: JSON.stringify({
      filter: { property: "Status", select: { equals: "Open" } },
      sorts: [{ property: "Gesteld op", direction: "descending" }],
      page_size: 50,
    }),
  });
  if (!res.ok) throw new Error(`Notion query mislukt: ${res.status}`);

  const data = await res.json();
  return (data.results as NotionPage[]).map((page) => {
    const props = page.properties as Record<string, { title?: { plain_text: string }[]; date?: { start: string } }>;
    return {
      id: page.id,
      vraag: props["Vraag"]?.title?.[0]?.plain_text ?? "",
      gesteldOp: props["Gesteld op"]?.date?.start ?? null,
    };
  });
}

/** Haalt de meest recent beantwoorde vragen op voor het eigenaar-portaal. */
export async function haalRecentBeantwoordVoorPortaal() {
  const token = process.env.NOTION_API_KEY;
  if (!token) throw new Error("NOTION_API_KEY niet ingesteld");

  const res = await fetch(`https://api.notion.com/v1/databases/${VRAGEN_DB_ID}/query`, {
    method: "POST",
    headers: notionHeaders(token),
    body: JSON.stringify({
      filter: { property: "Status", select: { equals: "Beantwoord" } },
      sorts: [{ property: "Beantwoord op", direction: "descending" }],
      page_size: 20,
    }),
  });
  if (!res.ok) throw new Error(`Notion query mislukt: ${res.status}`);

  const data = await res.json();
  return (data.results as NotionPage[]).map((page) => {
    const props = page.properties as Record<string, { title?: { plain_text: string }[]; rich_text?: { plain_text: string }[]; date?: { start: string } }>;
    return {
      id: page.id,
      vraag: props["Vraag"]?.title?.[0]?.plain_text ?? "",
      antwoord: props["Antwoord"]?.rich_text?.[0]?.plain_text ?? "",
      beantwoordOp: props["Beantwoord op"]?.date?.start ?? null,
    };
  });
}

/** Slaat het antwoord van de eigenaar op en markeert de vraag als beantwoord. */
export async function beantwoordVraag(pageId: string, antwoord: string) {
  const token = process.env.NOTION_API_KEY;
  if (!token) throw new Error("NOTION_API_KEY niet ingesteld");

  const res = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
    method: "PATCH",
    headers: notionHeaders(token),
    body: JSON.stringify({
      properties: {
        "Antwoord": { rich_text: [{ text: { content: antwoord.slice(0, 2000) } }] },
        "Status": { select: { name: "Beantwoord" } },
        "Beantwoord op": { date: { start: vandaagIso() } },
      },
    }),
  });
  if (!res.ok) throw new Error(`Notion update mislukt: ${res.status} ${await res.text()}`);
}
