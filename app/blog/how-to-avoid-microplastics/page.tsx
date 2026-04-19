import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Avoid Microplastics — A Science-Based Guide",
  description:
    "The evidence-based steps that actually reduce your microplastic exposure, ranked by impact. Based on peer-reviewed research.",
  openGraph: {
    type: "article",
    publishedTime: "2026-04-19",
    images: [
      {
        url: "https://bodyburdenlab.com/api/og?title=How+to+Avoid+Microplastics+%E2%80%94+A+Science-Based+Guide&tag=Guide",
        width: 1200,
        height: 630,
      },
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
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Guide</span>
          <span className="text-xs text-slate-400">7 min read</span>
          <time className="text-xs text-slate-400" dateTime="2026-04-19">April 19, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          How to Avoid Microplastics — A Science-Based Guide
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          You cannot eliminate microplastic exposure entirely. But the research shows that a handful of specific changes can dramatically reduce your intake — some by tens of thousands of particles per week.
        </p>
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

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-5">

        <p>
          Microplastics are now effectively impossible to avoid entirely — they are in the air, the water, and the food supply. But exposure varies enormously between individuals depending on specific daily habits. Research suggests that targeted changes to a small number of behaviours can reduce weekly microplastic intake by 80% or more.
        </p>

        <p>
          This guide focuses on changes with the strongest evidence base — interventions that peer-reviewed studies have either directly tested or where the mechanism is well understood.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">1. Stop microwaving food in plastic containers</h2>

        <p>
          This is the single highest-impact change most people can make. A 2023 study by Hussain et al. in <em>Environmental Science & Technology</em> found that microwaving polypropylene containers for just three minutes released up to <strong>4.22 million microplastic and 2.11 billion nanoplastic particles per square centimetre</strong> of plastic surface. Per litre of food, concentrations exceeded 1,000 times those found in bottled water.
        </p>

        <p>
          The same study found that even refrigerating food in plastic containers over six months released millions to billions of particles into the food. The fix is straightforward: transfer food to glass, ceramic, or stainless steel containers before microwaving or storing.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">2. Switch from plastic to paper tea bags or loose leaf</h2>

        <p>
          Hernandez et al. (2019) in <em>Environmental Science & Technology</em> found that steeping a single plastic or nylon tea bag at brewing temperature releases approximately <strong>11.6 billion nanoplastic and microplastic particles</strong> into the cup. For daily tea drinkers, this represents one of the largest single controllable exposure sources.
        </p>

        <p>
          Paper tea bags and loose leaf tea release negligible particles by comparison — around 10 microplastic particles per week for regular use. This is one of the easiest swaps to make and one of the largest reductions available.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">3. Filter or boil your drinking water</h2>

        <p>
          Cox et al. (2019) found that people drinking only bottled water consume approximately 1,730 additional microplastic particles per week from that source alone compared to filtered tap water users. Bottled water is not cleaner — the packaging process introduces particles, and PET bottles continue to leach plastics into the water over time.
        </p>

        <p>
          A 2024 study by Yu et al. in <em>Environmental Science & Technology Letters</em> found that simply boiling hard tap water removed up to <strong>80–90% of free-floating microplastics and nanoplastics</strong> (0.1–150 µm) by causing calcium carbonate to encapsulate and precipitate the particles. Even soft water boiling removed approximately 25%. This is one of the cheapest and most accessible interventions identified in the literature.
        </p>

        <p>
          Reverse osmosis filters are the most effective technological solution — membrane pore sizes are far smaller than even the smallest microplastic particles, making removal near-complete. A quality pitcher filter with an activated carbon block also performs well for larger particles.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">4. Replace plastic cutting boards and old cookware</h2>

        <p>
          A 2024 study by Snekkevik et al. in <em>Heliyon</em> identified plastic cutting boards, scratched non-stick cookware, and old plastic food storage containers as significant microplastic sources in the home kitchen. Replacing these with wood, bamboo, stainless steel, or cast iron equivalents removes multiple exposure pathways simultaneously.
        </p>

        <p>
          Cole et al. (2024) in <em>Science of the Total Environment</em> confirmed that both microplastics and PTFE particles (from non-stick coatings) contaminate food during cooking, with scratched or worn surfaces releasing significantly more particles than new ones.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">5. Reduce synthetic clothing and use a microfibre filter</h2>

        <p>
          Dris et al. (2017) in <em>Environmental Pollution</em> documented that synthetic fabrics — polyester, nylon, acrylic — shed microplastic fibres into indoor air during wear and washing, where they are subsequently inhaled. Indoor air contains significantly elevated microplastic concentrations compared to outdoor air, driven primarily by synthetic textiles.
        </p>

        <p>
          Practical steps: wash synthetic clothing less frequently, use a cold wash cycle (lower temperatures release fewer fibres), and fit a microfibre-catching laundry bag or washing machine filter. Choosing natural fibre clothing (cotton, wool, linen) for items worn close to the skin also reduces shedding.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">6. Add a HEPA air purifier to your home</h2>

        <p>
          Amato-Lourenço et al. (2020) in <em>Science of the Total Environment</em> reviewed evidence on microplastic inhalation and indoor air quality. HEPA filtration captures particles down to 0.3 microns — well within the microplastic range — making HEPA air purifiers an effective tool for reducing inhalation exposure, particularly in urban environments.
        </p>

        <p>
          Hard floors and regular vacuuming also reduce the accumulation of settled microplastic fibres that can be re-suspended into breathing air.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The three changes with the highest impact</h2>

        <p>For most people, the priority order is:</p>

        <ol className="list-decimal list-inside space-y-2 text-slate-700">
          <li><strong>Stop microwaving in plastic</strong> — potential reduction of up to 28,000 particles/week</li>
          <li><strong>Switch from plastic tea bags to paper or loose leaf</strong> — up to 6,990 particles/week</li>
          <li><strong>Switch from bottled water to filtered tap</strong> — up to 1,653 particles/week</li>
        </ol>

        <p className="mt-4">
          These three changes together can reduce estimated microplastic intake by more than 36,000 particles per week for heavy users — more than the entire estimated annual American average divided by 52.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What doesn't have strong evidence yet</h2>

        <p>
          Several commonly cited microplastic reduction strategies lack peer-reviewed evidence at the time of writing. Saunas, for example, have been suggested as a potential route for microplastic excretion via sweat, but no peer-reviewed human studies have confirmed this mechanism or quantified the effect. Similarly, specific dietary supplements claimed to bind microplastics in the gut have not been tested in controlled human trials. These may prove valuable as research develops, but they should not currently be presented as evidence-based interventions.
        </p>

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
          <li>Hussain KA et al. Assessing the Release of Microplastics and Nanoplastics from Plastic Containers. <em>Environ Sci Technol</em>. 2023. DOI: 10.1021/acs.est.3c01942</li>
          <li>Hernandez LM et al. Plastic Teabags Release Billions of Microparticles and Nanoparticles into Tea. <em>Environ Sci Technol</em>. 2019. DOI: 10.1021/acs.est.9b02540</li>
          <li>Cox KD et al. Human Consumption of Microplastics. <em>Environ Sci Technol</em>. 2019. DOI: 10.1021/acs.est.9b01517</li>
          <li>Yu Z et al. Drinking Boiled Tap Water Reduces Human Intake of Nanoplastics and Microplastics. <em>Environ Sci Technol Lett</em>. 2024. DOI: 10.1021/acs.estlett.4c00081</li>
          <li>Snekkevik VK et al. Beyond the Food on Your Plate: Investigating Sources of Microplastic Contamination in Home Kitchens. <em>Heliyon</em>. 2024. DOI: 10.1016/j.heliyon.2024.e35022</li>
          <li>Cole M et al. Microplastic and PTFE contamination of food from cookware. <em>Sci Total Environ</em>. 2024. DOI: 10.1016/j.scitotenv.2024.172577</li>
          <li>Dris R et al. A first overview of textile fibers, including microplastics, in indoor and outdoor environments. <em>Environ Pollut</em>. 2017. DOI: 10.1016/j.envpol.2016.12.013</li>
          <li>Amato-Lourenço LF et al. An emerging class of air pollutants: Potential effects of microplastics to respiratory human health? <em>Sci Total Environ</em>. 2020. DOI: 10.1016/j.scitotenv.2020.141676</li>
        </ol>
      </div>
    </article>
  );
}
