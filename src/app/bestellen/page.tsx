"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/* ─── Website pakketten ─────────────────────────────────── */
const WEBSITE_PAKKETTEN = [
  {
    id: "starter",
    naam: "Website Starter",
    eenmalig: 500,
    maandelijks: 50,
    features: ["1 pagina", "Contactformulier", "SEO basis", "Mobielvriendelijk"],
    highlighted: false,
  },
  {
    id: "business",
    naam: "Website Business",
    eenmalig: 1000,
    maandelijks: 75,
    features: ["5 pagina's", "SEO volledig", "Google Analytics", "Contactformulier"],
    highlighted: true,
  },
] as const;

/* ─── AI Agent pakketten ────────────────────────────────── */
const AI_PAKKETTEN = [
  {
    id: "ai_faq",
    naam: "FAQ Chatbot",
    tagline: "Beantwoordt vaste vragen 24/7",
    eenmalig: 300,
    maandelijks: 50,
    features: [
      "Veelgestelde vragen automatisch",
      "Website integratie",
      "Doorsturen bij complexe vragen",
    ],
    highlighted: false,
  },
  {
    id: "ai_leads",
    naam: "Leadopvolging Agent",
    tagline: "Volgt leads automatisch op",
    eenmalig: 600,
    maandelijks: 90,
    features: [
      "Automatische e-mail/WhatsApp opvolging",
      "Lead kwalificatie",
      "CRM-koppeling mogelijk",
    ],
    highlighted: false,
  },
  {
    id: "ai_afspraken",
    naam: "Afspraakplanning Agent",
    tagline: "Plant afspraken automatisch in",
    eenmalig: 900,
    maandelijks: 120,
    features: [
      "24/7 agenda management",
      "Automatische bevestigingen",
      "Google Calendar integratie",
    ],
    highlighted: true,
  },
  {
    id: "ai_volledig",
    naam: "Volledige AI Agent",
    tagline: "Alles in één, volledig op maat",
    eenmalig: 1500,
    maandelijks: 175,
    features: [
      "Chat + leads + afspraken",
      "Multi-channel (web, WhatsApp, e-mail)",
      "Maandelijkse rapportage",
      "Prioriteit support",
    ],
    highlighted: false,
  },
] as const;

const AI_EENMALIG = 600;
const AI_MAANDELIJKS = 90;

const BUNDEL: Record<string, { eenmalig: number; maandelijks: number; korting: number; kortingMaandelijks: number }> = {
  starter:  { eenmalig: 750,  maandelijks: 110, korting: 50, kortingMaandelijks: 15 },
  business: { eenmalig: 1200, maandelijks: 135, korting: 75, kortingMaandelijks: 15 },
};

type WebsitePakketId = (typeof WEBSITE_PAKKETTEN)[number]["id"];
type AIPakketId = (typeof AI_PAKKETTEN)[number]["id"];
type PakketId = WebsitePakketId | AIPakketId | "test";

