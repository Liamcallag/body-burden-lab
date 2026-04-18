import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Burden — How Many Microplastics Are You Consuming?",
  description:
    "Body Burden estimates your weekly microplastic exposure based on your lifestyle, using peer-reviewed science. Free, anonymous, takes 2 minutes.",
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
            Body Burden estimates your weekly microplastic exposure based on your lifestyle habits — built on peer-reviewed research, not guesswork.
          </p>
          <Link
            href="/calculator"
            className="inline-block bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full text-base hover:bg-teal-800 transition-colors shadow-sm"
          >
            Calculate Your Body Burden
          </Link>
          <p className="text-xs text-slate-400 mt-3">10 questions · 2 minutes · no account required</p>
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
            Calculate Your Body Burden
          </Link>
        </div>
      </section>
    </>
  );
}
