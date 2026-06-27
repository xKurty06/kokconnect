import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import "./layout-fixes.css";

const logoIcon = "/assets/kuya-kok-logo.png?v=navbar-logo";

export const metadata: Metadata = {
  title: {
    default: "KokConnect | Kuya Kok's",
    template: "%s | KokConnect",
  },
  description: "Fresh Filipino grilled meals from Kuya Kok's, presented through KokConnect.",
  icons: {
    icon: [{ url: logoIcon, type: "image/png" }],
    shortcut: [{ url: logoIcon, type: "image/png" }],
    apple: [{ url: logoIcon, type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={logoIcon} type="image/png" />
        <link rel="shortcut icon" href={logoIcon} type="image/png" />
        <link rel="apple-touch-icon" href={logoIcon} />
      </head>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
