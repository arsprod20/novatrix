import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Amadou Sow",
  description: "Développeur Web Fullstack spécialisé en React, Next.js, et développement mobile.",
  keywords: ["Amadou Sow", "Développeur Web", "Fullstack", "React", "Next.js", "Portfolio", "Développement Mobile"],
  authors: [{ name: "Amadou Sow", url: "https://www.amadousow.dev" }],
  creator: "Amadou Sow",
  metadataBase: new URL("https://www.amadousow.dev"),
  openGraph: {
    title: "Portfolio - Amadou Sow",
    description: "Développeur Web Fullstack spécialisé en React, Next.js et développement mobile. Découvrez mes projets, compétences et expériences.",
    url: "https://www.amadousow.dev",
    siteName: "Portfolio Amadou Sow",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Portfolio Amadou Sow",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Amadou Sow",
    description: "Développeur Web Fullstack – Amadou Sow",
    creator: "@amadousow", 
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-20"> {/* pt-20 pour l'espace sous le header fixe */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}