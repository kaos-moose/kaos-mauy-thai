import { type ButtonHTMLAttributes } from "react";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  href,
  children,
  size = "lg",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold uppercase tracking-wider transition-colors duration-200 text-center cursor-pointer";
  const sizes = { md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
  const cls = `${base} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={`inline-block ${cls}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`block w-full ${cls}`} {...props}>
      {children}
    </button>
  );
}
