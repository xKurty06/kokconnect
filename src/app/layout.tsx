import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import "./layout-fixes.css";

export const metadata: Metadata = {
  title: {
    default: "KokConnect | Kuya Kok's",
    template: "%s | KokConnect",
  },
  description: "Fresh Filipino grilled meals from Kuya Kok's, presented through KokConnect.",
  icons: {
    icon: "/assets/kuya-kok-logo.png",
    shortcut: "/assets/kuya-kok-logo.png",
    apple: "/assets/kuya-kok-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
