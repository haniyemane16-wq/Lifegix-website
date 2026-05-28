"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const LINKS = [
  { label: "n8n Dashboard", url: "https://hanibal-agent.app.n8n.cloud", icon: "⚡", desc: "Workflows & automatisering" },
  { label: "Resend", url: "https://resend.com/emails", icon: "✉️", desc: "Verstuurde e-mails" },
  { label: "Mollie", url: "https://my.mollie.com/dashboard", icon: "💳", desc: "Betalingen & orders" },
  { label: "Vercel", url: "https://vercel.com/dashboard", icon: "▲", desc: "Deployments & logs" },
  { label: "GitHub", url: "https://github.com/haniyemane16-wq/Lifegix-website", icon: "🐙", desc: "Code repository" },
];

const ENV_VARS = [
  { key: "RESEND_API_KEY", desc: "E-mails versturen via Resend", docs: "https://resend.com/api-keys" },
  { key: "MOLLIE_API_KEY", desc: "Betalingen aanmaken via Mollie", docs: "https://my.mollie.com/dashboard/developers/api-keys" },
  { key: "INTAKE_TOKEN_SECRET", desc: "Token signing voor intake links (willekeurige string, min. 32 tekens)", docs: null },
  { key: "NEXT_PUBLIC_BASE_URL", desc: "Basis URL (bijv. https://lifegix.nl)", docs: null },
  { key: "ADMIN_KEY", desc: "Wachtwoord voor dit admin paneel", docs: null },
];

const FLOW_STEPS = [
  { nr: "01", title: "Klant vult contactformulier in", desc: "Op lifegix.nl/#contact" },
  { nr: "02", title: "Auto-reply met intake link", desc: "Klant ontvangt direct een e-mail met link naar het projectformulier" },
  { nr: "03", title: "Klant vult intake in", desc: "Op lifegix.nl/intake?token=... (7 dagen geldig)" },
  { nr: "04", title: "Automatische offerte verstuurd", desc: "Klant ontvangt meteen een gepersonaliseerde offerte per e-mail" },
  { nr: "05", title: "Jij ontvangt de volledige brief", desc: "Met alle projectdetails en de offerte die verstuurd is" },
  { nr: "06", title: "Klant bestelt via /bestellen", desc: "Betaling via Mollie, bevestiging via webhook" },
];

function AdminInner() {
  const params = useSearchParams();
  const key = params.get("key");
  const adminKey = process.env.NEXT_PUBLIC_ADMIN_KEY; // wordt leeg als niet ingesteld

  // Check key — als NEXT_PUBLIC_ADMIN_KEY niet is ingesteld, altijd toegang
  const authorized = !adminKey || key === adminKey;

  if (!authorized) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-6xl mb-6">🔒</p>
          <h1 className="text-2xl font-bold text-white mb-3">Geen toegang</h1>
          <p className="text-white/50 text-sm">Voeg <code className="bg-white/10 px-1 rounded">?key=JOUW_ADMIN_KEY</code> toe aan de URL.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-violet-600/8 blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-white">Life</span><span className="text-violet-400">gix</span>
            <span className="ml-2 text-xs font-normal text-violet-400/60 border border-violet-500/20 px-2 py-0.5 rounded-full">Admin</span>
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">← Terug naar site</Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative space-y-12">

        {/* Header */}
        <div>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Controlepaneel</p>
          <h1 className="text-3xl font-bold text-white">Lifegix Admin</h1>
          <p className="mt-2 text-white/40 text-sm">Overzicht van je systeem, links en configuratie.</p>
        </div>

        {/* Snelkoppelingen */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4">Snelkoppelingen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LINKS.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet-500/40 hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{l.icon}</span>
                  <span className="font-semibold text-white group-hover:text-violet-300 transition-colors">{l.label}</span>
                  <svg className="w-3 h-3 text-white/20 group-hover:text-violet-400 ml-auto transition-colors" fill="none" viewBox="0 0 14 14">
                    <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-xs text-white/40">{l.desc}</p>
              </a>
            ))}
            <a href="/admin/n8n-workflow.json" download="lifegix-n8n-workflow.json"
              className="group p-5 rounded-2xl bg-violet-950/30 border border-violet-500/20 hover:border-violet-500/50 hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">📦</span>
                <span className="font-semibold text-violet-300">n8n Workflow</span>
                <svg className="w-3 h-3 text-violet-400/40 group-hover:text-violet-400 ml-auto transition-colors" fill="none" viewBox="0 0 14 14">
                  <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-xs text-violet-400/60">Download &amp; importeer in n8n</p>
            </a>
          </div>
        </section>

        {/* Automatiseringsflow */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4">Hoe werkt de automatisering?</h2>
          <div className="space-y-3">
            {FLOW_STEPS.map((s, i) => (
              <div key={s.nr} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400 flex-shrink-0">
                  {s.nr}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{s.title}</p>
                  <p className="text-xs text-white/40 mt-0.5">{s.desc}</p>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <div className="absolute" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Env vars checklist */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4">Omgevingsvariabelen</h2>
          <p className="text-white/40 text-sm mb-4">Stel deze in via <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">Vercel → Settings → Environment Variables</a>.</p>
          <div className="space-y-3">
            {ENV_VARS.map((v) => (
              <div key={v.key} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <code className="text-xs bg-violet-500/10 text-violet-300 px-2 py-1 rounded font-mono flex-shrink-0 mt-0.5">{v.key}</code>
                <div className="flex-1">
                  <p className="text-sm text-white/60">{v.desc}</p>
                </div>
                {v.docs && (
                  <a href={v.docs} target="_blank" rel="noopener noreferrer" className="text-xs text-violet-400/60 hover:text-violet-400 flex-shrink-0">docs →</a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* n8n setup */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4">n8n Workflow instellen</h2>
          <ol className="space-y-3 text-sm text-white/60">
            {[
              'Download het workflow bestand via de knop hierboven ("n8n Workflow")',
              'Ga naar je n8n dashboard → "Add workflow" → "Import from file"',
              'Stel de webhook URL in als: https://lifegix.nl/api/intake (voor intake events)',
              'Activeer de workflow',
              'Test door het contactformulier in te vullen op lifegix.nl',
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

      </div>
    </main>
  );
}

export default function AdminPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-violet-500/30 border-t-violet-500 animate-spin" />
      </main>
    }>
      <AdminInner />
    </Suspense>
  );
}
