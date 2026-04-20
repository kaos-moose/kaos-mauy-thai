const programs = [
  {
    icon: "🥊",
    title: "Muay Thai",
    description:
      "Learn powerful striking, improve conditioning, and train like a fighter. The art of eight limbs builds functional strength, coordination, and mental toughness.",
    featured: false,
  },
  {
    icon: "🔥",
    title: "Full Access",
    description:
      "Train both Muay Thai and Krav Maga for the ultimate combination of fitness and self-defense. The most complete training experience we offer.",
    featured: true,
  },
  {
    icon: "🛡️",
    title: "Krav Maga",
    description:
      "Practical self-defense focused on real-life situations and awareness. No rules, no sport — just the skills to protect yourself and those around you.",
    featured: false,
  },
];

export default function ProgramsSection() {
  return (
    <section className="bg-neutral-950 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl text-white uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Choose Your Training Path
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`relative p-10 flex flex-col ${
                program.featured
                  ? "bg-red-950/30 ring-1 ring-red-600"
                  : "bg-neutral-900"
              }`}
            >
              {program.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="text-5xl mb-6">{program.icon}</div>
              <h3
                className="text-2xl text-white uppercase mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {program.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-neutral-500 mt-10">
          No experience required. We&apos;ll guide you from day one.
        </p>
      </div>
    </section>
  );
}
