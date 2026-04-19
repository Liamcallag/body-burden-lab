import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Microplastics Research & Exposure",
  description:
    "In-depth articles on microplastics research, exposure pathways, and practical steps to reduce your body burden.",
};

const posts = [
  {
    slug: "how-to-avoid-microplastics",
    title: "How to Avoid Microplastics — A Science-Based Guide",
    excerpt:
      "You cannot eliminate microplastic exposure entirely. But the research shows that a handful of specific changes can reduce your intake by tens of thousands of particles per week.",
    date: "2026-04-19",
    readTime: "7 min read",
    tag: "Guide",
  },
  {
    slug: "does-reverse-osmosis-remove-microplastics",
    title: "Does Reverse Osmosis Remove Microplastics?",
    excerpt:
      "Reverse osmosis is among the most effective water filtration methods for microplastics, achieving removal rates above 99%. Here's what the peer-reviewed evidence shows — and how it compares to other filters.",
    date: "2026-04-19",
    readTime: "5 min read",
    tag: "Science",
  },
  {
    slug: "microplastics-in-bottled-water",
    title: "Microplastics in Bottled Water — What the Research Shows",
    excerpt:
      "Bottled water is sold on the premise of purity. Multiple peer-reviewed studies document a consistent finding: it contains significantly more microplastics than filtered tap water.",
    date: "2026-04-19",
    readTime: "6 min read",
    tag: "Science",
  },
  {
    slug: "does-silicone-have-microplastics",
    title: "Does Silicone Release Microplastics?",
    excerpt:
      "Silicone kitchen items are widely promoted as a safer plastic alternative. The picture is more nuanced than the marketing suggests — here's what the research actually shows.",
    date: "2026-04-19",
    readTime: "5 min read",
    tag: "Science",
  },
  {
    slug: "how-many-microplastics-do-you-consume",
    title: "How Many Microplastics Do You Consume Per Week?",
    excerpt:
      "The average American ingests between 74,000 and 121,000 microplastic particles per year — and researchers say that's almost certainly an underestimate. Here's what the science actually shows.",
    date: "2026-04-18",
    readTime: "8 min read",
    tag: "Science",
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

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border border-slate-100 rounded-2xl p-6 bg-white shadow-sm hover:border-teal-200 transition-colors">
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
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-medium text-teal-700 hover:underline"
              >
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
