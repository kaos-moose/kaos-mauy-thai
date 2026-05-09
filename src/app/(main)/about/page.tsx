import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About KAOSMT | Helena, MT",
  description:
    "KAOSMT is a Muay Thai and Krav Maga academy built for Helena, Montana. Real training, real confidence, supportive community.",
};

export default function AboutPage() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      {/* Intro */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <Image
          src="/section-5.jpg"
          fill
          alt=""
          className="object-cover object-center"
          aria-hidden="true"
          priority
        />
        <div className="absolute inset-0 bg-neutral-950/80" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1
              className="text-5xl md:text-6xl text-white uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built for Helena.
              <br />
              Built for You.
            </h1>
            <div className="w-14 h-[3px] bg-red-600 mt-6 mx-auto" />
          </div>

          <div className="space-y-8 text-neutral-300 text-lg leading-relaxed">
            <p>
              KAOSMT is a Muay Thai and Krav Maga academy created for people who want real training,
              real confidence, and a supportive community.
            </p>
            <p>
              Whether you are brand new or have experience, KAOSMT is built to help you improve your
              fitness, learn practical skills, and train with purpose.
            </p>
          </div>

          <div className="mt-20 border-l-4 border-red-600 pl-8">
            <p
              className="text-2xl md:text-3xl text-white uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Strong body. Sharp mind. Relentless spirit.
            </p>
          </div>
        </div>
      </section>

      {/* KAOSMT Standard */}
      <section className="bg-neutral-950 py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">
            The KAOSMT Standard
          </p>
          <h2
            className="text-5xl md:text-6xl text-white uppercase mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            KAOSMT Standard
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mx-auto mb-12" />

          <div className="grid grid-cols-3 gap-4 mb-12">
            {["Hard Work", "Mutual Respect", "No Ego"].map((value) => (
              <div
                key={value}
                className="border border-red-600 px-4 py-5 text-white text-sm font-bold uppercase tracking-wider flex items-center justify-center text-center"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {value}
              </div>
            ))}
          </div>

          <p className="text-neutral-400 text-base mb-10">
            If that sounds like your kind of gym, we&apos;d love to meet you.
          </p>

          <p className="text-neutral-500 text-xs uppercase tracking-widest mb-5">
            Build it with us.
          </p>
          <a
            href="/founders"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Become a Founder
            <span className="text-base leading-none">&rsaquo;</span>
          </a>
        </div>
      </section>

      {/* Coaches */}
      <section className="relative py-24 px-4 overflow-hidden">
        <Image
          src="/hero-pic-2.webp"
          fill
          alt=""
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-neutral-950/85" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">
              Meet the Coaches
            </p>
            <h2
              className="text-4xl md:text-5xl text-white uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Who We Are
            </h2>
            <div className="w-14 h-[3px] bg-red-600 mt-5 mx-auto" />
          </div>

          {/* Coach card */}
          <div className="grid md:grid-cols-2 gap-0 bg-neutral-950">
            <div className="relative flex items-baseline bg-black overflow-hidden">
              <Image
                src="/kaos-coach-criss.jpg"
                width={2048}
                height={1360}
                alt="Criss Moosman — Head Coach, KAOSMT"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-neutral-950" />
            </div>

            <div className="p-10 md:p-14 flex flex-col justify-center">
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">
                Head Coach &amp; Founder
              </p>
              <h3
                className="text-3xl md:text-4xl text-white uppercase mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Criss Moosman
              </h3>
              <div className="w-10 h-[2px] bg-red-600 mb-8" />

              <div className="space-y-4 text-neutral-400 text-sm leading-relaxed">
                <p>
                  Criss is a lifetime student of Budo and a firm believer in Bruce Lee&apos;s
                  philosophy — <em className="text-neutral-300">&ldquo;Using no way as way, using no
                  limitation as limitation. Absorb what is useful, and reject what is useless for
                  you.&rdquo;</em>
                </p>
                <p>
                  He began Police Athletic League Boxing and kickboxing at age ten, accumulating over
                  30 amateur boxing and kickboxing matches by sixteen. He went on to compete in Muay
                  Thai professionally with over 30 fights.
                </p>
                <p>
                  After serving in the US Army&apos;s 3/75 Ranger Regiment with multiple
                  deployments, Criss returned to Arizona and pursued Krav Maga — earning full
                  certification as an instructor and law enforcement trainer under Darrin Levine of
                  Krav Maga Worldwide.
                </p>
                <p>
                  He opened and operated multiple schools across the Phoenix metro area, coaching
                  Krav Maga and Muay Thai for nearly ten years — training professional and amateur
                  fighters across MMA, Muay Thai, and boxing, while consulting with the Phoenix Gang
                  Unit on de-escalation, situational awareness, and weapon retention under high
                  adrenaline conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
