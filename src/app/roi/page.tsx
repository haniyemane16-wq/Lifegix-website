"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

/* ─── Zoekbare branche-combobox ─── */
function BrancheCombobox({
  value,
  onChange,
  branches,
}: {
  value: string;
  onChange: (v: string) => void;
  branches: string[];
}) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Sluit dropdown bij klik buiten component
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        // Als niks geselecteerd, reset query
        if (!value) setQuery("");
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [value]);

  // Sync query als externe value verandert
  useEffect(() => {
    setQuery(value);
  }, [value]);

  const filtered = query.trim() === ""
    ? branches
    : branches.filter((b) =>
        b.toLowerCase().includes(query.toLowerCase())
      );

  const select = (b: string) => {
    onChange(b);
    setQuery(b);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          placeholder="Zoek je branche..."
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange("");
            setOpen(true);
          }}
          className="w-full px-4 py-3 pr-9 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all"
        />
        {/* Chevron icoon */}
        <svg
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 transition-transform pointer-events-none ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 16 16"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {open && (
        <ul className="absolute z-50 mt-1 w-full max-h-56 overflow-y-auto rounded-xl bg-[#16162a] border border-white/10 shadow-xl shadow-black/40 py-1">
          {filtered.length === 0 ? (
            <li className="px-4 py-2.5 text-sm text-white/30">Geen resultaten</li>
          ) : (
            filtered.map((b) => (
              <li
                key={b}
                onMouseDown={() => select(b)}
                className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                  value === b
                    ? "bg-violet-600/30 text-violet-200"
                    : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {b}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

const BRANCHES = [
  // Persoonlijke verzorging
  "Kapper / Barbier",
  "Schoonheidssalon",
  "Nagelstudio / Waxsalon",
  "Dierenkapper",
  // Eten & drinken
  "Restaurant / Café",
  "Bakkerij",
  "Slager / Vishandel",
  "Catering",
  // Bouw & onderhoud
  "Aannemer / Bouwbedrijf",
  "Loodgieter / Installateur",
  "Elektricien",
  "Schilder / Stucadoor",
  "Dakdekker",
  "Klusbedrijf",
  // Voertuigen
  "Autogarage",
  "Fietsenmaker / Fietswinkel",
  // Gezondheid & sport
  "Fysiotherapeut",
  "Tandarts",
  "Personal trainer / Sportschool",
  "Dierenarts",
  // Tuin & groen
  "Hovenier / Tuinman",
  // Retail & winkel
  "Winkel / Retail",
  "Bloemist",
  // Zakelijke diensten
  "Boekhouder / Administratiekantoor",
  "Fotograaf / Videograaf",
  "Schoonmaakbedrijf",
  "Rijschool",
  // Overig
  "Anders",
];

// Hoeveel groeipotentieel een branche typisch heeft online.
// Lager = capaciteitsbeperkt of al sterk online.
// Hoger = veel te winnen met online aanwezigheid.
const BRANCH_MULTIPLIER: Record<string, number> = {
  // Persoonlijke verzorging
  "Kapper / Barbier":               0.7,  // zit vaak al vol, weinig zoekvolume
  "Schoonheidssalon":               0.9,  // gemiddeld potentieel
  "Nagelstudio / Waxsalon":         0.9,  // vergelijkbaar met salon
  "Dierenkapper":                   1.0,  // niche maar groeiend zoekgedrag
  // Eten & drinken
  "Restaurant / Café":              0.7,  // beperkt door stoelen/capaciteit
  "Bakkerij":                       0.8,  // lokaal, beperkt online potentieel
  "Slager / Vishandel":             0.8,  // lokaal, weinig online concurrentie maar ook weinig zoek
  "Catering":                       1.2,  // B2B potentieel, hoge orderwaarde
  // Bouw & onderhoud
  "Aannemer / Bouwbedrijf":         1.3,  // hoge omzet per klant, weinig online
  "Loodgieter / Installateur":      1.3,  // spoedzoekopdrachten, hoge waarde
  "Elektricien":                    1.2,  // veel lokale zoekopdrachten
  "Schilder / Stucadoor":           1.2,  // hoge vraag, weinig vindbare vakmannen
  "Dakdekker":                      1.2,  // hoge orderwaarde, weinig online aanwezig
  "Klusbedrijf":                    1.1,  // breed publiek, actief zoekgedrag
  // Voertuigen
  "Autogarage":                     1.1,  // sterk lokaal zoekgedrag
  "Fietsenmaker / Fietswinkel":     1.1,  // groeiende markt, lokale zoekopdrachten
  // Gezondheid & sport
  "Fysiotherapeut":                 1.1,  // goed lokaal SEO-potentieel
  "Tandarts":                       0.8,  // vaak al wachtlijst
  "Personal trainer / Sportschool": 1.0,  // concurrentieel maar actief zoekpubliek
  "Dierenarts":                     0.9,  // vaak al vol, beperkte capaciteit
  // Tuin & groen
  "Hovenier / Tuinman":             1.2,  // hoog seizoenszoekgedrag, weinig online
  // Retail & winkel
  "Winkel / Retail":                0.8,  // concurrerende online markt
  "Bloemist":                       0.9,  // lokaal, matig online potentieel
  // Zakelijke diensten
  "Boekhouder / Administratiekantoor": 1.0, // professioneel maar al redelijk online
  "Fotograaf / Videograaf":         1.2,  // portfolio-gedreven, hoge conversie
  "Schoonmaakbedrijf":              1.1,  // B2B potentieel, terugkerende klanten
  "Rijschool":                      0.9,  // al vrij online aanwezig
  // Overig
  "Anders":                         1.0,
};

// Realistische bandbreedtes (min–max) per dienst.
// Website: gemiddeld +3–7% extra omzet via meer online vindbaarheid.
// AI-agent: gemiddeld +2–5% via snellere opvolging & minder gemiste leads.
// Beide: combinatie, maar niet simpelweg de som (overlap in effect).
const SERVICE_META: Record<string, { label: string; upliftMin: number; upliftMax: number; desc: string }> = {
  website_starter: {
    label: "Website Starter",
    upliftMin: 0.03, upliftMax: 0.07,
    desc: "Meer klanten via Google & een betere eerste indruk",
  },
  website_business: {
    label: "Website Business",
    upliftMin: 0.04, upliftMax: 0.09,
    desc: "Uitgebreide SEO, meer pagina's en hogere conversie",
  },
  ai_faq: {
    label: "FAQ Chatbot",
    upliftMin: 0.01, upliftMax: 0.03,
    desc: "Beantwoordt vragen automatisch, minder gemiste leads",
  },
  ai_leads: {
    label: "Leadopvolging Agent",
    upliftMin: 0.02, upliftMax: 0.05,
    desc: "Automatische opvolging via e-mail & WhatsApp",
  },
  ai_afspraken: {
    label: "Afspraakplanning Agent",
    upliftMin: 0.03, upliftMax: 0.06,
    desc: "24/7 afspraken inplannen zonder telefoontjes",
  },
  ai_volledig: {
    label: "Volledige AI Agent",
    upliftMin: 0.04, upliftMax: 0.08,
    desc: "Alles gecombineerd — chat, leads, afspraken",
  },
  both: {
    label: "Website + AI-agent",
    upliftMin: 0.05, upliftMax: 0.11,
    desc: "Meer bezoekers én slimmere opvolging gecombineerd",
  },
};

const PRICE_TIERS: Record<string, { maxOmzet: number; eenmalig: number; maand: number; naam: string }[]> = {
  website_starter: [{ maxOmzet: Infinity, eenmalig: 500,   maand: 50,  naam: "Website Starter" }],
  website_business: [{ maxOmzet: Infinity, eenmalig: 1_000, maand: 75,  naam: "Website Business" }],
  ai_faq:       [{ maxOmzet: Infinity, eenmalig: 300,   maand: 50,  naam: "FAQ Chatbot" }],
  ai_leads:     [{ maxOmzet: Infinity, eenmalig: 600,   maand: 90,  naam: "Leadopvolging Agent" }],
  ai_afspraken: [{ maxOmzet: Infinity, eenmalig: 900,   maand: 120, naam: "Afspraakplanning Agent" }],
  ai_volledig:  [{ maxOmzet: Infinity, eenmalig: 1_500, maand: 175, naam: "Volledige AI Agent" }],
  both: [
    { maxOmzet: 5_000,    eenmalig: 750,   maand: 110, naam: "Website Starter + AI Agent" },
    { maxOmzet: Infinity, eenmalig: 1_200, maand: 135, naam: "Website Business + AI Agent" },
  ],
};

function getPricing(dienst: string, maandomzet: number) {
  const tiers = PRICE_TIERS[dienst] ?? PRICE_TIERS.website;
  const tier = tiers.find((t) => maandomzet < t.maxOmzet) ?? tiers[tiers.length - 1];
  return {
    eenmalig: tier.eenmalig,
    maand: tier.maand,
    naam: tier.naam,
    korting: dienst === "both",
  };
}

export default function ROIPage() {
  const [branche, setBranche] = useState("");
  const [klanten, setKlanten] = useState("");
  const [omzetPerKlant, setOmzetPerKlant] = useState("");
  const [websiteKeuze, setWebsiteKeuze] = useState<"geen" | "starter" | "business">("starter");
  const [aiKeuze, setAiKeuze] = useState<"geen" | "faq" | "leads" | "afspraken" | "volledig">("geen");
  const [result, setResult] = useState<{
    huidig: number;
    extraMin: number;
    extraMax: number;
    terugverdien: number;
    label: string;
    desc: string;
    eenmalig: number;
    maand: number;
    korting: boolean;
    pakketnaam: string;
    brancheMultiplier: number;
  } | null>(null);

  const calculate = () => {
    const k = parseInt(klanten, 10);
    const o = parseFloat(omzetPerKlant);
    if (!k || !o || k <= 0 || o <= 0) return;
    if (websiteKeuze === "geen" && aiKeuze === "geen") return;

    const huidig = k * o;
    const multiplier = BRANCH_MULTIPLIER[branche] ?? 1.0;
    const heeftWebsite = websiteKeuze !== "geen";
    const heeftAi = aiKeuze !== "geen";

    // Realistische uplift per component — cumulatief maar met overlap-correctie
    const websiteUplift = {
      starter:  { min: 0.03, max: 0.07, desc: "Meer vindbaarheid via Google, professionelere uitstraling" },
      business: { min: 0.05, max: 0.10, desc: "Uitgebreide SEO, meer pagina's en hogere conversie" },
      geen:     { min: 0,    max: 0,    desc: "" },
    }[websiteKeuze];

    const aiUplift = {
      faq:       { min: 0.01, max: 0.03, desc: "Minder gemiste vragen, hogere klanttevredenheid" },
      leads:     { min: 0.04, max: 0.09, desc: "Gemiste leads direct opgevolgd — gemiddeld 15-30% meer conversies uit bestaand verkeer" },
      afspraken: { min: 0.06, max: 0.13, desc: "24/7 boeken = nooit meer een gemiste afspraak, direct meer bezette slots" },
      volledig:  { min: 0.08, max: 0.16, desc: "Leads + afspraken + vragen volledig geautomatiseerd" },
      geen:      { min: 0,    max: 0,    desc: "" },
    }[aiKeuze];

    // Gecombineerd: AI voegt 80% van zijn waarde toe naast website (overlap)
    const aiMultiplier = heeftWebsite ? 0.8 : 1;
    const totalMin = websiteUplift.min + aiUplift.min * aiMultiplier;
    const totalMax = websiteUplift.max + aiUplift.max * aiMultiplier;

    const extraMin = Math.round(huidig * totalMin * multiplier);
    const extraMax = Math.round(huidig * totalMax * multiplier);
    const extraMid = (extraMin + extraMax) / 2;

    // Prijzen
    const wp = { starter: { e: 500, m: 50 }, business: { e: 1000, m: 75 }, geen: { e: 0, m: 0 } }[websiteKeuze];
    const ap = { faq: { e: 300, m: 50 }, leads: { e: 600, m: 90 }, afspraken: { e: 900, m: 120 }, volledig: { e: 1500, m: 175 }, geen: { e: 0, m: 0 } }[aiKeuze];
    const korting = heeftWebsite && heeftAi;
    const factor = korting ? 0.8 : 1;
    const eenmalig = Math.round((wp.e + ap.e) * factor);
    const maand = Math.round((wp.m + ap.m) * factor);

    const naamDelen = [
      heeftWebsite ? (websiteKeuze === "starter" ? "Website Starter" : "Website Business") : "",
      heeftAi ? ({ faq: "FAQ Chatbot", leads: "Leadopvolging", afspraken: "Afspraken Agent", volledig: "Volledige AI Agent" } as Record<string, string>)[aiKeuze] ?? "" : "",
    ].filter(Boolean);
    const pakketnaam = naamDelen.join(" + ") + (korting ? " (−20%)" : "");

    const descDelen = [websiteUplift.desc, aiUplift.desc].filter(Boolean);
    const desc = descDelen.join(" · ") || "Meer omzet via betere online aanwezigheid";

    const terugverdien = Math.ceil(eenmalig / Math.max(extraMid - maand, 1));

    setResult({
      huidig, extraMin, extraMax, terugverdien,
      label: pakketnaam, desc,
      eenmalig, maand, korting, pakketnaam,
      brancheMultiplier: multiplier,
    });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all appearance-none";

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-white">Life</span><span className="text-violet-400">gix</span>
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">
            ← Terug naar home
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">ROI Calculator</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Bereken je return</h1>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Vul je situatie in en zie een realistische schatting van wat een website of AI-agent jou kan opleveren.
          </p>
        </div>

        {/* Calculator */}
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white/50 mb-1.5">Branche</label>
              <BrancheCombobox
                value={branche}
                onChange={setBranche}
                branches={BRANCHES}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/50 mb-1.5">Klanten per maand</label>
              <input
                type="number" min="1" value={klanten}
                onChange={(e) => setKlanten(e.target.value)}
                placeholder="bijv. 80"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-white/50 mb-1.5">
              Gemiddelde omzet per klant (€)
            </label>
            <input
              type="number" min="1" value={omzetPerKlant}
              onChange={(e) => setOmzetPerKlant(e.target.value)}
              placeholder="bijv. 45"
              className={inputClass}
            />
          </div>

          {/* Website keuze */}
          <div>
            <label className="block text-xs font-medium text-white/50 mb-2">
              Website <span className="text-white/30">(optioneel)</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { val: "geen" as const, label: "Geen", prijs: "" },
                { val: "starter" as const, label: "Starter", prijs: "€500" },
                { val: "business" as const, label: "Business", prijs: "€1.000" },
              ].map((opt) => (
                <button key={opt.val} type="button"
                  onClick={() => setWebsiteKeuze(opt.val)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors border ${
                    websiteKeuze === opt.val
                      ? "bg-violet-600/30 border-violet-500/60 text-white"
                      : "bg-white/5 border-white/10 text-white/50 hover:text-white/80"
                  }`}>
                  <div>{opt.label}</div>
                  {opt.prijs && <div className="text-xs opacity-70 mt-0.5">{opt.prijs}</div>}
                </button>
              ))}
            </div>
          </div>

          {/* AI keuze */}
          <div>
            <label className="block text-xs font-medium text-white/50 mb-2">
              AI Agent <span className="text-white/30">(optioneel)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { val: "geen" as const, label: "Geen", prijs: "" },
                { val: "faq" as const, label: "FAQ", prijs: "€300" },
                { val: "leads" as const, label: "Leads", prijs: "€600" },
                { val: "afspraken" as const, label: "Afspraken", prijs: "€900" },
                { val: "volledig" as const, label: "Volledig", prijs: "€1.500" },
              ].map((opt) => (
                <button key={opt.val} type="button"
                  onClick={() => setAiKeuze(opt.val)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors border ${
                    aiKeuze === opt.val
                      ? "bg-violet-600/30 border-violet-500/60 text-white"
                      : "bg-white/5 border-white/10 text-white/50 hover:text-white/80"
                  }`}>
                  <div>{opt.label}</div>
                  {opt.prijs && <div className="text-xs opacity-70 mt-0.5">{opt.prijs}</div>}
                </button>
              ))}
            </div>
            {websiteKeuze !== "geen" && aiKeuze !== "geen" && (
              <p className="mt-2 text-xs text-green-400 font-medium">✓ Bundel — automatisch 20% korting toegepast</p>
            )}
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
          <div className="mt-6 space-y-4">
            <div className="p-8 rounded-2xl bg-violet-950/30 border border-violet-500/20 space-y-6">
              {/* Metrics */}
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-xs text-white/40 mb-1">Huidige maandomzet</p>
                  <p className="text-2xl font-bold text-white">
                    €{result.huidig.toLocaleString("nl-NL")}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/30">
                  <p className="text-xs text-violet-300/70 mb-1">Geschatte extra omzet/mnd</p>
                  <p className="text-xl font-bold text-violet-300">
                    +€{result.extraMin.toLocaleString("nl-NL")}
                    <span className="text-base text-violet-400/70"> – </span>
                    €{result.extraMax.toLocaleString("nl-NL")}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-xs text-white/40 mb-1">
                    {result.pakketnaam}{result.korting && <span className="ml-1 text-violet-400"> (bundel)</span>}
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

              {/* Insight */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-violet-400" fill="none" viewBox="0 0 10 10">
                    <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-sm text-white/60 space-y-1">
                  <p>
                    <span className="text-white/90 font-medium">{result.label}:</span>{" "}
                    {result.desc}.
                  </p>
                  <p>
                    Geschatte terugverdientijd:{" "}
                    <span className="text-violet-300 font-medium">
                      {result.terugverdien <= 1
                        ? "minder dan 1 maand"
                        : result.terugverdien <= 3
                        ? `~${result.terugverdien} maanden`
                        : result.terugverdien <= 12
                        ? `${result.terugverdien} maanden`
                        : `meer dan 1 jaar`}
                    </span>
                    {" "}(op basis van het gemiddelde van de bandbreedte).
                  </p>
                </div>
              </div>

              <Link
                href="/#contact"
                className="block text-center w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-colors"
              >
                Vraag gratis offerte aan →
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="text-xs text-white/30 leading-relaxed">
                <span className="text-white/50 font-medium">Let op:</span> Dit zijn indicatieve schattingen op basis van branchegemiddelden en typische groeicijfers bij bedrijven zonder of met een zwakke online aanwezigheid. Werkelijke resultaten hangen af van factoren zoals je huidige zichtbaarheid, concurrentie, locatie en hoe actief je de website of AI-agent inzet. Geen enkele investering garandeert een vast rendement.
              </p>
            </div>
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
