import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Water Filter for Microplastics: RO vs Carbon vs Pitcher, Ranked",
  description:
    "Not all water filters remove microplastics equally. We ranked every major filter type by peer-reviewed removal efficiency — from reverse osmosis (>99%) to pitcher filters (inconsistent).",
  openGraph: {
    type: "article",
    publishedTime: "2026-05-10",
    title: "Best Water Filter for Microplastics: RO vs Carbon vs Pitcher, Ranked",
    description:
      "Not all water filters remove microplastics equally. We ranked every major filter type by peer-reviewed removal efficiency — from reverse osmosis (>99%) to pitcher filters (inconsistent).",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Best+Water+Filter+for+Microplastics&tag=Guide",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Water Filter for Microplastics: RO vs Carbon vs Pitcher, Ranked",
    description:
      "Not all water filters remove microplastics equally. We ranked every major filter type by peer-reviewed removal efficiency — from reverse osmosis (>99%) to pitcher filters (inconsistent).",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Best+Water+Filter+for+Microplastics&tag=Guide",
    ],
  },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Water Filter for Microplastics: RO vs Carbon vs Pitcher, Ranked",
    "datePublished": "2026-05-10",
    "publisher": { "@type": "Organization", "name": "Body Burden Lab", "url": "https://www.bodyburdenlab.com" },
    "url": "https://www.bodyburdenlab.com/blog/best-water-filter-for-microplastics",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best water filter for removing microplastics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reverse osmosis (RO) is the most effective water filter for microplastics, achieving removal rates above 99% in peer-reviewed studies. Its membrane pore size (0.0001 microns) is orders of magnitude smaller than even the smallest detectable microplastic particles. Activated carbon block filters are a good second option at 70–90% removal. Standard pitcher filters (Brita-style) are inconsistent and not reliably effective for smaller particles."
        }
      },
      {
        "@type": "Question",
        "name": "Do Brita filters remove microplastics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evidence on Brita-style pitcher filters is inconsistent. They may reduce larger microplastic particles but are not reliably effective for particles below 10 microns. Activated carbon block filters (a different technology from Brita's granular activated carbon) perform significantly better, removing 70–90% of microplastics. For the highest removal, reverse osmosis is the most evidence-backed option."
        }
      },
      {
        "@type": "Question",
        "name": "Is boiling water as effective as a filter for microplastics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Boiling hard tap water removes 80–90% of free-floating microplastics and nanoplastics, according to Yu et al. (2024) in Environmental Science & Technology Letters. The mechanism is calcium carbonate encapsulating particles as it precipitates during boiling. For soft water, the effect is lower (around 25%). Boiling is a low-cost alternative to filtration but requires letting the water cool and decanting carefully to avoid re-suspending settled particles."
        }
      }
    ]
  };
  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mb-8">
        <Link href="/blog" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">
          ← Back to Blog
        </Link>
        <div className="flex items-center gap-3 mt-4 mb-4">
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Guide</span>
          <span className="text-xs text-slate-400">6 min read</span>
          <time className="text-xs text-slate-400" dateTime="2026-05-10">May 10, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          Best Water Filter for Microplastics: RO vs Carbon vs Pitcher, Ranked
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Drinking water is one of the most significant microplastic exposure pathways — but not all filters address it equally. Here is what the peer-reviewed evidence says about each filter type, ranked by removal efficiency.
        </p>
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

        <p>
          The average person <Link href="/blog/how-many-microplastics-do-you-consume" className="text-teal-700 hover:underline">consuming only bottled water ingests approximately 1,730 additional microplastic particles per week</Link> compared to someone drinking filtered tap water — and <Link href="/blog/microplastics-in-bottled-water" className="text-teal-700 hover:underline">bottled water itself is a significant source</Link>, averaging 325 particles per litre across 11 major brands. Switching your water source is one of the most accessible exposure reductions available. But the filter type matters enormously.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The evidence-based ranking</h2>

        <p>
          Multiple peer-reviewed reviews have directly compared filtration technologies for microplastic removal. The performance hierarchy is consistent across studies:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left px-4 py-3 font-semibold text-slate-900 border border-slate-200">Filter type</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-900 border border-slate-200">Microplastic removal</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-900 border border-slate-200">Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-3 border border-slate-200 font-medium">Reverse osmosis (RO)</td>
                <td className="px-4 py-3 border border-slate-200 text-teal-700 font-semibold">&gt;99%</td>
                <td className="px-4 py-3 border border-slate-200">Best available</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 border border-slate-200 font-medium">Ultrafiltration membrane</td>
                <td className="px-4 py-3 border border-slate-200 text-teal-700 font-semibold">85–99%</td>
                <td className="px-4 py-3 border border-slate-200">Very good</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 border border-slate-200 font-medium">Activated carbon block</td>
                <td className="px-4 py-3 border border-slate-200 text-amber-600 font-semibold">70–90%</td>
                <td className="px-4 py-3 border border-slate-200">Good (weaker &lt;10 µm)</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 border border-slate-200 font-medium">Boiling (hard water)</td>
                <td className="px-4 py-3 border border-slate-200 text-amber-600 font-semibold">80–90%</td>
                <td className="px-4 py-3 border border-slate-200">Effective, free</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 border border-slate-200 font-medium">Boiling (soft water)</td>
                <td className="px-4 py-3 border border-slate-200 text-amber-600 font-semibold">~25%</td>
                <td className="px-4 py-3 border border-slate-200">Limited</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 border border-slate-200 font-medium">Pitcher filter (Brita-style)</td>
                <td className="px-4 py-3 border border-slate-200 text-red-500 font-semibold">Inconsistent</td>
                <td className="px-4 py-3 border border-slate-200">Not reliable for microplastics</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 border border-slate-200 font-medium">Bottled water</td>
                <td className="px-4 py-3 border border-slate-200 text-red-500 font-semibold">Negative (adds particles)</td>
                <td className="px-4 py-3 border border-slate-200">Not a solution</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400">
          Sources: Cherian et al. (2023) Polymers; Acarer (2023) Water Sci Technol; Tang & Hadibarata (2021) Environ Challenges; Yu et al. (2024) EST Letters; Mason et al. (2018) Front Chem.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">1. Reverse osmosis — the strongest evidence</h2>

        <p>
          <Link href="/blog/does-reverse-osmosis-remove-microplastics" className="text-teal-700 hover:underline">Reverse osmosis consistently achieves microplastic removal above 99%</Link> across multiple independent peer-reviewed reviews. The mechanism is purely physical: RO membranes have pore sizes of approximately 0.0001 microns — orders of magnitude smaller than even the tiniest detectable microplastic particles (around 1 micron). Particles simply cannot pass through.
        </p>

        <p>
          This is why RO is the only technology with near-complete removal confirmed across multiple studies. It does not rely on chemical adsorption or electrostatic attraction — it is a physical size barrier.
        </p>

        <p>
          <strong>Trade-offs:</strong> RO systems waste water (typically 3–4 litres for every litre filtered, though more efficient models exist), remove beneficial minerals, and require installation and periodic membrane replacement. Under-sink systems with a storage tank are the most practical for daily use. Countertop RO units exist for renters.
        </p>

        <p>
          <strong>Best for:</strong> Anyone prioritising the highest possible microplastic reduction from drinking water, or households with infants where exposure reduction is most critical.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">2. Ultrafiltration membranes</h2>

        <p>
          Ultrafiltration (UF) uses membranes with pore sizes of around 0.01–0.1 microns — larger than RO but still well below the size of most microplastics. Peer-reviewed reviews report removal rates of 85–99%, making UF a strong second choice. UF systems do not remove dissolved minerals (unlike RO), which some users prefer for taste, and they waste less water.
        </p>

        <p>
          <strong>Trade-offs:</strong> Less widely available as consumer products than RO; removal rate is not as consistently near-complete. For particles at the very small end of the microplastic range (1–5 microns), performance may be lower than stated averages.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">3. Activated carbon block filters</h2>

        <p>
          Activated carbon block (ACB) filters — distinct from granular activated carbon used in standard pitcher filters — remove 70–90% of microplastics in peer-reviewed testing. The pore structure of a compressed carbon block provides a physical barrier as well as adsorptive capacity. However, effectiveness drops significantly for particles below 10 microns, which represents a substantial portion of the microplastics found in drinking water.
        </p>

        <p>
          <strong>Trade-offs:</strong> Lower cost and easier installation than RO. Does not waste water or remove minerals. A meaningful improvement over no filtration but not as thorough as RO for the smallest particles.
        </p>

        <p>
          <strong>Best for:</strong> A practical mid-range option where RO installation is not feasible. Look specifically for carbon block filters rated for sub-micron particles — not all activated carbon products are equivalent.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">4. Boiling — the free option that actually works (for hard water)</h2>

        <p>
          A 2024 study by Yu et al. in <em>Environmental Science & Technology Letters</em> found that boiling hard tap water removed 80–90% of free-floating microplastics and nanoplastics. The mechanism: calcium carbonate in hard water precipitates during boiling and encapsulates microplastic particles, which then settle with the calcium deposits. Carefully decanting the cooled water leaves most of the particles behind.
        </p>

        <p>
          For soft water, the effect is considerably lower — around 25% — because there is insufficient calcium carbonate to drive the encapsulation mechanism.
        </p>

        <p>
          <strong>Best for:</strong> A cost-free intervention in hard water areas. Check your local water hardness to determine whether this is effective where you live.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">5. Pitcher filters — not reliably effective</h2>

        <p>
          Standard pitcher filters — including Brita-style granular activated carbon models — show inconsistent and generally poor performance for microplastic removal in peer-reviewed testing. They may capture some larger particles but are not designed or rated for sub-10-micron particles, which make up a significant proportion of microplastics in drinking water. A pitcher filter may improve taste and remove chlorine effectively, but it should not be relied upon for meaningful microplastic reduction.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What about bottled water?</h2>

        <p>
          Bottled water is not a filtration solution — it is itself a source. Mason et al. (2018) found that 93% of bottled water samples across 11 global brands and 9 countries were contaminated with microplastics, averaging 325 particles per litre. The primary source is the bottle and cap, not the water supply. PET bottles also continue leaching particles over time, particularly when stored warm. <Link href="/blog/microplastics-in-bottled-water" className="text-teal-700 hover:underline">Filtered tap water consistently outperforms bottled water</Link> for microplastic content.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Which filter is right for you?</h2>

        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Highest reduction, cost not a barrier:</strong> Under-sink reverse osmosis</li>
          <li><strong>Renting or can't install under-sink:</strong> Countertop RO unit or activated carbon block filter</li>
          <li><strong>Hard water area, low budget:</strong> Boiling tap water (80–90% removal at no cost)</li>
          <li><strong>Households with infants:</strong> RO — infant exposure is among the highest documented, and formula preparation with filtered water meaningfully reduces the dose</li>
          <li><strong>Already have a pitcher filter:</strong> It helps with taste, not reliably with microplastics — consider upgrading to a carbon block or RO system</li>
        </ul>

        <p className="mt-4">
          Water is not the only microplastic exposure pathway — but it is one of the most controllable. For a full picture of where your exposure is coming from, including food preparation, cookware, and air, see our <Link href="/blog/how-to-avoid-microplastics" className="text-teal-700 hover:underline">ranked guide to avoiding microplastics</Link>.
        </p>

      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Related articles</h3>
        <div className="flex flex-col gap-3">
          <Link href="/blog/does-reverse-osmosis-remove-microplastics" className="text-sm text-teal-700 hover:underline">Does Reverse Osmosis Remove Microplastics? →</Link>
          <Link href="/blog/microplastics-in-bottled-water" className="text-sm text-teal-700 hover:underline">Microplastics in Bottled Water — What the Research Shows →</Link>
          <Link href="/blog/how-to-avoid-microplastics" className="text-sm text-teal-700 hover:underline">How to Avoid Microplastics: The Highest-Impact Changes, Ranked →</Link>
        </div>
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
          <li>Cherian AG et al. A Review of Microplastics in Water: Occurrence, Fate, and Removal. <em>Polymers</em>. 2023. DOI: 10.3390/polym15061331</li>
          <li>Acarer S. A review of microplastic removal from water and wastewater by membrane technologies. <em>Water Sci Technol</em>. 2023. DOI: 10.2166/wst.2023.186</li>
          <li>Tang KHD &amp; Hadibarata T. Microplastics removal through water treatment processes: a critical review. <em>Environ Challenges</em>. 2021. DOI: 10.1016/j.envc.2021.100264</li>
          <li>Yu Z et al. Drinking Boiled Tap Water Reduces Human Intake of Nanoplastics and Microplastics. <em>Environ Sci Technol Lett</em>. 2024. DOI: 10.1021/acs.estlett.4c00081</li>
          <li>Mason SA et al. Synthetic Polymer Contamination in Bottled Water. <em>Front Chem</em>. 2018. DOI: 10.3389/fchem.2018.00407</li>
        </ol>
      </div>
    </article>
  );
}
