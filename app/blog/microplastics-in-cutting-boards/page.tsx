import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Many Microplastics Does a Plastic Cutting Board Add to Your Meals?",
  description:
    "A single plastic cutting board can shed up to 50 grams of microplastics into your food per year. Here's what the research shows and what to use instead.",
  openGraph: {
    type: "article",
    publishedTime: "2026-04-24",
    title: "How Many Microplastics Does a Plastic Cutting Board Add to Your Meals?",
    description:
      "A single plastic cutting board can shed up to 50 grams of microplastics into your food per year. Here's what the research shows and what to use instead.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+from+Plastic+Cutting+Boards%3A+What+the+Research+Shows&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Microplastics Does a Plastic Cutting Board Add to Your Meals?",
    description:
      "A single plastic cutting board can shed up to 50 grams of microplastics into your food per year. Here's what the research shows and what to use instead.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+from+Plastic+Cutting+Boards%3A+What+the+Research+Shows&tag=Science",
    ],
  },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Many Microplastics Does a Plastic Cutting Board Add to Your Meals?",
    "datePublished": "2026-04-24",
    "publisher": { "@type": "Organization", "name": "Body Burden Lab", "url": "https://www.bodyburdenlab.com" },
    "url": "https://www.bodyburdenlab.com/blog/microplastics-in-cutting-boards",
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
          <span className="text-xs text-slate-400">By James Mercer</span>
          <span className="text-xs text-slate-400">·</span>
          <time className="text-xs text-slate-400" dateTime="2026-04-24">April 24, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          How Many Microplastics Does a Plastic Cutting Board Add to Your Meals?
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Plastic cutting boards are found in most kitchens. Research now shows they are a significant and underappreciated source of microplastic contamination in food — releasing particles with every knife stroke.
        </p>
        <img
          src="/blog-cutting-boards.png"
          alt="Plastic cutting board with knife marks and microplastic particles"
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

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What the research found</h2>

        <p>
          Hernandez et al. (2023) in <em>Environmental Science & Technology</em> conducted one of the most detailed analyses of plastic cutting board particle release to date. The study found that a single plastic cutting board can shed between <strong>7.4 and 50.7 grams of microplastics per year</strong> into food during normal use. Each individual knife stroke releases approximately 100 to 300 microplastic particles directly onto the food surface being cut.
        </p>

        <p>
          The study examined polypropylene (PP) and polyethylene (PE) boards — the two most common materials in household cutting boards — and found that PP boards released up to 71% more particles by number than PE boards under the same cutting conditions. Both, however, represent a meaningful ongoing exposure source for anyone who cooks regularly.
        </p>

        <p>
          Approximately 50% of the released particles were estimated to be ingested with food; the remaining 50% were washed away during cleaning. The study noted that board age and surface damage significantly increased particle release — worn, scratched boards shed substantially more than new ones.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What happens to the particles in the body</h2>

        <p>
          Gan, Chen et al. (2025) in <em>Environmental Health Perspectives</em> (Vol. 133, DOI: 10.1289/EHP15472) examined the downstream effects of cutting board microplastics specifically. Mouse diets were prepared on PP, PE, and wooden cutting boards over 4 and 12 weeks. PP board particles were found to impair intestinal barrier function and induce inflammatory markers in gut tissue. PE board particles were associated with disruption of gut microbiota composition — including a significant decrease in Firmicutes — and altered liver and fecal metabolites in exposed animals.
        </p>

        <p>
          These are animal studies and cannot be directly extrapolated to human outcomes. However, they are consistent with the broader body of research showing that ingested microplastic particles accumulate in gut tissue and trigger inflammatory responses — and they were conducted using particles at concentrations comparable to estimated human dietary exposure from cutting board use.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How cutting boards compare to other kitchen sources</h2>

        <p>
          The kitchen contains several significant microplastic sources. Microwaving food in plastic containers releases the most particles by concentration — up to 4.22 million microplastic particles per square centimetre of surface (Hussain et al., 2023). Cutting boards are a lower-intensity but constant daily source, accumulating across hundreds of meals per year.
        </p>

        <p>
          Snekkevik et al. (2024) in <em>Heliyon</em> surveyed household kitchens and identified plastic cutting boards as one of the top three microplastic sources in the home kitchen environment, alongside plastic food storage containers and scratched non-stick cookware.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Does washing the board help?</h2>

        <p>
          Washing removes loose surface particles but does not remove the underlying grooves and scratches that produce them. Dishwasher cleaning at high temperatures can accelerate surface degradation of plastic boards over time, increasing particle release with each subsequent use. The board surface itself is the source — cleaning addresses contamination of the board, not the structural cause of particle shedding.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What to use instead</h2>

        <p>
          Wood and bamboo cutting boards do not release synthetic polymer particles. Research on wooden board safety has focused primarily on bacterial retention in knife grooves — a concern that standard cleaning practices largely address. Glass cutting boards release no polymer particles but are harder on knife edges and louder to use. Toughened glass and end-grain wood boards are the best-evidenced alternatives.
        </p>

        <p>
          If replacing a plastic cutting board immediately is not practical, the priority should be on boards that are visibly scratched or heavily grooved — these release the most particles and are the highest-impact items to replace first. A new plastic board releases fewer particles than an old one, but a wood or bamboo board releases none.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The bottom line</h2>

        <p>
          Plastic cutting boards are a daily microplastic source that most people have not considered. The exposure is not as dramatic as microwaving in plastic or using plastic tea bags, but it accumulates across hundreds of meals per year. Switching to wood, bamboo, or glass is a permanent fix that eliminates this pathway entirely — and is one of the more straightforward changes available in the home kitchen.
        </p>

      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Related articles</h3>
        <div className="flex flex-col gap-3">
          <Link href="/blog/how-to-avoid-microplastics" className="text-sm text-teal-700 hover:underline">How to Avoid Microplastics: The Highest-Impact Changes, Ranked →</Link>
          <Link href="/blog/does-silicone-have-microplastics" className="text-sm text-teal-700 hover:underline">Does Silicone Release Microplastics? →</Link>
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
          <li>Hernandez LM et al. Cutting Boards: An Overlooked Source of Microplastics in Human Food? <em>Environ Sci Technol</em>. 2023. DOI: 10.1021/acs.est.3c00924</li>
          <li>Gan Z, Chen Q et al. Simulated Microplastic Release from Cutting Boards and Evaluation of Intestinal Inflammation and Gut Microbiota in Mice. <em>Environ Health Perspect</em>. 2025;133(3-4). DOI: 10.1289/EHP15472</li>
          <li>Snekkevik VK et al. Beyond the Food on Your Plate: Investigating Sources of Microplastic Contamination in Home Kitchens. <em>Heliyon</em>. 2024. DOI: 10.1016/j.heliyon.2024.e35022</li>
          <li>Hussain KA et al. Assessing the Release of Microplastics and Nanoplastics from Plastic Containers and Reusable Food Pouches. <em>Environ Sci Technol</em>. 2023. DOI: 10.1021/acs.est.3c01942</li>
        </ol>
      </div>
    </article>
  );
}
