import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact KAOSMT | Helena, MT",
  description:
    "Have questions about founding memberships, classes, or opening updates? Contact KAOSMT in Helena, Montana.",
};

export default function ContactPage() {
  return (
    <main className="bg-neutral-950 min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl text-white uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact KAOSMT
          </h1>
          <div className="w-14 h-[3px] bg-red-600 mt-6 mb-8 mx-auto" />
          <p className="text-neutral-400">
            Have questions about founding memberships, classes, or opening updates? Send us a
            message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — form */}
          <div className="bg-white/90 px-8 md:px-12 py-14">
            <ContactForm />
          </div>

          {/* Right — location */}
          <div>
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
              Our Location
            </p>
            <h2
              className="text-2xl text-white uppercase mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Helena, MT
            </h2>
            <p className="text-neutral-300 text-base mb-2">3023 Bozeman Avenue</p>
            <p className="text-neutral-300 text-base mb-1">Helena, MT 59601</p>
            <p className="text-neutral-500 text-sm mb-8">Opening soon</p>

            <div className="overflow-hidden border border-white/10 max-w-[300px]">
              <Image
                src="/kaos-mt-location.png"
                width={800}
                height={500}
                alt="KAOSMT location map — 3023 Bozeman Avenue, Helena, MT"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
