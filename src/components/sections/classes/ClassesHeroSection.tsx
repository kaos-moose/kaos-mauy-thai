import Image from "next/image";

export default function ClassesHeroSection() {
  return (
    <section
      className="relative bg-neutral-950 flex flex-col pt-16 overflow-hidden"
      style={{ minHeight: "min(70vh, 560px)" }}
    >
      <Image
        src="/kaos-mt-hero-banner-2.jpg"
        fill
        alt="KAOSMT class training"
        className="object-cover"
        style={{ objectPosition: "center 30%" }}
        priority
      />
      <div className="absolute inset-0 bg-neutral-950/55" />

      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 py-20 max-w-[1080px] mx-auto w-full">
        <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
          Programs
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Training That Builds{" "}
          <span className="text-red-600">Real Capability</span>
        </h1>
        <p className="text-neutral-300 text-xl md:text-2xl mb-4 max-w-2xl leading-relaxed">
          KAOSMT offers coach-led programs designed to improve your fitness,
          striking ability, confidence, awareness, and performance under
          pressure.
        </p>
        <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
          No experience is required. We will help you begin at the appropriate
          level and build from there.
        </p>
      </div>
    </section>
  );
}
