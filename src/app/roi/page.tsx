"use client";

import { useState } from "react";

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
    { maxOmzet: 5_000,    eenmalig: 500,   maand: 50 },
    { maxOmzet: 20_000,   eenmalig: 1_000, maand: 75 },
    { maxOmzet: Infinity, eenmalig: 1_500, maand: 100 },
  ],
  ai: [
    { maxOmzet: 5_000,    eenmalig: 300,   maand: 75 },
    { maxOmzet: 20_000,   eenmalig: 600,   maand: 120 },
    { maxOmzet: Infinity, eenmalig: 1_000, maand: 150 },
  ],
};

function getTier(dienst: "website" | "ai", maandomzet: number) {
  return PRICE_TIERS[dienst].find((t) => maandomzet < t.maxOmzet)!;
}

function getPricing(dienst: "website" | "ai" | "both", maandomzet: number) {
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

export default function ROIPage() {
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

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all appearance-none";

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-white">Life</span><span className="text-violet-400">gix</span>
          </a>
          <a href="/" className="text-sm text-white/50 hover:text-white transition-colors">← Terug naar home</a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">ROI Calculator</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Bereken je return</h1>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Vul je gegevens in en zie hoeveel extra omzet een website of AI-agent jou kan opleveren.
          </p>
        </div>

        {/* Calculator */}
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white/50 mb-1.5">Branche</label>
              <select value={branche} onChange={(e) => setBranche(e.target.value)} className={inputClass}>
                <option value="" className="bg-[#0a0a0f]">Kies je branche</option>
                {BRANCHES.map((b) => (
                  <option key={b} value={b} className="bg-[#0a0a0f]">{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-white/50 mb-1.5">Klanten per maand</label>
              <input
                type="number" min="1" value={klanten}
                onChange={(e) => setKlanten(e.target.value)}
                placeholder="bijv. 80" className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white/50 mb-1.5">Gemiddelde omzet per klant (€)</label>
              <input
                type="number" min="1" value={omzetPerKlant}
                onChange={(e) => setOmzetPerKlant(e.target.value)}
                placeholder="bijv. 45" className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/50 mb-1.5">Gewenste dienst</label>
              <select value={dienst} onChange={(e) => setDienst(e.target.value as "website" | "ai" | "both")} className={inputClass}>
                <option value="website" className="bg-[#0a0a0f]">Website</option>
                <option value="ai" className="bg-[#0a0a0f]">AI-agent</option>
                <option value="both" className="bg-[#0a0a0f]">Website + AI-agent</option>
              </select>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all hover:scale-[1.02]"
          >
            Bereken mijn ROI →
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-6 p-8 rounded-2xl bg-violet-950/30 border border-violet-500/20 space-y-6">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <p className="text-xs text-white/40 mb-1">Huidige maandomzet</p>
                <p className="text-2xl font-bold text-white">€{result.huidig.toLocaleString("nl-NL")}</p>
              </div>
              <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/30">
                <p className="text-xs text-violet-300/70 mb-1">Geschatte extra omzet/mnd</p>
                <p className="text-2xl font-bold text-violet-300">+€{result.extra.toLocaleString("nl-NL")}</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <p className="text-xs text-white/40 mb-1">
                  Investering{result.korting && <span className="ml-1 text-violet-400">−20%</span>}
                </p>
                <p className="text-lg font-bold text-white">
                  €{result.eenmalig.toLocaleString("nl-NL")}
                  <span className="text-xs font-normal text-white/40"> eenmalig</span>
                </p>
                <p className="text-sm font-semibold text-violet-300">
                  + €{result.maand}<span className="text-xs font-normal text-white/40">/mnd</span>
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
                {result.desc}. Terugverdientijd:{" "}
                <span className="text-violet-300 font-medium">
                  {result.terugverdien <= 1 ? "minder dan 1 maand" : `~${result.terugverdien} maanden`}
                </span>.
              </p>
            </div>

            <a
              href="/#contact"
              className="block text-center w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all hover:scale-[1.02]"
            >
              Vraag gratis offerte aan →
            </a>
            <p className="text-center text-white/25 text-xs">Vrijblijvend. Geen verplichtingen.</p>
          </div>
        )}

        <p className="text-center mt-10 text-white/30 text-sm">
          Klaar om te starten?{" "}
          <a href="/#prijzen" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
            Bekijk onze pakketten →
          </a>
        </p>
      </div>
    </main>
  );
}
