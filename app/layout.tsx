import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Portfolio - Amadou Sow",
  description: "Fullstack Web Developer",
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00eaff' },
    { media: '(prefers-color-scheme: dark)', color: '#010409' },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        {/* Meta tags spécifiques pour iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
