import Image from "next/image";
import Button from "@/components/ui/Button";

const programs = [
  {
    title: "Muay Thai",
    description:
      "Learn effective striking while building exceptional conditioning, coordination, and confidence. Classes combine technical instruction, pad work, heavy-bag training, partner drills, and controlled sparring opportunities as students progress.",
    buttonLabel: "Explore Muay Thai",
  },
  {
    title: "KAOS Self-Defense System",
    description:
      "Practical, concept-based self-defense designed for real-world situations. Students develop situational awareness, striking ability, defensive movement, stress management, and the mindset to respond decisively when avoidance is no longer possible.",
    buttonLabel: "Explore Self-Defense",
  },
  {
    title: "Muay Thai Strength & Conditioning",
    description:
      "A high-energy training class combining Muay Thai heavy-bag work with functional strength exercises, bodyweight movements, and fight-specific conditioning. No sparring. All exercises can be modified for different fitness levels.",
    buttonLabel: "Explore Conditioning",
  },
];

export default function ProgramsSection() {
  return (
    <section className="bg-neutral-900 py-24 px-6" id="programs">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column: header + stacked cards */}
          <div>
            <div className="mb-10">
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
                What We Offer
              </p>
              <h2
                className="text-4xl md:text-5xl text-white uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Choose Your Training
              </h2>
            </div>

            <div className="flex flex-col gap-px bg-white/5">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="bg-neutral-950 p-8 flex flex-col"
                >
                  <h3
                    className="text-2xl text-white uppercase mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {program.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm mb-6 flex-1">
                    {program.description}
                  </p>
                  <div>
                    <Button href="/classes" size="md">
                      {program.buttonLabel}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: image */}
          <div className="relative w-full h-[600px] md:h-full md:min-h-[700px] md:sticky md:top-8">
            <Image
              src="/kaos-site-pic-thai-pads-2.png"
              alt="Muay Thai pad work training at KAOS Muay Thai"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
