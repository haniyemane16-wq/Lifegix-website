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
      <Diensten />
      <HowItWorks />
      <Reviews />
      <ContactSection />
      <Footer />
    </main>
  );
}

/* ─── Hero ─────────────────────────────────────────── */
function Hero() {
  const { hero, kleur } = clientConfig;
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center overflow-hidden">
      {/* Achtergrond glow — alleen desktop (geen GPU-drain op mobiel) */}
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
          backgroundColor: `${kleur.primaryMuted}`,
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
          href="#contact"
          className="px-7 py-3.5 rounded-xl font-semibold text-sm transition-colors text-white primary-glow"
          style={{
            backgroundColor: kleur.primary,
            touchAction: "manipulation",
          }}
        >
          {hero.ctaPrimary}
        </a>
        <a
          href="#diensten"
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

/* ─── Diensten ─────────────────────────────────────── */
function Diensten() {
  const { kleur } = clientConfig;
  return (
    <section id="diensten" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: kleur.primary }}
          >
            Diensten &amp; Tarieven
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wat kunnen we voor je doen?
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Eerlijke tarieven, vakkundig werk. Geen verrassingen achteraf.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientConfig.diensten.map((d) => (
            <div
              key={d.naam}
              className={`relative rounded-2xl p-6 gradient-border flex flex-col gap-4 ${
                d.populair ? "bg-white/[0.06]" : "bg-white/[0.03]"
              }`}
            >
              {d.populair && (
                <span
                  className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full border text-white"
                  style={{
                    backgroundColor: `${kleur.primary}33`,
                    borderColor: `${kleur.primary}55`,
                    color: kleur.primary,
                  }}
                >
                  Populair
                </span>
              )}
              <div>
                <h3 className="text-lg font-bold text-white">{d.naam}</h3>
                <p className="text-white/50 text-sm mt-2 leading-relaxed">
                  {d.beschrijving}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xl font-bold text-white">{d.prijs}</span>
                <span className="text-xs text-white/30">{d.duur}</span>
              </div>
              <a
                href="#contact"
                className="block text-center py-2.5 rounded-xl text-sm font-medium transition-colors"
                style={{
                  backgroundColor: d.populair
                    ? kleur.primary
                    : "rgba(255,255,255,0.06)",
                  color: "white",
                  touchAction: "manipulation",
                }}
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

/* ─── HowItWorks ───────────────────────────────────── */
function HowItWorks() {
  const { werkwijze, kleur } = clientConfig;
  return (
    <section id="werkwijze" className="py-24 pb-12 px-6 relative">
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
            Werkwijze
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Zo werkt het
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Simpel, transparant en zonder gedoe. In drie stappen klaar.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {werkwijze.map((stap) => (
            <div
              key={stap.nummer}
              className="relative p-5 sm:p-8 rounded-2xl bg-white/[0.06] border border-white/10"
            >
              <div
                className="text-5xl font-bold font-mono mb-6 leading-none"
                style={{ color: `${kleur.primary}99` }}
              >
                {stap.nummer}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                {stap.titel}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {stap.beschrijving}
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
            Klanten aan het woord
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Wat zeggen onze klanten?
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
                <p className="text-white/40 text-xs">{r.dienst}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ──────────────────────────────────────── */
function ContactSection() {
  const { contact, kleur, telefoon, email, adres, openingstijden } =
    clientConfig;
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Links: info */}
          <div>
            <p
              className="text-sm font-medium tracking-widest uppercase mb-3"
              style={{ color: kleur.primary }}
            >
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {contact.heading}
            </h2>
            <p className="text-white/50 mb-8">{contact.subheading}</p>

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
                    className="text-sm transition-colors"
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
                    className="text-sm transition-colors"
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

          {/* Rechts: formulier */}
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
