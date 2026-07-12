import { ClockIcon, CalendarIcon, PriceTagIcon } from "@/components/ui/Icons";

type DetailCard = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const details: DetailCard[] = [
  {
    icon: <ClockIcon className="w-8 h-8 text-red-600" />,
    label: "Duration",
    value: "3-Hour Seminar",
  },
  {
    icon: <CalendarIcon className="w-8 h-8 text-red-600" />,
    label: "Date",
    value: "July 11",
  },
  {
    icon: <ClockIcon className="w-8 h-8 text-red-600" />,
    label: "Time",
    value: "9:00 AM – Noon",
  },
  {
    icon: <PriceTagIcon className="w-8 h-8 text-red-600" />,
    label: "Cost",
    value: "$100",
  },
];

export default function WomensSeminarDetailsSection() {
  return (
    <section className="bg-neutral-900 py-16 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="flex-1 max-w-[80px] h-px bg-red-600" />
          <h2
            className="text-white uppercase tracking-[0.2em] text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Seminar Details
          </h2>
          <div className="flex-1 max-w-[80px] h-px bg-red-600" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {details.map(({ icon, label, value }) => (
            <div
              key={label}
              className="bg-neutral-950 border border-white/10 flex flex-col items-center text-center p-6 gap-3"
            >
              {icon}
              <p className="text-neutral-400 text-[10px] uppercase tracking-widest font-bold">
                {label}
              </p>
              <p
                className="text-white uppercase text-lg leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
