import Image from "next/image";
import { ShieldCheckIcon, PeopleIcon, HeartIcon } from "@/components/ui/Icons";

const benefits = [
  {
    icon: <ShieldCheckIcon className="w-6 h-6 text-red-600" />,
    text: "No previous training required",
  },
  {
    icon: <PeopleIcon className="w-6 h-6 text-red-600" />,
    text: "Beginner-friendly environment",
  },
  {
    icon: <HeartIcon className="w-6 h-6 text-red-600" />,
    text: "Supportive community of women",
  },
  {
    icon: <ShieldCheckIcon className="w-6 h-6 text-red-600" />,
    text: "Train for awareness. Build confidence. Leave with a plan.",
  },
];

export default function WomensSeminarForWhoSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <Image
        src="/kaos-mt-womens-section-background.jpg"
        fill
        alt=""
        className="object-cover object-center opacity-40"
      />

      <div className="relative z-10 max-w-3xl mx-auto bg-neutral-950/60 px-8 md:px-14 py-14 text-center border border-white/8">
        <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">
          Is This You?
        </p>
        <h2
          className="text-3xl md:text-5xl text-white uppercase leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Who It&rsquo;s For
        </h2>
        <div className="w-14 h-[3px] bg-red-600 mx-auto mb-6" />

        <p className="text-neutral-300 text-base md:text-lg mb-10 max-w-md mx-auto">
          Women who want a practical introduction to self-defense, personal
          safety, confidence, and Krav Maga fundamentals.
        </p>

        <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
          {benefits.map(({ icon, text }) => (
            <div key={text} className="flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full border border-red-600/30 bg-red-600/10 flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <p className="text-neutral-300 text-xs leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
