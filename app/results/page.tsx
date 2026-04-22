import type { Metadata } from "next";
import ResultsClient from "@/components/ResultsClient";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ score?: string; level?: string }>;
}): Promise<Metadata> {
  const { score, level = "Moderate" } = await searchParams;

  if (score) {
    const weekly = parseInt(score).toLocaleString("en-US");
    const ogUrl = `https://bodyburdenlab.com/api/og?score=${score}&level=${encodeURIComponent(level)}`;
    const title = `I consume ${weekly} microplastic particles per week`;
    const description = `My microplastic exposure is ${level.toLowerCase()}. How does yours compare? Take the calculator at Body Burden Lab.`;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: ogUrl, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogUrl],
      },
    };
  }

  return {
    title: "Your Microplastics Results",
    description: "Your personalised microplastic exposure estimate based on your lifestyle.",
    openGraph: {
      title: "Your Microplastics Results",
      description: "Your personalised microplastic exposure estimate based on your lifestyle.",
      images: [
        {
          url: "https://bodyburdenlab.com/api/og?title=How+Many+Microplastics+Do+You+Consume%3F&tag=Calculator",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Your Microplastics Results",
      description: "Your personalised microplastic exposure estimate based on your lifestyle.",
      images: [
        "https://bodyburdenlab.com/api/og?title=How+Many+Microplastics+Do+You+Consume%3F&tag=Calculator",
      ],
    },
  };
}

export default function ResultsPage() {
  return (
    <div className="px-4 py-10 sm:px-6">
      <ResultsClient />
    </div>
  );
}
