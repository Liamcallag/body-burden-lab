import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Does Silicone Release Microplastics?",
  description:
    "Silicone is widely marketed as a safer alternative to plastic. But does it release microplastics or other particles? Here's what the peer-reviewed evidence says.",
  openGraph: {
    type: "article",
    publishedTime: "2026-04-19",
    title: "Does Silicone Release Microplastics?",
    description:
      "Silicone is widely marketed as a safer alternative to plastic. But does it release microplastics or other particles? Here's what the peer-reviewed evidence says.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Does+Silicone+Release+Microplastics%3F&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Silicone Release Microplastics?",
    description:
      "Silicone is widely marketed as a safer alternative to plastic. But does it release microplastics or other particles? Here's what the peer-reviewed evidence says.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Does+Silicone+Release+Microplastics%3F&tag=Science",
    ],
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <Link href="/blog" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">
          ← Back to Blog
        </Link>
        <div className="flex items-center gap-3 mt-4 mb-4">
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Science</span>
          <span className="text-xs text-slate-400">5 min read</span>
          <time className="text-xs text-slate-400" dateTime="2026-04-19">April 19, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          Does Silicone Release Microplastics?
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Silicone kitchen items — baking moulds, baby bottles, spatulas — are widely promoted as a safer plastic alternative. The picture is more nuanced than the marketing suggests.
        </p>
        <img
          src="/blog-silicone.png"
          alt="Silicone kitchen utensils"
          className="w-full rounded-xl mt-6 mb-2"
        />
      </div>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-0.5">Find out your current exposure level</p>
          <p className="text-xs text-slate-500">15 questions · 2 minutes · based on peer-reviewed science</p>
        </div>
        <Link href="/calculator" className="bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-teal-800 transition-colors whitespace-nowrap">
          Take the calculator →
        </Link>
      </div>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-5">

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What is silicone?</h2>

        <p>
          Silicone (technically polydimethylsiloxane, or PDMS) is a synthetic polymer made from silicon, oxygen, carbon, and hydrogen. It is not technically a plastic — plastics are carbon-chain polymers, whereas silicone has a silicon-oxygen backbone — which is part of why it is often positioned as a safer alternative. It is heat-resistant, flexible, and widely used in kitchen tools, food storage bags, baby products, and medical devices.
        </p>

        <p>
          The relevant question for microplastic exposure is not whether silicone is technically a plastic, but whether it releases particles or chemical migrants into food and water under realistic use conditions.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What the research shows</h2>

        <p>
          Ekvall et al. (2023) in <em>PLOS ONE</em> examined particle release from silicone kitchen utensils under simulated use. The study found that silicone did release particles, though the rate was significantly lower than for conventional plastics under the same conditions. Crucially, the study found that particle release increased substantially with mechanical stress — cutting, scraping, and abrasion — and with higher temperatures. Worn or scratched silicone utensils released considerably more particles than new ones.
        </p>

        <p>
          Fang et al. (2023) in <em>Frontiers in Chemistry</em> investigated chemical migration from food-grade silicone products, finding that while silicone itself is relatively inert, commercial silicone products often contain additives, fillers, and colorants that can migrate into food — particularly under acidic conditions and at high temperatures. Some commercial silicone products were found to contain silica particles and other fillers not present in pure PDMS, which may migrate under cooking conditions.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Is silicone safer than plastic?</h2>

        <p>
          For most applications, yes — but the comparison depends heavily on what you are comparing it to and under what conditions. Key points from the evidence:
        </p>

        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Silicone releases fewer particles than polypropylene (PP) or polyethylene (PE)</strong> under comparable conditions — this is well-supported across multiple studies.</li>
          <li><strong>Scratched or degraded silicone is worse than new silicone</strong> — the same principle that applies to Teflon-coated cookware applies here. Worn items should be replaced.</li>
          <li><strong>High temperatures increase release</strong> — silicone is rated safe to around 230°C, but particle release rises with temperature even within safe ranges.</li>
          <li><strong>Not all silicone products are equivalent</strong> — food-grade silicone with minimal fillers is likely to perform better than cheaper products with added colorants or reinforcing fillers.</li>
          <li><strong>The long-term health effects of inhaled or ingested silica particles are not fully established</strong> — this is different from the more studied microplastic polymers, and research is ongoing.</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Practical guidance</h2>

        <p>
          Silicone is a reasonable choice for kitchen items like spatulas, baking moulds, and food storage bags, particularly compared to thin plastics that are regularly heated. The evidence does not support silicone as zero-risk, but it is meaningfully lower-risk than polypropylene containers microwaved with food, or scratched non-stick cookware.
        </p>

        <p>
          The highest-risk use cases for silicone are: using abrasive cleaners that scratch the surface, using visibly degraded or worn items, and cooking at very high temperatures (above 200°C) for extended periods. The lowest-risk use cases are: cold food storage, room-temperature uses, and low-temperature baking where the silicone is not directly contacting the food surface under mechanical stress.
        </p>

        <p>
          If the goal is to minimise particle exposure from cookware entirely, glass, stainless steel, and cast iron remain the best-evidenced choices — none of these release synthetic polymer particles into food. Silicone occupies a reasonable middle ground, particularly for uses where glass or metal are impractical (flexible baking moulds, collapsible containers).
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What the research doesn't yet tell us</h2>

        <p>
          The evidence on silicone particle release is newer and less developed than the evidence on conventional plastics. Most studies to date have used simulated conditions that approximate but do not perfectly replicate real-world kitchen use. Long-term studies measuring actual human exposure from silicone kitchen products — as opposed to lab measurements of particle release — have not yet been published. This is not a reason for alarm, but it is a reason for the same honest uncertainty that applies to all areas of microplastic research.
        </p>

      </div>

      <div className="bg-teal-700 rounded-2xl p-6 mt-10 text-white text-center">
        <p className="font-semibold text-lg mb-1">Find out your personal exposure</p>
        <p className="text-teal-200 text-sm mb-4">15 questions · 2 minutes · peer-reviewed science</p>
        <Link href="/calculator" className="bg-white text-teal-700 font-semibold px-7 py-2.5 rounded-full text-sm hover:bg-teal-50 transition-colors">
          Start the calculator →
        </Link>
      </div>

      <div className="mt-10 border-t border-slate-100 pt-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">References</h3>
        <ol className="space-y-2 text-xs text-slate-500 list-decimal list-inside leading-relaxed">
          <li>Ekvall MT et al. Particle release from silicone kitchen utensils. <em>PLOS ONE</em>. 2023. DOI: 10.1371/journal.pone.0289377</li>
          <li>Fang X et al. Migration of chemical substances from food-grade silicone products. <em>Front Chem</em>. 2023. DOI: 10.3389/fchem.2023.1165523</li>
        </ol>
      </div>
    </article>
  );
}
