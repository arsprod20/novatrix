import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Amadou Sow",
    template: "%s | Amadou Sow"
  },
  description: "Développeur Web Fullstack - Création d'applications web et mobiles performantes. Portfolio présentant mes projets et compétences techniques.",
  keywords: [
    "Amadou Sow", "Développeur Fullstack", "React", "Next.js", "TypeScript",
    "Développement Frontend", "Backend", "Node.js", "Applications mobiles",
    "Intégration web", "Responsive design", "SEO technique", "Portfolio développeur"
  ],
  authors: [{
    name: "Amadou Sow",
    url: "https://www.amadousow.dev",
  }],
  creator: "Amadou Sow",
  publisher: "Amadou Sow",
  metadataBase: new URL("https://www.amadousow.dev"),
  alternates: {
    canonical: "/",
    languages: {
      'fr-FR': '/fr',   // version française à /fr
      'en-US': '/en'
    },
  },
  openGraph: {
    title: "Portfolio - Amadou Sow",
    description: "Développeur Web Fullstack spécialisé en développement web et mobile. Découvrez mes projets, compétences et expériences.",
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
    //tags: ["Développement web", "React", "Portfolio"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Amadou Sow",
    description: "Développeur Web Fullstack – Amadou Sow",
    creator: "@amadousow01",
    images: ["/og-image.png"],
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
    "copyright": "Amadou Sow",
    "license": "MIT",
    "google-site-verification": "qB7iVNHC9qj8keak2RNe-Hdp1YOJqDK3UcUoHWL-19Q",
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Amadou Sow",
      "url": "https://www.amadousow.dev",
      "image": "/avatar.jpg",
      "jobTitle": "Développeur Fullstack",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "sameAs": [
        "https://github.com/arsprod2001",
        "https://www.linkedin.com/in/amadou-sow-8390a124a/"
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
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="frame-src 'none'" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId="G-Q86KKL9M2S" />
      </body>
    </html>
  );
}