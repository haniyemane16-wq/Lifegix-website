import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import DemoZoeker from "./DemoZoeker";

export const metadata: Metadata = {
  title: "Demo's — Bekijk voorbeeldwebsites van LifeGix",
  description:
    "Bekijk werkende voorbeeldwebsites van LifeGix. Zoek op bedrijfsnaam of branche en zie hoe uw website eruit kan zien — live binnen 1–2 weken.",
};

export default function DemoOverzichtPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
      <Navbar />

      <div className="pt-24">
        {/* Hero */}
        <section className="py-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
          </div>
          <div className="max-w-4xl mx-auto relative">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">Demo&apos;s</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6">
              Zo kan uw website<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
                eruitzien
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Werkende voorbeeldwebsites, gebouwd door LifeGix. Zoek uw bedrijfsnaam of kijk rond bij andere branches.
            </p>
          </div>
        </section>

        {/* Zoekbalk + demo cards */}
        <section className="px-6 pb-16">
          <DemoZoeker />
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto text-center rounded-2xl border border-violet-500/20 bg-violet-500/10 py-12 px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Zoiets voor uw bedrijf?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Binnen 1–2 weken live, voor een eerlijke MKB-prijs. Bel of app, dan laat ik zien wat er kan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+31854005545" className="px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-colors purple-glow">
                Bel 085 - 400 55 45
              </a>
              <Link href="/bestellen" className="px-6 py-3.5 rounded-xl border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 font-semibold text-sm transition-colors">
                Direct beginnen →
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
