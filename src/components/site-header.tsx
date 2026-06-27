"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { FormEvent, useState } from "react";

interface SiteHeaderProps {
  active?: "home" | "menu";
  variant?: "red" | "white";
  showSearch?: boolean;
  searchDefaultValue?: string;
  contained?: boolean;
  sticky?: boolean;
}

export function SiteHeader({ active, variant = "white", showSearch = false, searchDefaultValue = "", contained = false, sticky = false }: SiteHeaderProps) {
  const red = variant === "red";
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(searchDefaultValue);
  const innerClass = contained
    ? "mx-auto flex h-full w-full max-w-[1560px] items-center justify-between gap-5 px-8"
    : "flex h-full w-full items-center justify-between gap-5 px-5";
  const headerClass = red
    ? "border-brand-deep bg-brand/95 text-white shadow-lg backdrop-blur"
    : "border-border bg-white/95 text-ink backdrop-blur";
  const activeLine = red ? "bg-gold-warm" : "bg-brand";

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchValue.trim();
    router.push(query ? `/menu?q=${encodeURIComponent(query)}` : "/menu");
  };

  const clearSearch = () => {
    setSearchValue("");
    if (searchDefaultValue) router.push("/menu");
  };

  return (
    <header className={`${sticky ? "sticky top-0 z-50" : ""} h-[68px] border-b ${headerClass}`}>
      <div className={innerClass}>
        <Link href="/" className="group flex shrink-0 items-center gap-2 text-sm font-bold" aria-label="Kuya Kok's home">
          <span className="grid size-12 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition duration-200 group-hover:scale-[1.03] group-hover:bg-white/15">
            <Image src="/assets/kuya-kok-logo.png" alt="Kuya Kok's logo" width={44} height={44} className="size-11 rounded-full object-contain" priority />
          </span>
          <span className="transition-opacity group-hover:opacity-90">Kuya Kok&apos;s</span>
        </Link>

        {showSearch && (
          <form onSubmit={submitSearch} role="search" className="relative w-80 transition duration-200 focus-within:-translate-y-0.5 focus-within:scale-[1.01]">
            <label htmlFor="site-search" className="sr-only">Search for meals</label>
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted transition-colors" aria-hidden="true" />
            <input
              id="site-search"
              name="q"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              className="h-[38px] w-full rounded-full border border-white/15 bg-white pl-10 pr-10 text-sm text-ink shadow-sm placeholder:text-muted transition duration-200 focus:border-gold-warm focus:shadow-[0_8px_22px_rgba(0,0,0,0.10)] focus:outline-none"
              placeholder="Search for meals"
            />
            {searchValue && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-1.5 top-1/2 grid size-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-muted transition hover:bg-brand-tint hover:text-brand"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </form>
        )}

        <nav className="flex items-center gap-8 text-sm" aria-label="Primary navigation">
          <Link href="/" className={`group relative py-2 transition-opacity hover:opacity-90 ${active === "home" ? "font-semibold" : ""}`}>
            Home
            <span className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left rounded ${active === "home" ? `${activeLine} scale-x-100` : `${activeLine} scale-x-0 opacity-70`} transition-transform duration-200 group-hover:scale-x-100`} />
          </Link>
          <Link href="/menu" className={`group relative py-2 transition-opacity hover:opacity-90 ${active === "menu" ? "font-semibold" : ""}`}>
            Menu
            <span className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left rounded ${active === "menu" ? `${activeLine} scale-x-100` : `${activeLine} scale-x-0 opacity-70`} transition-transform duration-200 group-hover:scale-x-100`} />
          </Link>
          {!red && <Link href="/register" className="hover:text-brand">Sign Up</Link>}
          {red && <Link href="/login" className="rounded-full bg-white px-5 py-2.5 font-semibold text-brand shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-tint hover:shadow-md">Log In</Link>}
        </nav>
      </div>
    </header>
  );
}
