"use client";

import { useState } from "react";
import { bepaalSubverwerkers } from "@/lib/dpaSubverwerkers";

type Props = {
  naam: string;
  email: string;
  bedrijf: string;
  pakket: string;
  onAccepted: () => void;
};

export default function DpaAcceptance({ naam, email, bedrijf, pakket, onAccepted }: Props) {
  const [akkoord, setAkkoord] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const klantnaam = bedrijf.trim() || naam.trim() || "Klant";
  const plaats = "Nederland";
  const subverwerkers = bepaalSubverwerkers(pakket);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!akkoord) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/onboarding/accept-dpa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ naam, email, bedrijf, pakket }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Er ging iets mis.");
      }
      onAccepted();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  const h3Class = "text-sm font-semibold text-violet-300 mt-5 mb-1.5";

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
      </div>

      <div className="max-w-2xl mx-auto px-6 pt-20 pb-24 relative">
        <div className="text-center mb-10">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Voordat we beginnen</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Verwerkersovereenkomst</h1>
          <p className="mt-4 text-white/50">
            Omdat LifeGix persoonsgegevens verwerkt namens {klantnaam} (bijv. contactformulieren en
            chatbotvragen van je bezoekers), vragen we je eenmalig akkoord te gaan met de verwerkersovereenkomst
            hieronder.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="max-h-[420px] overflow-y-auto pr-2 text-sm text-white/70 leading-relaxed">
            <h2 className="text-base font-bold text-white mb-3">VERWERKERSOVEREENKOMST</h2>

            <p>
              Deze verwerkersovereenkomst (&quot;Overeenkomst&quot;) is onderdeel van de overeenkomst tussen:
              <br />
              Verwerkingsverantwoordelijke: <strong className="text-white">{klantnaam}</strong>, gevestigd te{" "}
              {plaats} (&quot;Klant&quot;)
              <br />
              en
              <br />
              Verwerker: LifeGix, gevestigd te Warnsveld, KvK-nummer 98120336 (&quot;LifeGix&quot;)
              <br />
              hierna gezamenlijk &quot;Partijen&quot;.
            </p>

            <h3 className={h3Class}>Artikel 1 — Onderwerp en duur</h3>
            <p>
              1.1 Deze Overeenkomst regelt de verwerking van persoonsgegevens door LifeGix namens Klant, in het
              kader van de door LifeGix geleverde website en/of AI-diensten.
              <br />
              1.2 Deze Overeenkomst geldt zolang de onderliggende dienstverleningsovereenkomst tussen Partijen
              loopt, en eindigt automatisch bij beëindiging daarvan.
            </p>

            <h3 className={h3Class}>Artikel 2 — Aard en doel van de verwerking</h3>
            <p>
              2.1 LifeGix verwerkt persoonsgegevens uitsluitend ten behoeve van:
            </p>
            <ul className="list-disc pl-5 space-y-0.5">
              <li>Het hosten en laten functioneren van de website van Klant</li>
              <li>Het afhandelen van contactformulieren en offerteaanvragen</li>
              <li>
                Het laten functioneren van een AI-chatassistent, inclusief het vastleggen van vragen die de
                assistent niet zelf kon beantwoorden, zodat Klant deze kan beantwoorden (indien van toepassing)
              </li>
              <li>Het verwerken van bestellingen/betalingen</li>
            </ul>
            <p>
              2.2 LifeGix verwerkt de persoonsgegevens niet voor eigen doeleinden, tenzij dit volgt uit een
              wettelijke verplichting.
            </p>

            <h3 className={h3Class}>Artikel 3 — Soort persoonsgegevens en betrokkenen</h3>
            <p>
              3.1 Het gaat om persoonsgegevens van bezoekers en klanten van Klant, zoals: naam, e-mailadres,
              telefoonnummer, en de inhoud van vrije-tekstvelden (contactformulier, chatberichten).
              <br />
              3.2 Er worden geen bijzondere categorieën persoonsgegevens (bijv. gezondheid, ras,
              geloofsovertuiging) verwerkt, tenzij een betrokkene dit uit eigen beweging invult in een vrij
              tekstveld — Klant en LifeGix spannen zich in dit te voorkomen maar kunnen dit niet garanderen.
            </p>

            <h3 className={h3Class}>Artikel 4 — Verplichtingen van LifeGix</h3>
            <p>
              4.1 LifeGix verwerkt de persoonsgegevens uitsluitend op basis van schriftelijke instructies van
              Klant, tenzij een wettelijke verplichting anders vereist.
              <br />
              4.2 LifeGix betracht geheimhouding over de persoonsgegevens, tenzij een wettelijke plicht tot
              bekendmaking bestaat.
              <br />
              4.3 LifeGix treft passende technische en organisatorische beveiligingsmaatregelen (zie Artikel 6).
              <br />
              4.4 LifeGix verleent redelijke medewerking aan Klant bij het afhandelen van verzoeken van
              betrokkenen (inzage, correctie, verwijdering) binnen de wettelijke termijnen.
              <br />
              4.5 LifeGix verwijdert of retourneert alle persoonsgegevens aan Klant na afloop van de
              dienstverlening, naar keuze van Klant, tenzij wetgeving bewaring verplicht.
            </p>

            <h3 className={h3Class}>Artikel 5 — Sub-verwerkers</h3>
            <p>
              5.1 Klant geeft hierbij algemene toestemming aan LifeGix om gebruik te maken van de volgende
              sub-verwerkers, die noodzakelijk zijn voor de dienstverlening:
            </p>
            <div className="overflow-x-auto my-2">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="text-white/40 text-left border-b border-white/10">
                    <th className="py-1.5 pr-3 font-medium">Sub-verwerker</th>
                    <th className="py-1.5 pr-3 font-medium">Doel</th>
                    <th className="py-1.5 font-medium">Website</th>
                  </tr>
                </thead>
                <tbody>
                  {subverwerkers.map((sub) => (
                    <tr key={sub.naam} className="border-b border-white/5">
                      <td className="py-1.5 pr-3 text-white/80 whitespace-nowrap">{sub.naam}</td>
                      <td className="py-1.5 pr-3">{sub.doel}</td>
                      <td className="py-1.5 whitespace-nowrap">{sub.website}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              5.2 LifeGix informeert Klant over wijzigingen in deze lijst, zodat Klant bezwaar kan maken.
              <br />
              5.3 LifeGix heeft zelf een verwerkersovereenkomst met elke sub-verwerker afgesloten.
            </p>

            <h3 className={h3Class}>Artikel 6 — Beveiligingsmaatregelen</h3>
            <p>6.1 LifeGix treft onder meer de volgende maatregelen:</p>
            <ul className="list-disc pl-5 space-y-0.5">
              <li>Toegangssleutels worden vergeleken met een timing-safe methode om te voorkomen dat ze te raden zijn</li>
              <li>Elke klant krijgt een eigen, geïsoleerde toegangssleutel — nooit een gedeelde of centrale sleutel</li>
              <li>Bij een ontbrekende of onjuiste configuratie wordt toegang standaard geweigerd (&quot;fail-closed&quot;), nooit standaard toegestaan</li>
              <li>Wachtwoorden en sleutels staan nooit hardcoded in de broncode</li>
              <li>Automatische tests controleren bij elke codewijziging of deze beveiligingsmaatregelen intact blijven</li>
            </ul>

            <h3 className={h3Class}>Artikel 7 — Datalekken</h3>
            <p>
              7.1 LifeGix meldt een (vermoeden van een) datalek zonder onredelijke vertraging, en in elk geval
              binnen 48 uur nadat LifeGix hiervan op de hoogte is, aan Klant.
              <br />
              7.2 LifeGix verstrekt daarbij alle redelijkerwijs beschikbare informatie die Klant nodig heeft om
              zelf aan haar wettelijke meldplicht te voldoen.
            </p>

            <h3 className={h3Class}>Artikel 8 — Aansprakelijkheid</h3>
            <p>
              8.1 Aansprakelijkheid tussen Partijen in het kader van deze Overeenkomst is geregeld in de
              onderliggende dienstverleningsovereenkomst/algemene voorwaarden.
            </p>

            <h3 className={h3Class}>Artikel 9 — Audit</h3>
            <p>
              9.1 Klant heeft het recht om, na voorafgaande redelijke kennisgeving, LifeGix te verzoeken om bewijs
              van naleving van deze Overeenkomst te overleggen.
            </p>

            <h3 className={h3Class}>Artikel 10 — Slotbepalingen</h3>
            <p>
              10.1 Op deze Overeenkomst is Nederlands recht van toepassing.
              <br />
              10.2 Wijzigingen in wet- of regelgeving die deze Overeenkomst raken, worden door Partijen in
              onderling overleg verwerkt.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={akkoord}
              onChange={(e) => setAkkoord(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded accent-violet-600 shrink-0"
            />
            <span className="text-sm text-white/80">
              Ik ga akkoord met deze verwerkersovereenkomst namens <strong className="text-white">{klantnaam}</strong>.
            </span>
          </label>

          {error && (
            <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{error}</p>
          )}

          <button
            type="submit"
            disabled={!akkoord || loading}
            className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all hover:scale-[1.01] purple-glow"
          >
            {loading ? "Versturen..." : "Akkoord en verder →"}
          </button>
        </form>
      </div>
    </main>
  );
}
