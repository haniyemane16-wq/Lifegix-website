import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../_components/Navbar";
import ContactForm from "../_components/ContactForm";
import StickyContactBtn from "../_components/StickyContactBtn";

export const metadata: Metadata = {
  title: "Webdesigner Warnsveld | Websites voor MKB — LifeGix",
  description:
    "Op zoek naar een webdesigner in Warnsveld? LifeGix bouwt professionele websites voor MKB-ondernemers in Warnsveld, Zutphen en de Achterhoek. Actieprijs €149 — binnen 1–2 weken live.",
  openGraph: {
    title: "Webdesigner Warnsveld | Websites voor MKB — LifeGix",
    description:
      "Professionele website laten maken in Warnsveld? LifeGix helpt lokale ondernemers in Warnsveld, Zutphen en de Achterhoek. Eerlijke prijs, persoonlijk contact.",
    url: "https://lifegix.nl/webdesigner-warnsveld",
    siteName: "Lifegix",
    locale: "nl_NL",
    type: "website",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LifeGix — Webdesigner Warnsveld",
  description: "Webdesigner in Warnsveld voor MKB-ondernemers. Professionele websites voor lokale bedrijven in Warnsveld, Zutphen en de Achterhoek.",
  url: "https://lifegix.nl/webdesigner-warnsveld",
  email: "lifegix.contact@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warnsveld",
    addressRegion: "Gelderland",
    postalCode: "7231",
    addressCountry: "NL",
  },
  areaServed: [
    { "@type": "City", name: "Warnsveld" },
    { "@type": "City", name: "Zutphen" },
    { "@type": "AdministrativeArea", name: "Achterhoek" },
  ],
  serviceType: ["Webdesign", "Website bouwen", "Website laten maken"],
  priceRange: "€",
};

export default function WebdesignerWarnsveld() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <Navbar />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 pt-24 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 65%)" }}
          />
        </div>

        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Lokale webdesigner · Warnsveld &amp; omgeving
        </div>

        <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
          Webdesigner in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400">
            Warnsveld
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-white/55 text-lg leading-relaxed">
          Professionele website laten maken als ondernemer in Warnsveld, Zutphen of de Achterhoek?
          LifeGix bouwt websites die klanten opleveren — persoonlijk contact, eerlijke prijs.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-semibold">
          🎉 Actie: website visitekaartje voor €149 i.p.v. €249 — nog beperkt beschikbaar
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/#contact"
            className="px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
          >
            Gratis gesprek inplannen →
          </a>
          <Link
            href="/#voorbeelden"
            className="px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm transition-all duration-200"
          >
            Voorbeelden bekijken
          </Link>
        </div>
        <p className="mt-3 text-white/25 text-xs">Gratis · Vrijblijvend · Reactie binnen 24 uur</p>
      </section>

      {/* ─── Waarom lokaal ────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            Waarom kiezen voor een lokale webdesigner uit Warnsveld?
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
            Je belt niet met een anoniem bureau — je werkt samen met iemand uit de buurt die jouw markt kent.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                emoji: "📍",
                titel: "Lokaal en persoonlijk",
                tekst: "Ik kom uit Warnsveld en ken de lokale markt. Korte lijnen, snel schakelen en altijd direct contact.",
              },
              {
                emoji: "⚡",
                titel: "Binnen 1–2 weken live",
                tekst: "Geen maandenlange trajecten. Jouw website staat snel online zodat je direct klanten kunt aantrekken.",
              },
              {
                emoji: "💶",
                titel: "Eerlijke MKB-prijs",
                tekst: "Geen grote bureaukosten. Scherpe prijs, professioneel resultaat — speciaal voor lokale ondernemers.",
              },
            ].map((v) => (
              <div
                key={v.titel}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/20 transition-colors"
              >
                <div className="text-3xl mb-4">{v.emoji}</div>
                <h3 className="text-white font-semibold mb-2">{v.titel}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Diensten ─────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            Wat biedt LifeGix als webdesigner in Warnsveld?
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
            Van een eenvoudige visitekaartje-website tot een complete website met AI-automatisering.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <div className="text-2xl mb-3">🌐</div>
              <h3 className="text-white font-bold text-lg mb-2">Website Visitekaartje</h3>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">
                Professionele website om gevonden te worden. Perfect voor ZZP&apos;ers en kleine bedrijven in Warnsveld en Zutphen die online zichtbaar willen zijn.
              </p>
              <ul className="space-y-2 text-sm text-white/60 mb-5">
                {["Mobielvriendelijk design", "SEO geoptimaliseerd", "Contactformulier", "Binnen 1–2 weken live"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2">
                <span className="text-red-400 line-through text-sm">€249</span>
                <span className="text-2xl font-bold text-white">€149</span>
                <span className="text-white/40 text-sm">eenmalig</span>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.03] border border-violet-500/20">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="text-white font-bold text-lg mb-2">Website + AI Automatisering</h3>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">
                Website én slimme automatisering die tijd bespaart. Laat AI je klantvragen beantwoorden, afspraken inplannen of offertes versturen.
              </p>
              <ul className="space-y-2 text-sm text-white/60 mb-5">
                {["Alles van het Visitekaartje", "AI chatbot of agent", "Automatische opvolging", "Maatwerk naar jouw bedrijf"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">Vanaf €499</span>
                <span className="text-white/40 text-sm">eenmalig</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gebieden ─────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Actief in Warnsveld en heel de regio
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            LifeGix werkt voor ondernemers in <strong className="text-white/70">Warnsveld</strong>,{" "}
            <strong className="text-white/70">Zutphen</strong>,{" "}
            <strong className="text-white/70">Lochem</strong>,{" "}
            <strong className="text-white/70">Doetinchem</strong>,{" "}
            <strong className="text-white/70">Apeldoorn</strong>,{" "}
            <strong className="text-white/70">Deventer</strong> en heel de{" "}
            <strong className="text-white/70">Achterhoek</strong> — en ook door heel Nederland.
          </p>
          <a
            href="/#contact"
            className="inline-block px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
          >
            Gratis gesprek inplannen →
          </a>
        </div>
      </section>

      {/* ─── Contact ──────────────────────────────────────── */}
      <section id="contact" className="py-20 px-6 border-t border-white/[0.05]">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Direct contact met jouw webdesigner in Warnsveld
          </h2>
          <p className="text-white/50">
            Vul het formulier in — ik reageer binnen 24 uur. Gratis en vrijblijvend.
          </p>
        </div>
        <ContactForm />
      </section>

      {/* ─── Footer ───────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] py-8 px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
          <span>© {new Date().getFullYear()} Life<span className="text-violet-500/60">gix</span> · Warnsveld · KvK 98120336</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacyverklaring</Link>
            <Link href="/voorwaarden" className="hover:text-white/60 transition-colors">Algemene Voorwaarden</Link>
            <Link href="/" className="hover:text-white/60 transition-colors">Terug naar home</Link>
          </span>
        </div>
      </footer>

      <StickyContactBtn />
    </main>
  );
}
