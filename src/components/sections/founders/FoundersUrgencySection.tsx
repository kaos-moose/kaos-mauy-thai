const consequences = [
  "Founder pricing ends forever",
  "Founder perks are gone",
  "Founder status closes — no second round",
];

export default function FoundersUrgencySection() {
  return (
    <section className="bg-neutral-950 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="border border-red-600/50 bg-red-950/10 p-10 md:p-14 text-center">
          <div className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 mb-8">
            Limited Availability
          </div>

          <h2
            className="text-4xl md:text-6xl text-white uppercase leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Only 50 Founder
            <br />
            Spots Exist
          </h2>

          <div className="w-14 h-[3px] bg-red-600 mx-auto mb-8" />

          <p className="text-neutral-400 text-lg mb-8">When all 50 are claimed:</p>

          <ul className="space-y-3 inline-block text-left mb-10">
            {consequences.map((c) => (
              <li key={c} className="flex items-center gap-3 text-white text-base md:text-lg">
                <span className="text-red-500 font-bold text-lg flex-shrink-0">×</span>
                {c}
              </li>
            ))}
          </ul>

          <p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-8">
            There will be no second round.
          </p>

          <a
            href="#founders-form"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-10 py-5 transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Secure My Spot Now
            <span className="text-base leading-none">&rsaquo;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
