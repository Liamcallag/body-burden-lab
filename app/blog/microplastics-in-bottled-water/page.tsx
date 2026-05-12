import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microplastics in Bottled Water — What the Research Shows",
  description:
    "Bottled water contains significantly more microplastics than filtered tap water. Here's what peer-reviewed research has found, and what it means for your exposure.",
  openGraph: {
    type: "article",
    publishedTime: "2026-04-11",
    title: "Microplastics in Bottled Water — What the Research Shows",
    description:
      "Bottled water contains significantly more microplastics than filtered tap water. Here's what peer-reviewed research has found, and what it means for your exposure.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+in+Bottled+Water+%E2%80%94+What+the+Research+Shows&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microplastics in Bottled Water — What the Research Shows",
    description:
      "Bottled water contains significantly more microplastics than filtered tap water. Here's what peer-reviewed research has found, and what it means for your exposure.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+in+Bottled+Water+%E2%80%94+What+the+Research+Shows&tag=Science",
    ],
  },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Microplastics in Bottled Water — What the Research Shows",
    "datePublished": "2026-04-19",
    "publisher": { "@type": "Organization", "name": "Body Burden Lab", "url": "https://www.bodyburdenlab.com" },
    "url": "https://www.bodyburdenlab.com/blog/microplastics-in-bottled-water",
  };
  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mb-8">
        <Link href="/blog" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">
          ← Back to Blog
        </Link>
        <div className="flex items-center gap-3 mt-4 mb-4">
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Science</span>
          <span className="text-xs text-slate-400">By James Mercer</span>
          <span className="text-xs text-slate-400">·</span>
          <time className="text-xs text-slate-400" dateTime="2026-04-11">April 11, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          Microplastics in Bottled Water — What the Research Shows
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          People drink bottled water to avoid contaminants. The evidence shows it introduces one: microplastic particles at concentrations significantly higher than filtered tap water.
        </p>
      </div>

      <div className="mb-10 rounded-xl overflow-hidden">
        <img
          src="/blog-bottled-water.png"
          alt="Illustration of a plastic bottle disintegrating into microplastic particles"
          className="w-full object-cover"
        />
      </div>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-0.5">Find out your current exposure level</p>
          <p className="text-xs text-slate-500">14 questions · 2 minutes · based on peer-reviewed science</p>
        </div>
        <Link href="/calculator" className="bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-teal-800 transition-colors whitespace-nowrap">
          Take the calculator →
        </Link>
      </div>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-5">

        <p>
          The global bottled water market is worth over $250 billion annually. It is sold on the premise of purity. Multiple peer-reviewed studies now document a consistent finding: bottled water contains microplastic particles, typically at concentrations higher than well-regulated tap water — and the plastic bottle itself is a primary source.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The landmark study: 259 bottles, 11 brands, 9 countries</h2>

        <p>
          Mason et al. (2018), published in <em>Frontiers in Chemistry</em>, analysed 259 individual bottles of water from 11 globally recognised brands purchased in 9 countries. The study found microplastic contamination in 93% of samples. The average concentration was <strong>325 microplastic particles per litre</strong>, with some bottles exceeding 10,000 particles per litre.
        </p>

        <p>
          The most common polymer identified was polypropylene — the same material used in bottle caps — followed by nylon and polyethylene terephthalate (PET), which is the material the bottles themselves are made from. This strongly suggested the bottle and cap were the primary contamination source rather than the water supply used to fill them.
        </p>

        <p>
          The study also identified industrial lubricant particles, consistent with the bottling process. A fragment of blue industrial netting was found in one sample. The findings prompted an inquiry from the World Health Organization, which subsequently launched a review of microplastics in drinking water.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">More recent data confirms the pattern</h2>

        <p>
          Li et al. (2023) in <em>Science of the Total Environment</em> conducted one of the most comprehensive analyses to date, examining bottled water samples across multiple brands and packaging types. The study confirmed elevated microplastic concentrations in bottled water relative to treated tap water, and found that concentrations increased with storage time — suggesting ongoing leaching from the PET bottle into the water over weeks and months. Samples stored for longer periods or exposed to higher temperatures (simulating transport or retail storage) showed higher particle counts.
        </p>

        <p>
          The study also found that smaller plastic particles predominated — the majority were below 10 microns in size, putting them firmly in the range that research suggests may be more readily taken up by cells and more difficult for the body to clear.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How bottled water compares to tap water</h2>

        <p>
          Danopoulos et al. (2020) in <em>PLOS ONE</em> performed a systematic review and meta-analysis of microplastic ingestion across multiple exposure sources, providing one of the clearest comparisons between water types. The analysis found that bottled water consumers ingested significantly more microplastics from their water source than tap water consumers, with the differential driven primarily by PET bottle leaching and the absence of the filtration steps applied to tap water before distribution.
        </p>

        <p>
          It is important to be precise here: unfiltered tap water does contain microplastics — typically in the range of 1–30 particles per litre in studies of treated municipal water in developed countries. This is substantially lower than the 325 average found in bottled water by Mason et al., but it is not zero. The best-performing option for water-source microplastic exposure is filtered or boiled tap water, not bottled water.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What drives contamination in bottled water?</h2>

        <p>
          The evidence points to three primary sources:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-slate-700">
          <li><strong>The PET bottle itself</strong> — polyethylene terephthalate slowly releases particles into the water, with release increasing over time and with temperature. PET is the primary polymer found in most bottled water microplastic analyses.</li>
          <li><strong>The cap and seal</strong> — polypropylene caps shed particles, particularly during the opening process. Mason et al. noted polypropylene as the most frequently identified polymer in their samples.</li>
          <li><strong>The industrial bottling process</strong> — filling equipment, conveyor systems, and industrial packaging materials contribute particle contamination during the bottling process itself.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Does the type of bottle matter?</h2>

        <p>
          Glass-bottled water has not been as extensively studied as PET-bottled water, but the available evidence suggests significantly lower microplastic contamination when glass packaging is used, for the obvious reason that glass does not shed polymer particles. The remaining contamination in glass-bottled water is primarily attributed to the industrial bottling process and cap materials, not the container itself.
        </p>

        <p>
          Single-use PET bottles perform worse than multi-use polycarbonate or stainless steel containers that are refilled with filtered tap water — both in terms of microplastic exposure and environmental impact.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The practical takeaway</h2>

        <p>
          If you are drinking bottled water to avoid contaminants, you are solving one problem while introducing another. The evidence consistently shows that filtered tap water — using <Link href="/blog/does-reverse-osmosis-remove-microplastics" className="text-teal-700 hover:underline">reverse osmosis</Link>, activated carbon block, or even simple boiling for hard water — delivers lower microplastic exposure than bottled water, at lower cost.
        </p>

        <p>
          The switch from daily bottled water to filtered tap water represents one of the highest-impact, lowest-effort reductions available. Mason et al. (2018) found bottled water averages 325 microplastic particles per litre — compared to effectively zero from a well-maintained reverse osmosis filter — making this one of the most straightforward exposure reductions a person can make.
        </p>

      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Related articles</h3>
        <div className="flex flex-col gap-3">
          <Link href="/blog/does-reverse-osmosis-remove-microplastics" className="text-sm text-teal-700 hover:underline">Does Reverse Osmosis Remove Microplastics? →</Link>
          <Link href="/blog/how-to-avoid-microplastics" className="text-sm text-teal-700 hover:underline">How to Avoid Microplastics: The Highest-Impact Changes, Ranked →</Link>
          <Link href="/blog/how-many-microplastics-do-you-consume" className="text-sm text-teal-700 hover:underline">How Many Microplastics Do You Consume Per Week? What the Research Shows →</Link>
        </div>
      </div>

      <div className="bg-teal-700 rounded-2xl p-6 mt-10 text-white text-center">
        <p className="font-semibold text-lg mb-1">Find out your personal exposure</p>
        <p className="text-teal-200 text-sm mb-4">14 questions · 2 minutes · peer-reviewed science</p>
        <Link href="/calculator" className="bg-white text-teal-700 font-semibold px-7 py-2.5 rounded-full text-sm hover:bg-teal-50 transition-colors">
          Start the calculator →
        </Link>
      </div>

      <div className="mt-10 border-t border-slate-100 pt-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">References</h3>
        <ol className="space-y-2 text-xs text-slate-500 list-decimal list-inside leading-relaxed">
          <li>Mason SA et al. Synthetic Polymer Contamination in Bottled Water. <em>Front Chem</em>. 2018. DOI: 10.3389/fchem.2018.00407</li>
          <li>Li Y et al. Microplastics in bottled water: a review of occurrence, detection, and potential health impacts. <em>Sci Total Environ</em>. 2023. DOI: 10.1016/j.scitotenv.2023.161553</li>
          <li>Danopoulos E et al. Microplastic contamination of drinking water: a systematic review. <em>PLOS ONE</em>. 2020. DOI: 10.1371/journal.pone.0236838</li>
        </ol>
      </div>
    </article>
  );
}
