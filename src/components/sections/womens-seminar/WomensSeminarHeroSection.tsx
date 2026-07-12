import Image from "next/image";

export default function WomensSeminarHeroSection() {
  return (
    <section
      className="relative bg-neutral-950 flex flex-col pt-16 overflow-hidden"
      style={{ minHeight: "min(100vh, 760px)" }}
    >
      <Image
        src="/kaos-mt-womens-hero.jpg"
        fill
        alt="Women's self-defense training"
        className="object-cover"
        style={{ objectPosition: "right center" }}
        priority
      />

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,0.3) 80%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{
          height: "260px",
          background: "linear-gradient(to top, #0a0a0a 40%, transparent)",
        }}
      />

      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="max-w-2xl">
          <p
            className="text-red-600 text-xs font-bold uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Self Defense Survival Concepts + Strategies
          </p>

          <div className="w-10 h-[2px] bg-red-600 mb-6" />

          <h1
            className="uppercase leading-[0.88] mb-6 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            }}
          >
            Women&rsquo;s Intro To
            <br />
            Self-Defense
          </h1>

          <p className="text-neutral-300 text-base md:text-lg mb-10 max-w-md leading-relaxed">
            Learn practical awareness, mindset, and instinctive responses in a
            beginner-friendly 3-hour seminar.
          </p>

          <a
            href="https://kaosmt.gymdesk.com/signup/v/D8M9J"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Reserve Your Spot
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
