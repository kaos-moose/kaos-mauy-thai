export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10 px-4 text-center">
      <p
        className="text-white/70 text-2xl uppercase tracking-widest mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        KAOS MUAY THAI
      </p>
      <p className="text-neutral-500 text-sm">Helena, Montana</p>
      <p className="text-neutral-600 text-xs mt-6">
        © {new Date().getFullYear()} Kaos Muay Thai. All rights reserved.
      </p>
    </footer>
  );
}
