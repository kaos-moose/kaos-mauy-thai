export default function WomensSeminarBanner() {
  return (
    <section className="bg-red-600 py-6 px-6">
      <div className="max-w-[1080px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="text-black/60 text-[10px] font-bold uppercase tracking-widest mb-1">
            July 11 · 9:00 AM – Noon · $100
          </p>
          <p
            className="text-black text-2xl md:text-3xl uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Women&rsquo;s Self Defense Seminar
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
          <a
            href="/womens-seminar"
            className="inline-block border-2 border-black hover:bg-black/10 active:bg-black/20 text-black font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200 whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Learn More
          </a>
          <a
            href="https://kaosmt.gymdesk.com/signup/v/D8M9J"
            className="inline-block bg-black hover:bg-neutral-900 active:bg-neutral-800 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200 whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </section>
  );
}
