export default function FoundersHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        <a href="/founders" className="flex-shrink-0">
          <div
            className="text-2xl text-white uppercase leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            KAOS<span className="text-red-600">MT</span>
          </div>
          <div className="text-white/30 text-[9px] uppercase tracking-[0.2em] mt-0.5">
            Founders Program
          </div>
        </a>

        <div className="flex items-center gap-5">
          <span className="hidden sm:block text-white/40 text-[11px] uppercase tracking-widest">
            Only 50 Spots Available
          </span>
          <a
            href="#founders-form"
            className="inline-block bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-wider text-xs px-6 py-3 transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Claim My Spot
          </a>
        </div>
      </div>
    </header>
  );
}
