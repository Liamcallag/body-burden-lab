import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Burden — Microplastics Exposure Calculator",
  description:
    "How many microplastics are you actually consuming? Get your personal estimate in 2 minutes. Free calculator built on peer-reviewed research.",
};

const stats = [
  {
    figure: "74,000–121,000",
    unit: "particles/year",
    label: "The estimated annual microplastic intake for the average American",
    source: "Cox et al., Environmental Science & Technology, 2019",
  },
  {
    figure: "11.6 billion",
    unit: "microplastic fibres",
    label: "Released by a single plastic tea bag into your cup at brewing temperature",
    source: "Hernandez et al., Environmental Science & Technology, 2019",
  },
  {
    figure: "4.22 million",
    unit: "particles",
    label: "Released from a plastic container microwaved for 3 minutes",
    source: "Hussain et al., Environmental Science & Technology, 2023",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-20 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            Peer-reviewed science
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-5">
            How many microplastics are you consuming?
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl mx-auto">
            Most people have no idea. Find out in 2 minutes — based on your lifestyle habits and peer-reviewed science.
          </p>
          <Link
            href="/calculator"
            className="inline-block bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full text-base hover:bg-teal-800 transition-colors shadow-sm"
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
          <h2 className="text-xl font-semibold text-slate-900 mb-2 text-center">The research is striking</h2>
          <p className="text-slate-500 text-center text-sm mb-10">Published figures from peer-reviewed studies</p>
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
              {
                system: "Cardiovascular system",
                finding: "Plastic particles found in 58% of arterial plaque samples. Those with microplastics in plaque had 4.5× higher risk of heart attack, stroke, or death.",
                source: "Marfella et al., NEJM, 2024",
                color: "border-red-200 bg-red-50",
                dot: "bg-red-400",
              },
              {
                system: "Brain tissue",
                finding: "Microplastics found in all brain samples tested, at higher concentrations than liver or kidney. Levels rose significantly between 2016 and 2024.",
                source: "Nihart et al., Nature Medicine, 2025",
                color: "border-purple-200 bg-purple-50",
                dot: "bg-purple-400",
              },
              {
                system: "Lung tissue",
                finding: "Detected in 85% of live human lung tissue samples, including deep in the lower lobes where the body cannot easily expel them.",
                source: "Jenner et al., Sci. Total Environ., 2022",
                color: "border-blue-200 bg-blue-50",
                dot: "bg-blue-400",
              },
              {
                system: "Reproductive system",
                finding: "Found in 100% of semen samples tested. More polymer types correlated with significantly lower sperm count and reduced motility.",
                source: "Zhang et al., eBioMedicine, 2024",
                color: "border-amber-200 bg-amber-50",
                dot: "bg-amber-400",
              },
              {
                system: "Human blood",
                finding: "Detected in 77% of healthy volunteer blood samples, confirming microplastics circulate throughout the body via the bloodstream.",
                source: "Leslie et al., Environ. Int., 2022",
                color: "border-teal-200 bg-teal-50",
                dot: "bg-teal-500",
              },
              {
                system: "Placenta",
                finding: "Microplastic fragments found on both the fetal and maternal sides of human placentas, the first evidence of fetal-adjacent exposure.",
                source: "Ragusa et al., Environ. Int., 2021",
                color: "border-pink-200 bg-pink-50",
                dot: "bg-pink-400",
              },
            ].map((item) => (
              <div key={item.system} className={`border rounded-xl p-5 ${item.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} />
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">{item.system}</span>
                </div>
                <p className="text-sm text-slate-700 leading-snug mb-3">{item.finding}</p>
                <p className="text-xs text-slate-400">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest research */}
      <section className="py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-slate-900 mb-2 text-center">Latest research</h2>
          <p className="text-slate-500 text-center text-sm mb-10">Recent landmark studies from peer-reviewed journals</p>
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
              <div key={study.doi} className="border border-slate-100 rounded-xl p-5 bg-white hover:border-teal-200 transition-colors">
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
