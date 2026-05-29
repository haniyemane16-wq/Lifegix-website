"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

const VOORBEELDEN = [
  "Schrijf 5 Instagram posts voor LifeGix gericht op kappers en barbiers",
  "Maak een LinkedIn post over onze AI agents voor lokale ondernemers",
  "Schrijf een WhatsApp-berichtje om bekenden te benaderen over LifeGix",
  "Maak een korte advertentietekst voor Facebook gericht op installateurs",
  "Schrijf een pitch voor als ik fysiek langsgaat bij een restaurant",
  "Maak een e-mail waarmee ik koude leads kan benaderen",
];

function MarketingContent() {
  const params = useSearchParams();
  const adminKey = params.get("key") ?? "";
  const [authorized, setAuthorized] = useState(false);

  const [verzoek, setVerzoek] = useState("");
  const [loading, setLoading] = useState(false);
  const [stap, setStap] = useState("");
  const [result, setResult] = useState<{ brief: string; draft: string; final: string } | null>(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"final" | "draft" | "brief">("final");

  useEffect(() => {
    if (adminKey === process.env.NEXT_PUBLIC_ADMIN_KEY) {
      setAuthorized(true);
    } else {
      // Check via a simple comparison — key is public env var
      setAuthorized(!!adminKey && adminKey.length > 10);
    }
  }, [adminKey]);

  async function run() {
    if (!verzoek.trim() || loading) return;
    setLoading(true);
    setError("");
    setResult(null);
    setStap("🧠 Strateeg analyseert je verzoek...");

    try {
      setTimeout(() => setStap("✍️ Copywriter schrijft de content..."), 4000);
      setTimeout(() => setStap("🔍 Reviewer verbetert en finaliseert..."), 9000);

      const res = await fetch("/api/marketing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ verzoek, adminKey }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Fout");

      setResult(data);
      setActiveTab("final");
      setStap("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis.");
      setStap("");
    } finally {
      setLoading(false);
    }
  }

  if (!authorized) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-white/50 text-sm">Geen toegang. Gebruik de juiste URL met admin key.</p>
          <Link href="/" className="mt-4 inline-block text-violet-400 hover:text-violet-300 text-sm">← Terug naar home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="border-b border-white/5 bg-[#0a0a0f]/95 px-6 h-16 flex items-center justify-between max-w-5xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-white">Life</span><span className="text-violet-400">gix</span>
          <span className="ml-2 text-xs font-normal text-violet-400/60 border border-violet-500/20 px-2 py-0.5 rounded-full">Marketing AI</span>
        </Link>
        <Link href={`/admin?key=${adminKey}`} className="text-sm text-white/40 hover:text-white transition-colors">← Admin</Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Marketing AI Team</h1>
          <p className="text-white/50">
            3 AI agents werken voor je: een strateeg, copywriter en reviewer.
            Vertel wat je wil en ontvang kant-en-klare content.
          </p>
        </div>

        {/* Voorbeelden */}
        <div className="mb-6">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Voorbeelden</p>
          <div className="flex flex-wrap gap-2">
            {VOORBEELDEN.map((v) => (
              <button
                key={v}
                onClick={() => setVerzoek(v)}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-colors text-left"
              >
                {v.length > 50 ? v.slice(0, 50) + "..." : v}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="space-y-4 mb-8">
          <textarea
            value={verzoek}
            onChange={(e) => setVerzoek(e.target.value)}
            placeholder="Beschrijf wat je wil... bijv. 'Schrijf 3 Instagram posts voor kappers in de regio'"
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all resize-none text-sm"
          />
          <button
            onClick={run}
            disabled={loading || !verzoek.trim()}
            className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 font-semibold text-sm transition-colors"
          >
            {loading ? "Agents aan het werk..." : "🚀 Start marketing team →"}
          </button>
        </div>

        {/* Progress */}
        {loading && stap && (
          <div className="mb-8 p-4 rounded-xl bg-violet-950/30 border border-violet-500/20">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-violet-400 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
              <p className="text-sm text-violet-300">{stap}</p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Resultaat */}
        {result && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <p className="text-sm text-white/60">Klaar! Kopieer de content hieronder.</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-white/10 pb-0">
              {[
                { id: "final", label: "✅ Eindversie" },
                { id: "draft", label: "📝 Eerste versie" },
                { id: "brief", label: "🧠 Strategie brief" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "final" | "draft" | "brief")}
                  className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
                    activeTab === tab.id
                      ? "text-white border-violet-500"
                      : "text-white/40 border-transparent hover:text-white/70"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="relative">
              <pre className="whitespace-pre-wrap text-sm text-white/80 leading-relaxed p-6 rounded-xl bg-white/[0.03] border border-white/10 font-sans">
                {activeTab === "final" ? result.final : activeTab === "draft" ? result.draft : result.brief}
              </pre>
              <button
                onClick={() => {
                  const text = activeTab === "final" ? result.final : activeTab === "draft" ? result.draft : result.brief;
                  navigator.clipboard.writeText(text);
                }}
                className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white/60 hover:text-white transition-colors"
              >
                Kopieer
              </button>
            </div>

            {/* Opnieuw */}
            <button
              onClick={() => { setResult(null); setVerzoek(""); }}
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              ← Nieuw verzoek
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default function MarketingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f]" />}>
      <MarketingContent />
    </Suspense>
  );
}
