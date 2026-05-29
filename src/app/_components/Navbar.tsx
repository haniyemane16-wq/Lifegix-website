"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#prijzen", label: "Prijzen" },
  { href: "/waarom-lifegix", label: "Waarom LifeGix" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const prefetchBestellen = () => router.prefetch("/bestellen");
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/95 sm:bg-[#0a0a0f]/80 sm:backdrop-blur-md [transform:translateZ(0)] [-webkit-backface-visibility:hidden]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-white">Life</span><span className="text-violet-400">gix</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          {navLinks.map((l) =>
            l.href.startsWith("/") ? (
              <Link key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
            ) : (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            )
          )}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/bestellen" onMouseEnter={prefetchBestellen} onTouchStart={prefetchBestellen} className="text-sm font-medium px-4 py-2 rounded-lg border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 transition-colors">
            Bestellen
          </Link>
          <a href="#contact" className="text-sm font-medium px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors">
            Gratis gesprek
          </a>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
          aria-label="Menu openen"
        >
          <span className={`block h-0.5 w-6 bg-white/70 transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white/70 transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white/70 transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0f]/98 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) =>
            l.href.startsWith("/") ? (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/70 hover:text-white transition-colors py-1">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/70 hover:text-white transition-colors py-1">
                {l.label}
              </a>
            )
          )}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <Link href="/bestellen" onClick={() => setOpen(false)} className="text-sm font-medium px-4 py-2.5 rounded-lg border border-violet-500/40 text-violet-300 text-center">
              Bestellen
            </Link>
            <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-medium px-4 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors text-center">
              Gratis gesprek
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
