import type { Metadata } from "next";

export const metadata: Metadata = { title: "Diensten & prijzen" };

const CATEGORIEEN = [
  {
    naam: "Knippen",
    items: [
      { naam: "Knippen dames", prijs: "35" },
      { naam: "Knippen heren", prijs: "25" },
      { naam: "Knippen kinderen", prijs: "20" },
      { naam: "Wassen, knippen & stylen", prijs: "45" },
    ],
  },
  {
    naam: "Kleur & stylen",
    items: [
      { naam: "Kleuren", prijs: "vanaf 65" },
      { naam: "Föhnen / stylen", prijs: "25" },
    ],
  },
];

export default function DienstenPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#e0a58c] mb-4">Prijslijst</p>
          <h1 className="font-serif text-4xl text-[#f3e9e4]">Diensten &amp; prijzen</h1>
          <p className="mt-4 text-[#f3e9e4]/45 max-w-md mx-auto">
            Heldere prijzen, geen verrassingen. Twijfel je wat het beste bij je past? Vraag het gerust bij het maken van je afspraak.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {CATEGORIEEN.map((cat) => (
            <div key={cat.naam}>
              <h2 className="font-serif text-xl text-[#e0a58c] mb-5">{cat.naam}</h2>
              <div className="border border-[#e0a58c]/12 rounded-2xl overflow-hidden">
                {cat.items.map((item, i) => (
                  <div
                    key={item.naam}
                    className={`flex items-center justify-between px-6 py-4 ${i !== cat.items.length - 1 ? "border-b border-[#e0a58c]/10" : ""}`}
                  >
                    <span className="text-sm text-[#f3e9e4]/70">{item.naam}</span>
                    <span className="font-serif text-[#e0a58c]">€ {item.prijs}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="tel:+31575570701" className="inline-block px-8 py-3.5 rounded-full bg-[#e0a58c] text-[#1b1113] text-xs tracking-widest uppercase font-bold hover:bg-[#e8b8a2] transition-colors">
            Maak een afspraak
          </a>
        </div>
      </div>
    </section>
  );
}
