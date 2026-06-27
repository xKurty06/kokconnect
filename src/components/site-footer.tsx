import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const DESKTOP_CONTAINER = "mx-auto w-full max-w-[1560px] px-8";

const footerGroups = [
  {
    title: "Order",
    links: [
      { label: "Browse Menu", href: "/menu" },
      { label: "My Bag", href: "/cart" },
      { label: "Checkout", href: "/checkout" },
      { label: "Track Order", href: "/order-tracking" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Log In", href: "/login" },
      { label: "Create Account", href: "/register" },
      { label: "Saved Addresses", href: "#" },
      { label: "Order History", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Delivery Areas", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-deep bg-ink text-white" aria-labelledby="footer-heading">
      <div className={`${DESKTOP_CONTAINER} py-10`}>
        <div className="grid grid-cols-[1.25fr_2fr_1.15fr] gap-10">
          <section aria-labelledby="footer-heading">
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="Kuya Kok's home">
              <span className="grid size-14 place-items-center rounded-full bg-white ring-1 ring-white/15 transition group-hover:scale-[1.03]">
                <Image src="/assets/kuya-kok-logo.png" alt="Kuya Kok's logo" width={52} height={52} className="size-13 rounded-full object-contain" />
              </span>
              <div>
                <h2 id="footer-heading" className="text-lg font-bold">Kuya Kok&apos;s</h2>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-warm">Griddle &amp; Grill</p>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A frontend ordering experience for Kuya Kok&apos;s Griddle and Grill, showcasing menu browsing, checkout flow, delivery location selection, and order tracking.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
              <ShieldCheck className="size-4 text-gold-warm" /> Frontend demo only
            </div>
          </section>

          <nav className="grid grid-cols-3 gap-8" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold text-white">{group.title}</h3>
                <ul className="mt-4 grid gap-3 text-sm text-white/65">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="group inline-flex items-center gap-2 transition hover:text-white">
                        <span className="h-px w-0 bg-gold-warm transition-all duration-200 group-hover:w-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <section aria-labelledby="footer-contact-title">
            <h3 id="footer-contact-title" className="text-sm font-bold text-white">Store Information</h3>
            <ul className="mt-4 grid gap-3 text-sm text-white/70">
              <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-gold-warm" /> Bancod 3, Indang, Cavite</li>
              <li className="flex gap-3"><Clock className="mt-0.5 size-4 shrink-0 text-gold-warm" /> Mon–Sun, 9:00 AM – 9:00 PM</li>
              <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-gold-warm" /> +63 900 000 0000</li>
              <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-gold-warm" /> hello@kuyakoks.example</li>
            </ul>
            <Link href="/menu" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-warm px-5 text-sm font-bold text-ink shadow-lg transition hover:-translate-y-0.5 hover:bg-gold-pale">
              Order Now <ArrowRight className="size-4" />
            </Link>
          </section>
        </div>

        <div className="mt-9 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/55">
          <p>© 2026 Kuya Kok&apos;s Griddle and Grill. All rights reserved.</p>
          <p>Portfolio / academic frontend prototype. Placeholder links are for presentation only.</p>
        </div>
      </div>
    </footer>
  );
}
