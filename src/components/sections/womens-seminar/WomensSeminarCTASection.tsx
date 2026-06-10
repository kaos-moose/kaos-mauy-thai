import { ShieldCheckIcon } from "@/components/ui/Icons";

export default function WomensSeminarCTASection() {
  return (
    <section id="register" className="bg-neutral-950 border-t border-white/5 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p
            className="text-red-600 text-xs font-bold uppercase tracking-[0.25em] mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Limited Spots Available
          </p>
          <h2
            className="text-white uppercase leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Reserve Your Spot
            <br />
            <span className="text-red-600">Today</span>
          </h2>
          <p className="flex items-center gap-2 text-neutral-400 text-sm">
            <ShieldCheckIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
            Invest in your safety. Empower your future.
          </p>
        </div>

        <a
          href="https://kaosmt.gymdesk.com/signup/v/D8M9J"
          className="flex-shrink-0 inline-flex items-center justify-center bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-10 py-5 transition-colors duration-200 text-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Register Now
          <br />
          <span className="text-xs font-normal normal-case tracking-normal opacity-75">
            at kaos-mt.com
          </span>
        </a>
      </div>
    </section>
  );
}
