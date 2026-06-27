import Image from "next/image";
import { CatalogClient } from "@/components/catalog-client";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-white">
      <SiteHeader active="home" variant="red" showSearch />
      <section className="bg-brand px-[60px] py-8 text-white">
        <div className="grid min-h-[316px] w-full grid-cols-[1fr_440px] items-center gap-10">
          <div>
            <p className="text-xs font-bold text-gold-warm">GRIDDLE &amp; GRILL</p>
            <h1 className="mt-3 max-w-xl text-6xl font-bold leading-[0.98] tracking-tight">Order Fresh.<br />Eat Bold.</h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85">Kuya Kok&apos;s signature grilled meals delivered straight to your doorstep. Hot, fast, and affordable.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/menu" variant="gold" className="min-w-36">Order Now!</ButtonLink>
              <ButtonLink href="/cart" variant="outline" className="min-w-36 border-gold-warm text-gold-warm hover:bg-brand-deep">View My Bag</ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[11/8] overflow-hidden rounded-xl bg-brand-deep shadow-inner">
            <Image src="/assets/grilled-chicken.jpg" alt="Freshly grilled chicken served with herbs and vegetables" fill sizes="440px" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/25 to-transparent" />
          </div>
        </div>
      </section>
      <CatalogClient />
    </main>
  );
}
