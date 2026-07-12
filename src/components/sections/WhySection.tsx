import Image from "next/image";

const benefits = [
  {
    title: "Practical Training",
    description: "Develop skills that extend beyond the gym.",
  },
  {
    title: "Real Coaching",
    description:
      "Learn through structured instruction, purposeful drills, and direct feedback.",
  },
  {
    title: "Beginner Friendly",
    description:
      "You do not need prior martial arts or fitness experience to begin.",
  },
  {
    title: "Stronger Community",
    description:
      "Train alongside people who value hard work, discipline, and mutual respect.",
  },
  {
    title: "Built for Progress",
    description:
      "Every class gives you a clear path to improve your technique, fitness, and confidence.",
  },
];

export default function WhySection() {
  return (
    <section className="bg-neutral-950 py-24 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column: image */}
          <div className="relative w-full h-[500px] md:h-full md:min-h-[600px] md:sticky md:top-8">
            <Image
              src="/kaos-site-pic-conditioning-4.png"
              alt="Muay Thai pad work training at KAOS Muay Thai"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right column: header + benefit cards */}
          <div>
            <div className="mb-10">
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
                Why KAOSMT
              </p>
              <h2
                className="text-4xl md:text-5xl text-white uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                More Than a Workout
              </h2>
              <div className="w-14 h-[3px] bg-red-600 mt-6" />
            </div>

            <div className="flex flex-col gap-px bg-white/5">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-neutral-900 p-8">
                  <div className="w-8 h-[2px] bg-red-600 mb-5" />
                  <h3
                    className="text-lg text-white uppercase mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
