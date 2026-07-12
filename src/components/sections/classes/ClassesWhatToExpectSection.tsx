import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ClassesWhatToExpectSection() {
  return (
    <section className="bg-neutral-900 py-24 px-6">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left: image */}
        <div className="relative w-full h-[500px] md:h-full md:min-h-[500px] md:sticky md:top-8">
          <Image
            src="/kaos-mt-hero-banner-1.webp"
            alt="KAOSMT training"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: content */}
        <div>
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            Your First Class
          </p>
          <h2
            className="text-4xl md:text-5xl text-white uppercase mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What to Expect
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mb-10" />

          <div className="space-y-6 text-neutral-300 text-lg leading-relaxed mb-12">
            <p>Arrive 10–15 minutes before your first class.</p>
            <p>
              Wear comfortable athletic clothing and bring water.
              Program-specific equipment recommendations will be provided after
              you begin.
            </p>
            <p>
              You do not need to already be fit, flexible, or experienced.
              Coaches will help you work at an appropriate pace while maintaining
              the standards and intensity of the class.
            </p>
          </div>

          <Button href="/schedule" size="lg">
            View Schedule
          </Button>
        </div>

      </div>
    </section>
  );
}
