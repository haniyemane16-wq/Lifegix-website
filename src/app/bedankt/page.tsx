export default function BedanktPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center px-6">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      <div className="relative text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mx-auto mb-8">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M10 20l8 8L30 12" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Bedankt voor je bestelling!
        </h1>
        <p className="text-white/50 leading-relaxed mb-8">
          Je betaling is verwerkt. Je ontvangt binnen 24 uur een bevestiging per e-mail en ik neem persoonlijk contact met je op om te starten.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-sm transition-all hover:scale-105 purple-glow"
        >
          ← Terug naar home
        </a>
      </div>
    </main>
  );
}
