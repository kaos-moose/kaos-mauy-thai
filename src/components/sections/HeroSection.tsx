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
    <section className="relative bg-neutral-950 flex flex-col pt-16 overflow-hidden" style={{ minHeight: "min(100vh, 720px)" }}>

      {/* ── Background image ── */}
      <Image
        src="/hero-pic-3.webp"
        fill
        alt="Kaos Muay Thai fighters training"
        className="object-cover"
        style={{ 
        position: "absolute",
          
          right: 0,
          top: 65,
          bottom: 0,
          objectPosition: "-12% center",
          color: "transparent"
        }}
        priority
      />

      {/* ── Sharp left-to-right gradient — solid dark until ~40%, then quick fade ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #0a0a0a 38%, rgba(10,10,10,0.88) 46%, rgba(10,10,10,0.25) 60%, transparent 72%)",
        }}
      />

      {/* ── Bottom fade — keeps CTA row readable against image ── */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{
          height: "280px",
          background: "linear-gradient(to top, #0a0a0a 45%, transparent)",
        }}
      />

      {/* ── Content — flex-col with justify-between so top text and bottom row are pinned ── */}
      <div className="relative z-30 flex-1 flex flex-col justify-between px-8 md:px-12 lg:px-20 py-14">

        {/* ── Upper text block (constrained to left ~40%) ── */}
        <div className="w-[52%] min-w-0">
          <p className="text-sm font-bold uppercase tracking-widest mb-5">
            <span className="text-red-600">Opening Soon</span>
            <span className="text-white/50"> in Helena, MT</span>
          </p>

          <h1
            className="uppercase leading-[0.88] mb-5 text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.6rem,6.5vw,5.5rem)" }}
          >
            Helena&apos;s New
            <br />
            <span className="text-red-600">Muay Thai</span>
            <br />
            &amp; Krav Maga Academy
          </h1>

          <div className="w-14 h-[3px] bg-red-600 mb-6" />

          <p className="text-neutral-300 text-base md:text-lg mb-8 max-w-sm">
            Train for fitness. Learn real self-defense. Build confidence.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap">
            {heroBadges.map(({ Icon, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 py-3 ${i > 0 ? "px-4" : "pr-4"} ${
                  i < heroBadges.length - 1 ? "border-r border-white/15" : ""
                }`}
              >
                <Icon className="w-8 h-8 text-red-600 flex-shrink-0" />
                <span className="text-white text-[11px] font-bold uppercase tracking-wide leading-tight whitespace-pre-line">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom row — CTA on left, program callouts on right, same baseline ── */}
        <div className="flex items-center gap-0">

          {/* Left: CTA + lock text */}
          <div className="w-[52%] min-w-0 flex flex-col items-start gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-7 py-4 transition-colors duration-200"
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

        </div>
      </div>

    </section>
  );
}
