"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Charter Membership", href: "/charter" },
  { label: "Schedule", href: "/schedule" },
  { label: "About KAOSMT", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        <a href="/" className="flex-shrink-0 flex flex-col items-center">
          <Image
            src="/kaos-shield-logo.webp"
            alt="KAOSMT logo"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
            priority
          />
          <div className="text-white/30 text-[9px] uppercase tracking-[0.2em] mt-0.5">
            Muay Thai | Krav Maga
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-150 whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </nav>

        <Button
          href="/charter"
          size="md"
          className="hidden md:inline-block flex-shrink-0 text-xs tracking-widest whitespace-nowrap"
        >
          Claim Your Charter Spot
        </Button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1 flex-shrink-0"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-neutral-950 border-t border-white/5 px-6 py-6 space-y-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-white text-sm font-bold uppercase tracking-widest py-3 border-b border-white/5 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-4">
            <Button href="/charter" size="md" className="w-full text-center text-xs tracking-widest">
              Claim Your Charter Spot
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
