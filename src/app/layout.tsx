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
    icon: [{ url: "/icon", type: "image/png", sizes: "64x64" }],
    shortcut: [{ url: "/icon", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/icon", type: "image/png", sizes: "64x64" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
