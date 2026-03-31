"use client";

import { useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

/* ─── Navbar ─────────────────────────────────────────────── */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-white">Life</span><span className="text-violet-400">gix</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#diensten" className="hover:text-white transition-colors">Diensten</a>
          <a href="#werkwijze" className="hover:text-white transition-colors">Werkwijze</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors"
        >
          Gratis gesprek
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      {/* Badge */}
      <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
        Beschikbaar voor nieuwe klanten
      </div>

      {/* Headline */}
      <h1 className="animate-fade-in-up animation-delay-200 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
        Ik bouw websites en{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
          AI agents
        </span>{" "}
        voor lokale bedrijven
      </h1>

      {/* Subtext */}
      <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-white/50 text-lg leading-relaxed">
        Slimmer werken, meer klanten, minder gedoe. Ik help lokale ondernemers
        in de regio Warnsveld moderniseren met betaalbare technologie.
      </p>

      {/* CTA */}
      <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="#contact"
          className="px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all hover:scale-105 purple-glow"
        >
          Plan een gratis gesprek →
        </a>
        <a
          href="#diensten"
          className="px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm transition-all"
        >
          Bekijk diensten
        </a>
      </div>

      {/* Social proof */}
      <p className="animate-fade-in-up animation-delay-600 mt-12 text-white/25 text-xs">
        Gevestigd in Warnsveld · Lokale focus · Persoonlijk contact
      </p>
    </section>
  );
}

