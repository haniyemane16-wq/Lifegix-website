import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyLeadToken } from "@/lib/token";

export const dynamic = "force-dynamic";

const TO_EMAIL = "lifegix.contact@gmail.com";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const SERVICE_LABEL: Record<string, string> = {
  website: "Website bouwen",
  ai: "AI Automatisering",
  both: "Website + AI Automatisering",
};

// Offerte HTML op basis van gekozen dienst
function buildOfferteHtml(
  naam: string,
  bedrijf: string,
  service: string,
  samenvatting: string,
  origin: string
): string {
  const geldigTot = new Date(Date.now() + 7 * 24 * 3600 * 1000).toLocaleDateString("nl-NL", {
    day: "numeric", month: "long", year: "numeric",
  });

  const prijsOpties: Record<string, string> = {
    website: `
      <tr><td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#9ca3af;">Website Starter</td><td style="padding:10px 0;border-bottom:1px solid #1f2937;text-align:right;font-weight:600;">€500 eenmalig + €50/mnd</td></tr>
      <tr><td style="padding:10px 0;color:#9ca3af;">Website Business</td><td style="padding:10px 0;text-align:right;font-weight:600;">€1.000 eenmalig + €75/mnd</td></tr>
    `,
    ai: `
      <tr><td style="padding:10px 0;color:#9ca3af;">AI Agent</td><td style="padding:10px 0;text-align:right;font-weight:600;">€300 eenmalig + €75/mnd</td></tr>
    `,
    both: `
      <tr><td style="padding:10px 0;border-bottom:1px solid #1f2937;color:#9ca3af;">Website Starter + AI Agent</td><td style="padding:10px 0;border-bottom:1px solid #1f2937;text-align:right;font-weight:600;">€750 eenmalig + €110/mnd</td></tr>
      <tr><td style="padding:10px 0;color:#9ca3af;">Website Business + AI Agent</td><td style="padding:10px 0;text-align:right;font-weight:600;">€1.200 eenmalig + €135/mnd</td></tr>
    `,
  };

  const prijzen = prijsOpties[service] ?? prijsOpties["website"];

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #ededed; border-radius: 12px; overflow: hidden;">
      <!-- Header -->
      <div style="padding: 32px 32px 24px; background: linear-gradient(135deg, #1a0a2e, #0a0a0f); border-bottom: 1px solid #1f2937;">
        <p style="margin:0 0 4px 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
          <span style="color:#fff;">Life</span><span style="color:#a78bfa;">gix</span>
        </p>
        <p style="margin:0; color:#6d28d9; font-size:13px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase;">Voorlopige Offerte</p>
      </div>

      <!-- Body -->
      <div style="padding: 32px;">
        <h2 style="color:#fff; font-size:20px; margin: 0 0 8px 0;">Beste ${escapeHtml(naam)},</h2>
        <p style="color:#9ca3af; margin: 0 0 28px 0; line-height:1.6;">
          Bedankt voor je projectformulier! Op basis van de informatie die je deelde heb ik onderstaande offerte voor je samengesteld.
          Ik neem ook persoonlijk contact op om alles toe te lichten.
        </p>

        <!-- Project samenvatting -->
        <div style="padding:16px; background:#1a1a2e; border-radius:8px; border-left:3px solid #7c3aed; margin-bottom:28px;">
          <p style="color:#9ca3af; margin:0 0 6px 0; font-size:11px; text-transform:uppercase; letter-spacing:0.08em;">Jouw project</p>
          <p style="margin:0; font-weight:600;">${escapeHtml(bedrijf)}</p>
          <p style="margin:6px 0 0 0; color:#9ca3af; font-size:14px; line-height:1.5;">${escapeHtml(samenvatting)}</p>
        </div>

        <!-- Prijstabel -->
        <h3 style="color:#fff; font-size:16px; margin:0 0 12px 0;">Investering</h3>
        <table style="width:100%; border-collapse:collapse; margin-bottom:8px;">
          ${prijzen}
        </table>
        <p style="color:#6b7280; font-size:12px; margin:0 0 28px 0;">Alle prijzen zijn inclusief btw. Definitieve prijs na persoonlijk gesprek.</p>

        <!-- Wat is inbegrepen -->
        <h3 style="color:#fff; font-size:16px; margin:0 0 12px 0;">Wat is inbegrepen?</h3>
        <ul style="margin:0 0 28px 0; padding:0; list-style:none;">
          ${[
            "Op maat ontworpen en gebouwd",
            "Mobielvriendelijk & snel",
            "SEO-basis geoptimaliseerd",
            "Maandelijkse updates & support",
            "SSL-beveiliging inbegrepen",
            "1–2 weken doorlooptijd",
          ].map(item => `<li style="padding:6px 0; color:#d1d5db; font-size:14px;">✓ &nbsp;${item}</li>`).join("")}
        </ul>

        <!-- CTA -->
        <div style="text-align:center; margin-bottom:28px;">
          <a href="${origin}/bestellen"
             style="display:inline-block; padding:14px 32px; background:#7c3aed; color:#fff; text-decoration:none; border-radius:10px; font-weight:700; font-size:15px;">
            Direct bestellen →
          </a>
        </div>

        <p style="color:#6b7280; font-size:13px; text-align:center; margin:0 0 28px 0;">
          Of neem contact op via <a href="mailto:${TO_EMAIL}" style="color:#a78bfa;">${TO_EMAIL}</a>
        </p>
      </div>

      <!-- Footer -->
      <div style="padding:20px 32px; background:#0d0d17; border-top:1px solid #1f2937;">
        <p style="margin:0 0 4px 0; font-size:12px; color:#4b5563;">
          Offerte geldig tot: <strong style="color:#9ca3af;">${geldigTot}</strong>
        </p>
        <p style="margin:0; font-size:12px; color:#4b5563;">
          Lifegix · Warnsveld · <a href="https://lifegix.nl" style="color:#6d28d9;">lifegix.nl</a>
        </p>
      </div>
    </div>
  `;
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
    token,
    name,
    email,
    bedrijf,
    beschrijving,
    doelgroep,
    doel,
    functies,
    deadline,
    heeftLogo,
    stijl,
    voorbeelden,
    opmerkingen,
  } = body as Record<string, string | string[]>;

  if (!name || !email || !bedrijf || !beschrijving || !doel) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
  }

  // Verifieer token (optioneel — intake kan ook zonder token worden ingevuld)
  let service = "";
  if (token && typeof token === "string") {
    const lead = verifyLeadToken(token);
    if (lead) service = lead.service ?? "";
  }

  const origin =
    req.headers.get("origin") ??
    process.env.NEXT_PUBLIC_BASE_URL ??
    "https://lifegix.nl";

  const functiesLijst = Array.isArray(functies) ? functies.join(", ") : "";
  const samenvatting = `${beschrijving}${doelgroep ? ` · Doelgroep: ${doelgroep}` : ""}`;

  // 1. Offerte naar klant
  try {
    await resend.emails.send({
      from: "Hanibal via Lifegix <hanibal@lifegix.nl>",
      to: typeof email === "string" ? email : "",
      replyTo: TO_EMAIL,
      subject: `Je offerte van Lifegix — ${escapeHtml(typeof bedrijf === "string" ? bedrijf : "")}`,
      html: buildOfferteHtml(
        typeof name === "string" ? name : "",
        typeof bedrijf === "string" ? bedrijf : "",
        service,
        samenvatting,
        origin
      ),
    });
  } catch (err) {
    console.error("Offerte email error:", err);
    return NextResponse.json({ error: "Verzenden mislukt. Probeer het opnieuw." }, { status: 500 });
  }

  // 2. Volledige brief naar Hanibal
  try {
    await resend.emails.send({
      from: "Lifegix Intake <hanibal@lifegix.nl>",
      to: TO_EMAIL,
      subject: `Nieuwe intake — ${escapeHtml(typeof bedrijf === "string" ? bedrijf : "")} (${escapeHtml(typeof name === "string" ? name : "")})`,
      html: `
        <div style="font-family:sans-serif; max-width:600px; margin:0 auto; padding:24px; background:#0a0a0f; color:#ededed; border-radius:12px;">
          <h2 style="color:#a78bfa; margin-bottom:24px;">Nieuwe intake ontvangen</h2>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#9ca3af;width:130px;">Naam</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(typeof name === "string" ? name : "")}</td></tr>
            <tr><td style="padding:8px 0;color:#9ca3af;">E-mail</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(typeof email === "string" ? email : "")}" style="color:#a78bfa;">${escapeHtml(typeof email === "string" ? email : "")}</a></td></tr>
            <tr><td style="padding:8px 0;color:#9ca3af;">Bedrijf</td><td style="padding:8px 0;">${escapeHtml(typeof bedrijf === "string" ? bedrijf : "")}</td></tr>
            <tr><td style="padding:8px 0;color:#9ca3af;">Dienst</td><td style="padding:8px 0;">${escapeHtml(SERVICE_LABEL[service] ?? "Onbekend")}</td></tr>
            <tr><td style="padding:8px 0;color:#9ca3af;">Deadline</td><td style="padding:8px 0;">${escapeHtml(typeof deadline === "string" ? deadline : "Niet opgegeven")}</td></tr>
          </table>
          ${[
            ["Beschrijving", beschrijving],
            ["Doelgroep", doelgroep],
            ["Doel", doel],
            ["Functies", functiesLijst],
            ["Logo", heeftLogo],
            ["Stijl", stijl],
            ["Voorbeelden", voorbeelden],
            ["Opmerkingen", opmerkingen],
          ].filter(([, v]) => v).map(([label, value]) => `
            <div style="margin-top:16px; padding:12px; background:#1a1a2e; border-radius:8px;">
              <p style="color:#9ca3af;margin:0 0 4px 0;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;">${label}</p>
              <p style="margin:0;line-height:1.6;">${escapeHtml(String(value)).replace(/\n/g, "<br>")}</p>
            </div>
          `).join("")}
          <p style="margin-top:24px;font-size:12px;color:#4b5563;">Offerte is automatisch verstuurd naar de klant.</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Brief naar Hanibal error:", err);
  }

  // 3. n8n webhook
  try {
    await fetch(
      "https://hanibal-agent.app.n8n.cloud/webhook/lifegix-intake",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "intake",
          name, email, bedrijf, beschrijving, doelgroep,
          doel, functies: functiesLijst, deadline,
          heeftLogo, stijl, voorbeelden, opmerkingen,
          service,
        }),
      }
    );
  } catch (err) {
    console.error("n8n intake webhook error:", err);
  }

  return NextResponse.json({ success: true });
}
