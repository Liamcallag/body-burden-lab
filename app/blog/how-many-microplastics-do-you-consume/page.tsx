import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How Many Microplastics Do You Consume Per Week? What the Research Shows",
  description:
    "Microplastics have been found in human lungs, blood, and arterial plaque. How much you're exposed to depends almost entirely on a handful of daily habits — and the range between individuals is enormous. Here's what the peer-reviewed science actually shows.",
  alternates: {
    canonical: "https://www.bodyburdenlab.com/blog/how-many-microplastics-do-you-consume",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-04-01",
    title: "How Many Microplastics Do You Consume Per Week? What the Research Shows",
    description:
      "Microplastics have been found in human lungs, blood, and arterial plaque. How much you're exposed to depends almost entirely on a handful of daily habits — and the range between individuals is enormous. Here's what the peer-reviewed science actually shows.",
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
    title: "How Many Microplastics Do You Consume Per Week? What the Research Shows",
    description:
      "Microplastics have been found in human lungs, blood, and arterial plaque. How much you're exposed to depends almost entirely on a handful of daily habits — and the range between individuals is enormous. Here's what the peer-reviewed science actually shows.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=How+Many+Microplastics+Do+You+Consume+Per+Week%3F&tag=Science",
    ],
  },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Many Microplastics Do You Consume Per Week? What the Research Shows",
    "description": "Microplastics have been found in human lungs, blood, and arterial plaque. How much you're exposed to depends almost entirely on a handful of daily habits — and the range between individuals is enormous. Here's what the peer-reviewed science actually shows.",
    "datePublished": "2026-04-01",
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
      "url": "https://www.bodyburdenlab.com/blog-how-many.png",
      "width": 1200,
      "height": 630,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bodyburdenlab.com/blog/how-many-microplastics-do-you-consume",
    },
    "url": "https://www.bodyburdenlab.com/blog/how-many-microplastics-do-you-consume",
    "inLanguage": "en-US",
  };
  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Header */}
      <div className="mb-8">
        <Link href="/blog" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">
          ← Back to Blog
        </Link>
        <div className="flex items-center gap-3 mt-4 mb-4">
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Science</span>
          <Link href="/author/liam-murphy" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">Liam Murphy</Link>
          <span className="text-xs text-slate-400">·</span>
          <time className="text-xs text-slate-400" dateTime="2026-04-01">April 1, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          How Many Microplastics Do You Consume Per Week? What the Research Shows
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Microplastics have been found in human lungs, blood, and arterial plaque. How much you're exposed to depends almost entirely on a handful of daily habits — and the range between individuals is enormous. Here's what the peer-reviewed science actually shows.
        </p>
        <Image
          src="/blog-how-many.png"
          alt="Microplastics entering the food chain and human body"
          width={800}
          height={450}
          className="w-full rounded-xl mt-6 mb-2"
          priority
        />
      </div>

      {/* CTA */}
      <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-0.5">Find out your personal exposure</p>
          <p className="text-xs text-slate-500">14 questions, 2 minutes, no account needed</p>
        </div>
        <Link
          href="/calculator"
          className="bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-teal-800 transition-colors whitespace-nowrap"
        >
          Take the calculator →
        </Link>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Key takeaways</p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>→ The average person consumes an estimated 74,000–121,000 microplastic particles per year — but habits vary this figure enormously (Cox et al., 2019)</li>
          <li>→ Microwaving in plastic and drinking from plastic tea bags are the two highest single-source exposures documented in domestic settings</li>
          <li>→ Bottled water drinkers consume an additional ~90,000 particles/year compared to tap water drinkers (Cox et al., 2019)</li>
          <li>→ Shellfish eaters have significantly higher dietary intake than fish-only consumers — shellfish are eaten whole, including the digestive tract</li>
          <li>→ Inhalation is a confirmed route — microplastics have been found in living human lung tissue (Jenner et al., 2022)</li>
        </ul>
      </div>

      {/* Article body */}
      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-5">

        <p>
          Microplastics are particles of plastic smaller than 5 millimetres. They are found in drinking water, seafood, table salt, honey, beer, indoor air, and the human body. Researchers have attempted to quantify average human exposure, but estimates vary significantly depending on the detection methods used and the size range of particles counted — and the science is moving fast. What is consistent across studies is that exposure differs dramatically between individuals, driven by a small number of specific daily habits.
        </p>

        <p>
          Microplastics have been detected in human blood, lungs, liver, kidney, testicular tissue, breast milk, and — in Marfella et al. (2024) in <em>The New England Journal of Medicine</em> — in arterial plaques associated with significantly elevated risk of heart attack and stroke.
        </p>

        <p>
          So the question "how many microplastics do I consume?" is no longer academic. But understanding your personal exposure requires looking at the specific pathways that drive it. And the range between individuals can be enormous — a heavy user of plastic food containers and bottled water will be exposed to orders of magnitude more particles than someone using glass and filtered tap water.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The single biggest source: microwaving plastic</h2>

        <p>
          Hussain et al. (2023) in <em>Environmental Science & Technology</em> found that microwaving polypropylene food containers for three minutes released up to <strong>4.22 million microplastic particles and 2.11 billion nanoplastic particles per square centimetre</strong> of plastic surface. A typical food container has a surface area of several hundred square centimetres, meaning total particle release per use is vastly higher than the per-cm² figure alone suggests.
        </p>

        <p>
          Of all the scenarios tested — including refrigeration and room-temperature storage over six months — microwaving produced the highest particle release by a significant margin. Concentrations in the food exceeded those found in bottled water by over 1,000 times. The study specifically flagged infants and toddlers as the highest-risk group, given the common practice of microwaving formula and dairy products in plastic containers.
        </p>

        <p>
          The fix is simple: transfer food to a glass or ceramic container before microwaving. But most people have never been told this, because until 2023 the data didn't exist.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Plastic tea bags: 11.6 billion particles per cup</h2>

        <p>
          Hernandez et al. (2019) in <em>Environmental Science & Technology</em> found that steeping a single plastic or nylon tea bag at brewing temperature releases approximately <strong>11.6 billion microplastic particles and 3.1 billion nanoplastic particles</strong> into the cup — with the composition matched to the original bag material (nylon and PET) using FTIR and XPS spectroscopy.
        </p>

        <p>
          For regular tea drinkers using plastic bags, this is the second-largest exposure pathway after microwaving. The solution is simple: switch to paper tea bags or loose leaf tea.
        </p>

        <p>
          Many major tea brands still use plastic-sealed bags. Check the packaging: if the bag has a silky, slightly translucent texture, it is likely made from nylon or PET plastic. Paper bags feel rougher and typically have a folded or stapled seal.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Bottled water vs. tap: the data may surprise you</h2>

        <p>
          Mason et al. (2018) in <em>Frontiers in Chemistry</em> tested 259 bottles from 11 globally recognised brands purchased across 19 locations in nine countries. Ninety-three percent showed signs of microplastic contamination, at an average of <strong>325 microplastic particles per litre</strong>. Some individual bottles exceeded 10,000 particles per litre.
        </p>

        <p>
          The most common polymer found was polypropylene — the same material used to manufacture bottle caps — accounting for 54% of identified particles. Combined with the fragment morphology of most particles, the data pointed to the packaging and bottling process itself as the primary contamination source, not the water supply. When the same brand of water was tested in glass versus plastic packaging, the glass-packaged version showed dramatically lower contamination (204 vs. 1,410 particles per litre).
        </p>

        <p>
          In the same particle size range, bottled water contained nearly twice the microplastic contamination of tap water. A quality water filter — such as those using <Link href="/blog/does-reverse-osmosis-remove-microplastics" className="text-teal-700 hover:underline">reverse osmosis</Link> or activated carbon — can reduce microplastic content in tap water significantly. Some brands test and certify specifically for microplastic removal.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Seafood: it's the digestive tract, not the muscle</h2>

        <p>
          Microplastics accumulate primarily in the digestive systems of fish and shellfish. For finfish, where only the muscle is typically eaten, the gut is discarded before consumption — and that is where most particles concentrate. The EFSA Panel on Contaminants (2016) noted that for fish, the quantity of microplastics in the edible portion is likely to be negligible for consumer exposure.
        </p>

        <p>
          The picture is different for bivalves. Mussels, oysters, and clams are consumed whole — including the digestive tract — and act as filter feeders that accumulate particles from the surrounding water. Using the highest contamination data available at the time, the EFSA Panel worked through a concrete example: at 4 microplastic particles per gram (from commercial mussel samples), a standard 225g serving would represent exposure to approximately <strong>900 microplastic particles</strong> from that single meal alone.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">You inhale them too: air and clothing</h2>

        <p>
          Inhalation is a proven route of microplastic exposure. Jenner et al. (2022) in <em>Science of the Total Environment</em> analysed lung tissue from 13 living surgical patients and found microplastics in 11 of 13 samples — including in the lower lung, the deepest region. Polypropylene and PET were the most commonly identified polymers. The authors concluded the findings directly <strong>"support inhalation as a route of exposure for environmental microplastics."</strong>
        </p>

        <p>
          One of the study's more striking findings was that particles far larger than conventionally assumed to be inhalable were found in the lower lung — the deepest region. Jenner et al. note that according to established respiratory physiology, only particles smaller than 3 μm should reach the alveolar region, yet particles up to 2,475 μm in length were detected there. The authors suggest this challenges existing assumptions about which particle sizes can be inhaled. Indoor environments are a significant source of airborne microplastics: Dris et al. (2017) in <em>Environmental Pollution</em> measured indoor air fibre concentrations of 1–60 fibres per cubic metre — significantly higher than outdoor air at 0.3–1.5 fibres per cubic metre. Of those indoor fibres, 33% were synthetic (polyester, nylon, acrylic) — the fraction that constitutes microplastics — with the remainder being natural cellulosic fibres from clothing and furnishings.
        </p>

        <p>
          Urban outdoor environments have higher microplastic concentrations due to traffic, tyre wear, and construction. HEPA air purifiers are effective at capturing fine microplastic particles. Washing synthetic clothing less frequently and using a microfibre-catching laundry bag reduces the volume of particles shed into the home environment.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What does it actually mean for health?</h2>

        <p>
          The honest answer is: researchers don't yet know the full picture. Microplastics carry associated chemicals — plasticisers, flame retardants, surface coatings — which are often biologically active. Laboratory studies have suggested potential for oxidative stress and inflammatory responses in cells exposed to microplastics, though much of this research is in early stages. In Marfella et al. (2024) in <em>The New England Journal of Medicine</em>, patients with microplastics detected in their carotid artery plaque had a 4.53x higher risk of heart attack, stroke, or death over the following 34 months — though the study population comprised patients already undergoing cardiovascular surgery, and the authors caution the findings may not be generalisable to the wider population.
        </p>

        <p>
          But association is not causation. The field is young. What is clear is that human exposure is real, measurable, and highly variable based on specific lifestyle choices — many of which are easy to change.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The three changes with the biggest impact</h2>

        <ol className="list-decimal list-inside space-y-3 text-slate-700">
          <li>
            <strong>Stop microwaving in plastic.</strong> Transfer food to glass or ceramic before heating. Given the surface area of a typical container and the particle counts measured by Hussain et al. (2023), this is the single highest-impact change most people can make.
          </li>
          <li>
            <strong>Switch from plastic tea bags to paper or loose leaf.</strong> Each cup steeped in a plastic bag releases billions of particles. Paper bags and loose leaf tea significantly reduce this exposure.
          </li>
          <li>
            <strong>Replace bottled water with filtered tap.</strong> Mason et al. (2018) found an average of 325 microplastic particles per litre in bottled water, with contamination traced primarily to the packaging itself. Filtered tap water eliminates that source entirely.
          </li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Find out where you stand</h2>

        <p>
          The Body Burden microplastics calculator takes 14 questions about your specific habits and gives you a personalised weekly particle estimate, a breakdown by source, and your top reduction opportunities — all based on the peer-reviewed studies referenced in this article.
        </p>

      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Related articles</h3>
        <div className="flex flex-col gap-3">
          <Link href="/blog/how-to-avoid-microplastics" className="text-sm text-teal-700 hover:underline">How to Avoid Microplastics: The Highest-Impact Changes, Ranked →</Link>
          <Link href="/blog/microplastics-in-bottled-water" className="text-sm text-teal-700 hover:underline">Microplastics in Bottled Water — What the Research Shows →</Link>
          <Link href="/blog/does-reverse-osmosis-remove-microplastics" className="text-sm text-teal-700 hover:underline">Does Reverse Osmosis Remove Microplastics? →</Link>
        </div>
      </div>

      {/* End CTA */}
      <div className="bg-teal-700 rounded-2xl p-6 mt-10 text-white text-center">
        <p className="font-semibold text-lg mb-1">Calculate your body burden</p>
        <p className="text-teal-200 text-sm mb-4">14 questions · 2 minutes · peer-reviewed science</p>
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
          <li>Mason SA et al. Synthetic Polymer Contamination in Bottled Water. <em>Front Chem</em>. 2018. DOI: 10.3389/fchem.2018.00407</li>
          <li>Hernandez LM et al. Plastic Teabags Release Billions of Microparticles and Nanoparticles into Tea. <em>Environ Sci Technol</em>. 2019. DOI: 10.1021/acs.est.9b02540</li>
          <li>Hussain KA et al. Assessing the Release of Microplastics and Nanoplastics from Plastic Containers. <em>Environ Sci Technol</em>. 2023. DOI: 10.1021/acs.est.3c01942</li>
          <li>Marfella R et al. Microplastics and Nanoplastics in Atheromas and Cardiovascular Events. <em>NEJM</em>. 2024. DOI: 10.1056/NEJMoa2309822</li>
          <li>EFSA Panel on Contaminants. Presence of Microplastics and Nanoplastics in Food. <em>EFSA Journal</em>. 2016. DOI: 10.2903/j.efsa.2016.4501</li>
          <li>Jenner LC et al. Detection of microplastics in human lung tissue using μFTIR spectroscopy. <em>Sci Total Environ</em>. 2022. DOI: 10.1016/j.scitotenv.2022.154907</li>
          <li>Dris R et al. A first overview of textile fibers, including microplastics, in indoor and outdoor environments. <em>Environ Pollut</em>. 2017. DOI: 10.1016/j.envpol.2016.12.013</li>
        </ol>
      </div>
    </article>
  );
}
