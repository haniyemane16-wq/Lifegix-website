import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { haalBeantwoordeVragen, logOnbeantwoordeVraag } from "@/lib/kapsalonVragen";

export const dynamic = "force-dynamic";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Tool-call i.p.v. een tekst-marker: het model moet expliciet kiezen om deze
// tool aan te roepen, wat veel betrouwbaarder is dan erop vertrouwen dat het
// zelf een exacte regel tekst toevoegt (dat werd in de praktijk soms gemist).
const ESCALATIE_TOOL = "meld_onbeantwoorde_vraag";

const tools: Anthropic.Tool[] = [
  {
    name: ESCALATIE_TOOL,
    description:
      "Roep dit aan wanneer de vraag van de bezoeker wél over Kapsalon Davines gaat, maar het antwoord niet in de gegeven informatie staat. Gebruik dit naast je normale tekstantwoord (waarin je dat eerlijk zegt en doorverwijst naar 0575 – 57 07 01) — niet in plaats daarvan.",
    input_schema: { type: "object", properties: {} },
  },
];

function systemPrompt(geleerdeVragen: { vraag: string; antwoord: string }[]) {
  const vandaag = new Intl.DateTimeFormat("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const geleerdBlok = geleerdeVragen.length
    ? `\n**Extra vragen die de eigenaar zelf heeft beantwoord (gebruik deze net zo goed als de rest):**\n${geleerdeVragen
        .map((qa) => `- Vraag: "${qa.vraag}" → Antwoord: ${qa.antwoord}`)
        .join("\n")}\n`
    : "";

  return `Je bent de AI-assistent van Kapsalon Davines, een lokale kapperszaak in Warnsveld. Je helpt bezoekers van de website met vragen.
${geleerdBlok}

**Vandaag is het:** ${vandaag}. Gebruik dit om vragen als "zijn jullie morgen open?" of "is het nu maandag?" correct te beantwoorden.

**Diensten & prijzen:**
- Knippen dames: €35
- Knippen heren: €25
- Knippen kinderen: €20
- Wassen, knippen & stylen: €45
- Kleuren: vanaf €65
- Föhnen / stylen: €25

**Openingstijden:**
- Maandag: gesloten
- Dinsdag t/m vrijdag: 9:00 – 18:00
- Zaterdag: 9:00 – 16:00
- Zondag: gesloten

**Locatie:** Dreiumme 11-13, 7232 CN Warnsveld, midden in winkelcentrum Dreiumme. Gratis parkeren voor de deur.

**Afspraken:** Een afspraak is verplicht, geen inloop. Maken kan telefonisch via 0575 – 57 07 01 of via deze website.

**Betalen:** Pin en contant. Geen creditcard.

**Overig:**
- Kinderen zijn van harte welkom
- Cadeaubonnen zijn verkrijgbaar aan de balie

**Gedragsrichtlijnen:**
- Antwoord kort en vriendelijk in het Nederlands (max 2–3 zinnen)
- Gebruik alleen de informatie hierboven — verzin geen diensten, prijzen of openingstijden
- Gebruik geen markdown opmaak — gewone tekst
- Dit is een demo-website van Lifegix; bij expliciete vragen daarover mag je dat vermelden
- Gaat de vraag duidelijk ergens anders over (bijv. het weer, een ander bedrijf) dan verwijs je vriendelijk door naar bellen op 0575 – 57 07 01
- Gaat de vraag wél over Kapsalon Davines (diensten, een specifieke behandeling, beleid) maar staat het antwoord niet in de informatie hierboven of hiernaast: zeg dat eerlijk, verwijs naar 0575 – 57 07 01, én roep de tool ${ESCALATIE_TOOL} aan zodat de eigenaar de vraag later kan beantwoorden`;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
    }

    const geleerdeVragen = await haalBeantwoordeVragen();

    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 300,
      system: systemPrompt(geleerdeVragen),
      messages: messages.slice(-10),
      tools,
    });

    const moetEscaleren = response.content.some(
      (block) => block.type === "tool_use" && block.name === ESCALATIE_TOOL
    );
    const ruweTekst = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();
    // Het model hoort naast de tool-call ook gewoon tekst terug te geven, maar
    // mocht dat een keer uitblijven dan tonen we geen lege chatbubbel.
    const text =
      ruweTekst ||
      (moetEscaleren
        ? "Daar heb ik op dit moment geen antwoord op. Bel ons gerust op 0575 – 57 07 01, dan helpt onze kapper je verder."
        : ruweTekst);

    if (moetEscaleren) {
      const laatsteVraag = [...messages].reverse().find((m) => m.role === "user")?.content;
      if (laatsteVraag) {
        // Bewust awaiten (niet fire-and-forget): een serverless function kan
        // stoppen zodra de response is verstuurd, waardoor een niet-afgewachte
        // Notion-call soms nooit zou voltooien.
        try {
          await logOnbeantwoordeVraag(laatsteVraag);
        } catch (err) {
          console.error("Vraag loggen naar Notion mislukt:", err);
        }
      }
    }

    return NextResponse.json({ message: text });
  } catch (err) {
    console.error("Kapsalon chat API error:", err);
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het opnieuw." },
      { status: 500 }
    );
  }
}
