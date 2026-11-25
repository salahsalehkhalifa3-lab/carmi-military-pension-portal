import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { PortalProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SkipLink } from "@/components/portal/SkipLink";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CARMI | Démonstration PROSPERA Tchad",
    template: "%s | Démonstration CARMI",
  },
  description: "Proposition de portail institutionnel réalisée par PROSPERA Tchad, soumise à validation de la CARMI.",
  robots: { index: false, follow: false },
  authors: [{ name: "PROSPERA Tchad", url: "https://prosperachad.site" }],
  openGraph: {
    title: "CARMI | Démonstration PROSPERA Tchad",
    description: "Démonstration commerciale non officielle à partir de données fictives.",
    type: "website",
    locale: "fr_TD",
  },
  icons: {
    icon: [{ url: "/image/logocarmi.jpg", type: "image/jpeg" }],
    apple: [{ url: "/image/logocarmi.jpg", type: "image/jpeg" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#112A1C" },
    { media: "(prefers-color-scheme: dark)", color: "#06090F" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-tactical-50 font-sans text-tactical-900 antialiased dark:bg-tactical-950 dark:text-white">
        <PortalProvider>
          <SkipLink />
          <SiteHeader />
          <main id="contenu" tabIndex={-1}>{children}</main>
          <SiteFooter />
        </PortalProvider>
      </body>
    </html>
  );
}
