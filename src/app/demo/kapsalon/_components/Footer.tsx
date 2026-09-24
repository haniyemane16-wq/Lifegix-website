import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e0a58c]/10 bg-[#150d0f] py-14 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-lg text-[#f3e9e4] mb-3">
            Kapsalon <span className="text-[#e0a58c]">Davines</span>
          </p>
          <p className="text-sm text-[#f3e9e4]/40 leading-relaxed">
            Lokale kapperszaak in Warnsveld. Knippen, kleuren en stylen voor
            dames en heren, met persoonlijk advies.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-[#e0a58c] mb-4">Adres &amp; openingstijden</h4>
          <p className="text-sm text-[#f3e9e4]/50 leading-relaxed">
            Dreiumme 11-13<br />
            7232 CN Warnsveld
          </p>
          <p className="text-sm text-[#f3e9e4]/50 mt-3 leading-relaxed">
            Di–vr 9:00–18:00 · Za 9:00–16:00<br />
            Ma &amp; zo gesloten
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-[#e0a58c] mb-4">Contact</h4>
          <ul className="flex flex-col gap-2 text-sm text-[#f3e9e4]/50">
            <li>
              <a href="tel:+31575570701" className="hover:text-[#e0a58c] transition-colors">0575 – 57 07 01</a>
            </li>
            <li>Afspraak verplicht</li>
            <li>Pin en contant — geen creditcard</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#e0a58c]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#f3e9e4]/25">
        <span>© {new Date().getFullYear()} Kapsalon Davines</span>
        <span>
          Website door{" "}
          <Link href="/" className="text-[#e0a58c]/70 hover:text-[#e0a58c] font-semibold">
            Lifegix
          </Link>
        </span>
      </div>
    </footer>
  );
}
