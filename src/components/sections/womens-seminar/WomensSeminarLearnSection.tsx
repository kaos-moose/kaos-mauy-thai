import { EyeIcon, FistIcon, BrainIcon } from "@/components/ui/Icons";

type LearnCard = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

const cards: LearnCard[] = [
  {
    icon: <EyeIcon className="w-10 h-10 text-red-600" />,
    title: "Situational Awareness",
    body: "Recognize behavior, distance, exits, and warning signs before a problem starts.",
  },
  {
    icon: <FistIcon className="w-10 h-10 text-red-600" />,
    title: "Basic Instinctual Combatives",
    body: "Simple gross-motor strikes and responses designed for stress and close-range danger.",
  },
  {
    icon: <BrainIcon className="w-10 h-10 text-red-600" />,
    title: "Understanding the Adrenal Response and How to Use It",
    body: "Understand what happens under stress and how to use it instead of freezing.",
  },
];

export default function WomensSeminarLearnSection() {
  return (
    <section className="relative bg-neutral-950 py-16 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, #dc2626 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="flex-1 max-w-[80px] h-px bg-red-600" />
          <h2
            className="text-white uppercase tracking-[0.2em] text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What You&rsquo;ll Learn
          </h2>
          <div className="flex-1 max-w-[80px] h-px bg-red-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-neutral-900 border border-white/10 flex flex-col items-center text-center p-8 gap-4 relative"
            >
              <div className="p-3 rounded-full border border-red-600/30 bg-red-600/10">
                {icon}
              </div>
              <h3
                className="text-white uppercase text-sm leading-snug tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{body}</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-red-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
