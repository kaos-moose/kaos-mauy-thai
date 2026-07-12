import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact KAOSMT | Helena, MT",
  description:
    "Contact KAOSMT with questions about classes, memberships, private training, seminars, or the July grand opening in Helena, Montana.",
};

const followReasons = [
  "Class announcements",
  "Training videos",
  "Student progress",
  "Seminar registration",
  "Grand opening updates",
  "Schedule changes",
  "New program announcements",
];

export default function ContactPage() {
  return (
    <main className="bg-neutral-950">

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden" style={{ minHeight: "min(60vh, 480px)" }}>
        <Image
          src="/kaos-mt-hero-banner-2.jpg"
          fill
          alt="KAOSMT training"
          className="object-cover"
          style={{ objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-neutral-950/55" />
        <div className="relative z-10 max-w-[1080px] mx-auto flex flex-col justify-center h-full">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-none mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to <span className="text-red-600">Start?</span>
          </h1>
          <div className="w-14 h-[3px] bg-red-600 mb-8" />
          <p className="text-neutral-300 text-xl max-w-2xl leading-relaxed">
            Contact KAOSMT with questions about classes, memberships, private
            training, seminars, or the July grand opening.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}

      <section className="bg-neutral-900 py-20 px-6">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-[1fr_2fr] gap-14 items-start">

          {/* Contact Info */}
          <div>
            <h2
              className="text-2xl text-white uppercase mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              KAOSMT
            </h2>

            <div className="space-y-6 text-sm">
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mb-2">Address</p>
                <p className="text-neutral-300">3023 Bozeman Avenue</p>
                <p className="text-neutral-300">Helena, MT 59601</p>
              </div>

              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mb-3">Social</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61563213360278"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
                  >
                    Facebook →
                  </a>
                  <a
                    href="https://www.instagram.com/kaosmauythai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
                  >
                    Instagram →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/90 px-8 md:px-12 py-14">
            <div className="mb-8">
              <h2
                className="text-3xl text-neutral-900 uppercase mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send a Message
              </h2>
              <p className="text-neutral-500 text-sm">
                Fill out the form below and we will be in touch.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            Location
          </p>
          <h2
            className="text-4xl md:text-5xl text-white uppercase mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Visit the Academy
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mb-10" />

          {/* Google Maps embed — replace src with embed URL from Google Maps > Share > Embed a map */}
          <div className="w-full aspect-video border border-white/10 overflow-hidden mb-8 bg-neutral-900">
            <iframe
              src="https://maps.google.com/maps?q=3023+Bozeman+Avenue+Helena+MT+59601&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KAOSMT location — 3023 Bozeman Avenue, Helena, MT"
            />
          </div>

          <p className="text-neutral-400 text-sm border-l-2 border-red-600 pl-5 leading-relaxed">
            Please arrive 10–15 minutes early for your first class. Parking and
            entrance instructions will be provided when you register.
          </p>
        </div>
      </section>

      {/* Stay Connected + Final CTA */}
      <section className="bg-neutral-900 py-24 px-6">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* Left: Stay Connected */}
          <div>
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
              Stay Connected
            </p>
            <h2
              className="text-4xl md:text-5xl text-white uppercase mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Follow KAOSMT
            </h2>
            <div className="w-14 h-[3px] bg-red-600 mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://www.facebook.com/profile.php?id=61563213360278"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-wider px-6 py-4 text-sm text-center transition-colors duration-200"
              >
                Follow on Facebook
              </a>
              <a
                href="https://www.instagram.com/kaosmauythai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white hover:border-red-600 hover:text-red-600 text-white font-bold uppercase tracking-wider px-6 py-4 text-sm text-center transition-colors duration-200"
              >
                Follow on Instagram
              </a>
            </div>
            <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-5">
              Follow KAOSMT for
            </p>
            <ul className="space-y-3">
              {followReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-neutral-300 text-sm">
                  <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">—</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Final CTA */}
          <div className="md:border-l md:border-white/10 md:pl-14">
            <h2
              className="text-4xl md:text-5xl text-white uppercase leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your First Step{" "}
              <span className="text-red-600">Starts Here</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              Choose a class, contact the academy, and begin training.
            </p>
            <Button href="/schedule" size="lg">
              View Schedule
            </Button>
          </div>

        </div>
      </section>

    </main>
  );
}
