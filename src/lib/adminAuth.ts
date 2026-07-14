import { timingSafeEqual } from "crypto";

// Server-only. Deze module mag NOOIT in een client component ("use client")
// geïmporteerd worden, anders lekt de sleutel naar de browser-bundle.
//
// De sleutel komt bij voorkeur uit de env var ADMIN_KEY (instelbaar in Vercel,
// zo kun je hem roteren zonder deploy). De fallback is er alleen zodat het
// paneel blijft werken als de env var (nog) niet gezet is.
const ADMIN_KEY = process.env.ADMIN_KEY ?? "k7Rp2Xq9Lm4Vn8Ws3Yt6Bd1Hf5Jc0Za";

/**
 * Vergelijkt de opgegeven sleutel timing-safe met de admin-sleutel.
 * Retourneert false bij ontbrekende of niet-matchende sleutel.
 */
export function isValidAdminKey(key: string | null | undefined): boolean {
  if (!key) return false;
  const a = Buffer.from(key);
  const b = Buffer.from(ADMIN_KEY);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