const AI_PAKKET_IDS: string[] = AI_PAKKETTEN.map((p) => p.id);
const isAIPakket = (id: PakketId | null): id is AIPakketId =>
  id !== null && AI_PAKKET_IDS.includes(id);

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill="#7c3aed" opacity="0.2" />
      <path d="M5 8l2.5 2.5L11 5.5" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {Array.from({ length: total }, (_, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                done
                  ? "bg-violet-600 text-white"
                  : active
                  ? "bg-violet-600 text-white ring-4 ring-violet-600/30"
                  : "bg-white/5 text-white/30"
              }`}
            >
              {done ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                step
              )}
            </div>
            {i < total - 1 && (
              <div className={`w-12 h-px ${done ? "bg-violet-600" : "bg-white/10"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function BestelPage() {
  const router = useRouter();
  const [stap, setStap] = useState(1);
  const [showAITypes, setShowAITypes] = useState(false);
  const [gekozenPakket, setGekozenPakket] = useState<PakketId | null>(null);
  const [metAiAgent, setMetAiAgent] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [naam, setNaam] = useState("");
  const [bedrijf, setBedrijf] = useState("");
  const [email, setEmail] = useState("");
  const [telefoon, setTelefoon] = useState("");

  const websitePakket = WEBSITE_PAKKETTEN.find((p) => p.id === gekozenPakket);
  const aiPakket = AI_PAKKETTEN.find((p) => p.id === gekozenPakket);
  const huidigPakket = websitePakket ?? aiPakket;

  const bundel =
    gekozenPakket && !isAIPakket(gekozenPakket) && gekozenPakket !== "test" && metAiAgent
      ? BUNDEL[gekozenPakket] ?? null
      : null;

  const totaalEenmalig = bundel
    ? bundel.eenmalig
    : (huidigPakket?.eenmalig ?? 0) + (metAiAgent && !isAIPakket(gekozenPakket) ? AI_EENMALIG : 0);
  const totaalMaandelijks = bundel
    ? bundel.maandelijks
    : (huidigPakket?.maandelijks ?? 0) + (metAiAgent && !isAIPakket(gekozenPakket) ? AI_MAANDELIJKS : 0);

  const totalSteps = isAIPakket(gekozenPakket) || gekozenPakket === "test" ? 2 : 3;

  function handlePakketKeuze(id: PakketId) {
    setGekozenPakket(id);
    if (isAIPakket(id) || id === "test") {
      setMetAiAgent(false);
      setStap(2);
    } else {
      setStap(2);
    }
  }

  function handleAiKeuze(ja: boolean) {
    setMetAiAgent(ja);
    setStap(3);
  }

  async function handleBestellen(e: React.FormEvent) {
    e.preventDefault();
    if (!gekozenPakket || !naam || !email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pakket: gekozenPakket,
          aiAgent: metAiAgent ?? false,
          naam,
          bedrijf,
          email,
          telefoon,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.checkoutUrl) {
        setError(data.error ?? "Er is iets misgegaan. Probeer het opnieuw.");
        return;
      }

      router.push(data.checkoutUrl);
    } catch {
      setError("Er is iets misgegaan. Probeer het opnieuw.");
    } finally {
      setLoading(false);
    }
  }

  const displayStap = isAIPakket(gekozenPakket) && stap === 2 ? 2 : stap;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-white">Life</span>
            <span className="text-violet-400">gix</span>
          </a>
          <a href="/" className="text-sm text-white/50 hover:text-white transition-colors">
            ← Terug naar home
          </a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Direct beginnen
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Kies je pakket</h1>
          <p className="mt-3 text-white/50">
            Geen verborgen kosten. Je betaalt nu eenmalig, daarna maandelijks.
          </p>
        </div>

        <StepIndicator current={displayStap} total={totalSteps} />

        {/* ── Stap 1: Pakket kiezen ── */}
        {stap === 1 && (
          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-6">
              Stap 1 — Kies je pakket
            </h2>

            {!showAITypes ? (
              <>
                {/* Website pakketten */}
                <div className="grid gap-4 mb-4">
                  {WEBSITE_PAKKETTEN.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handlePakketKeuze(p.id)}
                      className={`relative w-full text-left rounded-2xl p-5 sm:p-6 gradient-border transition-all hover:-translate-y-0.5 ${
                        p.highlighted ? "bg-violet-950/30 purple-glow" : "bg-white/[0.03] hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg font-bold text-white">{p.naam}</h3>
                            {p.highlighted && (
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/20">
                                Aanbevolen
                              </span>
                            )}
                          </div>
                          <ul className="mt-3 space-y-1.5">
                            {p.features.map((f) => (
                              <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                                <CheckIcon />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <div className="text-2xl font-bold text-white">€{p.eenmalig}</div>
                          <div className="text-xs text-white/40">eenmalig</div>
                          <div className="mt-1 text-sm font-medium text-violet-300">
                            + €{p.maandelijks}/mnd
                          </div>
                          {BUNDEL[p.id] && (
                            <div className="mt-2 text-xs leading-snug max-w-[180px] sm:ml-auto">
                              <span className="text-violet-400/80">
                                Met AI: €{BUNDEL[p.id].eenmalig} + €{BUNDEL[p.id].maandelijks}/mnd
                              </span>{" "}
                              <span className="text-green-400 font-semibold">
                                (−€{BUNDEL[p.id].korting})
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* AI Agent knop */}
                <button
                  onClick={() => setShowAITypes(true)}
                  className="w-full text-left rounded-2xl p-5 sm:p-6 gradient-border bg-white/[0.03] hover:bg-white/[0.05] transition-all hover:-translate-y-0.5 mb-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🤖</span>
                        <h3 className="text-lg font-bold text-white">Alleen AI Agent</h3>
                      </div>
                      <p className="text-sm text-white/50 mt-1">
                        4 types beschikbaar — vanaf €300 eenmalig
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-violet-400 shrink-0" fill="none" viewBox="0 0 20 20">
                      <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {/* Test pakket */}
                <button
                  onClick={() => handlePakketKeuze("test")}
                  className="w-full text-left rounded-2xl p-4 border border-dashed border-white/20 hover:border-white/40 bg-white/[0.02] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-white/50">🧪 Testbetaling</span>
                      <p className="text-xs text-white/30 mt-0.5">Intern testen — €0,01 eenmalig</p>
                    </div>
                    <span className="text-xs text-white/30">→</span>
                  </div>
                </button>
              </>
            ) : (
              <>
                {/* AI Agent types */}
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={() => setShowAITypes(false)}
                    className="text-sm text-white/40 hover:text-white/70 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Terug
                  </button>
                  <span className="text-sm text-white/40">Kies je AI Agent type</span>
                </div>

                <div className="grid gap-4">
                  {AI_PAKKETTEN.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handlePakketKeuze(p.id)}
                      className={`relative w-full text-left rounded-2xl p-5 sm:p-6 gradient-border transition-all hover:-translate-y-0.5 ${
                        p.highlighted ? "bg-violet-950/30 purple-glow" : "bg-white/[0.03] hover:bg-white/[0.05]"
                      }`}
                    >
                      {p.highlighted && (
                        <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/20">
                          Populair
                        </span>
                      )}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="flex-1 pr-16 sm:pr-0">
                          <h3 className="text-lg font-bold text-white">{p.naam}</h3>
                          <p className="text-sm text-violet-400/80 mt-0.5">{p.tagline}</p>
                          <ul className="mt-3 space-y-1.5">
                            {p.features.map((f) => (
                              <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                                <CheckIcon />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <div className="text-2xl font-bold text-white">€{p.eenmalig}</div>
                          <div className="text-xs text-white/40">eenmalig</div>
                          <div className="mt-1 text-sm font-medium text-violet-300">
                            + €{p.maandelijks}/mnd
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* ── Stap 2: AI Agent toevoegen (alleen voor website pakketten) ── */}
        {stap === 2 && !isAIPakket(gekozenPakket) && gekozenPakket !== "test" && (
          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-6">
              Stap 2 — Wil je een AI Agent erbij?
            </h2>
            <p className="text-white/50 text-sm mb-8">
              Een AI Agent beantwoordt automatisch klanten, plant afspraken en werkt 24/7 voor je.
            </p>
            <div className="grid gap-4">
              <button
                onClick={() => handleAiKeuze(true)}
                className="relative w-full text-left rounded-2xl p-5 sm:p-6 gradient-border bg-violet-950/30 purple-glow transition-all hover:-translate-y-0.5"
              >
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/20">
                  Aanbevolen
                </span>
                <h3 className="text-lg font-bold text-white mb-1">Ja, voeg AI Agent toe</h3>
                <p className="text-sm text-white/50 mb-3">
                  Automatische klantopvolging, WhatsApp integratie & 24/7 beschikbaar
                </p>
                <div className="flex items-center gap-3 line-through text-white/30 text-sm">
                  <span>+€{AI_EENMALIG} eenmalig</span>
                  <span>+ €{AI_MAANDELIJKS}/mnd</span>
                </div>
                {gekozenPakket && BUNDEL[gekozenPakket] && (() => {
                  const b = BUNDEL[gekozenPakket]!;
                  const p = WEBSITE_PAKKETTEN.find((x) => x.id === gekozenPakket)!;
                  return (
                    <div className="mt-1 flex items-center gap-2 flex-wrap">
                      <span className="text-green-400 font-semibold text-sm">
                        +€{b.eenmalig - p.eenmalig} eenmalig + €{b.maandelijks - p.maandelijks}/mnd
                      </span>
                      <span className="text-green-400/70 text-xs">(bundelkorting)</span>
                    </div>
                  );
                })()}
              </button>

              <button
                onClick={() => handleAiKeuze(false)}
                className="w-full text-left rounded-2xl p-5 sm:p-6 gradient-border bg-white/[0.03] hover:bg-white/[0.05] transition-all hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-bold text-white mb-1">Nee, alleen de website</h3>
                <p className="text-sm text-white/50">Je kunt de AI Agent altijd later toevoegen</p>
              </button>
            </div>

            <button onClick={() => { setStap(1); setShowAITypes(false); }} className="mt-6 text-sm text-white/40 hover:text-white/70 transition-colors">
              ← Terug
            </button>
          </div>
        )}

        {/* ── Formulier stap ── */}
        {((stap === 3 && !isAIPakket(gekozenPakket) && gekozenPakket !== "test") ||
          (stap === 2 && (isAIPakket(gekozenPakket) || gekozenPakket === "test"))) &&
          huidigPakket && (
          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-6">
              {isAIPakket(gekozenPakket) ? "Stap 2" : "Stap 3"} — Totaaloverzicht & bestellen
            </h2>

            {/* Overzicht */}
            <div className="rounded-2xl gradient-border bg-white/[0.03] p-5 sm:p-6 mb-8">
              <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4">
                Jouw bestelling
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white">{huidigPakket.naam}</span>
                  <div className="text-right">
                    <span className="text-white font-semibold">€{huidigPakket.eenmalig}</span>
                    <span className="text-white/40 text-sm ml-1">eenmalig</span>
                  </div>
                </div>
                {huidigPakket.maandelijks > 0 && (
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>Maandelijks abonnement</span>
                    <span>€{huidigPakket.maandelijks}/mnd</span>
                  </div>
                )}

                {metAiAgent && !isAIPakket(gekozenPakket) && (
                  <>
                    <div className="h-px bg-white/5 my-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-white">AI Agent</span>
                      <div className="text-right">
                        <span className="text-white font-semibold">€{AI_EENMALIG}</span>
                        <span className="text-white/40 text-sm ml-1">eenmalig</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-white/50">
                      <span>AI Agent abonnement</span>
                      <span>€{AI_MAANDELIJKS}/mnd</span>
                    </div>
                    {bundel && (
                      <div className="flex items-center justify-between text-sm text-green-400 font-medium">
                        <span>Bundelkorting</span>
                        <span>−€{bundel.korting} eenmalig / −€{bundel.kortingMaandelijks}/mnd</span>
                      </div>
                    )}
                  </>
                )}

                {isAIPakket(gekozenPakket) && (
                  <div className="text-xs text-violet-400/70 mt-1">
                    {(AI_PAKKETTEN.find((p) => p.id === gekozenPakket) as typeof AI_PAKKETTEN[number] | undefined)?.tagline}
                  </div>
                )}

                <div className="h-px bg-white/10 mt-4 mb-3" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Nu te betalen</span>
                  <span className="text-2xl font-bold text-violet-300">€{totaalEenmalig}</span>
                </div>
                {totaalMaandelijks > 0 && (
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>Daarna maandelijks</span>
                    <span>€{totaalMaandelijks}/mnd</span>
                  </div>
                )}
              </div>
            </div>

            {/* Formulier */}
            <form onSubmit={handleBestellen} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">
                    Naam <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={naam}
                    onChange={(e) => setNaam(e.target.value)}
                    placeholder="Jan de Vries"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Bedrijfsnaam</label>
                  <input
                    type="text"
                    value={bedrijf}
                    onChange={(e) => setBedrijf(e.target.value)}
                    placeholder="Jouw Bedrijf BV"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all text-sm"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">
                    E-mailadres <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jan@bedrijf.nl"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Telefoonnummer</label>
                  <input
                    type="tel"
                    value={telefoon}
                    onChange={(e) => setTelefoon(e.target.value)}
                    placeholder="+31 6 12345678"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all text-sm"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-sm transition-all hover:scale-[1.01] purple-glow"
                >
                  {loading ? "Betaling aanmaken…" : `Bestellen en betalen — €${totaalEenmalig}`}
                </button>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                  <span className="flex items-center gap-1.5 text-xs text-white/40">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
                      <rect x="1" y="6" width="11" height="7" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M4 6V4a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    Veilig betalen
                  </span>
                  <span className="text-white/10 text-xs hidden sm:inline">|</span>
                  <span className="flex items-center gap-1.5 text-xs text-white/40">iDEAL</span>
                  <span className="text-white/10 text-xs hidden sm:inline">|</span>
                  <span className="flex items-center gap-1.5 text-xs text-white/40">Mollie</span>
                  <span className="text-white/10 text-xs hidden sm:inline">|</span>
                  <span className="flex items-center gap-1.5 text-xs text-white/40">SSL beveiligd</span>
                </div>
              </div>
            </form>

            <button
              onClick={() => setStap(isAIPakket(gekozenPakket) || gekozenPakket === "test" ? 1 : 2)}
              className="mt-6 text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              ← Terug
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
