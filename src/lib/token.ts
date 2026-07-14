import { createHmac } from "crypto";

// Vereiste env var: INTAKE_TOKEN_SECRET (willekeurige string, min. 32 tekens).
// In productie MOET deze gezet zijn; anders zou een bekende fallback-secret
// het mogelijk maken tokens te vervalsen. Buiten productie is een dev-fallback
// toegestaan zodat lokaal draaien geen config vereist.
const SECRET = process.env.INTAKE_TOKEN_SECRET ?? (() => {
  if (process.env.NODE_ENV === "production") {
    throw new Error("INTAKE_TOKEN_SECRET ontbreekt in productie");
  }
  return "dev-secret-lifegix-change-in-production";
})();

export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  iat: number;
  exp: number;
}

export function createLeadToken(
  data: Omit<LeadPayload, "iat" | "exp">
): string {
  const now = Math.floor(Date.now() / 1000);
  const payload: LeadPayload = {
    ...data,
    iat: now,
    exp: now + 7 * 24 * 3600, // 7 dagen geldig
  };
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = createHmac("sha256", SECRET)
    .update(encoded)
    .digest("base64url");
  return `${encoded}.${sig}`;
}

export function verifyLeadToken(token: string): LeadPayload | null {
  try {
    const dot = token.lastIndexOf(".");
    if (dot === -1) return null;
    const encoded = token.slice(0, dot);
    const sig = token.slice(dot + 1);
    const expected = createHmac("sha256", SECRET)
      .update(encoded)
      .digest("base64url");
    if (expected !== sig) return null;
    const payload: LeadPayload = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf8")
    );
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}
