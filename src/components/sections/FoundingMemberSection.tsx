import Button from "@/components/ui/Button";

const perks = [
  "Locked-in discounted membership",
  "Priority access to classes",
  "First access to all programs",
  "A spot in our founding community",
];

export default function FoundingMemberSection() {
  return (
    <section className="bg-neutral-950 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="border border-red-600/40 bg-red-950/10 p-10 md:p-16 text-center">
          <div className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 mb-8">
            Limited to 50 Members
          </div>

          <h2
            className="text-4xl md:text-6xl text-white uppercase leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Founding Memberships
            <br />
            Now Open
          </h2>

          <p className="text-neutral-300 text-lg mb-10">
            We&apos;re offering exclusive founding member rates before we open.
          </p>

          <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs mb-6">
            As a founding member, you get:
          </p>

          <ul className="space-y-3 text-left inline-block mb-12">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-white text-lg">
                <span className="text-red-500 font-bold flex-shrink-0">✓</span>
                {perk}
              </li>
            ))}
          </ul>

          <div className="border-t border-red-600/20 pt-10">
            <p className="text-red-400 font-bold mb-4">
              ⚠️ Once these 50 spots are gone, regular pricing goes into effect.
            </p>
            <p className="text-neutral-400 mb-8">
              Secure your spot now before we open.
            </p>
            <Button href="#contact-form" size="lg" className="text-lg px-10 py-5">
              Claim Your Spot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
