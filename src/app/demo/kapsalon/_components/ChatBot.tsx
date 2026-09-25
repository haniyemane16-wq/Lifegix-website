"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const WELKOM = "Hoi! Waar kan ik je mee helpen? Vraag gerust naar openingstijden, prijzen of een afspraak.";

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
      const res = await fetch("/api/demo/kapsalon-chat", {
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
    <div className="mb-16 rounded-2xl border border-[#e0a58c]/20 bg-[#150d0f] overflow-hidden">
      <div className="px-5 py-3.5 border-b border-[#e0a58c]/15 flex items-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-[#e0a58c] animate-pulse" />
        <span className="text-xs tracking-widest uppercase text-[#e0a58c]/80">Kapsalon Davines — assistent</span>
      </div>

      <div className="p-5 flex flex-col gap-3 max-h-[360px] overflow-y-auto">
        <div className="self-start max-w-[85%] bg-[#e0a58c]/10 border border-[#e0a58c]/20 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-[#f3e9e4]/80">
          {WELKOM}
        </div>

        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "user"
                ? "self-end max-w-[85%] bg-[#e0a58c] rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-[#1b1113] font-medium"
                : "self-start max-w-[85%] bg-[#e0a58c]/10 border border-[#e0a58c]/20 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-[#f3e9e4]/80"
            }
          >
            {m.content}
          </div>
        ))}

        {loading && (
          <div className="self-start bg-[#e0a58c]/10 border border-[#e0a58c]/20 rounded-2xl rounded-tl-sm px-4 py-3">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#e0a58c] animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="px-5 pb-4 pt-1">
        <div className="flex items-center gap-2 bg-white/5 border border-[#e0a58c]/15 rounded-xl px-3.5 py-2.5">
          <input
            ref={inputRef}
            type="text"
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Stel je vraag..."
            className="flex-1 bg-transparent text-sm text-[#f3e9e4] placeholder-[#f3e9e4]/25 focus:outline-none"
          />
          <button
            onClick={send}
            disabled={loading}
            className="w-7 h-7 rounded-lg bg-[#e0a58c] hover:bg-[#e8b8a2] disabled:opacity-30 flex items-center justify-center transition-colors flex-shrink-0"
            aria-label="Verstuur"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="#1b1113" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <p className="mt-3 text-[10px] text-[#f3e9e4]/25">
          Deze assistent kent de openingstijden, prijzen en het afsprakenbeleid van Kapsalon Davines. Voor iets anders verwijst hij je door naar 0575 – 57 07 01.
        </p>
      </div>
    </div>
  );
}
