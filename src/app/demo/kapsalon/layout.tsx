import type { Metadata } from "next";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import ChatBot from "./_components/ChatBot";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: {
    template: "%s — Kapsalon Davines",
    default: "Kapsalon Davines — Warnsveld | Demo door Lifegix",
  },
  description:
    "Lokale kapperszaak in Warnsveld. Knippen, kleuren en stylen voor dames en heren. Demo-website gebouwd door Lifegix.",
};

export default function KapsalonLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen bg-[#1b1113] text-[#f3e9e4]">
      <Navbar />
      <div className="pt-[68px] flex-1 flex flex-col">{children}</div>
      <Footer />
      <ChatBot />

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full text-xs pointer-events-none select-none bg-white text-gray-700 border border-gray-200 shadow-md whitespace-nowrap">
        Demo door <span className="text-violet-600 font-bold">Lifegix</span> — niet een echte website
      </div>
    </main>
  );
}
