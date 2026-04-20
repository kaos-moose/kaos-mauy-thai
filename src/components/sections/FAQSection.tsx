"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need experience?",
    a: "No. Most members start with zero experience. Our coaches are trained to work with complete beginners.",
  },
  {
    q: "Am I in shape enough to start?",
    a: "Yes. Classes are designed for all fitness levels. You'll get in shape by training — you don't need to be in shape to begin.",
  },
  {
    q: "What should I bring?",
    a: "Just yourself. We'll guide you through everything you need for your first class.",
  },
  {
    q: "When are you opening?",
    a: "We're opening soon. Founding members will get early access and be the first to know our exact opening date.",
  },
  {
    q: "Is this safe for beginners?",
    a: "Yes. We focus on controlled, structured training in a supportive environment. Safety and proper technique are always the priority.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-neutral-950 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-white uppercase text-center mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-white/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-6 flex items-center justify-between gap-4 text-white hover:text-red-400 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <span className="text-red-600 text-2xl font-light flex-shrink-0 leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="pb-6 text-neutral-400 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
