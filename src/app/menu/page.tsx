import type { Metadata } from "next";
import { MenuBrowser } from "@/components/menu-browser";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader active="menu" variant="red" showSearch sticky />
      <MenuBrowser />
      <SiteFooter />
    </div>
  );
}
