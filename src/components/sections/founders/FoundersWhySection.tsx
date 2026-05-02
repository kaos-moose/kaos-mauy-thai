export default function FoundersWhySection() {
  return (
    <section className="bg-neutral-900 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-5xl text-white uppercase leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            You&apos;re Not Just Joining a Gym.
            <br />
            <span className="text-red-600">You&apos;re Building One.</span>
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mx-auto" />
        </div>

        <div className="space-y-6 text-neutral-300 text-base md:text-lg">
          <p>
            The first members of any gym shape its energy, standards, and culture.
          </p>
          <p>
            That&apos;s why we created the KAOSMT Founders Program — an exclusive opportunity
            for the first 50 people who want to be here from day one.
          </p>
          <p className="text-white font-semibold text-xl md:text-2xl border-l-4 border-red-600 pl-5">
            As a Founder, you&apos;re not just a member.
            <br />
            You help build what this becomes.
          </p>
        </div>
      </div>
    </section>
  );
}
