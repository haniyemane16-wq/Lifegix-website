"use client";

import { useState } from "react";

export default function Home() {
  const [prefilledMessage, setPrefilledMessage] = useState("");

  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <ROICalculator onCalculate={setPrefilledMessage} />
      <Portfolio />
      <Contact initialMessage={prefilledMessage} />
      <Footer />
    </main>
  );
}

/* ─── Navbar ─────────────────────────────────────────────── */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-white">Life</span><span className="text-violet-400">gix</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#diensten" className="hover:text-white transition-colors">Diensten</a>
          <a href="#werkwijze" className="hover:text-white transition-colors">Werkwijze</a>
          <a href="#bereken" className="hover:text-white transition-colors">ROI Calculator</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/bestellen"
            className="text-sm font-medium px-4 py-2 rounded-lg border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 transition-colors"
          >
            Bestellen
          </a>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors"
          >
            Gratis gesprek
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      {/* Badge */}
      <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
        Beschikbaar voor nieuwe klanten
      </div>

      {/* Headline */}
      <h1 className="animate-fade-in-up animation-delay-200 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
        Ik bouw websites en{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
          AI agents
        </span>{" "}
        voor lokale bedrijven
      </h1>

      {/* Subtext */}
      <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-white/50 text-lg leading-relaxed">
        Slimmer werken, meer klanten, minder gedoe. Ik help lokale ondernemers
        in de regio Warnsveld moderniseren met betaalbare technologie.
      </p>

      {/* CTA */}
      <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="#contact"
          className="px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all hover:scale-105 purple-glow"
        >
          Plan een gratis gesprek →
        </a>
        <a
          href="#diensten"
          className="px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm transition-all"
        >
          Bekijk diensten
        </a>
      </div>

      {/* Social proof */}
      <p className="animate-fade-in-up animation-delay-600 mt-12 text-white/25 text-xs">
        Gevestigd in Warnsveld · Lokale focus · Persoonlijk contact
      </p>
    </section>
  );
}

