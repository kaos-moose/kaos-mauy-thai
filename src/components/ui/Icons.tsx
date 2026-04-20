type IconProps = { className?: string };

export function PersonBadgeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9.5" strokeWidth={1} />
      <circle cx="12" cy="9" r="2.5" />
      <path d="M7.5 19c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" />
    </svg>
  );
}

export function GlovesIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 5.5C7 4.12 8.12 3 9.5 3S12 4.12 12 5.5V10H7V5.5Z" />
      <path d="M5 9h2v5c0 1.1.9 2 2 2s2-.9 2-2V9h1" />
      <path d="M13 5.5C13 4.12 14.12 3 15.5 3S18 4.12 18 5.5V10h-5V5.5Z" />
      <path d="M11 9h2v5c0 1.1.9 2 2 2s2-.9 2-2V9h1" />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12.75 11.25 15 15 9.75M21 12c0 5.25-4.5 9-9 9S3 17.25 3 12V6.375c0-.621.504-1.125 1.125-1.125C7.5 5.25 10.5 4.125 12 3c1.5 1.125 4.5 2.25 7.875 2.25C20.496 5.25 21 5.754 21 6.375V12Z" />
    </svg>
  );
}

export function BarbellIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8v8M9 7v10M15 7v10M18 8v8M3 12h18" />
    </svg>
  );
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 20c0-2.21-2.239-4-5-4s-5 1.79-5 4M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM23 20c0-1.87-1.79-3.46-4.28-3.87M19.5 9.12a3 3 0 1 0-3.67-3.67M1 20c0-1.87 1.79-3.46 4.28-3.87M4.5 9.12a3 3 0 1 0 3.67-3.67" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.48 3.5a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  );
}

export function MuayThaiKickIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 54" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      {/* head */}
      <circle cx="18" cy="5" r="4.5" />
      {/* torso */}
      <path d="M18 10 L15 26" />
      {/* arms — left guard, right raised */}
      <path d="M15 15 L6 12" />
      <path d="M15 15 L24 11" />
      {/* standing leg — bent back */}
      <path d="M15 26 L11 36 L8 46" />
      {/* kicking leg — extended forward/up */}
      <path d="M15 26 L25 31 L35 24" />
    </svg>
  );
}

export function KravMagaShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 44" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      {/* shield */}
      <path d="M18 2 L33 7 L33 24 C33 34 18 42 18 42 C18 42 3 34 3 24 L3 7 Z" />
      {/* interior "A" / chevron motif */}
      <path d="M11 32 L18 12 L25 32" />
      <path d="M13 26 L23 26" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}
