import Link from "next/link";

export const metadata = {
  title: "Barbershop Yazan — Knippen & Baard trimmen in Zutphen",
  description:
    "Barbershop Yazan in Zutphen. 4.9 ★ op Google. Professioneel knippen, baard trimmen en meer. Al 8 jaar de vertrouwde kapper in het centrum van Zutphen. Maak vandaag nog een afspraak.",
};

/* ─────────────────────────────────────────────────────────────
   DEMO BANNER
───────────────────────────────────────────────────────────── */
function DemoBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-orange-500/95 text-white text-center py-2 px-4 text-xs sm:text-sm font-medium">
      Dit is een demo gemaakt door{" "}
      <Link
        href="/"
        className="underline underline-offset-2 hover:text-white/80 font-semibold"
        style={{ touchAction: "manipulation" }}
      >
        Lifegix
      </Link>{" "}
      — benieuwd naar jouw eigen website?{" "}
      <Link
        href="/#contact"
        className="underline underline-offset-2 hover:text-white/80 font-semibold"
        style={{ touchAction: "manipulation" }}
      >
        Neem contact op →
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────── */
function Navbar() {
  return (
    <header className="fixed top-8 left-0 right-0 z-40 px-4 sm:px-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-8 rounded-2xl bg-[#0f0f14]/95 border border-white/10 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M5 3h8M5 9h8M7 6h4M7 12h4"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <circle cx="9" cy="15" r="1.5" fill="white" />
            </svg>
          </div>
          <span className="font-bold text-white text-sm sm:text-base leading-tight">
            Barbershop <span className="text-orange-400">Yazan</span>
          </span>
        </div>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#diensten"
            className="text-white/60 hover:text-white text-sm"
            style={{ touchAction: "manipulation" }}
          >
            Diensten
          </a>
          <a
            href="#reviews"
            className="text-white/60 hover:text-white text-sm"
            style={{ touchAction: "manipulation" }}
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="text-white/60 hover:text-white text-sm"
            style={{ touchAction: "manipulation" }}
          >
            Contact
          </a>
        </div>

        {/* CTA — groot genoeg voor mobiel */}
        <a
          href="#contact"
          className="px-4 py-2.5 sm:px-5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-xs sm:text-sm"
          style={{ touchAction: "manipulation" }}
        >
          Afspraak maken →
        </a>
      </nav>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-36 pb-24 text-center overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Google review badge — sterkste trust signal */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white text-xs font-medium mb-7">
        {/* Sterren */}
        <span className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </span>
        <span className="text-white font-bold">4.9</span>
        <span className="text-white/50">op Google · 127 reviews</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white/50">Nu open</span>
      </div>

      {/* Headline — direct en benefit-driven */}
      <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
        De scherpste knip{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
          in Zutphen
        </span>
        {" "}— gegarandeerd.
      </h1>

      {/* Subtext — concreet en vertrouwenwekkend */}
      <p className="mt-6 max-w-lg text-white/55 text-lg leading-relaxed">
        Al <strong className="text-white/80">8 jaar</strong> de kapper van Zutphen. Meer dan{" "}
        <strong className="text-white/80">600 vaste klanten</strong> kiezen elke maand voor Barbershop Yazan — voor een reden.
      </p>

      {/* CTA knoppen — groot en duidelijk */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-sm sm:max-w-none">
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-400 font-bold text-base text-white"
          style={{
            touchAction: "manipulation",
            boxShadow: "0 0 40px rgba(249,115,22,0.25)",
          }}
        >
          Maak een afspraak →
        </a>
        {/* WhatsApp — converteert goed in NL */}
        <a
          href="https://wa.me/31575123456?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken%20bij%20Barbershop%20Yazan."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/15 hover:border-white/30 text-white/80 hover:text-white font-semibold text-base flex items-center justify-center gap-2.5"
          style={{ touchAction: "manipulation" }}
        >
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.524 5.856L0 24l6.338-1.503A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.003-1.369l-.36-.213-3.732.885.918-3.633-.235-.374A9.77 9.77 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
          </svg>
          WhatsApp ons
        </a>
      </div>

      {/* Urgentie + info — onderaan hero */}
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <div className="flex items-center gap-2 text-white/35 text-xs">
          <svg className="w-3.5 h-3.5 text-orange-500/60" fill="none" viewBox="0 0 24 24">
            <path d="M12 2v10l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          </svg>
          Vandaag nog een plek beschikbaar
        </div>
        <span className="hidden sm:block w-1 h-1 rounded-full bg-white/15" />
        <p className="text-white/30 text-xs">
          Laarstraat 9 · Zutphen centrum · Ma–Za 09:00–18:00
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   TRUST BAR  (direct na hero — sterkste trust signals)
───────────────────────────────────────────────────────────── */
function TrustBar() {
  const items = [
    {
      value: "4.9 ★",
      label: "Google beoordeling",
      sub: "127 reviews",
    },
    {
      value: "600+",
      label: "Vaste klanten",
      sub: "elke maand",
    },
    {
      value: "8 jaar",
      label: "Ervaring",
      sub: "in Zutphen",
    },
    {
      value: "Ma–Za",
      label: "Open",
      sub: "09:00 – 18:00",
    },
  ];

  return (
    <div className="border-y border-white/5 bg-white/[0.02] py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-0.5">
            <p className="text-2xl sm:text-3xl font-bold text-orange-400">{item.value}</p>
            <p className="text-sm text-white/70 font-medium">{item.label}</p>
            <p className="text-xs text-white/30">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DIENSTEN
───────────────────────────────────────────────────────────── */
function ScissorsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="7" cy="7" r="3.5" stroke="#fb923c" strokeWidth="1.6" />
      <circle cx="7" cy="21" r="3.5" stroke="#fb923c" strokeWidth="1.6" />
      <line x1="10" y1="9.5" x2="22" y2="4" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="10" y1="18.5" x2="22" y2="24" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="14" cy="14" r="1.2" fill="#fb923c" />
    </svg>
  );
}

function BeardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="10" rx="8" ry="6" stroke="#fb923c" strokeWidth="1.6" />
      <path d="M6 14c0 6 3 10 8 10s8-4 8-10" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 19c1 2 2 3 4 3s3-1 4-3" stroke="#fb923c" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="11" cy="10" r="1" fill="#fb923c" />
      <circle cx="17" cy="10" r="1" fill="#fb923c" />
    </svg>
  );
}

function ComboIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="8" cy="6" r="3" stroke="#fb923c" strokeWidth="1.6" />
      <circle cx="8" cy="20" r="3" stroke="#fb923c" strokeWidth="1.6" />
      <line x1="10.5" y1="8" x2="20" y2="4" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="10.5" y1="18" x2="20" y2="22" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 9c3 1 5 3 5 5s-2 4-5 5" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="13" cy="13" r="1" fill="#fb923c" />
    </svg>
  );
}

function KidIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="9" r="5" stroke="#fb923c" strokeWidth="1.6" />
      <path d="M6 24c0-5 3.6-8 8-8s8 3 8 8" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11 7.5c1-1 5-1 6 0" stroke="#fb923c" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="9.5" r="0.8" fill="#fb923c" />
      <circle cx="16" cy="9.5" r="0.8" fill="#fb923c" />
    </svg>
  );
}

function FadeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 20 Q14 4 24 20" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M7 20 Q14 8 21 20" stroke="#fb923c" strokeWidth="1" strokeLinecap="round" fill="none" strokeDasharray="1 2" />
      <line x1="4" y1="22" x2="24" y2="22" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Diensten() {
  const diensten = [
    {
      icon: <ScissorsIcon />,
      title: "Heren knippen",
      prijs: "€18",
      beschrijving:
        "Klassiek of modern — altijd een scherpe, nette knip die bij jouw gezicht past. Inclusief wassen en föhnen.",
      features: ["Klassiek of modern", "Wassen & föhnen", "Neklijn bijwerken"],
      popular: false,
      badge: null,
    },
    {
      icon: <BeardIcon />,
      title: "Baard trimmen",
      prijs: "€12",
      beschrijving:
        "Jouw baard strak bijgewerkt en in model gebracht. Met warme handdoek en baardbalsem finish.",
      features: ["Strak bijwerken", "Warme handdoek", "Baardbalsem finish"],
      popular: false,
      badge: null,
    },
    {
      icon: <ComboIcon />,
      title: "Knip + Baard",
      prijs: "€25",
      beschrijving:
        "Het complete pakket. Knippen én baard in één sessie — door 9 op de 10 klanten gekozen als beste deal.",
      features: ["Volledig knippen", "Baard bijwerken", "Wassen & stylen"],
      popular: true,
      badge: "Meest gekozen",
    },
    {
      icon: <FadeIcon />,
      title: "Fade / Skin fade",
      prijs: "€22",
      beschrijving:
        "Strakke fade of harde lijn — Yazan is gespecialiseerd in moderne fades die langer goed blijven.",
      features: ["High, mid of low fade", "Skin fade mogelijk", "Strakke lijn"],
      popular: false,
      badge: null,
    },
    {
      icon: <KidIcon />,
      title: "Kinderen",
      prijs: "€12",
      beschrijving:
        "Een ontspannen knipbeurt voor de kleintjes. Geduldig, snel en altijd kindvriendelijk.",
      features: ["Tot 12 jaar", "Geduldig & rustig", "Snel klaar"],
      popular: false,
      badge: null,
    },
  ];

  return (
    <section id="diensten" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Diensten & Prijzen
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Alles wat je nodig hebt — eerlijk geprijsd
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm">
            Geen verborgen kosten. Geen gedoe. Wat je ziet is wat je betaalt.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {diensten.map((d) => (
            <div
              key={d.title}
              className={`relative rounded-2xl p-6 border flex flex-col gap-4 ${
                d.popular
                  ? "bg-orange-950/30 border-orange-500/40"
                  : "bg-white/[0.03] border-white/10"
              }`}
              style={
                d.popular
                  ? { boxShadow: "0 0 50px rgba(249,115,22,0.12)" }
                  : undefined
              }
            >
              {d.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold tracking-wide whitespace-nowrap">
                  {d.badge}
                </span>
              )}

              <div className="flex items-start justify-between">
                <div>{d.icon}</div>
                <div className="text-right">
                  <p className="text-orange-400 text-2xl font-bold">{d.prijs}</p>
                  <p className="text-white/30 text-xs">incl. btw</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{d.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mt-2">
                  {d.beschrijving}
                </p>
              </div>

              <ul className="space-y-2 flex-1">
                {d.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                    <span className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <svg className="w-2 h-2 text-orange-400" fill="none" viewBox="0 0 8 8">
                        <path d="M1 4l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-bold text-sm ${
                  d.popular
                    ? "bg-orange-500 hover:bg-orange-400 text-white"
                    : "bg-white/[0.06] hover:bg-white/10 text-white/80 border border-white/10"
                }`}
                style={{ touchAction: "manipulation" }}
              >
                {d.popular ? "Nu boeken →" : "Afspraak maken"}
              </a>
            </div>
          ))}
        </div>

        {/* Prijzen overzicht tabel — voor snelle referentie */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/8 max-w-2xl mx-auto">
          <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-4 text-center">
            Volledige prijslijst
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { dienst: "Heren knippen", prijs: "€18" },
              { dienst: "Baard trimmen", prijs: "€12" },
              { dienst: "Knip + Baard combo", prijs: "€25" },
              { dienst: "Fade / skin fade", prijs: "€22" },
              { dienst: "Kinderen (t/m 12 jaar)", prijs: "€12" },
              { dienst: "Contouren bijwerken", prijs: "€8" },
            ].map((item) => (
              <div
                key={item.dienst}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <span className="text-white/60 text-sm">{item.dienst}</span>
                <span className="text-orange-400 font-bold text-sm">{item.prijs}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-white/25 text-xs text-center">
            Pinnen en contant betalen mogelijk. Alle prijzen inclusief btw.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   REVIEWS  (voor werkwijze — social proof eerder tonen)
───────────────────────────────────────────────────────────── */
function Reviews() {
  const reviews = [
    {
      naam: "Khalid A.",
      tekst:
        "Al jaren klant bij Yazan. Hij weet precies wat ik wil zonder dat ik veel hoef te zeggen. Altijd een strakke knip en een goed gesprek erbij.",
      dienst: "Heren knippen",
      sterren: 5,
      via: "Google",
    },
    {
      naam: "Tom van der Berg",
      tekst:
        "Beste kapper in Zutphen, punt. De combo deal is echt de moeite waard. Knip én baard in één keer netjes — voor een eerlijke prijs.",
      dienst: "Knip + Baard",
      sterren: 5,
      via: "Google",
    },
    {
      naam: "Reza M.",
      tekst:
        "Mijn zoons gaan altijd naar Yazan. Geduldig met kinderen en ze komen altijd blij naar buiten. Aanrader voor alle vaders in de buurt.",
      dienst: "Kinderen",
      sterren: 5,
      via: "Google",
    },
  ];

  return (
    <section id="reviews" className="py-24 px-6 relative">
      <div
        className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        {/* Header met Google score prominent */}
        <div className="text-center mb-14">
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Wat klanten zeggen
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            127 reviews. Gemiddeld 4.9 sterren.
          </h2>
          {/* Google badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/10">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            <span className="text-white font-bold text-sm">4.9</span>
            <span className="text-white/40 text-sm">op Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.naam}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: r.sterren }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/25 text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </span>
              </div>
              <p className="text-white/65 text-sm leading-relaxed flex-1">
                &ldquo;{r.tekst}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold text-sm">{r.naam}</p>
                <p className="text-white/35 text-xs mt-0.5">{r.dienst}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   WERKWIJZE
───────────────────────────────────────────────────────────── */
function Werkwijze() {
  const stappen = [
    {
      nummer: "01",
      titel: "Afspraak maken in 1 minuut",
      omschrijving:
        "Bel ons, stuur een WhatsApp-bericht of vul het formulier hieronder in. We bevestigen dezelfde dag — ook op korte termijn.",
    },
    {
      nummer: "02",
      titel: "Welkom in de stoel",
      omschrijving:
        "Yazan bespreekt wat je wilt. Klassiek, modern, fade of een combo — jij bepaalt, wij zorgen voor de perfecte uitvoering.",
    },
    {
      nummer: "03",
      titel: "Tevreden de deur uit",
      omschrijving:
        "Nette finish, eerlijk advies en een resultaat waar je trots op bent. Vandaar waarom 600+ klanten elke maand terugkomen.",
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Hoe het werkt
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Van afspraak tot perfecte knip — in 3 stappen
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stappen.map((stap) => (
            <div
              key={stap.nummer}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10"
            >
              <div className="text-orange-500/40 text-5xl font-bold font-mono mb-6 leading-none">
                {stap.nummer}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {stap.titel}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {stap.omschrijving}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   URGENTIE SECTIE — converteert twijfelaars
───────────────────────────────────────────────────────────── */
function UrgeSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-2xl p-8 sm:p-10 text-center border border-orange-500/25 relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at center, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.02) 60%, transparent 100%)",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <p className="text-green-400 text-sm font-medium">Nu open — Ma t/m Za 09:00–18:00</p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Vandaag nog goed verzorgd de deur uit?
          </h2>
          <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
            Plekken gaan snel vol — zeker op vrijdag en zaterdag. Boek nu jouw plek voor deze week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm"
              style={{
                touchAction: "manipulation",
                boxShadow: "0 0 40px rgba(249,115,22,0.20)",
              }}
            >
              Afspraak maken →
            </a>
            <a
              href="tel:+31575123456"
              className="px-8 py-4 rounded-xl border border-white/15 hover:border-white/30 text-white/80 hover:text-white font-semibold text-sm flex items-center justify-center gap-2"
              style={{ touchAction: "manipulation" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Bel direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────────── */
function Contact() {
  const openingstijden = [
    { dag: "Maandag", tijd: "09:00 – 18:00" },
    { dag: "Dinsdag", tijd: "09:00 – 18:00" },
    { dag: "Woensdag", tijd: "09:00 – 18:00" },
    { dag: "Donderdag", tijd: "09:00 – 18:00" },
    { dag: "Vrijdag", tijd: "09:00 – 18:00" },
    { dag: "Zaterdag", tijd: "09:00 – 17:00" },
    { dag: "Zondag", tijd: "Gesloten" },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Afspraak maken
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Plan jouw bezoek
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm">
            Vul het formulier in, bel ons of stuur een WhatsApp. We reageren dezelfde dag.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Info — links */}
          <div className="space-y-6">

            {/* Quick actions — boven alles */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+31575123456"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-orange-500/10 border border-orange-500/25 hover:bg-orange-500/15 text-center"
                style={{ touchAction: "manipulation" }}
              >
                <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-white font-semibold text-sm">Bel ons</span>
                <span className="text-orange-400 text-xs">+31 575 123 456</span>
              </a>
              <a
                href="https://wa.me/31575123456?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-green-500/10 border border-green-500/25 hover:bg-green-500/15 text-center"
                style={{ touchAction: "manipulation" }}
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.524 5.856L0 24l6.338-1.503A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.003-1.369l-.36-.213-3.732.885.918-3.633-.235-.374A9.77 9.77 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                </svg>
                <span className="text-white font-semibold text-sm">WhatsApp</span>
                <span className="text-green-400 text-xs">Direct berichten</span>
              </a>
            </div>

            {/* Adres */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
              <div className="mt-0.5 w-9 h-9 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Laarstraat 9, Zutphen</p>
                <p className="text-white/40 text-xs mt-0.5">In het centrum — makkelijk te vinden</p>
                <a
                  href="https://maps.google.com/?q=Laarstraat+9+Zutphen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 text-xs hover:text-orange-300 mt-1.5 inline-block"
                  style={{ touchAction: "manipulation" }}
                >
                  Route plannen op Google Maps →
                </a>
              </div>
            </div>

            {/* Openingstijden */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-white font-semibold text-sm">Openingstijden</p>
              </div>
              <ul className="space-y-2">
                {openingstijden.map((o) => (
                  <li key={o.dag} className="flex items-center justify-between text-sm">
                    <span className={o.dag === "Zondag" ? "text-white/30" : "text-white/55"}>
                      {o.dag}
                    </span>
                    <span className={o.dag === "Zondag" ? "text-white/25" : "text-orange-400 font-medium"}>
                      {o.tijd}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-white/25 text-xs border-t border-white/5 pt-4">
                Op vrijdag en zaterdag raden we aan op tijd te boeken — vol = vol.
              </p>
            </div>
          </div>

          {/* Formulier — rechts */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <p className="text-white font-bold text-lg mb-1">
              Afspraak aanvragen
            </p>
            <p className="text-white/40 text-sm mb-6">We reageren dezelfde dag — ook via WhatsApp.</p>
            <form className="space-y-4" action="#">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 mb-1.5 font-medium">
                    Voornaam
                  </label>
                  <input
                    type="text"
                    placeholder="Ahmed"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-orange-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5 font-medium">
                    Achternaam
                  </label>
                  <input
                    type="text"
                    placeholder="de Vries"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-orange-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5 font-medium">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  placeholder="06 – 12 34 56 78"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-orange-500/50"
                />
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5 font-medium">
                  Gewenste dienst
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#0f0f14] border border-white/10 text-white/70 text-sm outline-none focus:border-orange-500/50 appearance-none">
                  <option value="">Kies een dienst…</option>
                  <option value="knippen">Heren knippen — €18</option>
                  <option value="baard">Baard trimmen — €12</option>
                  <option value="combo">Knip + Baard combo — €25 ★ Populair</option>
                  <option value="fade">Fade / skin fade — €22</option>
                  <option value="kinderen">Kinderen — €12</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5 font-medium">
                  Voorkeur dag & tijd
                </label>
                <input
                  type="text"
                  placeholder="bijv. vrijdag namiddag of zaterdag ochtend"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-orange-500/50"
                />
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5 font-medium">
                  Extra wensen (optioneel)
                </label>
                <textarea
                  rows={2}
                  placeholder="Specifieke stijl of wens? Laat het weten…"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-orange-500/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm"
                style={{
                  touchAction: "manipulation",
                  boxShadow: "0 0 30px rgba(249,115,22,0.18)",
                }}
              >
                Afspraak aanvragen →
              </button>
              <p className="text-center text-white/25 text-xs">
                We reageren binnen enkele uren · Geen kosten voor annuleren
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   STICKY MOBILE CTA — enorm effectief op mobiel
───────────────────────────────────────────────────────────── */
function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden px-4 pb-4 pt-3"
      style={{
        background: "linear-gradient(to top, rgba(10,10,15,0.98) 60%, transparent 100%)",
      }}
    >
      <div className="flex gap-2.5">
        <a
          href="tel:+31575123456"
          className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-white/[0.08] border border-white/15 text-white"
          style={{ touchAction: "manipulation" }}
          aria-label="Bellen"
        >
          <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center h-14 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm"
          style={{
            touchAction: "manipulation",
            boxShadow: "0 0 30px rgba(249,115,22,0.25)",
          }}
        >
          Afspraak maken →
        </a>
        <a
          href="https://wa.me/31575123456?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/15 border border-green-500/30 text-white"
          style={{ touchAction: "manipulation" }}
          aria-label="WhatsApp"
        >
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.524 5.856L0 24l6.338-1.503A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.003-1.369l-.36-.213-3.732.885.918-3.633-.235-.374A9.77 9.77 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 mt-auto mb-20 sm:mb-0">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-orange-500/60 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 18 18" fill="none">
              <path d="M5 3h8M5 9h8M7 6h4M7 12h4" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="9" cy="15" r="1.5" fill="white" />
            </svg>
          </div>
          <span>
            © {new Date().getFullYear()} Barbershop{" "}
            <span className="text-orange-500/60">Yazan</span> · Laarstraat 9, Zutphen
          </span>
        </div>
        <span className="text-center text-xs text-white/20">
          Demo gebouwd door{" "}
          <Link
            href="/"
            className="text-orange-400/60 hover:text-orange-400 underline underline-offset-2"
            style={{ touchAction: "manipulation" }}
          >
            Lifegix
          </Link>
        </span>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE (server component)
───────────────────────────────────────────────────────────── */
export default function BarbershopYazanDemo() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <DemoBanner />
      <Navbar />
      <Hero />
      <TrustBar />
      <Diensten />
      <Reviews />
      <UrgeSection />
      <Werkwijze />
      <Contact />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
