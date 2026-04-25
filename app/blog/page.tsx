import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Microplastics Research & Exposure",
  description:
    "In-depth articles on microplastics research, exposure pathways, and practical steps to reduce your body burden.",
};

const posts = [
  {
    slug: "microplastics-in-cutting-boards",
    title: "How Many Microplastics Does a Plastic Cutting Board Add to Your Meals?",
    excerpt:
      "A single plastic cutting board can shed up to 50 grams of microplastics into your food per year. Each knife stroke releases 100–300 particles directly onto your food.",
    date: "2026-04-24",
    readTime: "5 min read",
    tag: "Science",
    image: "/blog-cutting-boards.png",
    imageAlt: "Plastic cutting board with knife marks",
  },
  {
    slug: "microplastics-in-tea-bags",
    title: "Microplastics in Tea Bags: How Many You're Drinking and What to Use Instead",
    excerpt:
      "A single plastic or nylon tea bag releases up to 11.6 billion microplastic particles per cup. For daily tea drinkers, this is one of the largest controllable exposure sources.",
    date: "2026-04-23",
    readTime: "5 min read",
    tag: "Science",
    image: "/blog-tea-bags.png",
    imageAlt: "Plastic tea bag steeping in hot water",
  },
  {
    slug: "microplastics-in-salt",
    title: "Microplastics in Salt: Is Sea Salt Making You Eat More Plastic?",
    excerpt:
      "90% of commercial salt brands contain microplastics — and sea salt is the most contaminated type. Here's what a global study of 39 brands found, and what to use instead.",
    date: "2026-04-22",
    readTime: "5 min read",
    tag: "Science",
    image: "/blog-salt.png",
    imageAlt: "Sea salt and table salt comparison",
  },
  {
    slug: "microplastics-in-baby-formula",
    title: "Microplastics in Baby Formula and Breast Milk: What Parents Need to Know",
    excerpt:
      "Plastic baby bottles can release up to 16 million microplastic particles per litre during formula preparation. Microplastics have also been detected in breast milk and placenta.",
    date: "2026-04-20",
    readTime: "6 min read",
    tag: "Science",
    image: "/blog-baby-formula.png",
    imageAlt: "Baby bottle and infant feeding",
  },
  {
    slug: "does-silicone-have-microplastics",
    title: "Does Silicone Release Microplastics?",
    excerpt:
      "Silicone kitchen items are widely promoted as a safer plastic alternative. The picture is more nuanced than the marketing suggests — here's what the research actually shows.",
    date: "2026-04-19",
    readTime: "5 min read",
    tag: "Science",
    image: "/blog-silicone.png",
    imageAlt: "Silicone kitchen utensils",
  },
  {
    slug: "does-reverse-osmosis-remove-microplastics",
    title: "Does Reverse Osmosis Remove Microplastics?",
    excerpt:
      "Reverse osmosis is among the most effective water filtration methods for microplastics, achieving removal rates above 99%. Here's what the peer-reviewed evidence shows — and how it compares to other filters.",
    date: "2026-04-15",
    readTime: "5 min read",
    tag: "Science",
    image: "/blog-reverse-osmosis.png",
    imageAlt: "Reverse osmosis under-sink filtration system",
  },
  {
    slug: "microplastics-in-bottled-water",
    title: "Microplastics in Bottled Water — What the Research Shows",
    excerpt:
      "Bottled water is sold on the premise of purity. Multiple peer-reviewed studies document a consistent finding: it contains significantly more microplastics than filtered tap water.",
    date: "2026-04-11",
    readTime: "6 min read",
    tag: "Science",
    image: "/blog-bottled-water.png",
    imageAlt: "Plastic water bottles",
  },
  {
    slug: "how-to-avoid-microplastics",
    title: "How to Avoid Microplastics — A Science-Based Guide",
    excerpt:
      "You cannot eliminate microplastic exposure entirely. But the research shows that a handful of specific changes can reduce your intake by tens of thousands of particles per week.",
    date: "2026-04-06",
    readTime: "7 min read",
    tag: "Guide",
    image: "/blog-avoid.png",
    imageAlt: "Ways to reduce microplastic exposure in daily life",
  },
  {
    slug: "how-many-microplastics-do-you-consume",
    title: "How Many Microplastics Do You Consume Per Week?",
    excerpt:
      "The average American ingests between 74,000 and 121,000 microplastic particles per year — and researchers say that's almost certainly an underestimate. Here's what the science actually shows.",
    date: "2026-04-01",
    readTime: "8 min read",
    tag: "Science",
    image: "/blog-how-many.png",
    imageAlt: "Microplastics entering the food chain and human body",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <div className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          Blog
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Microplastics Research</h1>
        <p className="text-slate-500">Science-backed articles on exposure, research, and reducing your body burden.</p>
      </div>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="border border-slate-100 rounded-2xl bg-white shadow-sm hover:border-teal-200 transition-colors overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">{post.tag}</span>
                <span className="text-xs text-slate-400">{post.readTime}</span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold text-slate-900 hover:text-teal-700 transition-colors mb-2 leading-snug">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <time className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                <Link href={`/blog/${post.slug}`} className="text-xs font-medium text-teal-700 hover:underline">
                  Read article →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
