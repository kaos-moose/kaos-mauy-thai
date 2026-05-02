"use client";

import { useState } from "react";
import Image from "next/image";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipInterest: string;
  whyJoin: string;
}

const membershipOptions = [
  { value: "", label: "Select a membership..." },
  { value: "muay-thai", label: "Muay Thai Only" },
  { value: "krav-maga", label: "Krav Maga Only" },
  { value: "full-access", label: "Full Access (Both)" },
];

const inputClass =
  "w-full bg-neutral-100 border border-neutral-200 text-neutral-900 placeholder-neutral-400 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors";
const labelClass = "block text-neutral-500 text-xs uppercase tracking-widest mb-2";

export default function FoundersFormSection() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    membershipInterest: "",
    whyJoin: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const set = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/founders", {
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
    <section id="founders-form" className="relative py-24 px-4 overflow-hidden">
      <Image
        src="/section-5.jpg"
        fill
        alt=""
        className="object-cover object-center opacity-50"
      />

      <div className="relative z-10 max-w-lg mx-auto bg-white/90 px-8 md:px-12 py-14">
        <div className="text-center mb-10">
          <div className="inline-block bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4">
            Apply Now — 50 Spots Total
          </div>
          <h2
            className="text-3xl md:text-4xl text-neutral-900 uppercase mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Apply for Founder Access
          </h2>
          <p className="text-neutral-500 text-sm">
            Submit your application and we&apos;ll reach out to confirm your spot.
          </p>
        </div>

        {status === "success" ? (
          <div className="border border-red-600/30 bg-red-50 p-10 text-center">
            <div className="text-5xl text-red-600 font-bold mb-4">✓</div>
            <h3
              className="text-2xl text-neutral-900 uppercase mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Application Received!
            </h3>
            <p className="text-neutral-500">
              We&apos;ll reach out shortly to confirm your Founder spot. Welcome to the
              beginning.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  placeholder="First"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  placeholder="Last"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Phone</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => set("phone", formatPhone(e.target.value))}
                placeholder="(406) 555-0100"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Membership Interest</label>
              <select
                required
                value={form.membershipInterest}
                onChange={(e) => set("membershipInterest", e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                {membershipOptions.map((o) => (
                  <option key={o.value} value={o.value} disabled={o.value === ""}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass}>Why do you want to join?</label>
              <textarea
                required
                value={form.whyJoin}
                onChange={(e) => set("whyJoin", e.target.value)}
                placeholder="Tell us a bit about yourself and your goals..."
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="text-red-600 text-sm">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="block w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-wider px-8 py-4 text-base transition-colors duration-200 cursor-pointer disabled:opacity-60"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {status === "loading" ? "Submitting…" : "Claim Founder Spot"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
