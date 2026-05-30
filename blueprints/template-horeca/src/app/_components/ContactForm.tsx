"use client";
import { useRef, useState } from "react";
import { clientConfig } from "@/config/client.config";

export default function ReserveringForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Uncontrolled inputs — geen re-render bij elk toetsaanslag
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const gelegenheidRef = useRef<HTMLSelectElement>(null);
  const aantalRef = useRef<HTMLSelectElement>(null);
  const datumRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const body = {
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      phone: phoneRef.current?.value ?? "",
      service: gelegenheidRef.current?.value ?? "",
      message: `Aantal personen: ${aantalRef.current?.value ?? "?"}\nGewenste datum: ${datumRef.current?.value ?? "?"}\n\n${messageRef.current?.value ?? ""}`,
      to: clientConfig.email,
      bedrijf: clientConfig.naam,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        let message = "Verzenden mislukt.";
        try {
          const data = await res.json();
          message = data.error ?? message;
        } catch {}
        throw new Error(message);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-colors";

  if (submitted) {
    return (
      <div className="text-center py-16 px-8 rounded-2xl bg-white/5 border border-white/10">
        <div className="text-6xl mb-6">✓</div>
        <h3 className="text-xl font-bold text-white mb-2">
          Reserveringsverzoek ontvangen!
        </h3>
        <p className="text-white/50 text-sm">
          We bevestigen uw reservering zo snel mogelijk, uiterlijk binnen 4 uur.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-5 sm:p-8 rounded-2xl bg-white/[0.03] gradient-border"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">
            Naam *
          </label>
          <input
            ref={nameRef}
            type="text"
            required
            placeholder="Jan de Vries"
            className={inputClass}
            style={{ touchAction: "manipulation" }}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">
            E-mailadres *
          </label>
          <input
            ref={emailRef}
            type="email"
            required
            placeholder="jan@email.nl"
            className={inputClass}
            style={{ touchAction: "manipulation" }}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">
            Telefoonnummer
          </label>
          <input
            ref={phoneRef}
            type="tel"
            placeholder="+31 6 12345678"
            className={inputClass}
            style={{ touchAction: "manipulation" }}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">
            Gelegenheid
          </label>
          <select
            ref={gelegenheidRef}
            className={`${inputClass} appearance-none`}
            style={{ touchAction: "manipulation" }}
          >
            <option value="" className="bg-[#0a0a0f]">
              Kies een gelegenheid
            </option>
            {clientConfig.reserveren.formDiensten.map((d) => (
              <option key={d} value={d} className="bg-[#0a0a0f]">
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">
            Aantal personen *
          </label>
          <select
            ref={aantalRef}
            required
            className={`${inputClass} appearance-none`}
            style={{ touchAction: "manipulation" }}
          >
            <option value="" className="bg-[#0a0a0f]">
              Selecteer
            </option>
            {["1–2", "3–4", "5–6", "7–8", "9–10", "11+"].map((n) => (
              <option key={n} value={n} className="bg-[#0a0a0f]">
                {n} personen
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-white/50 mb-1.5">
            Gewenste datum *
          </label>
          <input
            ref={datumRef}
            type="date"
            required
            className={inputClass}
            style={{ touchAction: "manipulation" }}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-white/50 mb-1.5">
          Bijzonderheden (optioneel)
        </label>
        <textarea
          ref={messageRef}
          rows={3}
          placeholder="Dieetwensen, allergieën, speciale gelegenheden..."
          className={`${inputClass} resize-none`}
          style={{ touchAction: "manipulation" }}
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl disabled:opacity-60 font-semibold text-sm transition-colors text-white"
        style={{
          backgroundColor: clientConfig.kleur.primary,
          touchAction: "manipulation",
        }}
      >
        {loading ? "Verzenden..." : "Stuur reserveringsverzoek →"}
      </button>

      <p className="text-center text-white/25 text-xs">
        Of bel ons direct op{" "}
        <a
          href={`tel:${clientConfig.telefoon}`}
          style={{ color: clientConfig.kleur.primary }}
        >
          {clientConfig.telefoon}
        </a>
      </p>
    </form>
  );
}
