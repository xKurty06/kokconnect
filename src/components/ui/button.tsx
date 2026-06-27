import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white border-brand hover:bg-brand-deep",
  gold: "bg-gold-warm text-ink border-gold-warm hover:bg-gold-pale",
  outline: "bg-transparent text-brand border-brand hover:bg-brand-tint",
  ghost: "bg-white text-copy border-border hover:bg-brand-tint",
};

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

export function Button({ className = "", variant = "primary", ...props }: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border px-6 text-sm font-semibold ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-45 ${className}`}
      {...props}
    />
  );
}

export function ButtonLink({ href, className = "", variant = "primary", children }: BaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-6 text-sm font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
