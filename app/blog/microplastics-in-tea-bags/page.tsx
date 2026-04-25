import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microplastics in Tea Bags: How Many You're Drinking and What to Use Instead",
  description:
    "A single plastic tea bag releases up to 11.6 billion microplastic particles into your cup. Here's what the research shows and what to use instead.",
  openGraph: {
    type: "article",
    publishedTime: "2026-04-23",
    title: "Microplastics in Tea Bags: How Many You're Drinking and What to Use Instead",
    description:
      "A single plastic tea bag releases up to 11.6 billion microplastic particles into your cup. Here's what the research shows and what to use instead.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+in+Tea+Bags%3A+How+Many+You%27re+Drinking&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microplastics in Tea Bags: How Many You're Drinking and What to Use Instead",
    description:
      "A single plastic tea bag releases up to 11.6 billion microplastic particles into your cup. Here's what the research shows and what to use instead.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+in+Tea+Bags%3A+How+Many+You%27re+Drinking&tag=Science",
    ],
  },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Microplastics in Tea Bags: How Many You're Drinking and What to Use Instead",
    "datePublished": "2026-04-23",
    "publisher": { "@type": "Organization", "name": "Body Burden Lab", "url": "https://www.bodyburdenlab.com" },
    "url": "https://www.bodyburdenlab.com/blog/microplastics-in-tea-bags",
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
          <span className="text-xs text-slate-400">5 min read</span>
          <time className="text-xs text-slate-400" dateTime="2026-04-23">April 23, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          Microplastics in Tea Bags: How Many You're Drinking and What to Use Instead
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Tea is the second most consumed beverage in the world. For the many millions who brew it in a plastic or nylon bag, each cup delivers billions of microplastic and nanoplastic particles alongside the flavour.
        </p>
        <img
          src="/blog-tea-bags.png"
          alt="Tea bag steeping in hot water with microplastic particles"
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

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The 2019 study that changed the picture</h2>

        <p>
          In 2019, Hernandez et al. published a study in <em>Environmental Science & Technology</em> that became one of the most widely cited findings in microplastics research. The team steeped single-use plastic and nylon tea bags at normal brewing temperature (95°C) and analysed the water.
        </p>

        <p>
          The result: a single plastic tea bag releases approximately <strong>11.6 billion microplastic and 3.1 billion nanoplastic particles</strong> per cup. To put this in context, that is orders of magnitude higher than the concentration found in bottled water — which itself is considered a high-exposure source.
        </p>

        <p>
          The primary polymers identified were nylon-6 and polyethylene terephthalate (PET) — the same materials used to make the mesh bags themselves. The particles were not coming from the tea or the water; they were coming from the bag disintegrating under heat.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Follow-up research confirms the finding</h2>

        <p>
          A 2024 study in <em>Food Chemistry</em> examined multiple polymer types used in tea bags and confirmed that releases exceeding one billion particles per bag are consistent across nylon-6, polypropylene, and PET bags. The study found that particle release was significantly higher at brewing temperatures than at room temperature, and increased further with steeping time — meaning the common habit of leaving a bag in the cup while drinking compounds the exposure.
        </p>

        <p>
          Both studies found that the particles released were predominantly nanoplastics — particles below 1 micron — which are considered more concerning than larger microplastic particles because they can more readily cross biological barriers including the gut wall and the blood-brain barrier.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Are paper tea bags safe?</h2>

        <p>
          Not automatically. Many paper tea bags are sealed with a thin strip of polypropylene to hold the bag closed under heat. These bags release fewer particles than full plastic mesh bags, but are not particle-free. The safest paper bags are those with a staple or folded seal — no plastic adhesive — and these do release negligible particle counts by comparison.
        </p>

        <p>
          The key distinction is between the mesh body of the bag and the seal. A paper bag with a polypropylene heat seal will release far fewer particles than a full nylon mesh bag, but more than a paper bag with a staple or fold.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How to identify plastic tea bags</h2>

        <p>
          The easiest test: hold the empty bag up to light. Plastic mesh bags (nylon, PET) are slightly translucent and have a smooth, silky texture. Paper bags feel rougher and are opaque. If you are unsure, check the brand's packaging — many now specify "plastic-free" explicitly in response to consumer pressure.
        </p>

        <p>
          Brands that have committed to plastic-free bags include several major UK and European tea producers. Many supermarket own-brand bags, however, still use plastic mesh or polypropylene-sealed paper.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The practical solution</h2>

        <p>
          Loose-leaf tea brewed in a stainless steel or glass infuser eliminates this exposure pathway entirely. The particle release from loose-leaf tea prepared this way is negligible. For those who prefer bags for convenience, paper bags with a staple or folded seal — verified as plastic-free — are a significant improvement over plastic mesh bags.
        </p>

        <p>
          For daily tea drinkers using plastic bags, this is one of the single largest controllable microplastic exposure sources — comparable in magnitude to microwaving food in plastic containers. The fix is both cheap and simple.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How this compares to other exposure sources</h2>

        <p>
          Cox et al. (2019) estimated that the average American ingests between 74,000 and 121,000 microplastic particles per year from all sources. A daily plastic tea drinker adds approximately <strong>4.2 billion particles per week</strong> from tea alone — dwarfing most other individual exposure pathways. Switching to loose leaf or staple-sealed paper bags reduces this to near zero.
        </p>

      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Related articles</h3>
        <div className="flex flex-col gap-3">
          <Link href="/blog/how-many-microplastics-do-you-consume" className="text-sm text-teal-700 hover:underline">How Many Microplastics Do You Consume Per Week? →</Link>
          <Link href="/blog/how-to-avoid-microplastics" className="text-sm text-teal-700 hover:underline">How to Avoid Microplastics — A Science-Based Guide →</Link>
          <Link href="/blog/microplastics-in-cutting-boards" className="text-sm text-teal-700 hover:underline">How Many Microplastics Does a Plastic Cutting Board Add to Your Meals? →</Link>
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
          <li>Hernandez LM et al. Plastic Teabags Release Billions of Microparticles and Nanoparticles into Tea. <em>Environ Sci Technol</em>. 2019. DOI: 10.1021/acs.est.9b02540</li>
          <li>Li S et al. Microplastics and nanoplastics released from plastic tea bags into tea. <em>Food Chem</em>. 2024. DOI: 10.1016/j.foodchem.2024.138093</li>
          <li>Cox KD et al. Human Consumption of Microplastics. <em>Environ Sci Technol</em>. 2019. DOI: 10.1021/acs.est.9b01517</li>
        </ol>
      </div>
    </article>
  );
}
