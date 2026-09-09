// Eén bron van waarheid voor alle prijzen en pakketten.
// Wordt gebruikt door de homepage, /bestellen, de checkout-API, de chatbot en de e-mails.
// Pas prijzen dus alléén hier aan.

/* ─── Oprichtingskorting ─────────────────────────────────── */
// Zet ACTIE_PLEKKEN op 0 om de actie te beëindigen.
export const ACTIE_PLEKKEN = 5;
export const ACTIE_PRIJS = 149;
export const VISITEKAARTJE_NORMAAL = 249;
export const ACTIE_ACTIEF = ACTIE_PLEKKEN > 0;

export const BUNDEL_KORTING = 0.2;

/* ─── Website pakketten ─────────────────────────────────── */
export const WEBSITE_PAKKETTEN = [
  {
    id: "visitekaartje",
    naam: "Website Visitekaartje",
    eenmalig: ACTIE_ACTIEF ? ACTIE_PRIJS : VISITEKAARTJE_NORMAAL,
    normaal: ACTIE_ACTIEF ? VISITEKAARTJE_NORMAAL : null,
    maandelijks: 25,
    desc: "Snel online met een professionele 1-pagina website. Live in 3 dagen.",
    features: ["1 pagina op maat", "Contactformulier", "Mobielvriendelijk & snel", "SSL-beveiliging", "Live in 3 dagen"],
    highlighted: false,
  },
  {
    id: "starter",
    naam: "Website Starter",
    eenmalig: 500,
    normaal: null,
    maandelijks: 50,
    desc: "Perfect voor kleine bedrijven die online zichtbaar willen worden.",
    features: ["Op maat ontworpen website", "Tot 5 pagina's", "Mobielvriendelijk & snel", "SEO-basis geoptimaliseerd", "Contactformulier", "SSL-beveiliging", "Oplevering in 1–2 weken"],
    highlighted: false,
  },
  {
    id: "business",
    naam: "Website Business",
    eenmalig: 1000,
    normaal: null,
    maandelijks: 75,
    desc: "Voor groeiende bedrijven met meer wensen en hogere ambities.",
    features: ["Op maat ontworpen website", "Onbeperkt pagina's", "Mobielvriendelijk & snel", "Uitgebreide SEO-optimalisatie", "Afspraak- of boekingssysteem", "Prioriteit support", "Oplevering in 2–3 weken"],
    highlighted: true,
  },
] as const;

/* ─── AI Agent pakketten ────────────────────────────────── */
export const AI_PAKKETTEN = [
  {
    id: "ai_faq",
    naam: "FAQ Chatbot",
    tagline: "Beantwoordt vaste vragen 24/7",
    eenmalig: 300,
    maandelijks: 50,
    features: ["Veelgestelde vragen automatisch", "Website integratie", "Doorsturen bij complexe vragen"],
    highlighted: false,
  },
  {
    id: "ai_leads",
    naam: "Leadopvolging Agent",
    tagline: "Automatische e-mail & WhatsApp opvolging",
    eenmalig: 600,
    maandelijks: 90,
    features: ["Automatische e-mail/WhatsApp opvolging", "Lead kwalificatie", "CRM-koppeling mogelijk"],
    highlighted: false,
  },
  {
    id: "ai_afspraken",
    naam: "Afspraakplanning Agent",
    tagline: "24/7 agenda management & bevestigingen",
    eenmalig: 900,
    maandelijks: 120,
    features: ["24/7 agenda management", "Automatische bevestigingen", "Google Calendar integratie"],
    highlighted: true,
  },
  {
    id: "ai_volledig",
    naam: "Volledige AI Agent",
    tagline: "Alles: chat, leads, afspraken & rapportage",
    eenmalig: 1500,
    maandelijks: 175,
    features: ["Chat + leads + afspraken", "Multi-channel (web, WhatsApp, e-mail)", "Maandelijkse rapportage", "Prioriteit support"],
    highlighted: false,
  },
] as const;

export type WebsitePakketId = (typeof WEBSITE_PAKKETTEN)[number]["id"];
export type AIPakketId = (typeof AI_PAKKETTEN)[number]["id"];

export const WEBSITE_PAKKET_IDS: readonly string[] = WEBSITE_PAKKETTEN.map((p) => p.id);
export const AI_PAKKET_IDS: readonly string[] = AI_PAKKETTEN.map((p) => p.id);

export const isWebsitePakket = (id: string | null | undefined): id is WebsitePakketId =>
  !!id && WEBSITE_PAKKET_IDS.includes(id);
export const isAIPakket = (id: string | null | undefined): id is AIPakketId =>
  !!id && AI_PAKKET_IDS.includes(id);

/* ─── Bundelprijs (website + AI agent, 20% korting) ─────── */
export function bundelPrijs(website: { eenmalig: number; maandelijks: number }, ai: { eenmalig: number; maandelijks: number }) {
  return {
    eenmalig: Math.round((website.eenmalig + ai.eenmalig) * (1 - BUNDEL_KORTING)),
    maandelijks: Math.round((website.maandelijks + ai.maandelijks) * (1 - BUNDEL_KORTING)),
    kortingEenmalig: Math.round((website.eenmalig + ai.eenmalig) * BUNDEL_KORTING),
    kortingMaandelijks: Math.round((website.maandelijks + ai.maandelijks) * BUNDEL_KORTING),
  };
}

/* ─── Handige afgeleiden ────────────────────────────────── */
export const STARTPRIJS_WEBSITE = WEBSITE_PAKKETTEN[0].eenmalig;
export const STARTPRIJS_WEBSITE_MAAND = WEBSITE_PAKKETTEN[0].maandelijks;
export const STARTPRIJS_AI = AI_PAKKETTEN[0].eenmalig;
export const STARTPRIJS_AI_MAAND = AI_PAKKETTEN[0].maandelijks;
export const STARTPRIJS_BUNDEL = bundelPrijs(WEBSITE_PAKKETTEN[0], AI_PAKKETTEN[0]).eenmalig;

export const euro = (n: number) => `€${n.toLocaleString("nl-NL")}`;

/** Prijsoverzicht als platte tekst — voor de chatbot en marketing-prompts. */
export function prijzenAlsTekst(): string {
  const web = WEBSITE_PAKKETTEN.map(
    (p) => `- ${p.naam}: ${euro(p.eenmalig)} eenmalig + ${euro(p.maandelijks)}/mnd${p.normaal ? ` (actieprijs, normaal ${euro(p.normaal)})` : ""} (${p.features.join(", ").toLowerCase()})`,
  );
  const ai = AI_PAKKETTEN.map((p) => `- ${p.naam}: ${euro(p.eenmalig)} eenmalig + ${euro(p.maandelijks)}/mnd (${p.tagline.toLowerCase()})`);
  const bundels = WEBSITE_PAKKETTEN.map((w) => {
    const b = bundelPrijs(w, AI_PAKKETTEN[0]);
    return `- ${w.naam} + FAQ Chatbot: vanaf ${euro(b.eenmalig)} eenmalig + ${euro(b.maandelijks)}/mnd`;
  });
  return [
    "Website pakketten:", ...web, "",
    "AI Agent pakketten (ook los af te nemen bij een bestaande website):", ...ai, "",
    `Bundels (website + AI agent, ${BUNDEL_KORTING * 100}% korting op beide):`, ...bundels,
  ].join("\n");
}
