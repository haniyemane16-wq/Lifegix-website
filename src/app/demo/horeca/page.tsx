import Link from "next/link";
import ReserveringForm from "./ReserveringForm";

/* ─── Metadata ───────────────────────────────────────────── */
export const metadata = {
  title: "Restaurant De Waag — Zutphen | Reserveer Online",
  description:
    "Al 20 jaar het beste restaurant van Zutphen. ★4.8 op Google. Vers bereid met lokale ingrediënten op de Grote Markt. Reserveer vandaag uw tafel.",
};

/* ─── Page ───────────────────────────────────────────────── */
export default function HorecaDemoPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#080e0b] text-white">
      <RestaurantNavbar />
      <Hero />
      <TrustBar />
      <FotoSfeer />
      <MenuHighlights />
      <OverOns />
      <PersVermeldingen />
      <Reviews />
      <Openingstijden />
      <Reserveren />
      <RestaurantFooter />

      {/* Demo badge */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-black/80 border border-white/10 text-xs text-white/50 pointer-events-none select-none"
        style={{ backdropFilter: "blur(8px)" }}>
        Demo door{" "}
        <span className="text-emerald-400 font-medium">Lifegix</span> — niet
        een echte website
      </div>
    </main>
  );
}

/* ─── Navbar ─────────────────────────────────────────────── */
function RestaurantNavbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-white/5 bg-[#080e0b]/95"
      style={{ backdropFilter: "blur(12px)" }}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center gap-2.5 shrink-0"
          style={{ touchAction: "manipulation" }}
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-white text-sm leading-tight">Restaurant De Waag</div>
            <div className="text-[10px] text-white/40 leading-tight">Grote Markt · Zutphen</div>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/55">
          <a href="#menu" className="hover:text-white" style={{ touchAction: "manipulation" }}>Menu</a>
          <a href="#over-ons" className="hover:text-white" style={{ touchAction: "manipulation" }}>Over ons</a>
          <a href="#contact" className="hover:text-white" style={{ touchAction: "manipulation" }}>Contact</a>
        </nav>

        {/* CTA */}
        <a
          href="#reserveren"
          style={{ touchAction: "manipulation" }}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shrink-0"
        >
          Reserveer tafel →
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-16 text-center overflow-hidden">
      {/* Warm ambient glow — evokt kaarslicht sfeer */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-full"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(16,185,129,0.09) 0%, rgba(245,158,11,0.04) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Hero foto placeholder */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/*
          FOTO HIER: Sfeerfoto van het restaurant interieur — kaarslicht op tafels,
          warm hout, vol restaurant met gelukkige gasten. Donkere overlay 70% zodat
          tekst leesbaar blijft. Richtlijn: professionele fotograaf, geen stockfotos.
        */}
        {/* Gradient overlay hier wanneer echte foto beschikbaar is */}
      </div>

      {/* Urgency badge */}
      <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        Vanavond nog 4 tafels beschikbaar — vrijdagavond
      </div>

      {/* Headline — emotioneel, trigger-based */}
      <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
        Het diner waar u{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300">
          al weken
        </span>{" "}
        aan terugdenkt
      </h1>

      {/* Subtext — sensorisch en uitnodigend */}
      <p className="mt-6 max-w-xl text-white/60 text-lg leading-relaxed">
        Verse kreeft, langzaam gegaarde entrecôte en zelfgemaakte desserts —
        bereid door chef Pieter Verhagen met ingrediënten van lokale boeren.
        In het hart van historisch Zutphen, al{" "}
        <span className="text-white/85 font-medium">20 jaar</span> een begrip.
      </p>

      {/* Google rating — prominent in hero */}
      <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/70">
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map((i) => (
            <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="font-semibold text-white">4.8</span>
        <span className="text-white/40">·</span>
        <span className="text-white/55">312 Google reviews</span>
        <span className="text-white/40">·</span>
        <span className="text-emerald-400 font-medium">#1 in Zutphen</span>
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="#reserveren"
          style={{ touchAction: "manipulation" }}
          className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm text-white shadow-lg shadow-emerald-900/40"
          aria-label="Reserveer een tafel bij Restaurant De Waag"
        >
          Reserveer voor vanavond →
        </a>
        <a
          href="#menu"
          style={{ touchAction: "manipulation" }}
          className="px-8 py-4 rounded-xl border border-white/12 hover:border-white/25 text-white/65 hover:text-white font-medium text-sm"
        >
          Bekijk het menu
        </a>
      </div>

      {/* Subtekst onder knoppen */}
      <p className="mt-4 text-xs text-white/30">Geen creditcard nodig · Gratis annuleren tot 4 uur van tevoren</p>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20">
        <span className="text-[11px] tracking-widest uppercase">scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

/* ─── Trust Bar ──────────────────────────────────────────── */
function TrustBar() {
  const items = [
    { icon: "★", value: "4.8 / 5", label: "Google reviews" },
    { icon: "🏆", value: "#1 Zutphen", label: "TripAdvisor 2024" },
    { icon: "📅", value: "Sinds 2004", label: "Al 20 jaar open" },
    { icon: "👨‍🍳", value: "Chef Pieter", label: "15 jaar ervaring" },
    { icon: "🌿", value: "Lokaal & vers", label: "Dagelijks ingekocht" },
  ];

  return (
    <div className="border-y border-white/6 bg-white/2 py-5 px-6 overflow-x-auto">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 min-w-max mx-auto">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="text-xl">{item.icon}</span>
            <div>
              <div className="text-white font-bold text-sm leading-tight">{item.value}</div>
              <div className="text-white/35 text-xs leading-tight">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Sfeer foto sectie ──────────────────────────────────── */
function FotoSfeer() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

          {/* Grote foto links */}
          <div className="col-span-2 md:col-span-2 row-span-2 aspect-[4/3] rounded-2xl overflow-hidden relative bg-gradient-to-br from-emerald-950/80 to-[#080e0b] border border-white/6 flex items-end">
            {/*
              FOTO 1: Het interieur van het restaurant bij avond — warm kaarslicht,
              vol gedekte tafels, wijnglazen, lachende gasten op de achtergrond.
              Sfeervol en luxe maar toegankelijk. Horizontaal formaat 4:3.
            */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/15">
                <div className="text-5xl mb-2">🍽</div>
                <div className="text-xs">Sfeerfoto interieur · avondlicht · kaarslicht</div>
              </div>
            </div>
            <div className="relative z-10 p-5" style={{ background: "linear-gradient(to top, rgba(8,14,11,0.9) 0%, transparent 100%)" }}>
              <div className="text-white font-semibold text-sm">De zaal op vrijdagavond</div>
              <div className="text-white/40 text-xs mt-0.5">Reserveer voor een optimale ervaring</div>
            </div>
          </div>

          {/* Kleine foto's */}
          <div className="aspect-square rounded-2xl overflow-hidden relative bg-gradient-to-br from-amber-950/40 to-[#080e0b] border border-white/6 flex items-center justify-center">
            {/*
              FOTO 2: Close-up van de signature entrecôte — mooi gepresenteerd bord,
              perfect gegrild vlees, jus ernaast, verse kruiden. Donker bord, warme verlichting.
            */}
            <div className="text-center text-white/15 px-3">
              <div className="text-3xl mb-1">🥩</div>
              <div className="text-[10px]">Entrecôte close-up</div>
            </div>
          </div>

          <div className="aspect-square rounded-2xl overflow-hidden relative bg-gradient-to-br from-teal-950/40 to-[#080e0b] border border-white/6 flex items-center justify-center">
            {/*
              FOTO 3: Dessertpresentatie — crème brûlée met brandend suiker en vers fruit,
              elegante witte porseleinen kom op donker houten tafel. Detail, warm licht.
            */}
            <div className="text-center text-white/15 px-3">
              <div className="text-3xl mb-1">🍮</div>
              <div className="text-[10px]">Crème brûlée · close-up</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Menu Highlights ────────────────────────────────────── */
function MenuHighlights() {
  const categories = [
    {
      naam: "Voorgerechten",
      beschrijving: "Begin goed",
      items: [
        {
          naam: "Huisgemaakt ossenstaartsoep",
          beschrijving: "Rijke bouillon, langzaam getrokken van 8 uur — geserveerd met knapperig zuurdesembrood en verse peterselie",
          prijs: "€ 8,50",
          tag: "Chef's favoriet",
        },
        {
          naam: "Carpaccio van Black Angus",
          beschrijving: "Dun gesneden rund, truffelaioli, knapperige kappertjes en 24 maanden rijpe parmezaan",
          prijs: "€ 14,50",
          tag: null,
        },
        {
          naam: "Noordzee garnalenkroket",
          beschrijving: "Zelfgemaakt, ragout van verse garnalen — knapperig van buiten, romig van binnen. Geserveerd met kruidenmayonaise",
          prijs: "€ 12,00",
          tag: "Bestseller",
        },
      ],
    },
    {
      naam: "Hoofdgerechten",
      beschrijving: "Het hoogtepunt",
      items: [
        {
          naam: "Entrecôte 'De Waag'",
          beschrijving: "250g Black Angus droog gerijpt, gebakken op beukenhout, jus van rode wijn, huisgemaakte friet en saisoenssalade",
          prijs: "€ 29,50",
          tag: "Signature dish",
        },
        {
          naam: "Wilde zalm op de huid",
          beschrijving: "Noorse zalm, gebakken op de huid — groene asperges uit Limburg, citroenboter en kappertjes. Licht en verfijnd",
          prijs: "€ 24,50",
          tag: null,
        },
        {
          naam: "Vegetarisch seizoensmenu",
          beschrijving: "Wat de dag brengt — verse pasta of risotto met het beste van het seizoen. Vraag de bediening naar het dagmenu",
          prijs: "€ 19,50",
          tag: "Wisselend",
        },
      ],
    },
    {
      naam: "Nagerechten",
      beschrijving: "De perfecte afsluiting",
      items: [
        {
          naam: "Crème brûlée au naturel",
          beschrijving: "Klassiek recept van chef Pieter — dikke vanillecrème, gekarameliseerd tafelblad, vers rood fruit en muntblaadjes",
          prijs: "€ 8,00",
          tag: "Huisfavoriet",
        },
        {
          naam: "Warme chocoladefondat",
          beschrijving: "Pure Belgische chocolade, vloeibaar hart, een bolletje vanille-ijs en gekarameliseerde hazelnoten",
          prijs: "€ 9,50",
          tag: "Moet je geproefd hebben",
        },
        {
          naam: "Kaasplankje van de boer",
          beschrijving: "Selectie van 4 Nederlandse en Franse kazen, honing van de imker, druiven en huisgebakken crackers",
          prijs: "€ 12,50",
          tag: null,
        },
      ],
    },
  ];

  return (
    <section id="menu" className="relative py-24 px-6 overflow-hidden border-t border-white/5">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-4">
            Vers bereid · Dagelijks wisselend
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wat uw eetlust opwekt
          </h2>
          <p className="mt-4 text-white/45 max-w-md mx-auto">
            Chef Pieter Verhagen kookt met wat de dag brengt. Dit zijn de vaste
            favorieten — naast een wisselend seizoensmenu.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.naam}
              className="rounded-2xl border border-white/8 bg-white/2 p-6 flex flex-col"
            >
              {/* Category header */}
              <div className="mb-6 pb-4 border-b border-white/8">
                <div className="text-xs text-emerald-400/70 font-medium mb-1">{cat.beschrijving}</div>
                <h3 className="font-bold text-white text-xl">{cat.naam}</h3>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-5 flex-1">
                {cat.items.map((item) => (
                  <div key={item.naam} className="flex flex-col gap-1.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-white text-sm">{item.naam}</span>
                          {item.tag && (
                            <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 text-[10px] font-medium border border-emerald-500/20 shrink-0">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="shrink-0 text-sm font-bold text-emerald-400 tabular-nums">{item.prijs}</div>
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed">{item.beschrijving}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full menu CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reserveren"
            style={{ touchAction: "manipulation" }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold"
          >
            Reserveer en geniet vanavond →
          </a>
          <span className="text-white/30 text-xs">Dagmenu op aanvraag bij de bediening</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Over Ons ───────────────────────────────────────────── */
function OverOns() {
  return (
    <section
      id="over-ons"
      className="relative py-24 px-6 border-t border-white/5 overflow-hidden"
    >
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Chef foto placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-950/60 to-[#080e0b] border border-white/8 flex items-center justify-center overflow-hidden">
                {/*
                  FOTO 4: Portretfoto van chef Pieter Verhagen in de keuken — wit koksjasje,
                  druk bezig met plating, warme keukenlichten. Authentiek en persoonlijk.
                  Niet geposeerd — tijdens het werk. Verticaal of 4:3.
                */}
                <div className="text-center px-8 text-white/15">
                  <div className="text-5xl mb-3">👨‍🍳</div>
                  <p className="text-sm">Chef Pieter Verhagen in de keuken</p>
                  <p className="text-xs mt-1 text-white/10">Authentieke portretfoto tijdens het platen</p>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-emerald-500/25 rounded-tl-sm" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-emerald-500/25 rounded-br-sm" />
              </div>

              {/* Floating award badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#0c1a12] border border-emerald-500/25 rounded-2xl px-5 py-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-lg shrink-0">
                    🏆
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Beste restaurant</div>
                    <div className="text-white/40 text-xs">Zutphen 2023 &amp; 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-5">
              Ons verhaal
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              Al 20 jaar koken met{" "}
              <span className="text-emerald-400">hart en ziel</span>{" "}
              voor Zutphen
            </h2>
            <p className="mt-6 text-white/55 leading-relaxed">
              In 2004 opende chef Pieter Verhagen de deuren van Restaurant De Waag
              in het historische hart van Zutphen. Wat begon als zijn grootste droom,
              groeide uit tot het meest geliefde restaurant van de regio.
            </p>
            <p className="mt-4 text-white/55 leading-relaxed">
              Elke ochtend rijdt Pieter naar zijn vaste leveranciers — de slager in
              Warnsveld, de visboer in Doetinchem en de groenteboer uit Vorden. Dat
              proef je. In elke hap.
            </p>

            {/* Quote */}
            <blockquote className="mt-6 pl-4 border-l-2 border-emerald-500/40">
              <p className="text-white/65 italic text-sm leading-relaxed">
                &ldquo;Ik kook alsof mijn moeder aan tafel zit. Met aandacht, met trots
                en zonder compromissen.&rdquo;
              </p>
              <footer className="mt-2 text-xs text-white/35">— Chef Pieter Verhagen</footer>
            </blockquote>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: "Opgericht", value: "2004" },
                { label: "Lokale leveranciers", value: "14" },
                { label: "Terugkerende gasten", value: "72%" },
                { label: "Gerechten vers per dag", value: "30+" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-white/3 border border-white/6">
                  <div className="text-xl font-bold text-emerald-400">{item.value}</div>
                  <div className="text-xs text-white/40 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pers Vermeldingen ──────────────────────────────────── */
function PersVermeldingen() {
  const vermeldingen = [
    { naam: "De Gelderlander", tekst: "Het beste restaurant van de Achterhoek — een must voor iedere fijnproever" },
    { naam: "ANWB Restaurantgids", tekst: "Onze keuze voor een onvergetelijk diner in Zutphen" },
    { naam: "TripAdvisor", tekst: "Certificate of Excellence · 5 jaar op rij" },
    { naam: "Eten & Genieten", tekst: "Toprestaurant 2024 — buitengewoon koken in historisch pand" },
  ];

  return (
    <section className="py-14 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs text-white/30 uppercase tracking-widest font-medium">Vermeld in &amp; beoordeeld door</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vermeldingen.map((v) => (
            <div key={v.naam} className="rounded-xl border border-white/6 bg-white/2 p-4 flex flex-col gap-2">
              <div className="font-bold text-white/70 text-sm">{v.naam}</div>
              <p className="text-xs text-white/35 leading-relaxed italic">&ldquo;{v.tekst}&rdquo;</p>
            </div>
          ))}
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
      sterren: 5,
      aanleiding: "Jubileumdiner",
      tekst:
        "Wat een onvergetelijke avond. De entrecôte was absoluut perfect — knapperig van buiten, rosé van binnen. En de bediening was attent zonder opdringerig te zijn. We vieren ons volgende jubileum hier ook.",
      initials: "MvB",
    },
    {
      naam: "Thomas Janssen",
      datum: "Maart 2025",
      sterren: 5,
      aanleiding: "Zakelijk diner",
      tekst:
        "Heerlijk gegeten op de Grote Markt. De vegetarische dagschotel overtrof alle verwachtingen — creatief, smaakvol en ruim gevuld. De locatie in het historische pand is onverslaanbaar. Mijn gasten waren onder de indruk.",
      initials: "TJ",
    },
    {
      naam: "Fatima El Amrani",
      datum: "Mei 2025",
      sterren: 5,
      aanleiding: "Verjaardag",
      tekst:
        "De crème brûlée is de lekkerste die ik ooit heb gegeten — geen overdrijving. Het personeel had een kaarsje geregeld voor mijn verjaardag zonder dat ik erom vroeg. Dat kleine gebaar maakt het verschil.",
      initials: "FEA",
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header met Google score */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-4">
            Geverifieerde Google reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wat onze gasten zeggen
          </h2>
          {/* Google score prominent */}
          <div className="mt-5 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/3 border border-white/8">
            <div className="text-4xl font-extrabold text-white">4.8</div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs text-white/40">312 beoordelingen op Google</div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.naam}
              className="rounded-2xl border border-white/8 bg-white/2 p-6 flex flex-col gap-4"
            >
              {/* Stars + aanleiding */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < review.sterren ? "text-amber-400" : "text-white/15"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] text-white/30 bg-white/5 px-2 py-0.5 rounded-full">{review.aanleiding}</span>
              </div>

              {/* Text */}
              <p className="text-white/65 text-sm leading-relaxed flex-1">
                &ldquo;{review.tekst}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/6">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/25 flex items-center justify-center text-emerald-300 text-xs font-bold shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{review.naam}</div>
                  <div className="text-white/30 text-xs">{review.datum} · Google</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-white/30 text-xs">
            Alle reviews zijn afkomstig van Google. Wij beïnvloeden of verwijderen geen beoordelingen.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Openingstijden ─────────────────────────────────────── */
function Openingstijden() {
  const tijden = [
    { dag: "Ma – Di", tijd: null, gesloten: true },
    { dag: "Woensdag", tijd: "12:00 – 21:00", gesloten: false },
    { dag: "Donderdag", tijd: "12:00 – 21:30", gesloten: false },
    { dag: "Vrijdag", tijd: "12:00 – 22:00", gesloten: false, vandaag: true },
    { dag: "Zaterdag", tijd: "11:30 – 22:00", gesloten: false },
    { dag: "Zondag", tijd: "11:30 – 20:30", gesloten: false },
  ];

  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Vandaag open · 12:00 – 22:00
          </div>
          <h2 className="text-3xl font-bold text-white">Wanneer kunt u langskomen?</h2>
          <p className="mt-3 text-white/40 text-sm max-w-sm mx-auto">
            Reserveer minimaal 2 uur van tevoren. Op zaterdagavond raden wij vroeg reserveren aan — de tafels zijn snel weg.
          </p>
        </div>

        {/* Urgency banner */}
        <div className="mb-6 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="text-amber-400 text-lg">⚡</span>
            <div>
              <div className="text-amber-300 font-semibold text-sm">Vrijdagavond — nog 4 tafels vrij</div>
              <div className="text-amber-300/50 text-xs">Zaterdagavond bijna vol · reserveer snel</div>
            </div>
          </div>
          <a
            href="#reserveren"
            style={{ touchAction: "manipulation" }}
            className="px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold hover:bg-amber-500/30 shrink-0"
          >
            Reserveer →
          </a>
        </div>

        {/* Tijden */}
        <div className="rounded-2xl border border-white/8 bg-white/2 overflow-hidden">
          {tijden.map((row, i) => (
            <div
              key={row.dag}
              className={`flex items-center justify-between px-5 py-4 gap-4 ${
                i < tijden.length - 1 ? "border-b border-white/5" : ""
              } ${row.vandaag ? "bg-emerald-500/5" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-sm font-medium ${row.vandaag ? "text-white" : "text-white/60"}`}>
                  {row.dag}
                </span>
                {row.vandaag && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/25">
                    Vandaag
                  </span>
                )}
              </div>
              {row.gesloten ? (
                <span className="text-sm text-white/20">Gesloten</span>
              ) : (
                <span className={`text-sm font-semibold tabular-nums ${row.vandaag ? "text-emerald-400" : "text-white/70"}`}>
                  {row.tijd}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Terras note */}
        <p className="mt-4 text-center text-xs text-white/30">
          Bij mooi weer is ons terras op de Grote Markt open · Groepen van 8+ personen: bel voor beschikbaarheid
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
      className="relative py-24 px-6 border-t border-white/5 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-4">
            Online reserveren · Direct bevestigd
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Reserveer uw tafel
          </h2>
          <p className="mt-3 text-white/50 text-sm">
            Bevestiging binnen 2 uur per e-mail · Gratis annuleren tot 4 uur van tevoren
          </p>
        </div>

        {/* Urgency strip */}
        <div className="mb-5 flex items-center justify-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-300 font-semibold">Vanavond nog 4 tafels vrij</span>
          <span className="text-white/30">·</span>
          <span className="text-white/45">Zaterdagavond bijna vol</span>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
          <ReserveringForm />
        </div>

        {/* Trust below form */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/30">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Veilig &amp; privacyvriendelijk
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Bevestiging binnen 2 uur
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Of bel 0575 – 12 34 56
          </span>
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
      className="border-t border-white/8 bg-[#050a07] py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="font-bold text-white">Restaurant De Waag</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed">
              Authentieke keuken op de Grote Markt van Zutphen. Al meer dan 20
              jaar uw thuishaven voor een onvergetelijk diner.
            </p>
            {/* Google badge */}
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-white/40">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3 h-3 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-white/55">4.8</span>
              <span>· 312 Google reviews</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Contact &amp; Adres
            </h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-500/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Grote Markt 8<br />7201 KL Zutphen</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+31575123456" className="hover:text-emerald-400" style={{ touchAction: "manipulation" }}>
                  0575 – 12 34 56
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@restaurantdewaag.nl" className="hover:text-emerald-400" style={{ touchAction: "manipulation" }}>
                  info@restaurantdewaag.nl
                </a>
              </li>
            </ul>
          </div>

          {/* Openingstijden */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Openingstijden</h4>
            <ul className="space-y-2 text-sm text-white/40">
              {[
                { dag: "Ma – Di", tijd: "Gesloten" },
                { dag: "Woensdag", tijd: "12:00 – 21:00" },
                { dag: "Donderdag", tijd: "12:00 – 21:30" },
                { dag: "Vrijdag", tijd: "12:00 – 22:00" },
                { dag: "Zaterdag", tijd: "11:30 – 22:00" },
                { dag: "Zondag", tijd: "11:30 – 20:30" },
              ].map((row) => (
                <li key={row.dag} className="flex justify-between gap-4">
                  <span>{row.dag}</span>
                  <span className={row.tijd === "Gesloten" ? "text-white/20" : "text-white/60"}>
                    {row.tijd}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijfsgegevens */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Bedrijfsgegevens</h4>
            <ul className="space-y-2 text-sm text-white/35">
              <li>KvK: 12 34 56 78</li>
              <li>BTW: NL000000000B01</li>
              <li className="pt-2">
                <a href="#" className="hover:text-white/55" style={{ touchAction: "manipulation" }}>Privacybeleid</a>
              </li>
              <li>
                <a href="#" className="hover:text-white/55" style={{ touchAction: "manipulation" }}>Algemene voorwaarden</a>
              </li>
            </ul>

            {/* Lifegix credit */}
            <div className="mt-6 pt-4 border-t border-white/6">
              <p className="text-xs text-white/20">
                Website door{" "}
                <Link
                  href="/"
                  className="text-emerald-500/55 hover:text-emerald-400 font-semibold"
                  style={{ touchAction: "manipulation" }}
                >
                  Lifegix
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <span>
            © {new Date().getFullYear()} Restaurant De Waag. Alle rechten voorbehouden.
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Vandaag open: 12:00 – 22:00
          </span>
        </div>
      </div>
    </footer>
  );
}
