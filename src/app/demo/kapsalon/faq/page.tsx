import type { Metadata } from "next";

export const metadata: Metadata = { title: "Veelgestelde vragen" };

const FAQS = [
  { v: "Wat zijn jullie openingstijden?", a: "Dinsdag t/m vrijdag van 9:00 tot 18:00, zaterdag van 9:00 tot 16:00. Op maandag en zondag zijn we gesloten." },
  { v: "Waar zijn jullie te vinden?", a: "Dreiumme 11-13 in Warnsveld, middenin het winkelcentrum. Parkeren kan gratis voor de deur." },
  { v: "Is een afspraak verplicht?", a: "Ja, een afspraak is verplicht. Je kunt telefonisch of via deze website een afspraak maken." },
  { v: "Welke betaalmethoden accepteren jullie?", a: "Pin en contant. Helaas geen creditcard." },
  { v: "Doen jullie ook kinderknipbeurten?", a: "Ja, kinderen zijn van harte welkom bij ons." },
  { v: "Kan ik een cadeaubon kopen?", a: "Zeker, vraag ernaar aan de balie." },
];

export default function FaqPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#e0a58c] mb-4">Vragen?</p>
          <h1 className="font-serif text-4xl text-[#f3e9e4]">Veelgestelde vragen</h1>
          <p className="mt-4 text-[#f3e9e4]/45 max-w-md mx-auto">
            Staat je vraag er niet bij? Onze AI-assistent (hieronder) helpt je direct verder.
          </p>
        </div>

        {/* Chatbot preview */}
        <div className="mb-16 rounded-2xl border border-[#e0a58c]/20 bg-[#150d0f] overflow-hidden">
          <div className="px-5 py-3.5 border-b border-[#e0a58c]/15 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#e0a58c] animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-[#e0a58c]/80">Kapsalon Davines — assistent</span>
          </div>
          <div className="p-5 flex flex-col gap-3">
            <div className="self-start max-w-[85%] bg-[#e0a58c]/10 border border-[#e0a58c]/20 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-[#f3e9e4]/80">
              Hoi! Waar kan ik je mee helpen? Vraag gerust naar openingstijden, prijzen of een afspraak.
            </div>
            <div className="self-end max-w-[85%] bg-[#e0a58c] rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-[#1b1113] font-medium">
              Kan ik zonder afspraak langskomen?
            </div>
            <div className="self-start max-w-[85%] bg-[#e0a58c]/10 border border-[#e0a58c]/20 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-[#f3e9e4]/80">
              Een afspraak is bij ons verplicht — dat kan telefonisch (0575 – 57 07 01) of via deze website. Zal ik je doorverwijzen?
            </div>
          </div>
          <p className="px-5 pb-4 text-[10px] text-[#f3e9e4]/25">
            Voorbeeldweergave van de AI-chatbot — een vraag die de bot niet kent wordt opgeslagen zodat de eigenaar &apos;m later kan beantwoorden, en de bot leert bij.
          </p>
        </div>

        {/* FAQ lijst */}
        <div className="flex flex-col gap-3">
          {FAQS.map((item) => (
            <details key={item.v} className="group rounded-2xl border border-[#e0a58c]/12 bg-[#150d0f] px-6 py-4 open:pb-5">
              <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-[#f3e9e4]/85 list-none">
                {item.v}
                <span className="text-[#e0a58c] group-open:rotate-45 transition-transform text-lg leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#f3e9e4]/45 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
