import Link from "next/link";
import RestaurantNavbarClient from "./RestaurantNavbar";

/* ─── Metadata ───────────────────────────────────────────── */
export const metadata = {
  title: "Restaurant De Waag — Zutphen | Reserveer Online",
  description:
    "Al 20 jaar het beste restaurant van Zutphen. ★4.8 op Google. Vers bereid met lokale ingrediënten op de Grote Markt. Reserveer vandaag uw tafel.",
};

/* ─── Page ───────────────────────────────────────────────── */
export default function HorecaDemoPage() {
  return (
    <main
      className="flex flex-col min-h-screen"
      style={{ background: "#0f0a06", color: "#e8ddd0" }}
    >
      <RestaurantNavbarClient />
      <Hero />
      <ErkenningenBalk />
      <SfeerDrieluik />
      <MenuHighlights />
      <ChefVerhaal />
      <Reviews />
      <Openingstijden />
      <Reserveren />
      <RestaurantFooter />

      {/* Demo badge */}
      <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full text-xs pointer-events-none select-none"
        style={{
          background: "rgba(15,10,6,0.88)",
          border: "1px solid rgba(232,221,208,0.12)",
          color: "rgba(232,221,208,0.4)",
          backdropFilter: "blur(8px)",
        }}
      >
        Demo door{" "}
        <span style={{ color: "#c9a96e", fontWeight: 600 }}>Lifegix</span> — niet een echte website
      </div>
    </main>
  );
}

