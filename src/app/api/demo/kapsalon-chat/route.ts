import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const dynamic = "force-dynamic";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Je bent de AI-assistent van Kapsalon Davines, een lokale kapperszaak in Warnsveld. Je helpt bezoekers van de website met vragen.

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
- Als je het antwoord niet weet of de vraag gaat ergens anders over, zeg dat eerlijk en verwijs naar bellen op 0575 – 57 07 01
- Gebruik geen markdown opmaak — gewone tekst
- Dit is een demo-website van Lifegix; bij expliciete vragen daarover mag je dat vermelden`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
    }

    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: messages.slice(-10),
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json({ message: text });
  } catch (err) {
    console.error("Kapsalon chat API error:", err);
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het opnieuw." },
      { status: 500 }
    );
  }
}
