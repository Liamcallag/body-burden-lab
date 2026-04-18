import type { Metadata } from "next";
import ResultsClient from "@/components/ResultsClient";

export const metadata: Metadata = {
  title: "Your Microplastics Results",
  description: "Your personalised microplastic exposure estimate based on your lifestyle.",
};

export default function ResultsPage() {
  return (
    <div className="px-4 py-10 sm:px-6">
      <ResultsClient />
    </div>
  );
}
