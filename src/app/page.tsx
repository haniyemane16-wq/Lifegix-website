import Link from "next/link";
import Navbar from "./_components/Navbar";
import FAQAccordion from "./_components/FAQAccordion";
import ContactForm from "./_components/ContactForm";
import StickyContactBtn from "./_components/StickyContactBtn";
import ChatWidget from "./_components/ChatWidget";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Pricing />
      <Voorbeelden />
      <EersteKlanten />
      <FAQAccordion />
      <ContactSection />
      <Footer />
      <StickyContactBtn />
      <ChatWidget />
    </main>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
        Beschikbaar voor nieuwe klanten · Warnsveld &amp; heel Nederland
      </div>

      <h1 className="animate-fade-in-up animation-delay-200 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
        Ik bouw websites die{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400">
          klanten opleveren
        </span>
      </h1>

      <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-white/55 text-lg leading-relaxed">
        Professioneel, mobielvriendelijk en binnen 1–2 weken live. Met AI-automatisering zodat jij je kunt focussen op ondernemen.
      </p>

      <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a href="#contact" className="px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all duration-200 purple-glow hover:scale-[1.02]">
          Plan een gratis gesprek →
        </a>
        <a href="#voorbeelden" className="px-7 py-3.5 rounded-xl border border-white/10 hover:border-violet-500/40 text-white/70 hover:text-white font-medium text-sm transition-all duration-200">
          Bekijk voorbeelden ↓
        </a>
      </div>

      {/* Social proof balk */}
      <div className="animate-fade-in-up animation-delay-600 mt-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-white/35">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4" fill="#f59e0b" viewBox="0 0 16 16">
                <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
              </svg>
            ))}
          </div>
          <span>Eerlijk & persoonlijk</span>
        </div>
        <span className="hidden sm:block w-px h-4 bg-white/10" />
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 16 16">
            <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Vrijgesteld van BTW</span>
        </div>
        <span className="hidden sm:block w-px h-4 bg-white/10" />
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 16 16">
            <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Geen verborgen kosten</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats ──────────────────────────────────────────────── */
