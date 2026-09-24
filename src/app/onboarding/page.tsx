"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function OnboardingFormInner() {
  const params = useSearchParams();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    naam: params.get("naam") ?? "",
    email: params.get("email") ?? "",
    bedrijf: params.get("bedrijf") ?? "",
    adres: "",
    kvk: "",
    beschrijving: "",
    diensten: "",
    doelgroep: "",
    heeftLogo: "",
    beeldmateriaal: "",
    domeinKeuze: "",
    domein: "",
    faqOpeningstijden: "",
    faqLocatie: "",
    faqAfspraak: "",
    faqBetalen: "",
    faqOverig: "",
    stijl: "",
    voorbeelden: "",
    opmerkingen: "",
  });

  const set = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Er ging iets mis.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/25 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all";
  const labelClass = "block text-xs font-medium text-white/50 mb-1.5";

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[140px]" />
        </div>
        <div className="relative text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mx-auto mb-8">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10 20l8 8L30 12" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Bedankt!</h1>
          <p className="text-white/50 leading-relaxed mb-8">
            Je gegevens zijn binnen. Ik ga voor je aan de slag en neem persoonlijk contact op zodra de eerste versie klaar is.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-colors">
            ← Terug naar home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-white">Life</span><span className="text-violet-400">gix</span>
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">← Terug naar home</Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 pt-32 pb-24 relative">
        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Welkom bij Lifegix</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Vertel me over je bedrijf</h1>
          <p className="mt-4 text-white/50">
            Vul in wat je weet — duurt zo&apos;n 3–5 minuten. Hoe meer je invult, hoe sneller ik aan de slag kan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ── Jouw gegevens ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Jouw gegevens</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Naam *</label>
                <input type="text" required value={form.naam} onChange={(e) => set("naam", e.target.value)} placeholder="Jan de Vries" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>E-mailadres *</label>
                <input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jan@bedrijf.nl" className={inputClass} />
              </div>
            </div>
          </section>

          {/* ── Bedrijfsgegevens ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Bedrijfsgegevens</h2>
            <div>
              <label className={labelClass}>Officiële bedrijfsnaam *</label>
              <input type="text" required value={form.bedrijf} onChange={(e) => set("bedrijf", e.target.value)} placeholder="Jouw Bedrijf" className={inputClass} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Adres</label>
                <input type="text" value={form.adres} onChange={(e) => set("adres", e.target.value)} placeholder="Straat 1, 1234 AB Plaats" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>KvK-nummer</label>
                <input type="text" value={form.kvk} onChange={(e) => set("kvk", e.target.value)} placeholder="Optioneel" className={inputClass} />
              </div>
            </div>
          </section>

          {/* ── Inhoud voor de site ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Inhoud voor de website</h2>
            <div>
              <label className={labelClass}>Wat doet je bedrijf? *</label>
              <textarea required rows={3} value={form.beschrijving} onChange={(e) => set("beschrijving", e.target.value)} placeholder="Een korte tekst over je bedrijf — of ik schrijf 'm samen met je." className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className={labelClass}>Diensten &amp; prijzen *</label>
              <textarea required rows={4} value={form.diensten} onChange={(e) => set("diensten", e.target.value)} placeholder={"bijv.\nKnippen dames — €35\nKnippen heren — €25\nKleuren — vanaf €60"} className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className={labelClass}>Wie zijn je klanten?</label>
              <input type="text" value={form.doelgroep} onChange={(e) => set("doelgroep", e.target.value)} placeholder="bijv. particulieren in de regio" className={inputClass} />
            </div>
          </section>

          {/* ── Beeldmateriaal ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Beeldmateriaal</h2>
            <div>
              <label className={labelClass}>Heb je een logo?</label>
              <div className="flex gap-3 mt-1">
                {["Ja", "Nee", "In progress"].map((opt) => (
                  <button key={opt} type="button" onClick={() => set("heeftLogo", opt)}
                    className={`px-4 py-2 rounded-xl text-sm border transition-all ${
                      form.heeftLogo === opt
                        ? "bg-violet-500/20 border-violet-500/50 text-violet-300"
                        : "bg-white/[0.03] border-white/10 text-white/50 hover:border-white/20"
                    }`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className={labelClass}>Logo / foto&apos;s</label>
              <textarea rows={2} value={form.beeldmateriaal} onChange={(e) => set("beeldmateriaal", e.target.value)} placeholder="Mail je logo en foto's naar lifegix.contact@gmail.com, of plak hier een link (Drive/Dropbox/Instagram)." className={`${inputClass} resize-none`} />
            </div>
          </section>

          {/* ── Domeinnaam ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Domeinnaam</h2>
            <div className="flex gap-3">
              {[
                { v: "nieuw", label: "Regel een nieuwe voor me" },
                { v: "bestaand", label: "Ik heb er al een" },
              ].map((opt) => (
                <button key={opt.v} type="button" onClick={() => set("domeinKeuze", opt.v)}
                  className={`px-4 py-2 rounded-xl text-sm border transition-all ${
                    form.domeinKeuze === opt.v
                      ? "bg-violet-500/20 border-violet-500/50 text-violet-300"
                      : "bg-white/[0.03] border-white/10 text-white/50 hover:border-white/20"
                  }`}>
                  {opt.label}
                </button>
              ))}
            </div>
            {form.domeinKeuze === "bestaand" && (
              <div>
                <label className={labelClass}>Welk domein?</label>
                <input type="text" value={form.domein} onChange={(e) => set("domein", e.target.value)} placeholder="jouwbedrijf.nl" className={inputClass} />
              </div>
            )}
          </section>

          {/* ── FAQ chatbot ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Voor je AI-chatbot (indien besteld)</h2>
            <p className="text-white/30 text-xs -mt-1">
              Vul in ieder geval deze paar veelgestelde vragen in — daarnaast kun je onderaan zelf extra vragen toevoegen.
            </p>

            <div>
              <label className={labelClass}>Wat zijn jullie openingstijden?</label>
              <textarea rows={2} value={form.faqOpeningstijden} onChange={(e) => set("faqOpeningstijden", e.target.value)} placeholder={"bijv.\nMa–vr 9:00–18:00, za 9:00–16:00, zo gesloten"} className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className={labelClass}>Waar zijn jullie te vinden? (adres, parkeren, herkenningspunt)</label>
              <textarea rows={2} value={form.faqLocatie} onChange={(e) => set("faqLocatie", e.target.value)} placeholder="bijv. Dreiumme 11-13, Warnsveld — parkeren kan gratis voor de deur" className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className={labelClass}>Is een afspraak verplicht, of kan iemand ook gewoon langslopen?</label>
              <textarea rows={2} value={form.faqAfspraak} onChange={(e) => set("faqAfspraak", e.target.value)} placeholder="bijv. Afspraak verplicht, telefonisch of via de website te maken" className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className={labelClass}>Welke betaalmethoden accepteren jullie?</label>
              <textarea rows={2} value={form.faqBetalen} onChange={(e) => set("faqBetalen", e.target.value)} placeholder="bijv. Pin, contant, iDEAL" className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className={labelClass}>Nog andere vragen die klanten vaak stellen? (optioneel)</label>
              <textarea rows={3} value={form.faqOverig} onChange={(e) => set("faqOverig", e.target.value)} placeholder={"bijv.\nDoen jullie ook kinderknipbeurten?\nKan ik een cadeaubon kopen?"} className={`${inputClass} resize-none`} />
            </div>

            <p className="text-white/30 text-xs">
              Geen zorgen als je niet alles kan bedenken — een vraag die de chatbot nog niet kent, slaat hij op zodat jij (of iemand die het weet) &apos;m later kan beantwoorden. Zo leert de chatbot na verloop van tijd steeds meer bij, bovenop deze standaardvragen.
            </p>
          </section>

          {/* ── Stijl ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Stijl &amp; branding</h2>
            <div>
              <label className={labelClass}>Welke stijl past bij je bedrijf?</label>
              <select value={form.stijl} onChange={(e) => set("stijl", e.target.value)} className={`${inputClass} appearance-none`}>
                <option value="" className="bg-[#0a0a0f]">Kies een stijl</option>
                <option value="Modern & minimalistisch" className="bg-[#0a0a0f]">Modern &amp; minimalistisch</option>
                <option value="Warm & uitnodigend" className="bg-[#0a0a0f]">Warm &amp; uitnodigend</option>
                <option value="Zakelijk & professioneel" className="bg-[#0a0a0f]">Zakelijk &amp; professioneel</option>
                <option value="Speels & creatief" className="bg-[#0a0a0f]">Speels &amp; creatief</option>
                <option value="Geen voorkeur" className="bg-[#0a0a0f]">Geen voorkeur</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Voorbeelden van websites die je mooi vindt (optioneel)</label>
              <input type="text" value={form.voorbeelden} onChange={(e) => set("voorbeelden", e.target.value)} placeholder="bijv. coolblue.nl, example.com" className={inputClass} />
            </div>
          </section>

          {/* ── Overig ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Overig</h2>
            <div>
              <label className={labelClass}>Speciale wensen of opmerkingen?</label>
              <textarea rows={3} value={form.opmerkingen} onChange={(e) => set("opmerkingen", e.target.value)} placeholder="Alles wat je kwijt wilt..." className={`${inputClass} resize-none`} />
            </div>
          </section>

          {error && (
            <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all hover:scale-[1.01] purple-glow"
          >
            {loading ? "Versturen..." : "Verstuur →"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-violet-500/30 border-t-violet-500 animate-spin" />
      </main>
    }>
      <OnboardingFormInner />
    </Suspense>
  );
}
