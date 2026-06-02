import Link from "next/link";
export const metadata = { title: "Algemene Voorwaarden — Lifegix" };

export default function VoorwaardenPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#ededed] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-violet-400 text-sm hover:underline">← Terug naar home</Link>
        <h1 className="text-4xl font-bold mt-6 mb-2">Algemene Voorwaarden</h1>
        <p className="text-white/40 text-sm mb-12">Lifegix · KvK 98120336 · Warnsveld · Versie juni 2026</p>

        <section className="space-y-10 text-white/70 leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Definities</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-white">Lifegix</strong>: de eenmanszaak van Hanibal, KvK 98120336, gevestigd in Warnsveld.</li>
              <li><strong className="text-white">Opdrachtgever</strong>: de natuurlijke of rechtspersoon die een dienst afneemt bij Lifegix.</li>
              <li><strong className="text-white">Overeenkomst</strong>: de afspraak tussen Lifegix en opdrachtgever over te leveren diensten.</li>
              <li><strong className="text-white">Abonnement</strong>: de maandelijks terugkerende dienstverlening (hosting, onderhoud, AI-agent) waarvoor automatisch wordt geïncasseerd.</li>
              <li><strong className="text-white">Eenmalige vergoeding</strong>: het bedrag dat bij aanvang eenmalig wordt betaald voor de bouw van de website of het opzetten van de AI-agent.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Toepasselijkheid</h2>
            <p>Deze voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten tussen Lifegix en opdrachtgever. Afwijkingen zijn alleen geldig als ze schriftelijk zijn overeengekomen.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. Offertes en totstandkoming</h2>
            <p>Offertes zijn vrijblijvend en geldig voor 7 dagen na dagtekening. Een overeenkomst komt tot stand op het moment dat de opdrachtgever de offerte accepteert of een betaling verricht via lifegix.nl.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. Uitvoering van de opdracht</h2>
            <p>Lifegix voert opdrachten naar beste inzicht en vermogen uit. Lifegix heeft een inspanningsverplichting, geen resultaatverplichting, tenzij uitdrukkelijk schriftelijk anders overeengekomen.</p>
            <p className="mt-2">De opdrachtgever is verplicht tijdig alle informatie en materialen te leveren die noodzakelijk zijn voor de uitvoering.</p>
            <p className="mt-2">Lifegix levert de website of AI-agent op nadat de eenmalige vergoeding volledig is ontvangen.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Betaling</h2>
            <p>De eenmalige opdrachtprijs wordt vooraf voldaan via het betaalportaal op lifegix.nl. De dienstverlening start na ontvangst van deze betaling.</p>
            <p className="mt-2">Lifegix is vrijgesteld van BTW op grond van de Kleineondernemersregeling (KOR). Op facturen wordt geen BTW vermeld.</p>
            <p className="mt-2">Bij niet-betaling of betalingsweigering is Lifegix gerechtigd de opdracht niet te starten of de dienstverlening op te schorten.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5a. Maandelijks abonnement en SEPA-incasso</h2>
            <p>Voor diensten met een maandelijks abonnement (hosting, onderhoud, AI-agent) machtigt de opdrachtgever Lifegix om via Mollie N.V. het verschuldigde bedrag automatisch af te schrijven van de opgegeven bankrekening (SEPA Direct Debit).</p>
            <p className="mt-2">De opdrachtgever geeft bij het plaatsen van de bestelling een SEPA-machtiging af door zijn IBAN-rekeningnummer op te geven. Door akkoord te gaan met deze voorwaarden en de bestelling te voltooien, stemt de opdrachtgever in met de automatische maandelijkse incasso.</p>
            <p className="mt-2">De opdrachtgever heeft het recht om een afschrijving binnen <strong className="text-white">8 weken</strong> na incasso te laten terugboeken, conform de SEPA-regels. Dit laat de betalingsverplichting onverlet.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5b. Mislukte of uitblijvende betaling</h2>
            <p>Indien een automatische incasso mislukt (onvoldoende saldo, geblokkeerde rekening of anderszins), ontvangt de opdrachtgever hiervan per e-mail bericht.</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong className="text-white">1e mislukte incasso:</strong> De opdrachtgever ontvangt een herinneringsmail en heeft 7 dagen de tijd om de betaling alsnog te voldoen.</li>
              <li><strong className="text-white">2e mislukte incasso of geen betaling na herinnering:</strong> Lifegix is gerechtigd de dienstverlening per direct op te schorten. De website wordt offline gehaald en/of de AI-agent wordt gedeactiveerd totdat de verschuldigde bedragen zijn voldaan.</li>
              <li><strong className="text-white">Na 30 dagen niet-betaling:</strong> Lifegix is gerechtigd de overeenkomst per direct te ontbinden. De opdrachtgever blijft de openstaande bedragen verschuldigd. Lifegix kan een incassobureau inschakelen; de kosten hiervan zijn voor rekening van de opdrachtgever.</li>
            </ul>
            <p className="mt-3">Opschorting of ontbinding wegens wanbetaling geeft de opdrachtgever geen recht op terugbetaling van reeds betaalde bedragen.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Opzegging en beëindiging</h2>
            <p>Het maandelijkse abonnement kan op elk moment worden opgezegd met een opzegtermijn van <strong className="text-white">1 kalendermaand</strong>. Opzegging dient schriftelijk te gebeuren via <a href="mailto:hanibal@lifegix.nl" className="text-violet-400 hover:underline">hanibal@lifegix.nl</a>.</p>
            <p className="mt-2">Na opzegging wordt de SEPA-machtiging ingetrokken. De dienstverlening loopt door tot het einde van de lopende betalingsperiode.</p>
            <p className="mt-2">Er geldt geen minimale contractduur, tenzij schriftelijk anders overeengekomen.</p>
            <p className="mt-2">Bij opzegging blijft de website <strong className="text-white">30 dagen</strong> bereikbaar. Daarna wordt de hosting beëindigd tenzij de opdrachtgever de website elders onderbrengt. Lifegix verstrekt op verzoek de bronbestanden.</p>
            <p className="mt-2">De eenmalige vergoeding voor de bouw van de website of AI-agent wordt niet terugbetaald bij opzegging.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Intellectueel eigendom</h2>
            <p>Na volledige betaling van de eenmalige vergoeding draagt Lifegix het eigendom van de geleverde website over aan de opdrachtgever. Zolang er een openstaande betalingsverplichting bestaat, behoudt Lifegix het eigendomsrecht.</p>
            <p className="mt-2">Lifegix behoudt het recht om het werk te vermelden als referentie in zijn portfolio, tenzij de opdrachtgever hier schriftelijk bezwaar tegen maakt.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Aansprakelijkheid</h2>
            <p>De aansprakelijkheid van Lifegix is beperkt tot het bedrag dat de opdrachtgever heeft betaald voor de betreffende opdracht in de 3 maanden voorafgaand aan de schadeveroorzakende gebeurtenis.</p>
            <p className="mt-2">Lifegix is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst, gemiste omzet of reputatieschade.</p>
            <p className="mt-2">Lifegix is niet verantwoordelijk voor schade als gevolg van onjuiste of onvolledige informatie verstrekt door de opdrachtgever, storingen bij derden (Vercel, Mollie, Moneybird), of overmacht.</p>
            <p className="mt-2">De opdrachtgever is zelf verantwoordelijk voor het naleven van wet- en regelgeving met betrekking tot zijn eigen website en bedrijfsvoering.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">9. Geheimhouding</h2>
            <p>Beide partijen behandelen vertrouwelijke informatie van de andere partij als strikt vertrouwelijk. Lifegix zal de gegevens van de opdrachtgever niet delen met derden, tenzij dit noodzakelijk is voor de uitvoering van de overeenkomst (zoals Mollie voor betalingen, Moneybird voor facturatie).</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">10. Wijzigingen voorwaarden</h2>
            <p>Lifegix behoudt zich het recht voor deze voorwaarden te wijzigen. Wijzigingen worden minimaal <strong className="text-white">30 dagen</strong> van tevoren per e-mail aangekondigd. Bij bezwaar heeft de opdrachtgever het recht de overeenkomst te beëindigen voor de datum van inwerkingtreding.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">11. Toepasselijk recht en geschillen</h2>
            <p>Op alle overeenkomsten is <strong className="text-white">Nederlands recht</strong> van toepassing. Geschillen worden bij voorkeur in onderling overleg opgelost. Indien dat niet lukt, worden geschillen voorgelegd aan de bevoegde rechter in het arrondissement Gelderland.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">12. Contact</h2>
            <p>Lifegix · Warnsveld · KvK 98120336<br />
            <a href="mailto:hanibal@lifegix.nl" className="text-violet-400 hover:underline">hanibal@lifegix.nl</a> · <a href="https://lifegix.nl" className="text-violet-400 hover:underline">lifegix.nl</a></p>
          </div>

        </section>
      </div>
    </main>
  );
}
