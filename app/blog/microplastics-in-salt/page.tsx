import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Microplastics in Salt: Is Sea Salt Making You Eat More Plastic?",
  description:
    "90% of commercial salt brands contain microplastics — and sea salt is the most contaminated type. Here's what the research shows and what it means for your exposure.",
  alternates: {
    canonical: "https://www.bodyburdenlab.com/blog/microplastics-in-salt",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-04-22",
    title: "Microplastics in Salt: Is Sea Salt Making You Eat More Plastic?",
    description:
      "90% of commercial salt brands contain microplastics — and sea salt is the most contaminated type. Here's what the research shows and what it means for your exposure.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+in+Salt%3A+Is+Sea+Salt+Making+You+Eat+More+Plastic%3F&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microplastics in Salt: Is Sea Salt Making You Eat More Plastic?",
    description:
      "90% of commercial salt brands contain microplastics — and sea salt is the most contaminated type. Here's what the research shows and what it means for your exposure.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+in+Salt%3A+Is+Sea+Salt+Making+You+Eat+More+Plastic%3F&tag=Science",
    ],
  },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Microplastics in Salt: Is Sea Salt Making You Eat More Plastic?",
    "description": "90% of commercial salt brands contain microplastics — and sea salt is the most contaminated type. Here's what the research shows and what it means for your exposure.",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
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
    "image": {
      "@type": "ImageObject",
      "url": "https://www.bodyburdenlab.com/blog-salt.png",
      "width": 1200,
      "height": 630,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bodyburdenlab.com/blog/microplastics-in-salt",
    },
    "url": "https://www.bodyburdenlab.com/blog/microplastics-in-salt",
    "inLanguage": "en-US",
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
          <span className="text-xs text-slate-400">By Liam Murphy</span>
          <span className="text-xs text-slate-400">·</span>
          <time className="text-xs text-slate-400" dateTime="2026-04-22">April 22, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          Microplastics in Salt: Is Sea Salt Making You Eat More Plastic?
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Sea salt is marketed as natural and minimally processed. Research shows it is also the most microplastic-contaminated type of salt available — a direct consequence of ocean plastic pollution.
        </p>
        <Image
          src="/blog-salt.png"
          alt="Sea salt with microplastic particles"
          width={800}
          height={450}
          className="w-full rounded-xl mt-6 mb-2"
          priority
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

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The global study: 39 brands, 21 countries</h2>

        <p>
          Kim et al. (2018) in <em>Environmental Science & Technology</em> conducted the most comprehensive analysis of microplastics in commercial salt to date. The team sampled 39 salt brands purchased from 21 countries across Europe, North America, and Asia. The findings were unambiguous: <strong>90% of salt brands contained microplastic particles</strong>.
        </p>

        <p>
          The contamination varied significantly by salt type. Sea salt showed the highest concentrations — ranging from 0 to 1,674 microplastic particles per kilogram, with a mean substantially higher than other salt types. Lake salt showed moderate contamination (28–462 particles/kg), while rock salt had the lowest (0–148 particles/kg). Refined table salt, which undergoes additional processing, tended to have lower particle counts than unrefined sea salt.
        </p>

        <p>
          The contamination level in sea salt correlated directly with the volume of plastic waste entering rivers and oceans in nearby regions — making sea salt effectively a microplastic index of local ocean pollution. Brands sourced from more polluted coastlines showed higher particle counts than those from less affected waters.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Why sea salt is more contaminated than other types</h2>

        <p>
          Sea salt is produced by evaporating seawater — either in open-air salt pans or through industrial evaporation. Because it is derived directly from ocean water, any microplastics suspended in the water are concentrated into the final product alongside the sodium chloride.
        </p>

        <p>
          Rock salt and mined salt, by contrast, come from ancient underground deposits formed millions of years before plastic existed. They contain no synthetic polymers by origin. Any contamination in rock salt comes from the mining or packaging process, not the source material — which is why these types consistently show lower particle counts.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How much do you ingest from salt?</h2>

        <p>
          Using the Kim et al. data and standard dietary sodium intake figures, an adult consuming the WHO-recommended maximum of 5g of salt per day would ingest approximately <strong>2,000 microplastic particles per year from salt alone</strong> if using a mid-range sea salt. At higher consumption levels — more typical of average Western diets — this figure rises proportionally.
        </p>

        <p>
          This makes dietary salt a moderate but consistent exposure source. It is not in the same category as microwaving food in plastic or using plastic tea bags, but it contributes meaningfully to cumulative annual intake — and unlike some exposure sources, it is present at every meal.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Does the type of salt matter for health reasons beyond microplastics?</h2>

        <p>
          The health literature on sea salt versus table salt has focused primarily on mineral content and iodine supplementation — not microplastics. Sea salt does contain trace minerals absent in refined table salt, but these are present in quantities too small to be nutritionally significant for most people. The choice between salt types for mineral content is essentially a marketing argument.
        </p>

        <p>
          When microplastic content is added to the comparison, the picture changes. Rock salt and refined table salt have meaningfully lower particle contamination than unrefined sea salt. For people who use significant quantities of salt in cooking and at the table, switching from sea salt to rock salt or refined iodised salt is a simple change that reduces one dietary exposure pathway.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What the research doesn't yet tell us</h2>

        <p>
          The 2018 Kim et al. study remains the most comprehensive global analysis. Since then, several regional studies have confirmed the pattern of sea salt contamination, and a 2025 critical review by Chell et al. in the <em>Journal of Chromatography Open</em> (DOI: 10.1016/j.jcoa.2025.100276) confirmed that sea salt consistently shows the highest contamination across salt types globally, with fragments and fibres under 200 μm being the most prevalent particle type. However, the health effects specifically from salt-derived microplastic ingestion have not been studied in isolation — the data on dose, accumulation, and long-term effects comes from the broader microplastics literature, not salt-specific research.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Practical guidance</h2>

        <p>
          If reducing microplastic exposure from salt is a priority, rock salt or refined iodised table salt has a lower particle burden than unrefined sea salt. This is not a dramatic intervention — salt contributes a relatively small fraction of total microplastic intake compared to sources like plastic cookware and containers — but it is an easy swap with no downside. The minerals marketed in sea salt are nutritionally negligible, and rock salt used in cooking performs identically.
        </p>

      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Related articles</h3>
        <div className="flex flex-col gap-3">
          <Link href="/blog/how-many-microplastics-do-you-consume" className="text-sm text-teal-700 hover:underline">How Many Microplastics Do You Consume Per Week? →</Link>
          <Link href="/blog/how-to-avoid-microplastics" className="text-sm text-teal-700 hover:underline">How to Avoid Microplastics: The Highest-Impact Changes, Ranked →</Link>
          <Link href="/blog/microplastics-in-bottled-water" className="text-sm text-teal-700 hover:underline">Microplastics in Bottled Water — What the Research Shows →</Link>
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
          <li>Kim JS et al. Global Pattern of Microplastics (MPs) in Commercial Food-Grade Salts: Sea Salt as an Indicator of Seawater MP Pollution. <em>Environ Sci Technol</em>. 2018. DOI: 10.1021/acs.est.8b04180</li>
          <li>Karami A et al. The presence of microplastics in commercial salts from different countries. <em>Sci Rep</em>. 2017. DOI: 10.1038/srep46173</li>
          <li>Chell S et al. Microplastics in salt: A critical review of contamination, analytical methodologies, and health implications. <em>J Chromatogr Open</em>. 2025;8:100276. DOI: 10.1016/j.jcoa.2025.100276</li>
        </ol>
      </div>
    </article>
  );
}
