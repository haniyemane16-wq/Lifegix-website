import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { isValidAdminKey } from "@/lib/adminAuth";
import { prijzenAlsTekst } from "@/lib/prijzen";

export const dynamic = "force-dynamic";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const LIFEGIX_CONTEXT = `
LifeGix is een webdesign & AI-automatiseringsbedrijf van Hanibal, gevestigd in Warnsveld, Nederland.

Diensten en prijzen (vrijgesteld van BTW):
${prijzenAlsTekst()}

Doelgroep: lokale MKB-ondernemers in Warnsveld, Zutphen en omgeving (kapper, installateur, restaurant, garage, fysiotherapeut, etc.)
USP's: persoonlijk contact, 1-2 weken doorlooptijd, ver onder bureauprijs, alles geregeld
Website: lifegix.nl
Taal: Nederlands
Tone of voice: vriendelijk, direct, lokaal, geen jargon
`;

const STRATEEG_PROMPT = `Je bent een ervaren marketingstrateeg voor LifeGix. Je taak is om een heldere strategische brief te maken voor de copywriter.

${LIFEGIX_CONTEXT}

Maak een korte brief (max 200 woorden) met:
- Doelgroep voor dit specifieke verzoek
- Kernboodschap
- Toon & stijl
- Concrete aandachtspunten voor de copywriter
- Platform-specifieke tips (als relevant)

Geef ALLEEN de brief, geen inleiding of uitleg.`;

const COPYWRITER_PROMPT = `Je bent een creatieve copywriter voor LifeGix. Je schrijft overtuigende, authentieke content voor lokale ondernemers.

${LIFEGIX_CONTEXT}

Regels:
- Schrijf altijd in het Nederlands
- Gebruik geen marketing-jargon
- Wees concreet en direct
- Verwerk de USPs van LifeGix op een natuurlijke manier
- Sluit af met een duidelijke call-to-action
- Volg de strategische brief nauwkeurig

Geef ALLEEN de content zelf, geen uitleg of toelichting.`;

const REVIEWER_PROMPT = `Je bent een kritische content-reviewer voor LifeGix. Je taak: verbeter de concept-content zodat die maximaal converteert.

${LIFEGIX_CONTEXT}

Verbeter de content op:
1. Kracht van de opening (eerste zin moet grijpen)
2. Helderheid van de boodschap
3. Overtuigingskracht (vertrouwen opwekken)
4. Call-to-action (scherp en duidelijk)
5. Toon (authentiek, niet overdreven)

Geef de VERBETERDE EINDVERSIE direct terug. Geen uitleg, geen vergelijking, alleen de finale content.`;

export async function POST(req: NextRequest) {
  try {
    const { verzoek, adminKey } = await req.json();

    if (!isValidAdminKey(adminKey)) {
      return NextResponse.json({ error: "Niet geautoriseerd." }, { status: 401 });
    }

    if (!verzoek?.trim()) {
      return NextResponse.json({ error: "Verzoek is leeg." }, { status: 400 });
    }

    // ── Agent 1: Strateeg (Sonnet — slim) ──
    const briefResponse = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 600,
      system: STRATEEG_PROMPT,
      messages: [{ role: "user", content: verzoek }],
    });
    const brief = briefResponse.content[0].type === "text" ? briefResponse.content[0].text : "";

    // ── Agent 2: Copywriter (Haiku — snel) ──
    const draftResponse = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 1500,
      system: COPYWRITER_PROMPT,
      messages: [{
        role: "user",
        content: `Strategische brief:\n${brief}\n\nVerzoek: ${verzoek}`,
      }],
    });
    const draft = draftResponse.content[0].type === "text" ? draftResponse.content[0].text : "";

    // ── Agent 3: Reviewer (Haiku — snel) ──
    const finalResponse = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 1500,
      system: REVIEWER_PROMPT,
      messages: [{
        role: "user",
        content: `Brief:\n${brief}\n\nConcept:\n${draft}`,
      }],
    });
    const final = finalResponse.content[0].type === "text" ? finalResponse.content[0].text : "";

    return NextResponse.json({ brief, draft, final });
  } catch (err) {
    console.error("Marketing agent error:", err);
    return NextResponse.json({ error: "Er ging iets mis. Probeer opnieuw." }, { status: 500 });
  }
}
