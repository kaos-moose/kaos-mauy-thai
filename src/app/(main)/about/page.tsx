import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About KAOSMT | Helena, MT",
  description:
    "KAOSMT was created to provide Helena with serious Muay Thai, practical self-defense, and high-level conditioning in a professional, beginner-friendly environment.",
};

const philosophy = [
  {
    title: "Practical",
    body: "Students should understand why they are doing each drill and how it connects to a real skill.",
  },
  {
    title: "Progressive",
    body: "Training should begin with strong fundamentals and increase in complexity as the student develops.",
  },
  {
    title: "Challenging",
    body: "Growth requires effort. Classes should push students while remaining safe and productive.",
  },
  {
    title: "Accountable",
    body: "Students and coaches should maintain high standards for effort, safety, respect, and consistency.",
  },
  {
    title: "Adaptable",
    body: "Every student arrives with different experience, fitness, and physical capabilities. Good coaching meets the student where they are without lowering the standard of development.",
  },
];

const facilityHighlights = [
  "Dedicated matted training area",
  "Heavy-bag stations",
  "Muay Thai pad and partner-training equipment",
  "Strength and conditioning equipment",
  "Professional lighting and branded training space",
  "Changing and storage areas",
  "Founders wall",
  "Clean, organized training environment",
];

const values = [
  {
    word: "Strength",
    body: "Strength is developed through consistent effort.",
  },
  {
    word: "Discipline",
    body: "Discipline is built by showing up when motivation fades.",
  },
  {
    word: "Focus",
    body: "Focus is the ability to remain present and perform when pressure increases.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-neutral-950">

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden" style={{ minHeight: "min(70vh, 560px)" }}>
        <Image
          src="/kaos-mt-hero-banner-3.jpg"
          fill
          alt="KAOSMT training"
          className="object-cover"
          style={{ objectPosition: "-12% center" }}
          priority
        />
        <div className="absolute inset-0 bg-neutral-950/75" />
        <div className="relative z-10 max-w-[1080px] mx-auto flex flex-col justify-center h-full">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            About KAOSMT
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-none mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for People Who Want{" "}
            <span className="text-red-600">More</span>
          </h1>
          <div className="w-14 h-[3px] bg-red-600 mb-8" />
          <p className="text-neutral-300 text-xl max-w-2xl leading-relaxed">
            KAOSMT was created to provide Helena with serious Muay Thai, practical
            self-defense, and high-level conditioning in a professional,
            beginner-friendly environment.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            Our Mission
          </p>
          <h2
            className="text-4xl md:text-5xl text-white uppercase mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why KAOSMT Exists
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mb-10" />
          <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
            <p>Most people want to become stronger, more confident, and more capable.</p>
            <p>
              The problem is that many training environments are either too intimidating for
              beginners, too focused on fitness without practical skill, or too disconnected
              from the realities of personal safety.
            </p>
            <p className="text-white font-medium">KAOSMT was built to close that gap.</p>
            <p>
              Our mission is to give ordinary people access to purposeful training that
              improves physical fitness, develops real skills, and strengthens the mindset
              required to perform under pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="bg-neutral-900 py-24 px-6">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column: header + philosophy cards */}
            <div>
              <div className="mb-10">
                <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
                  Our Training Philosophy
                </p>
                <h2
                  className="text-4xl md:text-5xl text-white uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Train With Purpose
                </h2>
                <div className="w-14 h-[3px] bg-red-600 mt-6" />
                <p className="text-neutral-400 text-lg mt-6">
                  We believe effective training should be:
                </p>
              </div>

              <div className="flex flex-col gap-px bg-white/5">
                {philosophy.map((item) => (
                  <div key={item.title} className="bg-neutral-950 p-8">
                    <div className="w-8 h-[2px] bg-red-600 mb-5" />
                    <h3
                      className="text-xl text-white uppercase mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: image */}
            <div className="relative w-full h-[500px] md:h-full md:min-h-[700px] md:sticky md:top-8">
              <Image
                src="/kaos-site-pic-conditioning-3.png"
                alt="Conditioning training at KAOS Muay Thai"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder / Coach */}
      <section className="py-24 px-6">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
              Founder &amp; Coach
            </p>
            <h2
              className="text-4xl md:text-5xl text-white uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built From Experience
            </h2>
            <div className="w-14 h-[3px] bg-red-600 mt-6 mx-auto" />
            <p className="text-neutral-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              KAOSMT brings together decades of experience in martial arts, defensive
              training, physical conditioning, leadership, and high-pressure environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 bg-neutral-900">
            <div className="relative flex items-baseline bg-black overflow-hidden">
              <Image
                src="/kaos-coach-criss.jpg"
                width={2048}
                height={1360}
                alt="Criss Moosman — Head Coach, KAOSMT"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-neutral-900" />
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
                  Criss is a lifelong student of Budo and a firm believer in Bruce Lee&apos;s philosophy:
                </p>
                <p>
                  <em className="text-neutral-300">
                    &ldquo;Using no way as way. Using no limitation as limitation. Absorb what is useful,
                    reject what is useless, and add what is specifically your own.&rdquo;
                  </em>
                </p>
                <p>
                  His approach to teaching reflects that philosophy—drawing from multiple disciplines to
                  develop practical skills that perform under pressure rather than adhering to any single style.
                </p>
                <p>
                  Criss began training at the age of ten through Police Athletic League boxing and kickboxing.
                  By sixteen, he was competing in amateur boxing and kickboxing before advancing into
                  professional Muay Thai and mixed martial arts competition. Those years of competition
                  provided a strong foundation in striking, timing, pressure testing, and the practical
                  application of fighting skills.
                </p>
                <p>
                  Criss served in the U.S. Army&apos;s 3/75 Ranger
                  Regiment, completing multiple deployments. That experience reinforced the importance of
                  decision-making under stress, situational awareness, discipline, and performance when the
                  stakes are real—principles that continue to influence his training methodology today.
                </p>
                <p>
                  In addition to his martial arts background, Criss is a certified NRA firearms instructor
                  with more than three decades of firearms experience. He has instructed students in firearms
                  safety, marksmanship fundamentals, drawstroke mechanics, malfunction clearance, and
                  defensive shooting principles for new and experienced shooters alike.
                </p>
                <p>
                  Criss later founded and operated multiple combat sports academies throughout the Phoenix
                  metropolitan area, where he spent nearly a decade coaching self-defense and Muay Thai.
                  During that time, he coached both amateur and professional competitors in boxing, Muay Thai,
                  and MMA while also working with the Phoenix Gang Unit on topics including situational
                  awareness, verbal de-escalation, weapon retention, and performance under high-adrenaline
                  conditions.
                </p>
                <p>
                  Today, Criss is the founder and head instructor of KAOSMT, where he coaches Muay Thai and
                  the KAOS Self Defense System. His instruction combines proven striking fundamentals,
                  practical self-defense concepts, stress-based training, and mindset development to prepare
                  students not just for competition, but for the realities of personal protection and
                  everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="/kaos-mt-hero-banner-1.webp"
          fill
          alt="KAOSMT facility"
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-neutral-950/80" />
        <div className="relative z-10 max-w-[1080px] mx-auto">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            Our Facility
          </p>
          <h2
            className="text-4xl md:text-5xl text-white uppercase mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The KAOSMT Academy
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mb-8" />
          <p className="text-neutral-300 text-lg leading-relaxed mb-10 max-w-2xl">
            Our Helena facility is designed to support serious training in a clean,
            professional environment.
          </p>
          <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-10">
            {facilityHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-neutral-300 text-sm">
                <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-900 py-24 px-6 text-center">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            Our Values
          </p>
          <h2
            className="text-4xl md:text-5xl text-white uppercase mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Strength. Discipline. Focus.
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mx-auto mb-14" />

          <div className="grid sm:grid-cols-3 gap-px bg-white/5 mb-14">
            {values.map((v) => (
              <div key={v.word} className="bg-neutral-950 p-10">
                <h3
                  className="text-2xl text-white uppercase mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {v.word}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>

          <p className="text-neutral-400 text-base leading-relaxed mb-10">
            These principles guide the way we train, coach, and build the KAOSMT community.
          </p>

          <Button href="#contact-form" size="lg">
            Start Training
          </Button>
        </div>
      </section>

    </main>
  );
}
