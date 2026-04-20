import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Classes", href: "#contact-form" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact-form" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <div
            className="text-2xl text-white uppercase leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            KAOS<span className="text-red-600">MT</span>
          </div>
          <div className="text-white/30 text-[9px] uppercase tracking-[0.2em] mt-0.5">
            Muay Thai + Krav Maga
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button href="#contact-form" size="md" className="flex-shrink-0 text-xs tracking-widest">
          Claim Your Spot
        </Button>
      </div>
    </header>
  );
}
