import Link from "next/link";

export const metadata = {
  title: "FysioFit Zutphen — Fysiotherapie | Afspraak binnen 2 dagen",
  description: "Fysiotherapiepraktijk FysioFit in Zutphen. Vergoed door zorgverzekeraar. Afspraak binnen 2 dagen. 9.6/10 op Zorgkaart. BIG-geregistreerd.",
};

const C = {
  bg: "#ffffff", bgZacht: "#f0f7ff", bgGrijs: "#f8fafc",
  accent: "#1d6fa4", accentLicht: "#e8f4fd", accentMedium: "#3b90c8",
  tekst: "#0f172a", tekstMid: "#475569", tekstZacht: "#94a3b8",
  border: "#e2e8f0", groen: "#059669", groenLicht: "#ecfdf5",
};

export default function ZorgDemoPage() {
  return (
    <main style={{ background: C.bg, color: C.tekst, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <ZorgNavbar />
      <Hero />
      <TrustBalk />
      <Behandelingen />
      <Vergoeding />
      <Team />
      <Reviews />
      <FAQSection />
      <Afspraak />
      <ZorgFooter />
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full text-xs pointer-events-none select-none"
        style={{ background: "rgba(15,23,42,0.85)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" }}>
        Demo door <span style={{ color: "#60a5fa", fontWeight: 600 }}>Lifegix</span> — niet een echte website
      </div>
    </main>
  );
}

function ZorgNavbar() {
  return (
    <header className="sticky top-0 z-50" style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: C.accentLicht }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2v14M2 9h14" stroke={C.accent} strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <span className="font-bold text-sm" style={{ color: C.tekst }}>FysioFit</span>
            <span className="text-sm" style={{ color: C.tekstMid }}> Zutphen</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {["Behandelingen", "Vergoeding", "Team", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm" style={{ color: C.tekstMid, touchAction: "manipulation" }}>{l}</a>
          ))}
        </nav>
        <a href="#afspraak" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
          style={{ background: C.accent, touchAction: "manipulation" }}>
          Afspraak maken
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ background: C.bgZacht }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: C.groenLicht, color: C.groen, border: `1px solid ${C.groen}30` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.groen }} />
            Nieuwe patiënten welkom · Afspraak binnen 2 dagen
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: C.tekst }}>
            Beweeg pijnvrij.<br />
            <span style={{ color: C.accent }}>Leef beter.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: C.tekstMid }}>
            Persoonlijke fysiotherapie in Zutphen. Rugklachten, sportblessures en revalidatie — vergoed door uw zorgverzekeraar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#afspraak" className="px-7 py-4 rounded-xl text-white font-semibold text-center"
              style={{ background: C.accent, touchAction: "manipulation" }}>
              Maak een afspraak →
            </a>
            <a href="tel:0575123456" className="px-7 py-4 rounded-xl font-semibold text-center"
              style={{ background: C.bg, color: C.tekst, border: `1px solid ${C.border}`, touchAction: "manipulation" }}>
              📞 0575 – 12 34 56
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm" style={{ color: C.tekstMid }}>
            <span>✓ BIG-geregistreerd</span>
            <span>✓ Alle verzekeraars</span>
            <span>✓ Geen verwijzing nodig</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { waarde: "9.6", label: "Zorgkaart score", sub: "Op basis van 184 reviews" },
            { waarde: "4.8★", label: "Google rating", sub: "127 Google reviews" },
            { waarde: "2 dgn", label: "Wachttijd", sub: "Gemiddeld voor nieuwe patiënten" },
            { waarde: "12+", label: "Jaar ervaring", sub: "Gespecialiseerde therapeuten" },
          ].map((s) => (
            <div key={s.label} className="p-5 rounded-2xl" style={{ background: C.bg, border: `1px solid ${C.border}` }}>
              <div className="text-2xl font-bold mb-1" style={{ color: C.accent }}>{s.waarde}</div>
              <div className="text-sm font-semibold mb-0.5" style={{ color: C.tekst }}>{s.label}</div>
              <div className="text-xs" style={{ color: C.tekstZacht }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBalk() {
  const items = ["BIG-geregistreerd", "KNGF-lid", "AGB-gecertificeerd", "Vergoed door alle zorgverzekeraars", "SKGE klachtenregeling"];
  return (
    <div className="py-4 px-6" style={{ background: C.accent }}>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-6 justify-center">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-2 text-sm text-white/90">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7l3 3L11.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Behandelingen() {
  const behandelingen = [
    { naam: "Rugklachten", pijnpunt: "Last van je rug bij opstaan of lang zitten?", vergoed: true },
    { naam: "Nekklachten", pijnpunt: "Pijn of stijfheid in je nek na beeldschermwerk?", vergoed: true },
    { naam: "Sportblessures", pijnpunt: "Geblesseerd geraakt en wil je snel herstellen?", vergoed: true },
    { naam: "Revalidatie", pijnpunt: "Herstellen na een operatie of ziekenhuisopname?", vergoed: true },
    { naam: "Bekkenfysiotherapie", pijnpunt: "Bekkenklachten tijdens of na zwangerschap?", vergoed: true },
    { naam: "Droge naaldtherapie", pijnpunt: "Hardnekkige spierpijn of triggerpoints?", vergoed: false },
  ];
  return (
    <section id="behandelingen" className="py-20 px-6" style={{ background: C.bgGrijs }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold mb-2" style={{ color: C.accent }}>BEHANDELINGEN</p>
          <h2 className="text-3xl font-bold mb-4" style={{ color: C.tekst }}>Waarmee kunnen wij u helpen?</h2>
          <p className="max-w-xl mx-auto" style={{ color: C.tekstMid }}>De meeste behandelingen worden vergoed vanuit uw basisverzekering of aanvullende verzekering.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {behandelingen.map((b) => (
            <div key={b.naam} className="p-6 rounded-2xl" style={{ background: C.bg, border: `1px solid ${C.border}` }}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold" style={{ color: C.tekst }}>{b.naam}</h3>
                <span className="text-xs px-2 py-1 rounded-full font-medium ml-2 shrink-0"
                  style={{ background: b.vergoed ? C.groenLicht : "#fef9c3", color: b.vergoed ? C.groen : "#854d0e" }}>
                  {b.vergoed ? "Vergoed ✓" : "Op indicatie"}
                </span>
              </div>
              <p className="text-sm italic" style={{ color: C.tekstMid }}>{b.pijnpunt}</p>
              <a href="#afspraak" className="inline-block mt-4 text-sm font-medium"
                style={{ color: C.accent, touchAction: "manipulation" }}>
                Afspraak maken →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vergoeding() {
  return (
    <section id="vergoeding" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold mb-2" style={{ color: C.accent }}>VERGOEDING</p>
          <h2 className="text-3xl font-bold mb-4" style={{ color: C.tekst }}>Wordt mijn behandeling vergoed?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { titel: "Basisverzekering", tekst: "Fysiotherapie valt onder het eigen risico. Heeft u chronische klachten? Dan vergoedt uw basisverzekering behandelingen na 20 sessies per jaar.", kleur: C.accentLicht, border: `${C.accent}30` },
            { titel: "Aanvullende verzekering", tekst: "Met een aanvullende verzekering zijn vaak 9–18 behandelingen per jaar gedekt. Check uw polis of bel ons — wij checken het gratis voor u.", kleur: C.groenLicht, border: `${C.groen}30` },
          ].map((k) => (
            <div key={k.titel} className="p-6 rounded-2xl" style={{ background: k.kleur, border: `1px solid ${k.border}` }}>
              <h3 className="font-bold mb-3" style={{ color: C.tekst }}>{k.titel}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.tekstMid }}>{k.tekst}</p>
            </div>
          ))}
        </div>
        <div className="p-6 rounded-2xl text-center" style={{ background: C.bgGrijs, border: `1px solid ${C.border}` }}>
          <p className="font-semibold mb-2" style={{ color: C.tekst }}>Niet zeker over uw vergoeding?</p>
          <p className="text-sm mb-4" style={{ color: C.tekstMid }}>Bel ons en wij checken gratis of uw behandeling vergoed wordt.</p>
          <a href="tel:0575123456" className="inline-block px-6 py-3 rounded-lg text-white font-semibold"
            style={{ background: C.accent, touchAction: "manipulation" }}>
            📞 Bel 0575 – 12 34 56
          </a>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    { naam: "Lisa van den Berg", titel: "Hoofdtherapeut", spec: "Rugklachten & revalidatie", jaren: "12 jaar", quote: "Ik geloof dat bewegen medicijn is. Mijn doel: patiënten zo snel mogelijk zelfstandig laten functioneren." },
    { naam: "Mark Jansen", titel: "Sportfysiotherapeut", spec: "Sportblessures & preventie", jaren: "8 jaar", quote: "Sporters wil ik niet alleen behandelen, maar ook leren hoe ze blessures voorkomen." },
    { naam: "Sarah Kuipers", titel: "Bekkenfysiotherapeut", spec: "Bekken & zwangerschap", jaren: "6 jaar", quote: "Bekkenproblemen zijn vaker dan gedacht goed te behandelen. Schaamte hoeft niet." },
  ];
  return (
    <section id="team" className="py-20 px-6" style={{ background: C.bgGrijs }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold mb-2" style={{ color: C.accent }}>ONS TEAM</p>
          <h2 className="text-3xl font-bold" style={{ color: C.tekst }}>Uw therapeuten</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((t) => (
            <div key={t.naam} className="p-6 rounded-2xl" style={{ background: C.bg, border: `1px solid ${C.border}` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4"
                style={{ background: C.accentLicht, color: C.accent }}>
                {t.naam.charAt(0)}
              </div>
              <h3 className="font-bold mb-0.5" style={{ color: C.tekst }}>{t.naam}</h3>
              <p className="text-sm font-medium mb-1" style={{ color: C.accent }}>{t.titel}</p>
              <p className="text-xs mb-3" style={{ color: C.tekstZacht }}>{t.spec} · {t.jaren} ervaring</p>
              <p className="text-sm italic leading-relaxed" style={{ color: C.tekstMid }}>&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { naam: "Anneke de Vries", tekst: "Na weken rugpijn was ik na 5 behandelingen pijnvrij. Lisa heeft precies gevonden wat er mis was. Aanrader!", platform: "Zorgkaart" },
    { naam: "Johan Bakker", tekst: "Snel geholpen na mijn knieblessure. Mark heeft mij ook geleerd hoe ik het kan voorkomen. Super praktijk!", platform: "Google" },
    { naam: "Marieke Smit", tekst: "Sarah heeft mij geholpen met bekkenproblemen na mijn bevalling. Eindelijk iemand die dit serieus neemt.", platform: "Zorgkaart" },
  ];
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6" style={{ color: C.tekst }}>Wat patiënten zeggen</h2>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[{ w: "9.6", l: "Zorgkaart" }, { w: "4.8★", l: "Google" }, { w: "98%", l: "Beveelt aan" }].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-bold" style={{ color: C.accent }}>{s.w}</div>
                <div className="text-sm" style={{ color: C.tekstZacht }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {reviews.map((r) => (
            <div key={r.naam} className="p-6 rounded-2xl" style={{ background: C.bgGrijs, border: `1px solid ${C.border}` }}>
              <div className="flex justify-between mb-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill={C.accent}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: C.accentLicht, color: C.accent }}>{r.platform}</span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: C.tekstMid }}>&ldquo;{r.tekst}&rdquo;</p>
              <p className="text-sm font-semibold" style={{ color: C.tekst }}>{r.naam}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const vragen = [
    { v: "Heb ik een verwijzing nodig?", a: "Nee. U kunt direct bij ons een afspraak maken zonder verwijzing van een huisarts." },
    { v: "Hoe snel kan ik terecht?", a: "Nieuwe patiënten kunnen doorgaans binnen 2 werkdagen terecht. Belt u ons, dan plannen we direct." },
    { v: "Wat kost een behandeling?", a: "De meeste behandelingen worden vergoed. Ons tarief is €47 per sessie. Wij facturen direct aan uw verzekeraar." },
    { v: "Waar kan ik parkeren?", a: "Er zijn gratis parkeerplaatsen direct naast de praktijk aan de Deventerweg." },
  ];
  return (
    <section className="py-20 px-6" style={{ background: C.bgGrijs }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: C.tekst }}>Veelgestelde vragen</h2>
        <div className="space-y-3">
          {vragen.map((faq) => (
            <div key={faq.v} className="p-6 rounded-2xl" style={{ background: C.bg, border: `1px solid ${C.border}` }}>
              <h3 className="font-semibold mb-2" style={{ color: C.tekst }}>{faq.v}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.tekstMid }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Afspraak() {
  return (
    <section id="afspraak" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold mb-2" style={{ color: C.accent }}>AFSPRAAK MAKEN</p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: C.tekst }}>Neem contact op</h2>
            <p className="leading-relaxed mb-8" style={{ color: C.tekstMid }}>Vul het formulier in en wij bellen u dezelfde dag terug om een afspraak in te plannen.</p>
            <div className="space-y-4">
              {[
                { icon: "📍", label: "Adres", waarde: "Deventerweg 12, 7203 AC Zutphen" },
                { icon: "📞", label: "Telefoon", waarde: "0575 – 12 34 56" },
                { icon: "⏰", label: "Openingstijden", waarde: "Ma–Vr 08:00–18:00" },
              ].map((i) => (
                <div key={i.label} className="flex items-start gap-3">
                  <span className="text-xl">{i.icon}</span>
                  <div>
                    <div className="text-xs font-semibold mb-0.5" style={{ color: C.tekstZacht }}>{i.label}</div>
                    <div className="text-sm" style={{ color: C.tekst }}>{i.waarde}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form action="#" className="p-8 rounded-2xl space-y-4" style={{ background: C.bgGrijs, border: `1px solid ${C.border}` }}>
            <div className="grid grid-cols-2 gap-4">
              {[{ l: "Voornaam *", p: "Jan", t: "text" }, { l: "Achternaam *", p: "de Vries", t: "text" }].map((f) => (
                <div key={f.l}>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: C.tekst }}>{f.l}</label>
                  <input type={f.t} required placeholder={f.p} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                    style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.tekst, touchAction: "manipulation" }} />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: C.tekst }}>Telefoonnummer *</label>
              <input type="tel" required placeholder="06 – 12 34 56 78" className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.tekst, touchAction: "manipulation" }} />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: C.tekst }}>Uw klacht</label>
              <select className="w-full px-3 py-2.5 rounded-lg text-sm outline-none appearance-none"
                style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.tekst, touchAction: "manipulation" }}>
                <option value="">Selecteer uw klacht</option>
                {["Rugklachten", "Nekklachten", "Sportblessure", "Revalidatie", "Bekkenproblemen", "Anders"].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: C.tekst }}>Zorgverzekeraar</label>
              <input type="text" placeholder="bijv. CZ, Zilveren Kruis, VGZ..." className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.tekst, touchAction: "manipulation" }} />
              <p className="text-xs mt-1" style={{ color: C.tekstZacht }}>Wij checken gratis of uw behandeling vergoed wordt</p>
            </div>
            <button type="submit" className="w-full py-3.5 rounded-lg text-white font-semibold"
              style={{ background: C.accent, touchAction: "manipulation" }}>
              Stuur aanvraag in
            </button>
            <p className="text-xs text-center" style={{ color: C.tekstZacht }}>🔒 Uw gegevens worden veilig verwerkt. Wij bellen u dezelfde dag terug.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ZorgFooter() {
  return (
    <footer className="py-10 px-6" style={{ background: C.tekst, color: "rgba(255,255,255,0.6)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div><span className="text-white font-semibold">FysioFit Zutphen</span> · Deventerweg 12 · KvK 12345678</div>
        <div className="flex gap-4">
          <span>BIG-geregistreerd</span>
          <span>·</span>
          <span>KNGF-lid</span>
          <span>·</span>
          <Link href="/privacy" style={{ touchAction: "manipulation" }} className="hover:text-white transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
