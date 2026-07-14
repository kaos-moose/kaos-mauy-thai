"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

const STORAGE_KEY = "starter-pass-dismissed";

const features = [
  "Unlimited Muay Thai, Conditioning, and Self Defense classes",
  "Beginner-friendly introduction and orientation",
  "Loaner gloves when available",
  "Free KAOSMT shirt when you become a member before your pass expires",
  "Discounted enrollment when you join before the pass expires",
];

export default function StarterPassModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75"
      onClick={dismiss}
    >
      <div
        className="relative flex w-full max-w-4xl max-h-[90vh] overflow-hidden bg-neutral-950"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="2-Week Starter Pass offer"
      >
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 text-white text-lg transition-colors"
          aria-label="Close offer"
        >
          ✕
        </button>

        {/* Image panel (hidden on mobile) */}
        <div className="relative hidden md:block w-[45%] flex-shrink-0">
          <Image
            src="/kaos-site-pic-bags.jpg"
            alt="KAOSMT members training in the gym"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col justify-between p-8">
            {/* Logo */}
            <Image
              src="/kaosmt-logo.jpg"
              alt="KAOSMT logo"
              width={80}
              height={80}
              className="object-contain"
            />
            {/* Bottom overlay text */}
            <div>
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-red-600 inline-block" />
                Start Training Today
              </p>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="text-white text-5xl font-black uppercase leading-none"
              >
                14 Days.
                <br />
                Unlimited.
              </h2>
            </div>
          </div>
        </div>

        {/* Content panel */}
        <div className="flex flex-col overflow-y-auto p-7 flex-1">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-red-600 inline-block" />
            New Member Offer
          </p>

          <div className="mb-4">
            <p
              style={{ fontFamily: "var(--font-display)" }}
              className="text-white text-2xl font-black uppercase leading-none"
            >
              KAOSMT
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-red-600 text-4xl sm:text-5xl font-black uppercase leading-none"
            >
              2-Week Starter
              <br />
              Pass
            </h2>
          </div>

          <div className="flex items-baseline gap-3 mb-3">
            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="text-white text-5xl font-black"
            >
              $39
            </span>
            <span className="text-neutral-400 text-sm uppercase tracking-widest font-bold">
              For 14 Days
            </span>
          </div>

          <p className="text-neutral-300 text-sm mb-5 leading-relaxed">
            Build momentum with two full weeks of beginner-friendly training—not
            just one class.
          </p>

          <ul className="space-y-3 mb-7">
            {features.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-neutral-200">
                <svg
                  className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          {/* Wrap in div to capture click for dismiss before navigation */}
          <div onClick={dismiss}>
            <Button href="https://kaosmt.gymdesk.com/signup/v/DJ9og" target="_blank" rel="noopener noreferrer">Claim My 14-Day Pass</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
