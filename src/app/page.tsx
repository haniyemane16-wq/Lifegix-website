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
      <Portfolio />
      <Demos />
      <Testimonials />
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
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
      </div>

      <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
        Beschikbaar voor nieuwe klanten
      </div>

      <h1 className="animate-fade-in-up animation-delay-200 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
        Ik bouw websites en{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
          AI agents
        </span>{" "}
        voor ondernemers
      </h1>

      <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-white/50 text-lg leading-relaxed">
        Slimmer werken, meer klanten, minder gedoe. Persoonlijke aanpak, eerlijke prijs — voor elk bedrijf in Nederland.
      </p>

      <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a href="#contact" className="px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-colors purple-glow">
          Plan een gratis gesprek →
        </a>
        <a href="#diensten" className="px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm transition-colors">
          Bekijk diensten ↓
        </a>
      </div>

      <p className="animate-fade-in-up animation-delay-600 mt-12 text-white/25 text-xs">
        Gevestigd in Warnsveld · Heel Nederland · Persoonlijk contact
      </p>
    </section>
  );
}

/* ─── Stats ──────────────────────────────────────────────── */
function Stats() {
  const items = [
    { value: "5+", label: "Projecten opgeleverd" },
    { value: "1–2 wkn", label: "Gemiddeld live" },
    { value: "24u", label: "Reactietijd" },
    { value: "100%", label: "Op tijd opgeleverd" },
  ];
  return (
    <div className="border-y border-white/5 bg-white/[0.02] py-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-2xl font-bold text-violet-300">{item.value}</p>
            <p className="mt-1 text-xs text-white/40">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Services ───────────────────────────────────────────── */
function Services() {
  const WebIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
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
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
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
      features: ["Volledig op maat ontworpen", "Mobielvriendelijk (responsive)", "SEO-geoptimaliseerd", "Snel en veilig (SSL)", "Contactformulier", "Google Analytics"],
      highlighted: false,
    },
    {
      icon: <BotIcon />,
      title: "AI Automatisering",
      tagline: "Laat AI het zware werk doen",
      description: "Van automatische klantreacties tot slimme planningssystemen — ik bouw AI-agents die repetitieve taken voor jou overnemen.",
      features: ["Persoonlijke AI-assistent", "Automatische klantopvolging", "Afspraakplanning via AI", "WhatsApp / e-mail integratie", "24/7 beschikbaar", "Maandelijkse rapportage"],
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
            <div key={s.title} className={`relative rounded-2xl p-5 sm:p-8 gradient-border ${s.highlighted ? "bg-violet-950/30 purple-glow" : "bg-white/[0.03]"}`}>
              {s.highlighted && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/20">Populair</span>
              )}
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="text-violet-400 text-sm mt-1">{s.tagline}</p>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">{s.description}</p>
              <div className="mt-6">
                <p className="text-2xl font-bold text-white">{s.title === "Website Bouwen" ? "Vanaf €500" : "Vanaf €300"}</p>
                <p className="mt-1 text-xs text-white/40">{s.title === "Website Bouwen" ? "eenmalig + €50/mnd" : "eenmalig + €75/mnd"}</p>
                <a href="#prijzen" className="mt-3 inline-block text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors">Bekijk alle pakketten →</a>
              </div>
              <ul className="mt-6 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-violet-400" fill="none" viewBox="0 0 10 10">
                        <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${s.highlighted ? "bg-violet-600 hover:bg-violet-500 text-white" : "bg-white/5 hover:bg-white/10 text-white/80"}`}>
                Interesse? Neem contact op →
              </a>
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
    { number: "01", title: "Gesprek", description: "We plannen een kort gesprek (15–30 min) om jouw wensen, doelen en budget te bespreken. Geen verplichtingen." },
    { number: "02", title: "Bouwen", description: "Je ontvangt een helder voorstel. Na akkoord start ik direct met bouwen — binnen 1–2 weken live." },
    { number: "03", title: "Live", description: "Jouw website of AI-systeem gaat live. Ik blijf beschikbaar voor vragen, aanpassingen en uitbreidingen." },
  ];
  return (
    <section id="werkwijze" className="py-24 pb-12 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)" }} />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Werkwijze</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Hoe werkt het?</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">Simpel, transparant en zonder gedoe. Van eerste contact tot live in 3 stappen.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative p-5 sm:p-8 rounded-2xl bg-white/[0.06] border border-white/10">
              <div className="text-violet-400/60 text-5xl font-bold font-mono mb-6 leading-none">{step.number}</div>
              <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ────────────────────────────────────────────── */
function Pricing() {
  const pakketten = [
    {
      name: "Website Starter", priceEenmalig: "€500", priceMaand: "€50",
      desc: "Perfect voor kleine bedrijven die online zichtbaar willen worden.",
      features: ["Op maat ontworpen website", "Tot 5 pagina's", "Mobielvriendelijk & snel", "SEO-basis geoptimaliseerd", "Contactformulier", "SSL-beveiliging inbegrepen", "Oplevering in 1–2 weken"],
      cta: "Start met Starter", highlight: false, badge: null,
    },
    {
      name: "Website + AI-agent", priceEenmalig: "Vanaf €750", priceMaand: "Vanaf €110",
      desc: "Meer bezoekers én slimmere opvolging. 20% korting op de combinatie.",
      features: ["Alles van Starter of Business", "AI-chatbot op je website", "24/7 automatische klantenservice", "Leads automatisch opvolgen", "Koppelingen met jouw systemen", "Maandelijkse rapportage", "20% combinatiekorting"],
      cta: "Kies Website + AI", highlight: true, badge: "Meest gekozen",
    },
    {
      name: "Website Business", priceEenmalig: "€1.000", priceMaand: "€75",
      desc: "Voor groeiende bedrijven met meer wensen en hogere ambities.",
      features: ["Op maat ontworpen website", "Onbeperkt aantal pagina's", "Mobielvriendelijk & snel", "Uitgebreide SEO-optimalisatie", "Afspraak- of boekingssysteem", "Prioriteit support", "Oplevering in 2–3 weken"],
      cta: "Start met Business", highlight: false, badge: null,
    },
  ];
  const checkIcon = (
    <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 16 16">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <section id="prijzen" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(109,40,217,0.07) 0%, transparent 70%)" }} />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Transparante prijzen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Kies wat bij je past</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">Geen verborgen kosten. Vaste prijs, vaste kwaliteit. Vrijgesteld van BTW (KOR).</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {pakketten.map((p) => (
            <div key={p.name} className={`relative rounded-2xl p-6 flex flex-col gap-5 ${p.highlight ? "bg-violet-950/50 border border-violet-500/40 shadow-lg shadow-violet-900/20 md:-mt-4" : "bg-white/[0.03] border border-white/10"}`}>
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-bold tracking-wide">{p.badge}</span>
                </div>
              )}
              <div>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${p.highlight ? "text-violet-400" : "text-white/40"}`}>{p.name}</p>
                <div className="flex items-end gap-1 mt-2">
                  <span className="text-3xl font-bold text-white">{p.priceEenmalig}</span>
                  <span className="text-white/40 text-sm mb-1">eenmalig</span>
                </div>
                <p className="text-violet-300 font-semibold text-sm mt-0.5">+ {p.priceMaand}<span className="text-white/40 font-normal">/mnd</span></p>
                <p className="text-white/40 text-xs mt-3 leading-relaxed">{p.desc}</p>
              </div>
              <ul className="space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">{checkIcon}<span className="text-sm text-white/70">{f}</span></li>
                ))}
              </ul>
              <a href="#contact" className={`mt-auto block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${p.highlight ? "bg-violet-600 hover:bg-violet-500 text-white purple-glow" : "bg-white/[0.06] hover:bg-white/10 text-white border border-white/10"}`}>
                {p.cta} →
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-white/30 text-sm">
          Wil je eerst weten hoeveel je terugverdient?{" "}
          <Link href="/roi" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">Bereken je ROI →</Link>
        </p>
      </div>
    </section>
  );
}

