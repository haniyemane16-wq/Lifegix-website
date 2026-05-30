import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FysioFit Zutphen — Fysiotherapie op maat | Snel geholpen",
  description:
    "FysioFit Zutphen: BIG-geregistreerde fysiotherapeuten, KNGF-lid. Vergoed door alle zorgverzekeraars. Nieuwe patiënten welkom — afspraak binnen 2 dagen. 9.6 op Zorgkaart.",
};

export default function FysioFitPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <FysioNavbar />
      <FysioHero />
      <FysioTrustBar />
      <FysioStats />
      <FysioBehandelingen />
      <FysioVergoeding />
      <FysioTeam />
      <FysioReviews />
      <FysioFAQ />
      <FysioAfspraak />
      <FysioFooter />
    </main>
  );
}

/* ─── Navbar ────────────────────────────────────────────────── */
function FysioNavbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 border-b border-white/5"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/demo/zorg"
          className="flex items-center gap-2.5 flex-shrink-0"
          style={{ touchAction: "manipulation" }}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 2v14M2 9h14"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="font-bold text-white text-base leading-tight">
            FysioFit <span className="text-blue-400">Zutphen</span>
          </span>
        </Link>

        {/* Wachttijd badge — direct vertrouwen */}
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Nieuwe patiënten welkom · afspraak binnen 2 dagen
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm text-white/60">
          <a
            href="#behandelingen"
            className="hover:text-white"
            style={{ touchAction: "manipulation" }}
          >
            Behandelingen
          </a>
          <a
            href="#vergoeding"
            className="hover:text-white"
            style={{ touchAction: "manipulation" }}
          >
            Vergoeding
          </a>
          <a
            href="#team"
            className="hover:text-white"
            style={{ touchAction: "manipulation" }}
          >
            Team
          </a>
          <a
            href="#reviews"
            className="hover:text-white"
            style={{ touchAction: "manipulation" }}
          >
            Reviews
          </a>
        </nav>

        <a
          href="#afspraak"
          className="flex-shrink-0 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold"
          style={{ touchAction: "manipulation" }}
        >
          Afspraak maken
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
function FysioHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.11) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Trust badge */}
        <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          BIG-geregistreerd · KNGF-lid · Vergoed door uw zorgverzekeraar
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
          Van pijn naar{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            pijnvrij bewegen.
          </span>
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-white/55 text-lg leading-relaxed">
          Persoonlijke fysiotherapie in Zutphen door gespecialiseerde
          therapeuten. U wordt serieus genomen, persoonlijk behandeld en snel
          geholpen.
        </p>

        {/* Social proof onder de subheadline */}
        <div className="mt-6 flex items-center justify-center gap-5 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/70 text-sm font-semibold">9.6</span>
            <span className="text-white/35 text-sm">op Zorgkaart (143 reviews)</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#afspraak"
            className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-sm text-white"
            style={{ touchAction: "manipulation" }}
          >
            Direct afspraak inplannen →
          </a>
          <a
            href="tel:0575123456"
            className="px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm flex items-center gap-2"
            style={{ touchAction: "manipulation" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 2.5c0-.28.22-.5.5-.5h2.09a.5.5 0 01.49.38l.73 2.9a.5.5 0 01-.14.49L4.26 6.64c.9 1.83 2.37 3.3 4.2 4.2l.87-1.41a.5.5 0 01.49-.14l2.9.73a.5.5 0 01.38.49V12.5a.5.5 0 01-.5.5C5.38 13 1 8.62 1 3.5v-1z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            0575 – 123 456
          </a>
        </div>

        {/* Urgentie / beschikbaarheid */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/8 border border-green-500/15">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M7 1v6l3 2"
              stroke="#4ade80"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="7" cy="7" r="6" stroke="#4ade80" strokeWidth="1.3" />
          </svg>
          <p className="text-green-400 text-xs font-medium">
            Momenteel beschikbaar voor nieuwe patiënten · eerste afspraak
            gemiddeld binnen 2 werkdagen
          </p>
        </div>

        <p className="mt-8 text-white/25 text-xs">
          Deventerweg 12 · Zutphen · Ma–Vr 08:00–18:00
        </p>
      </div>
    </section>
  );
}

/* ─── Trust Bar ─────────────────────────────────────────────── */
function FysioTrustBar() {
  const items = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1l1.5 4.5H14l-3.75 2.75 1.5 4.5L8 10l-3.75 2.75 1.5-4.5L2 5.5h4.5z"
            stroke="#60a5fa"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      ),
      tekst: "BIG-geregistreerd",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" rx="3" stroke="#60a5fa" strokeWidth="1.3" />
          <path
            d="M5 8l2 2 4-3.5"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      tekst: "KNGF-lid",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 2C5.79 2 4 3.79 4 6c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
            stroke="#60a5fa"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      tekst: "AGB-geregistreerd",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="#60a5fa" strokeWidth="1.3" />
          <path
            d="M5 8l2 2 4-3"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      tekst: "Gecontracteerd door alle grote verzekeraars",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1.5l1.2 3.7H13l-3.1 2.3 1.2 3.7L8 9l-3.1 2.2 1.2-3.7L3 5.2h3.8z"
            stroke="#facc15"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      ),
      tekst: "9.6 op Zorgkaart Nederland",
      highlight: true,
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1v9M5 7l3 3 3-3"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 13h12"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      tekst: "12+ jaar ervaring",
    },
  ];

  return (
    <div className="border-y border-white/5 bg-white/[0.015] py-4 px-6 overflow-x-auto">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 flex-wrap">
        {items.map((item) => (
          <div
            key={item.tekst}
            className={`flex items-center gap-2 text-sm font-medium flex-shrink-0 ${
              item.highlight ? "text-yellow-300" : "text-white/50"
            }`}
          >
            {item.icon}
            {item.tekst}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Stats ─────────────────────────────────────────────────── */
function FysioStats() {
  const items = [
    { value: "1.400+", label: "Tevreden patiënten" },
    { value: "2 dg.", label: "Gemiddelde wachttijd" },
    { value: "9.6 / 10", label: "Score Zorgkaart NL" },
    { value: "100%", label: "Vergoed via aanvullend" },
  ];

  return (
    <div className="py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {items.map((item) => (
          <div
            key={item.label}
            className="py-6 px-4 rounded-2xl bg-white/[0.03] border border-white/7"
          >
            <p className="text-2xl sm:text-3xl font-bold text-blue-300">
              {item.value}
            </p>
            <p className="mt-1.5 text-xs text-white/40">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Behandelingen ─────────────────────────────────────────── */
function FysioBehandelingen() {
  const behandelingen = [
    {
      title: "Rugklachten",
      pijnpunt: "Pijn bij opstaan, lang zitten of bukken?",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 4v20M11 7l3-3 3 3M11 21l3 3 3-3"
            stroke="#60a5fa"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 10c1.5 1 4 1.5 6 1.5s4.5-.5 6-1.5M8 14c1.5 1 4 1.5 6 1.5s4.5-.5 6-1.5M8 18c1.5 1 4 1.5 6 1.5s4.5-.5 6-1.5"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      beschrijving:
        "Acute en chronische rugpijn, hernia, uitstraling naar het been en houdingsklachten. Onze aanpak: diagnose, gerichte behandeling én oefeningen zodat de pijn niet terugkomt.",
      vergoed: true,
    },
    {
      title: "Nekklachten & hoofdpijn",
      pijnpunt: "Last van stijve nek, duizeligheid of spanningshoofdpijn?",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="7" r="4" stroke="#60a5fa" strokeWidth="1.8" />
          <path
            d="M10 13h8l1 10H9L10 13z"
            stroke="#3b82f6"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 13v3M16 13v3"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      beschrijving:
        "Nekpijn, whiplash, uitstralende arm- of schouderpijn en chronische spanningshoofdpijn door nekklachten. We behandelen de oorzaak, niet alleen het symptoom.",
      vergoed: true,
    },
    {
      title: "Sportblessures",
      pijnpunt: "Blessure waardoor u niet kunt sporten of trainen?",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="9" stroke="#60a5fa" strokeWidth="1.8" />
          <path
            d="M10 14l3 3 5-6"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 5v3M14 20v3M5 14h3M20 14h3"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      beschrijving:
        "Spierscheuren, peesontstekingen, enkelblessures, lopers- en tennisarm. Wij behandelen u zodat u sneller terugkeert en toekomstige blessures voorkomt.",
      vergoed: true,
    },
    {
      title: "Revalidatie na operatie",
      pijnpunt: "Herstelt u van een knie-, heup- of schouderoperatie?",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M7 14h14M14 7v14"
            stroke="#60a5fa"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <rect
            x="4"
            y="4"
            width="20"
            height="20"
            rx="5"
            stroke="#3b82f6"
            strokeWidth="1.8"
          />
          <circle cx="14" cy="14" r="3" fill="#1d4ed8" opacity="0.5" />
        </svg>
      ),
      beschrijving:
        "Begeleide revalidatie na knie-, heup- of schouderprothese, kruisbandreconstructie of wervelkolomoperatie. Stap voor stap terug naar uw dagelijks leven.",
      vergoed: true,
    },
    {
      title: "Bekkenfysiotherapie",
      pijnpunt: "Bekkenklachten, incontinentie of pijn tijdens zwangerschap?",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <ellipse
            cx="14"
            cy="16"
            rx="8"
            ry="6"
            stroke="#60a5fa"
            strokeWidth="1.8"
          />
          <path
            d="M8 12c0-4 2-7 6-7s6 3 6 7"
            stroke="#3b82f6"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="14"
            y1="22"
            x2="14"
            y2="25"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="10"
            y1="23"
            x2="10"
            y2="25"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="18"
            y1="23"
            x2="18"
            y2="25"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      beschrijving:
        "Bekkenbodemklachten, urineverlies, pijn tijdens of na zwangerschap en postnataal herstel. Behandeld door onze gecertificeerde bekkenfysiotherapeut met specialistische kennis.",
      vergoed: true,
    },
    {
      title: "Droge naaldtherapie",
      pijnpunt: "Hardnekkige spierspanning of triggerpointpijn?",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <line
            x1="14"
            y1="3"
            x2="14"
            y2="23"
            stroke="#60a5fa"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M11 6l3-3 3 3"
            stroke="#3b82f6"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="14" cy="18" r="4" stroke="#3b82f6" strokeWidth="1.5" />
          <path
            d="M10 22c0 1.5 1.8 2.5 4 2.5s4-1 4-2.5"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      beschrijving:
        "Behandeling van spierspanningen en triggerpoints met dunne naalden. Effectief bij chronische pijn die niet reageert op reguliere behandelingen.",
      vergoed: false,
      opIndicatie: true,
    },
  ];

  return (
    <section id="behandelingen" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Behandelingen
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Waarbij wij u helpen
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            Herkent u de situatie? Dan kunnen wij u helpen. Alle behandelingen
            worden uitgevoerd door BIG-geregistreerde fysiotherapeuten.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {behandelingen.map((b) => (
            <div
              key={b.title}
              className="relative rounded-2xl p-6 bg-white/[0.03] border border-white/8 hover:border-blue-500/30 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                {b.icon}
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-semibold text-white">
                    {b.title}
                  </h3>
                  {b.vergoed && (
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M1.5 5l2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      vergoed
                    </span>
                  )}
                  {b.opIndicatie && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      op indicatie
                    </span>
                  )}
                </div>
                {/* Pijnpunt in italic */}
                <p className="mt-2 text-xs text-blue-300/70 italic">
                  {b.pijnpunt}
                </p>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">
                  {b.beschrijving}
                </p>
              </div>

              <a
                href="#afspraak"
                className="mt-auto text-sm text-blue-400 hover:text-blue-300 font-medium"
                style={{ touchAction: "manipulation" }}
              >
                Afspraak maken →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Vergoeding ────────────────────────────────────────────── */
function FysioVergoeding() {
  const verzekeraars = [
    "CZ",
    "Menzis",
    "VGZ",
    "Zilveren Kruis",
    "ONVZ",
    "DSW",
    "ENO",
    "Zorg & Zekerheid",
  ];

  return (
    <section id="vergoeding" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Vergoeding
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wordt mijn behandeling vergoed?
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            Vergoeding is de grootste vraag van nieuwe patiënten. Hieronder leggen
            we het helder uit — en we helpen u altijd persoonlijk.
          </p>
        </div>

        {/* Kort antwoord — meeste mensen scannen dit eerst */}
        <div className="max-w-4xl mx-auto mb-8 rounded-2xl p-5 bg-blue-600/10 border border-blue-500/25 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="#60a5fa"
                strokeWidth="1.5"
              />
              <path
                d="M10 6v4l2.5 2.5"
                stroke="#60a5fa"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">
              Kort antwoord: in de meeste gevallen wordt uw behandeling
              (gedeeltelijk) vergoed.
            </p>
            <p className="mt-1 text-white/50 text-sm">
              Met een aanvullende verzekering vergoedt uw verzekeraar 9 tot 18
              behandelingen per jaar. Wij controleren uw vergoeding gratis
              voordat we starten.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Basisverzekering */}
          <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2l2 6h6l-5 3.5 2 6L10 14l-5 3.5 2-6L2 8h6z"
                    stroke="#60a5fa"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Basisverzekering
              </h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Chronische aandoeningen worden vergoed vanuit de basisverzekering.
              Let op: deze behandelingen vallen onder uw verplicht eigen risico
              (€385 in 2026). Vanaf de 21e behandeling per aandoening geldt dit
              voor erkende chronische klachten.
            </p>
            <div className="space-y-2">
              {[
                "Chronische rugklachten (lijst chronische aandoeningen)",
                "Na heup- of knievervanging",
                "Neurologische aandoeningen (MS, Parkinson)",
                "Oncologische revalidatie",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-white/60"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path
                      d="M2 7l3 3 7-6"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Aanvullende verzekering */}
          <div className="rounded-2xl p-6 bg-blue-950/30 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="14"
                    height="14"
                    rx="3"
                    stroke="#60a5fa"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7 10l2 2 4-4"
                    stroke="#60a5fa"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Aanvullende verzekering
              </h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Met een aanvullende verzekering worden ook niet-chronische
              klachten vergoed. Afhankelijk van uw pakket worden 9 tot 18
              behandelingen vergoed. Wij zijn gecontracteerd — geen gedoe met
              declaraties.
            </p>
            <div className="space-y-2">
              {[
                "Acute rug- en nekklachten",
                "Sportblessures",
                "Schouder- en knieklachten",
                "Droge naaldtherapie (sommige pakketten)",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-white/60"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path
                      d="M2 7l3 3 7-6"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            {/* Eigen bijdrage info */}
            <div className="mt-4 pt-4 border-t border-blue-500/10">
              <p className="text-xs text-white/35 leading-relaxed">
                Niet zeker hoeveel sessies uw pakket vergoedt? Wij checken dit
                gratis voor u.{" "}
                <a
                  href="tel:0575123456"
                  className="text-blue-400 hover:text-blue-300"
                  style={{ touchAction: "manipulation" }}
                >
                  Bel 0575 – 123 456
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Verzekeraars */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-sm mb-6">
            Wij zijn gecontracteerd door onder andere:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {verzekeraars.map((v) => (
              <span
                key={v}
                className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/8 text-white/50 text-sm font-medium"
              >
                {v}
              </span>
            ))}
          </div>
          <p className="mt-6 text-white/30 text-xs max-w-md mx-auto">
            Twijfelt u? Bel ons op{" "}
            <a
              href="tel:0575123456"
              className="text-white/50 hover:text-white/70"
              style={{ touchAction: "manipulation" }}
            >
              0575 – 123 456
            </a>{" "}
            — wij zoeken uw vergoeding gratis voor u uit.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Team ──────────────────────────────────────────────────── */
function FysioTeam() {
  const therapeuten = [
    {
      naam: "Lisa van den Berg",
      functie: "Hoofd fysiotherapeut",
      specialisatie: "Rugklachten & revalidatie",
      ervaring: "12 jaar ervaring",
      quote:
        '"Ik geloof dat iedere patiënt een aanpak op maat verdient. Luisteren is de helft van de behandeling."',
      bio: "Lisa is gespecialiseerd in musculoskeletale fysiotherapie en begeleidde revalidatietrajecten na orthopedische ingrepen. Ze werkte eerder in een revalidatiecentrum en bracht die kennis mee naar FysioFit.",
      initialen: "LB",
      kleur: "from-blue-600 to-blue-800",
      kwalificaties: ["BIG-geregistreerd", "KNGF-lid", "Manueeltherapeut"],
    },
    {
      naam: "Mark Jansen",
      functie: "Sportfysiotherapeut",
      specialisatie: "Sportblessures & preventie",
      ervaring: "9 jaar · o.a. betaald voetbal",
      quote:
        '"Een blessure is ook een kans om sterker terug te komen. Ik help sporters precies dat bereiken."',
      bio: "Mark werkte jarenlang als fysiotherapeut bij betaald voetbal en begeleidt nu sporters van alle niveaus. Hij combineert bewezen behandeltechnieken met blessurepreventie.",
      initialen: "MJ",
      kleur: "from-cyan-600 to-blue-700",
      kwalificaties: [
        "BIG-geregistreerd",
        "Sportfysiotherapeut NVFS",
        "Dry needling",
      ],
    },
    {
      naam: "Sarah Kuipers",
      functie: "Bekkenfysiotherapeut",
      specialisatie: "Bekkenbodem & vrouwengezondheid",
      ervaring: "8 jaar · gespecialiseerd in bekkenzorg",
      quote:
        '"Veel vrouwen denken dat bekkenklachten erbij horen. Dat hoeft niet — en dat bewijzen we samen."',
      bio: "Sarah is gecertificeerd bekkenfysiotherapeut met een passie voor vrouwengezondheid. Ze behandelt bekkenbodemklachten, pijn tijdens zwangerschap en postnataal herstel met veel empathie.",
      initialen: "SK",
      kleur: "from-blue-500 to-indigo-700",
      kwalificaties: [
        "BIG-geregistreerd",
        "NVFB-gecertificeerd",
        "Pre- & postnatale zorg",
      ],
    },
  ];

  return (
    <section id="team" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Ons team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Uw therapeuten
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Geen onpersoonlijke kliniek. U weet bij wie u terechtkomt — en zij
            staan voor u klaar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {therapeuten.map((t) => (
            <div
              key={t.naam}
              className="rounded-2xl bg-white/[0.03] border border-white/8 overflow-hidden flex flex-col"
            >
              {/* Avatar header */}
              <div
                className={`h-28 bg-gradient-to-br ${t.kleur} flex items-center justify-center relative`}
              >
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {t.initialen}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 gap-3">
                <div>
                  <h3 className="text-lg font-bold text-white">{t.naam}</h3>
                  <p className="text-blue-400 text-sm font-medium mt-0.5">
                    {t.functie}
                  </p>
                  <p className="text-white/30 text-xs mt-0.5">{t.ervaring}</p>
                </div>

                {/* Quote — menselijke touch */}
                <p className="text-white/55 text-sm leading-relaxed italic">
                  {t.quote}
                </p>

                <p className="text-white/40 text-sm leading-relaxed">
                  {t.bio}
                </p>

                {/* Kwalificaties */}
                <div className="mt-auto pt-3 border-t border-white/5 flex flex-col gap-1.5">
                  {t.kwalificaties.map((k) => (
                    <div
                      key={k}
                      className="flex items-center gap-2 text-xs text-white/35"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l2.5 2.5 5.5-5"
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {k}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Reviews ───────────────────────────────────────────────── */
function FysioReviews() {
  const reviews = [
    {
      naam: "Petra van Dijk",
      sterren: 5,
      platform: "Zorgkaart Nederland",
      tekst:
        "Na maanden van rugpijn ben ik binnen zes behandelingen bij Lisa klachtenvrij. Ze luisterde echt, legde alles helder uit en gaf oefeningen mee die echt helpen. Dit is de beste investering die ik heb gedaan.",
      detail: "Rugklachten · 6 behandelingen",
    },
    {
      naam: "Joost Hendriksen",
      sterren: 5,
      platform: "Google",
      tekst:
        "Mark heeft me na een knieblessure fantastisch begeleid. Hij wist precies wat ik als recreatieve sporter nodig had. Nu loop ik weer mijn hardlooproutes zonder pijn. Echt aanrader!",
      detail: "Sportblessure (knie) · 8 behandelingen",
    },
    {
      naam: "Annelies de Groot",
      sterren: 5,
      platform: "Zorgkaart Nederland",
      tekst:
        "Sarah behandelde mijn bekkenbodemklachten na de bevalling met zoveel empathie en deskundigheid. Al na vier sessies voelde ik een enorm verschil. Eindelijk iemand die me serieus nam.",
      detail: "Bekkenfysiotherapie · 4 behandelingen",
    },
  ];

  return (
    <section id="reviews" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Ervaringen
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wat onze patiënten zeggen
          </h2>
          <p className="mt-4 text-white/40 text-sm">
            94% van mensen kiest een fysiotherapeut op basis van reviews.
            Dit zijn onze patiënten.
          </p>
        </div>

        {/* Score overzicht */}
        <div className="mb-12 flex items-center justify-center gap-8 flex-wrap text-center">
          <div>
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <p className="text-4xl font-bold text-blue-300">9.6</p>
              <div className="flex flex-col gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-3 h-3 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-xs text-white/40">
              Zorgkaart Nederland
              <br />
              143 beoordelingen
            </p>
          </div>
          <div className="w-px h-14 bg-white/10 hidden sm:block" />
          <div>
            <p className="text-4xl font-bold text-blue-300 mb-1">98%</p>
            <p className="text-xs text-white/40">
              Raadt ons aan
              <br />
              aan vrienden/familie
            </p>
          </div>
          <div className="w-px h-14 bg-white/10 hidden sm:block" />
          <div>
            <p className="text-4xl font-bold text-blue-300 mb-1">4.9</p>
            <p className="text-xs text-white/40">
              Google Reviews
              <br />
              87 beoordelingen
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.naam}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: r.sterren }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/25 text-xs">{r.platform}</span>
              </div>
              <p className="text-white/65 text-sm leading-relaxed flex-1">
                &ldquo;{r.tekst}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold text-sm">{r.naam}</p>
                <p className="text-white/35 text-xs mt-0.5">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────── */
function FysioFAQ() {
  const vragen = [
    {
      vraag: "Heb ik een verwijzing van de huisarts nodig?",
      antwoord:
        "Nee. U kunt rechtstreeks bij ons terecht zonder verwijzing van de huisarts. Dit heet directe toegang fysiotherapie (DTF). U belt of mailt ons en we plannen direct een afspraak.",
    },
    {
      vraag: "Wat kost een behandeling als het niet vergoed wordt?",
      antwoord:
        "Een reguliere behandeling (30 min) kost €45. Een intake met onderzoek (45 min) kost €65. Vraag altijd eerst naar uw vergoeding — in de meeste gevallen betaalt u niets of alleen eigen risico.",
    },
    {
      vraag: "Hoe snel kan ik een afspraak krijgen?",
      antwoord:
        "Wij zijn momenteel beschikbaar voor nieuwe patiënten. Gemiddeld hebben wij binnen 2 werkdagen een plekje voor u. Bij urgente klachten doen wij ons best u dezelfde of volgende dag te zien.",
    },
    {
      vraag: "Valt fysiotherapie onder mijn eigen risico?",
      antwoord:
        "Behandelingen vergoed vanuit de basisverzekering (chronische aandoeningen) vallen onder uw verplicht eigen risico van €385 per jaar. Behandelingen via uw aanvullende verzekering vallen hier buiten.",
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Veelgestelde vragen
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Alles wat u wil weten
          </h2>
        </div>

        <div className="space-y-4">
          {vragen.map((v) => (
            <div
              key={v.vraag}
              className="rounded-2xl p-6 bg-white/[0.03] border border-white/8"
            >
              <h3 className="text-white font-semibold text-base mb-2">
                {v.vraag}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {v.antwoord}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-white/30 text-sm">
          Nog een vraag?{" "}
          <a
            href="tel:0575123456"
            className="text-blue-400 hover:text-blue-300"
            style={{ touchAction: "manipulation" }}
          >
            Bel ons
          </a>{" "}
          of{" "}
          <a
            href="#afspraak"
            className="text-blue-400 hover:text-blue-300"
            style={{ touchAction: "manipulation" }}
          >
            stuur een bericht
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* ─── Afspraak maken ────────────────────────────────────────── */
function FysioAfspraak() {
  return (
    <section id="afspraak" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative">
        <div className="text-center mb-10">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Afspraak maken
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Plan uw behandeling
          </h2>
          <p className="mt-4 text-white/50">
            Vul het formulier in — wij bellen u dezelfde werkdag terug om uw
            afspraak in te plannen.
          </p>
          {/* Urgentie */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Nieuwe patiënten welkom · gemiddeld binnen 2 werkdagen geholpen
          </div>
        </div>

        <AfspraakForm />
      </div>
    </section>
  );
}

/* Client form component — inlined as a server-renderable HTML form */
function AfspraakForm() {
  const klachten = [
    "Rugklachten",
    "Nekklachten / hoofdpijn",
    "Sportblessure",
    "Revalidatie na operatie",
    "Bekkenfysiotherapie",
    "Droge naaldtherapie",
    "Anders / weet ik nog niet",
  ];

  const verzekeraars = [
    "CZ",
    "Menzis",
    "VGZ",
    "Zilveren Kruis",
    "ONVZ",
    "DSW",
    "ENO",
    "Zorg & Zekerheid",
    "Anders",
    "Weet ik niet",
  ];

  return (
    <form
      action="#"
      method="post"
      className="rounded-2xl bg-white/[0.03] border border-white/8 p-6 sm:p-8 flex flex-col gap-5"
    >
      {/* Naam */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="voornaam"
            className="text-xs font-medium text-white/50 uppercase tracking-wider"
          >
            Voornaam
          </label>
          <input
            id="voornaam"
            name="voornaam"
            type="text"
            placeholder="Jan"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
            style={{ touchAction: "manipulation" }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="achternaam"
            className="text-xs font-medium text-white/50 uppercase tracking-wider"
          >
            Achternaam
          </label>
          <input
            id="achternaam"
            name="achternaam"
            type="text"
            placeholder="de Vries"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
            style={{ touchAction: "manipulation" }}
          />
        </div>
      </div>

      {/* Telefoon — prominenter dan email (sneller terugbellen) */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="telefoon"
          className="text-xs font-medium text-white/50 uppercase tracking-wider"
        >
          Telefoonnummer{" "}
          <span className="normal-case font-normal text-white/30">
            (wij bellen u terug)
          </span>
        </label>
        <input
          id="telefoon"
          name="telefoon"
          type="tel"
          placeholder="06 12 34 56 78"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
          style={{ touchAction: "manipulation" }}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-xs font-medium text-white/50 uppercase tracking-wider"
        >
          E-mailadres
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jan@voorbeeld.nl"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
          style={{ touchAction: "manipulation" }}
        />
      </div>

      {/* Klacht */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="klacht"
          className="text-xs font-medium text-white/50 uppercase tracking-wider"
        >
          Soort klacht
        </label>
        <select
          id="klacht"
          name="klacht"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 appearance-none"
          style={{ touchAction: "manipulation" }}
          defaultValue=""
        >
          <option value="" disabled className="bg-[#0a0a0f] text-white/40">
            Selecteer uw klacht…
          </option>
          {klachten.map((k) => (
            <option key={k} value={k} className="bg-[#0f0f1a] text-white">
              {k}
            </option>
          ))}
        </select>
      </div>

      {/* Zorgverzekeraar */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="verzekeraar"
          className="text-xs font-medium text-white/50 uppercase tracking-wider"
        >
          Zorgverzekeraar{" "}
          <span className="normal-case font-normal text-white/30">
            (wij checken uw vergoeding gratis)
          </span>
        </label>
        <select
          id="verzekeraar"
          name="verzekeraar"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 appearance-none"
          style={{ touchAction: "manipulation" }}
          defaultValue=""
        >
          <option value="" disabled className="bg-[#0a0a0f] text-white/40">
            Selecteer uw verzekeraar…
          </option>
          {verzekeraars.map((v) => (
            <option key={v} value={v} className="bg-[#0f0f1a] text-white">
              {v}
            </option>
          ))}
        </select>
      </div>

      {/* Opmerkingen */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="opmerking"
          className="text-xs font-medium text-white/50 uppercase tracking-wider"
        >
          Toelichting{" "}
          <span className="normal-case font-normal">(optioneel)</span>
        </label>
        <textarea
          id="opmerking"
          name="opmerking"
          rows={3}
          placeholder="Vertel ons kort over uw klacht of stel een vraag…"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 resize-none"
          style={{ touchAction: "manipulation" }}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm"
        style={{ touchAction: "manipulation" }}
      >
        Afspraakverzoek versturen →
      </button>

      {/* Privacy tekst — verhoogt form completion */}
      <div className="flex items-start gap-2.5">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="mt-0.5 flex-shrink-0 text-white/25"
        >
          <path
            d="M7 1L2 3.5v4c0 2.8 2.1 5.4 5 6 2.9-.6 5-3.2 5-6v-4L7 1z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-white/25 text-xs leading-relaxed">
          Uw gegevens worden vertrouwelijk behandeld en uitsluitend gebruikt om
          uw afspraak in te plannen. Wij reageren binnen één werkdag.
        </p>
      </div>
    </form>
  );
}

/* ─── Footer ────────────────────────────────────────────────── */
function FysioFooter() {
  const huidigJaar = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Kolom 1 — Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M7.5 1v13M1 7.5h13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-bold text-white text-sm">
                FysioFit <span className="text-blue-400">Zutphen</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Persoonlijke fysiotherapie voor iedereen die pijnvrij wil leven
              en bewegen. BIG-geregistreerd · KNGF-lid.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-white/30">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1l1 3.5h3.5L8 6.5 9 10 6 8.5 3 10l1-3.5L1.5 4.5H5z"
                  stroke="#facc15"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-yellow-400/60 font-medium">9.6</span>
              <span>op Zorgkaart Nederland</span>
            </div>
          </div>

          {/* Kolom 2 — Contact */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-white/40">
              <p>Deventerweg 12</p>
              <p>7204 AB Zutphen</p>
              <p className="pt-1">
                <a
                  href="tel:0575123456"
                  className="hover:text-white/70"
                  style={{ touchAction: "manipulation" }}
                >
                  0575 – 123 456
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@fysiofit-zutphen.nl"
                  className="hover:text-white/70"
                  style={{ touchAction: "manipulation" }}
                >
                  info@fysiofit-zutphen.nl
                </a>
              </p>
              <p className="pt-1 text-white/30 text-xs">
                Ma–Vr 08:00–18:00
              </p>
            </div>
          </div>

          {/* Kolom 3 — Registraties */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">
              Kwaliteit & registraties
            </h4>
            <div className="space-y-2 text-sm text-white/40">
              {[
                "KvK 71234567",
                "BIG-registratie alle therapeuten",
                "KNGF-lid",
                "AGB-code 03 – 123456",
                "Klachtenregeling SKGE",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 6l2.5 2.5 5.5-5"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs">
          <span>© {huidigJaar} FysioFit Zutphen · Alle rechten voorbehouden</span>
          <span className="flex gap-4">
            <a
              href="#"
              className="hover:text-white/50"
              style={{ touchAction: "manipulation" }}
            >
              Privacyverklaring
            </a>
            <a
              href="#"
              className="hover:text-white/50"
              style={{ touchAction: "manipulation" }}
            >
              Klachtenregeling
            </a>
          </span>
        </div>

        {/* Demo banner */}
        <div className="mt-8 rounded-xl bg-white/[0.02] border border-white/5 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            Dit is een{" "}
            <span className="text-white/50 font-medium">demo website</span>{" "}
            gebouwd door Lifegix als voorbeeld voor fysiotherapiepraktijken.
          </p>
          <Link
            href="/"
            className="flex-shrink-0 px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/20 text-blue-400 text-xs font-semibold hover:bg-blue-600/30"
            style={{ touchAction: "manipulation" }}
          >
            Lifegix — Bouw mijn website →
          </Link>
        </div>
      </div>
    </footer>
  );
}
