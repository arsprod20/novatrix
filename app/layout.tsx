//layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { LanguageProvider } from '@/context/LanguageContext';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Novatrix - Agence Digitale",
    template: "%s | Novatrix"
  },
  description: "Novatrix est une agence digitale spécialisée dans la conception de solutions web et mobiles sur mesure. Découvrez nos projets, nos expertises techniques et notre engagement pour l'innovation.",
  keywords: [
    "Novatrix", "Agence digitale", "Développement web", "Applications mobiles", "React", "Next.js", "Node.js", "UI/UX Design", "Stratégie digitale", "Innovation technologique", "Solutions sur mesure"
  ],
  authors: [{
    name: "Novatrix",
    url: "https://www.novatrix.dev",
  }],
  creator: "Novatrix",
  publisher: "Novatrix",
  metadataBase: new URL("https://www.novatrix.dev"),
  alternates: {
    canonical: "/",
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en'
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Novatrix - Agence Digitale",
    description: "Solutions digitales innovantes – Développement web et mobile, design, infrastructure",
    creator: "@Novatrix01",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  other: {
    "copyright": "Novatrix",
    "license": "MIT",
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Novatrix",
      "url": "https://www.novatrix.dev",
      "logo": "/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/novatrix01/",
        "https://www.facebook.com/novatrix01",
        "https://www.instagram.com/novat_rix/"

      ]
    })
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5"
      }
    ]
  },
  manifest: "/manifest.json"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          <Header />
          <main className="pt-19 min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
