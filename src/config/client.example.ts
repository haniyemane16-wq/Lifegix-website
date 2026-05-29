/**
 * CLIENT CONFIG — Vul dit in voor elke klant
 * Dit bestand stuurt de HELE website aan.
 * Verander alleen dit bestand, niets anders.
 */

export const clientConfig = {

  /* ─── Bedrijfsinfo ─────────────────────────────── */
  naam: "AutoGarage Peters",
  slogan: "Snel, eerlijk en vakkundig",
  stad: "Zutphen",
  adres: "Industrieweg 14, 7201 AA Zutphen",
  telefoon: "0575 512345",
  email: "info@garagepeter.nl",
  kvk: "12345678",
  openingstijden: "Ma–Vr 08:00–17:30, Za 09:00–13:00",

  /* ─── Branding ──────────────────────────────────── */
  kleur: {
    primary: "#e63946",       // Hoofdkleur (knoppen, accenten)
    primaryHover: "#c1121f",  // Hover state
  },

  /* ─── Diensten ──────────────────────────────────── */
  diensten: [
    {
      naam: "APK-keuring",
      beschrijving: "Volledige APK-keuring inclusief uitgebreide controle. Goedkeuring binnen 1 uur.",
      prijs: "€45",
      populair: false,
    },
    {
      naam: "Groot onderhoud",
      beschrijving: "Olie, filters, remmen, banden — alles gecontroleerd en vervangen waar nodig.",
      prijs: "€89",
      populair: true,
    },
    {
      naam: "Reparatie",
      beschrijving: "Van kleine reparaties tot motorproblemen. Eerlijke offerte vooraf, geen verrassingen.",
      prijs: "Op offerte",
      populair: false,
    },
  ],

  /* ─── Testimonials ──────────────────────────────── */
  reviews: [
    {
      naam: "Jan Smit",
      tekst: "Snel geholpen, eerlijke prijs en netjes werk. Ga hier altijd heen.",
      score: 5,
    },
    {
      naam: "Lisa de Vries",
      tekst: "APK binnen een uur klaar. Super vriendelijk personeel.",
      score: 5,
    },
  ],

  /* ─── Features (aan/uit) ────────────────────────── */
  features: {
    betalen: false,       // Mollie iDEAL betalingen
    chatbot: false,       // AI chat widget
    emails: true,         // Contact via Resend
    afspraken: false,     // Afspraaksysteem
    moneybird: false,     // Automatische facturen
  },

  /* ─── SEO ───────────────────────────────────────── */
  seo: {
    title: "AutoGarage Peters — APK, Onderhoud & Reparatie Zutphen",
    description: "Betrouwbaar autogaragebedrijf in Zutphen. APK vanaf €45, groot onderhoud, reparaties. Snel, eerlijk en vakkundig.",
    keywords: "garage zutphen, apk keuring zutphen, autoonderhoud zutphen",
  },

};

export type ClientConfig = typeof clientConfig;
