import Link from "next/link";

const LINKS = [
  { href: "/demo/kapsalon", label: "Home" },
  { href: "/demo/kapsalon/diensten", label: "Diensten" },
  { href: "/demo/kapsalon/over-ons", label: "Over ons" },
  { href: "/demo/kapsalon/faq", label: "Veelgestelde vragen" },
  { href: "/demo/kapsalon/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#1b1113]/95 backdrop-blur-md border-b border-[#e0a58c]/10">
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-4">
        <Link href="/demo/kapsalon" className="shrink-0">
          <span className="font-serif text-lg tracking-wide text-[#f3e9e4]">Kapsalon</span>{" "}
          <span className="font-serif text-lg tracking-wide text-[#e0a58c]">Davines</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase text-[#f3e9e4]/50 hover:text-[#e0a58c] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+31575570701"
          className="shrink-0 text-xs tracking-widest uppercase font-semibold px-5 py-2.5 rounded-full bg-[#e0a58c] text-[#1b1113] hover:bg-[#e8b8a2] transition-colors"
        >
          Bel voor afspraak
        </a>
      </div>
    </header>
  );
}
