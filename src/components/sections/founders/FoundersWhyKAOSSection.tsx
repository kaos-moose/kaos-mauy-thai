import Image from "next/image";

const benefits = [
  "Better fitness",
  "Self-defense skills",
  "Stress relief",
  "Discipline",
  "Confidence",
  "Real training",
];

export default function FoundersWhyKAOSSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <Image
        src="/section-3.webp"
        fill
        alt=""
        className="object-cover object-center opacity-40"
      />
      <div className="relative z-10 max-w-3xl mx-auto bg-neutral-950/90 px-8 md:px-14 py-14 text-center border border-white/8">
        <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">
          Muay Thai + Krav Maga Under One Roof
        </p>
        <h2
          className="text-3xl md:text-5xl text-white uppercase leading-tight mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Why KAOSMT?
        </h2>
        <div className="w-14 h-[3px] bg-red-600 mx-auto mb-8" />

        <p className="text-neutral-300 text-base md:text-lg mb-10">
          Whether you want:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10 max-w-md mx-auto">
          {benefits.map((b) => (
            <div
              key={b}
              className="border border-red-600/30 px-4 py-3 text-white text-sm font-bold uppercase tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {b}
            </div>
          ))}
        </div>

        <p className="text-neutral-200 text-lg">
          KAOSMT gives you a place to grow physically and mentally.
        </p>
      </div>
    </section>
  );
}