/* ─── Services ───────────────────────────────────────────── */
function Services() {
  const WebIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="5" width="28" height="22" rx="4" stroke="#a78bfa" strokeWidth="1.8"/>
      <line x1="2" y1="11" x2="30" y2="11" stroke="#a78bfa" strokeWidth="1.8"/>
      <circle cx="7" cy="8" r="1.2" fill="#7c3aed"/>
      <circle cx="11" cy="8" r="1.2" fill="#7c3aed"/>
      <circle cx="15" cy="8" r="1.2" fill="#7c3aed"/>
      <rect x="7" y="15" width="8" height="8" rx="1.5" fill="#7c3aed" opacity="0.5"/>
      <line x1="19" y1="16" x2="25" y2="16" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="19" x2="25" y2="19" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="22" x2="23" y2="22" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const BotIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="10" width="20" height="16" rx="4" stroke="#a78bfa" strokeWidth="1.8"/>
      <circle cx="12" cy="18" r="2" fill="#7c3aed"/>
      <circle cx="20" cy="18" r="2" fill="#7c3aed"/>
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
      description:
        "Een moderne website die 24/7 voor jouw bedrijf werkt. Ontworpen voor conversie, geoptimaliseerd voor Google en gebouwd om lang mee te gaan.",
      price: "€500",
      priceLabel: "eenmalig",
      monthly: "€50/maand",
      monthlyLabel: "hosting & onderhoud",
      features: [
        "Volledig op maat ontworpen",
        "Mobielvriendelijk (responsive)",
        "SEO-geoptimaliseerd",
        "Snel en veilig (SSL)",
        "Contactformulier",
        "Google Analytics",
      ],
      highlighted: false,
    },
    {
      icon: <BotIcon />,
      title: "AI Automatisering",
      tagline: "Laat AI het zware werk doen",
      description:
        "Van automatische klantreacties tot slimme planningssystemen — ik bouw AI-agents die repetitieve taken voor jou overnemen.",
      price: "€300",
      priceLabel: "setup",
      monthly: "€75/maand",
      monthlyLabel: "beheer & updates",
      features: [
        "Persoonlijke AI-assistent",
        "Automatische klantopvolging",
        "Afspraakplanning via AI",
        "WhatsApp / e-mail integratie",
        "24/7 beschikbaar",
        "Maandelijkse rapportage",
      ],
      highlighted: true,
    },
  ];

  return (
    <section id="diensten" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Diensten
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wat kan ik voor jou doen?
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Twee duidelijke diensten. Eerlijke prijzen. Geen verborgen kosten.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative rounded-2xl p-8 gradient-border transition-all hover:-translate-y-1 ${
                s.highlighted
                  ? "bg-violet-950/30 purple-glow"
                  : "bg-white/[0.03]"
              }`}
            >
              {s.highlighted && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/20">
                  Populair
                </span>
              )}

              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="text-violet-400 text-sm mt-1">{s.tagline}</p>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                {s.description}
              </p>

              {/* Price */}
              <div className="mt-6 flex items-end gap-3">
                <div>
                  <span className="text-3xl font-bold text-white">{s.price}</span>
                  <span className="text-white/40 text-sm ml-1">
                    {s.priceLabel}
                  </span>
                </div>
                <span className="text-white/30 mb-1">+</span>
                <div>
                  <span className="text-lg font-semibold text-violet-300">
                    {s.monthly}
                  </span>
                  <span className="text-white/40 text-xs ml-1">
                    {s.monthlyLabel}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-violet-400" fill="none" viewBox="0 0 10 10">
                        <path
                          d="M1.5 5l2.5 2.5 4.5-4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  s.highlighted
                    ? "bg-violet-600 hover:bg-violet-500 text-white hover:scale-105"
                    : "bg-white/5 hover:bg-white/10 text-white/80"
                }`}
              >
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
    {
      number: "01",
      title: "Gesprek",
      description:
        "We plannen een kort gesprek (15–30 min) om jouw wensen, doelen en budget te bespreken. Geen verplichtingen.",
    },
    {
      number: "02",
      title: "Bouwen",
      description:
        "Je ontvangt een helder voorstel. Na akkoord start ik direct met bouwen — binnen 1–2 weken live.",
    },
    {
      number: "03",
      title: "Live",
      description:
        "Jouw website of AI-systeem gaat live. Ik blijf beschikbaar voor vragen, aanpassingen en uitbreidingen.",
    },
  ];

  return (
    <section id="werkwijze" className="py-24 pb-12 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-900/10 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Werkwijze
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Hoe werkt het?</h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Simpel, transparant en zonder gedoe. Van eerste contact tot live in
            3 stappen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="relative p-8 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.09] hover:border-violet-500/30 transition-all group-hover:-translate-y-1">
                <div className="text-violet-400/60 text-5xl font-bold font-mono mb-6 leading-none">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Portfolio ──────────────────────────────────────────── */
function Portfolio() {
  const projects = [
    {
      title: "Rijplatform",
      category: "Web App",
      description:
        "Een online rijexamen oefenplatform waar leerlingen theorie-examens kunnen oefenen met directe feedback en voortgangsoverzicht.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-violet-600/20 via-purple-800/10 to-transparent",
      visual: (
        <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
          <rect x="4" y="8" width="48" height="36" rx="6" stroke="#a78bfa" strokeWidth="2"/>
          <line x1="4" y1="16" x2="52" y2="16" stroke="#a78bfa" strokeWidth="2"/>
          <circle cx="10" cy="12" r="1.5" fill="#7c3aed"/>
          <circle cx="15" cy="12" r="1.5" fill="#7c3aed"/>
          <circle cx="20" cy="12" r="1.5" fill="#7c3aed"/>
          <rect x="10" y="21" width="36" height="3" rx="1.5" fill="#7c3aed" opacity="0.4"/>
          <rect x="10" y="28" width="24" height="3" rx="1.5" fill="#7c3aed" opacity="0.3"/>
          <rect x="10" y="35" width="30" height="3" rx="1.5" fill="#7c3aed" opacity="0.2"/>
          <line x1="20" y1="48" x2="36" y2="48" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
          <line x1="28" y1="44" x2="28" y2="48" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "AI Chatbot",
      category: "AI Automatisering",
      description:
        "Een klantenservice chatbot voor lokale bedrijven die vragen beantwoordt, afspraken plant en leads opvolgt — 24/7 zonder personeel.",
      tech: ["n8n", "Claude AI", "WhatsApp API"],
      gradient: "from-indigo-600/20 via-violet-800/10 to-transparent",
      visual: (
        <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
          <rect x="4" y="8" width="36" height="28" rx="6" stroke="#a78bfa" strokeWidth="2"/>
          <circle cx="14" cy="22" r="2.5" fill="#7c3aed"/>
          <circle cx="22" cy="22" r="2.5" fill="#7c3aed"/>
          <circle cx="30" cy="22" r="2.5" fill="#7c3aed"/>
          <path d="M4 36l6 6v-6" fill="#7c3aed" opacity="0.6"/>
          <rect x="24" y="26" width="28" height="22" rx="6" fill="#0a0a0f" stroke="#6d28d9" strokeWidth="1.5"/>
          <rect x="29" y="33" width="18" height="2.5" rx="1.25" fill="#a78bfa" opacity="0.7"/>
          <rect x="29" y="39" width="12" height="2.5" rx="1.25" fill="#7c3aed" opacity="0.5"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="portfolio" className="pt-12 pb-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full bg-violet-900/10 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Eerder gebouwd
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Een selectie van projecten die ik heb gebouwd.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-violet-500/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300"
            >
              {/* Card top accent */}
              <div className={`h-32 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                {p.visual}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20">
                    {p.category}
                  </span>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        let message = "Verzenden mislukt.";
        try {
          const data = await res.json();
          message = data.error ?? message;
        } catch {}
        throw new Error(message);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Klaar om te beginnen?
            </h2>
            <p className="mt-4 text-white/50">
              Stuur een bericht en ik reageer binnen 24 uur. Het eerste gesprek
              is altijd gratis en vrijblijvend.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 px-8 rounded-2xl bg-violet-500/10 border border-violet-500/20">
              <div className="text-8xl mb-6 text-green-400">✓</div>
              <h3 className="text-xl font-bold text-violet-300 mb-2">
                Bericht ontvangen!
              </h3>
              <p className="text-white/50 text-sm">
                Ik reageer zo snel mogelijk, uiterlijk binnen 24 uur.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-8 rounded-2xl bg-white/[0.03] gradient-border"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">
                    Naam *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jan de Vries"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jan@bedrijf.nl"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+31 6 12345678"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">
                    Interesse in
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all appearance-none"
                  >
                    <option value="" className="bg-[#0a0a0f]">Kies een dienst</option>
                    <option value="website" className="bg-[#0a0a0f]">Website bouwen</option>
                    <option value="ai" className="bg-[#0a0a0f]">AI Automatisering</option>
                    <option value="both" className="bg-[#0a0a0f]">Beide</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">
                  Bericht *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Vertel iets over je bedrijf en wat je nodig hebt..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed font-semibold text-sm transition-all hover:scale-[1.02] purple-glow"
              >
                {loading ? "Verzenden..." : "Verstuur bericht →"}
              </button>

              <p className="text-center text-white/25 text-xs">
                Geen spam. Ik reageer persoonlijk binnen 24 uur.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
        <span>
          © {new Date().getFullYear()} Life<span className="text-violet-500/60">gix</span> · Warnsveld
        </span>
        {/* TODO: fill in real KvK number */}
      </div>
    </footer>
  );
}
