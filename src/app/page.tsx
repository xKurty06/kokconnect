import Image from "next/image";
import { CatalogClient } from "@/components/catalog-client";
import { HomeBagLink, HomeBagProvider } from "@/components/home-bag";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";

const DESKTOP_CONTAINER = "mx-auto w-full max-w-[1560px] px-8";

export default function HomePage() {
  return (
    <HomeBagProvider initialCount={3}>
      <div className="flex min-h-dvh flex-col bg-white">
        <main className="flex min-h-dvh bg-white">
          <div className="flex min-h-0 w-full flex-col">
            <SiteHeader active="home" variant="red" showSearch contained />

            <section className="relative z-20 shrink-0 overflow-visible bg-brand pt-4 text-white">
              <div
                className={`${DESKTOP_CONTAINER} grid min-h-[330px] grid-cols-[1fr_690px] items-center gap-12 pb-0`}
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

                    <HomeBagLink />
                  </div>
                </div>

                <div className="home-hero-media relative h-[330px] overflow-visible">
                  <div className="absolute right-14 top-0 h-80 w-80 rounded-full bg-gold-warm/20 blur-3xl" />
                  <div className="absolute bottom-0 right-20 h-80 w-80 rounded-full bg-black/15 blur-3xl" />
                  <div className="absolute right-8 top-0 h-[390px] w-[390px] rounded-full bg-white/8 blur-[90px]" />

                  <div className="pointer-events-none absolute right-[-8px] top-[-135px] z-30 h-[650px] w-[650px]">
                    <div className="absolute bottom-[92px] left-1/2 h-16 w-[295px] -translate-x-1/2 rounded-full bg-black/25 blur-2xl" />
                    <Image
                      src="/assets/grilled-chicken-cutout.png"
                      alt="Chicken Inasal"
                      fill
                      sizes="650px"
                      priority
                      quality={100}
                      unoptimized
                      className="object-contain drop-shadow-[0_30px_34px_rgba(0,0,0,0.30)]"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="relative z-30 pt-4">
              <CatalogClient />
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </HomeBagProvider>
  );
}
