import Image from "next/image";
import { LockIcon } from "@/components/ui/Icons";

export default function FoundersHeroSection() {
  return (
    <section
      className="relative bg-neutral-950 flex flex-col pt-16 overflow-hidden"
      style={{ minHeight: "min(100vh, 720px)" }}
    >
      <Image
        src="/hero-pic-3.webp"
        fill
        alt="Kaos Muay Thai fighters training"
        className="object-cover hidden md:block"
        style={{ objectPosition: "-12% center" }}
        priority
      />

      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-red-900/20 to-neutral-950" />

      <div
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(to right, #0a0a0a 38%, rgba(10,10,10,0.88) 46%, rgba(10,10,10,0.25) 60%, transparent 72%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none hidden md:block"
        style={{ height: "280px", background: "linear-gradient(to top, #0a0a0a 45%, transparent)" }}
      />

      <div className="relative z-30 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 md:py-14">
        <div className="w-full md:w-[55%] min-w-0 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 mb-6">
            <span>Founders Program</span>
            <span className="opacity-60">·</span>
            <span>Helena, MT</span>
          </div>

          <h1
            className="uppercase leading-[0.88] mb-6 text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,6vw,4.8rem)" }}
          >
            Become One of the
            <br />
            <span className="text-red-600">First 50 Founders</span>
            <br />
            at KAOSMT
          </h1>

          <div className="w-14 h-[3px] bg-red-600 mb-6 mx-auto md:mx-0" />

          <p className="text-neutral-300 text-base md:text-lg mb-10 max-w-md mx-auto md:mx-0">
            Helena&apos;s newest Muay Thai + Krav Maga training community is opening soon.
            Lock in Founder pricing, exclusive perks, and permanent Founder status before
            all 50 spots are gone.
          </p>

          <div className="flex flex-col items-center md:items-start gap-3">
            <a
              href="#founders-form"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200 w-full md:w-auto justify-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Claim My Founder Spot
              <span className="text-base leading-none">&rsaquo;</span>
            </a>
            <p className="flex items-center gap-2 text-white/35 text-[11px] uppercase tracking-widest">
              <LockIcon className="w-3 h-3 flex-shrink-0" />
              First Come. First Served. No Waitlist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
