import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Many Microplastics Do You Consume Per Week?",
  description:
    "The average American ingests between 74,000 and 121,000 microplastic particles per year — and researchers say that's a significant underestimate. Here's what the science shows, and which daily habits drive the highest exposure.",
  openGraph: {
    type: "article",
    publishedTime: "2026-04-18",
    title: "How Many Microplastics Do You Consume Per Week?",
    description:
      "The average American ingests between 74,000 and 121,000 microplastic particles per year — and researchers say that's a significant underestimate. Here's what the science shows, and which daily habits drive the highest exposure.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=How+Many+Microplastics+Do+You+Consume+Per+Week%3F&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Microplastics Do You Consume Per Week?",
    description:
      "The average American ingests between 74,000 and 121,000 microplastic particles per year — and researchers say that's a significant underestimate. Here's what the science shows, and which daily habits drive the highest exposure.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=How+Many+Microplastics+Do+You+Consume+Per+Week%3F&tag=Science",
    ],
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link href="/blog" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">
          ← Back to Blog
        </Link>
        <div className="flex items-center gap-3 mt-4 mb-4">
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Science</span>
          <span className="text-xs text-slate-400">8 min read</span>
          <time className="text-xs text-slate-400" dateTime="2026-04-18">April 18, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          How Many Microplastics Do You Consume Per Week?
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          The average American ingests between 74,000 and 121,000 microplastic particles per year — and researchers say that's almost certainly a significant underestimate. Here's what the science actually shows.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-0.5">Find out your personal exposure</p>
          <p className="text-xs text-slate-500">15 questions, 2 minutes, no account needed</p>
        </div>
        <Link
          href="/calculator"
          className="bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-teal-800 transition-colors whitespace-nowrap"
        >
          Take the calculator →
        </Link>
      </div>

      {/* Article body */}
      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-5">

        <p>
          Microplastics are particles of plastic smaller than 5 millimetres. They are found in drinking water, seafood, table salt, honey, beer, indoor air, and the human body. In 2019, a landmark study by Cox et al. in <em>Environmental Science & Technology</em> estimated that Americans consume between 74,000 and 121,000 microplastic particles per year through food and drink alone — a figure the authors described as likely conservative, because many exposure pathways were not yet studied.
        </p>

        <p>
          Since then, microplastics have been detected in human blood, lungs, liver, kidney, testicular tissue, breast milk, and — in a 2024 study published in <em>The New England Journal of Medicine</em> — in arterial plaques associated with significantly elevated risk of heart attack and stroke.
        </p>

        <p>
          So the question "how many microplastics do I consume?" is no longer academic. But understanding your personal exposure requires looking at the specific pathways that drive it. And the range between individuals can be enormous — a heavy user of plastic food containers and bottled water will be exposed to orders of magnitude more particles than someone using glass and filtered tap water.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The single biggest source: microwaving plastic</h2>

        <p>
          In 2023, researchers at the University of Nebraska published a study in <em>Environmental Science & Technology</em> that sent shockwaves through the field. When polypropylene plastic food containers were microwaved for three minutes, up to <strong>4.22 million microplastic particles and 2.1 billion nanoplastic particles</strong> were released per square centimetre of plastic surface.
        </p>

        <p>
          Per litre of food, the study found concentrations exceeding 1,000 times what has been detected in bottled water. Daily microwaving of food in plastic containers could contribute tens of thousands of particles per week to an individual's exposure — by far the single largest controllable variable in the Body Burden calculator.
        </p>

        <p>
          The fix is simple: transfer food to a glass or ceramic container before microwaving. But most people have never been told this, because until 2023 the data didn't exist.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Plastic tea bags: 11.6 billion particles per cup</h2>

        <p>
          In 2019, a study by Hernandez et al. — also in <em>Environmental Science & Technology</em> — found that steeping a single plastic or nylon tea bag at brewing temperature releases approximately <strong>11.6 billion microplastic and nanoplastic particles</strong> into the cup.
        </p>

        <p>
          For regular tea drinkers using plastic bags, this is the second-largest exposure pathway after microwaving. The solution is equally simple: switch to paper tea bags or loose leaf tea. The exposure from paper bags is negligible — approximately 10 particles per week.
        </p>

        <p>
          Many major tea brands still use plastic-sealed bags. Check the packaging: if the bag has a silky, slightly translucent texture, it is likely made from nylon or PET plastic. Paper bags feel rougher and typically have a folded or stapled seal.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Bottled water vs. tap: the data may surprise you</h2>

        <p>
          Cox et al. (2019) found that people who drink only bottled water consume an estimated 1,730 additional microplastic particles per week from that source alone, compared to approximately 77 per week for those drinking only tap or filtered tap water.
        </p>

        <p>
          Bottled water is not cleaner than filtered tap water in terms of microplastic content — in most cases the reverse is true. The packaging process itself introduces particles, and PET bottles continue to leach plastics into the water over time, particularly when exposed to heat.
        </p>

        <p>
          A quality water filter — such as those using reverse osmosis or activated carbon — can reduce microplastic content in tap water to near-undetectable levels. Some brands test and certify specifically for microplastic removal.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Seafood: it's the digestive tract, not the muscle</h2>

        <p>
          Microplastics accumulate in the digestive systems of fish and shellfish. For large fish where humans eat only the muscle, exposure is lower because microplastics tend to concentrate in the gut. For shellfish — particularly mussels, clams, and oysters — the entire animal is consumed, including the digestive tract, which can contain significant concentrations.
        </p>

        <p>
          EFSA (the European Food Safety Authority) has estimated that heavy shellfish consumers may ingest up to 11,000 microplastic particles per year from that source alone. Daily seafood consumption is estimated to contribute around 2,100 particles per week across all seafood types.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">You inhale them too: air and clothing</h2>

        <p>
          Inhalation is often overlooked but accounts for a meaningful share of total exposure. Synthetic fabrics — polyester, nylon, acrylic — shed microplastic fibres during wear and washing. In indoor environments, these fibres become airborne and are inhaled. Dris et al. (2017) estimated that indoor air contains significantly elevated microplastic fibre concentrations compared to outdoor air, driven primarily by synthetic textiles.
        </p>

        <p>
          Urban environments have higher microplastic concentrations in the air due to traffic, construction, and tyre wear. Rural and coastal environments typically have lower concentrations, though ocean-adjacent areas are not free of microplastics.
        </p>

        <p>
          HEPA air purifiers are effective at capturing microplastic fibres. Washing synthetic clothing in a laundry bag with a microfibre filter can significantly reduce the volume of fibres entering domestic water and air systems.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What does it actually mean for health?</h2>

        <p>
          The honest answer is: researchers don't yet know the full picture. Microplastics carry associated chemicals — plasticisers, flame retardants, surface coatings — which are often biologically active. In laboratory settings, microplastics have been shown to induce oxidative stress, inflammatory responses, and cell death. In the 2024 NEJM study, patients with microplastics in their arterial plaques had a 4.5x higher risk of heart attack, stroke, or death over the following 34 months.
        </p>

        <p>
          But association is not causation. The field is young. What is clear is that human exposure is real, measurable, and highly variable based on specific lifestyle choices — many of which are easy to change.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The three changes with the biggest impact</h2>

        <ol className="list-decimal list-inside space-y-3 text-slate-700">
          <li>
            <strong>Stop microwaving in plastic.</strong> Use glass or ceramic containers. This single change can reduce exposure by up to 28,000 particles per week for daily microwave users.
          </li>
          <li>
            <strong>Switch from plastic tea bags to paper or loose leaf.</strong> Exposure reduction: up to 6,990 particles per week.
          </li>
          <li>
            <strong>Replace bottled water with filtered tap.</strong> A quality filter pays for itself quickly and reduces water-based exposure by up to 1,653 particles per week compared to bottled water.
          </li>
        </ol>

        <p className="mt-5">
          Together, these three changes alone can reduce estimated exposure by more than 36,000 particles per week — more than the entire average American annual exposure divided by 52.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Find out where you stand</h2>

        <p>
          The Body Burden microplastics calculator takes 15 questions about your specific habits and gives you a personalised weekly particle estimate, a breakdown by source, and your top reduction opportunities — all based on the peer-reviewed studies referenced in this article.
        </p>

      </div>

      {/* End CTA */}
      <div className="bg-teal-700 rounded-2xl p-6 mt-10 text-white text-center">
        <p className="font-semibold text-lg mb-1">Calculate your body burden</p>
        <p className="text-teal-200 text-sm mb-4">15 questions · 2 minutes · peer-reviewed science</p>
        <Link
          href="/calculator"
          className="bg-white text-teal-700 font-semibold px-7 py-2.5 rounded-full text-sm hover:bg-teal-50 transition-colors"
        >
          Start the calculator →
        </Link>
      </div>

      {/* Sources */}
      <div className="mt-10 border-t border-slate-100 pt-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">References</h3>
        <ol className="space-y-2 text-xs text-slate-500 list-decimal list-inside leading-relaxed">
          <li>Cox KD et al. Human Consumption of Microplastics. <em>Environ Sci Technol</em>. 2019. DOI: 10.1021/acs.est.9b01517</li>
          <li>Hernandez LM et al. Plastic Teabags Release Billions of Microparticles and Nanoparticles into Tea. <em>Environ Sci Technol</em>. 2019. DOI: 10.1021/acs.est.9b02540</li>
          <li>Hussain KA et al. Assessing the Release of Microplastics and Nanoplastics from Plastic Containers. <em>Environ Sci Technol</em>. 2023. DOI: 10.1021/acs.est.3c01942</li>
          <li>Marfella R et al. Microplastics and Nanoplastics in Atheromas and Cardiovascular Events. <em>NEJM</em>. 2024. DOI: 10.1056/NEJMoa2309822</li>
          <li>EFSA Panel on Contaminants. Presence of Microplastics and Nanoplastics in Food. <em>EFSA Journal</em>. 2016. DOI: 10.2903/j.efsa.2016.4501</li>
          <li>Dris R et al. A first overview of textile fibers, including microplastics, in indoor and outdoor environments. <em>Environmental Pollution</em>. 2017. DOI: 10.1016/j.envpol.2016.12.013</li>
        </ol>
      </div>
    </article>
  );
}
