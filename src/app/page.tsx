import Image from "next/image";
import { CatalogClient } from "@/components/catalog-client";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";

const DESKTOP_CONTAINER = "mx-auto w-full max-w-[1280px] px-8";

export default function HomePage() {
  return (
    <main className="flex h-dvh min-h-[720px] overflow-hidden bg-white">
      <div className="flex min-h-0 w-full flex-col">
        <SiteHeader active="home" variant="red" showSearch />

        <section className="shrink-0 bg-brand py-5 text-white">
          <div className={`${DESKTOP_CONTAINER} grid h-[274px] grid-cols-[1fr_400px] items-center gap-10`}>
            <div>
              <p className="text-xs font-bold tracking-wide text-gold-warm">GRIDDLE &amp; GRILL</p>
              <h1 className="mt-2 max-w-xl text-5xl font-bold leading-[0.96] tracking-tight">
                Order Fresh.
                <br />
                Eat Bold.
              </h1>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                Kuya Kok&apos;s signature grilled meals delivered straight to your doorstep. Hot, fast, and affordable.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href="/menu" variant="gold" className="min-w-36">
                  Order Now!
                </ButtonLink>
                <ButtonLink href="/cart" variant="outline" className="min-w-36 border-gold-warm text-gold-warm hover:bg-brand-deep">
                  View My Bag
                </ButtonLink>
              </div>
            </div>

            <div className="relative aspect-[11/8] overflow-hidden rounded-xl bg-brand-deep shadow-inner">
              <Image
                src="/assets/grilled-chicken.jpg"
                alt="Freshly grilled chicken served with herbs and vegetables"
                fill
                sizes="400px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/25 to-transparent" />
            </div>
          </div>
        </section>

        <CatalogClient />
      </div>
    </main>
  );
}
