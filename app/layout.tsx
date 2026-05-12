import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Body Burden — Microplastics Exposure Calculator",
    template: "%s | Body Burden",
  },
  description:
    "Estimate how many microplastic particles you consume and inhale each week based on your lifestyle. Built on peer-reviewed science.",
  metadataBase: new URL("https://www.bodyburdenlab.com"),
  alternates: {
    canonical: "https://www.bodyburdenlab.com",
  },
  openGraph: {
    siteName: "Body Burden",
    type: "website",
    title: "Body Burden — Microplastics Exposure Calculator",
    description:
      "Estimate how many microplastic particles you consume and inhale each week based on your lifestyle. Built on peer-reviewed science.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Body+Burden+%E2%80%94+Microplastics+Exposure+Calculator&tag=Tool",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Burden — Microplastics Exposure Calculator",
    description:
      "Estimate how many microplastic particles you consume and inhale each week based on your lifestyle. Built on peer-reviewed science.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Body+Burden+%E2%80%94+Microplastics+Exposure+Calculator&tag=Tool",
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.bodyburdenlab.com/#organization",
  "name": "Body Burden",
  "url": "https://www.bodyburdenlab.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.bodyburdenlab.com/logo.svg",
  },
  "description": "Independent microplastics exposure research and calculator. Every figure derived from peer-reviewed science.",
  "email": "contact@bodyburdenlab.com",
  "foundingDate": "2026",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.bodyburdenlab.com/#website",
  "url": "https://www.bodyburdenlab.com",
  "name": "Body Burden",
  "description": "Microplastics exposure calculator and research. Built on peer-reviewed science.",
  "publisher": { "@id": "https://www.bodyburdenlab.com/#organization" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script id="org-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="website-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PB7R3G61HJ"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PB7R3G61HJ');`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
