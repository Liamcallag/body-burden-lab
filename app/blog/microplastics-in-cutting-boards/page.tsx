import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Plastic Cutting Boards as a Source of Microplastics in Food",
  description:
    "Plastic cutting boards are an overlooked source of microplastic contamination in food. Here's what the research shows and what to use instead.",
  alternates: {
    canonical: "https://www.bodyburdenlab.com/blog/microplastics-in-cutting-boards",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-04-24",
    title: "Plastic Cutting Boards as a Source of Microplastics in Food",
    description:
      "Plastic cutting boards are an overlooked source of microplastic contamination in food. Here's what the research shows and what to use instead.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Plastic+Cutting+Boards+as+a+Source+of+Microplastics+in+Food&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plastic Cutting Boards as a Source of Microplastics in Food",
    description:
      "Plastic cutting boards are an overlooked source of microplastic contamination in food. Here's what the research shows and what to use instead.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Plastic+Cutting+Boards+as+a+Source+of+Microplastics+in+Food&tag=Science",
    ],
  },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Plastic Cutting Boards as a Source of Microplastics in Food",
    "description": "Plastic cutting boards are an overlooked source of microplastic contamination in food. Here's what the research shows and what to use instead.",
    "datePublished": "2026-04-24",
    "dateModified": "2026-04-24",
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
      "url": "https://www.bodyburdenlab.com/blog-cutting-boards.png",
      "width": 1200,
      "height": 630,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bodyburdenlab.com/blog/microplastics-in-cutting-boards",
    },
    "url": "https://www.bodyburdenlab.com/blog/microplastics-in-cutting-boards",
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
    { "@type": "ListItem", "position": 3, "name": "Plastic Cutting Boards as a Source of Microplastics in Food", "item": "https://www.bodyburdenlab.com/blog/microplastics-in-cutting-boards" },
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
          <time className="text-xs text-slate-400" dateTime="2026-04-24">April 24, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          Plastic Cutting Boards as a Source of Microplastics in Food
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Plastic cutting boards are found in most kitchens. Research now shows they are a significant and underappreciated source of microplastic contamination in food — releasing particles with every knife stroke.
        </p>
        <Image
          src="/blog-cutting-boards.png"
          alt="Plastic cutting board with knife marks and microplastic particles"
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

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Key takeaways</p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>→ Plastic cutting boards are a significant and overlooked source of microplastic contamination in food (Yadav et al., 2023)</li>
          <li>→ Polypropylene boards release more particles than polyethylene boards</li>
          <li>→ PP cutting board particles have been shown to impair the intestinal barrier; PE particles disrupt gut microbiota in laboratory studies (Gan et al., 2025)</li>
          <li>→ Switching to wood or bamboo eliminates this exposure source entirely — these materials do not shed plastic particles</li>
        </ul>
      </div>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-5">

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What the research found</h2>

        <p>
          Yadav et al. (2023) in <em>Environmental Science & Technology</em> identified plastic cutting boards as a significant and previously overlooked source of microplastic contamination in food, with particles shed directly onto food surfaces during normal cutting use.
        </p>

        <p>
          The study examined polypropylene (PP) and polyethylene (PE) boards — the two most common materials in household cutting boards — and found that PP boards released more particles than PE boards under the same cutting conditions. Both, however, represent a meaningful ongoing exposure source for anyone who cooks regularly.
        </p>

        <p>
          The study noted that board age and surface damage significantly increased particle release — worn, scratched boards shed substantially more than new ones.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What happens to the particles in the body</h2>

        <p>
          Gan, Chen et al. (2025) in <em>Environmental Health Perspectives</em> (Vol. 133, DOI: 10.1289/EHP15472) examined the downstream effects of cutting board microplastics specifically. Mouse diets were prepared on PP, PE, and wooden cutting boards over 4 and 12 weeks. PP board particles were found to impair intestinal barrier function and induce inflammatory markers in gut tissue. PE board particles were associated with disruption of gut microbiota composition — including a significant decrease in Firmicutes — and altered liver and fecal metabolites in exposed animals.
        </p>

        <p>
          These are animal studies and cannot be directly extrapolated to human outcomes, and the concentrations used were relatively high. However, they are consistent with the broader body of research showing that ingested microplastic particles accumulate in gut tissue and trigger inflammatory responses.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">How cutting boards compare to other kitchen sources</h2>

        <p>
          The kitchen contains several significant microplastic sources. Microwaving food in plastic containers releases the most particles by concentration — up to 4.22 million microplastic particles per square centimetre of surface (Hussain et al., 2023). Cutting boards are a lower-intensity but constant daily source, accumulating across hundreds of meals per year.
        </p>

        <p>
          Snekkevik et al. (2024) in <em>Heliyon</em> reviewed microplastic sources in the household kitchen and identified plastic cutting boards, plastic food storage containers, and scratched non-stick cookware as significant contributors.
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
          <li>Yadav H et al. Cutting Boards: An Overlooked Source of Microplastics in Human Food? <em>Environ Sci Technol</em>. 2023. DOI: 10.1021/acs.est.3c00924</li>
          <li>Gan Z, Chen Q et al. Simulated Microplastic Release from Cutting Boards and Evaluation of Intestinal Inflammation and Gut Microbiota in Mice. <em>Environ Health Perspect</em>. 2025;133(3-4). DOI: 10.1289/EHP15472</li>
          <li>Snekkevik VK et al. Beyond the Food on Your Plate: Investigating Sources of Microplastic Contamination in Home Kitchens. <em>Heliyon</em>. 2024. DOI: 10.1016/j.heliyon.2024.e35022</li>
          <li>Hussain KA et al. Assessing the Release of Microplastics and Nanoplastics from Plastic Containers and Reusable Food Pouches. <em>Environ Sci Technol</em>. 2023. DOI: 10.1021/acs.est.3c01942</li>
        </ol>
      </div>
    </article>
  );
}
