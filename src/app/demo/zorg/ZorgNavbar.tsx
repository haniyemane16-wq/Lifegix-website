"use client";
import { useState } from "react";

const C = {
  bg: "#ffffff", accent: "#1d6fa4", accentLicht: "#e8f4fd",
  tekst: "#0f172a", tekstMid: "#475569", border: "#e2e8f0",
};

const navLinks = [
  { href: "#behandelingen", label: "Behandelingen" },
  { href: "#vergoeding", label: "Vergoeding" },
  { href: "#team", label: "Team" },
  { href: "#afspraak", label: "Contact" },
];

export default function ZorgNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50" style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: C.accentLicht }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2v14M2 9h14" stroke={C.accent} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <span className="font-bold text-sm" style={{ color: C.tekst }}>FysioFit</span>
              <span className="text-sm" style={{ color: C.tekstMid }}> Zutphen</span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm" style={{ color: C.tekstMid, touchAction: "manipulation" }}>{l.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#afspraak" className="hidden md:block px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
              style={{ background: C.accent, touchAction: "manipulation" }}>
              Afspraak maken
            </a>

            {/* Hamburger */}
            <button onClick={() => setOpen((o) => !o)}
              className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 rounded-lg"
              style={{ background: "#f1f5f9", touchAction: "manipulation" }}
              aria-label="Menu">
              <span className="block mx-auto transition-transform duration-300" style={{ width: 18, height: 1.5, background: C.tekst, transform: open ? "rotate(45deg) translate(2px, 2px)" : "none" }} />
              <span className="block mx-auto transition-opacity duration-300" style={{ width: 18, height: 1.5, background: C.tekst, opacity: open ? 0 : 1 }} />
              <span className="block mx-auto transition-transform duration-300" style={{ width: 18, height: 1.5, background: C.tekst, transform: open ? "rotate(-45deg) translate(2px, -2px)" : "none" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — buiten header om iOS sticky/fixed bug te vermijden */}
      {open && (
        <div className="md:hidden fixed inset-x-0 z-40" style={{ top: 64, background: C.bg, borderBottom: `1px solid ${C.border}`, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-6 py-4 text-sm font-medium"
              style={{ color: C.tekstMid, borderBottom: `1px solid ${C.border}`, touchAction: "manipulation" }}>
              {l.label}
            </a>
          ))}
          <div className="p-4">
            <a href="#afspraak" onClick={() => setOpen(false)}
              className="block text-center py-3 rounded-lg text-sm font-semibold text-white"
              style={{ background: C.accent, touchAction: "manipulation" }}>
              Afspraak maken
            </a>
          </div>
        </div>
      )}
    </>
  );
}
