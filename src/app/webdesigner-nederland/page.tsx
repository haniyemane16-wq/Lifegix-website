import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import ContactForm from "../_components/ContactForm";
import StickyContactBtn from "../_components/StickyContactBtn";
import { ACTIE_PRIJS, VISITEKAARTJE_NORMAAL, ACTIE_ACTIEF, STARTPRIJS_BUNDEL, euro } from "@/lib/prijzen";

export const metadata: Metadata = {
  title: "Webdesigner Nederland | Website laten maken op afstand — LifeGix",
  description:
    "Website laten maken, waar je ook zit in Nederland? LifeGix bouwt professionele websites voor MKB-ondernemers door heel het land — volledig op afstand, persoonlijk contact via video of telefoon. Actieprijs €149.",
  openGraph: {
    title: "Webdesigner Nederland | Website laten maken op afstand — LifeGix",
    description:
      "LifeGix bouwt websites voor ondernemers door heel Nederland — op afstand, met dezelfde persoonlijke aanpak als bij een lokale webdesigner.",
    url: "https://lifegix.nl/webdesigner-nederland",
    siteName: "Lifegix",
    locale: "nl_NL",
    type: "website",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LifeGix — Webdesigner voor heel Nederland",
  description: "Webdesigner die op afstand werkt voor MKB-ondernemers door heel Nederland. Professionele websites en AI-automatisering, persoonlijk contact via video of telefoon.",
  url: "https://lifegix.nl/webdesigner-nederland",
  email: "lifegix.contact@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warnsveld",
    addressRegion: "Gelderland",
    addressCountry: "NL",
  },
  areaServed: { "@type": "Country", name: "Nederland" },
  serviceType: ["Webdesign", "Website bouwen", "Website laten maken", "AI automatisering"],
  priceRange: "€",
};

export default function WebdesignerNederland() {
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
          Webdesigner op afstand · Actief door heel Nederland
        </div>

        <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
          Website laten maken,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400">
            waar je ook zit
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-white/55 text-lg leading-relaxed">
          Je hoeft niet in de buurt van Warnsveld te wonen om persoonlijk geholpen te worden.
          Ik bouw websites en AI-automatisering voor ondernemers door heel Nederland — alles
          gewoon via video, telefoon en e-mail.
        </p>

        {ACTIE_ACTIEF && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-semibold">
            🎉 Actie: website visitekaartje voor {euro(ACTIE_PRIJS)} i.p.v. {euro(VISITEKAARTJE_NORMAAL)} — nog beperkt beschikbaar
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
          >
            Gratis gesprek inplannen →
          </a>
          <Link
            href="/demo"
            className="px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm transition-all duration-200"
          >
            Voorbeelden bekijken
          </Link>
        </div>
        <p className="mt-3 text-white/25 text-xs">Gratis · Vrijblijvend · Reactie binnen 24 uur</p>
      </section>

      {/* ─── Hoe werkt op afstand ────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            Hoe werkt &quot;op afstand&quot; precies?
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
            Net zo persoonlijk als een lokale webdesigner — je ziet en spreekt me gewoon, alleen niet in dezelfde ruimte.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                emoji: "📞",
                titel: "Kennismaking via bellen of video",
                tekst: "We bespreken je wensen gewoon telefonisch of via een videogesprek — net zo persoonlijk als een gesprek aan tafel.",
              },
              {
                emoji: "💬",
                titel: "Rechtstreeks contact, geen tussenpersoon",
                tekst: "Je mailt of appt rechtstreeks met mij — degene die je website daadwerkelijk bouwt. Geen callcenter, geen account­manager.",
              },
              {
                emoji: "🖥️",
                titel: "Live meekijken tijdens de bouw",
                tekst: "Ik deel tussentijds schermopnames of links zodat je precies ziet hoe je website vordert, voordat 'ie live gaat.",
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
            Wat kan LifeGix voor jouw bedrijf bouwen?
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
            Van een strakke visitekaartje-website tot een volledige site met AI-automatisering — overal in Nederland.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <div className="text-2xl mb-3">🌐</div>
              <h3 className="text-white font-bold text-lg mb-2">Website Visitekaartje</h3>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">
                Professioneel online zichtbaar worden, waar je bedrijf ook gevestigd is. Ideaal voor ZZP&apos;ers en kleine bedrijven.
              </p>
              <ul className="space-y-2 text-sm text-white/60 mb-5">
                {["Mobielvriendelijk design", "SEO geoptimaliseerd", "Contactformulier", "Binnen 1–2 weken live"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2">
                {ACTIE_ACTIEF && <span className="text-red-400 line-through text-sm">{euro(VISITEKAARTJE_NORMAAL)}</span>}
                <span className="text-2xl font-bold text-white">{euro(ACTIE_ACTIEF ? ACTIE_PRIJS : VISITEKAARTJE_NORMAAL)}</span>
                <span className="text-white/40 text-sm">eenmalig</span>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.03] border border-violet-500/20">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="text-white font-bold text-lg mb-2">Website + AI Automatisering</h3>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">
                Een website mét een AI-assistent die klantvragen beantwoordt, afspraken inplant of leads opvolgt — ook buiten kantoortijden.
              </p>
              <ul className="space-y-2 text-sm text-white/60 mb-5">
                {["Alles van het Visitekaartje", "AI chatbot of agent", "Automatische opvolging", "Maatwerk naar jouw bedrijf"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">Vanaf {euro(STARTPRIJS_BUNDEL)}</span>
                <span className="text-white/40 text-sm">eenmalig (met 20% bundelkorting)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Vanuit Warnsveld, voor heel NL ──────────────────── */}
      <section className="py-16 px-6 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Gevestigd in Warnsveld, actief door heel Nederland
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Van <strong className="text-white/70">Groningen</strong> tot{" "}
            <strong className="text-white/70">Maastricht</strong>, van{" "}
            <strong className="text-white/70">Rotterdam</strong> tot{" "}
            <strong className="text-white/70">Enschede</strong> — de meeste website- en
            AI-projecten zijn prima op afstand te doen. Zit je toevallig in de buurt van
            Warnsveld of Zutphen? Dan kan ik ook gewoon langskomen.
          </p>
          <a
            href="#contact"
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
            Direct contact, waar je ook zit
          </h2>
          <p className="text-white/50">
            Vul het formulier in — ik reageer binnen 24 uur. Gratis en vrijblijvend.
          </p>
        </div>
        <ContactForm />
      </section>

      <Footer />

      <StickyContactBtn />
    </main>
  );
}
