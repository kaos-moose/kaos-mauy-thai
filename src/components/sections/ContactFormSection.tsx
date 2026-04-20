"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
}

const fields: { key: keyof FormState; label: string; type: string; placeholder: string }[] = [
  { key: "name", label: "Name", type: "text", placeholder: "Your full name" },
  { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
  { key: "phone", label: "Phone Number", type: "tel", placeholder: "(406) 555-0100" },
];

export default function ContactFormSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact-form" className="relative py-24 px-4 overflow-hidden">

      {/* Background image */}
      <Image
        src="/section-5.jpg"
        fill
        alt=""
        className="object-cover object-center opacity-50"
      />

      <div className="relative z-10 max-w-lg mx-auto bg-white/80 px-10 py-16">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl text-neutral-900 uppercase mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Claim Your Founding Membership
          </h2>
          <p className="text-neutral-500">
            Enter your info below and we&apos;ll contact you to reserve your spot and
            schedule your first class.
          </p>
        </div>

        {status === "success" ? (
          <div className="border border-red-600/30 bg-red-50 p-12 text-center">
            <div className="text-5xl text-red-600 font-bold mb-4">✓</div>
            <h3
              className="text-2xl text-neutral-900 uppercase mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You&apos;re on the list!
            </h3>
            <p className="text-neutral-500">
              We&apos;ll reach out shortly to confirm your founding membership spot.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {fields.map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="block text-neutral-500 text-xs uppercase tracking-widest mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  required
                  value={form[key]}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                  placeholder={placeholder}
                  className="w-full bg-neutral-100 border border-neutral-200 text-neutral-900 placeholder-neutral-400 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            ))}

            {status === "error" && (
              <p className="text-red-600 text-sm">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}

            <div className="pt-2">
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Submitting…" : "Claim My Spot"}
              </Button>
            </div>
          </form>
        )}
      </div>

    </section>
  );
}
