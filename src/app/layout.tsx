import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import "./layout-fixes.css";

const logoIcon = "/assets/kuya-kok-logo.png?v=navbar-logo";

export const metadata: Metadata = {
  title: {
    default: "Kuya Kok's",
    template: "%s | Kuya Kok's",
  },
  description: "Fresh Filipino grilled meals from Kuya Kok's, presented through Kuya Kok's.",
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
