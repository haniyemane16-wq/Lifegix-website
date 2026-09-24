import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO_EMAIL = "lifegix.contact@gmail.com";
const MAX_BESTANDEN = 2;
const MAX_BESTAND_BYTES = 1.5 * 1024 * 1024;
const TOEGESTANE_TYPES = ["image/", "application/pdf"];

type Bijlage = { filename: string; contentType: string; content: string };

function isGeldigeBijlage(b: unknown): b is Bijlage {
  if (!b || typeof b !== "object") return false;
  const { filename, contentType, content } = b as Record<string, unknown>;
  if (typeof filename !== "string" || typeof contentType !== "string" || typeof content !== "string") return false;
  if (!TOEGESTANE_TYPES.some((t) => contentType.startsWith(t))) return false;
  // base64 → ruwe bytes: 4 tekens ≈ 3 bytes
  const geschatteBytes = (content.length * 3) / 4;
  return geschatteBytes <= MAX_BESTAND_BYTES;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  const {
    naam, email, bedrijf, adres, kvk,
    beschrijving, diensten, doelgroep,
    heeftLogo, beeldmateriaal,
    domeinKeuze, domein,
    faqOpeningstijden, faqLocatie, faqAfspraak, faqBetalen, faqOverig,
    stijl, voorbeelden, opmerkingen,
  } = body as Record<string, string>;

  if (!naam || !email || !bedrijf || !beschrijving || !diensten) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
  }

  // Bijlagen server-side opnieuw valideren — de client-check is alleen voor UX
  const ruweBijlagen = Array.isArray(body.bestanden) ? body.bestanden : [];
  const bijlagen = ruweBijlagen.filter(isGeldigeBijlage).slice(0, MAX_BESTANDEN);

  // 1. Bevestiging naar klant — geen offerte/CTA, ze zijn al klant
  try {
    await resend.emails.send({
      from: "Hanibal via Lifegix <hanibal@lifegix.nl>",
      to: email,
      replyTo: TO_EMAIL,
      subject: `Bedankt, ${naam} — je gegevens zijn binnen`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0f; color: #ededed; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin-bottom: 8px;">Bedankt, ${escapeHtml(naam)}!</h2>
          <p style="color: #9ca3af; line-height:1.6;">
            Je gegevens voor <strong style="color:#ededed;">${escapeHtml(bedrijf)}</strong> zijn binnen. Ik ga hiermee aan de slag
            en neem persoonlijk contact op zodra de eerste versie van je website klaar is.
          </p>
          <p style="color: #9ca3af; font-size:14px; margin-top:24px;">
            Vragen of nog iets aan te vullen? Stuur gerust een mail naar
            <a href="mailto:${TO_EMAIL}" style="color:#a78bfa;">${TO_EMAIL}</a>.
          </p>
          <p style="margin-top: 24px; font-size: 12px; color: #4b5563;">Lifegix · Warnsveld · KvK 98120336</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Onboarding bevestigingsmail error:", err);
    return NextResponse.json({ error: "Verzenden mislukt. Probeer het opnieuw." }, { status: 500 });
  }

  // 2. Volledig overzicht naar Hanibal
  try {
    await resend.emails.send({
      from: "Lifegix Onboarding <hanibal@lifegix.nl>",
      to: TO_EMAIL,
      subject: `Onboarding ingevuld — ${escapeHtml(bedrijf)} (${escapeHtml(naam)})`,
      attachments: bijlagen.map((b) => ({ filename: b.filename, content: b.content })),
      html: `
        <div style="font-family:sans-serif; max-width:600px; margin:0 auto; padding:24px; background:#0a0a0f; color:#ededed; border-radius:12px;">
          <h2 style="color:#a78bfa; margin-bottom:24px;">Nieuwe onboarding-informatie</h2>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#9ca3af;width:130px;">Naam</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(naam)}</td></tr>
            <tr><td style="padding:8px 0;color:#9ca3af;">E-mail</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#a78bfa;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#9ca3af;">Bedrijf</td><td style="padding:8px 0;">${escapeHtml(bedrijf)}</td></tr>
          </table>
          ${[
            ["Adres", adres],
            ["KvK-nummer", kvk],
            ["Beschrijving", beschrijving],
            ["Diensten & prijzen", diensten],
            ["Doelgroep", doelgroep],
            ["Heeft logo", heeftLogo],
            ["Bijgevoegde bestanden", bijlagen.map((b) => b.filename).join(", ")],
            ["Beeldmateriaal (link/opmerking)", beeldmateriaal],
            ["Domeinnaam", domeinKeuze === "bestaand" ? `Bestaand: ${domein}` : domeinKeuze === "nieuw" ? "Nieuw domein regelen" : ""],
            ["FAQ — Openingstijden", faqOpeningstijden],
            ["FAQ — Locatie / parkeren", faqLocatie],
            ["FAQ — Afspraak nodig?", faqAfspraak],
            ["FAQ — Betaalmethoden", faqBetalen],
            ["FAQ — Overige vragen", faqOverig],
            ["Gewenste stijl", stijl],
            ["Voorbeelden", voorbeelden],
            ["Opmerkingen", opmerkingen],
          ].filter(([, v]) => v).map(([label, value]) => `
            <div style="margin-top:16px; padding:12px; background:#1a1a2e; border-radius:8px;">
              <p style="color:#9ca3af;margin:0 0 4px 0;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;">${label}</p>
              <p style="margin:0;line-height:1.6;">${escapeHtml(String(value)).replace(/\n/g, "<br>")}</p>
            </div>
          `).join("")}
        </div>
      `,
    });
  } catch (err) {
    console.error("Onboarding brief naar Hanibal error:", err);
  }

  return NextResponse.json({ success: true });
}
