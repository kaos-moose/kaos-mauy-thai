import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import StarterPassModal from "@/components/ui/StarterPassModal";

export const metadata: Metadata = {
  title: "Class Schedule | KAOSMT — Helena, MT",
  description:
    "View the KAOSMT class schedule for Muay Thai, KAOS Self-Defense System, and Strength & Conditioning in Helena, Montana.",
};

const firstClassInfo = [
  {
    program: "For Muay Thai",
    items: [
      "Athletic clothing",
      "Water",
      "Hand wraps and gloves if you own them — loaner equipment is available",
    ],
  },
  {
    program: "For KAOS Self-Defense System",
    items: [
      "Athletic clothing",
      "Clean indoor training shoes or bare feet",
      "Water",
      "No specialized equipment required for the first class",
    ],
  },
  {
    program: "For Strength & Conditioning",
    items: [
      "Athletic clothing",
      "Water",
      "Training gloves if desired",
      "Towel recommended",
    ],
  },
];

export default function SchedulePage() {
  return (
    <main className="bg-neutral-950">
      <StarterPassModal />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden" style={{ minHeight: "min(60vh, 480px)" }}>
        <Image
          src="/kaos-mt-hero-banner-1.webp"
          fill
          alt="KAOSMT training"
          className="object-cover"
          style={{ objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-neutral-950/55" />
        <div className="relative z-10 max-w-[1080px] mx-auto flex flex-col justify-center h-full">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            Schedule
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-none mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Build Training Into{" "}
            <span className="text-red-600">Your Week</span>
          </h1>
          <div className="w-14 h-[3px] bg-red-600 mb-8" />
          <p className="text-neutral-300 text-xl mb-4 max-w-2xl leading-relaxed">
            Choose the program and time that works for you.
          </p>
          <p className="text-neutral-400 text-base max-w-2xl leading-relaxed">
            Classes are coach-led and structured for both new and experienced
            students. Arrive at least 10 minutes early for your first class.
          </p>
        </div>
      </section>

      {/* Schedule Embed */}
      <section className="bg-neutral-900 py-20 px-6">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-neutral-300 text-lg mb-8">
            Select a class below to view details and reserve your spot.
          </p>

          <div className="gymdesk-schedule" attr-gym="AnQgQ" attr-program="all" />
        </div>
      </section>

      {/* First-Class Information */}
      <section className="py-20 px-6">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            First-Class Information
          </p>
          <h2
            className="text-4xl md:text-5xl text-white uppercase mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your First Class
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mb-12" />

          <div className="grid sm:grid-cols-3 gap-px bg-white/5">
            {firstClassInfo.map((block) => (
              <div key={block.program} className="bg-neutral-950 p-8">
                <p
                  className="text-white text-sm font-bold uppercase tracking-widest mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {block.program}
                </p>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-400 text-sm leading-relaxed">
                      <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-neutral-500 text-sm mt-8 border-l-2 border-red-600 pl-5">
            Please tell the coach about any injuries or physical limitations
            before class begins.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-20 px-6">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left: content */}
          <div>
            <h2
              className="text-3xl md:text-4xl text-white uppercase mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Cannot Find a Class Time That Works?
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              Contact us and tell us which program and time you are looking for.
              Our schedule will continue to expand as the academy grows.
            </p>
            <Button href="/contact" size="lg">
              Contact KAOSMT
            </Button>
          </div>

          {/* Right: image */}
          <div className="relative w-full h-[500px]">
            <Image
              src="/kaso-self-defense-pic-5.png"
              alt="Self-defense training at KAOS Muay Thai"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

    </main>
  );
}
