"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const inputClass =
  "w-full bg-neutral-100 border border-neutral-200 text-neutral-900 placeholder-neutral-400 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors";
const labelClass = "block text-neutral-500 text-xs uppercase tracking-widest mb-2";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
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

  if (status === "success") {
    return (
      <div className="border border-red-600/30 bg-red-50 p-10 text-center">
        <div className="text-5xl text-red-600 font-bold mb-4">✓</div>
        <h3
          className="text-2xl text-neutral-900 uppercase mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Message Received!
        </h3>
        <p className="text-neutral-500">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>Name</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder="Your name"
          className={inputClass}
        />
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
          value={form.phone}
          onChange={(e) => set("phone", formatPhone(e.target.value))}
          placeholder="(406) 555-0100"
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea
          required
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Your message..."
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="block w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-wider px-8 py-4 text-base transition-colors duration-200 cursor-pointer disabled:opacity-60"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {status === "loading" ? "Sending…" : "Claim Your Founders Spot"}
        </button>
      </div>
    </form>
  );
}
