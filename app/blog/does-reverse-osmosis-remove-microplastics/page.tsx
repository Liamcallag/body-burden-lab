import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Does Reverse Osmosis Remove Microplastics?",
  description:
    "Reverse osmosis is among the most effective water filtration methods for microplastics. Here's what the peer-reviewed evidence shows — and how it compares to other filters.",
  openGraph: {
    type: "article",
    publishedTime: "2026-04-19",
    title: "Does Reverse Osmosis Remove Microplastics?",
    description:
      "Reverse osmosis is among the most effective water filtration methods for microplastics. Here's what the peer-reviewed evidence shows — and how it compares to other filters.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Does+Reverse+Osmosis+Remove+Microplastics%3F&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Reverse Osmosis Remove Microplastics?",
    description:
      "Reverse osmosis is among the most effective water filtration methods for microplastics. Here's what the peer-reviewed evidence shows — and how it compares to other filters.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Does+Reverse+Osmosis+Remove+Microplastics%3F&tag=Science",
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
          Does Reverse Osmosis Remove Microplastics?
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Yes — and to a very high degree. Reverse osmosis is one of the most effective technologies available for removing microplastics from drinking water. Here's what the research shows.
        </p>
      </div>

      <div className="mb-10 rounded-xl overflow-hidden">
        <img
          src="/blog-reverse-osmosis.png"
          alt="Illustration of a reverse osmosis filter system installed under a kitchen sink"
          className="w-full object-cover"
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

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How reverse osmosis works</h2>

        <p>
          Reverse osmosis (RO) forces water under pressure through a semi-permeable membrane with pore sizes typically in the range of 0.0001 microns (0.1 nanometres). To put this in context, the smallest microplastic particles that researchers routinely detect are around 1 micron — roughly 10,000 times larger than an RO membrane pore. Even nanoplastic particles, which are far smaller than microplastics, are typically 100–1,000 nanometres in size, still orders of magnitude larger than what passes through an RO membrane.
        </p>

        <p>
          This size mismatch is why RO is so effective. It is not relying on chemical affinity or adsorption — it is a purely physical barrier that microplastic and nanoplastic particles simply cannot pass through.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What the research shows</h2>

        <p>
          A 2023 review by Cherian et al. in <em>Polymers</em> assessed multiple filtration technologies against microplastic removal efficiency. The review found that reverse osmosis consistently achieved removal rates above 99%, outperforming all other common household filtration methods including activated carbon filters, ultrafiltration, and sand filtration. The near-complete removal was attributed to the membrane pore size being orders of magnitude smaller than even the smallest detectable microplastic particles.
        </p>

        <p>
          Acarer (2023) in <em>Water Science and Technology</em> reviewed removal efficiencies across conventional and advanced water treatment processes, confirming that membrane-based technologies — particularly RO and nanofiltration — provide the highest and most reliable microplastic removal. Conventional water treatment (coagulation, sedimentation, sand filtration) removed 40–80% of microplastics, while membrane processes consistently achieved 99%+ removal.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How does it compare to other filters?</h2>

        <p>
          Tang and Hadibarata (2021) in <em>Environmental Challenges</em> reviewed a range of microplastic removal technologies and found a clear performance hierarchy:
        </p>

        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Reverse osmosis:</strong> &gt;99% removal — the highest of any household technology</li>
          <li><strong>Ultrafiltration membranes:</strong> 85–99% — effective but less thorough than RO</li>
          <li><strong>Activated carbon block filters:</strong> 70–90% for larger particles — less effective for particles below 10 microns</li>
          <li><strong>Standard pitcher filters (Brita-style):</strong> Variable — may remove larger particles but inconsistent for smaller ones</li>
          <li><strong>Boiling tap water:</strong> 80–90% for hard water (as per Yu et al. 2024) — free and highly accessible</li>
          <li><strong>Bottled water:</strong> Adds microplastics rather than removing them — not a solution</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Does RO remove nanoplastics too?</h2>

        <p>
          This is where the evidence is more limited. Nanoplastics are defined as particles below 1 micron, though in practice researchers often use a threshold of 100 nanometres. The membrane pore size of a standard RO system (0.0001 microns = 0.1 nm) is still smaller than even the smallest nanoplastics measured in studies. On theoretical grounds, RO should remove nanoplastics with similar efficiency to microplastics.
        </p>

        <p>
          However, the measurement challenge is significant: nanoplastics are extremely difficult to detect and quantify reliably, so few studies have directly measured RO removal rates for nanoplastics specifically. The physics strongly supports high removal efficiency, but peer-reviewed confirmation at the nanoscale is limited.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Practical considerations</h2>

        <p>
          RO systems are effective but come with trade-offs. They waste water — a typical household RO unit produces 3–4 litres of waste water for every litre of filtered water, though more efficient models are available. They also remove beneficial minerals including calcium and magnesium, which some users remineralise back in. Countertop and under-sink systems are both available; under-sink systems with a storage tank are more convenient for daily use.
        </p>

        <p>
          For most households, the choice between RO and a quality activated carbon block filter (such as those from Berkey or ZeroWater) comes down to cost versus performance. An activated carbon block filter at ~£50–150 removes 70–90% of microplastics. RO removes &gt;99% but costs more to install and maintain, and wastes water. Both are dramatically better than bottled water or no filtration.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The bottom line</h2>

        <p>
          Yes, reverse osmosis removes microplastics — to a higher degree than any other readily available household water treatment technology. If reducing microplastic exposure from drinking water is a priority, RO is the most evidence-backed approach. For those who find RO impractical, boiling hard tap water (Yu et al. 2024) or using an activated carbon block filter are meaningful alternatives supported by published research.
        </p>

      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Related articles</h3>
        <div className="flex flex-col gap-3">
          <Link href="/blog/microplastics-in-bottled-water" className="text-sm text-teal-700 hover:underline">Microplastics in Bottled Water — What the Research Shows →</Link>
          <Link href="/blog/how-to-avoid-microplastics" className="text-sm text-teal-700 hover:underline">How to Avoid Microplastics — A Science-Based Guide →</Link>
          <Link href="/blog/how-many-microplastics-do-you-consume" className="text-sm text-teal-700 hover:underline">How Many Microplastics Do You Consume Per Week? →</Link>
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
        </ol>
      </div>
    </article>
  );
}