/* ─── Portfolio ──────────────────────────────────────────── */
function Portfolio() {
  const projects = [
    {
      title: "AutoFix Pro", category: "Website Bouwen",
      description: "Professionele website voor een automonteur. Inclusief dienstenoverzicht, transparante prijstabel, klantbeoordelingen, afspraakformulier en FAQ.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-violet-600/20 via-purple-800/10 to-transparent",
      href: "https://autofixpro-lac.vercel.app",
      visual: (
        <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
          <rect x="4" y="20" width="48" height="22" rx="5" stroke="#a78bfa" strokeWidth="2"/>
          <path d="M10 20l5-10h26l5 10" stroke="#a78bfa" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="15" cy="42" r="5" fill="#0a0a0f" stroke="#a78bfa" strokeWidth="2"/>
          <circle cx="41" cy="42" r="5" fill="#0a0a0f" stroke="#a78bfa" strokeWidth="2"/>
          <circle cx="15" cy="42" r="2" fill="#7c3aed"/><circle cx="41" cy="42" r="2" fill="#7c3aed"/>
          <rect x="22" y="26" width="12" height="8" rx="2" fill="#7c3aed" opacity="0.4"/>
          <line x1="4" y1="32" x2="8" y2="32" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="48" y1="32" x2="52" y2="32" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Brasserie De Linde", category: "Website Bouwen",
      description: "Elegante website voor een fine dining restaurant. Met seizoensmenu, reserveringsformulier, chef-profiel, sfeerbeelden en private dining sectie.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-emerald-600/20 via-teal-800/10 to-transparent",
      href: "https://brasserie-de-linde.vercel.app",
      visual: (
        <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
          <path d="M28 6c-8 0-14 6-14 14 0 6 3.5 11 8.5 13.5V40h11v-6.5C38.5 31 42 26 42 20c0-8-6-14-14-14z" stroke="#a78bfa" strokeWidth="2" strokeLinejoin="round"/>
          <rect x="22" y="40" width="12" height="4" rx="1.5" fill="#7c3aed" opacity="0.5"/>
          <rect x="20" y="44" width="16" height="3" rx="1.5" fill="#7c3aed" opacity="0.4"/>
          <line x1="28" y1="14" x2="28" y2="26" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="22" y1="18" x2="28" y2="14" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="34" y1="18" x2="28" y2="14" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];
  return (
    <section id="portfolio" className="pt-12 pb-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)" }} />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Eerder gebouwd</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">Een selectie van projecten die ik heb gebouwd.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p) => (
            <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-violet-500/50 transition-colors block">
              <div className={`h-32 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>{p.visual}</div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <svg className="w-3.5 h-3.5 text-violet-400/60 group-hover:text-violet-400 transition-colors" fill="none" viewBox="0 0 14 14">
                      <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20">{p.category}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────── */
function Testimonials() {
  const reviews = [
    { name: "Mark van den Berg", bedrijf: "AutoFix Pro", tekst: "Binnen twee weken hadden we een strakke website die echt converteert. Klanten vinden ons nu makkelijk via Google en de afsprakenpagina scheelt ons dagelijks tijd.", dienst: "Website Bouwen" },
    { name: "Lisette Janssen", bedrijf: "Brasserie De Linde", tekst: "Precies de uitstraling die we zochten — warm, professioneel en snel. Reserveringen via de site zijn flink gestegen sinds de lancering.", dienst: "Website Bouwen" },
    { name: "Daan Vermeer", bedrijf: "Lokale ondernemer", tekst: "De AI agent pakt nu automatisch klantvragen op via WhatsApp. Ik hoef 's avonds niet meer achter mijn telefoon te zitten. Had dit jaren eerder willen doen.", dienst: "AI Automatisering" },
  ];
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(109,40,217,0.06) 0%, transparent 70%)" }} />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Klanten aan het woord</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Wat zeggen onze klanten?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed flex-1">&ldquo;{r.tekst}&rdquo;</p>
              <div>
                <p className="text-white font-semibold text-sm">{r.name}</p>
                <p className="text-white/40 text-xs">{r.bedrijf} · {r.dienst}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact sectie header + form ──────────────────────── */
function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Klaar om te beginnen?</h2>
            <p className="mt-4 text-white/50">
              Stuur een bericht en ik reageer binnen 24 uur. Het eerste gesprek is altijd gratis en vrijblijvend.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

/* ─── Demos ──────────────────────────────────────────────── */
function Demos() {
  const demos = [
    {
      href: "/demo/diensten",
      naam: "Barbershop Yazan",
      type: "Kappers & barbiers",
      beschrijving: "Heritage stijl met warm bruin/goud design. Afspraken, diensten en reviews.",
      kleur: "#c9a84c",
      bg: "from-amber-950/30 to-transparent",
      emoji: "✂️",
    },
    {
      href: "/demo/horeca",
      naam: "Restaurant De Waag",
      type: "Horeca & restaurants",
      beschrijving: "Elegant en sfeervol met serif typografie. Menu, reserveringen en chef-verhaal.",
      kleur: "#c9a96e",
      bg: "from-emerald-950/30 to-transparent",
      emoji: "🍽️",
    },
    {
      href: "/demo/zorg",
      naam: "FysioFit Zutphen",
      type: "Zorg & therapeuten",
      beschrijving: "Professioneel licht design. Behandelingen, vergoeding en team.",
      kleur: "#3b90c8",
      bg: "from-blue-950/30 to-transparent",
      emoji: "🏥",
    },
  ];

  return (
    <section id="demos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Voorbeelden
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Zo kan jouw website eruitzien
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Dit zijn demo-websites die wij hebben gebouwd. Alles — kleuren, teksten, secties en stijl — passen wij volledig aan op jouw bedrijf en wensen.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex items-center justify-center gap-2 mb-12 px-4 py-2.5 rounded-full bg-violet-500/10 border border-violet-500/20 w-fit mx-auto">
          <svg className="w-4 h-4 text-violet-400 shrink-0" fill="none" viewBox="0 0 16 16">
            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM8 5v4M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-violet-300 text-sm">Dit zijn demo's — jouw website wordt volledig op maat gemaakt</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {demos.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors block"
              style={{ touchAction: "manipulation" }}
            >
              {/* Header */}
              <div className={`h-28 bg-gradient-to-br ${d.bg} flex items-center justify-center relative`}>
                <span className="text-5xl">{d.emoji}</span>
                <div className="absolute top-3 right-3">
                  <svg className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" fill="none" viewBox="0 0 14 14">
                    <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-base">{d.naam}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full border"
                    style={{ color: d.kleur, borderColor: `${d.kleur}40`, background: `${d.kleur}10` }}>
                    {d.type}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{d.beschrijving}</p>
                <span className="text-sm font-medium transition-colors" style={{ color: d.kleur }}>
                  Bekijk demo →
                </span>
              </div>
            </Link>
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

/* ─── Footer ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
        <span>© {new Date().getFullYear()} Life<span className="text-violet-500/60">gix</span> · Warnsveld · KvK 98120336</span>
        <span className="flex gap-4">
          <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacyverklaring</Link>
          <Link href="/voorwaarden" className="hover:text-white/60 transition-colors">Algemene Voorwaarden</Link>
        </span>
      </div>
    </footer>
  );
}
