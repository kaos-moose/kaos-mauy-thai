import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FinalCTASection() {
  return (
    <section className="bg-neutral-950 py-24 px-6">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: content */}
        <div>
          <h2
            className="text-4xl md:text-6xl text-white uppercase leading-tight mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stop Waiting to{" "}
            <span className="text-red-600">Feel Ready</span>
          </h2>

          <div className="space-y-4 mb-12 text-neutral-400 text-lg leading-relaxed">
            <p>You do not need to be in shape before you begin.</p>
            <p>You do not need previous experience.</p>
            <p className="text-white font-medium">
              You only need to take the first step.
            </p>
          </div>

          <Button href="#contact-form" size="lg" className="text-lg px-10 py-5">
            Start Training
          </Button>
        </div>

        {/* Right: image */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/kaso-self-defense-pic-1.png"
            alt="Self-defense training at KAOS Muay Thai"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
