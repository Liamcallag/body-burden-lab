import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Body Burden Lab — Microplastics Exposure Calculator",
    template: "%s | Body Burden Lab",
  },
  description:
    "Estimate how many microplastic particles you consume and inhale each week based on your lifestyle. Built on peer-reviewed science.",
  keywords: [
    "microplastics calculator",
    "microplastic exposure",
    "how many microplastics do I consume",
    "body burden",
    "microplastics test online",
  ],
  openGraph: {
    siteName: "Body Burden Lab",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
