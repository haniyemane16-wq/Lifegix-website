import Link from "next/link";

const kolommen = [
  {
    titel: "Diensten",
    links: [
      { href: "/#diensten", label: "Website bouwen" },
      { href: "/#diensten", label: "AI automatisering" },
      { href: "/#prijzen", label: "Prijzen" },
      { href: "/bestellen", label: "Bestellen" },
    ],
  },
  {
    titel: "Ontdek",
    links: [
      { href: "/demo", label: "Demo's bekijken" },
      { href: "/waarom-lifegix", label: "Waarom LifeGix" },
      { href: "/roi", label: "ROI-calculator" },
      { href: "/#faq", label: "Veelgestelde vragen" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-white">Life</span><span className="text-violet-400">gix</span>
          </Link>
          <p className="mt-3 text-sm text-white/45 max-w-xs leading-relaxed">
            Websites en AI-automatisering voor lokale ondernemers. Persoonlijk, snel en voor een eerlijke prijs.
          </p>
          <div className="mt-5 flex flex-col gap-1.5 text-sm">
            <a href="tel:+31854005545" className="text-white/60 hover:text-white transition-colors">085 - 400 55 45</a>
            <a href="mailto:hanibal@lifegix.nl" className="text-white/60 hover:text-white transition-colors">hanibal@lifegix.nl</a>
            <span className="text-white/35">Warnsveld · KvK 98120336</span>
          </div>
        </div>
        {kolommen.map((k) => (
          <div key={k.titel}>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">{k.titel}</p>
            <ul className="space-y-2.5">
              {k.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© {new Date().getFullYear()} LifeGix · Vrijgesteld van BTW (KOR)</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacyverklaring</Link>
            <Link href="/voorwaarden" className="hover:text-white/60 transition-colors">Algemene voorwaarden</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
