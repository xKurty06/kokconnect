import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white border-brand hover:bg-brand-deep hover:shadow-[0_10px_22px_rgba(196,24,30,0.20)]",
  gold: "bg-gold-warm text-ink border-gold-warm hover:bg-gold-pale hover:shadow-[0_10px_22px_rgba(245,166,35,0.22)]",
  outline: "bg-transparent text-brand border-brand hover:bg-brand-tint hover:shadow-[0_8px_18px_rgba(196,24,30,0.10)]",
  ghost: "bg-white text-copy border-border hover:bg-brand-tint hover:shadow-[0_8px_18px_rgba(0,0,0,0.06)]",
};

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

const baseClass =
  "group relative isolate inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border px-6 text-sm font-semibold transition-all duration-200 ease-out before:pointer-events-none before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.22),transparent)] before:transition-transform before:duration-500 hover:-translate-y-0.5 hover:before:translate-x-full disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0";

export function Button({ className = "", variant = "primary", ...props }: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`${baseClass} ${variants[variant]} ${className}`} {...props} />;
}

export function ButtonLink({ href, className = "", variant = "primary", children }: BaseProps & { href: string }) {
  return (
    <Link href={href} className={`${baseClass} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
