import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Liam Murphy — Science Communicator, Body Burden",
  description:
    "Liam Murphy is the founder of Body Burden, an independent microplastics exposure research project. Every figure on the site is verified against the original peer-reviewed paper.",
  alternates: {
    canonical: "https://www.bodyburdenlab.com/author/liam-murphy",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.bodyburdenlab.com/author/liam-murphy#person",
  "name": "Liam Murphy",
  "url": "https://www.bodyburdenlab.com/author/liam-murphy",
  "jobTitle": "Science Communicator",
  "description": "Independent science communicator focused on microplastics exposure and environmental health. Founder of Body Burden.",
  "worksFor": {
    "@id": "https://www.bodyburdenlab.com/#organization",
  },
  "knowsAbout": [
    "microplastics",
    "nanoplastics",
    "environmental health",
    "toxicology",
    "body burden",
    "microplastic exposure",
  ],
};

const posts = [
  { slug: "how-to-avoid-microplastics", title: "How to Avoid Microplastics: The Highest-Impact Changes, Ranked", tag: "Guide", date: "April 19, 2026" },
  { slug: "what-do-microplastics-do-to-the-body", title: "What Do Microplastics Do to the Human Body? The Research So Far", tag: "Science", date: "May 10, 2026" },
  { slug: "best-water-filter-for-microplastics", title: "Best Water Filter for Microplastics: RO vs Carbon vs Pitcher, Ranked", tag: "Guide", date: "May 10, 2026" },
  { slug: "microplastics-in-baby-formula", title: "Microplastics in Baby Formula and Breast Milk: What Parents Need to Know", tag: "Science", date: "April 20, 2026" },
  { slug: "microplastics-in-seafood", title: "Microplastics in Seafood: Which Fish and Shellfish Have the Most", tag: "Science", date: "May 10, 2026" },
  { slug: "does-reverse-osmosis-remove-microplastics", title: "Does Reverse Osmosis Remove Microplastics?", tag: "Science", date: "April 19, 2026" },
  { slug: "how-many-microplastics-do-you-consume", title: "How Many Microplastics Do You Consume Per Week? What the Research Shows", tag: "Science", date: "April 1, 2026" },
  { slug: "microplastics-in-bottled-water", title: "Microplastics in Bottled Water — What the Research Shows", tag: "Science", date: "April 19, 2026" },
  { slug: "microplastics-in-tea-bags", title: "Microplastics in Tea Bags: How Many You're Drinking and What to Use Instead", tag: "Science", date: "April 23, 2026" },
  { slug: "microplastics-in-cutting-boards", title: "How Many Microplastics Does a Plastic Cutting Board Add to Your Meals?", tag: "Science", date: "April 24, 2026" },
  { slug: "microplastics-in-salt", title: "Microplastics in Salt: Is Sea Salt Making You Eat More Plastic?", tag: "Science", date: "April 22, 2026" },
  { slug: "does-silicone-have-microplastics", title: "Does Silicone Release Microplastics?", tag: "Science", date: "April 19, 2026" },
];

export default function AuthorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="mb-10">
        <div className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          Author
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Liam Murphy
        </h1>
        <p className="text-slate-500 leading-relaxed">
          Science communicator and founder of Body Burden. Independent researcher tracking the peer-reviewed literature on microplastics and environmental health since 2025.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-5 text-[15px]">
        <p>
          Body Burden was built out of a straightforward frustration: the public data on microplastic exposure exists, it is published in peer-reviewed journals, and almost no accessible tools help people understand what it means for them personally.
        </p>
        <p>
          Every article and calculator figure on this site is verified against the original study before publication. DOI citations are provided for every claim. Where the evidence is uncertain, that uncertainty is stated explicitly — the site does not overstate what the science shows.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mt-8 mb-2">Editorial standards</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>All statistics are sourced from peer-reviewed studies. No figure appears without a citation.</li>
          <li>Study limitations and confidence levels are disclosed where relevant.</li>
          <li>Causation is not claimed where only association has been established.</li>
          <li>Content is updated when new research supersedes previous figures.</li>
          <li>Corrections are published transparently. If you spot an error, contact <a href="mailto:contact@bodyburdenlab.com" className="text-teal-700 underline hover:text-teal-800">contact@bodyburdenlab.com</a>.</li>
        </ul>
      </div>

      <div className="mt-12 border-t border-slate-100 pt-8">
        <h2 className="text-base font-semibold text-slate-900 mb-5">Articles by Liam Murphy</h2>
        <div className="flex flex-col divide-y divide-slate-100">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="py-4 group"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">{post.tag}</span>
                <span className="text-xs text-slate-400">{post.date}</span>
              </div>
              <p className="text-sm font-medium text-slate-800 group-hover:text-teal-700 transition-colors leading-snug">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