/* ─── Navbar ─────────────────────────────────────────────── */
function RestaurantNavbar() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-40"
      style={{
        background: "rgba(15,10,6,0.95)",
        borderBottom: "1px solid rgba(201,169,110,0.12)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-4">
        {/* Logo — serif, no icon */}
        <Link
          href="#"
          style={{ touchAction: "manipulation", textDecoration: "none" }}
          className="shrink-0"
        >
          <div style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: 400,
                letterSpacing: "0.12em",
                color: "#e8ddd0",
                textTransform: "uppercase",
              }}
            >
              De Waag
            </span>
            <span
              style={{
                display: "block",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                color: "#c9a96e",
                textTransform: "uppercase",
                marginTop: "-2px",
              }}
            >
              Zutphen · Est. 2004
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Menu", href: "#menu" },
            { label: "Over ons", href: "#over-ons" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                touchAction: "manipulation",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(232,221,208,0.5)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#reserveren"
          style={{
            touchAction: "manipulation",
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#0f0a06",
            background: "#c9a96e",
            padding: "10px 22px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Reserveer
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20 text-center overflow-hidden"
    >
      {/* Warm kaarslicht glow — subtiel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 40%, rgba(201,169,110,0.07) 0%, rgba(139,60,20,0.04) 50%, transparent 75%)",
        }}
      />

      {/* Decoratieve lijn boven */}
      <div
        className="mb-8 flex items-center gap-4"
        style={{ opacity: 0.4 }}
      >
        <div style={{ width: 40, height: 1, background: "#c9a96e" }} />
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#c9a96e",
          }}
        >
          Grote Markt · Zutphen
        </span>
        <div style={{ width: 40, height: 1, background: "#c9a96e" }} />
      </div>

      {/* Hoofdtitel — serif, editorial */}
      <h1
        className="max-w-4xl leading-none"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontWeight: 400,
          color: "#e8ddd0",
          letterSpacing: "-0.01em",
        }}
      >
        Een tafel die u{" "}
        <em style={{ color: "#c9a96e", fontStyle: "italic" }}>
          weken later
        </em>{" "}
        nog herinnert
      </h1>

      {/* Subtekst — sensorisch */}
      <p
        className="mt-7 max-w-lg leading-relaxed"
        style={{ color: "rgba(232,221,208,0.52)", fontSize: "1.05rem" }}
      >
        Verse kreeft, langzaam gegaarde entrecôte, zelfgemaakte desserts —
        bereid door chef Pieter Verhagen met ingrediënten van lokale boeren.
        Al 20 jaar op de Grote Markt.
      </p>

      {/* Google rating */}
      <div className="mt-7 flex items-center justify-center gap-3">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              style={{ width: 15, height: 15, color: "#c9a96e" }}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span style={{ fontSize: "0.82rem", color: "#e8ddd0", fontWeight: 600 }}>4.8</span>
        <span style={{ color: "rgba(232,221,208,0.25)" }}>·</span>
        <span style={{ fontSize: "0.82rem", color: "rgba(232,221,208,0.45)" }}>312 Google reviews</span>
        <span style={{ color: "rgba(232,221,208,0.25)" }}>·</span>
        <span style={{ fontSize: "0.82rem", color: "#c9a96e" }}>#1 in Zutphen</span>
      </div>

      {/* CTAs */}
      <div className="mt-9 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="#reserveren"
          style={{
            touchAction: "manipulation",
            background: "#c9a96e",
            color: "#0f0a06",
            padding: "14px 36px",
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Reserveer uw tafel
        </a>
        <a
          href="#menu"
          style={{
            touchAction: "manipulation",
            color: "rgba(232,221,208,0.55)",
            padding: "14px 36px",
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
            textDecoration: "none",
            border: "1px solid rgba(232,221,208,0.15)",
          }}
        >
          Bekijk het menu
        </a>
      </div>

      <p
        className="mt-5"
        style={{ fontSize: "0.72rem", color: "rgba(232,221,208,0.25)", letterSpacing: "0.06em" }}
      >
        Geen creditcard nodig · Gratis annuleren tot 4 uur van tevoren
      </p>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(201,169,110,0.3)" }}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          scroll
        </span>
        <svg
          className="animate-bounce"
          style={{ width: 14, height: 14 }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

/* ─── Erkenningen balk ───────────────────────────────────── */
function ErkenningenBalk() {
  const items = [
    { waarde: "★ 4.8 / 5", label: "Google · 312 reviews" },
    { waarde: "#1 Zutphen", label: "TripAdvisor 2024" },
    { waarde: "Est. 2004", label: "Al 20 jaar open" },
    { waarde: "Chef Pieter", label: "15 jaar ervaring" },
    { waarde: "Dagvers", label: "Van lokale boeren" },
  ];

  return (
    <div
      className="py-5 px-6 overflow-x-auto"
      style={{ borderTop: "1px solid rgba(201,169,110,0.12)", borderBottom: "1px solid rgba(201,169,110,0.12)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 min-w-max">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-0.5 shrink-0 text-center">
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "0.92rem",
                fontWeight: 400,
                color: "#c9a96e",
              }}
            >
              {item.waarde}
            </span>
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.1em", color: "rgba(232,221,208,0.35)" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Sfeer drieluik ─────────────────────────────────────── */
function SfeerDrieluik() {
  const panelen = [
    {
      nr: "01",
      titel: "Kaarslicht & sfeer",
      tekst:
        "Elke avond gedekte tafels in het historische pand aan de Grote Markt van Zutphen. Het geluid van gesprekken, het geur van de keuken.",
      detail: "Historisch pand · 1697",
    },
    {
      nr: "02",
      titel: "Dagverse ingrediënten",
      tekst:
        "Elke ochtend haalt chef Pieter zelf op bij zijn vaste leveranciers. De slager in Warnsveld, de visboer in Doetinchem, de groenteboer uit Vorden.",
      detail: "14 lokale leveranciers",
    },
    {
      nr: "03",
      titel: "Van amuse tot dessert",
      tekst:
        "Elk gerecht is samengesteld met zorg. Niet alleen voor smaak — maar voor het verhaal achter het bord dat voor u staat.",
      detail: "30+ gerechten · dagelijks",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-px" style={{ border: "1px solid rgba(201,169,110,0.1)" }}>
        {panelen.map((p, i) => (
          <div
            key={p.nr}
            className="p-10 flex flex-col gap-5"
            style={{
              background: i === 1 ? "rgba(201,169,110,0.04)" : "transparent",
              borderRight: i < panelen.length - 1 ? "1px solid rgba(201,169,110,0.1)" : undefined,
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "2.2rem",
                color: "rgba(201,169,110,0.18)",
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              {p.nr}
            </span>
            <div style={{ width: 28, height: 1, background: "#c9a96e", opacity: 0.4 }} />
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "#e8ddd0",
                lineHeight: 1.3,
              }}
            >
              {p.titel}
            </h3>
            <p style={{ fontSize: "0.88rem", color: "rgba(232,221,208,0.45)", lineHeight: 1.75 }}>
              {p.tekst}
            </p>
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c9a96e",
                opacity: 0.7,
                marginTop: "auto",
              }}
            >
              {p.detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Menu Highlights ────────────────────────────────────── */
function MenuHighlights() {
  const categories = [
    {
      naam: "Voorgerechten",
      items: [
        {
          naam: "Huisgemaakt ossenstaartsoep",
          beschrijving: "Rijke bouillon, 8 uur getrokken — zuurdesembrood en verse peterselie",
          prijs: "8,50",
          tag: "Chef's favoriet",
        },
        {
          naam: "Carpaccio van Black Angus",
          beschrijving: "Truffelaioli, kappertjes en 24 maanden rijpe parmezaan",
          prijs: "14,50",
          tag: null,
        },
        {
          naam: "Noordzee garnalenkroket",
          beschrijving: "Zelfgemaakt met verse garnalen — romig van binnen, knapperig van buiten",
          prijs: "12,00",
          tag: "Bestseller",
        },
      ],
    },
    {
      naam: "Hoofdgerechten",
      items: [
        {
          naam: "Entrecôte 'De Waag'",
          beschrijving: "250g Black Angus droog gerijpt op beukenhout, jus van rode wijn",
          prijs: "29,50",
          tag: "Signature",
        },
        {
          naam: "Wilde zalm op de huid",
          beschrijving: "Noorse zalm, groene asperges uit Limburg, citroenboter",
          prijs: "24,50",
          tag: null,
        },
        {
          naam: "Vegetarisch seizoensmenu",
          beschrijving: "Verse pasta of risotto — dagelijks wisselend met het beste van het seizoen",
          prijs: "19,50",
          tag: "Wisselend",
        },
      ],
    },
    {
      naam: "Nagerechten",
      items: [
        {
          naam: "Crème brûlée au naturel",
          beschrijving: "Dik vanillecrème, gekarameliseerd, vers rood fruit en munt",
          prijs: "8,00",
          tag: "Huisfavoriet",
        },
        {
          naam: "Warme chocoladefondat",
          beschrijving: "Pure Belgische chocolade, vloeibaar hart, vanille-ijs",
          prijs: "9,50",
          tag: null,
        },
        {
          naam: "Kaasplankje van de boer",
          beschrijving: "4 Nederlandse en Franse kazen, honing, druiven en crackers",
          prijs: "12,50",
          tag: null,
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-24 px-6" style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Sectie header */}
        <div className="text-center mb-16">
          <div
            className="flex items-center justify-center gap-4 mb-5"
            style={{ opacity: 0.5 }}
          >
            <div style={{ width: 32, height: 1, background: "#c9a96e" }} />
            <span
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#c9a96e",
              }}
            >
              Vers bereid · Dagelijks wisselend
            </span>
            <div style={{ width: 32, height: 1, background: "#c9a96e" }} />
          </div>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#e8ddd0",
            }}
          >
            Wat uw eetlust opwekt
          </h2>
          <p className="mt-4 max-w-md mx-auto" style={{ color: "rgba(232,221,208,0.42)", fontSize: "0.9rem", lineHeight: 1.7 }}>
            Chef Pieter kookt met wat de dag brengt. Dit zijn de vaste
            favorieten — naast een wisselend seizoensmenu.
          </p>
        </div>

        {/* Menu kolommen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x"
          style={{ borderTop: "1px solid rgba(201,169,110,0.1)", borderBottom: "1px solid rgba(201,169,110,0.1)", borderLeft: "1px solid rgba(201,169,110,0.1)", borderRight: "1px solid rgba(201,169,110,0.1)" }}>
          {categories.map((cat, catIdx) => (
            <div
              key={cat.naam}
              className="p-8 flex flex-col"
              style={{
                borderRight: catIdx < categories.length - 1 ? "1px solid rgba(201,169,110,0.1)" : undefined,
              }}
            >
              {/* Categorie naam */}
              <div className="mb-7 pb-5" style={{ borderBottom: "1px solid rgba(201,169,110,0.12)" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: "#c9a96e",
                    letterSpacing: "0.04em",
                  }}
                >
                  {cat.naam}
                </h3>
              </div>

              {/* Gerechten */}
              <div className="flex flex-col gap-7 flex-1">
                {cat.items.map((item) => (
                  <div key={item.naam}>
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            style={{
                              fontWeight: 500,
                              color: "#e8ddd0",
                              fontSize: "0.9rem",
                            }}
                          >
                            {item.naam}
                          </span>
                          {item.tag && (
                            <span
                              style={{
                                fontSize: "0.6rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#c9a96e",
                                border: "1px solid rgba(201,169,110,0.3)",
                                padding: "1px 6px",
                              }}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>
                      </div>
                      <span
                        style={{
                          fontFamily: "Georgia, serif",
                          color: "#c9a96e",
                          fontSize: "0.88rem",
                          whiteSpace: "nowrap",
                          fontWeight: 400,
                        }}
                      >
                        € {item.prijs}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "rgba(232,221,208,0.38)", lineHeight: 1.65 }}>
                      {item.beschrijving}
                    </p>
                    {/* Dottted lijn onder elk gerecht */}
                    <div style={{ marginTop: 14, borderBottom: "1px dotted rgba(201,169,110,0.12)" }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#reserveren"
            style={{
              touchAction: "manipulation",
              background: "#c9a96e",
              color: "#0f0a06",
              padding: "14px 40px",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Reserveer en geniet vanavond
          </a>
          <p className="mt-4" style={{ fontSize: "0.72rem", color: "rgba(232,221,208,0.25)" }}>
            Dagmenu op aanvraag bij de bediening
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Chef Verhaal ───────────────────────────────────────── */
function ChefVerhaal() {
  return (
    <section
      id="over-ons"
      className="py-24 px-6"
      style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visual side */}
          <div className="order-2 lg:order-1">
            <div
              className="relative aspect-[4/3] flex flex-col items-center justify-center gap-6 px-10 py-12 text-center overflow-hidden"
              style={{
                background: "rgba(201,169,110,0.04)",
                border: "1px solid rgba(201,169,110,0.14)",
              }}
            >
              {/* Decoratief ornament */}
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "4rem",
                  color: "rgba(201,169,110,0.08)",
                  position: "absolute",
                  top: 20,
                  right: 28,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                ✦
              </div>

              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(201,169,110,0.1)",
                  border: "1px solid rgba(201,169,110,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                }}
              >
                👨‍🍳
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "#e8ddd0",
                  }}
                >
                  Pieter Verhagen
                </p>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a96e", marginTop: 4 }}>
                  Hoofdchef & eigenaar
                </p>
                <p style={{ fontSize: "0.8rem", color: "rgba(232,221,208,0.35)", marginTop: 8 }}>
                  15 jaar culinaire ervaring
                </p>
              </div>

              {/* Award badge — linksonder */}
              <div
                className="absolute bottom-5 left-5 right-5 flex items-center gap-3 px-4 py-3"
                style={{
                  background: "rgba(15,10,6,0.85)",
                  border: "1px solid rgba(201,169,110,0.2)",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>🏆</span>
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#e8ddd0" }}>
                    Beste restaurant Zutphen
                  </div>
                  <div style={{ fontSize: "0.65rem", color: "rgba(232,221,208,0.35)" }}>
                    2023 &amp; 2024 — TripAdvisor
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tekst side */}
          <div className="order-1 lg:order-2">
            <div
              className="flex items-center gap-4 mb-6"
              style={{ opacity: 0.5 }}
            >
              <div style={{ width: 28, height: 1, background: "#c9a96e" }} />
              <span
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#c9a96e",
                }}
              >
                Ons verhaal
              </span>
            </div>

            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 400,
                color: "#e8ddd0",
                lineHeight: 1.2,
              }}
            >
              Al 20 jaar koken met{" "}
              <em style={{ color: "#c9a96e", fontStyle: "italic" }}>
                hart en ziel
              </em>{" "}
              voor Zutphen
            </h2>

            <p className="mt-7" style={{ color: "rgba(232,221,208,0.52)", lineHeight: 1.8, fontSize: "0.93rem" }}>
              In 2004 opende chef Pieter Verhagen de deuren van Restaurant De Waag
              in het historische hart van Zutphen. Wat begon als zijn grootste droom,
              groeide uit tot het meest geliefde restaurant van de regio.
            </p>

            <p className="mt-4" style={{ color: "rgba(232,221,208,0.52)", lineHeight: 1.8, fontSize: "0.93rem" }}>
              Elke ochtend rijdt Pieter naar zijn vaste leveranciers — de slager in
              Warnsveld, de visboer in Doetinchem, de groenteboer uit Vorden. Dat
              proef je. In elke hap.
            </p>

            {/* Citaat */}
            <blockquote
              className="mt-8 pl-5"
              style={{ borderLeft: "2px solid rgba(201,169,110,0.4)" }}
            >
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  color: "rgba(232,221,208,0.6)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                &ldquo;Ik kook alsof mijn moeder aan tafel zit. Met aandacht, met
                trots en zonder compromissen.&rdquo;
              </p>
              <footer
                className="mt-3"
                style={{ fontSize: "0.72rem", letterSpacing: "0.1em", color: "rgba(232,221,208,0.3)" }}
              >
                — Chef Pieter Verhagen
              </footer>
            </blockquote>

            {/* Statistieken */}
            <div className="mt-10 grid grid-cols-2 gap-px"
              style={{ border: "1px solid rgba(201,169,110,0.12)" }}>
              {[
                { label: "Opgericht", waarde: "2004" },
                { label: "Lokale leveranciers", waarde: "14" },
                { label: "Terugkerende gasten", waarde: "72%" },
                { label: "Vers per dag", waarde: "30+" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="p-5 flex flex-col gap-1"
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid rgba(201,169,110,0.12)" : undefined,
                    borderBottom: i < 2 ? "1px solid rgba(201,169,110,0.12)" : undefined,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      color: "#c9a96e",
                      lineHeight: 1,
                    }}
                  >
                    {item.waarde}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "rgba(232,221,208,0.38)", letterSpacing: "0.06em" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pers vermeldingen */}
        <div className="mt-20 pt-10" style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}>
          <p
            className="text-center mb-8"
            style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(201,169,110,0.45)" }}
          >
            Vermeld in &amp; beoordeeld door
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ border: "1px solid rgba(201,169,110,0.1)" }}>
            {[
              { naam: "De Gelderlander", tekst: "Het beste restaurant van de Achterhoek" },
              { naam: "ANWB Restaurantgids", tekst: "Onze keuze voor een onvergetelijk diner in Zutphen" },
              { naam: "TripAdvisor", tekst: "Certificate of Excellence · 5 jaar op rij" },
              { naam: "Eten & Genieten", tekst: "Toprestaurant 2024 — buitengewoon koken" },
            ].map((v, i) => (
              <div
                key={v.naam}
                className="p-6 flex flex-col gap-2"
                style={{ borderRight: i < 3 ? "1px solid rgba(201,169,110,0.1)" : undefined }}
              >
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "rgba(232,221,208,0.6)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {v.naam}
                </span>
                <p style={{ fontSize: "0.76rem", color: "rgba(232,221,208,0.3)", lineHeight: 1.6, fontStyle: "italic" }}>
                  &ldquo;{v.tekst}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Reviews ────────────────────────────────────────────── */
function Reviews() {
  const reviews = [
    {
      naam: "Marieke van den Berg",
      datum: "April 2025",
      aanleiding: "Jubileumdiner",
      tekst:
        "Wat een onvergetelijke avond. De entrecôte was absoluut perfect — knapperig van buiten, rosé van binnen. En de bediening was attent zonder opdringerig te zijn.",
      initials: "MvB",
    },
    {
      naam: "Thomas Janssen",
      datum: "Maart 2025",
      aanleiding: "Zakelijk diner",
      tekst:
        "Heerlijk gegeten. De vegetarische dagschotel overtrof alle verwachtingen — creatief, smaakvol en ruim gevuld. De locatie in het historische pand is onverslaanbaar.",
      initials: "TJ",
    },
    {
      naam: "Fatima El Amrani",
      datum: "Mei 2025",
      aanleiding: "Verjaardag",
      tekst:
        "De crème brûlée is de lekkerste die ik ooit heb gegeten. Het personeel had een kaarsje geregeld voor mijn verjaardag zonder dat ik erom vroeg. Dat kleine gebaar maakt het verschil.",
      initials: "FEA",
    },
  ];

  return (
    <section
      className="py-24 px-6"
      style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5" style={{ opacity: 0.5 }}>
            <div style={{ width: 28, height: 1, background: "#c9a96e" }} />
            <span
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#c9a96e",
              }}
            >
              Geverifieerde Google reviews
            </span>
            <div style={{ width: 28, height: 1, background: "#c9a96e" }} />
          </div>

          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              fontWeight: 400,
              color: "#e8ddd0",
            }}
          >
            Wat onze gasten zeggen
          </h2>

          {/* Score badge */}
          <div
            className="mt-6 inline-flex items-center gap-4 px-7 py-4"
            style={{ border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "2.5rem",
                color: "#c9a96e",
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              4.8
            </span>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} style={{ width: 13, height: 13, color: "#c9a96e" }} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: "0.72rem", color: "rgba(232,221,208,0.35)" }}>312 beoordelingen · Google</span>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: "1px solid rgba(201,169,110,0.1)" }}>
          {reviews.map((review, i) => (
            <div
              key={review.naam}
              className="p-8 flex flex-col gap-5"
              style={{
                borderRight: i < reviews.length - 1 ? "1px solid rgba(201,169,110,0.1)" : undefined,
              }}
            >
              {/* Sterren + aanleiding */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} style={{ width: 13, height: 13, color: "#c9a96e" }} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(232,221,208,0.3)",
                    border: "1px solid rgba(232,221,208,0.1)",
                    padding: "2px 7px",
                  }}
                >
                  {review.aanleiding}
                </span>
              </div>

              {/* Citaat ornament */}
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "3rem",
                  color: "rgba(201,169,110,0.15)",
                  lineHeight: 0.6,
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              <p style={{ color: "rgba(232,221,208,0.55)", fontSize: "0.88rem", lineHeight: 1.75, flex: 1 }}>
                {review.tekst}
              </p>

              {/* Auteur */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(201,169,110,0.1)",
                    border: "1px solid rgba(201,169,110,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#c9a96e",
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <div style={{ fontSize: "0.84rem", fontWeight: 500, color: "#e8ddd0" }}>
                    {review.naam}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(232,221,208,0.3)" }}>
                    {review.datum} · Google
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

/* ─── Openingstijden ─────────────────────────────────────── */
function Openingstijden() {
  const tijden = [
    { dag: "Maandag – Dinsdag", tijd: null, gesloten: true },
    { dag: "Woensdag", tijd: "12:00 – 21:00", gesloten: false },
    { dag: "Donderdag", tijd: "12:00 – 21:30", gesloten: false },
    { dag: "Vrijdag", tijd: "12:00 – 22:00", gesloten: false, vandaag: true },
    { dag: "Zaterdag", tijd: "11:30 – 22:00", gesloten: false },
    { dag: "Zondag", tijd: "11:30 – 20:30", gesloten: false },
  ];

  return (
    <section
      className="py-20 px-6"
      style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-5" style={{ opacity: 0.5 }}>
            <div style={{ width: 28, height: 1, background: "#c9a96e" }} />
            <div className="flex items-center gap-2">
              <span
                className="animate-pulse"
                style={{ width: 7, height: 7, borderRadius: "50%", background: "#c9a96e", display: "inline-block" }}
              />
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a96e" }}>
                Vandaag open · 12:00 – 22:00
              </span>
            </div>
            <div style={{ width: 28, height: 1, background: "#c9a96e" }} />
          </div>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 400,
              color: "#e8ddd0",
            }}
          >
            Wanneer kunt u langskomen?
          </h2>
          <p className="mt-3 max-w-sm mx-auto" style={{ color: "rgba(232,221,208,0.38)", fontSize: "0.85rem", lineHeight: 1.7 }}>
            Op zaterdagavond raden wij vroeg reserveren aan — de tafels zijn snel weg.
          </p>
        </div>

        {/* Urgency banner */}
        <div
          className="mb-6 flex items-center justify-between gap-4 px-5 py-4"
          style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.18)" }}
        >
          <div>
            <div style={{ fontSize: "0.84rem", fontWeight: 600, color: "#c9a96e" }}>
              Vrijdagavond — nog 4 tafels vrij
            </div>
            <div style={{ fontSize: "0.72rem", color: "rgba(232,221,208,0.38)", marginTop: 2 }}>
              Zaterdagavond bijna vol · reserveer snel
            </div>
          </div>
          <a
            href="#reserveren"
            style={{
              touchAction: "manipulation",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#0f0a06",
              background: "#c9a96e",
              padding: "9px 18px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Reserveer
          </a>
        </div>

        {/* Tijden tabel */}
        <div style={{ border: "1px solid rgba(201,169,110,0.12)" }}>
          {tijden.map((row, i) => (
            <div
              key={row.dag}
              className="flex items-center justify-between px-6 py-4 gap-4"
              style={{
                borderBottom: i < tijden.length - 1 ? "1px solid rgba(201,169,110,0.08)" : undefined,
                background: row.vandaag ? "rgba(201,169,110,0.04)" : "transparent",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontSize: "0.88rem",
                    color: row.vandaag ? "#e8ddd0" : "rgba(232,221,208,0.45)",
                    fontWeight: row.vandaag ? 500 : 400,
                  }}
                >
                  {row.dag}
                </span>
                {row.vandaag && (
                  <span
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#c9a96e",
                      border: "1px solid rgba(201,169,110,0.3)",
                      padding: "1px 7px",
                    }}
                  >
                    Vandaag
                  </span>
                )}
              </div>
              {row.gesloten ? (
                <span style={{ fontSize: "0.85rem", color: "rgba(232,221,208,0.2)" }}>Gesloten</span>
              ) : (
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: row.vandaag ? 600 : 400,
                    color: row.vandaag ? "#c9a96e" : "rgba(232,221,208,0.55)",
                  }}
                >
                  {row.tijd}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-5 text-center" style={{ fontSize: "0.72rem", color: "rgba(232,221,208,0.25)" }}>
          Bij mooi weer is ons terras op de Grote Markt open · Groepen van 8+: bel voor beschikbaarheid
        </p>
      </div>
    </section>
  );
}

/* ─── Reserveren ─────────────────────────────────────────── */
function Reserveren() {
  return (
    <section
      id="reserveren"
      className="relative py-24 px-6"
      style={{ borderTop: "1px solid rgba(201,169,110,0.1)", overflow: "hidden" }}
    >
      {/* Subtiele achtergrond glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-5" style={{ opacity: 0.5 }}>
            <div style={{ width: 28, height: 1, background: "#c9a96e" }} />
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c9a96e" }}>
              Online reserveren · Direct bevestigd
            </span>
            <div style={{ width: 28, height: 1, background: "#c9a96e" }} />
          </div>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              fontWeight: 400,
              color: "#e8ddd0",
            }}
          >
            Reserveer uw tafel
          </h2>
          <p className="mt-3" style={{ color: "rgba(232,221,208,0.4)", fontSize: "0.85rem" }}>
            Bevestiging binnen 2 uur per e-mail · Gratis annuleren tot 4 uur van tevoren
          </p>
        </div>

        {/* Urgency */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span
            className="animate-pulse"
            style={{ width: 7, height: 7, borderRadius: "50%", background: "#c9a96e", display: "inline-block" }}
          />
          <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#c9a96e" }}>
            Vanavond nog 4 tafels vrij
          </span>
          <span style={{ color: "rgba(232,221,208,0.2)" }}>·</span>
          <span style={{ fontSize: "0.82rem", color: "rgba(232,221,208,0.4)" }}>
            Zaterdagavond bijna vol
          </span>
        </div>

        {/* Formulier kaart */}
        <div
          className="p-8 sm:p-10"
          style={{
            border: "1px solid rgba(201,169,110,0.18)",
            background: "rgba(201,169,110,0.03)",
          }}
        >
          <form
            action="/api/reservering"
            method="POST"
            className="flex flex-col gap-5"
          >
            {/* Naam + email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="naam"
                  style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(232,221,208,0.5)" }}
                >
                  Uw naam
                </label>
                <input
                  id="naam"
                  name="naam"
                  type="text"
                  required
                  placeholder="Jan de Vries"
                  className="w-full px-4 py-3"
                  style={{
                    background: "rgba(15,10,6,0.6)",
                    border: "1px solid rgba(201,169,110,0.18)",
                    color: "#e8ddd0",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(232,221,208,0.5)" }}
                >
                  E-mailadres
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jan@voorbeeld.nl"
                  className="w-full px-4 py-3"
                  style={{
                    background: "rgba(15,10,6,0.6)",
                    border: "1px solid rgba(201,169,110,0.18)",
                    color: "#e8ddd0",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* Telefoon */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="telefoon"
                style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(232,221,208,0.5)" }}
              >
                Telefoonnummer
              </label>
              <input
                id="telefoon"
                name="telefoon"
                type="tel"
                placeholder="06 – 12 34 56 78"
                className="w-full px-4 py-3"
                style={{
                  background: "rgba(15,10,6,0.6)",
                  border: "1px solid rgba(201,169,110,0.18)",
                  color: "#e8ddd0",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
            </div>

            {/* Datum + personen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="datum"
                  style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(232,221,208,0.5)" }}
                >
                  Datum
                </label>
                <input
                  id="datum"
                  name="datum"
                  type="date"
                  required
                  className="w-full px-4 py-3"
                  style={{
                    background: "rgba(15,10,6,0.6)",
                    border: "1px solid rgba(201,169,110,0.18)",
                    color: "#e8ddd0",
                    fontSize: "0.9rem",
                    outline: "none",
                    colorScheme: "dark",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="personen"
                  style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(232,221,208,0.5)" }}
                >
                  Aantal personen
                </label>
                <select
                  id="personen"
                  name="personen"
                  required
                  className="w-full px-4 py-3"
                  style={{
                    background: "rgba(15,10,6,0.6)",
                    border: "1px solid rgba(201,169,110,0.18)",
                    color: "#e8ddd0",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                >
                  <option value="">Kies...</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "persoon" : "personen"}
                    </option>
                  ))}
                  <option value="9+">9 of meer personen</option>
                </select>
              </div>
            </div>

            {/* Tijdslot */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="tijd"
                style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(232,221,208,0.5)" }}
              >
                Gewenste tijd
              </label>
              <select
                id="tijd"
                name="tijd"
                required
                className="w-full px-4 py-3"
                style={{
                  background: "rgba(15,10,6,0.6)",
                  border: "1px solid rgba(201,169,110,0.18)",
                  color: "#e8ddd0",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              >
                <option value="">Kies een tijdslot...</option>
                <option value="12:00">12:00 — Lunch</option>
                <option value="12:30">12:30 — Lunch</option>
                <option value="18:00">18:00 — Vroeg diner</option>
                <option value="18:30">18:30 — Vroeg diner</option>
                <option value="19:00">19:00 — Diner</option>
                <option value="19:30">19:30 — Diner</option>
                <option value="20:00">20:00 — Diner</option>
                <option value="20:30">20:30 — Laat diner</option>
              </select>
            </div>

            {/* Opmerkingen */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="opmerkingen"
                style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(232,221,208,0.5)" }}
              >
                Opmerkingen <span style={{ opacity: 0.5 }}>(optioneel)</span>
              </label>
              <textarea
                id="opmerkingen"
                name="opmerkingen"
                rows={3}
                placeholder="Allergieën, speciale gelegenheden, dieetwensen..."
                className="w-full px-4 py-3 resize-none"
                style={{
                  background: "rgba(15,10,6,0.6)",
                  border: "1px solid rgba(201,169,110,0.18)",
                  color: "#e8ddd0",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                touchAction: "manipulation",
                background: "#c9a96e",
                color: "#0f0a06",
                padding: "15px 32px",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                width: "100%",
                marginTop: 4,
              }}
            >
              Verstuur reserveringsaanvraag
            </button>
          </form>
        </div>

        {/* Trust signals */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
          {[
            { icon: "🔒", tekst: "Veilig & privacyvriendelijk" },
            { icon: "⏱", tekst: "Bevestiging binnen 2 uur" },
            { icon: "📞", tekst: "Of bel 0575 – 12 34 56" },
          ].map((item) => (
            <span
              key={item.tekst}
              className="flex items-center gap-1.5"
              style={{ fontSize: "0.72rem", color: "rgba(232,221,208,0.3)" }}
            >
              <span>{item.icon}</span>
              {item.tekst}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────── */
function RestaurantFooter() {
  return (
    <footer
      id="contact"
      className="py-16 px-6"
      style={{ borderTop: "1px solid rgba(201,169,110,0.14)", background: "#0a0704" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                marginBottom: 16,
              }}
            >
              <div style={{ fontSize: "1rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e8ddd0" }}>
                De Waag
              </div>
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a96e", marginTop: 2 }}>
                Zutphen · Est. 2004
              </div>
            </div>
            <p style={{ fontSize: "0.83rem", color: "rgba(232,221,208,0.35)", lineHeight: 1.75 }}>
              Authentieke keuken op de Grote Markt van Zutphen. Al meer dan 20
              jaar uw thuishaven voor een onvergetelijk diner.
            </p>
            <div className="mt-5 flex gap-0.5 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} style={{ width: 11, height: 11, color: "#c9a96e" }} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span style={{ fontSize: "0.72rem", color: "rgba(232,221,208,0.45)", marginLeft: 6 }}>4.8 · 312 Google reviews</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c9a96e",
                marginBottom: 16,
              }}
            >
              Contact &amp; Adres
            </h4>
            <ul className="flex flex-col gap-3" style={{ fontSize: "0.83rem", color: "rgba(232,221,208,0.42)" }}>
              <li>
                Grote Markt 8<br />
                7201 KL Zutphen
              </li>
              <li>
                <a
                  href="tel:+31575123456"
                  style={{ touchAction: "manipulation", color: "rgba(232,221,208,0.42)", textDecoration: "none" }}
                >
                  0575 – 12 34 56
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@restaurantdewaag.nl"
                  style={{ touchAction: "manipulation", color: "rgba(232,221,208,0.42)", textDecoration: "none" }}
                >
                  info@restaurantdewaag.nl
                </a>
              </li>
            </ul>
          </div>

          {/* Openingstijden */}
          <div>
            <h4
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c9a96e",
                marginBottom: 16,
              }}
            >
              Openingstijden
            </h4>
            <ul className="flex flex-col gap-2" style={{ fontSize: "0.83rem" }}>
              {[
                { dag: "Ma – Di", tijd: "Gesloten" },
                { dag: "Woensdag", tijd: "12:00 – 21:00" },
                { dag: "Donderdag", tijd: "12:00 – 21:30" },
                { dag: "Vrijdag", tijd: "12:00 – 22:00" },
                { dag: "Zaterdag", tijd: "11:30 – 22:00" },
                { dag: "Zondag", tijd: "11:30 – 20:30" },
              ].map((row) => (
                <li key={row.dag} className="flex justify-between gap-4">
                  <span style={{ color: "rgba(232,221,208,0.42)" }}>{row.dag}</span>
                  <span style={{ color: row.tijd === "Gesloten" ? "rgba(232,221,208,0.2)" : "rgba(232,221,208,0.55)" }}>
                    {row.tijd}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijfsgegevens */}
          <div>
            <h4
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c9a96e",
                marginBottom: 16,
              }}
            >
              Bedrijfsgegevens
            </h4>
            <ul className="flex flex-col gap-2" style={{ fontSize: "0.82rem", color: "rgba(232,221,208,0.35)" }}>
              <li>KvK: 12 34 56 78</li>
              <li>BTW: NL000000000B01</li>
              <li className="pt-1">
                <a href="#" style={{ touchAction: "manipulation", color: "rgba(232,221,208,0.35)", textDecoration: "none" }}>
                  Privacybeleid
                </a>
              </li>
              <li>
                <a href="#" style={{ touchAction: "manipulation", color: "rgba(232,221,208,0.35)", textDecoration: "none" }}>
                  Algemene voorwaarden
                </a>
              </li>
            </ul>

            <div
              className="mt-6 pt-4"
              style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
            >
              <p style={{ fontSize: "0.72rem", color: "rgba(232,221,208,0.2)" }}>
                Website door{" "}
                <Link
                  href="/"
                  style={{ touchAction: "manipulation", color: "#c9a96e", textDecoration: "none", fontWeight: 600, opacity: 0.7 }}
                >
                  Lifegix
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(201,169,110,0.1)", fontSize: "0.72rem", color: "rgba(232,221,208,0.2)" }}
        >
          <span>© {new Date().getFullYear()} Restaurant De Waag. Alle rechten voorbehouden.</span>
          <span className="flex items-center gap-2">
            <span
              className="animate-pulse"
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a96e", display: "inline-block", opacity: 0.7 }}
            />
            Vandaag open: 12:00 – 22:00
          </span>
        </div>
      </div>
    </footer>
  );
}
