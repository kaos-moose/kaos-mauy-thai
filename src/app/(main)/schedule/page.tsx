import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Schedule | KAOSMT Helena, MT",
  description:
    "View the Muay Thai and Krav Maga class schedule at KAOSMT — Helena, Montana's new martial arts academy. Opening soon.",
};

const schedule = [
  { day: "Monday", kravMaga: "5:00–6:00 PM", muayThai: "6:00–7:00 PM" },
  { day: "Tuesday", kravMaga: "6:00–7:00 PM", muayThai: "5:00–6:00 PM" },
  { day: "Wednesday", kravMaga: "5:00–6:00 PM", muayThai: "6:00–7:00 PM" },
  { day: "Thursday", kravMaga: "6:00–7:00 PM", muayThai: "5:00–6:00 PM" },
  { day: "Saturday", kravMaga: "9:00–10:00 AM", muayThai: "10:00–11:30 AM" },
];

const pricing = [
  { membership: "Muay Thai Only", regular: "$130/mo", founder: "$110/mo", best: false },
  { membership: "Krav Maga Only", regular: "$130/mo", founder: "$110/mo", best: false },
  { membership: "Full Access", regular: "$170/mo", founder: "$140/mo", best: true },
];

export default function SchedulePage() {
  return (
    <main className="bg-neutral-950 min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Schedule */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl text-white uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Class Schedule
          </h1>
          <div className="w-14 h-[3px] bg-red-600 mt-6 mx-auto" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-neutral-400 text-xs uppercase tracking-widest font-bold py-4 pr-8 min-w-[120px]">
                  Day
                </th>
                <th className="text-left text-neutral-400 text-xs uppercase tracking-widest font-bold py-4 pr-8">
                  Krav Maga
                </th>
                <th className="text-left text-neutral-400 text-xs uppercase tracking-widest font-bold py-4">
                  Muay Thai
                </th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr
                  key={row.day}
                  className={`border-b border-white/5 ${i % 2 === 0 ? "bg-neutral-900/30" : ""}`}
                >
                  <td
                    className="text-white font-bold uppercase text-sm py-5 pr-8"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {row.day}
                  </td>
                  <td className="text-neutral-300 text-sm py-5 pr-8">{row.kravMaga}</td>
                  <td className="text-neutral-300 text-sm py-5">{row.muayThai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Founder Pricing */}
        <div className="mt-28 text-center mb-16">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">
            Exclusive Rates
          </p>
          <h2
            className="text-5xl md:text-6xl text-white uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Founder Pricing
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mt-5 mx-auto" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-white/10">
            <thead>
              <tr className="bg-neutral-800">
                <th className="text-left text-neutral-400 text-xs uppercase tracking-widest font-bold px-6 py-4">
                  Membership
                </th>
                <th className="text-left text-neutral-400 text-xs uppercase tracking-widest font-bold px-6 py-4">
                  Regular Rate
                </th>
                <th className="text-left text-red-600 text-xs uppercase tracking-widest font-bold px-6 py-4">
                  Founder Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row) => (
                <tr key={row.membership} className="border-t border-white/10">
                  <td className="px-6 py-5">
                    <span
                      className="text-white font-bold uppercase text-sm"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {row.membership}
                    </span>
                    {row.best && (
                      <span className="ml-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 align-middle">
                        Best Value
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5 text-neutral-500 text-sm line-through">
                    {row.regular}
                  </td>
                  <td className="px-6 py-5 text-red-500 font-bold text-lg">
                    {row.founder}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-neutral-500 text-xs uppercase tracking-widest mt-6 mb-10">
          Founder pricing is locked in for life while membership remains active.
        </p>

        <div className="text-center">
          <a
            href="/founders"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lock In My Rate
            <span className="text-base leading-none">&rsaquo;</span>
          </a>
        </div>

      </div>
    </main>
  );
}
