import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Over ons" };

export default function OverOnsPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#e0a58c] mb-4">Ons verhaal</p>
          <h1 className="font-serif text-4xl text-[#f3e9e4]">Over Kapsalon Davines</h1>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/demo/kapsalon/over-ons.jpg"
            alt="Kapster van Kapsalon Davines knipt het haar van een klant"
            fill
            sizes="(min-width: 640px) 672px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 text-[#f3e9e4]/55 leading-relaxed">
          <p>
            Kapsalon Davines is een lokale, zelfstandige kapperszaak in Warnsveld.
            Wij bieden knip-, kleur- en stylingbehandelingen voor dames, heren en
            kinderen, met persoonlijk advies dat past bij jouw haar en wensen.
          </p>
          <p>
            We werken met professionele haarverzorgingsproducten van hoge
            kwaliteit, zodat je niet alleen tevreden de deur uitloopt, maar je
            haar er ook thuis goed uit blijft zien.
          </p>
          <p>
            Onze salon zit middenin winkelcentrum Dreiumme in Warnsveld — vlot
            bereikbaar en met gratis parkeren voor de deur. Of je nu al jaren
            klant bent of voor het eerst langskomt: bij ons ben je aan het juiste
            adres voor een knipbeurt met aandacht.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-px bg-[#e0a58c]/10 rounded-2xl overflow-hidden">
          {[
            { label: "Voor", waarde: "Dames, heren & kinderen" },
            { label: "Locatie", waarde: "Winkelcentrum Dreiumme" },
            { label: "Parkeren", waarde: "Gratis voor de deur" },
          ].map((item) => (
            <div key={item.label} className="bg-[#1b1113] p-6 text-center flex flex-col gap-1.5">
              <span className="text-xs tracking-widest uppercase text-[#e0a58c]/70">{item.label}</span>
              <span className="text-sm text-[#f3e9e4]/70">{item.waarde}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
