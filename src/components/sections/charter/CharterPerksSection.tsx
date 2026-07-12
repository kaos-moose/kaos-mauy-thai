const perks = [
  {
    title: "Discounted Pre-Opening Rate",
    desc: "$120/mo for Muay Thai or Self Defense, $160/mo for Unlimited — locked in before regular pricing takes effect.",
  },
  {
    title: "Access to Preview Classes",
    desc: "Train at KAOSMT before the gym officially opens to the public.",
  },
  {
    title: "Early Schedule Access",
    desc: "Reserve your spot on the class schedule before general registration opens.",
  },
];

export default function CharterPerksSection() {
  return (
    <section className="bg-neutral-950 py-20 px-4">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">
            Charter Benefits
          </p>
          <h2
            className="text-3xl md:text-5xl text-white uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            As a Charter Member, You Get:
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="border border-white/8 bg-neutral-900/50 p-6 flex gap-4"
            >
              <span className="w-7 h-7 bg-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                ✓
              </span>
              <div>
                <p
                  className="text-white font-bold text-base uppercase leading-snug mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {perk.title}
                </p>
                <p className="text-neutral-400 text-sm">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
