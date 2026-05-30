"use client";
import { useState } from "react";
import Link from "next/link";
import { clientConfig } from "@/config/client.config";

const navLinks = [
  { href: "#behandelingen", label: "Behandelingen" },
  { href: "#team", label: "Team" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Afspraak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handlePrefetch = () => {
    // Prefetch op hover/touch
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/95 sm:bg-[#0a0a0f]/80 sm:backdrop-blur-md"
      style={{ transform: "translateZ(0)", WebkitBackfaceVisibility: "hidden" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-base sm:text-lg font-bold tracking-tight hover:opacity-80 transition-opacity leading-tight"
          style={{ touchAction: "manipulation" }}
        >
          <span style={{ color: clientConfig.kleur.primary }}>
            {clientConfig.naam.split(" ")[0]}
          </span>
          <span className="text-white">
            {" "}{clientConfig.naam.split(" ").slice(1).join(" ")}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
              style={{ touchAction: "manipulation" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${clientConfig.telefoon}`}
            className="text-sm font-medium px-4 py-2 rounded-lg border text-white/70 hover:text-white transition-colors"
            style={{
              borderColor: `${clientConfig.kleur.primary}44`,
              touchAction: "manipulation",
            }}
          >
            {clientConfig.telefoon}
          </a>
          <a
            href="#contact"
            onMouseEnter={handlePrefetch}
            onTouchStart={handlePrefetch}
            className="text-sm font-medium px-4 py-2 rounded-lg text-white transition-colors"
            style={{
              backgroundColor: clientConfig.kleur.primary,
              touchAction: "manipulation",
            }}
          >
            Afspraak maken
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
          aria-label="Menu openen"
          style={{ touchAction: "manipulation" }}
        >
          <span
            className={`block h-0.5 w-6 bg-white/70 transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white/70 transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white/70 transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0f]/98 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-white transition-colors py-1"
              style={{ touchAction: "manipulation" }}
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <a
              href={`tel:${clientConfig.telefoon}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium px-4 py-2.5 rounded-lg border text-center text-white/70"
              style={{
                borderColor: `${clientConfig.kleur.primary}44`,
                touchAction: "manipulation",
              }}
            >
              {clientConfig.telefoon}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm font-medium px-4 py-2.5 rounded-lg text-center text-white"
              style={{
                backgroundColor: clientConfig.kleur.primary,
                touchAction: "manipulation",
              }}
            >
              Afspraak maken
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
