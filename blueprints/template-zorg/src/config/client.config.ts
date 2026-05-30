/**
 * CLIENT CONFIG — Vul dit in voor elke klant
 * Dit bestand stuurt de HELE website aan.
 * Verander alleen dit bestand, niets anders.
 *
 * Geschikt voor: fysiotherapeut, tandarts, personal trainer,
 *                psycholoog, diëtist, ergotherapeut, logopedist, etc.
 */

export const clientConfig = {

  /* ─── Bedrijfsinfo ─────────────────────────────── */
  naam: "Fysiotherapie Van der Berg",
  slogan: "Terug in beweging, op jouw tempo",
  stad: "Lochem",
  adres: "Nieuweweg 34, 7241 CK Lochem",
  telefoon: "0573 251234",
  email: "info@fysiovanderberg.nl",
  kvk: "23456789",
  openingstijden: "Ma–Vr 08:00–18:00, Za op afspraak",
  bigRegistratie: "BIG-nummer: 19030012301",  // Verwijder als niet van toepassing

  /* ─── Branding ──────────────────────────────────── */
  kleur: {
    primary: "#10b981",       // Groen — vertrouwen, gezondheid
    primaryHover: "#059669",
    primaryMuted: "rgba(16, 185, 129, 0.12)",
  },

  /* ─── Hero tekst ────────────────────────────────── */
  hero: {
    badge: "Direct een afspraak plannen",
    heading: "Professionele fysiotherapie in Lochem",
    subheading:
      "Persoonlijke begeleiding bij klachten aan rug, nek, schouder en knie. Geen wachttijden. Vergoeding vanuit zorgverzekering.",
    ctaPrimary: "Plan een afspraak →",
    ctaSecondary: "Bekijk behandelingen ↓",
    tagline: "Gevestigd in Lochem · Gratis eerste consult · Zorgverzekering welkom",
  },

  /* ─── Stats ─────────────────────────────────────── */
  stats: [
    { value: "15 jr", label: "Ervaring" },
    { value: "4.9 ★", label: "Google score" },
    { value: "500+", label: "Tevreden patiënten" },
    { value: "1–3 dgn", label: "Wachttijd" },
  ],

  /* ─── Behandelingen ─────────────────────────────── */
  behandelingen: [
    {
      naam: "Rugklachten & Lage rugpijn",
      beschrijving:
        "Gerichte behandeling van acute en chronische rugklachten. Combinatie van manuele therapie, oefeningen en houdingsadvies.",
      duur: "45 min",
      vergoeding: true,
      populair: true,
    },
    {
      naam: "Nekklachten & Hoofdpijn",
      beschrijving:
        "Behandeling van nekpijn, whiplash en spanningshoofdpijn. Inclusief ergonomisch advies voor thuis en werk.",
      duur: "45 min",
      vergoeding: true,
      populair: false,
    },
    {
      naam: "Sportblessures",
      beschrijving:
        "Revalidatie na blessures aan enkel, knie, schouder of hamstring. Gericht op snel en veilig herstel.",
      duur: "45 min",
      vergoeding: true,
      populair: false,
    },
    {
      naam: "Bekkenfysiotherapie",
      beschrijving:
        "Gespecialiseerde behandeling van bekkenbodemklachten bij mannen en vrouwen. Vertrouwelijk en persoonlijk.",
      duur: "45 min",
      vergoeding: true,
      populair: false,
    },
    {
      naam: "Dry Needling",
      beschrijving:
        "Behandeling van triggerpoints met dunne naalden voor pijnverlichting bij spierklachten.",
      duur: "30 min",
      vergoeding: false,
      populair: false,
    },
    {
      naam: "Sportmassage",
      beschrijving:
        "Gerichte massage voor herstel, ontspanning en preventie van blessures. Populair bij sporters en actieve mensen.",
      duur: "30–60 min",
      vergoeding: false,
      populair: false,
    },
  ],

  /* ─── Teamleden ─────────────────────────────────── */
  team: [
    {
      naam: "Sander van der Berg",
      functie: "Fysiotherapeut & eigenaar",
      specialisatie: "Rug- en nekklachten, sportrevalidatie",
      ervaring: "15 jaar ervaring",
      foto: "/team/sander.jpg", // Vervang door echte foto
    },
    {
      naam: "Laura Jansen",
      functie: "Fysiotherapeut",
      specialisatie: "Bekkenfysiotherapie, zwangerschapsgerelateerde klachten",
      ervaring: "8 jaar ervaring",
      foto: "/team/laura.jpg",
    },
  ],

  /* ─── Werkwijze stappen ─────────────────────────── */
  werkwijze: [
    {
      nummer: "01",
      titel: "Intake & diagnose",
      beschrijving:
        "We beginnen met een uitgebreid intakegesprek. Je klacht, voorgeschiedenis en doelen worden in kaart gebracht.",
    },
    {
      nummer: "02",
      titel: "Behandelplan",
      beschrijving:
        "Op basis van de intake stellen we een persoonlijk behandelplan op. Heldere doelen, realistische tijdlijn.",
    },
    {
      nummer: "03",
      titel: "Behandeling & herstel",
      beschrijving:
        "We behandelen samen, stap voor stap. Je krijgt ook oefeningen mee voor thuis om het herstel te versnellen.",
    },
  ],

  /* ─── Testimonials ──────────────────────────────── */
  reviews: [
    {
      naam: "Peter Hendriks",
      tekst:
        "Na jaren last van mijn rug ben ik eindelijk klachtenvrij. Sander is geduldig, professioneel en denkt écht met je mee. Had dit eerder moeten doen.",
      score: 5,
      klacht: "Rugklachten",
    },
    {
      naam: "Anneke van Dijk",
      tekst:
        "Laura is een geweldige therapeut. Ze nam de tijd om alles goed uit te leggen en de behandeling hielp sneller dan ik verwacht had.",
      score: 5,
      klacht: "Bekkenfysiotherapie",
    },
    {
      naam: "Bas Vermeulen",
      tekst:
        "Knieblessure na het hardlopen. Binnen 6 weken weer volledig klachtenvrij aan het sporten. Duidelijk advies, goede begeleiding.",
      score: 5,
      klacht: "Sportblessure",
    },
  ],

  /* ─── Contact info ──────────────────────────────── */
  contact: {
    heading: "Plan een afspraak",
    subheading:
      "Stuur een bericht of bel ons. We reageren altijd binnen 24 uur en plannen je intake op korte termijn.",
    formDiensten: [
      "Rugklachten",
      "Nekklachten & hoofdpijn",
      "Sportblessure",
      "Bekkenfysiotherapie",
      "Dry Needling",
      "Sportmassage",
      "Anders / weet ik nog niet",
    ],
  },

  /* ─── Features (aan/uit) ────────────────────────── */
  features: {
    betalen: false,       // Mollie iDEAL betalingen
    chatbot: false,       // AI chat widget
    emails: true,         // Contact via Resend
    afspraken: true,      // Afspraakinvoeging systeem
    moneybird: false,     // Automatische facturen
  },

  /* ─── SEO ───────────────────────────────────────── */
  seo: {
    title: "Fysiotherapie Van der Berg — Lochem",
    description:
      "Fysiotherapeut in Lochem. Behandeling van rug-, nek-, en schouderklachten, sportblessures en bekkenfysiotherapie. Korte wachttijden, vergoed door zorgverzekering.",
    keywords: "fysiotherapeut lochem, fysiotherapie lochem, rugklachten lochem, sportblessure lochem, nekpijn lochem",
  },

};

export type ClientConfig = typeof clientConfig;
