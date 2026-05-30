import Link from "next/link";

export const metadata = {
  title: "Barbershop Yazan — Knippen & Baard trimmen in Zutphen",
  description:
    "Barbershop Yazan in Zutphen. Professioneel knippen, baard trimmen en meer. Al 8 jaar de vertrouwde kapper in het centrum van Zutphen.",
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
        className="underline underline-offset-2 hover:text-white/80 transition-colors font-semibold"
        style={{ touchAction: "manipulation" }}
      >
        Lifegix
      </Link>{" "}
      — benieuwd naar jouw eigen website?{" "}
      <Link
        href="/#contact"
        className="underline underline-offset-2 hover:text-white/80 transition-colors font-semibold"
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
    <header className="fixed top-8 left-0 right-0 z-40 px-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-5 sm:px-8 rounded-2xl bg-[#0f0f14]/90 border border-white/10 backdrop-blur-sm">
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
            className="text-white/60 hover:text-white text-sm transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            Diensten
          </a>
          <a
            href="#prijzen"
            className="text-white/60 hover:text-white text-sm transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            Prijzen
          </a>
          <a
            href="#contact"
            className="text-white/60 hover:text-white text-sm transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold text-xs sm:text-sm transition-colors"
          style={{ touchAction: "manipulation" }}
        >
          Afspraak maken
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
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-36 pb-20 text-center overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-medium mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
        Al 8 jaar de kapper van Zutphen
      </div>

      {/* Headline */}
      <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
        Jouw stijl.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
          Onze passie.
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 max-w-lg text-white/50 text-lg leading-relaxed">
        Professioneel knippen en baard trimmen in het hart van Zutphen. Elke
        klant verdient de beste behandeling — zonder gedoe, met stijl.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="#contact"
          className="px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 font-semibold text-sm text-white transition-colors"
          style={{
            touchAction: "manipulation",
            boxShadow: "0 0 40px rgba(249,115,22,0.20)",
          }}
        >
          Maak een afspraak →
        </a>
        <a
          href="#diensten"
          className="px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm transition-colors"
          style={{ touchAction: "manipulation" }}
        >
          Bekijk diensten ↓
        </a>
      </div>

      {/* Subtle note */}
      <p className="mt-14 text-white/25 text-xs">
        Laarstraat 9 · Zutphen centrum · Ma–Za open
      </p>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   STATS
───────────────────────────────────────────────────────────── */
function Stats() {
  const items = [
    { value: "500+", label: "Tevreden klanten" },
    { value: "8 jaar", label: "Ervaring" },
    { value: "Ma–Za", label: "Open voor jou" },
    { value: "Centrum", label: "Zutphen" },
  ];
  return (
    <div className="border-y border-white/5 bg-white/[0.02] py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-2xl font-bold text-orange-400">{item.value}</p>
            <p className="mt-1 text-xs text-white/40">{item.label}</p>
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
      <line
        x1="10"
        y1="9.5"
        x2="22"
        y2="4"
        stroke="#fb923c"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="18.5"
        x2="22"
        y2="24"
        stroke="#fb923c"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="1.2" fill="#fb923c" />
    </svg>
  );
}

function BeardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="10" rx="8" ry="6" stroke="#fb923c" strokeWidth="1.6" />
      <path
        d="M6 14c0 6 3 10 8 10s8-4 8-10"
        stroke="#fb923c"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10 19c1 2 2 3 4 3s3-1 4-3"
        stroke="#fb923c"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
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
      <line
        x1="10.5"
        y1="8"
        x2="20"
        y2="4"
        stroke="#fb923c"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="10.5"
        y1="18"
        x2="20"
        y2="22"
        stroke="#fb923c"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17 9c3 1 5 3 5 5s-2 4-5 5"
        stroke="#fb923c"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="13" cy="13" r="1" fill="#fb923c" />
    </svg>
  );
}

function KidIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="9" r="5" stroke="#fb923c" strokeWidth="1.6" />
      <path
        d="M6 24c0-5 3.6-8 8-8s8 3 8 8"
        stroke="#fb923c"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M11 7.5c1-1 5-1 6 0" stroke="#fb923c" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="9.5" r="0.8" fill="#fb923c" />
      <circle cx="16" cy="9.5" r="0.8" fill="#fb923c" />
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
        "Klassiek of modern — altijd een scherpe knip die bij jou past. Inclusief wassen en föhnen.",
      features: ["Klassiek of modern", "Wassen & föhnen", "Neklijn bijwerken"],
      popular: false,
    },
    {
      icon: <BeardIcon />,
      title: "Baard trimmen",
      prijs: "€12",
      beschrijving:
        "Jouw baard strak bijgewerkt en in model gebracht. Met warme handdoek en baardbalsem.",
      features: ["Strak bijwerken", "Warme handdoek", "Baardbalsem finish"],
      popular: false,
    },
    {
      icon: <ComboIcon />,
      title: "Knip + Baard",
      prijs: "€25",
      beschrijving:
        "Het complete pakket. Knippen én baard in één sessie — de meest gekozen combinatie.",
      features: ["Volledig knippen", "Baard bijwerken", "Wassen & stylen"],
      popular: true,
    },
    {
      icon: <KidIcon />,
      title: "Kinderen",
      prijs: "€12",
      beschrijving:
        "Een ontspannen knipbeurt voor de kleintjes. Geduldig, snel en kindvriendelijk.",
      features: ["Tot 12 jaar", "Geduldig & vriendelijk", "Snel klaar"],
      popular: false,
    },
  ];

  return (
    <section id="diensten" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Diensten
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wat kunnen we voor je doen?
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Eerlijke prijzen, vakkundig werk. Geen verrassingen achteraf.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  ? { boxShadow: "0 0 40px rgba(249,115,22,0.10)" }
                  : undefined
              }
            >
              {d.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold tracking-wide">
                  Populair
                </span>
              )}

              <div>{d.icon}</div>

              <div>
                <h3 className="text-lg font-bold text-white">{d.title}</h3>
                <p className="text-orange-400 text-2xl font-bold mt-1">
                  {d.prijs}
                </p>
              </div>

              <p className="text-white/50 text-sm leading-relaxed flex-1">
                {d.beschrijving}
              </p>

              <ul className="space-y-2">
                {d.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-white/60"
                  >
                    <span className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <svg
                        className="w-2 h-2 text-orange-400"
                        fill="none"
                        viewBox="0 0 8 8"
                      >
                        <path
                          d="M1 4l2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="1.4"
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
                className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                  d.popular
                    ? "bg-orange-500 hover:bg-orange-400 text-white"
                    : "bg-white/5 hover:bg-white/10 text-white/80"
                }`}
                style={{ touchAction: "manipulation" }}
              >
                Afspraak maken →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PRIJZEN (anchor section)
───────────────────────────────────────────────────────────── */
function Prijzen() {
  return (
    <section
      id="prijzen"
      className="py-16 px-6 bg-white/[0.015] border-y border-white/5"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
          Prijsoverzicht
        </p>
        <h2 className="text-3xl font-bold text-white mb-10">
          Transparante prijzen
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { dienst: "Heren knippen", prijs: "€18" },
            { dienst: "Baard trimmen", prijs: "€12" },
            { dienst: "Knip + Baard combo", prijs: "€25" },
            { dienst: "Kinderen (t/m 12 jaar)", prijs: "€12" },
            { dienst: "Fade / skin fade", prijs: "€22" },
            { dienst: "Contouren bijwerken", prijs: "€8" },
          ].map((item) => (
            <div
              key={item.dienst}
              className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/8"
            >
              <span className="text-white/70 text-sm">{item.dienst}</span>
              <span className="text-orange-400 font-bold text-sm">
                {item.prijs}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-white/30 text-xs">
          Alle prijzen zijn inclusief btw. Pinnen en contant betalen mogelijk.
        </p>
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
      titel: "Afspraak maken",
      omschrijving:
        "Bel ons, stuur een WhatsApp-bericht of loop gewoon binnen. We plannen jouw afspraak snel in — ook op korte termijn.",
    },
    {
      nummer: "02",
      titel: "Welkom in de stoel",
      omschrijving:
        "Yazan bespreekt even wat je wilt. Klassiek, modern, fade of een combo — jij bepaalt, wij zorgen voor de perfecte uitvoering.",
    },
    {
      nummer: "03",
      titel: "Tevreden de deur uit",
      omschrijving:
        "Nette finish, eerlijk advies en een resultaat waar je trots op bent. Tot de volgende keer!",
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Werkwijze
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Zo werkt het
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Eenvoudig, snel en zonder stress. Van afspraak tot perfecte knip in
            3 stappen.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stappen.map((stap) => (
            <div
              key={stap.nummer}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10"
            >
              <div className="text-orange-500/50 text-5xl font-bold font-mono mb-6 leading-none">
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
   REVIEWS
───────────────────────────────────────────────────────────── */
function Reviews() {
  const reviews = [
    {
      naam: "Khalid A.",
      tekst:
        "Al jaren klant bij Yazan. Hij weet precies wat ik wil zonder dat ik veel hoef te zeggen. Altijd een strakke knip en een goed gesprek erbij.",
      dienst: "Heren knippen",
      sterren: 5,
    },
    {
      naam: "Tom van der Berg",
      tekst:
        "Beste kapper in Zutphen, punt. De combo deal is echt de moeite waard. Knip én baard in één keer netjes — en voor een eerlijke prijs.",
      dienst: "Knip + Baard",
      sterren: 5,
    },
    {
      naam: "Reza M.",
      tekst:
        "Mijn zoons gaan altijd naar Yazan. Geduldig met kinderen en ze komen altijd blij naar buiten. Aanrader voor alle vaders in de buurt.",
      dienst: "Kinderen",
      sterren: 5,
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div
        className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wat klanten zeggen
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Meer dan 500 tevreden klanten gingen je voor.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.naam}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4"
            >
              {/* Sterren */}
              <div className="flex gap-1">
                {Array.from({ length: r.sterren }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                &ldquo;{r.tekst}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold text-sm">{r.naam}</p>
                <p className="text-white/40 text-xs">Dienst: {r.dienst}</p>
              </div>
            </div>
          ))}
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
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Plan jouw afspraak
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Bel ons, stuur een bericht of vul het formulier in. We reageren zo
            snel mogelijk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            {/* Adres & tel */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
              {/* Adres */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-9 h-9 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Adres</p>
                  <p className="text-white/50 text-sm mt-0.5">
                    Laarstraat 9, Zutphen
                  </p>
                  <a
                    href="https://maps.google.com/?q=Laarstraat+9+Zutphen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 text-xs hover:text-orange-300 transition-colors mt-1 inline-block"
                    style={{ touchAction: "manipulation" }}
                  >
                    Bekijk op Google Maps →
                  </a>
                </div>
              </div>

              {/* Telefoon */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-9 h-9 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Telefoon</p>
                  <a
                    href="tel:+31575123456"
                    className="text-orange-400 text-sm hover:text-orange-300 transition-colors mt-0.5 inline-block"
                    style={{ touchAction: "manipulation" }}
                  >
                    +31 (0)575 – 123 456
                  </a>
                </div>
              </div>
            </div>

            {/* Openingstijden */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <p className="text-white font-semibold text-sm mb-4">
                Openingstijden
              </p>
              <ul className="space-y-2">
                {openingstijden.map((o) => (
                  <li
                    key={o.dag}
                    className="flex items-center justify-between text-sm"
                  >
                    <span
                      className={
                        o.dag === "Zondag" ? "text-white/30" : "text-white/60"
                      }
                    >
                      {o.dag}
                    </span>
                    <span
                      className={
                        o.dag === "Zondag"
                          ? "text-white/30"
                          : "text-orange-400 font-medium"
                      }
                    >
                      {o.tijd}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Formulier */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <p className="text-white font-semibold mb-6">
              Stuur een bericht
            </p>
            <form className="space-y-4" action="#">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">
                    Voornaam
                  </label>
                  <input
                    type="text"
                    placeholder="Ahmed"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-orange-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">
                    Achternaam
                  </label>
                  <input
                    type="text"
                    placeholder="de Vries"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-orange-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  placeholder="06 – 12 34 56 78"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-orange-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5">
                  Gewenste dienst
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white/70 text-sm outline-none focus:border-orange-500/50 transition-colors appearance-none">
                  <option value="" className="bg-[#0f0f14]">
                    Kies een dienst…
                  </option>
                  <option value="knippen" className="bg-[#0f0f14]">
                    Heren knippen — €18
                  </option>
                  <option value="baard" className="bg-[#0f0f14]">
                    Baard trimmen — €12
                  </option>
                  <option value="combo" className="bg-[#0f0f14]">
                    Knip + Baard — €25
                  </option>
                  <option value="kinderen" className="bg-[#0f0f14]">
                    Kinderen — €12
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5">
                  Bericht (optioneel)
                </label>
                <textarea
                  rows={3}
                  placeholder="Geef aan wanneer je beschikbaar bent of heb je een specifieke wens…"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-orange-500/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-colors"
                style={{
                  touchAction: "manipulation",
                  boxShadow: "0 0 30px rgba(249,115,22,0.15)",
                }}
              >
                Verstuur bericht →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-orange-500/60 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 18 18" fill="none">
              <path
                d="M5 3h8M5 9h8M7 6h4M7 12h4"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <circle cx="9" cy="15" r="1.5" fill="white" />
            </svg>
          </div>
          <span>
            © {new Date().getFullYear()} Barbershop{" "}
            <span className="text-orange-500/60">Yazan</span> · Laarstraat 9,
            Zutphen
          </span>
        </div>
        <span className="text-center text-xs text-white/20">
          Demo gebouwd door{" "}
          <Link
            href="/"
            className="text-orange-400/60 hover:text-orange-400 transition-colors underline underline-offset-2"
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
      <Stats />
      <Diensten />
      <Prijzen />
      <Werkwijze />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
