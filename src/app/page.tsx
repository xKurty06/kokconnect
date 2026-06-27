import Image from "next/image";
import { CatalogClient } from "@/components/catalog-client";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";

const DESKTOP_CONTAINER = "mx-auto w-full max-w-[1560px] px-8";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-white">
      <main className="flex min-h-dvh bg-white">
        <div className="flex min-h-0 w-full flex-col">
          <SiteHeader active="home" variant="red" showSearch contained />

          <section className="relative z-10 shrink-0 overflow-visible bg-brand pt-6 text-white">
            <div
              className={`${DESKTOP_CONTAINER} grid min-h-[340px] grid-cols-[1fr_560px] items-center gap-12 pb-10`}
            >
              <div className="home-hero-copy relative z-20">
                <p className="text-xs font-bold tracking-wide text-gold-warm">
                  GRIDDLE &amp; GRILL
                </p>

                <h1 className="mt-3 max-w-xl text-6xl font-bold leading-[0.96] tracking-tight">
                  Order Fresh.
                  <br />
                  Eat Bold.
                </h1>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85">
                  Kuya Kok&apos;s signature grilled meals delivered straight to
                  your doorstep. Hot, fast, and affordable.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="/menu" variant="gold" className="min-w-36">
                    Order Now!
                  </ButtonLink>

                  <ButtonLink
                    href="/cart"
                    variant="outline"
                    className="min-w-36 border-gold-warm text-gold-warm hover:bg-brand-deep"
                  >
                    View My Bag
                  </ButtonLink>
                </div>
              </div>

              <div className="home-hero-media relative h-[420px] overflow-visible">
                <div className="absolute right-6 top-8 h-64 w-64 rounded-full bg-gold-warm/20 blur-3xl" />
                <div className="absolute bottom-6 right-16 h-72 w-72 rounded-full bg-black/15 blur-3xl" />
                <div className="absolute right-0 top-6 h-[320px] w-[320px] rounded-full bg-white/8 blur-[90px]" />

                <div className="absolute bottom-[-110px] right-0 z-30 h-[800px] w-[800px]">
                  <div className="absolute bottom-[58px] left-1/2 h-14 w-[290px] -translate-x-1/2 rounded-full bg-black/25 blur-2xl" />
                  <Image
                    src="/assets/grilled-chicken-cutout.png"
                    alt="Chicken Inasal"
                    fill
                    sizes="800px"
                    priority
                    className="object-contain drop-shadow-[0_30px_34px_rgba(0,0,0,0.30)]"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="relative z-20 -mt-2 bg-white pt-4">
            <CatalogClient />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}