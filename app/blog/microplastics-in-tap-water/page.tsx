import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Microplastics in Tap Water: How Much Are You Drinking?",
  description:
    "Tap water contains microplastics — but significantly fewer than bottled water. Here's what peer-reviewed research shows about contamination levels, sources, and how to reduce your exposure.",
  alternates: {
    canonical: "https://www.bodyburdenlab.com/blog/microplastics-in-tap-water",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-05-13",
    title: "Microplastics in Tap Water: How Much Are You Drinking?",
    description:
      "Tap water contains microplastics — but significantly fewer than bottled water. Here's what peer-reviewed research shows about contamination levels, sources, and how to reduce your exposure.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+in+Tap+Water%3A+How+Much+Are+You+Drinking%3F&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microplastics in Tap Water: How Much Are You Drinking?",
    description:
      "Tap water contains microplastics — but significantly fewer than bottled water. Here's what peer-reviewed research shows about contamination levels, sources, and how to reduce your exposure.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+in+Tap+Water%3A+How+Much+Are+You+Drinking%3F&tag=Science",
    ],
  },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Microplastics in Tap Water: How Much Are You Drinking?",
    "description": "Tap water contains microplastics — but significantly fewer than bottled water. Here's what peer-reviewed research shows about contamination levels, sources, and how to reduce your exposure.",
    "datePublished": "2026-05-13",
    "dateModified": "2026-05-13",
    "author": {
      "@type": "Person",
      "@id": "https://www.bodyburdenlab.com/author/liam-murphy#person",
      "name": "Liam Murphy",
      "url": "https://www.bodyburdenlab.com/author/liam-murphy",
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.bodyburdenlab.com/#organization",
      "name": "Body Burden",
      "url": "https://www.bodyburdenlab.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bodyburdenlab.com/blog/microplastics-in-tap-water",
    },
    "url": "https://www.bodyburdenlab.com/blog/microplastics-in-tap-water",
    "inLanguage": "en-US",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does tap water contain microplastics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Microplastics have been detected in tap water samples globally. However, treated tap water in developed countries typically contains significantly fewer microplastic particles per litre than bottled water. A 2020 systematic review by Danopoulos et al. in PLOS ONE found maximum contamination of 628 particles per litre for tap water versus 4,889 particles per litre for bottled water in European samples. Fragments are the most commonly detected particle shape in tap water, followed by fibres."
        }
      },
      {
        "@type": "Question",
        "name": "Is tap water safer than bottled water for microplastics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally yes, for microplastic exposure specifically. Bottled water introduces additional contamination from the packaging and bottling process itself. Mason et al. (2018) found polypropylene — the plastic commonly used to make bottle caps — was the dominant polymer type, suggesting the cap is a primary contamination source. The same study found bottled water averaged 325 microplastic particles per litre across 11 global brands. Filtered tap water — particularly through reverse osmosis or activated carbon block — delivers substantially lower microplastic content than bottled water. Unfiltered tap water is not microplastic-free, but it is typically lower exposure than bottled water."
        }
      },
      {
        "@type": "Question",
        "name": "How do I remove microplastics from tap water?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective options, ranked by expected removal performance: Reverse osmosis is the strongest available option — its membrane pore size of approximately 0.0001 microns means microplastic particles cannot physically pass through an intact membrane. Activated carbon block filters can be effective but performance varies significantly by product quality; some lower-quality filters with plastic housings have been shown to increase microplastic counts rather than reduce them. Boiling hard tap water (above 120 mg/L calcium carbonate) removes at least 80% of free-floating microplastics by encapsulating them in calcium carbonate scale — the effect is considerably lower in soft water areas. Standard pitcher filters such as Brita-style granular activated carbon have pore sizes of around 20–50 microns, meaning most tap water microplastics pass straight through — they are not reliably effective for microplastic removal."
        }
      }
    ]
  };

  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bodyburdenlab.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.bodyburdenlab.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Microplastics in Tap Water: How Much Are You Drinking?", "item": "https://www.bodyburdenlab.com/blog/microplastics-in-tap-water" },
  ]
}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mb-8">
        <Link href="/blog" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">
          ← Back to Blog
        </Link>
        <div className="flex items-center gap-3 mt-4 mb-4">
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Science</span>
          <Link href="/author/liam-murphy" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">Liam Murphy</Link>
          <span className="text-xs text-slate-400">·</span>
          <time className="text-xs text-slate-400" dateTime="2026-05-13">May 13, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          Microplastics in Tap Water: How Much Are You Drinking?
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Tap water is not microplastic-free. But the evidence consistently shows it contains far fewer particles than bottled water — and simple interventions can reduce exposure further. Here is what the research shows.
        </p>
      </div>

      <div className="mb-10 rounded-xl overflow-hidden">
        <Image
          src="/blog-tap-water.png"
          alt="Glass of water and plastic bottle containing visible microplastic particles"
          width={800}
          height={450}
          className="w-full object-cover"
          priority
        />
      </div>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-0.5">Find out your current exposure level</p>
          <p className="text-xs text-slate-500">13 questions · 2 minutes · based on peer-reviewed science</p>
        </div>
        <Link href="/calculator" className="bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-teal-800 transition-colors whitespace-nowrap">
          Take the calculator →
        </Link>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Key takeaways</p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>→ Microplastics have been detected in tap water globally — but treated municipal water typically has far lower concentrations than bottled water</li>
          <li>→ A systematic review found maximum tap water contamination of 628 particles/litre vs 4,889 particles/litre for bottled water in European samples (Danopoulos et al., 2020)</li>
          <li>→ Fragments are the most common microplastic shape found in tap water, with fibres second — consistent across multiple studies including the 2020 Danopoulos systematic review</li>
          <li>→ Water treatment plants remove a significant proportion of microplastics but not all — final removal rates vary by treatment process and particle size</li>
          <li>→ Boiling hard tap water removes at least 80% of microplastics at no cost (Yu et al., 2024); reverse osmosis removes more than 99%</li>
        </ul>
      </div>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-5">

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Is tap water contaminated with microplastics?</h2>

        <p>
          Yes — microplastics have been detected in tap water samples from every region of the world where studies have been conducted. A 2020 systematic review by Danopoulos et al. in <em>PLOS ONE</em>, covering 12 studies across tap and bottled water, found microplastic contamination in tap water in all locations studied. Across the tap water studies reviewed, fragments were the most commonly identified particle shape, with fibres the second most common.
        </p>

        <p>
          The contamination is real but it needs context: treated tap water in developed countries consistently shows lower particle concentrations than bottled water. The review found maximum contamination of 628 microplastic particles per litre for tap water versus 4,889 particles per litre for bottled water in European samples. The direction of the evidence is consistent — tap water is a lower-exposure option than bottled water for most people in markets with treated municipal water.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Where do microplastics in tap water come from?</h2>

        <p>
          There are three main entry routes:
        </p>

        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Wastewater treatment effluent</strong> — synthetic fibres shed from clothing during washing are too small for standard wastewater treatment to fully capture. They pass into rivers and lakes that serve as drinking water sources. This is the dominant contamination pathway in most studies.</li>
          <li><strong>Atmospheric deposition</strong> — microplastic fibres and fragments carried by air settle into open reservoirs and water sources. Studies in remote locations including mountain lakes with no nearby industry have detected microplastics, confirming atmospheric transport as an independent pathway.</li>
          <li><strong>Distribution infrastructure</strong> — ageing water pipes, particularly PVC pipes, can shed particles into water as it travels from treatment plants to taps. This contributes a small fraction of overall contamination but is difficult to control at the household level.</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What does water treatment remove?</h2>

        <p>
          Modern drinking water treatment — which typically includes coagulation, flocculation, sedimentation, and filtration before disinfection — removes a significant proportion of microplastics, but not all. Pivokonský et al. (2018) in <em>Science of the Total Environment</em> studied three Czech drinking water treatment plants and found that while treatment substantially reduced microplastic counts, particles in the smallest size fractions (particularly those below 10 microns) were the hardest to remove and were still present in finished drinking water — accounting for up to 95% of particles detected.
        </p>

        <p>
          The efficiency of removal depends heavily on the treatment technology used, the particle size distribution in the source water, and whether membrane filtration stages are included. Plants using membrane ultrafiltration or nanofiltration achieve higher removal rates than those relying solely on conventional sedimentation and sand filtration. In many municipal systems, treatment is effective for larger particles but allows smaller microplastics and nanoplastics to pass through to the distribution network.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How does tap water compare to bottled water?</h2>

        <p>
          The comparison consistently favours tap water for microplastic exposure. <Link href="/blog/microplastics-in-bottled-water" className="text-teal-700 hover:underline">Mason et al. (2018) found bottled water averaged 325 microplastic particles per litre</Link> across 259 bottles from 11 global brands — with polypropylene, the plastic most commonly used to make bottle caps, identified as the dominant polymer type, suggesting the packaging and bottling process as a primary contamination source rather than the water itself. Bottled water is not a solution to microplastic exposure from drinking water; it introduces a different and typically larger source of contamination.
        </p>

        <p>
          The conclusion across the literature is clear: for people concerned about microplastic exposure from drinking water, the answer is not to switch to bottled water but to filter tap water.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How to reduce microplastics from tap water</h2>

        <p>
          Several options are well-supported by the evidence, ranked by removal efficiency:
        </p>

        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Reverse osmosis</strong> — the strongest available option. RO membranes have pore sizes of approximately 0.0001 microns, which is far smaller than any known microplastic particle. An intact membrane provides no physical pathway for microplastic particles to pass through — removal is a function of pore size rather than a measured average. <Link href="/blog/does-reverse-osmosis-remove-microplastics" className="text-teal-700 hover:underline">The most reliable choice</Link> for households prioritising maximum reduction.</li>
          <li><strong>Activated carbon block filters</strong> — performance varies significantly by product quality. High-quality carbon block filters rated for sub-micron particles can capture a meaningful proportion of microplastics. However, research has shown that lower-quality filters with plastic housings can shed particles into the water, resulting in higher microplastic counts than unfiltered tap water (Da Costa et al., 2024). Filter housing material and build quality matter as much as the stated pore size.</li>
          <li><strong>Boiling hard tap water</strong> — Yu et al. (2024) in <em>Environmental Science &amp; Technology Letters</em> found that boiling hard water (above 120 mg/L of calcium carbonate) removed at least 80% of free-floating microplastics and nanoplastics. The mechanism is calcium carbonate precipitating around plastic particles during boiling and trapping them in the resulting scale. Decanting the cooled water carefully — leaving the sediment behind — maximises the effect. In soft water areas, the calcium carbonate concentration is insufficient to drive this process effectively, so the benefit is considerably lower.</li>
          <li><strong>Standard pitcher filters</strong> — not reliably effective for microplastic removal. Brita-style granular activated carbon pitchers have pore sizes of around 20–50 microns, meaning the majority of tap water microplastics — which are typically smaller than this — pass straight through. These filters improve taste and reduce chlorine, but should not be relied upon for microplastic reduction.</li>
        </ul>

        <p>
          For a full comparison of filter types and removal rates, see the <Link href="/blog/best-water-filter-for-microplastics" className="text-teal-700 hover:underline">ranked guide to water filters for microplastics</Link>.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How significant is tap water as an exposure source?</h2>

        <p>
          Humans are exposed to microplastics through multiple routes simultaneously — drinking water, food, and air — and the WHO (2019) noted that understanding the relative contribution of each pathway requires considerably more research. What is clear is that drinking water is a consistent, daily route of exposure that accumulates over time, and that it sits alongside rather than above other significant pathways. Food preparation habits — particularly microwaving in plastic, using plastic cutting boards, and drinking from <Link href="/blog/microplastics-in-tea-bags" className="text-teal-700 hover:underline">plastic tea bags</Link> — are among the other high-exposure sources worth addressing in parallel.
        </p>

        <p>
          That said, water is consumed multiple times daily, making it a consistent and cumulative source. Filtering tap water is one of the most straightforward high-impact reductions available — particularly for households with infants, where <Link href="/blog/microplastics-in-baby-formula" className="text-teal-700 hover:underline">formula preparation using filtered water meaningfully reduces the dose compared to unfiltered or bottled water</Link>.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Is tap water safe to drink?</h2>

        <p>
          The presence of microplastics in tap water does not make it unsafe to drink in the conventional sense. Regulatory bodies including the WHO have reviewed the available evidence and have not concluded that microplastics in drinking water at detected concentrations represent an established health hazard at present — while acknowledging that the long-term research is ongoing. The WHO published a detailed review of microplastics in drinking water in 2019 noting the need for more research but not recommending avoidance of tap water.
        </p>

        <p>
          The more accurate framing is that microplastics in tap water represent a cumulative exposure source whose long-term health implications are being actively studied. The precautionary approach — filtering tap water to reduce exposure where practical — is reasonable, low-cost, and does not carry any downsides.
        </p>

      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Related articles</h3>
        <div className="flex flex-col gap-3">
          <Link href="/blog/best-water-filter-for-microplastics" className="text-sm text-teal-700 hover:underline">Best Water Filter for Microplastics: RO vs Carbon vs Pitcher, Ranked →</Link>
          <Link href="/blog/does-reverse-osmosis-remove-microplastics" className="text-sm text-teal-700 hover:underline">Does Reverse Osmosis Remove Microplastics? →</Link>
          <Link href="/blog/microplastics-in-bottled-water" className="text-sm text-teal-700 hover:underline">Microplastics in Bottled Water — What the Research Shows →</Link>
          <Link href="/blog/how-to-avoid-microplastics" className="text-sm text-teal-700 hover:underline">How to Avoid Microplastics: The Highest-Impact Changes, Ranked →</Link>
        </div>
      </div>

      <div className="bg-teal-700 rounded-2xl p-6 mt-10 text-white text-center">
        <p className="font-semibold text-lg mb-1">Find out your personal exposure</p>
        <p className="text-teal-200 text-sm mb-4">13 questions · 2 minutes · peer-reviewed science</p>
        <Link href="/calculator" className="bg-white text-teal-700 font-semibold px-7 py-2.5 rounded-full text-sm hover:bg-teal-50 transition-colors">
          Start the calculator →
        </Link>
      </div>

      <div className="mt-10 border-t border-slate-100 pt-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">References</h3>
        <ol className="space-y-2 text-xs text-slate-500 list-decimal list-inside leading-relaxed">
          <li>Danopoulos E et al. Microplastic contamination of drinking water: a systematic review. <em>PLOS ONE</em>. 2020. DOI: 10.1371/journal.pone.0236838</li>
          <li>Pivokonský M et al. Occurrence of microplastics in raw and treated drinking water. <em>Sci Total Environ</em>. 2018. DOI: 10.1016/j.scitotenv.2018.08.102</li>
          <li>Mason SA et al. Synthetic Polymer Contamination in Bottled Water. <em>Front Chem</em>. 2018. DOI: 10.3389/fchem.2018.00407</li>
          <li>Yu Z et al. Drinking Boiled Tap Water Reduces Human Intake of Nanoplastics and Microplastics. <em>Environ Sci Technol Lett</em>. 2024. DOI: 10.1021/acs.estlett.4c00081</li>
          <li>Da Costa ID et al. Are Water Filters Effective Against Microplastics? <em>Water</em>. 2024;16(22):3189. DOI: 10.3390/w16223189</li>
          <li>World Health Organization. Microplastics in Drinking-water. Geneva: WHO; 2019.</li>
        </ol>
      </div>
    </article>
  );
}
