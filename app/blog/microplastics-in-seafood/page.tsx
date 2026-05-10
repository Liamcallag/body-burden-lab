import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microplastics in Seafood: Which Fish and Shellfish Have the Most",
  description:
    "Shellfish eaters consume significantly more microplastics than fish eaters — because shellfish are eaten whole, digestive tract included. Here is what the research shows by seafood type.",
  openGraph: {
    type: "article",
    publishedTime: "2026-05-10",
    title: "Microplastics in Seafood: Which Fish and Shellfish Have the Most",
    description:
      "Shellfish eaters consume significantly more microplastics than fish eaters — because shellfish are eaten whole, digestive tract included. Here is what the research shows by seafood type.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+in+Seafood&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microplastics in Seafood: Which Fish and Shellfish Have the Most",
    description:
      "Shellfish eaters consume significantly more microplastics than fish eaters — because shellfish are eaten whole, digestive tract included. Here is what the research shows by seafood type.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+in+Seafood&tag=Science",
    ],
  },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Microplastics in Seafood: Which Fish and Shellfish Have the Most",
    "datePublished": "2026-05-10",
    "publisher": { "@type": "Organization", "name": "Body Burden Lab", "url": "https://www.bodyburdenlab.com" },
    "url": "https://www.bodyburdenlab.com/blog/microplastics-in-seafood",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do fish contain microplastics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, microplastics have been detected in the digestive tracts of a wide range of commercially caught fish. However, for large fish where only the muscle (fillet) is consumed, human exposure is significantly lower — microplastics concentrate in the gut, which is discarded. Smaller fish consumed whole, such as anchovies and sardines, carry higher exposure because the entire body including the digestive tract is eaten."
        }
      },
      {
        "@type": "Question",
        "name": "Does shellfish have more microplastics than fish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Shellfish — particularly mussels, oysters, clams, and scallops — are filter feeders that concentrate microplastics from surrounding water. They are also consumed whole, meaning the digestive tract (where microplastics accumulate) is eaten along with the muscle. Studies estimate that heavy shellfish consumers ingest up to 11,000 microplastic particles per year from this source alone. For comparison, fish fillet consumers ingest far fewer because the gut is removed before eating."
        }
      },
      {
        "@type": "Question",
        "name": "Should I stop eating seafood because of microplastics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The evidence does not support avoiding seafood on microplastic grounds alone. Seafood provides significant nutritional benefits including omega-3 fatty acids, protein, and micronutrients. The microplastic contribution from fish fillets is modest compared to other exposure pathways such as microwaving in plastic or using plastic tea bags. For shellfish, the exposure is higher but still one of many pathways. The most impactful reductions available are in food preparation habits, not seafood consumption."
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
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Science</span>
          <span className="text-xs text-slate-400">By James Mercer</span>
          <span className="text-xs text-slate-400">·</span>
          <time className="text-xs text-slate-400" dateTime="2026-05-10">May 10, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          Microplastics in Seafood: Which Fish and Shellfish Have the Most
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Seafood is a significant microplastic exposure pathway — but the amount varies enormously depending on what you eat and which part of the animal is consumed. Shellfish carry substantially higher exposure than fish fillets, for a specific biological reason.
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

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Why it matters which part of the fish you eat</h2>

        <p>
          Microplastics that fish ingest from contaminated water concentrate primarily in the digestive tract. For large commercially harvested fish — salmon, cod, tuna, haddock — humans eat only the filleted muscle tissue, and the gut is discarded. This means the vast majority of the microplastic load in these fish never reaches the consumer.
        </p>

        <p>
          The picture is fundamentally different for two categories of seafood:
        </p>

        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Shellfish</strong> (mussels, oysters, clams, scallops) — filter feeders consumed whole, digestive tract included</li>
          <li><strong>Small whole fish</strong> (anchovies, sardines, whitebait) — consumed whole, including gut</li>
        </ul>

        <p>
          For these categories, the consumer ingests whatever microplastics the animal has accumulated. For large filleted fish, exposure from the seafood itself is substantially lower.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Shellfish: the highest seafood exposure pathway</h2>

        <p>
          Shellfish are filter feeders — they pump large volumes of seawater through their bodies to extract food particles. In doing so, they also concentrate microplastics from the surrounding water. A 2016 EFSA (European Food Safety Authority) review estimated that heavy shellfish consumers in Europe could ingest up to <strong>11,000 microplastic particles per year</strong> from shellfish alone.
        </p>

        <p>
          Mussels have been the most studied species. Van Cauwenberghe and Janssen (2014) in <em>Environmental Pollution</em> found an average of 0.36 microplastic particles per gram of mussel tissue — meaning a typical serving of mussels contains several hundred particles. A 2020 review by Barboza et al. in <em>Science of the Total Environment</em> confirmed that bivalves (mussels, oysters, clams) consistently show higher microplastic contamination than other seafood categories, with concentrations reflecting regional ocean plastic pollution levels.
        </p>

        <p>
          Oysters show similar contamination levels. Rochman et al. (2015) documented microplastics across a range of commercially sold shellfish in the US and Indonesia, finding contamination in every sample tested.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Fish fillets: lower but not zero</h2>

        <p>
          For large fish consumed as fillets, the exposure from the seafood itself is considerably lower than shellfish — but not zero. Some microplastics do transfer from the gut into muscle tissue, and fish also absorb microplastics through their gills directly into the bloodstream. Cox et al. (2019) in <em>Environmental Science & Technology</em> estimated seafood as a whole contributes meaningfully to annual microplastic intake, but noted that fillet consumers have substantially lower exposure than shellfish consumers.
        </p>

        <p>
          Smaller fish consumed whole — sardines, anchovies, sprats — carry higher exposure than large filleted fish because the entire body including the digestive tract is eaten. Sardines and anchovies are also typically caught in coastal and surface waters where microplastic concentrations are higher than deep water.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How seafood compares to other exposure pathways</h2>

        <p>
          To put seafood exposure in context: Cox et al. (2019) estimated that the average American's annual microplastic intake from all food and drink is between 74,000 and 121,000 particles. Shellfish consumption represents a meaningful fraction of this for heavy consumers, but other pathways — particularly <Link href="/blog/how-to-avoid-microplastics" className="text-teal-700 hover:underline">microwaving food in plastic and drinking from plastic tea bags</Link> — can individually contribute tens of thousands of particles per week.
        </p>

        <p>
          The practical implication: for most people, food preparation habits are a higher-leverage target for exposure reduction than seafood consumption choices.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Does cooking affect microplastic content?</h2>

        <p>
          There is limited research on whether cooking methods affect microplastic content in seafood. High-temperature cooking does not degrade plastic particles — microplastics are stable at cooking temperatures. However, some studies suggest that boiling shellfish may cause some particle transfer into cooking water that is then discarded. The effect is modest and not a primary mitigation strategy.
        </p>

        <p>
          The more significant cooking-related risk is using plastic utensils, containers, or packaging during preparation — which can introduce additional particles irrespective of the seafood itself.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Should you eat less seafood?</h2>

        <p>
          The evidence does not support reducing seafood consumption on microplastic grounds alone. Seafood — including shellfish — provides significant nutritional value: omega-3 fatty acids, high-quality protein, zinc, iodine, and selenium. The microplastic contribution from even frequent shellfish consumption is one of many exposure pathways, and the other pathways (food preparation habits, water source, cookware) tend to be both larger and more controllable.
        </p>

        <p>
          The more productive question is not "should I eat less seafood?" but "what are the highest-impact changes I can make across all my exposure pathways?" For most people, the answer involves <Link href="/blog/how-to-avoid-microplastics" className="text-teal-700 hover:underline">changes to food preparation and water filtration</Link> before it involves seafood choices.
        </p>

        <p>
          To see how seafood fits into your overall microplastic exposure profile alongside all other pathways, take the calculator below.
        </p>

      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Related articles</h3>
        <div className="flex flex-col gap-3">
          <Link href="/blog/how-to-avoid-microplastics" className="text-sm text-teal-700 hover:underline">How to Avoid Microplastics: The Highest-Impact Changes, Ranked →</Link>
          <Link href="/blog/how-many-microplastics-do-you-consume" className="text-sm text-teal-700 hover:underline">How Many Microplastics Do You Consume Per Week? →</Link>
          <Link href="/blog/what-do-microplastics-do-to-the-body" className="text-sm text-teal-700 hover:underline">What Do Microplastics Do to the Human Body? →</Link>
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
          <li>EFSA Panel on Contaminants in the Food Chain. Presence of microplastics and nanoplastics in food. <em>EFSA Journal</em>. 2016. DOI: 10.2903/j.efsa.2016.4501</li>
          <li>Van Cauwenberghe L &amp; Janssen CR. Microplastics in bivalves cultured for human consumption. <em>Environ Pollut</em>. 2014. DOI: 10.1016/j.envpol.2014.06.010</li>
          <li>Barboza LGA et al. Microplastics in wild fish from North East Atlantic Ocean and its potential for causing neurotoxic effects, lipid oxidative damage, and human health risks associated with ingestion exposure. <em>Sci Total Environ</em>. 2020. DOI: 10.1016/j.scitotenv.2019.134625</li>
          <li>Rochman CM et al. Anthropogenic debris in seafood: Plastic debris and fibers from textiles in fish and bivalves sold for human consumption. <em>Sci Rep</em>. 2015. DOI: 10.1038/srep14340</li>
          <li>Cox KD et al. Human Consumption of Microplastics. <em>Environ Sci Technol</em>. 2019. DOI: 10.1021/acs.est.9b01517</li>
        </ol>
      </div>
    </article>
  );
}
