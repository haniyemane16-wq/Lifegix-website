import Link from "next/link";

export const metadata = {
  title: "Barbershop Yazan — Knippen & Baard trimmen in Zutphen",
  description:
    "Barbershop Yazan in Zutphen. 4.9 ★ op Google. Professioneel knippen, baard trimmen en meer. Al 8 jaar de vertrouwde kapper in het centrum van Zutphen. Maak vandaag nog een afspraak.",
};

/* ─────────────────────────────────────────────────────────────
   DESIGN TOKENS
   Palet gebaseerd op premium barbershop research:
   - #0e0b07  warm diepbruin  (achtergrond)
   - #c9a84c  antiek goud     (accent — klassiek barber)
   - #f5f0e8  crème wit       (hoofdtekst)
   - #8b1a1a  deep red        (tweede accent, bold statements)
   - #1c1510  kaart achtergrond
───────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────
   DEMO BANNER
───────────────────────────────────────────────────────────── */
function DemoBanner() {
  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full text-xs pointer-events-none select-none"
      style={{ background: "#ffffff", color: "#374151", border: "1px solid #e5e7eb", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", whiteSpace: "nowrap" }}
    >
      Demo door <span style={{ color: "#7c3aed", fontWeight: 700 }}>Lifegix</span> — niet een echte website
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ORNAMENT — decoratieve horizontale lijn met schaar-icoon
───────────────────────────────────────────────────────────── */
function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4))" }} />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "#c9a84c" }}>
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="1.2" />
        <line x1="5.5" y1="5.4" x2="14" y2="2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="5.5" y1="10.6" x2="14" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="8" cy="8" r="0.8" fill="currentColor" />
      </svg>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.4))" }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────── */
