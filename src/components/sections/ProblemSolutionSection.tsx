import Image from "next/image";

const problems = [
  "Gyms are boring and hard to stay consistent with",
  "Group fitness classes don't teach real skills",
  "Martial arts gyms can feel intimidating",
];

const solutions = [
  {
    title: "Muay Thai",
    desc: "Striking, conditioning, discipline — the art of eight limbs",
  },
  {
    title: "Krav Maga",
    desc: "Practical, real-world self-defense built for real situations",
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">

      {/* Full-width background image */}
      <Image
        src="/section-2.webp"
        fill
        alt=""
        className="object-cover object-center opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white/80 px-10 py-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Problem */}
          <div>
            <p className="text-neutral-800 text-lg md:text-xl leading-relaxed mb-10">
              Most people want to get in shape, feel confident, and learn how to
              protect themselves…
            </p>
            <p className="text-neutral-400 font-bold uppercase tracking-widest text-xs mb-5">
              But:
            </p>
            <ul className="space-y-5">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-4 text-neutral-500">
                  <span className="text-red-600 mt-1 text-base leading-none flex-shrink-0 font-bold">✕</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <p className="text-neutral-800 text-lg md:text-xl leading-relaxed mb-10">
              We built this academy for people who want{" "}
              <span className="text-red-600 font-bold">something real.</span>
            </p>
            <p className="text-neutral-400 font-bold uppercase tracking-widest text-xs mb-5">
              At our gym, you&apos;ll learn:
            </p>
            <ul className="space-y-6 mb-10">
              {solutions.map((s) => (
                <li key={s.title} className="flex items-start gap-4">
                  <span className="text-red-600 font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-neutral-900 text-lg">{s.title}</p>
                    <p className="text-neutral-500 text-sm mt-0.5">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-neutral-500 border-l-2 border-red-600 pl-4 italic">
              All in a beginner-friendly environment where anyone can start.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
