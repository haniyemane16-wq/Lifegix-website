import { timingSafeEqual } from "crypto";

// Server-only. Deze module mag NOOIT in een client component ("use client")
// geïmporteerd worden, anders lekt de sleutel naar de browser-bundle.
//
// De sleutel komt UITSLUITEND uit de env var ADMIN_KEY (Vercel → Settings →
// Environment Variables). Er staat bewust geen fallback in de code: deze repo
// is publiek, dus een hardgecodeerde sleutel zou meteen openbaar zijn.
// Ontbreekt de env var, dan wordt élke toegang geweigerd (fail-closed).

/**
 * Vergelijkt de opgegeven sleutel timing-safe met de admin-sleutel uit de
 * omgeving. Retourneert false bij ontbrekende env var, ontbrekende sleutel of
 * niet-matchende sleutel.
 */
export function isValidAdminKey(key: string | null | undefined): boolean {
  const expected = process.env.ADMIN_KEY;
  if (!expected || !key) return false;
  const a = Buffer.from(key);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
