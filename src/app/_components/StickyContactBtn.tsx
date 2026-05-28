"use client";
import { useState, useEffect, useRef } from "react";

export default function StickyContactBtn() {
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handler = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setVisible(window.scrollY > 500);
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={`fixed bottom-8 right-5 z-40 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      <a
        href="#contact"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-violet-600 hover:bg-violet-500 font-semibold text-sm shadow-lg transition-colors"
      >
        <span className="w-2 h-2 rounded-full bg-violet-300 animate-pulse" />
        Gratis gesprek →
      </a>
    </div>
  );
}
