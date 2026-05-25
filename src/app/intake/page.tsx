"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
}

function decodeToken(token: string): LeadPayload | null {
  try {
    const encoded = token.split(".")[0];
    // base64url → base64
    const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  } catch {
    return null;
  }
}

const SERVICE_LABEL: Record<string, string> = {
  website: "Website bouwen",
  ai: "AI Automatisering",
  both: "Website + AI Automatisering",
};

function IntakeFormInner() {
  const params = useSearchParams();
  const token = params.get("token") ?? "";
  const lead = token ? decodeToken(token) : null;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    // Prefilled vanuit token
    name: "",
    email: "",
    // Bedrijf
    bedrijf: "",
    beschrijving: "",
    doelgroep: "",
    // Project
    doel: "",
    functies: [] as string[],
    deadline: "",
    // Stijl
    heeftLogo: "",
    stijl: "",
    voorbeelden: "",
    // Extra
    opmerkingen: "",
  });

  useEffect(() => {
    if (lead) {
      setForm((f) => ({
        ...f,
        name: lead.name ?? "",
        email: lead.email ?? "",
      }));
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  const set = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleFunctie = (f: string) =>
    setForm((prev) => ({
      ...prev,
      functies: prev.functies.includes(f)
        ? prev.functies.filter((x) => x !== f)
        : [...prev.functies, f],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, ...form }),
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

  const FUNCTIES = [
    "Contactformulier",
    "Afsprakensysteem",
    "Webshop",
    "Blog",
    "Meerdere pagina's",
    "Galerij / foto's",
    "WhatsApp integratie",
    "AI chatbot",
    "Andere",
  ];

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
          <h1 className="text-3xl font-bold text-white mb-4">Formulier ontvangen!</h1>
          <p className="text-white/50 leading-relaxed mb-8">
            Bedankt! Je ontvangt binnen 24 uur een persoonlijke offerte op <span className="text-violet-300">{form.email}</span>.
          </p>
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all hover:scale-105">
            ← Terug naar home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-white">Life</span><span className="text-violet-400">gix</span>
          </a>
          <a href="/" className="text-sm text-white/50 hover:text-white transition-colors">← Terug naar home</a>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 pt-32 pb-24 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Stap 1 van 2</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Vertel over je project</h1>
          <p className="mt-4 text-white/50">
            Duurt ongeveer 3 minuten. Hoe meer detail, hoe beter de offerte die je ontvangt.
          </p>
          {lead?.service && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              {SERVICE_LABEL[lead.service] ?? lead.service}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ── Jouw gegevens ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Jouw gegevens</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Naam *</label>
                <input type="text" required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jan de Vries" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>E-mailadres *</label>
                <input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jan@bedrijf.nl" className={inputClass} />
              </div>
            </div>
          </section>

          {/* ── Over je bedrijf ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Over je bedrijf</h2>
            <div>
              <label className={labelClass}>Bedrijfsnaam *</label>
              <input type="text" required value={form.bedrijf} onChange={(e) => set("bedrijf", e.target.value)} placeholder="Jouw Bedrijf" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Wat doet je bedrijf? *</label>
              <textarea required rows={3} value={form.beschrijving} onChange={(e) => set("beschrijving", e.target.value)} placeholder="Beschrijf in 2–3 zinnen wat je bedrijf doet en wat je aanbiedt." className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className={labelClass}>Wie zijn je klanten?</label>
              <input type="text" value={form.doelgroep} onChange={(e) => set("doelgroep", e.target.value)} placeholder="bijv. particulieren in de regio, mkb-bedrijven, etc." className={inputClass} />
            </div>
          </section>

          {/* ── Over het project ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Over het project</h2>
            <div>
              <label className={labelClass}>Wat wil je bereiken? *</label>
              <textarea required rows={3} value={form.doel} onChange={(e) => set("doel", e.target.value)} placeholder="bijv. meer klanten via Google, professioneler uitstralen, online afspraken boeken, etc." className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className={labelClass}>Welke functies heb je nodig?</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                {FUNCTIES.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => toggleFunctie(f)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all text-left ${
                      form.functies.includes(f)
                        ? "bg-violet-500/20 border-violet-500/50 text-violet-300"
                        : "bg-white/[0.03] border-white/10 text-white/50 hover:border-white/20"
                    }`}
                  >
                    {form.functies.includes(f) ? "✓ " : ""}{f}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className={labelClass}>Wanneer wil je live gaan?</label>
              <select value={form.deadline} onChange={(e) => set("deadline", e.target.value)} className={`${inputClass} appearance-none`}>
                <option value="" className="bg-[#0a0a0f]">Kies een optie</option>
                <option value="zo snel mogelijk" className="bg-[#0a0a0f]">Zo snel mogelijk</option>
                <option value="binnen 1 maand" className="bg-[#0a0a0f]">Binnen 1 maand</option>
                <option value="over 1-2 maanden" className="bg-[#0a0a0f]">Over 1–2 maanden</option>
                <option value="geen haast" className="bg-[#0a0a0f]">Geen haast</option>
              </select>
            </div>
          </section>

          {/* ── Stijl & branding ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Stijl &amp; branding</h2>
            <div>
              <label className={labelClass}>Heb je al een logo?</label>
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
              <input type="text" value={form.voorbeelden} onChange={(e) => set("voorbeelden", e.target.value)} placeholder="bijv. coolblue.nl, example.com (links of namen)" className={inputClass} />
            </div>
          </section>

          {/* ── Extra ── */}
          <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Overig</h2>
            <div>
              <label className={labelClass}>Zijn er speciale wensen of opmerkingen?</label>
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
            {loading ? "Versturen..." : "Verstuur projectformulier →"}
          </button>
          <p className="text-center text-white/25 text-xs">Je ontvangt binnen 24 uur een persoonlijke offerte.</p>
        </form>
      </div>
    </main>
  );
}

export default function IntakePage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-violet-500/30 border-t-violet-500 animate-spin" />
      </main>
    }>
      <IntakeFormInner />
    </Suspense>
  );
}
