"use client";
import { useState } from "react";

const TO_EMAIL = "lifegix.contact@gmail.com";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        let message = "Verzenden mislukt.";
        try { const data = await res.json(); message = data.error ?? message; } catch {}
        throw new Error(message);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-colors";

  if (submitted) {
    return (
      <div className="text-center py-16 px-8 rounded-2xl bg-violet-500/10 border border-violet-500/20">
        <div className="text-8xl mb-6 text-green-400">✓</div>
        <h3 className="text-xl font-bold text-violet-300 mb-2">Bericht ontvangen!</h3>
        <p className="text-white/50 text-sm">Ik reageer zo snel mogelijk, uiterlijk binnen 24 uur.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-5 sm:p-8 rounded-2xl bg-white/[0.03] gradient-border">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">Naam *</label>
          <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jan de Vries" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">E-mailadres *</label>
          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jan@bedrijf.nl" className={inputClass} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">Telefoonnummer</label>
          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+31 6 12345678" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">Interesse in</label>
          <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={`${inputClass} appearance-none`}>
            <option value="" className="bg-[#0a0a0f]">Kies een dienst</option>
            <option value="website" className="bg-[#0a0a0f]">Website bouwen</option>
            <option value="ai" className="bg-[#0a0a0f]">AI Automatisering</option>
            <option value="both" className="bg-[#0a0a0f]">Beide</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-white/50 mb-1.5">Bericht *</label>
        <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Vertel iets over je bedrijf en wat je nodig hebt..." className={`${inputClass} resize-none`} />
      </div>
      {error && <p className="text-red-400 text-sm text-center">{error}</p>}
      <button type="submit" disabled={loading} className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 font-semibold text-sm transition-colors purple-glow">
        {loading ? "Verzenden..." : "Verstuur bericht →"}
      </button>
      <p className="text-center text-white/25 text-xs">Geen spam. Ik reageer persoonlijk binnen 24 uur.</p>
    </form>
  );
}
