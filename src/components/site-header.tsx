import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

interface SiteHeaderProps {
  active?: "home" | "menu";
  variant?: "red" | "white";
  showSearch?: boolean;
  contained?: boolean;
}

export function SiteHeader({ active, variant = "white", showSearch = false, contained = false }: SiteHeaderProps) {
  const red = variant === "red";
  const innerClass = contained
    ? "mx-auto flex h-full w-full max-w-[1280px] items-center justify-between gap-5 px-8"
    : "flex h-full w-full items-center justify-between gap-5 px-[60px]";

  return (
    <header className={`h-[68px] border-b ${red ? "border-brand-deep bg-brand text-white shadow-lg" : "border-border bg-white text-ink"}`}>
      <div className={innerClass}>
        <Link href="/" className="flex shrink-0 items-center gap-2 text-sm font-bold" aria-label="Kuya Kok's home">
          <Image src="/assets/kuya-kok-logo.png" alt="Kuya Kok's logo" width={44} height={44} className="size-11 rounded-full object-contain" priority />
          <span>Kuya Kok&apos;s</span>
        </Link>

        {showSearch && (
          <label className="relative w-80">
            <span className="sr-only">Search for meals</span>
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
            <input className="h-[38px] w-full rounded-full border-0 bg-white pl-10 pr-4 text-sm text-ink placeholder:text-muted" placeholder="Search for meals" />
          </label>
        )}

        <nav className="flex items-center gap-8 text-sm" aria-label="Primary navigation">
          <Link href="/" className={`relative py-2 ${active === "home" ? "font-semibold" : ""}`}>
            Home
            {active === "home" && <span className={`absolute inset-x-0 -bottom-1 h-0.5 rounded ${red ? "bg-gold-warm" : "bg-brand"}`} />}
          </Link>
          <Link href="/menu" className={`relative py-2 ${active === "menu" ? "font-semibold" : ""}`}>
            Menu
            {active === "menu" && <span className={`absolute inset-x-0 -bottom-1 h-0.5 rounded ${red ? "bg-gold-warm" : "bg-brand"}`} />}
          </Link>
          {!red && <Link href="/register">Sign Up</Link>}
          {red && <Link href="/login" className="rounded-full bg-white px-5 py-2.5 font-semibold text-brand hover:bg-brand-tint">Log In</Link>}
        </nav>
      </div>
    </header>
  );
}