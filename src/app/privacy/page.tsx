import Link from "next/link";
export const metadata = { title: "Privacyverklaring — Lifegix" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#ededed] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-violet-400 text-sm hover:underline">← Terug naar home</Link>
        <h1 className="text-4xl font-bold mt-6 mb-2">Privacyverklaring</h1>
        <p className="text-white/40 text-sm mb-12">Laatste update: juni 2026</p>

        <section className="space-y-10 text-white/70 leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Wie ben ik?</h2>
            <p>Lifegix is een eenmanszaak gevestigd in Warnsveld, ingeschreven bij de Kamer van Koophandel onder nummer <strong className="text-white">98120336</strong>. Ik, Hanibal, ben de verwerkingsverantwoordelijke voor de persoonsgegevens zoals beschreven in deze verklaring.</p>
            <p className="mt-2">Contact: <a href="mailto:hanibal@lifegix.nl" className="text-violet-400 hover:underline">hanibal@lifegix.nl</a></p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Welke gegevens verzamel ik?</h2>
            <p>Afhankelijk van hoe je contact opneemt of een bestelling plaatst, verzamel ik de volgende persoonsgegevens:</p>

            <p className="mt-3 font-medium text-white/80">Via het contactformulier:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Naam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer (optioneel)</li>
              <li>Bedrijfsnaam (optioneel)</li>
              <li>Bericht / projectomschrijving</li>
            </ul>

            <p className="mt-3 font-medium text-white/80">Bij een bestelling via lifegix.nl:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Naam en bedrijfsnaam</li>
              <li>E-mailadres en telefoonnummer</li>
              <li>Gekozen pakket en betaalbedragen</li>
              <li>Betaalgegevens — verwerkt door Mollie (ik zie geen kaartnummers)</li>
            </ul>

            <p className="mt-3 font-medium text-white/80">Bij een abonnement met automatische incasso (SEPA):</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>IBAN-rekeningnummer</li>
              <li>Naam rekeninghouder</li>
            </ul>
            <p className="mt-2 text-sm">Het IBAN-nummer wordt via Mollie verwerkt voor het aanmaken van een SEPA-machtiging en uitsluitend gebruikt voor de maandelijkse incasso van het abonnement.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. Waarom verwerk ik deze gegevens?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">Uitvoering overeenkomst</strong> — om jouw website of AI-agent te bouwen en te onderhouden</li>
              <li><strong className="text-white">Betalingsverwerking</strong> — om de eenmalige vergoeding en het maandelijks abonnement te incasseren</li>
              <li><strong className="text-white">Facturatie</strong> — om facturen te maken en te sturen via Moneybird</li>
              <li><strong className="text-white">Communicatie</strong> — om contact op te nemen over jouw project of bestelling</li>
              <li><strong className="text-white">Wettelijke verplichtingen</strong> — zoals de fiscale bewaarplicht van 7 jaar</li>
            </ul>
            <p className="mt-2">Ik gebruik jouw gegevens niet voor marketingdoeleinden zonder jouw uitdrukkelijke toestemming.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. Grondslagen voor verwerking</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">Uitvoering van een overeenkomst</strong> — voor de verwerking van bestellingen, betalingen en levering van diensten</li>
              <li><strong className="text-white">Wettelijke verplichting</strong> — voor het bewaren van financiële administratie</li>
              <li><strong className="text-white">Gerechtvaardigd belang</strong> — voor contact naar aanleiding van een aanvraag</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Hoe lang bewaar ik jouw gegevens?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">Contactaanvragen</strong> — maximaal 2 jaar na laatste contact</li>
              <li><strong className="text-white">Klantgegevens (actief abonnement)</strong> — zolang de overeenkomst loopt</li>
              <li><strong className="text-white">Klantgegevens (na beëindiging)</strong> — maximaal 2 jaar na beëindiging</li>
              <li><strong className="text-white">Financiële gegevens en facturen</strong> — 7 jaar conform de wettelijke bewaarplicht</li>
              <li><strong className="text-white">IBAN-gegevens</strong> — worden verwijderd zodra het abonnement is beëindigd en alle openstaande bedragen zijn voldaan</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Derden en verwerkers</h2>
            <p>Ik maak gebruik van de volgende externe diensten die persoonsgegevens kunnen verwerken namens Lifegix:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><strong className="text-white">Mollie N.V.</strong> — betalingsverwerking, SEPA-incasso en mandaatbeheer (<a href="https://www.mollie.com/nl/privacy" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">privacybeleid</a>)</li>
              <li><strong className="text-white">Moneybird B.V.</strong> — factuurverwerking en boekhouding</li>
              <li><strong className="text-white">Resend</strong> — verzenden van transactionele e-mails</li>
              <li><strong className="text-white">Vercel Inc.</strong> — hosting van lifegix.nl (servers in de EU/VS)</li>
              <li><strong className="text-white">Anthropic</strong> — AI-chat functionaliteit op de website</li>
              <li><strong className="text-white">n8n</strong> — geautomatiseerde workflows voor leadverwerking</li>
            </ul>
            <p className="mt-2">Jouw gegevens worden niet verkocht aan derden. Gegevens worden alleen gedeeld met derden voor zover noodzakelijk voor de uitvoering van de dienstverlening.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Beveiliging</h2>
            <p>Ik neem passende technische en organisatorische maatregelen om jouw persoonsgegevens te beschermen tegen verlies, diefstal of onbevoegde toegang. De website maakt gebruik van HTTPS. Betalingen verlopen uitsluitend via het beveiligde platform van Mollie.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Jouw rechten (AVG)</h2>
            <p>Op grond van de Algemene Verordening Gegevensbescherming (AVG) heb je de volgende rechten:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong className="text-white">Inzage</strong> — je kunt opvragen welke gegevens ik van je heb</li>
              <li><strong className="text-white">Correctie</strong> — je kunt onjuiste gegevens laten corrigeren</li>
              <li><strong className="text-white">Verwijdering</strong> — je kunt verzoeken om verwijdering van je gegevens</li>
              <li><strong className="text-white">Beperking</strong> — je kunt de verwerking (tijdelijk) laten beperken</li>
              <li><strong className="text-white">Dataportabiliteit</strong> — je kunt je gegevens opvragen in een leesbaar formaat</li>
              <li><strong className="text-white">Bezwaar</strong> — je kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang</li>
            </ul>
            <p className="mt-2">Stuur een verzoek naar <a href="mailto:hanibal@lifegix.nl" className="text-violet-400 hover:underline">hanibal@lifegix.nl</a>. Ik reageer binnen <strong className="text-white">30 dagen</strong>.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">9. Cookies</h2>
            <p>Lifegix.nl gebruikt <strong className="text-white">geen</strong> tracking cookies of analytische cookies van derden. Er worden alleen functionele cookies gebruikt die strikt noodzakelijk zijn voor het werken van de website. Er is geen cookiebanner vereist.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">10. Wijzigingen</h2>
            <p>Deze privacyverklaring kan worden aangepast. De meest actuele versie is altijd beschikbaar op <a href="https://lifegix.nl/privacy" className="text-violet-400 hover:underline">lifegix.nl/privacy</a>. Bij belangrijke wijzigingen ontvang je hierover bericht per e-mail.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">11. Klachten</h2>
            <p>Heb je een klacht over hoe ik met jouw gegevens omga? Neem dan eerst contact op via <a href="mailto:hanibal@lifegix.nl" className="text-violet-400 hover:underline">hanibal@lifegix.nl</a>. Je kunt ook een klacht indienen bij de <strong className="text-white">Autoriteit Persoonsgegevens</strong> via <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">autoriteitpersoonsgegevens.nl</a>.</p>
          </div>

        </section>
      </div>
    </main>
  );
}
