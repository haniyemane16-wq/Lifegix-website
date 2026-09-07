"use client";
import Link from "next/link";
import { useState } from "react";

// Nieuwe (klant)demo toevoegen: één entry hieraan toevoegen.
// Interne demo's krijgen een href (/demo/<slug>); externe demo's (losse Vercel-projecten) een url.
const demos = [
  {
    url: "https://autoservice-vanderwiel.vercel.app",
    label: "Auto",
    naam: "Autoservice v.d. Wiel",
    tekst: "Garagewebsite met diensten, openingstijden en contact.",
    accent: "#d97706",
    zoekwoorden: "auto garage apk onderhoud wiel vanderwiel warnsveld",
  },
  {
    url: "https://jh-autoservice-demo.vercel.app",
    label: "Auto",
    naam: "JH-Autoservice",
    tekst: "Garagewebsite met diensten, openingstijden en contact.",
    accent: "#2563eb",
    zoekwoorden: "auto garage apk onderhoud jh eefde",
  },
  {
    url: "https://jh-demo-nieuw.vercel.app",
    label: "Auto",
    naam: "JH-Autoservice — nieuwe stijl",
    tekst: "Tweede ontwerp voor JH-Autoservice, in een andere stijl.",
    accent: "#2563eb",
    zoekwoorden: "auto garage apk onderhoud jh eefde",
  },
  {
    url: "https://brasserie-de-linde.vercel.app",
    label: "Horeca",
    naam: "Brasserie De Linde",
    tekst: "Brasseriewebsite met menukaart en reserveren.",
    accent: "#b0413e",
    zoekwoorden: "restaurant brasserie eten reserveren linde",
  },
  {
    url: "https://autofixpro-lac.vercel.app",
    label: "Auto",
    naam: "AutoFixPro",
    tekst: "Garagewebsite met diensten en online afspraak maken.",
    accent: "#16a34a",
    zoekwoorden: "auto garage apk onderhoud autofix",
  },
  {
    href: "/demo/horeca",
    label: "Horeca",
    naam: "Restaurant De Waag",
    tekst: "Restaurantwebsite met menukaart en online reserveren.",
    accent: "#c0392b",
    zoekwoorden: "restaurant eten reserveren cafe waag zutphen",
  },
  {
    href: "/demo/zorg",
    label: "Zorg",
    naam: "FysioFit Zutphen",
    tekst: "Praktijkwebsite met behandelingen, team en afspraak maken.",
    accent: "#1d6fa4",
    zoekwoorden: "fysio fysiotherapie praktijk zorg fysiofit zutphen",
  },
  {
    href: "/demo/diensten",
    label: "Diensten",
    naam: "Barbershop Yazan",
    tekst: "Barbershopwebsite met prijslijst en afspraak maken.",
    accent: "#c9a84c",
    zoekwoorden: "kapper barbershop knippen baard yazan zutphen",
  },
];

export default function DemoZoeker() {
  const [zoek, setZoek] = useState("");

  const term = zoek.trim().toLowerCase();
  const resultaten = term
    ? demos.filter((d) => `${d.naam} ${d.label} ${d.zoekwoorden}`.toLowerCase().includes(term))
    : demos;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Zoekbalk */}
      <div className="relative max-w-md mx-auto mb-10">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 pointer-events-none"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="search"
          value={zoek}
          onChange={(e) => setZoek(e.target.value)}
          placeholder="Zoek op bedrijfsnaam of branche…"
          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-colors"
        />
      </div>

      {/* Resultaten */}
      {resultaten.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-3">
          {resultaten.map((demo) => {
            const kaartClass =
              "group rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3 hover:border-violet-500/50 hover:bg-white/[0.07] transition-colors";
            const inhoud = (
              <>
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${demo.accent}22`, border: `1px solid ${demo.accent}55` }}
                >
                  <span className="w-3 h-3 rounded-full" style={{ background: demo.accent }} />
                </span>
                <p className="text-xs font-medium tracking-widest uppercase text-white/40">{demo.label}</p>
                <h2 className="text-lg font-bold">{demo.naam}</h2>
                <p className="text-sm text-white/60 flex-1">{demo.tekst}</p>
                <span className="text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors">
                  Bekijk demo →
                </span>
              </>
            );
            return "url" in demo && demo.url ? (
              <a key={demo.url} href={demo.url} target="_blank" rel="noopener noreferrer" className={kaartClass}>
                {inhoud}
              </a>
            ) : (
              <Link key={demo.href} href={demo.href ?? "/demo"} className={kaartClass}>
                {inhoud}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center rounded-2xl border border-white/10 bg-white/5 py-14 px-8">
          <h2 className="text-xl font-bold mb-2">Nog geen demo voor &ldquo;{zoek.trim()}&rdquo;</h2>
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            Bel of mail even — dan maak ik binnen een paar dagen een demo op maat voor uw bedrijf. Gratis en vrijblijvend.
          </p>
          <a href="tel:+31854005545" className="inline-block px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-colors purple-glow">
            Bel 085 - 400 55 45
          </a>
        </div>
      )}
    </div>
  );
}
