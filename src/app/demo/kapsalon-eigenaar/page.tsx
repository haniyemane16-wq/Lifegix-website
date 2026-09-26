"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type OpenVraag = { id: string; vraag: string; gesteldOp: string | null };
type BeantwoordeVraag = { id: string; vraag: string; antwoord: string; beantwoordOp: string | null };

function formatDatum(iso: string | null) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("nl-NL", { day: "numeric", month: "short" }).format(new Date(iso));
}

function VragenPortaal({ adminKey }: { adminKey: string }) {
  const [open, setOpen] = useState<OpenVraag[] | null>(null);
  const [beantwoord, setBeantwoord] = useState<BeantwoordeVraag[] | null>(null);
  const [antwoorden, setAntwoorden] = useState<Record<string, string>>({});
  const [versturend, setVersturend] = useState<Set<string>>(new Set());
  const [foutmelding, setFoutmelding] = useState("");

  async function laden() {
    setFoutmelding("");
    try {
      const res = await fetch("/api/admin/kapsalon-vragen", { headers: { "x-admin-key": adminKey } });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Onbekende fout");
      setOpen(data.open);
      setBeantwoord(data.beantwoord);
    } catch (err) {
      setFoutmelding(err instanceof Error ? err.message : "Netwerkfout");
    }
  }

  useEffect(() => {
    laden();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function verstuurAntwoord(id: string) {
    const antwoord = antwoorden[id]?.trim();
    if (!antwoord) return;

    setVersturend((prev) => new Set(prev).add(id));
    try {
      const res = await fetch("/api/admin/kapsalon-vragen", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify({ pageId: id, antwoord }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Onbekende fout");
      setAntwoorden((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
      await laden();
    } catch (err) {
      setFoutmelding(err instanceof Error ? err.message : "Opslaan mislukt");
    } finally {
      setVersturend((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.3em] uppercase text-[#e0a58c] mb-3">Kapsalon Davines</p>
      <h1 className="font-serif text-3xl text-[#f3e9e4] mb-2">Vragen van de chatbot</h1>
      <p className="text-[#f3e9e4]/45 text-sm mb-10">
        Hier komen vragen terecht die de AI-assistent niet zelf kon beantwoorden. Beantwoord je er een, dan gebruikt de
        bot dat antwoord voortaan ook bij vergelijkbare vragen van andere bezoekers.
      </p>

      {foutmelding && (
        <p className="mb-6 text-sm text-red-400 bg-red-950/30 border border-red-500/20 rounded-xl px-4 py-3">{foutmelding}</p>
      )}

      <section className="mb-14">
        <h2 className="text-xs tracking-widest uppercase text-[#e0a58c]/80 mb-4">
          Openstaand {open ? `(${open.length})` : ""}
        </h2>

        {open === null && <p className="text-sm text-[#f3e9e4]/30">Laden…</p>}
        {open?.length === 0 && (
          <p className="text-sm text-[#f3e9e4]/30">Geen openstaande vragen — de bot kon alles zelf beantwoorden.</p>
        )}

        <div className="flex flex-col gap-4">
          {open?.map((item) => (
            <div key={item.id} className="rounded-2xl border border-[#e0a58c]/15 bg-[#150d0f] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <p className="text-sm text-[#f3e9e4]/85 font-medium">{item.vraag}</p>
                {item.gesteldOp && <span className="text-xs text-[#f3e9e4]/25 flex-shrink-0">{formatDatum(item.gesteldOp)}</span>}
              </div>
              <textarea
                value={antwoorden[item.id] ?? ""}
                onChange={(e) => setAntwoorden((prev) => ({ ...prev, [item.id]: e.target.value }))}
                placeholder="Typ hier je antwoord..."
                rows={2}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-[#e0a58c]/15 text-sm text-[#f3e9e4] placeholder-[#f3e9e4]/25 focus:outline-none focus:border-[#e0a58c]/40 resize-none"
              />
              <div className="flex justify-end mt-2.5">
                <button
                  onClick={() => verstuurAntwoord(item.id)}
                  disabled={versturend.has(item.id) || !antwoorden[item.id]?.trim()}
                  className="px-4 py-2 rounded-lg bg-[#e0a58c] hover:bg-[#e8b8a2] disabled:opacity-30 disabled:cursor-not-allowed text-[#1b1113] text-xs font-bold tracking-wide transition-colors"
                >
                  {versturend.has(item.id) ? "Opslaan…" : "Beantwoorden"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs tracking-widest uppercase text-[#e0a58c]/80 mb-4">Onlangs beantwoord</h2>
        {beantwoord?.length === 0 && <p className="text-sm text-[#f3e9e4]/30">Nog niets beantwoord.</p>}
        <div className="flex flex-col gap-3">
          {beantwoord?.map((item) => (
            <div key={item.id} className="rounded-2xl border border-[#e0a58c]/10 bg-[#150d0f]/60 p-5">
              <p className="text-sm text-[#f3e9e4]/70 font-medium mb-1.5">{item.vraag}</p>
              <p className="text-sm text-[#f3e9e4]/45 leading-relaxed">{item.antwoord}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function EigenaarInner() {
  const params = useSearchParams();
  const key = params.get("key");
  const [authorized, setAuthorized] = useState<boolean | "checking">(key ? "checking" : false);

  useEffect(() => {
    if (!key) return;
    let actief = true;
    fetch("/api/admin/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    })
      .then((r) => r.json())
      .then((d) => { if (actief) setAuthorized(d.ok === true); })
      .catch(() => { if (actief) setAuthorized(false); });
    return () => { actief = false; };
  }, [key]);

  if (authorized === "checking") {
    return (
      <main className="min-h-screen bg-[#1b1113] flex items-center justify-center">
        <p className="text-sm text-[#f3e9e4]/40">Toegang controleren…</p>
      </main>
    );
  }

  if (!authorized) {
    return (
      <main className="min-h-screen bg-[#1b1113] flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-5xl mb-6">🔒</p>
          <h1 className="font-serif text-2xl text-[#f3e9e4] mb-3">Geen toegang</h1>
          <p className="text-sm text-[#f3e9e4]/40">
            Voeg <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#e0a58c]">?key=...</code> toe aan de URL.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#1b1113]">
      <VragenPortaal adminKey={key ?? ""} />
    </main>
  );
}

export default function KapsalonEigenaarPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#1b1113] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#e0a58c]/30 border-t-[#e0a58c] animate-spin" />
        </main>
      }
    >
      <EigenaarInner />
    </Suspense>
  );
}
