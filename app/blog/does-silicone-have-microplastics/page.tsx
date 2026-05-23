import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Does Silicone Have Microplastics?",
  description:
    "Silicone is widely marketed as a safer alternative to plastic. But does it release microplastics or other particles? Here's what the peer-reviewed evidence says.",
  alternates: {
    canonical: "https://www.bodyburdenlab.com/blog/does-silicone-have-microplastics",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-04-19",
    title: "Does Silicone Have Microplastics?",
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
    title: "Does Silicone Have Microplastics?",
    description:
      "Silicone is widely marketed as a safer alternative to plastic. But does it release microplastics or other particles? Here's what the peer-reviewed evidence says.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Does+Silicone+Release+Microplastics%3F&tag=Science",
    ],
  },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Does Silicone Have Microplastics?",
    "description": "Silicone is widely marketed as a safer alternative to plastic. But does it release microplastics or other particles? Here's what the peer-reviewed evidence says.",
    "datePublished": "2026-04-19",
    "dateModified": "2026-04-19",
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
      "url": "https://www.bodyburdenlab.com/blog-silicone.png",
      "width": 1200,
      "height": 630,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bodyburdenlab.com/blog/does-silicone-have-microplastics",
    },
    "url": "https://www.bodyburdenlab.com/blog/does-silicone-have-microplastics",
    "inLanguage": "en-US",
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
    { "@type": "ListItem", "position": 3, "name": "Does Silicone Have Microplastics?", "item": "https://www.bodyburdenlab.com/blog/does-silicone-have-microplastics" },
  ]
}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does silicone have microplastics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Silicone is not technically a plastic, so it does not release microplastics in the traditional sense. However, it does release nanoparticles under mechanical stress (Ekvall et al., 2023) and migrates methylsiloxane chemicals — including D4, D5, and D6 — into food at cooking temperatures. 84% of silicone kitchenwares tested showed endocrine disrupting activity (Feng et al., 2023). It is not inert."
      }
    },
    {
      "@type": "Question",
      "name": "Is silicone safer than plastic for cooking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the comparison. Silicone doesn't carry BPA or phthalate risks associated with some hard plastics, but peer-reviewed studies show it migrates methylsiloxanes into food at high temperatures — compounds flagged by EU regulators as substances of very high concern. Glass, stainless steel, and cast iron remain the safest choices for high-heat cooking based on current evidence."
      }
    },
    {
      "@type": "Question",
      "name": "Do silicone spatulas release microplastics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Silicone spatulas and utensils can release nanoparticles under mechanical stress and abrasion, and may migrate siloxane chemicals during cooking. The risk increases with wear — visibly degraded or heavily scratched silicone items should be replaced. For cooking utensils, stainless steel or wooden alternatives carry lower risk."
      }
    }
  ]
}) }} />
      <div className="mb-8">
        <Link href="/blog" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">
          ← Back to Blog
        </Link>
        <div className="flex items-center gap-3 mt-4 mb-4">
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Science</span>
          <Link href="/author/liam-murphy" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">Liam Murphy</Link>
          <span className="text-xs text-slate-400">·</span>
          <time className="text-xs text-slate-400" dateTime="2026-04-19">April 19, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          Does Silicone Have Microplastics?
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Silicone kitchen items — baking moulds, baby bottles, spatulas — are widely promoted as a safer plastic alternative. What the research actually shows is more complicated than the marketing suggests.
        </p>
        <Image
          src="/blog-silicone.png"
          alt="Silicone kitchen utensils"
          width={800}
          height={450}
          className="w-full rounded-xl mt-6 mb-2"
          priority
        />
      </div>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-0.5">Find out your current exposure level</p>
          <p className="text-xs text-slate-500">12 questions · 2 minutes · based on peer-reviewed science</p>
        </div>
        <Link href="/calculator" className="bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-teal-800 transition-colors whitespace-nowrap">
          Take the calculator →
        </Link>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Key takeaways</p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>→ Silicone doesn't release traditional microplastics — but it does release nanoparticles and chemical migrants that raise their own concerns</li>
          <li>→ 84% of silicone kitchenwares tested showed hormone-disrupting effects, and 96% were toxic to cells — caused by chemicals migrating out at cooking temperatures (Feng et al., 2023)</li>
          <li>→ The main chemicals are methylsiloxanes (D4, D5, D6) — flagged by EU regulators as substances of very high concern due to links with hormone disruption and fertility effects (Feng et al., 2023)</li>
          <li>→ Risk increases with heat — migration is meaningfully higher when silicone is used for baking or hot food (Feng et al., 2023)</li>
          <li>→ Silicone also releases nanoparticles under mechanical stress — and boiling silicone approximately doubles subsequent particle release (Ekvall et al., 2023)</li>
          <li>→ Glass, stainless steel, and cast iron remain the safest choices for food contact — none release particles or methylsiloxanes</li>
        </ul>
      </div>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-5">

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What is silicone?</h2>

        <p>
          Silicone is a synthetic polymer — but it is not technically a plastic. Plastics have a carbon-chain backbone; silicone has a silicon-oxygen backbone. This is part of why it is marketed as a safer alternative. It is heat-resistant, flexible, and widely used in kitchen tools, food storage bags, baby products, and medical devices.
        </p>

        <p>
          The real question isn't whether silicone is technically a plastic — it's whether it releases particles or chemicals into food under everyday use. That's what the research addresses.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What the research shows</h2>

        <p>
          The short answer: silicone doesn't release traditional microplastics. What it does release — nanoparticles and chemical migrants — raises its own concerns.
        </p>

        <p>
          Feng et al. (2023) in <em>Science of the Total Environment</em> tested 31 silicone kitchenwares — baking moulds, plates, chopping boards, and cups. They found that 96% were toxic to cells and 84% showed hormone-disrupting effects, including impacts on both estrogen and androgen activity. At least 26 organic compounds and 21 metals were detected migrating out of the products.
        </p>

        <p>
          The main chemicals driving these effects were methylsiloxanes — D4, D5, and D6. These are flagged by the European Chemicals Agency as substances of very high concern, linked to fertility damage and hormone disruption in animal studies. Migration was higher at elevated temperatures — which is exactly how most silicone bakeware and cooking utensils are used.
        </p>

        <p>
          Notably, the 11 baby bottle nipples in the same study performed significantly better — none showed toxic or hormonal effects. This suggests that the tighter regulation applied to infant products may result in safer silicone formulations.
        </p>

        <p>
          On the particle side, Ekvall et al. (2023) in <em>PLOS ONE</em> confirmed that silicone releases nanoparticles under mechanical stress. Their experiments with silicone pacifiers showed that boiling the material before mechanical breakdown approximately doubled the number of nanoparticles released — pointing to heat as a factor that weakens silicone's structure over time.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Is silicone safer than plastic?</h2>

        <p>
          The honest answer is: it depends on what you're comparing and how you're using it. Silicone doesn't carry the same BPA or phthalate concerns associated with some hard plastics, and it doesn't melt or degrade in the way thin polypropylene does when heated. But the Feng et al. findings make clear it's not inert — chemical migration happens, and it increases with heat.
        </p>

        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>High-temperature use carries the most risk</strong> — baking moulds and oven-safe cookware are where migration of methylsiloxanes is most likely to occur.</li>
          <li><strong>Not all silicone products are the same</strong> — the study found variation between products, and the better-performing bottle nipples suggest formulation matters. Cheaper products with more additives and colorants may carry higher risk.</li>
          <li><strong>Mechanical wear also releases particles</strong> — silicone used with abrasive cleaners or utensils will shed nanoparticles over time.</li>
          <li><strong>Cold storage is lower risk</strong> — the migration effects in Feng et al. were measured at cooking temperatures; using silicone bags for cold food storage is a different risk profile.</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Practical guidance</h2>

        <p>
          For high-heat applications — baking moulds, oven trays, cooking utensils — glass, stainless steel, and cast iron are the safest choices based on current evidence. These materials don't release methylsiloxanes or nanoparticles into food. For cold food storage or low-temperature uses, silicone is lower risk, though not zero risk.
        </p>

        <p>
          If you do use silicone kitchenware, replacing items that are visibly degraded, discoloured, or heavily scratched is reasonable — wear increases particle release. Avoiding abrasive scouring pads when cleaning silicone also helps.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What the research doesn't yet tell us</h2>

        <p>
          The Feng et al. study used accelerated migration conditions — 95% ethanol at 70°C — which are designed to simulate extended real-world use in a shorter timeframe. Whether everyday cooking at typical oven temperatures produces the same migration levels in actual food is not yet established. The study also sourced products from the Chinese market, so it isn't directly generalisable to products sold elsewhere under different regulatory frameworks. What it does establish is that chemical migration from silicone kitchenware is real and measurable, and that the compounds migrating have known biological activity.
        </p>

      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Related articles</h3>
        <div className="flex flex-col gap-3">
          <Link href="/blog/how-to-avoid-microplastics" className="text-sm text-teal-700 hover:underline">How to Avoid Microplastics: The Highest-Impact Changes, Ranked →</Link>
          <Link href="/blog/how-many-microplastics-do-you-consume" className="text-sm text-teal-700 hover:underline">How Many Microplastics Do You Consume Per Week? →</Link>
          <Link href="/blog/microplastics-in-bottled-water" className="text-sm text-teal-700 hover:underline">Microplastics in Bottled Water — What the Research Shows →</Link>
        </div>
      </div>

      <div className="bg-teal-700 rounded-2xl p-6 mt-10 text-white text-center">
        <p className="font-semibold text-lg mb-1">Find out your personal exposure</p>
        <p className="text-teal-200 text-sm mb-4">12 questions · 2 minutes · peer-reviewed science</p>
        <Link href="/calculator" className="bg-white text-teal-700 font-semibold px-7 py-2.5 rounded-full text-sm hover:bg-teal-50 transition-colors">
          Start the calculator →
        </Link>
      </div>

      <div className="mt-10 border-t border-slate-100 pt-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">References</h3>
        <ol className="space-y-2 text-xs text-slate-500 list-decimal list-inside leading-relaxed">
          <li>Feng D et al. Cytotoxicity, endocrine disrupting activity, and chemical analysis of 42 food contact silicone rubber products. <em>Sci Total Environ</em>. 2023. DOI: 10.1016/j.scitotenv.2023.162298</li>
          <li>Ekvall MT et al. Nanoplastics released from daily used silicone and latex products during mechanical breakdown. <em>PLOS ONE</em>. 2023. DOI: 10.1371/journal.pone.0289377</li>
        </ol>
      </div>
    </article>
  );
}
