import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Amadou Sow",
  description: "Fullstack Web Developer",
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