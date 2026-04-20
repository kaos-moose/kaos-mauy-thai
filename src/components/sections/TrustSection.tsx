import Image from "next/image";

const values = [
  "High-quality coaching",
  "Real skill development",
  "A supportive, no-ego environment",
];

export default function TrustSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">

      {/* Background image */}
      <Image
        src="/section-4.webp"
        fill
        alt=""
        className="object-cover object-center opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto bg-white/80 px-10 py-16 text-center">
        <h2
          className="text-4xl md:text-6xl text-neutral-900 uppercase mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Built for Helena
        </h2>

        <p className="text-neutral-400 text-lg mb-3">
          This isn&apos;t a franchise or a generic gym.
        </p>

        <p className="text-neutral-800 text-xl mb-12">
          We&apos;re building a local training community focused on:
        </p>

        <ul className="space-y-4 text-left inline-block mb-12">
          {values.map((v) => (
            <li key={v} className="flex items-center gap-4 text-lg text-neutral-800">
              <span className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                ✓
              </span>
              {v}
            </li>
          ))}
        </ul>

        <p className="text-neutral-400 text-lg">
          Whether your goal is fitness, confidence, or self-defense — you&apos;ll fit
          in here.
        </p>
      </div>

    </section>
  );
}
