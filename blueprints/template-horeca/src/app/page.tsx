import Navbar from "./_components/Navbar";
import ContactForm from "./_components/ContactForm";
import { clientConfig } from "@/config/client.config";

export const metadata = {
  title: clientConfig.seo.title,
  description: clientConfig.seo.description,
  keywords: clientConfig.seo.keywords,
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Stats />
      <Menu />
      <Sfeer />
      <Reviews />
      <ReserverenSection />
      <Footer />
    </main>
  );
}

/* ─── Hero ─────────────────────────────────────────── */
function Hero() {
  const { hero, kleur } = clientConfig;
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${kleur.primaryMuted} 0%, transparent 70%)`,
          }}
        />
      </div>

      <div
        className="animate-fade-in-up mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border"
        style={{
          backgroundColor: kleur.primaryMuted,
          borderColor: `${kleur.primary}33`,
          color: kleur.primary,
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: kleur.primary }}
        />
        {hero.badge}
      </div>

      <h1 className="animate-fade-in-up animation-delay-200 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
        {hero.heading}
      </h1>

      <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-white/50 text-lg leading-relaxed">
        {hero.subheading}
      </p>

      <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="#reserveren"
          className="px-7 py-3.5 rounded-xl font-semibold text-sm transition-colors text-white primary-glow"
          style={{ backgroundColor: kleur.primary, touchAction: "manipulation" }}
        >
          {hero.ctaPrimary}
        </a>
        <a
          href="#menu"
          className="px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm transition-colors"
          style={{ touchAction: "manipulation" }}
        >
          {hero.ctaSecondary}
        </a>
      </div>

      <p className="animate-fade-in-up animation-delay-600 mt-12 text-white/25 text-xs">
        {hero.tagline}
      </p>
    </section>
  );
}

/* ─── Stats ────────────────────────────────────────── */
function Stats() {
  return (
    <div className="border-y border-white/5 bg-white/[0.02] py-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {clientConfig.stats.map((item) => (
          <div key={item.label}>
            <p
              className="text-2xl font-bold"
              style={{ color: clientConfig.kleur.primary }}
            >
              {item.value}
            </p>
            <p className="mt-1 text-xs text-white/40">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Menu ─────────────────────────────────────────── */
function Menu() {
  const { menuCategorieen, kleur } = clientConfig;
  return (
    <section id="menu" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: kleur.primary }}
          >
            Menu
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Onze kaart
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Seizoensgebonden gerechten met de beste lokale producten.
            Kaart wisselt regelmatig.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuCategorieen.map((cat) => (
            <div key={cat.naam}>
              <h3
                className="text-lg font-bold mb-6 pb-3 border-b"
                style={{ color: kleur.primary, borderColor: `${kleur.primary}33` }}
              >
                {cat.naam}
              </h3>
              <div className="space-y-5">
                {cat.items.map((item) => (
                  <div
                    key={item.naam}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-white font-medium text-sm">
                        {item.naam}
                      </p>
                      <p className="text-white/40 text-xs mt-0.5">
                        {item.beschrijving}
                      </p>
                    </div>
                    <span
                      className="text-sm font-semibold flex-shrink-0"
                      style={{ color: kleur.primary }}
                    >
                      {item.prijs}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-white/30 text-sm">
          Allergieinformatie beschikbaar op aanvraag. De kaart kan afwijken.
        </p>
      </div>
    </section>
  );
}

/* ─── Sfeer highlights ─────────────────────────────── */
function Sfeer() {
  const { highlights, kleur } = clientConfig;
  return (
    <section id="sfeer" className="py-24 pb-12 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${kleur.primaryMuted} 0%, transparent 70%)`,
          }}
        />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: kleur.primary }}
          >
            De ervaring
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Meer dan alleen eten
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Wij geloven in gastheerschap. Elke gelegenheid verdient een
            onvergetelijke avond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div
              key={h.titel}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3"
            >
              <span className="text-3xl">{h.icoon}</span>
              <h3 className="text-white font-bold">{h.titel}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {h.beschrijving}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Reviews ──────────────────────────────────────── */
function Reviews() {
  const { reviews, kleur } = clientConfig;
  return (
    <section id="reviews" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${kleur.primaryMuted} 0%, transparent 70%)`,
          }}
        />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: kleur.primary }}
          >
            Gasten aan het woord
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wat zeggen onze gasten?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.naam}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: r.score }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    style={{ color: kleur.primary }}
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
                <p className="text-white/40 text-xs">{r.gelegenheid}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Reserveren ───────────────────────────────────── */
function ReserverenSection() {
  const { reserveren, kleur, telefoon, email, adres, openingstijden } =
    clientConfig;
  return (
    <section id="reserveren" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div>
            <p
              className="text-sm font-medium tracking-widest uppercase mb-3"
              style={{ color: kleur.primary }}
            >
              Reserveren
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {reserveren.heading}
            </h2>
            <p className="text-white/50 mb-8">{reserveren.subheading}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white/30 text-sm mt-0.5">📍</span>
                <div>
                  <p className="text-white/80 text-sm font-medium">Adres</p>
                  <p className="text-white/50 text-sm">{adres}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/30 text-sm mt-0.5">📞</span>
                <div>
                  <p className="text-white/80 text-sm font-medium">Telefoon</p>
                  <a
                    href={`tel:${telefoon}`}
                    className="text-sm"
                    style={{ color: kleur.primary, touchAction: "manipulation" }}
                  >
                    {telefoon}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/30 text-sm mt-0.5">✉️</span>
                <div>
                  <p className="text-white/80 text-sm font-medium">E-mail</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm"
                    style={{ color: kleur.primary, touchAction: "manipulation" }}
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/30 text-sm mt-0.5">🕐</span>
                <div>
                  <p className="text-white/80 text-sm font-medium">
                    Openingstijden
                  </p>
                  <p className="text-white/50 text-sm">{openingstijden}</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ───────────────────────────────────────── */
function Footer() {
  const { naam, stad, kvk } = clientConfig;
  return (
    <footer className="border-t border-white/5 py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
        <span>
          © {new Date().getFullYear()} {naam} · {stad} · KvK {kvk}
        </span>
        <span className="flex gap-4">
          <a
            href="/privacy"
            className="hover:text-white/60 transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            Privacyverklaring
          </a>
          <a
            href="/voorwaarden"
            className="hover:text-white/60 transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            Algemene Voorwaarden
          </a>
        </span>
      </div>
    </footer>
  );
}
