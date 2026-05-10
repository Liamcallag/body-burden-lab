import type { Metadata } from "next";
import CalculatorClient from "@/components/CalculatorClient";

export const metadata: Metadata = {
  title: "Microplastics Exposure Calculator — Find Out Where You Stand",
  description:
    "Answer 15 questions about your diet and habits and get a personalised estimate of your weekly microplastic exposure — based on peer-reviewed science.",
};

export default function CalculatorPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <CalculatorClient />
    </div>
  );
}
