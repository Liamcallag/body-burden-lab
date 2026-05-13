import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Body Burden — Microplastics Exposure Research",
  description:
    "Body Burden is an independent research project tracking the science of microplastic exposure. Every figure in the calculator traces back to a peer-reviewed study.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <div className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          About
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          What is Body Burden?
        </h1>
      </div>

      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-5 text-[15px]">
        <p>
          Body Burden is an independent educational tool that estimates how many microplastic particles a person consumes and inhales each week, based on their lifestyle habits. Every figure in the calculator is derived from peer-reviewed research published in peer-reviewed scientific journals.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-2">Who built it</h2>
        <p>
          Body Burden was founded by Liam Murphy, an independent science communicator who has tracked the microplastics research literature since 2025. Every figure on this site is verified against the original peer-reviewed paper before publication — DOI citations are provided for every claim. The project began out of genuine concern about microplastic exposure and a frustration with the lack of accessible, evidence-grounded tools for the public.
        </p>
        <p>
          It is important to share what the science currently shows — even though it is incomplete. The data we have almost certainly understates the real picture. Measurement technology for nanoplastics is still developing, most studies capture only a fraction of exposure routes, and tissue accumulation is likely higher than current figures suggest. The calculator reflects what can be documented today, not the full reality.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-2">Why it matters</h2>
        <p>
          Microplastics are now found in human blood, lungs, liver, kidney, and testicular tissue — and most recently, in arterial plaques associated with cardiovascular events. The research is not alarmist speculation. It is accumulating rapidly in some of the most rigorous journals in environmental science.
        </p>
        <p>
          Yet the tools available to the public for understanding their own exposure are poor. Existing calculators either fail to show actual particle counts, lack citations, or are so poorly designed that no one uses them. Body Burden exists to close that gap.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-2">What "body burden" means</h2>
        <p>
          The term <em>body burden</em> is scientific terminology used by toxicologists and the CDC to describe the total accumulation of environmental contaminants in the human body. It reflects not just daily exposure, but what persists and accumulates in tissues over time. We chose this name because it is precise, not because it is alarming.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-2">Our principles</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li><strong>Scientific accuracy:</strong> Every estimate traces back to a published study. Confidence levels are disclosed.</li>
          <li><strong>Honest uncertainty:</strong> We acknowledge that figures vary between studies and individual factors not captured here. Nanoplastic exposure — not captured here — is likely significantly higher. Our scores are a documented minimum, not a precise measurement.</li>
          <li><strong>No alarmism:</strong> The numbers speak for themselves. Our job is to present them clearly, not to frighten.</li>
          <li><strong>No login required:</strong> Results are calculated in your browser. We do not collect your answers.</li>
          <li><strong>Educational purpose only:</strong> This tool is not a medical diagnostic and should not be treated as one.</li>
        </ul>

        <div className="border-t border-slate-100 pt-8 mt-8">
          <p className="text-xs text-slate-400">
            Body Burden is an independent educational project. If you are a researcher and spot an error in the methodology, corrections are very welcome. Get in touch at{" "}
            <a href="mailto:contact@bodyburdenlab.com" className="underline hover:text-teal-700">contact@bodyburdenlab.com</a>.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          href="/calculator"
          className="bg-teal-700 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-teal-800 transition-colors text-center"
        >
          Take the calculator
        </Link>
        <Link
          href="/methodology"
          className="border border-slate-200 text-slate-600 font-medium px-6 py-3 rounded-full text-sm hover:bg-slate-50 transition-colors text-center"
        >
          Read the methodology
        </Link>
      </div>
    </div>
  );
}
