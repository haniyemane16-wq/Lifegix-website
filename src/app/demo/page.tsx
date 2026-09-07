import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo's — Bekijk voorbeeldwebsites van LifeGix",
  description:
    "Bekijk drie werkende voorbeeldwebsites van LifeGix: horeca, zorg en diensten. Zo kan uw website er ook uitzien — live binnen 1–2 weken.",
};

const demos = [
  {
    href: "/demo/horeca",
    label: "Horeca",
    naam: "Restaurant De Waag",
    tekst: "Restaurantwebsite met menukaart en online reserveren.",
    accent: "#c0392b",
  },
  {
    href: "/demo/zorg",
    label: "Zorg",
    naam: "FysioFit Zutphen",
    tekst: "Praktijkwebsite met behandelingen, team en afspraak maken.",
    accent: "#1d6fa4",
  },
  {
    href: "/demo/diensten",
    label: "Diensten",
    naam: "Barbershop Yazan",
    tekst: "Barbershopwebsite met prijslijst en afspraak maken.",
    accent: "#c9a84c",
  },
];

export default function DemoOverzichtPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/95 sm:bg-[#0a0a0f]/80 sm:backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-white">Life</span><span className="text-violet-400">gix</span>
          </Link>
          <Link href="/bestellen" className="text-sm font-medium px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors">
            Direct beginnen →
          </Link>
        </div>
      </nav>

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
              Drie werkende voorbeeldwebsites, gebouwd door LifeGix. Kies de branche die bij u past en klik rond.
            </p>
          </div>
        </section>

        {/* Demo cards */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto grid gap-5 sm:grid-cols-3">
            {demos.map((demo) => (
              <Link
                key={demo.href}
                href={demo.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3 hover:border-violet-500/50 hover:bg-white/[0.07] transition-colors"
              >
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
              </Link>
            ))}
          </div>
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
    </main>
  );
}
