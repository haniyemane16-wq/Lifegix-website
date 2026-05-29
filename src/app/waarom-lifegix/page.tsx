import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waarom LifeGix? — De beste keuze voor lokale ondernemers",
  description:
    "Geen grote bureaus, geen wachttijden, geen verborgen kosten. LifeGix bouwt websites en AI agents voor lokale bedrijven — persoonlijk, snel en betaalbaar.",
};

export default function WaaromLifeGixPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/95 sm:bg-[#0a0a0f]/80 sm:backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-white">Life</span><span className="text-violet-400">gix</span>
          </Link>
          <Link href="/bestellen" className="text-sm font-medium px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors">
            Direct beginnen →
          </Link>
        </div>
      </nav>

      <div className="pt-24">

        {/* Hero */}
        <section className="py-20 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
          </div>
          <div className="max-w-4xl mx-auto relative">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">Waarom LifeGix?</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Geen bureau.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
                Gewoon resultaat.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Grote bureaus vragen €3.000 tot €15.000 en laten je 3 maanden wachten.
              Wij leveren hetzelfde — soms beter — in 2 weken, voor een fractie van de prijs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bestellen" className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold transition-colors purple-glow">
                Nu beginnen →
              </Link>
              <Link href="/#contact" className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium transition-colors">
                Gratis gesprek plannen
              </Link>
            </div>
          </div>
        </section>

        {/* Vergelijking */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">LifeGix vs. grote bureaus</h2>
              <p className="mt-3 text-white/50">Zelfde kwaliteit. Andere aanpak.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Prijs website", bureau: "€3.000 – €10.000", lifegix: "Vanaf €500", win: true },
                { label: "Doorlooptijd", bureau: "6 – 12 weken", lifegix: "1 – 2 weken", win: true },
                { label: "Contact", bureau: "Accountmanager → designer → developer", lifegix: "Direct met de bouwer", win: true },
                { label: "AI agent", bureau: "€5.000 – €25.000", lifegix: "Vanaf €300", win: true },
                { label: "Aanpassingen", bureau: "Aparte offerte per wijziging", lifegix: "Inbegrepen in abonnement", win: true },
                { label: "Persoonlijk", bureau: "Nummer in een systeem", lifegix: "Jij kent mij, ik ken jou", win: true },
              ].map((row) => (
                <div key={row.label} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                  <div className="px-5 py-3 bg-white/[0.04] border-b border-white/10">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-widest">{row.label}</p>
                  </div>
                  <div className="p-5 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-white/30 mb-1.5">Groot bureau</p>
                      <p className="text-sm text-white/50 line-through">{row.bureau}</p>
                    </div>
                    <div>
                      <p className="text-xs text-violet-400 mb-1.5">LifeGix</p>
                      <p className="text-sm font-semibold text-white">{row.lifegix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 redenen */}
        <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">5 redenen om voor LifeGix te kiezen</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  nr: "01",
                  titel: "Je praat direct met de bouwer",
                  tekst: "Geen salesteam, geen accountmanager, geen project manager. Jij praat rechtstreeks met Hanibal — de persoon die jouw website bouwt. Dat betekent snellere beslissingen, minder misverstanden en een eindresultaat dat écht klopt.",
                },
                {
                  nr: "02",
                  titel: "Binnen 2 weken live",
                  tekst: "Grote bureaus plannen je project in na 6 weken intake-gesprekken. Bij LifeGix start ik na ons eerste gesprek direct. Gemiddeld staat jouw website binnen 1 tot 2 weken live. Jij verliest geen omzet door te wachten.",
                },
                {
                  nr: "03",
                  titel: "Ver onder de marktprijs — zelfde kwaliteit",
                  tekst: "Bureaus vragen €3.000 tot €10.000 voor een website. Ik vraag vanaf €500. Niet omdat ik minder lever — maar omdat ik geen kantoor, geen salesteam en geen overhead heb. Die besparing geef ik direct aan jou door.",
                },
                {
                  nr: "04",
                  titel: "Alles geregeld, niets te doen voor jou",
                  tekst: "Ontwerp, teksten, hosting, SSL-beveiliging, SEO en onderhoud — ik regel het allemaal. Jij focust op je klanten, ik zorg dat jouw digitale aanwezigheid perfect werkt. Ook na de oplevering ben ik beschikbaar.",
                },
                {
                  nr: "05",
                  titel: "Lokaal vertrouwen, landelijk bereik",
                  tekst: "Ik ben gevestigd in Warnsveld en ken de lokale markt. Ik begrijp wat een kapper in Zutphen of een installateur in de Achterhoek nodig heeft. Maar ik werk ook voor bedrijven door heel Nederland — alles gaat prima op afstand.",
                },
              ].map((item) => (
                <div key={item.nr} className="flex gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-violet-400/40 text-4xl font-bold font-mono leading-none flex-shrink-0 w-12">{item.nr}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.titel}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{item.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Wat klanten zeggen</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  naam: "Mark van den Berg",
                  bedrijf: "AutoFix Pro",
                  tekst: "Binnen twee weken hadden we een strakke website die echt converteert. Klanten vinden ons nu makkelijk via Google en de afsprakenpagina scheelt ons dagelijks tijd.",
                  dienst: "Website Bouwen",
                },
                {
                  naam: "Lisette Janssen",
                  bedrijf: "Brasserie De Linde",
                  tekst: "Precies de uitstraling die we zochten — warm, professioneel en snel. Reserveringen via de site zijn flink gestegen sinds de lancering.",
                  dienst: "Website Bouwen",
                },
                {
                  naam: "Daan Vermeer",
                  bedrijf: "Lokale ondernemer",
                  tekst: "De AI agent pakt nu automatisch klantvragen op via WhatsApp. Ik hoef 's avonds niet meer achter mijn telefoon te zitten. Had dit jaren eerder willen doen.",
                  dienst: "AI Automatisering",
                },
              ].map((r) => (
                <div key={r.naam} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">&ldquo;{r.tekst}&rdquo;</p>
                  <div>
                    <p className="text-white font-semibold text-sm">{r.naam}</p>
                    <p className="text-white/40 text-xs">{r.bedrijf} · {r.dienst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-6 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "5+", label: "Projecten opgeleverd" },
              { value: "1–2 wkn", label: "Gemiddeld live" },
              { value: "24u", label: "Reactietijd" },
              { value: "100%", label: "Op tijd opgeleverd" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-violet-300">{s.value}</p>
                <p className="mt-1 text-xs text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bezwaren */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Veelgehoorde twijfels</h2>
              <p className="mt-3 text-white/50">En eerlijke antwoorden.</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Zo goedkoop — is het dan wel goed?",
                  a: "De prijs is laag omdat ik geen overhead heb — geen kantoor, geen duur team, geen saleskosten. Ik investeer die besparing in kwaliteit en snelheid. Bekijk mijn portfolio: AutoFix Pro en Brasserie De Linde spreken voor zich.",
                },
                {
                  q: "Wat als jij ziek bent of stopt?",
                  a: "Alle code staat op GitHub en je website draait op Vercel — twee van de betrouwbaarste platforms ter wereld. Mocht er ooit iets zijn, dan kan elke andere developer direct verder. Je bent nooit afhankelijk van één persoon.",
                },
                {
                  q: "Ik heb al een website via Wix/Squarespace.",
                  a: "Zelfbouwplatforms zien er prima uit maar scoren slecht op SEO, snelheid en conversie. Een professioneel gebouwde website haalt gemiddeld 2–3× meer bezoekers via Google. Dat verdien je snel terug.",
                },
                {
                  q: "Hoeveel tijd kost het mij?",
                  a: "Ongeveer 1–2 uur van jouw kant. Je levert je teksten en foto's aan (of ik help daarmee), en ik regel de rest. Na de oplevering ben je zo goed als klaar.",
                },
                {
                  q: "Wat als ik niet tevreden ben?",
                  a: "We werken in rondes: jij geeft feedback, ik pas aan. Dit gaat door totdat je 100% tevreden bent. Ik ga niet live zonder jouw goedkeuring.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="font-semibold text-white mb-2">❓ {item.q}</p>
                  <p className="text-white/55 text-sm leading-relaxed">✅ {item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Garantie */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl bg-violet-950/40 border border-violet-500/30 text-center">
              <div className="w-16 h-16 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <path d="M16 3L4 8v8c0 7 5.3 13.5 12 15 6.7-1.5 12-8 12-15V8L16 3z" stroke="#a78bfa" strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M11 16l3.5 3.5L21 12" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Mijn belofte aan jou</h2>
              <p className="text-white/60 leading-relaxed max-w-lg mx-auto">
                Ik lever jouw project op tijd op, communiceer eerlijk over wat wel en niet mogelijk is,
                en sta ook na de oplevering voor je klaar. Geen verrassingen in de rekening,
                geen verdwijnende leverancier. Gewoon een betrouwbare partner die meedenkt met jouw bedrijf.
              </p>
              <p className="mt-4 text-violet-300 font-semibold">— Hanibal, LifeGix</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Klaar om te starten?
            </h2>
            <p className="text-white/50 mb-10 text-lg">
              Het eerste gesprek is altijd gratis en vrijblijvend. Binnen 24 uur reactie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bestellen" className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-lg transition-colors purple-glow">
                Direct bestellen →
              </Link>
              <Link href="/#contact" className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium transition-colors">
                Gratis gesprek plannen
              </Link>
            </div>
            <p className="mt-6 text-white/25 text-sm">
              Geen verplichtingen · Vrijgesteld van BTW (KOR) · KvK 98120336
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
