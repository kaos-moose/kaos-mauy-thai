const reasons = [
  "You want to train in a real environment",
  "You're tired of boring gyms",
  "You want confidence, fitness, and real skill",
  "You value community and accountability",
  "You want to be part of something from the beginning",
  "Beginner or experienced — both are welcome",
];

export default function FoundersForWhoSection() {
  return (
    <section className="bg-neutral-950 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">
            Is This You?
          </p>
          <h2
            className="text-3xl md:text-5xl text-white uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            This Is For You If:
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mx-auto mt-5" />
        </div>

        <ul className="space-y-4 max-w-xl mx-auto">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-4">
              <span className="w-6 h-6 border border-red-600 flex items-center justify-center text-red-500 font-bold text-xs flex-shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-neutral-200 text-base md:text-lg">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
