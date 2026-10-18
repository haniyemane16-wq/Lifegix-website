// Sub-verwerkers die in de verwerkersovereenkomst (DPA) van de onboarding-flow
// worden genoemd. Welke rijen getoond worden hangt af van het bestelde pakket —
// zie bepaalSubverwerkers() hieronder.

export type SubVerwerker = {
  naam: string;
  doel: string;
  website: string;
};

// Altijd nodig, voor elk pakket: hosting, transactionele e-mail, betalingen, facturatie.
export const ALTIJD_SUBVERWERKERS: SubVerwerker[] = [
  { naam: "Vercel Inc.", doel: "hosting", website: "vercel.com/legal/dpa" },
  { naam: "Resend", doel: "transactionele e-mails", website: "resend.com" },
  { naam: "Mollie B.V.", doel: "betalingen", website: "mollie.com" },
  { naam: "Moneybird B.V.", doel: "facturatie", website: "moneybird.com" },
];

// Alleen nodig zodra er een AI-chatassistent bij het pakket zit.
export const AI_SUBVERWERKERS: SubVerwerker[] = [
  { naam: "Anthropic, PBC", doel: "AI-chatassistent", website: "anthropic.com/legal/dpa" },
  { naam: "Notion Labs Inc.", doel: "opslag van chatbot-vragen", website: "notion.so/security" },
];

const ALLE_SUBVERWERKERS: SubVerwerker[] = [...ALTIJD_SUBVERWERKERS, ...AI_SUBVERWERKERS];

/**
 * Bepaalt welke sub-verwerkers getoond moeten worden in de DPA, op basis van
 * het (weergave-)pakket uit de `pakket`-queryparam.
 *
 * - Bevat het pakket "AI" (case-insensitive) of begint het met "Bundel" →
 *   ook de AI-sub-verwerkers (Anthropic, Notion).
 * - Begint het pakket met "Website" (en is er geen AI) → alleen de vaste vier.
 * - Ontbreekt het pakket, is het leeg, of is het een onherkend patroon →
 *   voor de zekerheid alle 6 (liever te veel vermelden dan een relevante
 *   sub-verwerker missen).
 */
export function bepaalSubverwerkers(pakket: string | null | undefined): SubVerwerker[] {
  const genormaliseerd = (pakket ?? "").trim();
  if (!genormaliseerd) return ALLE_SUBVERWERKERS;

  const lower = genormaliseerd.toLowerCase();
  const heeftAi = lower.includes("ai") || lower.startsWith("bundel");
  if (heeftAi) return ALLE_SUBVERWERKERS;

  const isHerkendWebsitePakket = lower.startsWith("website");
  if (isHerkendWebsitePakket) return ALTIJD_SUBVERWERKERS;

  // Onherkend patroon — niet zeker dat er geen AI-component bij zit, dus
  // tonen we voor de zekerheid alles.
  return ALLE_SUBVERWERKERS;
}
