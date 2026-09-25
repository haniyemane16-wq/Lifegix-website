"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/demo/kapsalon", label: "Home" },
  { href: "/demo/kapsalon/diensten", label: "Diensten" },
  { href: "/demo/kapsalon/over-ons", label: "Over ons" },
  { href: "/demo/kapsalon/faq", label: "Veelgestelde vragen" },
  { href: "/demo/kapsalon/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#1b1113]/95 backdrop-blur-md border-b border-[#e0a58c]/10">
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-4">
        <Link href="/demo/kapsalon" className="shrink-0" onClick={() => setOpen(false)}>
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

        <div className="flex items-center gap-3">
          <a
            href="tel:+31575570701"
            className="hidden sm:inline-block shrink-0 text-xs tracking-widest uppercase font-semibold px-5 py-2.5 rounded-full bg-[#e0a58c] text-[#1b1113] hover:bg-[#e8b8a2] transition-colors"
          >
            Bel voor afspraak
          </a>

          {/* Hamburger — alleen zichtbaar onder md */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden shrink-0 relative w-9 h-9"
          >
            <span
              className="absolute left-1/2 top-1/2 w-5 h-px bg-[#f3e9e4] transition-transform duration-200"
              style={{ transform: open ? "translate(-50%, -50%) rotate(45deg)" : "translate(-50%, -50%) translateY(-6px)" }}
            />
            <span
              className="absolute left-1/2 top-1/2 w-5 h-px bg-[#f3e9e4] transition-opacity duration-200"
              style={{ transform: "translate(-50%, -50%)", opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-1/2 top-1/2 w-5 h-px bg-[#f3e9e4] transition-transform duration-200"
              style={{ transform: open ? "translate(-50%, -50%) rotate(-45deg)" : "translate(-50%, -50%) translateY(6px)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobiel uitklapmenu */}
      {open && (
        <div className="md:hidden border-t border-[#e0a58c]/10 bg-[#1b1113] px-6 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-[#f3e9e4]/70 hover:text-[#e0a58c] transition-colors border-b border-[#e0a58c]/5 last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+31575570701"
            onClick={() => setOpen(false)}
            className="mt-3 text-center text-xs tracking-widest uppercase font-semibold px-5 py-3 rounded-full bg-[#e0a58c] text-[#1b1113]"
          >
            Bel voor afspraak
          </a>
        </div>
      )}
    </header>
  );
}
