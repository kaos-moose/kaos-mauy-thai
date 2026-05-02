const standards = ["Hard work", "Mutual respect", "No ego"];

export default function FoundersTrustSection() {
  return (
    <section className="bg-neutral-900 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">
          The KAOSMT Standard
        </p>
        <h2
          className="text-3xl md:text-5xl text-white uppercase leading-tight mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          KAOSMT Standard
        </h2>
        <div className="w-14 h-[3px] bg-red-600 mx-auto mb-10" />

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {standards.map((s) => (
            <div
              key={s}
              className="border border-red-600/40 px-8 py-4 text-white font-bold uppercase text-sm tracking-widest"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {s}
            </div>
          ))}
        </div>

        <p className="text-neutral-300 text-lg mb-10">
          If that sounds like your kind of gym, we&apos;d love to meet you.
        </p>

        <div>
          <p
            className="text-white/40 text-xs uppercase tracking-widest mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Build It With Us.
          </p>
          <a
            href="#founders-form"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-10 py-5 transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Become a Founder
            <span className="text-base leading-none">&rsaquo;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
