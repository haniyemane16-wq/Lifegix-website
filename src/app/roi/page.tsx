"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { WEBSITE_PAKKETTEN, AI_PAKKETTEN, bundelPrijs, euro, type WebsitePakketId, type AIPakketId } from "@/lib/prijzen";

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

// Realistische bandbreedtes (min–max) van extra omzet per maand.
// Bewust conservatief: dit zijn indicaties, geen beloftes.
// Website: meer vindbaarheid via Google en een betere eerste indruk.
// AI-agent: snellere opvolging en minder gemiste vragen/afspraken.
type Uplift = { min: number; max: number; desc: string };

const WEBSITE_UPLIFT: Record<WebsitePakketId, Uplift> = {
  visitekaartje: { min: 0.02, max: 0.05, desc: "Vindbaar op Google en een professionele eerste indruk" },
  starter:       { min: 0.03, max: 0.07, desc: "Meer vindbaarheid via Google en een professionelere uitstraling" },
  business:      { min: 0.05, max: 0.10, desc: "Uitgebreide SEO, meer pagina's en hogere conversie" },
};

const AI_UPLIFT: Record<AIPakketId, Uplift> = {
  ai_faq:       { min: 0.01, max: 0.03, desc: "Minder gemiste vragen, hogere klanttevredenheid" },
  ai_leads:     { min: 0.02, max: 0.05, desc: "Aanvragen worden direct opgevolgd in plaats van vergeten" },
  ai_afspraken: { min: 0.03, max: 0.06, desc: "24/7 afspraken inplannen zonder telefoontjes" },
  ai_volledig:  { min: 0.04, max: 0.08, desc: "Vragen, leads en afspraken volledig geautomatiseerd" },
};

// Website + AI overlappen deels in effect: AI telt voor 80% mee naast een website.
const OVERLAP_FACTOR = 0.8;

type WebsiteKeuze = "geen" | WebsitePakketId;
type AiKeuze = "geen" | AIPakketId;

type Resultaat = {
  huidig: number;
  extraMin: number;
  extraMax: number;
  terugverdien: number | null; // null = extra omzet dekt de maandkosten niet
  label: string;
  desc: string;
  eenmalig: number;
  maand: number;
  korting: boolean;
};

