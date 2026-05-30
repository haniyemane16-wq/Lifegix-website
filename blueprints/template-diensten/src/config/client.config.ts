/**
 * CLIENT CONFIG — Vul dit in voor elke klant
 * Dit bestand stuurt de HELE website aan.
 * Verander alleen dit bestand, niets anders.
 *
 * Geschikt voor: kapper, garage, installateur, loodgieter,
 *                schilder, elektricien, dakdekker, etc.
 */

export const clientConfig = {

  /* ─── Bedrijfsinfo ─────────────────────────────── */
  naam: "Kapsalon Style & Co",
  slogan: "Jouw stijl, onze passie",
  stad: "Doetinchem",
  adres: "Hamburgerstraat 22, 7001 BK Doetinchem",
  telefoon: "0314 612345",
  email: "info@styleenco.nl",
  kvk: "87654321",
  openingstijden: "Di–Vr 09:00–18:00, Za 09:00–17:00",

  /* ─── Branding ──────────────────────────────────── */
  kleur: {
    primary: "#0ea5e9",       // Hoofdkleur (knoppen, accenten) — pas aan per klant
    primaryHover: "#0284c7",  // Hover state
    primaryMuted: "rgba(14, 165, 233, 0.15)", // Achtergrond accents
  },

  /* ─── Hero tekst ────────────────────────────────── */
  hero: {
    badge: "Nu beschikbaar voor nieuwe afspraken",
    heading: "Professioneel kapsel, elke keer weer",
    subheading:
      "Vakkundige kapper in het hart van Doetinchem. Knippen, kleuren, stylen — voor heren, dames en kinderen.",
    ctaPrimary: "Maak een afspraak →",
    ctaSecondary: "Bekijk diensten ↓",
    tagline: "Gevestigd in Doetinchem · Gratis parkeren · Afspraken online",
  },

  /* ─── Stats ─────────────────────────────────────── */
  stats: [
    { value: "800+", label: "Tevreden klanten" },
    { value: "12 jr", label: "Ervaring" },
    { value: "4.9 ★", label: "Google score" },
    { value: "Zelfde dag", label: "Afspraken mogelijk" },
  ],

  /* ─── Diensten ──────────────────────────────────── */
  diensten: [
    {
      naam: "Knippen & Stylen",
      beschrijving:
        "Haarknipbeurt inclusief wassen, knippen en föhnen. Voor een frisse, verzorgde look die past bij jou.",
      prijs: "Vanaf €28",
      duur: "45 min",
      populair: false,
    },
    {
      naam: "Knippen & Kleuren",
      beschrijving:
        "Volledige kleurbehandeling inclusief knipbeurt. We gebruiken hoogwaardige, haarschonende verf.",
      prijs: "Vanaf €65",
      duur: "2 uur",
      populair: true,
    },
    {
      naam: "Highlights & Balayage",
      beschrijving:
        "Natuurlijke, subtiele highlights of een uitgesproken balayage. Maatwerk voor jouw haarlengde en type.",
      prijs: "Vanaf €80",
      duur: "2,5 uur",
      populair: false,
    },
    {
      naam: "Kinderknippen",
      beschrijving:
        "Leuke knipbeurt voor kinderen tot 12 jaar. Geduldig en kindvriendelijk.",
      prijs: "€18",
      duur: "30 min",
      populair: false,
    },
  ],

  /* ─── Werkwijze stappen ─────────────────────────── */
  werkwijze: [
    {
      nummer: "01",
      titel: "Afspraak maken",
      beschrijving:
        "Plan online een afspraak op het moment dat jou uitkomt. Je ontvangt een bevestiging per e-mail.",
    },
    {
      nummer: "02",
      titel: "Welkom in de salon",
      beschrijving:
        "We bespreken jouw wensen en geven advies over wat het beste staat. Ontspan en geniet van een kop koffie.",
    },
    {
      nummer: "03",
      titel: "Resultaat garanderen",
      beschrijving:
        "Je vertrekt met een kapsel waar je écht blij van wordt. Altijd eerlijk advies over onderhoud thuis.",
    },
  ],

  /* ─── Testimonials ──────────────────────────────── */
  reviews: [
    {
      naam: "Sophie van Beek",
      tekst:
        "Eindelijk een kapper die echt luistert. Ze begreep precies wat ik wilde en het resultaat is geweldig. Ik kom hier nooit meer weg!",
      score: 5,
      dienst: "Knippen & Kleuren",
    },
    {
      naam: "Thomas Hendriksen",
      tekst:
        "Snelle afspraken, vriendelijk personeel en altijd een goed resultaat. Ideaal dat ik ook op zaterdag terecht kan.",
      score: 5,
      dienst: "Knippen & Stylen",
    },
    {
      naam: "Maria Oosterbeek",
      tekst:
        "De balayage is prachtig geworden. Heel natuurlijk maar toch opvallend. Precies wat ik zocht.",
      score: 5,
      dienst: "Highlights & Balayage",
    },
  ],

  /* ─── Contact CTA ───────────────────────────────── */
  contact: {
    heading: "Klaar voor een nieuwe look?",
    subheading:
      "Maak direct een afspraak of stuur een bericht. We reageren altijd binnen 24 uur.",
    formDiensten: ["Knippen & Stylen", "Knippen & Kleuren", "Highlights & Balayage", "Kinderknippen", "Overig"],
  },

  /* ─── Features (aan/uit) ────────────────────────── */
  features: {
    betalen: false,       // Mollie iDEAL betalingen
    chatbot: false,       // AI chat widget
    emails: true,         // Contact via Resend
    afspraken: true,      // Afspraaksysteem
    moneybird: false,     // Automatische facturen
  },

  /* ─── SEO ───────────────────────────────────────── */
  seo: {
    title: "Kapsalon Style & Co — Kapper in Doetinchem",
    description:
      "Professionele kapper in Doetinchem. Knippen, kleuren, highlights en balayage voor heren, dames en kinderen. Online afspraken maken.",
    keywords: "kapper doetinchem, kapsalon doetinchem, haarkleur doetinchem, highlights doetinchem",
  },

};

export type ClientConfig = typeof clientConfig;
