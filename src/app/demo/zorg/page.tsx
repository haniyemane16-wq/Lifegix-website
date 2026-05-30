import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FysioFit Zutphen — Fysiotherapie op maat",
  description:
    "FysioFit Zutphen biedt persoonlijke fysiotherapie voor rugklachten, sportblessures, revalidatie en meer. Vergoed door zorgverzekeraar. Online afspraken.",
};

export default function FysioFitPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <FysioNavbar />
      <FysioHero />
      <FysioStats />
      <FysioBehandelingen />
      <FysioTeam />
      <FysioVergoeding />
      <FysioReviews />
      <FysioAfspraak />
      <FysioFooter />
    </main>
  );
}

/* ─── Navbar ────────────────────────────────────────────────── */
function FysioNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 border-b border-white/5" style={{ backdropFilter: "blur(12px)" }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/demo/zorg" className="flex items-center gap-2.5" style={{ touchAction: "manipulation" }}>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2v14M2 9h14" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-bold text-white text-base leading-tight">
            FysioFit <span className="text-blue-400">Zutphen</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/60">
          <a href="#behandelingen" className="hover:text-white" style={{ touchAction: "manipulation" }}>Behandelingen</a>
          <a href="#team" className="hover:text-white" style={{ touchAction: "manipulation" }}>Team</a>
          <a href="#vergoeding" className="hover:text-white" style={{ touchAction: "manipulation" }}>Vergoeding</a>
          <a href="#contact" className="hover:text-white" style={{ touchAction: "manipulation" }}>Contact</a>
        </nav>

        <a
          href="#afspraak"
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold"
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
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Vergoed door alle zorgverzekeraars
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
          Beweeg pijnvrij.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Leef beter.
          </span>
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
          Persoonlijke fysiotherapie in Zutphen. Onze specialisten behandelen uw klachten met bewezen methoden — snel, effectief en op maat.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#afspraak"
            className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-sm text-white"
            style={{ touchAction: "manipulation" }}
          >
            Direct een afspraak inplannen →
          </a>
          <a
            href="#behandelingen"
            className="px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm"
            style={{ touchAction: "manipulation" }}
          >
            Bekijk alle behandelingen ↓
          </a>
        </div>

        <p className="mt-12 text-white/25 text-xs">
          Deventerweg 12 · Zutphen · BIG-geregistreerde therapeuten · Ma–Vr 08:00–18:00
        </p>
      </div>
    </section>
  );
}