export default function ROIPage() {
  const [branche, setBranche] = useState("");
  const [klanten, setKlanten] = useState("");
  const [omzetPerKlant, setOmzetPerKlant] = useState("");
  const [websiteKeuze, setWebsiteKeuze] = useState<WebsiteKeuze>("starter");
  const [aiKeuze, setAiKeuze] = useState<AiKeuze>("geen");
  const [fout, setFout] = useState("");
  const [result, setResult] = useState<Resultaat | null>(null);

  const calculate = () => {
    const k = parseInt(klanten, 10);
    const o = parseFloat(omzetPerKlant);
    if (!k || !o || k <= 0 || o <= 0) {
      setFout("Vul het aantal klanten per maand en de gemiddelde omzet per klant in.");
      setResult(null);
      return;
    }
    if (websiteKeuze === "geen" && aiKeuze === "geen") {
      setFout("Kies minimaal een website of een AI-agent.");
      setResult(null);
      return;
    }
    setFout("");

    const huidig = k * o;
    const multiplier = BRANCH_MULTIPLIER[branche] ?? 1.0;

    const website = websiteKeuze === "geen" ? null : WEBSITE_PAKKETTEN.find((p) => p.id === websiteKeuze) ?? null;
    const ai = aiKeuze === "geen" ? null : AI_PAKKETTEN.find((p) => p.id === aiKeuze) ?? null;

    const wu: Uplift = website ? WEBSITE_UPLIFT[website.id] : { min: 0, max: 0, desc: "" };
    const au: Uplift = ai ? AI_UPLIFT[ai.id] : { min: 0, max: 0, desc: "" };
    const aiFactor = website ? OVERLAP_FACTOR : 1;

    const extraMin = Math.round(huidig * (wu.min + au.min * aiFactor) * multiplier);
    const extraMax = Math.round(huidig * (wu.max + au.max * aiFactor) * multiplier);
    const extraMid = (extraMin + extraMax) / 2;

    // Prijzen — zelfde bron en bundellogica als /bestellen en de checkout
    const korting = !!website && !!ai;
    const prijs = website && ai
      ? bundelPrijs(website, ai)
      : { eenmalig: (website ?? ai)!.eenmalig, maandelijks: (website ?? ai)!.maandelijks };

    const label = [website?.naam, ai?.naam].filter(Boolean).join(" + ") + (korting ? " (−20%)" : "");
    const desc = [wu.desc, au.desc].filter(Boolean).join(" · ");

    const nettoPerMaand = extraMid - prijs.maandelijks;
    const terugverdien = nettoPerMaand > 0 ? Math.ceil(prijs.eenmalig / nettoPerMaand) : null;

    setResult({
      huidig, extraMin, extraMax, terugverdien,
      label, desc,
      eenmalig: prijs.eenmalig, maand: prijs.maandelijks, korting,
    });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all appearance-none";

  const keuzeClass = (actief: boolean) =>
    `px-3 py-2.5 rounded-xl text-sm font-medium transition-colors border ${
      actief ? "bg-violet-600/30 border-violet-500/60 text-white" : "bg-white/5 border-white/10 text-white/50 hover:text-white/80"
    }`;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
      </div>

      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 relative w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">ROI Calculator</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Wat kan het je opleveren?</h1>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Vul je situatie in en zie een voorzichtige schatting van wat een website of AI-agent jou per maand extra kan opleveren.
          </p>
        </div>

        {/* Calculator */}
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white/50 mb-1.5">Branche</label>
              <BrancheCombobox value={branche} onChange={setBranche} branches={BRANCHES} />
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
            <label className="block text-xs font-medium text-white/50 mb-1.5">Gemiddelde omzet per klant (€)</label>
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button type="button" onClick={() => setWebsiteKeuze("geen")} className={keuzeClass(websiteKeuze === "geen")}>
                <div>Geen</div>
              </button>
              {WEBSITE_PAKKETTEN.map((p) => (
                <button key={p.id} type="button" onClick={() => setWebsiteKeuze(p.id)} className={keuzeClass(websiteKeuze === p.id)}>
                  <div>{p.naam.replace("Website ", "")}</div>
                  <div className="text-xs opacity-70 mt-0.5">{euro(p.eenmalig)}</div>
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
              <button type="button" onClick={() => setAiKeuze("geen")} className={keuzeClass(aiKeuze === "geen")}>
                <div>Geen</div>
              </button>
              {AI_PAKKETTEN.map((p) => (
                <button key={p.id} type="button" onClick={() => setAiKeuze(p.id)} className={keuzeClass(aiKeuze === p.id)}>
                  <div>{p.naam.replace(" Agent", "").replace(" Chatbot", "")}</div>
                  <div className="text-xs opacity-70 mt-0.5">{euro(p.eenmalig)}</div>
                </button>
              ))}
            </div>
            {websiteKeuze !== "geen" && aiKeuze !== "geen" && (
              <p className="mt-2 text-xs text-green-400 font-medium">✓ Bundel — automatisch 20% korting toegepast</p>
            )}
          </div>

          {fout && <p className="text-sm text-red-400 text-center">{fout}</p>}

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
                  <p className="text-2xl font-bold text-white">{euro(result.huidig)}</p>
                </div>
                <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/30">
                  <p className="text-xs text-violet-300/70 mb-1">Geschatte extra omzet/mnd</p>
                  <p className="text-xl font-bold text-violet-300">
                    +{euro(result.extraMin)}
                    <span className="text-base text-violet-400/70"> – </span>
                    {euro(result.extraMax)}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-xs text-white/40 mb-1">
                    {result.label}{result.korting && <span className="ml-1 text-violet-400"> (bundel)</span>}
                  </p>
                  <p className="text-lg font-bold text-white">
                    {euro(result.eenmalig)}
                    <span className="text-xs font-normal text-white/40"> eenmalig</span>
                  </p>
                  <p className="text-sm font-semibold text-violet-300">
                    + {euro(result.maand)}
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
                    {result.terugverdien === null ? (
                      <>
                        Bij deze schatting dekt de extra omzet de maandkosten <span className="text-amber-300 font-medium">nog niet</span>.
                        Vul een groter aantal klanten in, of plan een gesprek om te kijken wat voor jou wél rendabel is.
                      </>
                    ) : (
                      <>
                        Geschatte terugverdientijd van de eenmalige kosten:{" "}
                        <span className="text-violet-300 font-medium">
                          {result.terugverdien <= 1
                            ? "minder dan 1 maand"
                            : result.terugverdien <= 24
                            ? `${result.terugverdien} maanden`
                            : "meer dan 2 jaar"}
                        </span>
                        {" "}(op basis van het midden van de bandbreedte, na aftrek van de maandkosten).
                      </>
                    )}
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
                <span className="text-white/50 font-medium">Let op:</span> Dit zijn indicatieve schattingen op basis van branchegemiddelden en typische groeicijfers bij bedrijven zonder of met een zwakke online aanwezigheid. Werkelijke resultaten hangen af van je huidige zichtbaarheid, concurrentie, locatie en hoe actief je de website of AI-agent inzet. Geen enkele investering garandeert een vast rendement.
              </p>
            </div>
          </div>
        )}

        <p className="text-center mt-10 text-white/30 text-sm">
          Klaar om te starten?{" "}
          <Link href="/#prijzen" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
            Bekijk de pakketten →
          </Link>
        </p>
      </div>

      <Footer />
    </main>
  );
}
