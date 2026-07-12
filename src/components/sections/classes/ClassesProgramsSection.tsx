import Image from "next/image";

type Program = {
  title: string;
  tagline: string;
  intro: string;
  classesLabel: string;
  bullets: string[];
  bestFor: string;
  bg: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
};

const programs: Program[] = [
  {
    title: "Muay Thai",
    tagline: "Striking. Conditioning. Discipline.",
    intro:
      "Muay Thai is a complete striking system that uses punches, kicks, knees, elbows, and clinch work. KAOSMT classes develop practical technique, timing, balance, coordination, power, and fight-specific conditioning through structured instruction and progressive training.",
    classesLabel: "Classes may include:",
    bullets: [
      "Technical striking instruction",
      "Shadowboxing",
      "Heavy-bag training",
      "Focus mitt and Thai pad work",
      "Partner drills",
      "Footwork and defensive movement",
      "Clinch fundamentals",
      "Conditioning rounds",
      "Controlled sparring for qualified students",
    ],
    bestFor:
      "Fitness, striking skills, confidence, discipline, and technical development.",
    bg: "bg-neutral-950",
    image: "/kaos-site-pic-conditioning-4.png",
    imageAlt: "Muay Thai training at KAOS Muay Thai",
    imagePosition: "right",
  },
  {
    title: "KAOS Self-Defense System",
    tagline: "Awareness. Response. Survival.",
    intro:
      "The KAOS Self-Defense System is a practical, concept-based training program built around the realities of personal safety and violent encounters. The system is not based on competition or point fighting. Training focuses on recognizing danger early, avoiding unnecessary conflict, managing distance, responding with simple gross-motor skills, and creating an opportunity to escape.",
    classesLabel: "Classes may include:",
    bullets: [
      "Situational awareness",
      "Recognition of pre-incident indicators",
      "Boundary setting and verbal engagement",
      "Movement, distance, and positioning",
      "Instinctive striking",
      "Defensive responses",
      "Releases from common grabs and holds",
      "Defense from standing attacks",
      "Ground survival concepts",
      "Multiple-threat awareness",
      "Environmental training",
      "Adrenal-stress concepts",
      "Scenario-based drills",
      "Decision-making under pressure",
    ],
    bestFor:
      "Personal safety, confidence, awareness, mindset, and practical self-defense.",
    bg: "bg-neutral-900",
    image: "/kaso-self-defense-pic-3.png",
    imageAlt: "KAOS Self-Defense System training",
    imagePosition: "left",
  },
  {
    title: "Muay Thai Strength & Conditioning",
    tagline: "Build the Engine.",
    intro:
      "This high-energy conditioning class combines Muay Thai heavy-bag training with functional strength exercises, bodyweight movements, and core-focused intervals. Participants work punches, kicks, knees, and combinations alongside a range of conditioning exercises.",
    classesLabel: "Exercises include:",
    bullets: [
      "Pushups",
      "Squats",
      "Lunges",
      "Sprawls",
      "Planks",
      "Rotational core movements",
      "Explosive bodyweight drills",
      "Fight-specific conditioning intervals",
    ],
    bestFor: "Fitness, fat loss, endurance, strength, and high-energy training.",
    bg: "bg-neutral-950",
    image: "/kaos-site-pic-conditioning-2.png",
    imageAlt: "Muay Thai Strength & Conditioning training at KAOS Muay Thai",
    imagePosition: "right",
  },
];

function ProgramContent({ program }: { program: Program }) {
  return (
    <>
      <p
        className="text-red-600 text-xs font-bold uppercase tracking-widest mb-3"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {program.tagline}
      </p>
      <h2
        className="text-4xl md:text-5xl text-white uppercase mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {program.title}
      </h2>
      <div className="w-14 h-[3px] bg-red-600 mb-8" />

      <p className="text-neutral-300 text-lg leading-relaxed mb-10 max-w-3xl">
        {program.intro}
      </p>

      <div className="mb-10">
        <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-5">
          {program.classesLabel}
        </p>
        <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
          {program.bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-neutral-300 text-sm">
              <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-l-2 border-red-600 pl-5">
        <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">
          Best for
        </p>
        <p className="text-neutral-300 text-sm">{program.bestFor}</p>
      </div>
    </>
  );
}

export default function ClassesProgramsSection() {
  return (
    <>
      {programs.map((program) => (
        <section key={program.title} className={`${program.bg} py-24 px-6`}>
          <div className="max-w-[1080px] mx-auto">
            {program.image ? (
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {program.imagePosition === "left" && (
                  <div className="relative w-full h-[500px] md:h-full md:min-h-[700px] md:sticky md:top-8">
                    <Image
                      src={program.image}
                      alt={program.imageAlt ?? ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div>
                  <ProgramContent program={program} />
                </div>
                {program.imagePosition !== "left" && (
                  <div className="relative w-full h-[500px] md:h-full md:min-h-[700px] md:sticky md:top-8">
                    <Image
                      src={program.image}
                      alt={program.imageAlt ?? ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
            ) : (
              <ProgramContent program={program} />
            )}
          </div>
        </section>
      ))}
    </>
  );
}