/* ─── Services ───────────────────────────────────────────── */
function Services() {
  const WebIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="5" width="28" height="22" rx="4" stroke="#a78bfa" strokeWidth="1.8"/>
      <line x1="2" y1="11" x2="30" y2="11" stroke="#a78bfa" strokeWidth="1.8"/>
      <circle cx="7" cy="8" r="1.2" fill="#7c3aed"/>
      <circle cx="11" cy="8" r="1.2" fill="#7c3aed"/>
      <circle cx="15" cy="8" r="1.2" fill="#7c3aed"/>
      <rect x="7" y="15" width="8" height="8" rx="1.5" fill="#7c3aed" opacity="0.5"/>
      <line x1="19" y1="16" x2="25" y2="16" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="19" x2="25" y2="19" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="22" x2="23" y2="22" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const BotIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="10" width="20" height="16" rx="4" stroke="#a78bfa" strokeWidth="1.8"/>
      <circle cx="12" cy="18" r="2" fill="#7c3aed"/>
      <circle cx="20" cy="18" r="2" fill="#7c3aed"/>
      <line x1="16" y1="4" x2="16" y2="10" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="16" cy="3.5" r="1.5" fill="#a78bfa"/>
      <line x1="6" y1="22" x2="2" y2="25" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="26" y1="22" x2="30" y2="25" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );

  const services = [
    {
      icon: <WebIcon />,
      title: "Website Bouwen",
      tagline: "Snel online, professioneel en vindbaar",
      description:
        "Een moderne website die 24/7 voor jouw bedrijf werkt. Ontworpen voor conversie, geoptimaliseerd voor Google en gebouwd om lang mee te gaan.",
      features: [
        "Volledig op maat ontworpen",
        "Mobielvriendelijk (responsive)",
        "SEO-geoptimaliseerd",
        "Snel en veilig (SSL)",
        "Contactformulier",
        "Google Analytics",
      ],
      highlighted: false,
    },
    {
      icon: <BotIcon />,
      title: "AI Automatisering",
      tagline: "Laat AI het zware werk doen",
      description:
        "Van automatische klantreacties tot slimme planningssystemen — ik bouw AI-agents die repetitieve taken voor jou overnemen.",
      features: [
        "Persoonlijke AI-assistent",
        "Automatische klantopvolging",
        "Afspraakplanning via AI",
        "WhatsApp / e-mail integratie",
        "24/7 beschikbaar",
        "Maandelijkse rapportage",
      ],
      highlighted: true,
    },
  ];

  return (
    <section id="diensten" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Diensten
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wat kan ik voor jou doen?
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Twee duidelijke diensten. Eerlijke prijzen. Geen verborgen kosten.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative rounded-2xl p-8 gradient-border transition-all hover:-translate-y-1 ${
                s.highlighted
                  ? "bg-violet-950/30 purple-glow"
                  : "bg-white/[0.03]"
              }`}
            >
              {s.highlighted && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/20">
                  Populair
                </span>
              )}

              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="text-violet-400 text-sm mt-1">{s.tagline}</p>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                {s.description}
              </p>

              {/* Price */}
              <div className="mt-6">
                <p className="text-2xl font-bold text-white">Prijs op maat</p>
                <p className="mt-1 text-xs text-white/40">
                  Gebruik de calculator hieronder voor jouw persoonlijke berekening
                </p>
                <a
                  href="#bereken"
                  className="mt-3 inline-block text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Bereken jouw prijs →
                </a>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-violet-400" fill="none" viewBox="0 0 10 10">
                        <path
                          d="M1.5 5l2.5 2.5 4.5-4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  s.highlighted
                    ? "bg-violet-600 hover:bg-violet-500 text-white hover:scale-105"
                    : "bg-white/5 hover:bg-white/10 text-white/80"
                }`}
              >
                Interesse? Neem contact op →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ───────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Gesprek",
      description:
        "We plannen een kort gesprek (15–30 min) om jouw wensen, doelen en budget te bespreken. Geen verplichtingen.",
    },
    {
      number: "02",
      title: "Bouwen",
      description:
        "Je ontvangt een helder voorstel. Na akkoord start ik direct met bouwen — binnen 1–2 weken live.",
    },
    {
      number: "03",
      title: "Live",
      description:
        "Jouw website of AI-systeem gaat live. Ik blijf beschikbaar voor vragen, aanpassingen en uitbreidingen.",
    },
  ];

  return (
    <section id="werkwijze" className="py-24 pb-12 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-900/10 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Werkwijze
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Hoe werkt het?</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Simpel, transparant en zonder gedoe. Van eerste contact tot live in
            3 stappen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="relative p-8 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.09] hover:border-violet-500/30 transition-all group-hover:-translate-y-1">
                <div className="text-violet-400/60 text-5xl font-bold font-mono mb-6 leading-none">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ROI Calculator ─────────────────────────────────────── */
const BRANCHES = [
  "Kapper / Barbier",
  "Restaurant / Café",
  "Winkel / Retail",
  "Schoonheidssalon",
  "Fysiotherapeut",
  "Tandarts",
  "Aannemer / Bouwbedrijf",
  "Autogarage",
  "Bakkerij",
  "Anders",
];

const SERVICE_META = {
  website: { label: "Website", upliftPct: 0.15, desc: "Meer klanten via Google & betere eerste indruk" },
  ai:      { label: "AI-agent", upliftPct: 0.10, desc: "Automatische opvolging & 24/7 klantenservice" },
  both:    { label: "Website + AI-agent", upliftPct: 0.25, desc: "Maximale groei: meer bezoekers én slimmere opvolging" },
};

const PRICE_TIERS = {
  website: [
    { maxOmzet: 5_000,      eenmalig: 500,   maand: 50 },
    { maxOmzet: 20_000,     eenmalig: 1_000, maand: 75 },
    { maxOmzet: Infinity,   eenmalig: 1_500, maand: 100 },
  ],
  ai: [
    { maxOmzet: 5_000,      eenmalig: 300,   maand: 75 },
    { maxOmzet: 20_000,     eenmalig: 600,   maand: 120 },
    { maxOmzet: Infinity,   eenmalig: 1_000, maand: 150 },
  ],
};

function getTier(dienst: "website" | "ai", maandomzet: number) {
  return PRICE_TIERS[dienst].find((t) => maandomzet < t.maxOmzet)!;
}

function getPricing(dienst: "website" | "ai" | "both", maandomzet: number): { eenmalig: number; maand: number; korting: boolean } {
  if (dienst === "both") {
    const w = getTier("website", maandomzet);
    const a = getTier("ai", maandomzet);
    return {
      eenmalig: Math.round((w.eenmalig + a.eenmalig) * 0.8),
      maand:    Math.round((w.maand    + a.maand)    * 0.8),
      korting:  true,
    };
  }
  const tier = getTier(dienst, maandomzet);
  return { eenmalig: tier.eenmalig, maand: tier.maand, korting: false };
}

function ROICalculator({ onCalculate }: { onCalculate: (msg: string) => void }) {
  const [branche, setBranche] = useState("");
  const [klanten, setKlanten] = useState("");
  const [omzetPerKlant, setOmzetPerKlant] = useState("");
  const [dienst, setDienst] = useState<"website" | "ai" | "both">("website");
  const [result, setResult] = useState<{
    huidig: number;
    extra: number;
    terugverdien: number;
    label: string;
    desc: string;
    eenmalig: number;
    maand: number;
    korting: boolean;
  } | null>(null);

  const calculate = () => {
    const k = parseInt(klanten, 10);
    const o = parseFloat(omzetPerKlant);
    if (!k || !o || k <= 0 || o <= 0) return;
    const meta = SERVICE_META[dienst];
    const huidig = k * o;
    const extra = Math.round(huidig * meta.upliftPct);
    const { eenmalig, maand, korting } = getPricing(dienst, huidig);
    const terugverdien = Math.ceil(eenmalig / Math.max(extra - maand, 1));
    setResult({ huidig, extra, terugverdien, label: meta.label, desc: meta.desc, eenmalig, maand, korting });
  };

  const sendToContact = () => {
    if (!result) return;
    const kortingRegel = result.korting ? " (incl. 20% combinatiekorting)" : "";
    const msg =
      `[ROI Calculator resultaat]\n` +
      `Branche: ${branche || "Niet opgegeven"}\n` +
      `Klanten per maand: ${klanten}\n` +
      `Gemiddelde omzet per klant: €${omzetPerKlant}\n` +
      `Huidige maandomzet: €${result.huidig.toLocaleString("nl-NL")}\n` +
      `Gewenste dienst: ${result.label}\n` +
      `Geschatte extra omzet/maand: +€${result.extra.toLocaleString("nl-NL")}\n` +
      `Aanbevolen investering: €${result.eenmalig} eenmalig + €${result.maand}/mnd${kortingRegel}\n\n` +
      `Graag meer informatie over een vrijblijvende offerte.`;
    onCalculate(msg);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="bereken" className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            ROI Calculator
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Bereken je return
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Vul je gegevens in en zie hoeveel extra omzet een website of AI-agent jou kan opleveren.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white/[0.03] gradient-border space-y-6">
            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">
                  Branche
                </label>
                <select
                  value={branche}
                  onChange={(e) => setBranche(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all appearance-none"
                >
                  <option value="" className="bg-[#0a0a0f]">Kies je branche</option>
                  {BRANCHES.map((b) => (
                    <option key={b} value={b} className="bg-[#0a0a0f]">{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">
                  Klanten per maand
                </label>
                <input
                  type="number"
                  min="1"
                  value={klanten}
                  onChange={(e) => setKlanten(e.target.value)}
                  placeholder="bijv. 80"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">
                  Gemiddelde omzet per klant (€)
                </label>
                <input
                  type="number"
                  min="1"
                  value={omzetPerKlant}
                  onChange={(e) => setOmzetPerKlant(e.target.value)}
                  placeholder="bijv. 45"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">
                  Gewenste dienst
                </label>
                <select
                  value={dienst}
                  onChange={(e) => setDienst(e.target.value as "website" | "ai" | "both")}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all appearance-none"
                >
                  <option value="website" className="bg-[#0a0a0f]">Website</option>
                  <option value="ai" className="bg-[#0a0a0f]">AI-agent</option>
                  <option value="both" className="bg-[#0a0a0f]">Website + AI-agent</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all hover:scale-[1.02] purple-glow"
            >
              Bereken mijn ROI →
            </button>
          </div>

          {/* Result panel */}
          {result && (
            <div className="mt-6 p-8 rounded-2xl bg-violet-950/30 border border-violet-500/20 space-y-6">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-xs text-white/40 mb-1">Huidige maandomzet</p>
                  <p className="text-2xl font-bold text-white">
                    €{result.huidig.toLocaleString("nl-NL")}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/30">
                  <p className="text-xs text-violet-300/70 mb-1">Geschatte extra omzet/mnd</p>
                  <p className="text-2xl font-bold text-violet-300">
                    +€{result.extra.toLocaleString("nl-NL")}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-xs text-white/40 mb-1">
                    Aanbevolen investering{result.korting && <span className="ml-1 text-violet-400">−20%</span>}
                  </p>
                  <p className="text-lg font-bold text-white">
                    €{result.eenmalig.toLocaleString("nl-NL")}
                    <span className="text-xs font-normal text-white/40"> eenmalig</span>
                  </p>
                  <p className="text-sm font-semibold text-violet-300">
                    + €{result.maand}
                    <span className="text-xs font-normal text-white/40">/mnd</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-violet-400" fill="none" viewBox="0 0 10 10">
                    <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm text-white/60">
                  <span className="text-white/90 font-medium">{result.label}:</span>{" "}
                  {result.desc}. Terugverdientijd eenmalige investering:{" "}
                  <span className="text-violet-300 font-medium">
                    {result.terugverdien <= 1 ? "minder dan 1 maand" : `~${result.terugverdien} maanden`}
                  </span>.
                </p>
              </div>

              <button
                onClick={sendToContact}
                className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all hover:scale-[1.02] purple-glow"
              >
                Vraag gratis offerte aan →
              </button>
              <p className="text-center text-white/25 text-xs">
                Berekening wordt automatisch meegestuurd in je bericht.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Portfolio ──────────────────────────────────────────── */
function Portfolio() {
  const projects = [
    {
      title: "AutoFix Pro",
      category: "Website Bouwen",
      description:
        "Professionele website voor een automonteur. Inclusief diensten­overzicht, transparante prijstabel, klantbeoordelingen, afspraakformulier en FAQ.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-violet-600/20 via-purple-800/10 to-transparent",
      href: "https://autofixpro-lac.vercel.app",
      visual: (
        <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
          <rect x="4" y="20" width="48" height="22" rx="5" stroke="#a78bfa" strokeWidth="2"/>
          <path d="M10 20l5-10h26l5 10" stroke="#a78bfa" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="15" cy="42" r="5" fill="#0a0a0f" stroke="#a78bfa" strokeWidth="2"/>
          <circle cx="41" cy="42" r="5" fill="#0a0a0f" stroke="#a78bfa" strokeWidth="2"/>
          <circle cx="15" cy="42" r="2" fill="#7c3aed"/>
          <circle cx="41" cy="42" r="2" fill="#7c3aed"/>
          <rect x="22" y="26" width="12" height="8" rx="2" fill="#7c3aed" opacity="0.4"/>
          <line x1="4" y1="32" x2="8" y2="32" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="48" y1="32" x2="52" y2="32" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Brasserie De Linde",
      category: "Website Bouwen",
      description:
        "Elegante website voor een fine dining restaurant. Met seizoensmenu, reserveringsformulier, chef-profiel, sfeerbeelden en private dining sectie.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-emerald-600/20 via-teal-800/10 to-transparent",
      href: "https://brasserie-de-linde.vercel.app",
      visual: (
        <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
          <path d="M28 6c-8 0-14 6-14 14 0 6 3.5 11 8.5 13.5V40h11v-6.5C38.5 31 42 26 42 20c0-8-6-14-14-14z" stroke="#a78bfa" strokeWidth="2" strokeLinejoin="round"/>
          <rect x="22" y="40" width="12" height="4" rx="1.5" fill="#7c3aed" opacity="0.5"/>
          <rect x="20" y="44" width="16" height="3" rx="1.5" fill="#7c3aed" opacity="0.4"/>
          <line x1="28" y1="14" x2="28" y2="26" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="22" y1="18" x2="28" y2="14" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="34" y1="18" x2="28" y2="14" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="portfolio" className="pt-12 pb-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full bg-violet-900/10 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Eerder gebouwd
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Een selectie van projecten die ik heb gebouwd.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p) => {
            const Wrapper = p.href
              ? ({ children }: { children: React.ReactNode }) => (
                  <a href={p.href!} target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-violet-500/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 block">
                    {children}
                  </a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-violet-500/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300">
                    {children}
                  </div>
                );
            return (
            <Wrapper key={p.title}>
              {/* Card top accent */}
              <div className={`h-32 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                {p.visual}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    {p.href && (
                      <svg className="w-3.5 h-3.5 text-violet-400/60 group-hover:text-violet-400 transition-colors" fill="none" viewBox="0 0 14 14">
                        <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20">
                    {p.category}
                  </span>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────── */
function Contact({ initialMessage }: { initialMessage: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Sync pre-filled message from ROI calculator
  const [prevInitial, setPrevInitial] = useState("");
  if (initialMessage !== prevInitial) {
    setPrevInitial(initialMessage);
    if (initialMessage) {
      setForm((f) => ({ ...f, message: initialMessage }));
    }
  }
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        let message = "Verzenden mislukt.";
        try {
          const data = await res.json();
          message = data.error ?? message;
        } catch {}
        throw new Error(message);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Klaar om te beginnen?
            </h2>
            <p className="mt-4 text-white/50">
              Stuur een bericht en ik reageer binnen 24 uur. Het eerste gesprek
              is altijd gratis en vrijblijvend.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 px-8 rounded-2xl bg-violet-500/10 border border-violet-500/20">
              <div className="text-8xl mb-6 text-green-400">✓</div>
              <h3 className="text-xl font-bold text-violet-300 mb-2">
                Bericht ontvangen!
              </h3>
              <p className="text-white/50 text-sm">
                Ik reageer zo snel mogelijk, uiterlijk binnen 24 uur.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-8 rounded-2xl bg-white/[0.03] gradient-border"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">
                    Naam *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jan de Vries"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jan@bedrijf.nl"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+31 6 12345678"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">
                    Interesse in
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all appearance-none"
                  >
                    <option value="" className="bg-[#0a0a0f]">Kies een dienst</option>
                    <option value="website" className="bg-[#0a0a0f]">Website bouwen</option>
                    <option value="ai" className="bg-[#0a0a0f]">AI Automatisering</option>
                    <option value="both" className="bg-[#0a0a0f]">Beide</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">
                  Bericht *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Vertel iets over je bedrijf en wat je nodig hebt..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed font-semibold text-sm transition-all hover:scale-[1.02] purple-glow"
              >
                {loading ? "Verzenden..." : "Verstuur bericht →"}
              </button>

              <p className="text-center text-white/25 text-xs">
                Geen spam. Ik reageer persoonlijk binnen 24 uur.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
        <span>
          © {new Date().getFullYear()} Life<span className="text-violet-500/60">gix</span> · Warnsveld
        </span>
        {/* TODO: fill in real KvK number */}
      </div>
    </footer>
  );
}
