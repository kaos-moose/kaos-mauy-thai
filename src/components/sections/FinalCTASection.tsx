import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FinalCTASection() {
  return (
    <section className="relative py-24 px-4 text-center overflow-hidden">

      {/* Background image */}
      <Image
        src="/section-3.webp"
        fill
        alt=""
        className="object-cover object-center opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto bg-white/80 px-10 py-16">
        <h2
          className="text-4xl md:text-6xl text-neutral-900 uppercase leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Don&apos;t Miss Your
          <br />
          <span className="text-red-600">Founding Member Spot</span>
        </h2>

        <p className="text-neutral-700 text-xl mb-4">
          We&apos;re only accepting a limited number of members before opening.
        </p>

        <p className="text-neutral-400 mb-12">
          Join now and be part of Helena&apos;s newest Muay Thai &amp; self-defense
          academy.
        </p>

        <Button href="#contact-form" size="lg" className="text-lg px-10 py-5">
          Claim Your Spot Now
        </Button>
      </div>

    </section>
  );
}
