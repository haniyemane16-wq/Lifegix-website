import Image from "next/image";
import Link from "next/link";

const DIENSTEN_UITGELICHT = [
  { naam: "Knippen dames", prijs: "€35" },
  { naam: "Knippen heren", prijs: "€25" },
  { naam: "Kleuren", prijs: "vanaf €65" },
];

export default function KapsalonHome() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden">
        <Image
          src="/demo/kapsalon/hero.jpg"
          alt="Interieur van Kapsalon Davines"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1b1113]/70" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 55% at 50% 35%, rgba(224,165,140,0.12) 0%, transparent 70%)" }}
        />
        <p className="relative text-xs tracking-[0.3em] uppercase text-[#e0a58c] mb-6">Dreiumme · Warnsveld</p>
        <h1 className="font-serif max-w-3xl leading-tight text-4xl sm:text-6xl text-[#f3e9e4]">
          Knippen met <em className="text-[#e0a58c] not-italic">aandacht</em>, hier om de hoek
        </h1>
        <p className="mt-6 max-w-lg text-[#f3e9e4]/50 leading-relaxed">
          Kapsalon Davines knipt, kleurt en styled dames en heren in Warnsveld —
          met persoonlijk advies en professionele haarverzorgingsproducten.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <a href="tel:+31575570701" className="px-8 py-3.5 rounded-full bg-[#e0a58c] text-[#1b1113] text-xs tracking-widest uppercase font-bold hover:bg-[#e8b8a2] transition-colors">
            Maak een afspraak
          </a>
          <Link href="/demo/kapsalon/diensten" className="px-8 py-3.5 rounded-full border border-[#e0a58c]/30 text-[#f3e9e4]/70 text-xs tracking-widest uppercase font-medium hover:border-[#e0a58c]/60 transition-colors">
            Bekijk diensten &amp; prijzen
          </Link>
        </div>
      </section>

      {/* ── Uitgelichte diensten ── */}
      <section className="py-16 px-6 border-t border-[#e0a58c]/10">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-px bg-[#e0a58c]/10">
          {DIENSTEN_UITGELICHT.map((d) => (
            <div key={d.naam} className="bg-[#1b1113] p-8 flex flex-col items-center text-center gap-2">
              <span className="font-serif text-2xl text-[#e0a58c]">{d.prijs}</span>
              <span className="text-sm text-[#f3e9e4]/60">{d.naam}</span>
            </div>
          ))}
        </div>
        <p className="text-center mt-6">
          <Link href="/demo/kapsalon/diensten" className="text-sm text-[#e0a58c] hover:underline">
            Bekijk alle diensten &amp; prijzen →
          </Link>
        </p>
      </section>

      {/* ── Waarom Davines ── */}
      <section className="py-20 px-6 border-t border-[#e0a58c]/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/demo/kapsalon/producten.jpg"
              alt="Haarverzorgingsproducten en styling tools bij Kapsalon Davines"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-8">
            {[
              { titel: "Persoonlijk advies", tekst: "Elke knipbeurt begint met een goed gesprek over wat bij je past." },
              { titel: "Professionele producten", tekst: "We werken met professionele haarverzorgingsproducten van hoge kwaliteit." },
              { titel: "Vlakbij", tekst: "Middenin winkelcentrum Dreiumme — gratis parkeren voor de deur." },
            ].map((item) => (
              <div key={item.titel} className="flex flex-col gap-2">
                <div className="w-10 h-px bg-[#e0a58c]/40" />
                <h3 className="font-serif text-lg text-[#f3e9e4]">{item.titel}</h3>
                <p className="text-sm text-[#f3e9e4]/45 leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 border-t border-[#e0a58c]/10 text-center">
        <h2 className="font-serif text-3xl text-[#f3e9e4] mb-4">Tijd voor een nieuwe look?</h2>
        <p className="text-[#f3e9e4]/45 mb-8">Bel of loop langs — een afspraak is zo gemaakt.</p>
        <a href="tel:+31575570701" className="inline-block px-8 py-3.5 rounded-full bg-[#e0a58c] text-[#1b1113] text-xs tracking-widest uppercase font-bold hover:bg-[#e8b8a2] transition-colors">
          0575 – 57 07 01
        </a>
      </section>
    </>
  );
}
