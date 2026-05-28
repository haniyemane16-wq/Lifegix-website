export const metadata = { title: "Privacyverklaring — Lifegix" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#ededed] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-violet-400 text-sm hover:underline">← Terug naar home</a>
        <h1 className="text-4xl font-bold mt-6 mb-2">Privacyverklaring</h1>
        <p className="text-white/40 text-sm mb-12">Laatste update: mei 2026</p>

        <section className="space-y-10 text-white/70 leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Wie ben ik?</h2>
            <p>Lifegix is een eenmanszaak gevestigd in Warnsveld, ingeschreven bij de Kamer van Koophandel onder nummer <strong className="text-white">98120336</strong>. Ik, Hanibal, ben verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring.</p>
            <p className="mt-2">Contact: <a href="mailto:hanibal@lifegix.nl" className="text-violet-400 hover:underline">hanibal@lifegix.nl</a></p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Welke gegevens verzamel ik?</h2>
            <p>Via het contactformulier en intakeformulier op lifegix.nl verzamel ik de volgende persoonsgegevens:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Naam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer (optioneel)</li>
              <li>Bedrijfsnaam (optioneel)</li>
              <li>Projectomschrijving en aanvullende informatie die je zelf invult</li>
            </ul>
            <p className="mt-2">Bij een bestelling verwerkt Mollie betalingsgegevens. Ik heb geen toegang tot je betaalgegevens zoals kaartnummers.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. Waarom verwerk ik deze gegevens?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Om je aanvraag te beoordelen en een offerte op te stellen</li>
              <li>Om contact met je op te nemen over jouw project</li>
              <li>Om een overeenkomst met je uit te voeren</li>
              <li>Om te voldoen aan wettelijke verplichtingen</li>
            </ul>
            <p className="mt-2">Ik verstuur geen spam en gebruik jouw gegevens niet voor marketingdoeleinden zonder toestemming.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. Hoe lang bewaar ik jouw gegevens?</h2>
            <p>Ik bewaar persoonsgegevens niet langer dan noodzakelijk. Voor contactaanvragen geldt een bewaartermijn van maximaal 2 jaar na het laatste contact. Financiële gegevens bewaar ik 7 jaar conform de wettelijke bewaarplicht.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Derden</h2>
            <p>Ik maak gebruik van de volgende externe diensten die mogelijk persoonsgegevens verwerken:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong className="text-white">Resend</strong> — voor het versturen van e-mails</li>
              <li><strong className="text-white">Mollie</strong> — voor het verwerken van betalingen</li>
              <li><strong className="text-white">Vercel</strong> — voor het hosten van deze website</li>
              <li><strong className="text-white">n8n</strong> — voor geautomatiseerde workflows</li>
            </ul>
            <p className="mt-2">Met deze partijen zijn verwerkersovereenkomsten afgesloten of zij vallen onder een adequaat privacybeleid.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Jouw rechten</h2>
            <p>Op grond van de AVG heb je de volgende rechten:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Recht op inzage van jouw persoonsgegevens</li>
              <li>Recht op correctie van onjuiste gegevens</li>
              <li>Recht op verwijdering van jouw gegevens</li>
              <li>Recht op beperking van verwerking</li>
              <li>Recht op dataportabiliteit</li>
              <li>Recht om bezwaar te maken tegen verwerking</li>
            </ul>
            <p className="mt-2">Stuur een verzoek naar <a href="mailto:hanibal@lifegix.nl" className="text-violet-400 hover:underline">hanibal@lifegix.nl</a>. Ik reageer binnen 30 dagen.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
            <p>Lifegix.nl gebruikt geen tracking cookies of analytische cookies van derden. Er worden alleen functionele cookies gebruikt die noodzakelijk zijn voor het werken van de website.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Klachten</h2>
            <p>Heb je een klacht over hoe ik met jouw gegevens omga? Je kunt een klacht indienen bij de <strong className="text-white">Autoriteit Persoonsgegevens</strong> via <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">autoriteitpersoonsgegevens.nl</a>.</p>
          </div>

        </section>
      </div>
    </main>
  );
}
