"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; content: string };

const WELKOM =
  "Hoi! Ik ben de assistent van LifeGix. Stel me gerust een vraag over onze diensten, prijzen of hoe we kunnen helpen. 👋";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = inputRef.current?.value.trim() ?? "";
    if (!text || loading) return;

    if (inputRef.current) inputRef.current.value = "";
    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.message || data.error }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Er ging iets mis. Probeer het opnieuw." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat venster */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-40px)] sm:w-[360px] max-h-[70vh] flex flex-col rounded-2xl border border-white/10 bg-[#0e0e1a] shadow-2xl shadow-black/50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-violet-950/60 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-sm font-bold">L</div>
              <div>
                <p className="text-sm font-semibold text-white">LifeGix Assistent</p>
                <p className="text-xs text-violet-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors p-1">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Berichten */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {/* Welkomstbericht */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">L</div>
              <div className="bg-white/[0.07] rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
                <p className="text-sm text-white/80 leading-relaxed">{WELKOM}</p>
              </div>
            </div>

            {messages.map((m, i) => (
              <div key={i} className={`flex items-start gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                {m.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">L</div>
                )}
                <div className={`rounded-2xl px-3.5 py-2.5 max-w-[85%] text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-violet-600 text-white rounded-tr-sm"
                    : "bg-white/[0.07] text-white/80 rounded-tl-sm"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">L</div>
                <div className="bg-white/[0.07] rounded-2xl rounded-tl-sm px-3.5 py-3">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 bg-[#0e0e1a]">
            <div className="flex items-center gap-2 bg-white/[0.06] rounded-xl px-3 py-2">
              <input
                ref={inputRef}
                type="text"
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Stel een vraag..."
                className="flex-1 bg-transparent text-sm text-white placeholder-white/30 focus:outline-none"
              />
              <button
                onClick={send}
                disabled={loading}
                className="w-7 h-7 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-30 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <p className="text-center text-white/20 text-xs mt-2">Powered by LifeGix AI</p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-8 left-5 z-50 w-14 h-14 rounded-full bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-900/40 flex items-center justify-center transition-colors"
        aria-label="Chat openen"
      >
        {open ? (
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M4 4l12 12M16 4L4 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0a0a0f]" />
        )}
      </button>
    </>
  );
}
