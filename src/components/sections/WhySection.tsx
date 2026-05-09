import Image from "next/image";

const tags = [
  "Better Fitness",
  "Self-Defense Skills",
  "Stress Relief",
  "Discipline",
  "Confidence",
  "Real Training",
];

export default function WhySection() {
  return (
    <section className="relative py-28 px-4 overflow-hidden">
      <Image
        src="/section-2.webp"
        fill
        alt=""
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-neutral-950/80" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
          Muay Thai + Krav Maga Under One Roof
        </p>

        <h2
          className="text-5xl md:text-6xl text-white uppercase mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Why KAOSMT?
        </h2>

        <div className="w-14 h-[3px] bg-red-600 mx-auto mb-10" />

        <p className="text-neutral-300 mb-8">Whether you want:</p>

        <div className="grid grid-cols-3 gap-3 mb-10">
          {tags.map((tag) => (
            <div
              key={tag}
              className="border border-red-600 px-3 py-4 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {tag}
            </div>
          ))}
        </div>

        <p className="text-neutral-300">
          KAOSMT gives you a place to grow physically and mentally.
        </p>
      </div>
    </section>
  );
}
