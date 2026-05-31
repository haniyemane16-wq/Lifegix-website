"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#over-ons", label: "Over ons" },
  { href: "#reserveren", label: "Contact" },
];

export default function RestaurantNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40" style={{ background: "rgba(15,10,6,0.98)", borderBottom: "1px solid rgba(201,169,110,0.12)" }}>
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="#" style={{ touchAction: "manipulation", textDecoration: "none" }} className="shrink-0">
          <div style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            <span style={{ fontSize: "1.1rem", fontWeight: 400, letterSpacing: "0.12em", color: "#e8ddd0", textTransform: "uppercase" }}>
              De Waag
            </span>
            <span style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.22em", color: "#c9a96e", textTransform: "uppercase", marginTop: "-2px" }}>
              Zutphen · Est. 2004
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,221,208,0.5)", textDecoration: "none", touchAction: "manipulation" }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#reserveren" className="hidden md:block" style={{ touchAction: "manipulation", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0f0a06", background: "#c9a96e", padding: "10px 22px", fontWeight: 600, textDecoration: "none" }}>
            Reserveer
          </a>

          {/* Hamburger */}
          <button onClick={() => setOpen((o) => !o)} className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8" style={{ touchAction: "manipulation" }} aria-label="Menu">
            <span style={{ display: "block", height: "1px", background: "#c9a96e", transition: "transform 0.3s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ display: "block", height: "1px", background: "#c9a96e", transition: "opacity 0.3s", opacity: open ? 0 : 1 }} />
            <span style={{ display: "block", height: "1px", background: "#c9a96e", transition: "transform 0.3s", transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden" style={{ background: "#0f0a06", borderTop: "1px solid rgba(201,169,110,0.2)", padding: "8px 0 20px" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "14px 24px", fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,221,208,0.8)", textDecoration: "none", borderBottom: "1px solid rgba(201,169,110,0.08)", touchAction: "manipulation" }}>
              {l.label}
            </a>
          ))}
          <div style={{ padding: "16px 24px 0" }}>
            <a href="#reserveren" onClick={() => setOpen(false)}
              style={{ display: "block", textAlign: "center", padding: "14px", background: "#c9a96e", color: "#0f0a06", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", touchAction: "manipulation" }}>
              Reserveer tafel
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
