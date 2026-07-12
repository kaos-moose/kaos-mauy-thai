const tiers = [
  { name: "Muay Thai Only", regular: "$130/mo", charter: "$120/mo" },
  { name: "Self Defense Only", regular: "$130/mo", charter: "$120/mo" },
  { name: "Unlimited", regular: "$170/mo", charter: "$160/mo", highlight: true },
];

export default function CharterPricingSection() {
  return (
    <section className="bg-neutral-900 py-20 px-4">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">
            Pre-Opening Rates
          </p>
          <h2
            className="text-3xl md:text-5xl text-white uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Charter Pricing
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mx-auto mt-5" />
        </div>

        <div className="border border-white/10 overflow-hidden">
          <div className="grid grid-cols-3 bg-neutral-800 border-b border-white/10">
            <div className="px-6 py-4 text-neutral-400 text-xs font-bold uppercase tracking-widest">
              Membership
            </div>
            <div className="px-6 py-4 text-neutral-400 text-xs font-bold uppercase tracking-widest text-center">
              Regular Rate
            </div>
            <div className="px-6 py-4 text-red-500 text-xs font-bold uppercase tracking-widest text-center">
              Charter Rate
            </div>
          </div>

          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`grid grid-cols-3 border-b border-white/5 last:border-b-0 ${
                tier.highlight ? "bg-red-950/20" : ""
              }`}
            >
              <div className="px-6 py-5 flex items-center">
                <span
                  className="text-white font-bold text-sm md:text-base uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {tier.name}
                  {tier.highlight && (
                    <span className="ml-2 text-[10px] bg-red-600 text-white px-2 py-0.5 tracking-widest">
                      BEST VALUE
                    </span>
                  )}
                </span>
              </div>
              <div className="px-6 py-5 flex items-center justify-center">
                <span className="text-neutral-500 text-base line-through">{tier.regular}</span>
              </div>
              <div className="px-6 py-5 flex items-center justify-center">
                <span className="text-red-500 font-bold text-lg md:text-xl">{tier.charter}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-neutral-500 text-xs text-center mt-5 uppercase tracking-widest">
          Charter pricing valid through opening day.
        </p>

        <div className="mt-8 text-center">
          <a
            href="#charter-form"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lock In My Rate
            <span className="text-base leading-none">&rsaquo;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
