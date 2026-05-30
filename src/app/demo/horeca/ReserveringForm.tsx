"use client";

import { useState } from "react";

export default function ReserveringForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    naam: "",
    datum: "",
    tijd: "",
    personen: "2",
    opmerkingen: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
          <svg
            className="w-8 h-8 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Reservering ontvangen!
        </h3>
        <p className="text-white/60 max-w-sm mx-auto">
          Bedankt, {form.naam}. We bevestigen uw reservering voor{" "}
          {form.personen} personen op {form.datum} om {form.tijd} per e-mail.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          style={{ touchAction: "manipulation" }}
          className="mt-8 px-6 py-2.5 rounded-xl border border-white/10 hover:border-emerald-500/40 text-white/60 hover:text-white text-sm font-medium transition-colors"
        >
          Nieuwe reservering
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Naam *
          </label>
          <input
            type="text"
            name="naam"
            required
            value={form.naam}
            onChange={handleChange}
            placeholder="Uw volledige naam"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:bg-white/8 transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Aantal personen *
          </label>
          <select
            name="personen"
            required
            value={form.personen}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 transition-colors text-sm appearance-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={String(n)} className="bg-[#0d1f17] text-white">
                {n} {n === 1 ? "persoon" : "personen"}
              </option>
            ))}
            <option value="9+" className="bg-[#0d1f17] text-white">
              9+ personen (bel ons)
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Datum *
          </label>
          <input
            type="date"
            name="datum"
            required
            value={form.datum}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 transition-colors text-sm [color-scheme:dark]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Tijd *
          </label>
          <select
            name="tijd"
            required
            value={form.tijd}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 transition-colors text-sm appearance-none"
          >
            <option value="" className="bg-[#0d1f17] text-white">
              Kies een tijd
            </option>
            {[
              "12:00",
              "12:30",
              "13:00",
              "13:30",
              "17:30",
              "18:00",
              "18:30",
              "19:00",
              "19:30",
              "20:00",
              "20:30",
              "21:00",
            ].map((t) => (
              <option key={t} value={t} className="bg-[#0d1f17] text-white">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-1.5">
          Opmerkingen
        </label>
        <textarea
          name="opmerkingen"
          value={form.opmerkingen}
          onChange={handleChange}
          rows={4}
          placeholder="Dieetwensen, allergieën, speciale gelegenheden..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        style={{ touchAction: "manipulation" }}
        className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
      >
        Reserveer mijn tafel →
      </button>

      <p className="text-center text-xs text-white/30">
        Of bel ons direct op{" "}
        <a
          href="tel:+31575123456"
          className="text-emerald-400/70 hover:text-emerald-400 transition-colors"
          style={{ touchAction: "manipulation" }}
        >
          0575 – 12 34 56
        </a>
      </p>
    </form>
  );
}