function Navbar() {
  return (
    <header
      className="fixed top-8 left-0 right-0 z-40 px-4 sm:px-6"
    >
      <nav
        className="max-w-5xl mx-auto flex items-center justify-between h-16 px-5 sm:px-8"
        style={{
          background: "rgba(14,11,7,0.96)",
          border: "1px solid rgba(201,168,76,0.18)",
          borderRadius: "4px",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Logo — badge stijl */}
        <div className="flex items-center gap-3">
          {/* Barber pole mini-icoon */}
          <div
            className="w-8 h-8 flex items-center justify-center flex-shrink-0"
            style={{ border: "1.5px solid rgba(201,168,76,0.5)", borderRadius: "2px" }}
          >
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <rect x="1" y="1" width="12" height="16" rx="1" stroke="#c9a84c" strokeWidth="1.2" />
              <path d="M1 5h12M1 9h12M1 13h12" stroke="#8b1a1a" strokeWidth="1.5" />
              <circle cx="7" cy="9" r="1.2" fill="#c9a84c" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-base font-bold" style={{ color: "#f5f0e8", letterSpacing: "0.05em" }}>
              BARBERSHOP
            </span>
            <span className="text-xs font-bold tracking-widest" style={{ color: "#c9a84c", letterSpacing: "0.15em" }}>
              YAZAN
            </span>
          </div>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {(["Diensten", "Reviews", "Contact"] as const).map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-xs tracking-widest font-medium"
              style={{ touchAction: "manipulation", color: "rgba(245,240,232,0.5)", letterSpacing: "0.12em" }}
            >
              {label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="px-5 py-2.5 text-xs font-bold tracking-widest"
          style={{
            touchAction: "manipulation",
            background: "#c9a84c",
            color: "#0e0b07",
            letterSpacing: "0.1em",
            borderRadius: "2px",
          }}
        >
          AFSPRAAK
        </a>
      </nav>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO — editorial, grote typografie, heritage gevoel
───────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-40 pb-28 text-center overflow-hidden"
    >
      {/* Subtiele gouden glow — geen blur class */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Est. badge — vintage heritage */}
      <div
        className="inline-flex items-center gap-3 mb-8 px-5 py-2"
        style={{
          border: "1px solid rgba(201,168,76,0.3)",
          borderRadius: "1px",
        }}
      >
        <div className="w-3 h-px" style={{ background: "#c9a84c" }} />
        <span
          className="text-xs font-bold tracking-widest"
          style={{ color: "#c9a84c", letterSpacing: "0.2em" }}
        >
          EST. 2016 · ZUTPHEN
        </span>
        <div className="w-3 h-px" style={{ background: "#c9a84c" }} />
      </div>

      {/* Grote serif headline */}
      <h1
        className="max-w-4xl font-serif leading-none tracking-tight"
        style={{
          color: "#f5f0e8",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          letterSpacing: "-0.01em",
          fontWeight: 700,
        }}
      >
        De Knip Die
        <br />
        <span style={{ color: "#c9a84c", fontStyle: "italic" }}>
          Jij Verdient.
        </span>
      </h1>

      <Ornament className="mt-8 mb-8 max-w-xs w-full" />

      {/* Subkop */}
      <p
        className="max-w-md text-base leading-relaxed"
        style={{ color: "rgba(245,240,232,0.5)" }}
      >
        Al{" "}
        <span style={{ color: "#f5f0e8", fontWeight: 600 }}>8 jaar</span>{" "}
        de vertrouwde barbershop van Zutphen.{" "}
        <span style={{ color: "#f5f0e8", fontWeight: 600 }}>600+ vaste klanten</span>{" "}
        kiezen elke maand voor vakmanschap.
      </p>

      {/* Google badge */}
      <div
        className="inline-flex items-center gap-2.5 mt-7 px-4 py-2"
        style={{
          background: "rgba(201,168,76,0.06)",
          border: "1px solid rgba(201,168,76,0.15)",
          borderRadius: "2px",
        }}
      >
        <span className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} className="w-3.5 h-3.5" fill="#c9a84c" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </span>
        <span className="font-bold text-sm" style={{ color: "#f5f0e8" }}>4.9</span>
        <span className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>op Google · 127 reviews</span>
        <span className="w-px h-3.5" style={{ background: "rgba(201,168,76,0.25)" }} />
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ade80" }} />
        <span className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>Nu open</span>
      </div>

      {/* CTA knoppen */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-sm sm:max-w-none">
        <a
          href="#contact"
          className="w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-widest"
          style={{
            touchAction: "manipulation",
            background: "#c9a84c",
            color: "#0e0b07",
            letterSpacing: "0.12em",
            borderRadius: "2px",
            boxShadow: "0 0 40px rgba(201,168,76,0.2)",
          }}
        >
          AFSPRAAK MAKEN
        </a>
        <a
          href="https://wa.me/31575123456?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken%20bij%20Barbershop%20Yazan."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-10 py-4 text-sm font-semibold tracking-widest flex items-center justify-center gap-2.5"
          style={{
            touchAction: "manipulation",
            border: "1px solid rgba(201,168,76,0.25)",
            color: "rgba(245,240,232,0.7)",
            letterSpacing: "0.1em",
            borderRadius: "2px",
          }}
        >
          <svg className="w-4 h-4" fill="#4ade80" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.524 5.856L0 24l6.338-1.503A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.003-1.369l-.36-.213-3.732.885.918-3.633-.235-.374A9.77 9.77 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
          </svg>
          WHATSAPP
        </a>
      </div>

      {/* Adres onderaan */}
      <p className="mt-10 text-xs tracking-widest" style={{ color: "rgba(245,240,232,0.25)", letterSpacing: "0.15em" }}>
        LAARSTRAAT 9 · ZUTPHEN CENTRUM · MA–ZA 09:00–18:00
      </p>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   STATS BAR — heritage getallen, geen oranje
───────────────────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { value: "4.9", label: "Google Score", sub: "127 reviews" },
    { value: "600+", label: "Vaste Klanten", sub: "per maand" },
    { value: "8 jaar", label: "Vakmanschap", sub: "in Zutphen" },
    { value: "Ma–Za", label: "Open", sub: "09:00 – 18:00" },
  ];

  return (
    <div
      className="py-10 px-6"
      style={{
        borderTop: "1px solid rgba(201,168,76,0.12)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
        background: "rgba(28,21,16,0.5)",
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={s.label} className="flex flex-col gap-1">
            {i > 0 && (
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 hidden sm:block"
                style={{ background: "rgba(201,168,76,0.15)" }}
              />
            )}
            <p className="text-3xl font-serif font-bold" style={{ color: "#c9a84c" }}>{s.value}</p>
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(245,240,232,0.6)", letterSpacing: "0.1em" }}>{s.label}</p>
            <p className="text-xs" style={{ color: "rgba(245,240,232,0.28)" }}>{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DIENSTEN — kaarten met antiek goud accent
───────────────────────────────────────────────────────────── */
type Dienst = {
  nummer: string;
  title: string;
  prijs: string;
  beschrijving: string;
  features: string[];
  popular: boolean;
  badge: string | null;
};

function DienstKaart({ d }: { d: Dienst }) {
  return (
    <div
      className="relative flex flex-col gap-5 p-6 sm:p-7"
      style={{
        background: d.popular
          ? "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(28,21,16,0.9) 100%)"
          : "#1c1510",
        border: d.popular ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(201,168,76,0.1)",
        borderRadius: "3px",
        boxShadow: d.popular ? "0 0 60px rgba(201,168,76,0.08)" : "none",
      }}
    >
      {d.badge && (
        <div
          className="absolute -top-3 left-6 px-3 py-1 text-xs font-bold tracking-widest"
          style={{
            background: "#c9a84c",
            color: "#0e0b07",
            borderRadius: "1px",
            letterSpacing: "0.1em",
          }}
        >
          {d.badge.toUpperCase()}
        </div>
      )}

      {/* Nummer + prijs */}
      <div className="flex items-start justify-between">
        <span
          className="font-serif text-4xl font-bold leading-none"
          style={{ color: "rgba(201,168,76,0.15)" }}
        >
          {d.nummer}
        </span>
        <div className="text-right">
          <p className="font-serif text-2xl font-bold" style={{ color: "#c9a84c" }}>{d.prijs}</p>
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.25)" }}>incl. btw</p>
        </div>
      </div>

      {/* Titel + beschrijving */}
      <div>
        <h3
          className="font-serif text-xl font-bold"
          style={{ color: "#f5f0e8" }}
        >
          {d.title}
        </h3>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: "rgba(245,240,232,0.48)" }}
        >
          {d.beschrijving}
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-2 flex-1">
        {d.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-xs" style={{ color: "rgba(245,240,232,0.55)" }}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4l2.5 2.5L9 1" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Scheidingslijn */}
      <div className="h-px" style={{ background: "rgba(201,168,76,0.12)" }} />

      {/* CTA */}
      <a
        href="#contact"
        className="block text-center py-3 text-xs font-bold tracking-widest"
        style={{
          touchAction: "manipulation",
          background: d.popular ? "#c9a84c" : "transparent",
          color: d.popular ? "#0e0b07" : "#c9a84c",
          border: d.popular ? "none" : "1px solid rgba(201,168,76,0.3)",
          borderRadius: "2px",
          letterSpacing: "0.12em",
        }}
      >
        {d.popular ? "NU BOEKEN" : "AFSPRAAK MAKEN"}
      </a>
    </div>
  );
}

function Diensten() {
  const diensten: Dienst[] = [
    {
      nummer: "01",
      title: "Heren Knippen",
      prijs: "€18",
      beschrijving:
        "Klassiek of modern — altijd een scherpe, nette knip die past bij jouw gezicht en stijl. Inclusief wassen en föhnen.",
      features: ["Klassiek of modern", "Wassen & föhnen", "Neklijn bijwerken"],
      popular: false,
      badge: null,
    },
    {
      nummer: "02",
      title: "Baard Trimmen",
      prijs: "€12",
      beschrijving:
        "Jouw baard strak bijgewerkt en in model gebracht. Met warme handdoek en baardbalsem finish.",
      features: ["Strak bijwerken", "Warme handdoek", "Baardbalsem finish"],
      popular: false,
      badge: null,
    },
    {
      nummer: "03",
      title: "Knip + Baard",
      prijs: "€25",
      beschrijving:
        "Het complete pakket. Knippen én baard in één sessie — door 9 op de 10 klanten gekozen als de beste deal.",
      features: ["Volledig knippen", "Baard bijwerken", "Wassen & stylen"],
      popular: true,
      badge: "Meest gekozen",
    },
    {
      nummer: "04",
      title: "Fade / Skin Fade",
      prijs: "€22",
      beschrijving:
        "Strakke fade of harde lijn — Yazan is gespecialiseerd in moderne fades die langer mooi blijven.",
      features: ["High, mid of low fade", "Skin fade mogelijk", "Strakke contourlijn"],
      popular: false,
      badge: null,
    },
    {
      nummer: "05",
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
      <div className="max-w-5xl mx-auto">

        {/* Sectie header */}
        <div className="mb-16">
          <p
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: "#c9a84c", letterSpacing: "0.2em" }}
          >
            DIENSTEN & PRIJZEN
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold leading-tight"
            style={{ color: "#f5f0e8" }}
          >
            Eerlijk vakmanschap.
            <br />
            <span style={{ color: "#c9a84c", fontStyle: "italic" }}>Eerlijke prijs.</span>
          </h2>
          <Ornament className="mt-6 max-w-xs" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {diensten.map((d) => (
            <DienstKaart key={d.title} d={d} />
          ))}
        </div>

        {/* Prijsoverzicht tabel */}
        <div
          className="mt-10 p-6 sm:p-8 max-w-2xl mx-auto"
          style={{
            background: "#1c1510",
            border: "1px solid rgba(201,168,76,0.12)",
            borderRadius: "3px",
          }}
        >
          <p
            className="text-xs font-bold tracking-widest mb-5 text-center"
            style={{ color: "rgba(245,240,232,0.3)", letterSpacing: "0.15em" }}
          >
            VOLLEDIGE PRIJSLIJST
          </p>
          <div className="space-y-2">
            {[
              { dienst: "Heren knippen", prijs: "€18" },
              { dienst: "Baard trimmen", prijs: "€12" },
              { dienst: "Knip + Baard combo", prijs: "€25" },
              { dienst: "Fade / skin fade", prijs: "€22" },
              { dienst: "Kinderen (t/m 12 jaar)", prijs: "€12" },
              { dienst: "Contouren bijwerken", prijs: "€8" },
            ].map((item, i) => (
              <div
                key={item.dienst}
                className="flex items-center justify-between px-4 py-3"
                style={{
                  borderBottom: i < 5 ? "1px solid rgba(201,168,76,0.06)" : "none",
                }}
              >
                <span className="text-sm" style={{ color: "rgba(245,240,232,0.55)" }}>{item.dienst}</span>
                <span className="font-serif font-bold" style={{ color: "#c9a84c" }}>{item.prijs}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-center" style={{ color: "rgba(245,240,232,0.2)" }}>
            Pinnen en contant betalen mogelijk · Alle prijzen inclusief btw
          </p>
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
    },
    {
      naam: "Tom van der Berg",
      tekst:
        "Beste kapper in Zutphen, punt. De combo deal is echt de moeite waard. Knip én baard in één keer netjes voor een eerlijke prijs.",
      dienst: "Knip + Baard",
    },
    {
      naam: "Reza M.",
      tekst:
        "Mijn zoons gaan altijd naar Yazan. Geduldig met kinderen en ze komen altijd blij naar buiten. Aanrader voor alle vaders in de buurt.",
      dienst: "Kinderen",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-24 px-6 relative"
      style={{
        background: "linear-gradient(to bottom, transparent, rgba(28,21,16,0.4), transparent)",
      }}
    >
      {/* Subtiele achtergrond glow */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <div className="mb-14">
          <p
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: "#c9a84c", letterSpacing: "0.2em" }}
          >
            WAT KLANTEN ZEGGEN
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold"
            style={{ color: "#f5f0e8" }}
          >
            127 reviews.
            <br />
            <span style={{ color: "#c9a84c", fontStyle: "italic" }}>Gemiddeld 4.9 ★</span>
          </h2>
          <Ornament className="mt-6 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.naam}
              className="flex flex-col gap-5 p-6"
              style={{
                background: "#1c1510",
                border: "1px solid rgba(201,168,76,0.1)",
                borderRadius: "3px",
              }}
            >
              {/* Aanhalingstekens decoratief */}
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                <path d="M0 20V12C0 5.373 4 1.333 12 0l1.5 2.5C9.167 3.667 7 6 7 9v1h5v10H0zm13 0V12C13 5.373 17 1.333 25 0l1.5 2.5C22.167 3.667 20 6 20 9v1h5v10H13z" fill="rgba(201,168,76,0.2)" />
              </svg>

              <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(245,240,232,0.6)" }}>
                {r.tekst}
              </p>

              <div className="pt-4" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#f5f0e8" }}>{r.naam}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(245,240,232,0.3)" }}>{r.dienst}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-3.5 h-3.5" fill="#c9a84c" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   WERKWIJZE — groot genummerd, editorial
───────────────────────────────────────────────────────────── */
function Werkwijze() {
  const stappen = [
    {
      nummer: "I",
      titel: "Afspraak in 1 minuut",
      omschrijving:
        "Bel ons, stuur een WhatsApp of vul het formulier in. We bevestigen dezelfde dag — ook op korte termijn.",
    },
    {
      nummer: "II",
      titel: "Welkom in de stoel",
      omschrijving:
        "Yazan bespreekt wat jij wilt. Klassiek, modern, fade of combo — jij bepaalt, wij zorgen voor de perfecte uitvoering.",
    },
    {
      nummer: "III",
      titel: "Tevreden de deur uit",
      omschrijving:
        "Nette finish, eerlijk advies en een resultaat om trots op te zijn. Vandaar dat 600+ klanten elke maand terugkomen.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: "#c9a84c", letterSpacing: "0.2em" }}
          >
            HOE HET WERKT
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold"
            style={{ color: "#f5f0e8" }}
          >
            Van afspraak tot
            <br />
            <span style={{ color: "#c9a84c", fontStyle: "italic" }}>perfecte knip.</span>
          </h2>
          <Ornament className="mt-6 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stappen.map((stap) => (
            <div key={stap.nummer} className="relative pl-0">
              {/* Groot Romeins cijfer als decoratie */}
              <p
                className="font-serif text-8xl font-bold leading-none mb-4"
                style={{ color: "rgba(201,168,76,0.1)" }}
              >
                {stap.nummer}
              </p>
              {/* Gouden streep */}
              <div className="w-8 h-0.5 mb-4" style={{ background: "#c9a84c" }} />
              <h3
                className="font-serif text-xl font-bold mb-3"
                style={{ color: "#f5f0e8" }}
              >
                {stap.titel}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.48)" }}>
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
   CTA SECTIE — urgentie, geen oranje maar goud + deep red
───────────────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className="p-10 sm:p-14 text-center relative overflow-hidden"
          style={{
            background: "#1c1510",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "3px",
          }}
        >
          {/* Corner ornaments */}
          <div className="absolute top-3 left-3 w-5 h-5" style={{ borderTop: "1.5px solid rgba(201,168,76,0.4)", borderLeft: "1.5px solid rgba(201,168,76,0.4)" }} />
          <div className="absolute top-3 right-3 w-5 h-5" style={{ borderTop: "1.5px solid rgba(201,168,76,0.4)", borderRight: "1.5px solid rgba(201,168,76,0.4)" }} />
          <div className="absolute bottom-3 left-3 w-5 h-5" style={{ borderBottom: "1.5px solid rgba(201,168,76,0.4)", borderLeft: "1.5px solid rgba(201,168,76,0.4)" }} />
          <div className="absolute bottom-3 right-3 w-5 h-5" style={{ borderBottom: "1.5px solid rgba(201,168,76,0.4)", borderRight: "1.5px solid rgba(201,168,76,0.4)" }} />

          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ade80" }} />
            <p className="text-xs font-bold tracking-widest" style={{ color: "#4ade80", letterSpacing: "0.15em" }}>
              NU OPEN — MA T/M ZA 09:00–18:00
            </p>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f5f0e8" }}
          >
            Vandaag nog verzorgd
            <br />
            <span style={{ color: "#c9a84c", fontStyle: "italic" }}>de deur uit?</span>
          </h2>

          <Ornament className="mb-5" />

          <p className="text-sm mb-8" style={{ color: "rgba(245,240,232,0.45)" }}>
            Plekken gaan snel vol — zeker op vrijdag en zaterdag. Boek nu jouw plek.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="px-10 py-4 text-sm font-bold tracking-widest"
              style={{
                touchAction: "manipulation",
                background: "#c9a84c",
                color: "#0e0b07",
                letterSpacing: "0.12em",
                borderRadius: "2px",
                boxShadow: "0 0 40px rgba(201,168,76,0.18)",
              }}
            >
              AFSPRAAK MAKEN →
            </a>
            <a
              href="tel:+31575123456"
              className="px-10 py-4 text-sm font-semibold tracking-widest flex items-center justify-center gap-2"
              style={{
                touchAction: "manipulation",
                border: "1px solid rgba(201,168,76,0.25)",
                color: "rgba(245,240,232,0.7)",
                letterSpacing: "0.1em",
                borderRadius: "2px",
              }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              BEL DIRECT
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
        className="absolute top-1/2 left-1/2 w-full max-w-xl h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="max-w-5xl mx-auto relative">
        <div className="mb-16">
          <p
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: "#c9a84c", letterSpacing: "0.2em" }}
          >
            AFSPRAAK MAKEN
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold"
            style={{ color: "#f5f0e8" }}
          >
            Plan jouw bezoek.
          </h2>
          <Ornament className="mt-6 max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Links — info */}
          <div className="space-y-5">
            {/* Bel / WhatsApp knoppen */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+31575123456"
                className="flex flex-col items-center gap-2 p-5 text-center"
                style={{
                  touchAction: "manipulation",
                  background: "#1c1510",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "3px",
                }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" style={{ color: "#c9a84c" }}>
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: "#f5f0e8" }}>Bel ons</span>
                <span className="text-xs" style={{ color: "#c9a84c" }}>+31 575 123 456</span>
              </a>
              <a
                href="https://wa.me/31575123456?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-5 text-center"
                style={{
                  touchAction: "manipulation",
                  background: "#1c1510",
                  border: "1px solid rgba(74,222,128,0.2)",
                  borderRadius: "3px",
                }}
              >
                <svg className="w-5 h-5" fill="#4ade80" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.524 5.856L0 24l6.338-1.503A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.003-1.369l-.36-.213-3.732.885.918-3.633-.235-.374A9.77 9.77 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: "#f5f0e8" }}>WhatsApp</span>
                <span className="text-xs" style={{ color: "#4ade80" }}>Direct berichten</span>
              </a>
            </div>

            {/* Adres */}
            <div
              className="p-5 flex items-start gap-4"
              style={{
                background: "#1c1510",
                border: "1px solid rgba(201,168,76,0.1)",
                borderRadius: "3px",
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ border: "1px solid rgba(201,168,76,0.25)", borderRadius: "2px" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" style={{ color: "#c9a84c" }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#f5f0e8" }}>Laarstraat 9, Zutphen</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(245,240,232,0.35)" }}>In het centrum — makkelijk te vinden</p>
                <a
                  href="https://maps.google.com/?q=Laarstraat+9+Zutphen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs mt-1.5 inline-block"
                  style={{ touchAction: "manipulation", color: "#c9a84c" }}
                >
                  Route plannen op Google Maps →
                </a>
              </div>
            </div>

            {/* Openingstijden */}
            <div
              className="p-5"
              style={{
                background: "#1c1510",
                border: "1px solid rgba(201,168,76,0.1)",
                borderRadius: "3px",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ade80" }} />
                <p className="text-xs font-bold tracking-widest" style={{ color: "rgba(245,240,232,0.6)", letterSpacing: "0.12em" }}>
                  OPENINGSTIJDEN
                </p>
              </div>
              <ul className="space-y-2.5">
                {openingstijden.map((o) => (
                  <li key={o.dag} className="flex items-center justify-between text-sm">
                    <span style={{ color: o.dag === "Zondag" ? "rgba(245,240,232,0.25)" : "rgba(245,240,232,0.55)" }}>
                      {o.dag}
                    </span>
                    <span
                      className="font-medium"
                      style={{ color: o.dag === "Zondag" ? "rgba(245,240,232,0.2)" : "#c9a84c" }}
                    >
                      {o.tijd}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                className="mt-4 text-xs pt-4"
                style={{ color: "rgba(245,240,232,0.2)", borderTop: "1px solid rgba(201,168,76,0.06)" }}
              >
                Op vrijdag en zaterdag raden we aan op tijd te boeken — vol is vol.
              </p>
            </div>
          </div>

          {/* Rechts — formulier */}
          <div
            className="p-6 sm:p-8"
            style={{
              background: "#1c1510",
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: "3px",
            }}
          >
            {/* Formulier header */}
            <div className="mb-6">
              <p className="font-serif text-xl font-bold" style={{ color: "#f5f0e8" }}>
                Afspraak aanvragen
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(245,240,232,0.35)" }}>
                We reageren dezelfde dag — ook via WhatsApp.
              </p>
            </div>

            <form className="space-y-4" action="#">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-bold tracking-widest mb-1.5"
                    style={{ color: "rgba(245,240,232,0.35)", letterSpacing: "0.1em" }}
                  >
                    VOORNAAM
                  </label>
                  <input
                    type="text"
                    placeholder="Ahmed"
                    className="w-full px-4 py-3 text-sm outline-none"
                    style={{
                      background: "rgba(245,240,232,0.04)",
                      border: "1px solid rgba(201,168,76,0.15)",
                      borderRadius: "2px",
                      color: "#f5f0e8",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-bold tracking-widest mb-1.5"
                    style={{ color: "rgba(245,240,232,0.35)", letterSpacing: "0.1em" }}
                  >
                    ACHTERNAAM
                  </label>
                  <input
                    type="text"
                    placeholder="de Vries"
                    className="w-full px-4 py-3 text-sm outline-none"
                    style={{
                      background: "rgba(245,240,232,0.04)",
                      border: "1px solid rgba(201,168,76,0.15)",
                      borderRadius: "2px",
                      color: "#f5f0e8",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-bold tracking-widest mb-1.5"
                  style={{ color: "rgba(245,240,232,0.35)", letterSpacing: "0.1em" }}
                >
                  TELEFOONNUMMER
                </label>
                <input
                  type="tel"
                  placeholder="06 – 12 34 56 78"
                  className="w-full px-4 py-3 text-sm outline-none"
                  style={{
                    background: "rgba(245,240,232,0.04)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "2px",
                    color: "#f5f0e8",
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-bold tracking-widest mb-1.5"
                  style={{ color: "rgba(245,240,232,0.35)", letterSpacing: "0.1em" }}
                >
                  GEWENSTE DIENST
                </label>
                <select
                  className="w-full px-4 py-3 text-sm outline-none appearance-none"
                  style={{
                    background: "#1c1510",
                    border: "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "2px",
                    color: "rgba(245,240,232,0.6)",
                  }}
                >
                  <option value="">Kies een dienst…</option>
                  <option value="knippen">Heren knippen — €18</option>
                  <option value="baard">Baard trimmen — €12</option>
                  <option value="combo">Knip + Baard combo — €25 ★ Populair</option>
                  <option value="fade">Fade / skin fade — €22</option>
                  <option value="kinderen">Kinderen — €12</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-xs font-bold tracking-widest mb-1.5"
                  style={{ color: "rgba(245,240,232,0.35)", letterSpacing: "0.1em" }}
                >
                  VOORKEUR DAG & TIJD
                </label>
                <input
                  type="text"
                  placeholder="bijv. vrijdag namiddag of zaterdag ochtend"
                  className="w-full px-4 py-3 text-sm outline-none"
                  style={{
                    background: "rgba(245,240,232,0.04)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "2px",
                    color: "#f5f0e8",
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-bold tracking-widest mb-1.5"
                  style={{ color: "rgba(245,240,232,0.35)", letterSpacing: "0.1em" }}
                >
                  EXTRA WENSEN (OPTIONEEL)
                </label>
                <textarea
                  rows={2}
                  placeholder="Specifieke stijl of wens? Laat het weten…"
                  className="w-full px-4 py-3 text-sm outline-none resize-none"
                  style={{
                    background: "rgba(245,240,232,0.04)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "2px",
                    color: "#f5f0e8",
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm font-bold tracking-widest"
                style={{
                  touchAction: "manipulation",
                  background: "#c9a84c",
                  color: "#0e0b07",
                  letterSpacing: "0.12em",
                  borderRadius: "2px",
                  boxShadow: "0 0 30px rgba(201,168,76,0.15)",
                }}
              >
                AFSPRAAK AANVRAGEN →
              </button>

              <p className="text-center text-xs" style={{ color: "rgba(245,240,232,0.2)" }}>
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
   STICKY MOBIEL CTA
───────────────────────────────────────────────────────────── */
function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden px-4 pb-4 pt-3"
      style={{
        background: "linear-gradient(to top, rgba(14,11,7,0.99) 60%, transparent 100%)",
      }}
    >
      <div className="flex gap-2.5">
        <a
          href="tel:+31575123456"
          className="flex-shrink-0 flex items-center justify-center w-14 h-14"
          style={{
            touchAction: "manipulation",
            background: "#1c1510",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "2px",
          }}
          aria-label="Bellen"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" style={{ color: "#c9a84c" }}>
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center h-14 text-sm font-bold tracking-widest"
          style={{
            touchAction: "manipulation",
            background: "#c9a84c",
            color: "#0e0b07",
            letterSpacing: "0.1em",
            borderRadius: "2px",
            boxShadow: "0 0 30px rgba(201,168,76,0.2)",
          }}
        >
          AFSPRAAK →
        </a>
        <a
          href="https://wa.me/31575123456?text=Hallo%2C%20ik%20wil%20graag%20een%20afspraak%20maken."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center justify-center w-14 h-14"
          style={{
            touchAction: "manipulation",
            background: "#1c1510",
            border: "1px solid rgba(74,222,128,0.2)",
            borderRadius: "2px",
          }}
          aria-label="WhatsApp"
        >
          <svg className="w-5 h-5" fill="#4ade80" viewBox="0 0 24 24">
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
    <footer
      className="py-8 px-6 mt-auto mb-20 sm:mb-0"
      style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo tekst */}
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 flex items-center justify-center flex-shrink-0"
            style={{ border: "1px solid rgba(201,168,76,0.3)", borderRadius: "2px" }}
          >
            <svg width="10" height="12" viewBox="0 0 14 18" fill="none">
              <rect x="1" y="1" width="12" height="16" rx="1" stroke="#c9a84c" strokeWidth="1.2" />
              <path d="M1 6h12M1 10h12M1 14h12" stroke="#8b1a1a" strokeWidth="1.2" />
            </svg>
          </div>
          <span className="text-sm" style={{ color: "rgba(245,240,232,0.3)" }}>
            © {new Date().getFullYear()} Barbershop{" "}
            <span style={{ color: "rgba(201,168,76,0.6)" }}>Yazan</span>{" "}
            · Laarstraat 9, Zutphen
          </span>
        </div>
        <span className="text-xs" style={{ color: "rgba(245,240,232,0.2)" }}>
          Demo gebouwd door{" "}
          <Link
            href="/"
            className="underline underline-offset-2"
            style={{ touchAction: "manipulation", color: "rgba(201,168,76,0.5)" }}
          >
            Lifegix
          </Link>
        </span>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE (server component — geen "use client")
───────────────────────────────────────────────────────────── */
export default function BarbershopYazanDemo() {
  return (
    <main
      className="flex flex-col min-h-screen"
      style={{ background: "#0e0b07" }}
    >
      <DemoBanner />
      <Navbar />
      <Hero />
      <StatsBar />
      <Diensten />
      <Reviews />
      <CTASection />
      <Werkwijze />
      <Contact />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
