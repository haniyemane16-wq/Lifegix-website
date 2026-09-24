import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#e0a58c] mb-4">Kom langs</p>
          <h1 className="font-serif text-4xl text-[#f3e9e4]">Contact &amp; locatie</h1>
        </div>

        <div className="grid sm:grid-cols-2 gap-10">
          {/* Gegevens */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xs tracking-widest uppercase text-[#e0a58c] mb-3">Adres</h3>
              <p className="text-[#f3e9e4]/70 leading-relaxed">
                Dreiumme 11-13<br />
                7232 CN Warnsveld<br />
                <span className="text-[#f3e9e4]/40 text-sm">Gratis parkeren voor de deur</span>
              </p>
            </div>
            <div>
              <h3 className="text-xs tracking-widest uppercase text-[#e0a58c] mb-3">Telefoon</h3>
              <a href="tel:+31575570701" className="text-[#f3e9e4]/70 hover:text-[#e0a58c] transition-colors">
                0575 – 57 07 01
              </a>
              <p className="text-sm text-[#f3e9e4]/35 mt-1">Afspraak verplicht</p>
            </div>
            <div>
              <h3 className="text-xs tracking-widest uppercase text-[#e0a58c] mb-3">Openingstijden</h3>
              <div className="flex flex-col gap-1.5 text-sm">
                {[
                  { dag: "Maandag", tijd: "Gesloten" },
                  { dag: "Dinsdag – vrijdag", tijd: "9:00 – 18:00" },
                  { dag: "Zaterdag", tijd: "9:00 – 16:00" },
                  { dag: "Zondag", tijd: "Gesloten" },
                ].map((row) => (
                  <div key={row.dag} className="flex justify-between gap-4">
                    <span className="text-[#f3e9e4]/50">{row.dag}</span>
                    <span className={row.tijd === "Gesloten" ? "text-[#f3e9e4]/25" : "text-[#f3e9e4]/70"}>{row.tijd}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulier (demo — niet functioneel) */}
          <div className="rounded-2xl border border-[#e0a58c]/15 bg-[#150d0f] p-7">
            <h3 className="font-serif text-lg text-[#f3e9e4] mb-1">Stuur een bericht</h3>
            <p className="text-sm text-[#f3e9e4]/35 mb-5">We reageren doorgaans dezelfde dag.</p>
            <div className="flex flex-col gap-3">
              <input disabled placeholder="Naam" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#e0a58c]/15 text-sm text-[#f3e9e4] placeholder-[#f3e9e4]/25" />
              <input disabled placeholder="E-mailadres" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#e0a58c]/15 text-sm text-[#f3e9e4] placeholder-[#f3e9e4]/25" />
              <textarea disabled placeholder="Je bericht..." rows={4} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#e0a58c]/15 text-sm text-[#f3e9e4] placeholder-[#f3e9e4]/25 resize-none" />
              <button disabled className="w-full py-3 rounded-xl bg-[#e0a58c]/40 text-[#1b1113] text-xs tracking-widest uppercase font-bold cursor-not-allowed">
                Versturen
              </button>
              <p className="text-[10px] text-[#f3e9e4]/25 text-center">Demo-formulier — nog niet actief</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
