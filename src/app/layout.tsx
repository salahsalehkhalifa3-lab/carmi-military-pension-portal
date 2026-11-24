import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { PortalProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyMobileDock } from "@/components/share";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "CARMI — Caisse de Retraite des Militaires | République du Tchad",
    template: "%s | CARMI Tchad",
  },
  description:
    "Portail officiel de la Caisse de Retraite des Militaires (CARMI) du Tchad : calendrier de paiement des soldes de retraite, pension d'invalidité, ayants droit, contrôle de vie biométrique et bancarisation militaire.",
  keywords: [
    "CARMI",
    "Caisse de Retraite des Militaires",
    "Tchad",
    "pension militaire",
    "ANT",
    "anciens combattants",
    "bancarisation",
    "N'Djamena",
  ],
  applicationName: "CARMI Tchad",
  authors: [{ name: "C.A.R.M.I. — République du Tchad" }],
  openGraph: {
    title: "CARMI — Caisse de Retraite des Militaires (Tchad)",
    description:
      "Honneur, Dignité et Protection pour les Combattants de la Nation : pensions, invalidité, ayants droit et bancarisation militaire.",
    type: "website",
    locale: "fr_TD",
    siteName: "CARMI Tchad",
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
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-black focus:text-army-950"
          >
            Aller au contenu principal
          </a>
          <SiteHeader />
          <main id="contenu">{children}</main>
          <SiteFooter />
          <StickyMobileDock />
        </PortalProvider>
      </body>
    </html>
  );
}
