import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { prijzenAlsTekst } from "@/lib/prijzen";

export const dynamic = "force-dynamic";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Je bent de vriendelijke AI-assistent van LifeGix. Je helpt bezoekers met vragen over diensten, prijzen en hoe ze kunnen beginnen.

**Over LifeGix:**
LifeGix is een webdesign & AI-automatiseringsbedrijf van Hanibal, gevestigd in Warnsveld, Nederland. Persoonlijk contact, lokale focus, betaalbare technologie.

**Prijzen:**
${prijzenAlsTekst()}
- Voorbeelden van websites: lifegix.nl/demo

**Overig:**
- Alle prijzen zijn vrijgesteld van BTW (KOR)
- Doorlooptijd: 1–2 weken na eerste gesprek
- Eerste gesprek altijd gratis en vrijblijvend
- Contact: lifegix.contact@gmail.com of 085 - 400 55 45
- Bestellen: lifegix.nl/bestellen
- KvK: 98120336, Warnsveld

**Gedragsrichtlijnen:**
- Geef korte, vriendelijke antwoorden in het Nederlands (max 3–4 zinnen)
- Verwijs bij bestellingen naar lifegix.nl/bestellen
- Verwijs bij complexe vragen naar een gratis gesprek via het contactformulier
- Gebruik geen markdown opmaak in je antwoorden — gewone tekst
- Stel bij interesse door met een gerichte vervolgvraag`;

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
      messages: messages.slice(-10), // max 10 berichten context
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json({ message: text });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het opnieuw." },
      { status: 500 }
    );
  }
}
