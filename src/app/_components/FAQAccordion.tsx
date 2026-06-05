"use client";
import { useState } from "react";

const items = [
  {
    q: "Hoe lang duurt het om een website te bouwen?",
    a: "Gemiddeld 1 tot 2 weken na ons eerste gesprek. Jij levert de informatie aan, ik regel de rest — van ontwerp tot live zetten.",
  },
  {
    q: "Wat kost een website?",
    a: "Websites starten vanaf €500 eenmalig plus €50 per maand voor hosting, onderhoud en support. Gebruik de ROI-calculator voor een berekening op maat op basis van jouw situatie.",
  },
  {
    q: "Heb ik technische kennis nodig?",
    a: "Nee, helemaal niet. Ik regel alles van A tot Z — ontwerp, teksten, hosting en techniek. Jij focust op je bedrijf, ik op de technologie.",
  },
  {
    q: "Wat is een AI agent precies?",
    a: "Een AI agent is een digitale assistent die automatisch taken uitvoert: klantvragen beantwoorden, afspraken inplannen, leads opvolgen — 24/7, ook als jij slaapt of werkt.",
  },
  {
    q: "Kan ik mijn website zelf aanpassen?",
    a: "Ja, kleine aanpassingen kun je zelf doen. Voor grotere wijzigingen sta ik altijd klaar — dat is inbegrepen bij het maandabonnement.",
  },
  {
    q: "Ik heb al een website. Kan ik alleen een AI agent afnemen?",
    a: "Absoluut. De AI agent koppelen we aan je bestaande website, WhatsApp-nummer of e-mail. Je hoeft niets te vervangen.",
  },
  {
    q: "Werken jullie alleen in Warnsveld?",
    a: "Ik ben gevestigd in Warnsveld maar werk voor bedrijven door heel Nederland. Alles gaat prima op afstand — met regelmatig contact via video of telefoon.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Veelgestelde vragen</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Staat jouw vraag er niet bij? Stuur een bericht en ik reageer binnen 24 uur.
          </p>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
              >
                <span className="text-sm font-medium text-white">{item.q}</span>
                <span className={`flex-shrink-0 w-5 h-5 rounded-full border border-violet-500/40 flex items-center justify-center transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
                  <svg className="w-3 h-3 text-violet-400" fill="none" viewBox="0 0 12 12">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              {/* CSS transition instead of mount/unmount — instant feel */}
              <div className={`overflow-hidden transition-all duration-200 ease-out ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-5">
                  <p className="text-sm text-white/55 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
