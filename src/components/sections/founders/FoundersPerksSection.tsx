const perks = [
  {
    title: "Locked-In Discounted Pricing for Life",
    desc: "Join now and keep your Founder rate for as long as your membership remains active.",
  },
  {
    title: "Founder Status Forever",
    desc: "Once all 50 spots are claimed, no one else will ever become a Founder.",
  },
  {
    title: "Priority Access to Classes",
    desc: "Reserve your place before the general public.",
  },
  {
    title: "Exclusive Founder Gear Package",
    desc: "Receive premium training gear + Founder apparel.",
  },
  {
    title: "Influence in the Gym's Future",
    desc: "Vote on schedules, classes, events, and more.",
  },
  {
    title: "Quarterly Founder Dinners",
    desc: "Community events with ownership and fellow Founders.",
  },
];

export default function FoundersPerksSection() {
  return (
    <section className="bg-neutral-950 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">
            Exclusive Benefits
          </p>
          <h2
            className="text-3xl md:text-5xl text-white uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            As a Founder, You Get:
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
