import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.bodyburdenlab.com";

  return [
    { url: base, lastModified: "2026-05-10", changeFrequency: "weekly", priority: 1 },
    { url: `${base}/calculator`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/methodology`, lastModified: "2026-05-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: "2026-05-10", changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/faq`, lastModified: "2026-05-10", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: "2026-05-13", changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/how-to-avoid-microplastics`, lastModified: "2026-05-10", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/how-many-microplastics-do-you-consume`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/what-do-microplastics-do-to-the-body`, lastModified: "2026-05-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/best-water-filter-for-microplastics`, lastModified: "2026-05-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/microplastics-in-baby-formula`, lastModified: "2026-05-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/does-reverse-osmosis-remove-microplastics`, lastModified: "2026-05-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/microplastics-in-seafood`, lastModified: "2026-05-10", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/microplastics-in-bottled-water`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/microplastics-in-tea-bags`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/microplastics-in-cutting-boards`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/microplastics-in-salt`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/does-silicone-have-microplastics`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.6 },
  ];
}