function Stats() {
  const items = [
    { icon: "⚡", value: "1–2 wkn", label: "Van start tot live" },
    { icon: "💬", value: "24u", label: "Reactietijd" },
    { icon: "💶", value: "€149", label: "Startprijs website" },
    { icon: "✅", value: "100%", label: "Vrijgesteld van BTW" },
  ];
  return (
    <div className="border-y border-white/[0.06] py-8 px-6"
      style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(10,10,15,0) 50%, rgba(16,185,129,0.03) 100%)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1">
            <span className="text-xl mb-1">{item.icon}</span>
            <p className="text-2xl sm:text-3xl font-bold text-white">{item.value}</p>
            <p className="text-xs text-white/40 mt-0.5">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Services ───────────────────────────────────────────── */
function Services() {
  const WebIcon = () => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="5" width="28" height="22" rx="4" stroke="#a78bfa" strokeWidth="1.8"/>
      <line x1="2" y1="11" x2="30" y2="11" stroke="#a78bfa" strokeWidth="1.8"/>
      <circle cx="7" cy="8" r="1.2" fill="#7c3aed"/><circle cx="11" cy="8" r="1.2" fill="#7c3aed"/><circle cx="15" cy="8" r="1.2" fill="#7c3aed"/>
      <rect x="7" y="15" width="8" height="8" rx="1.5" fill="#7c3aed" opacity="0.5"/>
      <line x1="19" y1="16" x2="25" y2="16" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="19" x2="25" y2="19" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="22" x2="23" y2="22" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  const BotIcon = () => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="10" width="20" height="16" rx="4" stroke="#a78bfa" strokeWidth="1.8"/>
      <circle cx="12" cy="18" r="2" fill="#7c3aed"/><circle cx="20" cy="18" r="2" fill="#7c3aed"/>
      <line x1="16" y1="4" x2="16" y2="10" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="16" cy="3.5" r="1.5" fill="#a78bfa"/>
      <line x1="6" y1="22" x2="2" y2="25" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="26" y1="22" x2="30" y2="25" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );

  const services = [
    {
      icon: <WebIcon />,
      title: "Website Bouwen",
      tagline: "Snel online, professioneel en vindbaar",
      description: "Een moderne website die 24/7 voor jouw bedrijf werkt. Ontworpen voor conversie, geoptimaliseerd voor Google en gebouwd om lang mee te gaan.",
      features: ["Volledig op maat ontworpen", "Mobielvriendelijk (responsive)", "SEO-geoptimaliseerd", "Snel en veilig (SSL)", "Contactformulier inbegrepen", "Google Analytics"],
      price: "Vanaf €249",
      priceNote: "eenmalig + €25/mnd",
      highlighted: false,
    },
    {
      icon: <BotIcon />,
      title: "AI Automatisering",
      tagline: "Laat AI het zware werk doen",
      description: "Van automatische klantreacties tot slimme planningssystemen — ik bouw AI-agents die repetitieve taken voor jou overnemen.",
      features: ["Persoonlijke AI-assistent", "Automatische klantopvolging", "Afspraakplanning via AI", "WhatsApp / e-mail integratie", "24/7 beschikbaar", "Maandelijkse rapportage"],
      price: "Vanaf €300",
      priceNote: "eenmalig + €50/mnd",
      highlighted: true,
    },
  ];

  return (
    <section id="diensten" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Diensten</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Wat kan ik voor jou doen?</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">Twee duidelijke diensten. Eerlijke prijzen. Geen verborgen kosten.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className={`relative rounded-2xl p-6 sm:p-8 gradient-border flex flex-col ${s.highlighted ? "bg-violet-950/40 purple-glow" : "bg-white/[0.03]"}`}>
              {s.highlighted && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/20">Populair</span>
              )}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl ${s.highlighted ? "bg-violet-500/20" : "bg-violet-500/10"}`}>
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  <p className="text-violet-400 text-xs mt-0.5">{s.tagline}</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{s.description}</p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/75">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pt-5 border-t border-white/[0.08]">
                <p className="text-2xl font-bold text-white">{s.price}</p>
                <p className="mt-0.5 text-xs text-white/40">{s.priceNote}</p>
                <div className="flex gap-3 mt-4">
                  <a href="#contact" className={`flex-1 block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${s.highlighted ? "bg-violet-600 hover:bg-violet-500 text-white" : "bg-white/[0.06] hover:bg-white/10 text-white/80 border border-white/10"}`}>
                    Interesse →
                  </a>
                  <a href="#prijzen" className="px-4 py-3 rounded-xl text-sm text-violet-400 hover:text-violet-300 border border-violet-500/20 hover:border-violet-500/40 transition-colors">
                    Prijzen
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ───────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    { number: "01", emoji: "☕", title: "Gesprek", description: "We plannen een kort gesprek (15–30 min) om jouw wensen, doelen en budget te bespreken. Geen verplichtingen, altijd gratis." },
    { number: "02", emoji: "🔨", title: "Bouwen", description: "Je ontvangt een helder voorstel. Na akkoord start ik direct — website binnen 1–2 weken live, AI-agent in overleg." },
    { number: "03", emoji: "🚀", title: "Live", description: "Jouw website gaat live. Ik blijf beschikbaar voor aanpassingen, vragen en uitbreidingen — ook na oplevering." },
  ];
  return (
    <section id="werkwijze" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(109,40,217,0.04) 50%, transparent 100%)" }} />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Werkwijze</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Hoe werkt het?</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">Simpel, transparant en zonder gedoe — in 3 stappen.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3) 20%, rgba(124,58,237,0.3) 80%, transparent)" }} />
          {steps.map((step, i) => (
            <div key={step.number} className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-violet-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-violet-400 text-sm font-bold flex-shrink-0">
                  {step.number}
                </div>
                <span className="text-2xl">{step.emoji}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors">
            Plan nu een gratis gesprek →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ────────────────────────────────────────────── */
function Pricing() {
  const pakketten = [
    {
      name: "Website Visitekaartje", priceEenmalig: "€149", originalPrice: "€249", priceMaand: "€25",
      desc: "Snel online met een professionele 1-pagina website. Live in 3 dagen.",
      features: ["1 pagina op maat", "Contactformulier", "Mobielvriendelijk & snel", "SSL-beveiliging", "Live in 3 dagen"],
      cta: "Start met Visitekaartje", highlight: false, badge: "🎉 Actie: nog 5 plekken",
    },
    {
      name: "Website Starter", priceEenmalig: "€500", originalPrice: null, priceMaand: "€50",
      desc: "Perfect voor kleine bedrijven die online zichtbaar willen worden.",
      features: ["Op maat ontworpen website", "Tot 5 pagina's", "Mobielvriendelijk & snel", "SEO-basis geoptimaliseerd", "Contactformulier", "SSL-beveiliging", "Oplevering in 1–2 weken"],
      cta: "Start met Starter", highlight: false, badge: null,
    },
    {
      name: "Website Business", priceEenmalig: "€1.000", originalPrice: null, priceMaand: "€75",
      desc: "Voor groeiende bedrijven met meer wensen en hogere ambities.",
      features: ["Op maat ontworpen website", "Onbeperkt pagina's", "Mobielvriendelijk & snel", "Uitgebreide SEO-optimalisatie", "Afspraak- of boekingssysteem", "Prioriteit support", "Oplevering in 2–3 weken"],
      cta: "Start met Business", highlight: false, badge: null,
    },
    {
      name: "Maatwerk / Webapp", priceEenmalig: "Op maat", originalPrice: null, priceMaand: "Op maat",
      desc: "Een platform, webapp of complex project? We bouwen het samen — volledig op jouw wensen.",
      features: ["Webapps & platforms", "Gebruikerssystemen & dashboards", "Koppelingen met API's", "Database op maat", "Volledige technische vrijheid", "Persoonlijk projectplan"],
      cta: "Neem contact op", highlight: true, badge: "Custom",
    },
  ];

  return (
    <section id="prijzen" className="py-24 px-6 relative"
      style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0d0a1e 20%, #0d0a1e 80%, #0a0a0f 100%)" }}>
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Transparante prijzen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Kies wat bij je past</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">Geen verborgen kosten. Vaste prijs, vaste kwaliteit. Vrijgesteld van BTW (KOR).</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {pakketten.map((p) => (
            <div key={p.name}
              className={`relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 ${
                p.highlight
                  ? "bg-violet-600 shadow-2xl shadow-violet-900/40 lg:-mt-3 lg:mb-3 border border-violet-500/60"
                  : "bg-white/[0.04] border border-white/[0.08] hover:border-violet-500/20"
              }`}>
              {p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg ${p.highlight ? "bg-amber-400 text-amber-900" : "bg-violet-600 text-white"}`}>
                    {p.badge}
                  </span>
                </div>
              )}

              <div>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${p.highlight ? "text-violet-200" : "text-white/40"}`}>
                  {p.name}
                </p>
                <div className="flex items-end gap-2 flex-wrap">
                  {p.originalPrice && (
                    <span className="text-sm line-through text-red-400">{p.originalPrice}</span>
                  )}
                  <span className={`text-3xl font-bold ${p.highlight ? "text-white" : "text-white"}`}>
                    {p.priceEenmalig}
                  </span>
                  <span className={`text-sm mb-1 ${p.highlight ? "text-violet-200" : "text-white/40"}`}>
                    eenmalig
                  </span>
                </div>
                <p className={`font-semibold text-sm mt-0.5 ${p.highlight ? "text-violet-200" : "text-violet-300"}`}>
                  + {p.priceMaand}<span className={`font-normal ${p.highlight ? "text-violet-300" : "text-white/40"}`}>/mnd</span>
                </p>
                <p className={`text-xs mt-3 leading-relaxed ${p.highlight ? "text-violet-200/80" : "text-white/40"}`}>{p.desc}</p>
              </div>

              <ul className="space-y-2 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.highlight ? "text-emerald-300" : "text-emerald-400"}`} fill="none" viewBox="0 0 16 16">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={`text-sm ${p.highlight ? "text-white/90" : "text-white/70"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact"
                className={`mt-2 block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  p.highlight
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : "bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30"
                }`}>
                {p.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-white/40">
          🤖 AI-agent toevoegen aan je website? <span className="text-violet-300 font-medium">20% korting</span> op de AI-agent — kies je combinatie bij{" "}
          <a href="/bestellen" className="text-violet-300 underline hover:text-violet-200">Bestellen</a>.
        </p>

        {/* AI Agent sectie */}
        <div className="mt-16 pt-16 border-t border-white/[0.06]">
          <div className="text-center mb-10">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Alleen een AI Agent nodig?</p>
            <h3 className="text-2xl font-bold text-white">Kies je AI agent type</h3>
            <p className="mt-3 text-white/50 text-sm">Voor bedrijven die al een website hebben.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { naam: "FAQ Chatbot", prijs: "€300", maand: "€50", desc: "Beantwoordt vaste vragen 24/7", emoji: "💬" },
              { naam: "Leadopvolging", prijs: "€600", maand: "€90", desc: "Automatische e-mail/WhatsApp opvolging", emoji: "📧" },
              { naam: "Afspraken Agent", prijs: "€900", maand: "€120", desc: "24/7 agenda management", emoji: "📅" },
              { naam: "Volledige Agent", prijs: "€1.500", maand: "€175", desc: "Alles gecombineerd, op maat", emoji: "⚡" },
            ].map((ai) => (
              <div key={ai.naam} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/20 transition-colors flex flex-col gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{ai.emoji}</span>
                    <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest">{ai.naam}</p>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-white">{ai.prijs}</span>
                    <span className="text-white/40 text-sm mb-1">eenmalig</span>
                  </div>
                  <p className="text-violet-300 text-sm font-semibold">+ {ai.maand}<span className="text-white/40 font-normal">/mnd</span></p>
                  <p className="text-white/40 text-xs mt-2 leading-relaxed">{ai.desc}</p>
                </div>
                <Link href="/bestellen" className="mt-auto block text-center py-2.5 rounded-xl text-sm font-semibold bg-white/[0.06] hover:bg-violet-600/20 text-white/80 hover:text-violet-300 border border-white/10 hover:border-violet-500/30 transition-all duration-200">
                  Kies dit pakket →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-10 text-white/30 text-sm">
          Wil je weten hoeveel je terugverdient?{" "}
          <Link href="/roi" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">Bereken je ROI →</Link>
        </p>
      </div>
    </section>
  );
}

/* ─── Portfolio ──────────────────────────────────────────── */
function Voorbeelden() {
  const items = [
    {
      naam: "AutoFix Pro",
      type: "Autogarage",
      beschrijving: "Dienstenoverzicht, prijstabel, afspraakformulier en FAQ.",
      emoji: "🔧",
      kleur: "#f97316",
      bg: "from-orange-950/40 to-orange-950/0",
      href: "https://autofixpro-lac.vercel.app",
      extern: true,
    },
    {
      naam: "Brasserie De Linde",
      type: "Restaurant",
      beschrijving: "Menukaart, reserveringen, fotogalerij en chef-verhaal.",
      emoji: "🍽️",
      kleur: "#c9a96e",
      bg: "from-amber-950/40 to-amber-950/0",
      href: "https://brasserie-de-linde.vercel.app",
      extern: true,
    },
    {
      naam: "Restaurant De Waag",
      type: "Horeca",
      beschrijving: "Elegant serif design, menu, reserveringen en over ons.",
      emoji: "🥩",
      kleur: "#10b981",
      bg: "from-teal-950/40 to-teal-950/0",
      href: "/demo/horeca",
      extern: false,
    },
    {
      naam: "FysioFit Zutphen",
      type: "Fysiotherapeut",
      beschrijving: "Licht professioneel design, behandelingen, vergoeding en team.",
      emoji: "🏥",
      kleur: "#3b90c8",
      bg: "from-blue-950/40 to-blue-950/0",
      href: "/demo/zorg",
      extern: false,
    },
  ];

  return (
    <section id="voorbeelden" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Zo kan jouw website eruitzien</h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Kleuren, teksten, secties en stijl — alles wordt volledig op maat gemaakt voor jouw bedrijf.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10 px-4 py-2.5 rounded-full bg-violet-500/10 border border-violet-500/20 w-fit mx-auto">
          <svg className="w-4 h-4 text-violet-400 shrink-0" fill="none" viewBox="0 0 16 16">
            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM8 5v4M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-violet-300 text-sm">Dit zijn demo's — jouw website wordt volledig op maat gemaakt</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((d) => (
            <a key={d.naam} href={d.href}
              target={d.extern ? "_blank" : undefined}
              rel={d.extern ? "noopener noreferrer" : undefined}
              className="group rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] hover:border-white/20 hover:-translate-y-1 transition-all duration-200 block">
              <div className={`h-28 bg-gradient-to-b ${d.bg} flex items-center justify-center relative overflow-hidden`}
                style={{ borderBottom: `1px solid ${d.kleur}20` }}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-200">{d.emoji}</span>
                <svg className="absolute top-3 right-3 w-3.5 h-3.5 text-white/20 group-hover:text-white/50 transition-colors" fill="none" viewBox="0 0 14 14">
                  <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-sm">{d.naam}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full border shrink-0 ml-2"
                    style={{ color: d.kleur, borderColor: `${d.kleur}40`, background: `${d.kleur}12` }}>
                    {d.type}
                  </span>
                </div>
                <p className="text-white/45 text-xs leading-relaxed mb-3">{d.beschrijving}</p>
                <span className="text-xs font-semibold" style={{ color: d.kleur }}>Bekijk demo →</span>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center mt-10 text-white/30 text-sm">
          Jouw branche staat er niet bij?{" "}
          <Link href="#contact" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
            Neem contact op →
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ─── Contact sectie ─────────────────────────────────────── */
function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Klaar om te beginnen?</h2>
            <p className="mt-4 text-white/50">Stuur een bericht en ik reageer binnen 24 uur. Het eerste gesprek is altijd gratis en vrijblijvend.</p>
            <p className="mt-3 text-white/50">
              Liever bellen?{" "}
              <a href="tel:+31854005545" className="text-violet-400 hover:text-violet-300 transition-colors">085 - 400 55 45</a>
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

/* ─── Eerste klanten ─────────────────────────────────────── */
function EersteKlanten() {
  const voordelen = [
    { emoji: "💸", titel: "Scherpe startersprijs", tekst: "Als een van mijn eerste klanten krijg je een extra voordelige prijs — in ruil voor je eerlijke feedback." },
    { emoji: "🎯", titel: "Persoonlijke aandacht", tekst: "Ik heb nu volop tijd om jouw project tot in de puntjes te verzorgen. Jij krijgt mijn volledige focus." },
    { emoji: "🤝", titel: "Samen opbouwen", tekst: "Tevreden? Dan mag jouw bedrijf met een review in mijn portfolio — zo groeien we samen." },
  ];
  return (
    <section className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0b0d1a 50%, #0a0a0f 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)" }} />
      </div>
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">Net begonnen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Word een van mijn eerste klanten</h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            LifeGix is een frisse start. Dat betekent: scherpe prijzen, volledige aandacht en een ondernemer die er alles aan doet om jou tevreden te maken.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {voordelen.map((v) => (
            <div key={v.titel} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/20 transition-colors">
              <div className="text-3xl mb-4">{v.emoji}</div>
              <h3 className="text-white font-semibold mb-2">{v.titel}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{v.tekst}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#contact" className="inline-block px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all duration-200 purple-glow hover:scale-[1.02]">
            Plan een gratis gesprek →
          </a>
          <p className="mt-4 text-white/25 text-xs">Gratis · Vrijblijvend · Binnen 24u reactie</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
        <span>© {new Date().getFullYear()} Life<span className="text-violet-500/60">gix</span> · Warnsveld · KvK 98120336 · <a href="tel:+31854005545" className="hover:text-white/60 transition-colors">085 - 400 55 45</a></span>
        <span className="flex gap-4">
          <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacyverklaring</Link>
          <Link href="/voorwaarden" className="hover:text-white/60 transition-colors">Algemene Voorwaarden</Link>
        </span>
      </div>
    </footer>
  );
}