/* ─── Stats ─────────────────────────────────────────────────── */
function FysioStats() {
  const items = [
    { value: "1.200+", label: "Behandelde patiënten" },
    { value: "3", label: "Specialisten" },
    { value: "Vergoed", label: "Door zorgverzekeraar" },
    { value: "Online", label: "Afspraken inplannen" },
  ];

  return (
    <div className="border-y border-white/5 bg-white/[0.02] py-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-2xl font-bold text-blue-300">{item.value}</p>
            <p className="mt-1 text-xs text-white/40">{item.label}</p>
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
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4v20M11 7l3-3 3 3M11 21l3 3 3-3" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10c1.5 1 4 1.5 6 1.5s4.5-.5 6-1.5M8 14c1.5 1 4 1.5 6 1.5s4.5-.5 6-1.5M8 18c1.5 1 4 1.5 6 1.5s4.5-.5 6-1.5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      beschrijving: "Behandeling van acute en chronische rugpijn, hernia en houdingsklachten.",
      vergoed: true,
    },
    {
      title: "Nekklachten",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="7" r="4" stroke="#60a5fa" strokeWidth="1.8"/>
          <path d="M10 13h8l1 10H9L10 13z" stroke="#3b82f6" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M12 13v3M16 13v3" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      beschrijving: "Nekpijn, whiplash, hoofdpijn door nekklachten en spierspanning.",
      vergoed: true,
    },
    {
      title: "Sportblessures",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="9" stroke="#60a5fa" strokeWidth="1.8"/>
          <path d="M10 14l3 3 5-6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 5v3M14 20v3M5 14h3M20 14h3" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      beschrijving: "Spierscheuren, peesontstekingen, enkelblessures en knieproblemen.",
      vergoed: true,
    },
    {
      title: "Revalidatie na operatie",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M7 14h14M14 7v14" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round"/>
          <rect x="4" y="4" width="20" height="20" rx="5" stroke="#3b82f6" strokeWidth="1.8"/>
          <circle cx="14" cy="14" r="3" fill="#1d4ed8" opacity="0.4"/>
        </svg>
      ),
      beschrijving: "Herstel na knie-, heup- of schouderoperatie met begeleide oefentherapie.",
      vergoed: true,
    },
    {
      title: "Bekkenfysiotherapie",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <ellipse cx="14" cy="16" rx="8" ry="6" stroke="#60a5fa" strokeWidth="1.8"/>
          <path d="M8 12c0-4 2-7 6-7s6 3 6 7" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="14" y1="22" x2="14" y2="25" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="10" y1="23" x2="10" y2="25" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="18" y1="23" x2="18" y2="25" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      beschrijving: "Bekkenbodemklachten, incontinentie, pijn tijdens zwangerschap en na de bevalling.",
      vergoed: true,
    },
    {
      title: "Droge naaldtherapie",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <line x1="14" y1="3" x2="14" y2="23" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M11 6l3-3 3 3" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="14" cy="18" r="4" stroke="#3b82f6" strokeWidth="1.5"/>
          <path d="M10 22c0 1.5 1.8 2.5 4 2.5s4-1 4-2.5" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      beschrijving: "Behandeling van spierspanningen en triggerpoints met dunne naalden.",
      vergoed: false,
      opIndicatie: true,
    },
  ];

  return (
    <section id="behandelingen" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Behandelingen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Waar wij u bij helpen</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Alle behandelingen worden uitgevoerd door BIG-geregistreerde fysiotherapeuten.
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
                  <h3 className="text-base font-semibold text-white">{b.title}</h3>
                  {b.vergoed && (
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{b.beschrijving}</p>
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

/* ─── Team ──────────────────────────────────────────────────── */
function FysioTeam() {
  const therapeuten = [
    {
      naam: "Lisa van den Berg",
      functie: "Hoofd fysiotherapeut",
      specialisatie: "Rugklachten & revalidatie",
      bio: "Lisa heeft 12 jaar ervaring in musculoskeletale fysiotherapie. Ze is gespecialiseerd in rugklachten en begeleidde revalidatietrajecten na orthopedische ingrepen.",
      initialen: "LB",
      kleur: "from-blue-600 to-blue-800",
    },
    {
      naam: "Mark Jansen",
      functie: "Sportfysiotherapeut",
      specialisatie: "Sportblessures & preventie",
      bio: "Mark werkte jarenlang als fysiotherapeut bij betaald voetbal en begeleidt nu sporters van alle niveaus. Zijn aanpak combineert behandeling met blessurepreventie.",
      initialen: "MJ",
      kleur: "from-cyan-600 to-blue-700",
    },
    {
      naam: "Sarah Kuipers",
      functie: "Bekkenfysiotherapeut",
      specialisatie: "Bekkenbodem & zwangerschap",
      bio: "Sarah is gecertificeerd bekkenfysiotherapeut met een passie voor vrouwengezondheid. Ze behandelt bekkenbodemklachten, pijn tijdens zwangerschap en postnataal herstel.",
      initialen: "SK",
      kleur: "from-blue-500 to-indigo-700",
    },
  ];

  return (
    <section id="team" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Ons team</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Uw therapeuten</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            BIG-geregistreerd, gespecialiseerd en persoonlijk betrokken bij uw herstel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {therapeuten.map((t) => (
            <div
              key={t.naam}
              className="rounded-2xl bg-white/[0.03] border border-white/8 overflow-hidden"
            >
              {/* Avatar header */}
              <div className={`h-32 bg-gradient-to-br ${t.kleur} flex items-center justify-center relative`}>
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{t.initialen}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white">{t.naam}</h3>
                <p className="text-blue-400 text-sm font-medium mt-0.5">{t.functie}</p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/15">
                  <span className="text-xs text-blue-300">{t.specialisatie}</span>
                </div>
                <p className="mt-4 text-white/50 text-sm leading-relaxed">{t.bio}</p>

                <div className="mt-5 flex items-center gap-2 text-xs text-white/30">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9 2.5 10.5 3 7 .5 4.5 4 4z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                  </svg>
                  BIG-geregistreerd
                </div>
              </div>
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
    "CZ", "Menzis", "VGZ", "Zilveren Kruis", "ONVZ", "DSW", "ENO", "Zorg & Zekerheid",
  ];

  return (
    <section id="vergoeding" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Vergoeding</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Wordt mijn behandeling vergoed?</h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            In de meeste gevallen is fysiotherapie (gedeeltelijk) vergoed. We leggen het u graag uit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Basisverzekering */}
          <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/8">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2l2 6h6l-5 3.5 2 6L10 14l-5 3.5 2-6L2 8h6z" stroke="#60a5fa" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Basisverzekering</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Chronische aandoeningen worden vergoed vanuit de basisverzekering, maar vallen wel onder uw eigen risico. Vanaf de 21ste behandeling vergoedt de basisverzekering behandelingen voor een groot aantal chronische aandoeningen.
            </p>
            <div className="space-y-2">
              {["Chronische rugklachten (lijst)", "Na heup-/knievervanging", "Neurologische aandoeningen", "Oncologische revalidatie"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3 3 7-6" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Aanvullende verzekering */}
          <div className="rounded-2xl p-6 bg-blue-950/30 border border-blue-500/20">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="3" width="14" height="14" rx="3" stroke="#60a5fa" strokeWidth="1.5"/>
                <path d="M7 10l2 2 4-4" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Aanvullende verzekering</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Met een aanvullende verzekering worden ook niet-chronische klachten vergoed. Hoeveel sessies precies vergoed worden hangt af van uw pakket. Wij controleren dit graag voor u.
            </p>
            <div className="space-y-2">
              {["Acute rugklachten", "Sportblessures", "Nekklachten", "Droge naaldtherapie (sommige pakketten)"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3 3 7-6" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verzekeraars */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-sm mb-6">Wij zijn gecontracteerd door onder andere:</p>
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
            Twijfelt u of uw behandeling vergoed wordt? Bel ons op <span className="text-white/50">0575 – 123 456</span> of stuur een e-mail. We helpen u graag met de uitzoekwerk.
          </p>
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
      tekst: "Na maanden van rugpijn ben ik binnen zes behandelingen bij Lisa van den Berg klachtenvrij. Ze luisterde goed, legde alles helder uit en gaf oefeningen mee die echt helpen. Aanrader!",
      detail: "Behandeling: Rugklachten",
    },
    {
      naam: "Joost Hendriksen",
      sterren: 5,
      tekst: "Mark heeft me na een knieblessure fantastisch begeleid. Hij wist precies wat ik nodig had als recreatieve sporter en hield me gemotiveerd. Nu loop ik weer zonder pijn mijn hardlooproutes.",
      detail: "Behandeling: Sportblessure",
    },
    {
      naam: "Annelies de Groot",
      sterren: 5,
      tekst: "Sarah is geweldig in haar vakgebied. Ze behandelde mijn bekkenbodemklachten na de bevalling met veel empathie en deskundigheid. Al na vier sessies voelde ik een enorm verschil.",
      detail: "Behandeling: Bekkenfysiotherapie",
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Ervaringen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Wat onze patiënten zeggen</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.naam}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: r.sterren }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed flex-1">&ldquo;{r.tekst}&rdquo;</p>
              <div>
                <p className="text-white font-semibold text-sm">{r.naam}</p>
                <p className="text-white/40 text-xs mt-0.5">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-300">9.4</p>
            <p className="text-xs text-white/40 mt-1">Gemiddeld cijfer</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <p className="text-3xl font-bold text-blue-300">127</p>
            <p className="text-xs text-white/40 mt-1">Beoordelingen</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <p className="text-3xl font-bold text-blue-300">98%</p>
            <p className="text-xs text-white/40 mt-1">Raadt ons aan</p>
          </div>
        </div>
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
          style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Afspraak maken</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Plan uw behandeling</h2>
          <p className="mt-4 text-white/50">
            Vul het formulier in en wij nemen binnen één werkdag contact met u op om een afspraak in te plannen.
          </p>
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
    "Nekklachten",
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
    "Geen / onbekend",
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
          <label htmlFor="voornaam" className="text-xs font-medium text-white/50 uppercase tracking-wider">
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
          <label htmlFor="achternaam" className="text-xs font-medium text-white/50 uppercase tracking-wider">
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

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-medium text-white/50 uppercase tracking-wider">
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

      {/* Telefoon */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="telefoon" className="text-xs font-medium text-white/50 uppercase tracking-wider">
          Telefoonnummer
        </label>
        <input
          id="telefoon"
          name="telefoon"
          type="tel"
          placeholder="06 12 34 56 78"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
          style={{ touchAction: "manipulation" }}
        />
      </div>

      {/* Klacht */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="klacht" className="text-xs font-medium text-white/50 uppercase tracking-wider">
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
          <option value="" disabled className="bg-[#0a0a0f] text-white/40">Selecteer uw klacht…</option>
          {klachten.map((k) => (
            <option key={k} value={k} className="bg-[#0f0f1a] text-white">{k}</option>
          ))}
        </select>
      </div>

      {/* Zorgverzekeraar */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="verzekeraar" className="text-xs font-medium text-white/50 uppercase tracking-wider">
          Zorgverzekeraar
        </label>
        <select
          id="verzekeraar"
          name="verzekeraar"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 appearance-none"
          style={{ touchAction: "manipulation" }}
          defaultValue=""
        >
          <option value="" disabled className="bg-[#0a0a0f] text-white/40">Selecteer uw verzekeraar…</option>
          {verzekeraars.map((v) => (
            <option key={v} value={v} className="bg-[#0f0f1a] text-white">{v}</option>
          ))}
        </select>
      </div>

      {/* Opmerkingen */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="opmerking" className="text-xs font-medium text-white/50 uppercase tracking-wider">
          Toelichting <span className="normal-case font-normal">(optioneel)</span>
        </label>
        <textarea
          id="opmerking"
          name="opmerking"
          rows={3}
          placeholder="Vertel ons kort over uw klacht of stel alvast een vraag…"
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

      <p className="text-center text-white/25 text-xs">
        Wij reageren binnen één werkdag · Uw gegevens worden vertrouwelijk behandeld
      </p>
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
                  <path d="M7.5 1v13M1 7.5h13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-bold text-white text-sm">FysioFit <span className="text-blue-400">Zutphen</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Persoonlijke fysiotherapie voor iedereen die pijnvrij wil leven en bewegen.
            </p>
          </div>

          {/* Kolom 2 — Contact */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-white/40">
              <p>Deventerweg 12</p>
              <p>7204 AB Zutphen</p>
              <p className="pt-1">
                <a href="tel:0575123456" className="hover:text-white/70" style={{ touchAction: "manipulation" }}>
                  0575 – 123 456
                </a>
              </p>
              <p>
                <a href="mailto:info@fysiofit-zutphen.nl" className="hover:text-white/70" style={{ touchAction: "manipulation" }}>
                  info@fysiofit-zutphen.nl
                </a>
              </p>
              <p className="pt-1 text-white/30 text-xs">Ma–Vr 08:00–18:00</p>
            </div>
          </div>

          {/* Kolom 3 — Registraties */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">Registraties</h4>
            <div className="space-y-2 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l2.5 2.5 5.5-5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                KvK 71234567
              </div>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l2.5 2.5 5.5-5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                BIG-registratie alle therapeuten
              </div>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l2.5 2.5 5.5-5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                KNGF-lid
              </div>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l2.5 2.5 5.5-5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                AGB-code 03 – 123456
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs">
          <span>© {huidigJaar} FysioFit Zutphen · Alle rechten voorbehouden</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-white/50" style={{ touchAction: "manipulation" }}>Privacyverklaring</a>
            <a href="#" className="hover:text-white/50" style={{ touchAction: "manipulation" }}>Klachtenregeling</a>
          </span>
        </div>

        {/* Demo banner */}
        <div className="mt-8 rounded-xl bg-white/[0.02] border border-white/5 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            Dit is een <span className="text-white/50 font-medium">demo website</span> gebouwd door Lifegix als voorbeeld voor fysiotherapiepraktijken.
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
