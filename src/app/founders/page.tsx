import Image from "next/image";
import { LockIcon } from "@/components/ui/Icons";
import FoundersFormSection from "@/components/sections/founders/FoundersFormSection";

const benefits = [
  {
    title: "Locked-In Discounted Pricing for Life",
    desc: "Join now and keep your Founder rate for as long as your membership remains active.",
  },
  {
    title: "Founder Status Forever",
    desc: "Once all 50 spots are claimed, no one else will ever become a Founder.",
  },
  {
    title: "Priority Access to Classes",
    desc: "Reserve your place before the general public.",
  },
  {
    title: "Exclusive Founder Gear Package",
    desc: "Receive premium training gear + Founder apparel.",
  },
  {
    title: "Influence in the Gym's Future",
    desc: "Vote on schedules, classes, events, and more.",
  },
  {
    title: "Quarterly Founder Dinners",
    desc: "Community events with ownership and fellow Founders.",
  },
];

export default function FoundersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-black flex flex-col justify-center overflow-hidden pt-16" style={{ minHeight: "min(100vh, 720px)" }}>
        {/* Background image */}
        <Image
          src="/hero-pic-3.webp"
          fill
          alt="KAOSMT athletes training"
          className="object-cover object-center"
          priority
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 py-24 w-full md:w-[55%]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
              Founders Program
            </span>
            <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">
              · Helena, MT
            </span>
          </div>

          {/* Heading */}
          <h1
            className="uppercase leading-[0.9] text-white mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
            }}
          >
            Become one of the
            <br />
            <span className="text-red-600">First 50 Founders</span>
            <br />
            at KAOSMT
          </h1>

          <div className="w-12 h-[3px] bg-red-600 mb-8" />

          <p className="text-neutral-300 text-base leading-relaxed mb-10 max-w-sm">
            Helena&apos;s newest Muay Thai + Krav Maga training community is opening soon. Lock in
            Founder pricing, exclusive perks, and permanent Founder status before all 50 spots are
            gone.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="#founders-form"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-7 py-4 transition-colors duration-200 self-start"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Claim My Founder Spot
              <span className="text-base leading-none">&rsaquo;</span>
            </a>
            <p className="flex items-center gap-2 text-neutral-500 text-[11px] uppercase tracking-widest">
              <LockIcon className="w-3 h-3 flex-shrink-0" />
              First come. First served. No waitlist.
            </p>
          </div>
        </div>
      </section>

      {/* You're Building One */}
      <section className="bg-neutral-900 py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl text-white uppercase leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            You&apos;re not just joining a gym.
            <br />
            <span className="text-red-600">You&apos;re building one.</span>
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mb-10" />

          <div className="space-y-4 text-neutral-400 text-base leading-relaxed mb-10">
            <p>The first members of any gym shape its energy, standards, and culture.</p>
            <p>
              That&apos;s why we created the KAOSMT Founders Program — an exclusive opportunity for
              the first 50 people who want to be here from day one.
            </p>
          </div>

          <blockquote className="border-l-4 border-red-600 pl-5">
            <p className="text-white font-bold text-base leading-relaxed">
              As a Founder, you&apos;re not just a member.
              <br />
              You help build what this becomes.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-950 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">
              Exclusive Benefits
            </p>
            <h2
              className="text-4xl md:text-5xl text-white uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              As a Founder, You Get:
            </h2>
            <div className="w-14 h-[3px] bg-red-600 mt-5 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="border border-white/10 bg-neutral-900 p-6 flex gap-5 items-start"
              >
                <div className="bg-red-600 w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-white text-sm font-bold uppercase tracking-wide mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {b.title}
                  </p>
                  <p className="text-neutral-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FoundersFormSection />
    </main>
  );
}
