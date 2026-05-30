/**
 * CLIENT CONFIG — Vul dit in voor elke klant
 * Dit bestand stuurt de HELE website aan.
 * Verander alleen dit bestand, niets anders.
 *
 * Geschikt voor: restaurant, café, bistro, bakkerij,
 *                lunchroom, ijssalon, pizzeria, etc.
 */

export const clientConfig = {

  /* ─── Bedrijfsinfo ─────────────────────────────── */
  naam: "Brasserie De Linde",
  slogan: "Waar elke maaltijd een herinnering wordt",
  stad: "Zutphen",
  adres: "Groenmarkt 8, 7201 HH Zutphen",
  telefoon: "0575 514321",
  email: "info@brasserielinde.nl",
  kvk: "45678901",
  openingstijden: "Di–Do 17:00–22:00, Vr–Za 12:00–22:30, Zo 12:00–21:00",

  /* ─── Branding ──────────────────────────────────── */
  kleur: {
    primary: "#d97706",       // Hoofdkleur — warm amber voor horeca-sfeer
    primaryHover: "#b45309",
    primaryMuted: "rgba(217, 119, 6, 0.12)",
  },

  /* ─── Hero tekst ────────────────────────────────── */
  hero: {
    badge: "Reserveringen mogelijk voor vanavond",
    heading: "Eerlijk eten, warme sfeer",
    subheading:
      "Seizoensgebonden gerechten met lokale producten. Elke avond een verse kaart, elke gast een warm welkom.",
    ctaPrimary: "Reserveer een tafel →",
    ctaSecondary: "Bekijk het menu ↓",
    tagline: "Gevestigd in Zutphen · Terras open · Kindvriendelijk",
  },

  /* ─── Stats ─────────────────────────────────────── */
  stats: [
    { value: "8 jr", label: "Open in Zutphen" },
    { value: "4.8 ★", label: "Google score" },
    { value: "100%", label: "Vers & lokaal" },
    { value: "60", label: "Stoelen beschikbaar" },
  ],

  /* ─── Menu categorieën ──────────────────────────── */
  menuCategorieen: [
    {
      naam: "Voorgerechten",
      items: [
        { naam: "Huisgemaakte soep van de dag", prijs: "€8,50", beschrijving: "Vers bereid, wisselend aanbod" },
        { naam: "Gebakken geitenkaas salade", prijs: "€11,00", beschrijving: "Met honing, walnoten en rucola" },
        { naam: "Garnalencocktail", prijs: "€12,50", beschrijving: "Met huisgemaakte cocktailsaus" },
      ],
    },
    {
      naam: "Hoofdgerechten",
      items: [
        { naam: "Ribeye van de Achterhoek", prijs: "€28,50", beschrijving: "250g, lokaal vlees, met seizoensgroente" },
        { naam: "Zalm uit de oven", prijs: "€22,00", beschrijving: "Noorse zalm met citroen-dille boter" },
        { naam: "Pasta porcini", prijs: "€17,50", beschrijving: "Verse pasta, eekhoorntjesbrood, parmezaan" },
      ],
    },
    {
      naam: "Desserts",
      items: [
        { naam: "Crème brûlée", prijs: "€8,00", beschrijving: "Klassiek, gekarameliseerde suikerkorst" },
        { naam: "Chocolade fondant", prijs: "€9,50", beschrijving: "Warm, met vanille-ijs en frambozen" },
        { naam: "Seizoensfruit sorbet", prijs: "€7,00", beschrijving: "Drie bolletjes, wisselend aanbod" },
      ],
    },
  ],

  /* ─── Sfeer highlights ──────────────────────────── */
  highlights: [
    {
      titel: "Lokale producten",
      beschrijving:
        "Wij werken samen met boerderijen en leveranciers uit de regio. Vers, eerlijk en duurzaam.",
      icoon: "🌿",
    },
    {
      titel: "Seizoenskaart",
      beschrijving:
        "Onze kaart wisselt mee met de seizoenen. Verwacht altijd het beste van het moment.",
      icoon: "🍂",
    },
    {
      titel: "Wijnadvies",
      beschrijving:
        "Onze sommelier helpt je graag bij de perfecte wijncombinatie. Van toegankelijk tot bijzonder.",
      icoon: "🍷",
    },
    {
      titel: "Private dining",
      beschrijving:
        "Onze aparte ruimte is beschikbaar voor zakelijke diners, verjaardagen en andere bijzondere avonden.",
      icoon: "🕯️",
    },
  ],

  /* ─── Reserveren info ───────────────────────────── */
  reserveren: {
    heading: "Reserveer een tafel",
    subheading:
      "Stuur een reserveringsverzoek of bel ons. We bevestigen zo snel mogelijk, altijd binnen 4 uur.",
    formDiensten: [
      "Diner (17:00–22:00)",
      "Lunch (12:00–15:00)",
      "Private dining",
      "Zakelijk diner",
      "Verjaardagsdiner",
    ],
  },

  /* ─── Testimonials ──────────────────────────────── */
  reviews: [
    {
      naam: "Jolanda Pieters",
      tekst:
        "Verjaardagsdiner voor 8 personen — alles perfect geregeld. Het personeel is attent, de wijn was perfect en het eten... heerlijk. We komen zeker terug.",
      score: 5,
      gelegenheid: "Verjaardagsdiner",
    },
    {
      naam: "Roel Dijkstra",
      tekst:
        "De ribeye was een van de beste die ik ooit heb gegeten. Lokaal vlees, perfecte bereiding. Het terras in de zomer is ook geweldig.",
      score: 5,
      gelegenheid: "Diner",
    },
    {
      naam: "Sandra Kamphuis",
      tekst:
        "Lunch met collega's hier geweest. Snelle bediening, lekkere dagschotel en een gezellige sfeer. Perfecte locatie in het centrum.",
      score: 5,
      gelegenheid: "Lunch",
    },
  ],

  /* ─── Features (aan/uit) ────────────────────────── */
  features: {
    betalen: false,       // Mollie iDEAL betalingen
    chatbot: false,       // AI chat widget
    emails: true,         // Contact via Resend
    afspraken: true,      // Reserveringssysteem
    moneybird: false,     // Automatische facturen
  },

  /* ─── SEO ───────────────────────────────────────── */
  seo: {
    title: "Brasserie De Linde — Restaurant in Zutphen",
    description:
      "Brasserie De Linde in Zutphen. Seizoensgebonden gerechten met lokale producten. Reserveer een tafel voor diner, lunch of private dining.",
    keywords: "restaurant zutphen, brasserie zutphen, diner zutphen, reserveren zutphen, lokaal eten zutphen",
  },

};

export type ClientConfig = typeof clientConfig;
