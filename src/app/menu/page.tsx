import type { Metadata } from "next";
import { MenuBrowser } from "@/components/menu-browser";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Menu" };

interface MenuPageProps {
  searchParams?: Promise<{ q?: string }>;
}

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const params = await searchParams;
  const searchQuery = typeof params?.q === "string" ? params.q : "";

  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader active="menu" variant="red" showSearch searchDefaultValue={searchQuery} sticky />
      <MenuBrowser initialSearchQuery={searchQuery} />
      <SiteFooter />
    </div>
  );
}
