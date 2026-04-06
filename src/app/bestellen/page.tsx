"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const PAKKETTEN = [
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
  {
    id: "aionly",
    naam: "Alleen AI Agent",
    eenmalig: 300,
    maandelijks: 75,
    features: ["Voor wie al een website heeft", "Persoonlijke AI-assistent", "24/7 beschikbaar", "WhatsApp / e-mail integratie"],
    highlighted: false,
  },
] as const;

const AI_EENMALIG = 300;
const AI_MAANDELIJKS = 75;

const BUNDEL: Record<string, { eenmalig: number; maandelijks: number; korting: number }> = {
  starter:  { eenmalig: 750,  maandelijks: 110, korting: 50 },
  business: { eenmalig: 1200, maandelijks: 135, korting: 75 },
};

type PakketId = (typeof PAKKETTEN)[number]["id"];

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
  const [gekozenPakket, setGekozenPakket] = useState<PakketId | null>(null);
  const [metAiAgent, setMetAiAgent] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [naam, setNaam] = useState("");
  const [bedrijf, setBedrijf] = useState("");
  const [email, setEmail] = useState("");
  const [telefoon, setTelefoon] = useState("");

  const pakket = PAKKETTEN.find((p) => p.id === gekozenPakket);
  const totaalEenmalig =
    (pakket?.eenmalig ?? 0) + (metAiAgent ? AI_EENMALIG : 0);
  const totaalMaandelijks =
    (pakket?.maandelijks ?? 0) + (metAiAgent ? AI_MAANDELIJKS : 0);

  const totalSteps = gekozenPakket === "aionly" ? 2 : 3;

  function handlePakketKeuze(id: PakketId) {
    setGekozenPakket(id);
    if (id === "aionly") {
      setMetAiAgent(false);
      setStap(2); // skip AI step, go straight to form (which is "stap 2" in this case)
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
    if (!pakket || !naam || !email) return;

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
          eenmaligBedrag: totaalEenmalig,
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

  // Determine display step number
  const displayStap = gekozenPakket === "aionly" && stap === 2 ? 2 : stap;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
      </div>

      {/* Navbar */}
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
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Direct beginnen
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Kies je pakket
          </h1>
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
            <div className="grid gap-4">
              {PAKKETTEN.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handlePakketKeuze(p.id)}
                  className={`relative w-full text-left rounded-2xl p-6 gradient-border transition-all hover:-translate-y-0.5 ${
                    p.highlighted
                      ? "bg-violet-950/30 purple-glow"
                      : "bg-white/[0.03] hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
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
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-bold text-white">€{p.eenmalig}</div>
                      <div className="text-xs text-white/40">eenmalig</div>
                      <div className="mt-1 text-sm font-medium text-violet-300">
                        + €{p.maandelijks}/mnd
                      </div>
                      {p.id !== "aionly" && BUNDEL[p.id] && (
                        <div className="mt-2 text-xs leading-snug">
                          <span className="text-violet-400/80">
                            Met AI agent: €{BUNDEL[p.id].eenmalig} eenmalig + €{BUNDEL[p.id].maandelijks}/mnd
                          </span>
                          <span className="ml-1 text-green-400 font-semibold">
                            (bespaar €{BUNDEL[p.id].korting})
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Stap 2: AI Agent (alleen voor Starter & Business) ── */}
        {stap === 2 && gekozenPakket !== "aionly" && (
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
                className="relative w-full text-left rounded-2xl p-6 gradient-border bg-violet-950/30 purple-glow transition-all hover:-translate-y-0.5"
              >
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/20">
                  Aanbevolen
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  Ja, voeg AI Agent toe
                </h3>
                <p className="text-sm text-white/50 mb-3">
                  Automatische klantopvolging, WhatsApp integratie & 24/7 beschikbaar
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-white">+€{AI_EENMALIG}</span>
                  <span className="text-xs text-white/40">eenmalig</span>
                  <span className="text-sm font-medium text-violet-300">+ €{AI_MAANDELIJKS}/mnd</span>
                </div>
              </button>

              <button
                onClick={() => handleAiKeuze(false)}
                className="w-full text-left rounded-2xl p-6 gradient-border bg-white/[0.03] hover:bg-white/[0.05] transition-all hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-bold text-white mb-1">
                  Nee, alleen de website
                </h3>
                <p className="text-sm text-white/50">
                  Je kunt de AI Agent altijd later toevoegen
                </p>
              </button>
            </div>

            <button
              onClick={() => setStap(1)}
              className="mt-6 text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              ← Terug
            </button>
          </div>
        )}

        {/* ── Stap 3 (of stap 2 voor aionly): Overzicht + formulier ── */}
        {((stap === 3 && gekozenPakket !== "aionly") || (stap === 2 && gekozenPakket === "aionly")) && pakket && (
          <div>
            <h2 className="text-lg font-semibold text-white/80 mb-6">
              {gekozenPakket === "aionly" ? "Stap 2" : "Stap 3"} — Totaaloverzicht & bestellen
            </h2>

            {/* Overzicht */}
            <div className="rounded-2xl gradient-border bg-white/[0.03] p-6 mb-8">
              <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4">
                Jouw bestelling
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white">{pakket.naam}</span>
                  <div className="text-right">
                    <span className="text-white font-semibold">€{pakket.eenmalig}</span>
                    <span className="text-white/40 text-sm ml-1">eenmalig</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-white/50">
                  <span>Maandelijks abonnement</span>
                  <span>€{pakket.maandelijks}/mnd</span>
                </div>

                {metAiAgent && (
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
                  </>
                )}

                <div className="h-px bg-white/10 mt-4 mb-3" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Nu te betalen</span>
                  <span className="text-2xl font-bold text-violet-300">€{totaalEenmalig}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-white/50">
                  <span>Daarna maandelijks</span>
                  <span>€{totaalMaandelijks}/mnd</span>
                </div>
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
                  <label className="block text-sm text-white/60 mb-1.5">
                    Bedrijfsnaam
                  </label>
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
                  <label className="block text-sm text-white/60 mb-1.5">
                    Telefoonnummer
                  </label>
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
                <p className="mt-3 text-center text-xs text-white/30">
                  Veilig betalen via Mollie · iDEAL, creditcard & meer
                </p>
              </div>
            </form>

            <button
              onClick={() => setStap(gekozenPakket === "aionly" ? 1 : 2)}
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
