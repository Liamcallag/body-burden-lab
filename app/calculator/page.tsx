import type { Metadata } from "next";
import CalculatorClient from "@/components/CalculatorClient";

export const metadata: Metadata = {
  title: "Microplastics Exposure Calculator — Find Out Where You Stand",
  description:
    "Answer 15 questions about your diet and habits and get a personalised estimate of your weekly microplastic exposure — based on peer-reviewed science.",
  alternates: {
    canonical: "https://www.bodyburdenlab.com/calculator",
  },
  openGraph: {
    type: "website",
    title: "Microplastics Exposure Calculator — Find Out Where You Stand",
    description:
      "Answer 15 questions about your diet and habits and get a personalised estimate of your weekly microplastic exposure — based on peer-reviewed science.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+Exposure+Calculator&tag=Tool",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microplastics Exposure Calculator — Find Out Where You Stand",
    description:
      "Answer 15 questions about your diet and habits and get a personalised estimate of your weekly microplastic exposure — based on peer-reviewed science.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+Exposure+Calculator&tag=Tool",
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Microplastics Exposure Calculator",
  "description": "A free calculator that estimates your weekly microplastic particle intake based on peer-reviewed science. Answer 15 questions about your daily habits and get a personalised exposure estimate.",
  "url": "https://www.bodyburdenlab.com/calculator",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "provider": {
    "@id": "https://www.bodyburdenlab.com/#organization",
  },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CalculatorClient />
    </div>
  );
}
