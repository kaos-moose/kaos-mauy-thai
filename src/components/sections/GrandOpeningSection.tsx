import Button from "@/components/ui/Button";

export default function GrandOpeningSection() {
  return (
    <section className="bg-red-600 py-24 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="max-w-2xl mx-auto text-center">
        <p className="text-black/60 text-xs font-bold uppercase tracking-widest mb-4">
          Helena, MT
        </p>

        <h2
          className="text-4xl md:text-5xl text-black uppercase mb-6 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Grand Opening — July 18
        </h2>

        <div className="w-14 h-[3px] bg-black/30 mx-auto mb-10" />

        <p className="text-black/80 text-lg leading-relaxed mb-10">
          The new KAOSMT academy is opening in Helena. Come tour the facility,
          meet the coaches, watch demonstrations, learn about our programs, and
          find the right training path for you.
        </p>

        <div className="mb-10">
          <Button
            href="#contact-form"
            size="lg"
            className="bg-black hover:bg-neutral-900 active:bg-neutral-800 text-white"
          >
            Get Grand Opening Details
          </Button>
        </div>

        <p className="text-black/70 text-sm">
          Follow KAOSMT on{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61563213360278"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-black transition-colors"
          >
            Facebook
          </a>{" "}
          and{" "}
          <a
            href="https://www.instagram.com/kaosmauythai/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-black transition-colors"
          >
            Instagram
          </a>{" "}
          for schedule announcements, events, training clips, and opening-week
          updates.
        </p>
        </div>
      </div>
    </section>
  );
}
