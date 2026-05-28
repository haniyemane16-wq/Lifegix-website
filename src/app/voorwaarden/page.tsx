import Link from "next/link";
export const metadata = { title: "Algemene Voorwaarden — Lifegix" };

export default function VoorwaardenPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#ededed] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-violet-400 text-sm hover:underline">← Terug naar home</Link>
        <h1 className="text-4xl font-bold mt-6 mb-2">Algemene Voorwaarden</h1>
        <p className="text-white/40 text-sm mb-12">Lifegix · KvK 98120336 · Warnsveld · Versie mei 2026</p>

        <section className="space-y-10 text-white/70 leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Definities</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-white">Lifegix</strong>: de eenmanszaak van Hanibal, KvK 98120336, gevestigd in Warnsveld.</li>
              <li><strong className="text-white">Opdrachtgever</strong>: de natuurlijke of rechtspersoon die een opdracht verstrekt aan Lifegix.</li>
              <li><strong className="text-white">Overeenkomst</strong>: de afspraak tussen Lifegix en opdrachtgever over te leveren diensten.</li>
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
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Betaling</h2>
            <p>De eenmalige opdrachtprijs wordt vooraf voldaan via het betaalportaal op lifegix.nl. Maandelijkse onderhoudskosten worden maandelijks vooraf gefactureerd.</p>
            <p className="mt-2">Lifegix is vrijgesteld van BTW op grond van de Kleineondernemersregeling (KOR). Op facturen wordt geen BTW vermeld.</p>
            <p className="mt-2">Bij niet-betaling is Lifegix gerechtigd de dienstverlening op te schorten tot betaling heeft plaatsgevonden.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Intellectueel eigendom</h2>
            <p>Na volledige betaling draagt Lifegix het eigendom van de geleverde website over aan de opdrachtgever. Lifegix behoudt het recht om het werk te vermelden als referentie in zijn portfolio, tenzij de opdrachtgever hier schriftelijk bezwaar tegen maakt.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Aansprakelijkheid</h2>
            <p>De aansprakelijkheid van Lifegix is beperkt tot het bedrag dat de opdrachtgever heeft betaald voor de betreffende opdracht. Lifegix is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.</p>
            <p className="mt-2">Lifegix is niet verantwoordelijk voor schade als gevolg van onjuiste of onvolledige informatie verstrekt door de opdrachtgever.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Opzegging en ontbinding</h2>
            <p>Het maandelijkse abonnement kan maandelijks worden opgezegd met een opzegtermijn van 1 kalendermaand. Opzegging dient schriftelijk te gebeuren via <a href="mailto:hanibal@lifegix.nl" className="text-violet-400 hover:underline">hanibal@lifegix.nl</a>.</p>
            <p className="mt-2">Lifegix kan de overeenkomst per direct ontbinden als de opdrachtgever zijn verplichtingen niet nakomt.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">9. Toepasselijk recht</h2>
            <p>Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Gelderland.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>Lifegix · Warnsveld · KvK 98120336<br />
            <a href="mailto:hanibal@lifegix.nl" className="text-violet-400 hover:underline">hanibal@lifegix.nl</a> · <a href="https://lifegix.nl" className="text-violet-400 hover:underline">lifegix.nl</a></p>
          </div>

        </section>
      </div>
    </main>
  );
}
