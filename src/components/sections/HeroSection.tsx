import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      className="relative bg-neutral-950 flex flex-col pt-16 overflow-hidden"
      style={{ minHeight: "min(100vh, 800px)" }}
    >
      {/* Desktop: photo background */}
      <Image
        src="/kaos-mt-hero-banner-3.jpg"
        fill
        alt="Kaos Muay Thai fighters training"
        className="object-cover hidden md:block"
        style={{ objectPosition: "-12% center" }}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-950/60 hidden md:block" />

      {/* Mobile: photo background */}
      <Image
        src="/kaos-mt-hero-banner-1.webp"
        fill
        alt="Kaos Muay Thai training"
        className="object-cover block md:hidden"
        style={{ objectPosition: "center" }}
        priority
      />
      <div className="absolute inset-0 bg-neutral-950/70 block md:hidden" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 py-20 max-w-[1080px] mx-auto w-full">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Muay Thai.{" "}
          <br className="hidden sm:block" />
          Self-Defense.{" "}
          <br className="hidden sm:block" />
          <span className="text-red-600">Real Training.</span>
        </h1>

        <p className="text-neutral-300 text-xl md:text-2xl mb-4 max-w-xl leading-relaxed">
          Train for fitness. Build confidence. Learn skills that matter.
        </p>

        <p className="text-neutral-400 text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
          KAOSMT is Helena&rsquo;s home for practical Muay Thai, the KAOS
          Self-Defense System, and high-intensity conditioning. Whether you are
          stepping onto the mat for the first time or looking for serious
          training, our classes are built to challenge you, develop you, and
          help you become more capable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button href="#contact-form" size="lg">
            Start Training
          </Button>
          <a
            href="/schedule"
            className="inline-block border-2 border-white hover:border-red-600 hover:text-red-600 active:border-red-700 active:text-red-700 text-white font-bold uppercase tracking-wider px-8 py-4 text-base text-center transition-colors duration-200"
          >
            View Schedule
          </a>
        </div>

        <p className="text-neutral-400 text-sm">
          No experience required.&nbsp; Beginner-friendly coaching.&nbsp; Grand opening July 18.
        </p>
      </div>
    </section>
  );
}
