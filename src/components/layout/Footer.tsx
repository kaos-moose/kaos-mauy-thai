const navLinks = [
  { label: "Home", href: "/" },
  { label: "Charter Membership", href: "/charter" },
  { label: "Schedule", href: "/schedule" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10 px-4 text-center">
      <p
        className="text-white/70 text-2xl uppercase tracking-widest mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        KAOS MUAY THAI
      </p>
      <p className="text-neutral-500 text-sm mb-6">Helena, Montana</p>
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-neutral-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
      <p className="text-neutral-600 text-xs">
        © {new Date().getFullYear()} Kaos Muay Thai. All rights reserved.
      </p>
    </footer>
  );
}
