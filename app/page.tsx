import Link from "next/link";
import type { Metadata } from "next";
import { Heart, Brain, Wind, Baby, Droplets, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Body Burden — Microplastics Exposure Calculator",
  description:
    "How many microplastics are you actually consuming? Get your personal estimate in 2 minutes. Free calculator built on peer-reviewed research.",
};

const stats = [
  {
    figure: "28,000",
    unit: "microplastic particles/week",
    label: "Added to your weekly intake by microwaving food in plastic containers daily",
    source: "Hussain et al., Environmental Science & Technology, 2023",
  },
  {
    figure: "7,000",
    unit: "microplastic particles/week",
    label: "Added to your weekly intake by using plastic tea bags once a day",
    source: "Hernandez et al., Environmental Science & Technology, 2019",
  },
  {
    figure: "1,730",
    unit: "microplastic particles/week",
    label: "Added to your weekly intake by drinking only bottled water",
    source: "Cox et al., Environmental Science & Technology, 2019",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/brain.jpg')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative max-w-2xl mx-auto py-24">
          <div className="inline-block bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-8 backdrop-blur-sm">
            Peer-reviewed science
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-5">
            100% of human brains tested contain microplastics. Including yours.
          </h1>
          <p className="text-white/40 text-sm mb-10">
            Nihart et al., Nature Medicine, 2025
          </p>
          <p className="text-white text-base mb-8 max-w-md mx-auto">
            How much are your habits contributing?
          </p>
          <Link
            href="/calculator"
            className="inline-block bg-teal-500 text-white font-semibold px-8 py-3.5 rounded-full text-base hover:bg-teal-400 transition-colors shadow-lg"
          >
            Find out how much →
          </Link>
        </div>
      </section>

      {/* What is body burden */}
      <section className="bg-slate-50 py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">What is "body burden"?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            <em>Body burden</em> is the scientific term used by toxicologists and the CDC to describe the total accumulation of environmental contaminants in the human body. It reflects lifetime exposure — not just what enters today, but what persists in tissues and organs.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Microplastics have been detected in human blood, lungs, liver, kidneys, and — most recently — in arterial plaques and the human brain. Researchers note that current ingestion estimates are likely a significant underestimate, as many exposure pathways remain unstudied.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-slate-900 mb-2 text-center">Three habits that drive the most exposure</h2>
          <p className="text-slate-500 text-center text-sm mb-10">Microplastic particles per week — peer-reviewed figures, same unit</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.figure} className="border border-slate-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-teal-700 mb-1">{s.figure}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">{s.unit}</div>
                <p className="text-sm text-slate-700 leading-snug mb-3">{s.label}</p>
                <p className="text-xs text-slate-400">{s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health effects */}
      <section className="py-14 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-slate-900 mb-2 text-center">Found in the human body</h2>
          <p className="text-slate-500 text-center text-sm mb-10 max-w-xl mx-auto">Peer-reviewed studies have confirmed microplastics in the following tissues. Detection does not prove causation — health effects remain an active area of research.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { system: "Cardiovascular system", finding: "Plastic particles found in 58% of arterial plaque samples. Those with microplastics in plaque had 4.5× higher risk of heart attack, stroke, or death.", source: "Marfella et al., NEJM, 2024", icon: Heart },
              { system: "Brain tissue", finding: "Microplastics found in all brain samples tested, at higher concentrations than liver or kidney. Levels rose significantly between 2016 and 2024.", source: "Nihart et al., Nature Medicine, 2025", icon: Brain },
              { system: "Lung tissue", finding: "Detected in 85% of live human lung tissue samples, including deep in the lower lobes where the body cannot easily expel them.", source: "Jenner et al., Sci. Total Environ., 2022", icon: Wind },
              { system: "Reproductive system", finding: "Found in 100% of semen samples tested. More polymer types correlated with significantly lower sperm count and reduced motility.", source: "Zhang et al., eBioMedicine, 2024", icon: FlaskConical },
              { system: "Human blood", finding: "Detected in 77% of healthy volunteer blood samples, confirming microplastics circulate throughout the body via the bloodstream.", source: "Leslie et al., Environ. Int., 2022", icon: Droplets },
              { system: "Placenta", finding: "Microplastic fragments found on both the fetal and maternal sides of human placentas, the first evidence of fetal-adjacent exposure.", source: "Ragusa et al., Environ. Int., 2021", icon: Baby },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.system} className="border border-slate-100 rounded-xl p-5 bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-base font-bold text-slate-900">{item.system}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{item.finding}</p>
                  <p className="text-xs text-slate-400">{item.source}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest research */}
      <section className="py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-slate-900 mb-2 text-center">Landmark research</h2>
          <p className="text-slate-500 text-center text-sm mb-10">Significant studies from peer-reviewed journals</p>
          <div className="flex flex-col gap-4">
            {[
              {
                journal: "New England Journal of Medicine",
                year: "2024",
                title: "Microplastics found in arterial plaque linked to 4.5× higher cardiovascular risk",
                summary: "Scientists examined arterial plaque from 257 heart surgery patients and found plastic in the majority of samples. Those whose plaque contained microplastics were nearly five times more likely to have a heart attack, stroke, or die within three years.",
                doi: "10.1056/NEJMoa2309822",
              },
              {
                journal: "Nature Medicine",
                year: "2025",
                title: "Brains accumulate more microplastic than any other organ — and levels are rising",
                summary: "Autopsy analysis of brain, liver, and kidney tissue found that brains contain more microplastic than other organs, and concentrations rose significantly in just eight years. Brains from people with dementia showed even higher plastic loads.",
                doi: "10.1038/s41591-024-03453-1",
              },
              {
                journal: "eBioMedicine (The Lancet)",
                year: "2024",
                title: "Microplastics found in 100% of semen samples — more types linked to lower sperm count",
                summary: "Every semen sample from 113 men contained microplastics. Men with more polymer types showed significantly lower sperm counts and reduced motility, with PTFE showing the strongest association.",
                doi: "10.1016/j.ebiom.2024.105369",
              },
              {
                journal: "Science of the Total Environment",
                year: "2022",
                title: "First detection of microplastics in living human lung tissue",
                summary: "For the first time, researchers confirmed microplastics in lung tissue from living patients — not just cadavers. Particles were found deep in the lower lungs, in locations very difficult for the body to expel.",
                doi: "10.1016/j.scitotenv.2022.154907",
              },
            ].map((study) => (
              <div key={study.doi} className="border border-slate-100 rounded-xl p-5 bg-white hover:border-teal-200 transition-colors border-l-4 border-l-teal-400">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">{study.journal}</span>
                  <span className="text-xs text-slate-400">{study.year}</span>
                </div>
                <p className="text-sm font-semibold text-slate-900 mb-1 leading-snug">{study.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{study.summary}</p>
                <a
                  href={`https://doi.org/${study.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-600 hover:underline"
                >
                  DOI: {study.doi} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-14 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-1">From the blog</h2>
              <p className="text-sm text-slate-500">Science-backed guides on microplastic exposure</p>
            </div>
            <Link href="/blog" className="text-sm font-medium text-teal-700 hover:underline whitespace-nowrap">
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { slug: "how-to-avoid-microplastics", title: "How to Avoid Microplastics — A Science-Based Guide", tag: "Guide", image: "/blog-avoid.png" },
              { slug: "how-many-microplastics-do-you-consume", title: "How Many Microplastics Do You Consume Per Week?", tag: "Science", image: "/blog-how-many.png" },
              { slug: "microplastics-in-bottled-water", title: "Microplastics in Bottled Water — What the Research Shows", tag: "Science", image: "/blog-bottled-water.png" },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="border border-slate-100 rounded-xl bg-white shadow-sm hover:border-teal-200 transition-colors overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">{post.tag}</span>
                  <p className="text-sm font-semibold text-slate-900 mt-2 leading-snug">{post.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-teal-700 py-14 px-4 sm:px-6 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-3">Built on science, not guesswork</h2>
          <p className="text-teal-100 leading-relaxed mb-6 max-w-xl mx-auto">
            Every particle estimate in this calculator is derived from peer-reviewed studies published in journals including <em>Environmental Science & Technology</em> and <em>Science of the Total Environment</em>. Each answer cites its source and confidence level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="bg-white text-teal-700 font-semibold px-7 py-3 rounded-full text-sm hover:bg-teal-50 transition-colors"
            >
              Start the calculator
            </Link>
            <Link
              href="/methodology"
              className="border border-teal-400 text-white font-semibold px-7 py-3 rounded-full text-sm hover:bg-teal-600 transition-colors"
            >
              Read the methodology
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 bg-white text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Know what's inside you</h2>
          <p className="text-slate-500 text-sm mb-6">
            Your result is based on the same data used by the researchers who study this full-time.
          </p>
          <Link
            href="/calculator"
            className="inline-block bg-teal-700 text-white font-semibold px-8 py-3 rounded-full text-sm hover:bg-teal-800 transition-colors"
          >
            Find out how much →
          </Link>
        </div>
      </section>
    </>
  );
}
