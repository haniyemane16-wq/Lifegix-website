export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/95 h-16" />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 animate-pulse">
        <div className="text-center mb-12">
          <div className="h-3 w-24 bg-white/10 rounded mx-auto mb-4" />
          <div className="h-9 w-56 bg-white/10 rounded mx-auto mb-3" />
          <div className="h-3 w-72 bg-white/5 rounded mx-auto" />
        </div>
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10" />
              {i < 3 && <div className="w-12 h-px bg-white/5" />}
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 rounded-2xl bg-white/5" />
          ))}
        </div>
      </div>
    </main>
  );
}
