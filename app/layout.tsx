import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilyas Battah | Portfolio",
  description: "Portfolio of Ilyas Battah, Filmmaker & Visual Storyteller.",
  keywords: ["ilyas battah", "portfolio", "filmmaker", "visual storyteller", "bh"],
  authors: [{ name: "Ilyas Battah" }],
  openGraph: {
    title: "Ilyas Battah | Portfolio",
    description: "Portfolio of Ilyas Battah, Filmmaker & Visual Storyteller.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${caveat.variable}`}>
      <head>
        <link rel="icon" href="/bh-favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
