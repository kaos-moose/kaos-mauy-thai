import Image from "next/image";
import {
  PersonBadgeIcon,
  GlovesIcon,
  ShieldCheckIcon,
  LockIcon,
  MuayThaiKickIcon,
  KravMagaShieldIcon,
} from "@/components/ui/Icons";

const heroBadges = [
  { Icon: PersonBadgeIcon, label: "No Experience\nNeeded" },
  { Icon: GlovesIcon, label: "Beginner-Friendly\nClasses" },
  { Icon: ShieldCheckIcon, label: "Opening Soon\nin Helena" },
];

export default function HeroSection() {
  return (
    <section
      className="relative bg-neutral-950 flex flex-col pt-16 overflow-hidden"
      style={{ minHeight: "min(100vh, 720px)" }}
    >

      {/* ── Desktop: photo background ── */}
      <Image
        src="/hero-pic-3.webp"
        fill
        alt="Kaos Muay Thai fighters training"
        className="object-cover hidden md:block"
        style={{ objectPosition: "-12% center" }}
        priority
      />

      {/* ── Mobile: black → red gradient (bottom up) ── */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-red-800/30 to-neutral-950" />

      {/* ── Desktop: left-to-right gradient over photo ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(to right, #0a0a0a 38%, rgba(10,10,10,0.88) 46%, rgba(10,10,10,0.25) 60%, transparent 72%)",
        }}
      />

      {/* ── Desktop: bottom fade ── */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none hidden md:block"
        style={{
          height: "280px",
          background: "linear-gradient(to top, #0a0a0a 45%, transparent)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-30 flex-1 flex flex-col justify-between px-6 md:px-12 lg:px-20 py-12 md:py-14">

        {/* Upper text block */}
        <div className="w-full md:w-[52%] min-w-0 text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-widest mb-5">
            <span className="text-red-400 md:text-red-600">Opening Soon</span>
            <span className="text-white/50"> in Helena, MT</span>
          </p>

          <h1
            className="uppercase leading-[0.88] mb-5 text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,7vw,5.5rem)" }}
          >
            Helena&apos;s New
            <br />
            <span className="text-red-500 md:text-red-600">Muay Thai</span>
            <br />
            &amp; Krav Maga Academy
          </h1>

          <div className="w-14 h-[3px] bg-red-600 mb-6 mx-auto md:mx-0" />

          <p className="text-neutral-300 text-base md:text-lg mb-8 max-w-sm mx-auto md:mx-0">
            Train for fitness. Learn real self-defense. Build confidence.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center md:justify-start">
            {heroBadges.map(({ Icon, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 py-3 ${i > 0 ? "px-4" : "pr-4"} ${
                  i < heroBadges.length - 1 ? "border-r border-white/15" : ""
                }`}
              >
                <Icon className="w-8 h-8 text-red-500 md:text-red-600 flex-shrink-0" />
                <span className="text-white text-[11px] font-bold uppercase tracking-wide leading-tight whitespace-pre-line">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row — CTA + desktop program callouts */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0 mt-8 md:mt-0">

          {/* CTA + lock */}
          <div className="w-full md:w-[52%] min-w-0 flex flex-col items-center md:items-start gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-7 py-4 transition-colors duration-200 w-full md:w-auto justify-center md:justify-start"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Claim Your Founding Spot
              <span className="text-base leading-none">&rsaquo;</span>
            </a>
            <p className="flex items-center gap-2 text-white/35 text-[11px] uppercase tracking-widest">
              <LockIcon className="w-3 h-3 flex-shrink-0" />
              Limited to the first 50 founding members
            </p>
          </div>

          {/* Program callouts — desktop only */}
          <div className="hidden md:flex items-center gap-5 pl-4">
            <div className="flex items-center gap-3">
              <MuayThaiKickIcon className="w-11 h-11 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-bold uppercase leading-none" style={{ fontFamily: "var(--font-display)" }}>
                  Muay Thai
                </p>
                <p className="text-neutral-400 text-[10px] uppercase tracking-widest mt-1">
                  Striking. Conditioning. Discipline.
                </p>
              </div>
            </div>
            <div className="w-px h-9 bg-white/15 flex-shrink-0" />
            <div className="flex items-center gap-3">
              <KravMagaShieldIcon className="w-11 h-11 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-bold uppercase leading-none" style={{ fontFamily: "var(--font-display)" }}>
                  Krav Maga
                </p>
                <p className="text-neutral-400 text-[10px] uppercase tracking-widest mt-1">
                  Real-world self-defense.
                  <br />
                  Real confidence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
