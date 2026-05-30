import Link from "next/link";
import ReserveringForm from "./ReserveringForm";

/* ─── Metadata ───────────────────────────────────────────── */
export const metadata = {
  title: "Restaurant De Waag — Zutphen | Demo door Lifegix",
  description:
    "Authentieke keuken in het hart van Zutphen. Geniet van verse lunch en diner op de Grote Markt. Reserveer uw tafel online.",
};

/* ─── Page ───────────────────────────────────────────────── */
export default function HorecaDemoPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0f0d] text-white">
      <RestaurantNavbar />
      <Hero />
      <Stats />
      <MenuHighlights />
      <OverOns />
      <Reviews />
      <Reserveren />
      <RestaurantFooter />

      {/* Demo badge */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-black/80 border border-white/10 text-xs text-white/50 backdrop-blur-sm pointer-events-none select-none">
        Demo door{" "}
        <span className="text-emerald-400 font-medium">Lifegix</span> — niet
        een echte website
      </div>
    </main>
  );
}

/* ─── Navbar ─────────────────────────────────────────────── */
function RestaurantNavbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-white/5 bg-[#0a0f0d]/90">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center gap-2.5 shrink-0"
          style={{ touchAction: "manipulation" }}
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shrink-0">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <span className="font-semibold text-white text-sm leading-tight hidden xs:block sm:block">
            Restaurant De Waag
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/60">
          <a
            href="#menu"
            className="hover:text-white transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            Menu
          </a>
          <a
            href="#reserveren"
            className="hover:text-white transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            Reserveren
          </a>
          <a
            href="#over-ons"
            className="hover:text-white transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            Over ons
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#reserveren"
          style={{ touchAction: "manipulation" }}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors shrink-0"
        >
          Reserveer tafel
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Elke dag vers — lunch &amp; diner
      </div>

      {/* Headline */}
      <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
        Smaak die{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
          bijblijft
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 max-w-xl text-white/50 text-lg leading-relaxed">
        Authentieke keuken in het hart van Zutphen. Restaurant De Waag
        verwelkomt u op de Grote Markt voor een onvergetelijk lunch- of
        dinerervaring — bereid met verse, lokale ingrediënten.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="#reserveren"
          style={{ touchAction: "manipulation" }}
          className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-semibold text-sm transition-colors"
          aria-label="Reserveer een tafel bij Restaurant De Waag"
        >
          Reserveer een tafel →
        </a>
        <a
          href="#menu"
          style={{ touchAction: "manipulation" }}
          className="px-7 py-3.5 rounded-xl border border-white/10 hover:border-emerald-500/30 text-white/70 hover:text-white font-medium text-sm transition-colors"
        >
          Bekijk ons menu ↓
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20">
        <span className="text-xs">scroll</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

/* ─── Stats ──────────────────────────────────────────────── */
function Stats() {
  const items = [
    {
      value: "150+",
      label: "Zitplaatsen",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      value: "Elke dag",
      label: "Vers bereid",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      value: "Lunch & Diner",
      label: "Beide services",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      value: "Hart van",
      label: "Zutphen",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/3 border border-white/6"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              {item.icon}
            </div>
            <div>
              <div className="text-xl font-bold text-white">{item.value}</div>
              <div className="text-sm text-white/50 mt-0.5">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Menu Highlights ────────────────────────────────────── */
function MenuHighlights() {
  const categories = [
    {
      name: "Voorgerechten",
      emoji: "🥗",
      items: [
        { naam: "Soep van de dag", beschrijving: "Huisgemaakt, met brood", prijs: "€ 7,50" },
        { naam: "Carpaccio", beschrijving: "Rundvlees, parmezaan, rucola", prijs: "€ 12,50" },
        { naam: "Garnalencocktail", beschrijving: "Verse garnalen, cocktailsaus", prijs: "€ 11,00" },
      ],
    },
    {
      name: "Hoofdgerechten",
      emoji: "🍽️",
      items: [
        { naam: "Zalm op de huid", beschrijving: "Groene asperges, citroenboter", prijs: "€ 22,50" },
        { naam: "Entrecôte", beschrijving: "250g Black Angus, jus, friet", prijs: "€ 28,00" },
        { naam: "Vegetarisch dagmenu", beschrijving: "Seizoensgroenten, verse pasta", prijs: "€ 18,50" },
      ],
    },
    {
      name: "Nagerechten",
      emoji: "🍮",
      items: [
        { naam: "Chocolademousse", beschrijving: "Donkere chocolade, slagroom", prijs: "€ 7,00" },
        { naam: "Crème brûlée", beschrijving: "Klassiek, met vers fruit", prijs: "€ 7,50" },
        { naam: "IJs assortiment", beschrijving: "3 bollen, naar keuze", prijs: "€ 6,00" },
      ],
    },
  ];

  return (
    <section id="menu" className="relative py-24 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-4">
            Onze specialiteiten
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Menu highlights
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            Wij werken met het beste van het seizoen. Ons menu wisselt regelmatig
            — vraag naar de dagschotel.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-white/8 bg-white/3 p-6 flex flex-col gap-1"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/8">
                <span className="text-2xl" role="img" aria-label={cat.name}>
                  {cat.emoji}
                </span>
                <h3 className="font-semibold text-white text-lg">{cat.name}</h3>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.naam}
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-white text-sm">
                        {item.naam}
                      </div>
                      <div className="text-xs text-white/40 mt-0.5 leading-snug">
                        {item.beschrijving}
                      </div>
                    </div>
                    <div className="shrink-0 text-sm font-semibold text-emerald-400 tabular-nums">
                      {item.prijs}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full menu CTA */}
        <div className="mt-10 text-center">
          <a
            href="#reserveren"
            style={{ touchAction: "manipulation" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 text-sm font-medium transition-colors"
          >
            Reserveer en geniet van ons volledige menu →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Over ons ───────────────────────────────────────────── */
function OverOns() {
  return (
    <section
      id="over-ons"
      className="relative py-24 px-6 border-t border-white/5 overflow-hidden"
    >
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-950/60 to-[#0a0f0d] border border-white/8 flex items-center justify-center overflow-hidden">
                <div className="text-center px-8">
                  <div className="text-6xl mb-4">🏛️</div>
                  <p className="text-white/40 text-sm">
                    Restaurant De Waag<br />Grote Markt 8, Zutphen
                  </p>
                </div>
                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-emerald-500/30 rounded-tl-sm" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-emerald-500/30 rounded-br-sm" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#0d1a14] border border-emerald-500/25 rounded-2xl px-5 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg">
                    ⭐
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      4.8 / 5
                    </div>
                    <div className="text-white/40 text-xs">
                      280+ beoordelingen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-5">
              Ons verhaal
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              Al meer dan 20 jaar een vaste plek op de Grote Markt
            </h2>
            <p className="mt-6 text-white/55 leading-relaxed">
              Restaurant De Waag opende zijn deuren in 2004 in het historische
              centrum van Zutphen. Wat begon als een kleine brasserie, groeide
              uit tot een begrip in de regio — bekend om de warme sfeer, de
              eerlijke keuken en het enthousiaste team.
            </p>
            <p className="mt-4 text-white/55 leading-relaxed">
              Onze chef-kok werkt dagelijks met verse ingrediënten van lokale
              leveranciers. Van een snelle zakenlunch tot een uitgebreid
              familiediner — bij De Waag voelt iedereen zich thuis.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Opgericht", value: "2004" },
                { label: "Lokale leveranciers", value: "12+" },
                { label: "Stamgasten", value: "500+" },
                { label: "Seizoensgerechten", value: "Altijd vers" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-white/3 border border-white/6"
                >
                  <div className="text-lg font-bold text-emerald-400">
                    {item.value}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Reviews ────────────────────────────────────────────── */
function Reviews() {
  const reviews = [
    {
      naam: "Marieke van den Berg",
      datum: "April 2025",
      sterren: 5,
      tekst:
        "Wat een geweldige avond! De entrecôte was perfect bereid en de bediening was attent zonder opdringerig te zijn. We komen zeker terug voor ons volgende jubileum.",
      initials: "MvB",
    },
    {
      naam: "Thomas Janssen",
      datum: "Maart 2025",
      sterren: 5,
      tekst:
        "Heerlijk gegeten op de Grote Markt. De vegetarische dagschotel overtrof alle verwachtingen — creatief, smaakvol en ruim gevuld. De locatie in het historische pand is onverslaanbaar.",
      initials: "TJ",
    },
    {
      naam: "Fatima El Amrani",
      datum: "Mei 2025",
      sterren: 4,
      tekst:
        "Gezellige sfeer en vriendelijk personeel. De crème brûlée was de beste die ik ooit heb gehad! Zeker aanrader voor wie in Zutphen eet. Kleine wachttijd, maar het was het waard.",
      initials: "FEA",
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-4">
            Wat gasten zeggen
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Beoordelingen
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.naam}
              className="rounded-2xl border border-white/8 bg-white/3 p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.sterren
                        ? "text-emerald-400"
                        : "text-white/15"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-white/65 text-sm leading-relaxed flex-1">
                &ldquo;{review.tekst}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/6">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 text-xs font-semibold shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">
                    {review.naam}
                  </div>
                  <div className="text-white/35 text-xs">{review.datum}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating summary */}
        <div className="mt-10 flex items-center justify-center gap-3 text-white/40 text-sm">
          <svg
            className="w-5 h-5 text-emerald-500/60"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
          <span>4.8 gemiddeld op basis van 280+ Google reviews</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Reserveren ─────────────────────────────────────────── */
function Reserveren() {
  return (
    <section
      id="reserveren"
      className="relative py-24 px-6 border-t border-white/5 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(16,185,129,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-4">
            Online reserveren
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Reserveer uw tafel
          </h2>
          <p className="mt-4 text-white/50">
            Reserveer eenvoudig online. We bevestigen binnen 2 uur per e-mail.
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
          <ReserveringForm />
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────── */
function RestaurantFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-white/8 bg-[#070d0a] py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="font-semibold text-white">
                Restaurant De Waag
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Authentieke keuken op de Grote Markt van Zutphen. Al meer dan 20
              jaar uw thuishaven voor lunch en diner.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Contact &amp; Adres
            </h4>
            <ul className="space-y-2.5 text-sm text-white/45">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-emerald-500/70 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Grote Markt 8<br />7201 KL Zutphen
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-emerald-500/70 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+31575123456"
                  className="hover:text-emerald-400 transition-colors"
                  style={{ touchAction: "manipulation" }}
                >
                  0575 – 12 34 56
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-emerald-500/70 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@restaurantdewaag.nl"
                  className="hover:text-emerald-400 transition-colors"
                  style={{ touchAction: "manipulation" }}
                >
                  info@restaurantdewaag.nl
                </a>
              </li>
            </ul>
          </div>

          {/* Openingstijden */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Openingstijden
            </h4>
            <ul className="space-y-2 text-sm text-white/45">
              {[
                { dag: "Ma – Di", tijd: "Gesloten" },
                { dag: "Woensdag", tijd: "12:00 – 21:00" },
                { dag: "Donderdag", tijd: "12:00 – 21:30" },
                { dag: "Vrijdag", tijd: "12:00 – 22:00" },
                { dag: "Zaterdag", tijd: "11:30 – 22:00" },
                { dag: "Zondag", tijd: "11:30 – 20:30" },
              ].map((row) => (
                <li key={row.dag} className="flex justify-between gap-4">
                  <span>{row.dag}</span>
                  <span
                    className={
                      row.tijd === "Gesloten"
                        ? "text-white/25"
                        : "text-white/65"
                    }
                  >
                    {row.tijd}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijfsgegevens */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Bedrijfsgegevens
            </h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li>KvK: 12 34 56 78</li>
              <li>BTW: NL000000000B01</li>
              <li className="pt-2">
                <a
                  href="#"
                  className="hover:text-white/60 transition-colors"
                  style={{ touchAction: "manipulation" }}
                >
                  Privacybeleid
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white/60 transition-colors"
                  style={{ touchAction: "manipulation" }}
                >
                  Algemene voorwaarden
                </a>
              </li>
            </ul>

            {/* Lifegix credit */}
            <div className="mt-6 pt-4 border-t border-white/6">
              <p className="text-xs text-white/25">
                Website door{" "}
                <Link
                  href="/"
                  className="text-emerald-500/60 hover:text-emerald-400 transition-colors font-medium"
                  style={{ touchAction: "manipulation" }}
                >
                  Lifegix
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <span>
            © {new Date().getFullYear()} Restaurant De Waag. Alle rechten
            voorbehouden.
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Vandaag open: 12:00 – 22:00
          </span>
        </div>
      </div>
    </footer>
  );
}
