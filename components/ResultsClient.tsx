"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { QUESTIONS, REDUCTION_TIPS, CATEGORY_COLORS } from "@/lib/questions";
import { calculateScore, formatNumber, type AnswerMap, type ScoreResult } from "@/lib/scoring";

export default function ResultsClient() {
  const router = useRouter();
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [copied, setCopied] = useState(false);

  const [noAnswers, setNoAnswers] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("bbl_answers");
    if (!raw) {
      setNoAnswers(true);
      return;
    }
    const parsed: AnswerMap = JSON.parse(raw);
    setAnswers(parsed);
    setResult(calculateScore(parsed));
  }, [router]);

  if (noAnswers) {
    return (
      <div className="max-w-md mx-auto text-center py-20">
        <div className="text-4xl mb-4">🧪</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">No results yet</h1>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
          It looks like you haven't completed the calculator yet — or you're viewing this on a different device. Take the 2-minute quiz to get your personalised microplastic exposure estimate.
        </p>
        <Link
          href="/calculator"
          className="inline-block bg-teal-700 text-white font-semibold px-7 py-3 rounded-full text-sm hover:bg-teal-800 transition-colors"
        >
          Take the calculator →
        </Link>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-slate-400 text-sm">
        Loading your results…
      </div>
    );
  }

  const maxCategory = Math.max(...result.categories.map((c) => c.particles));

  // Determine top sources from actual answers
  const topSourceTips = result.topSources
    .filter((s) => s.particles > 0)
    .map((source) => {
      const q = QUESTIONS.find((q) => q.category === source.category);
      const tip = q ? REDUCTION_TIPS[q.tipKey] : null;
      return { category: source.label, tip };
    })
    .filter((t) => t.tip);

  // Top 3 individual question contributors
  const questionContributions = QUESTIONS.map((q) => {
    const idx = answers[q.id] ?? 0;
    const value = q.options[idx]?.value ?? 0;
    return { id: q.id, label: q.question, value, category: q.category, tipKey: q.tipKey };
  }).sort((a, b) => b.value - a.value);

  const top3Questions = questionContributions.slice(0, 3).filter((q) => q.value > 0);

  const annualFormatted = formatNumber(result.annualTotal);
  const weeklyFormatted = result.weeklyTotal.toLocaleString();

  // Share text
  const shareText = `I consume approximately ${weeklyFormatted} microplastic particles per week (${annualFormatted} per year). Find out yours at bodyburdenlab.com`;

  function handleShare() {
    if (navigator.share) {
      navigator.share({ text: shareText, url: "https://bodyburdenlab.com/calculator" });
    } else {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const exposureLevel =
    result.annualTotal < 56000
      ? { label: "Low", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" }
      : result.annualTotal < 150000
      ? { label: "Moderate", color: "text-amber-600", bg: "bg-amber-50 border-amber-100" }
      : { label: "High", color: "text-red-600", bg: "bg-red-50 border-red-100" };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className={`inline-block border text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${exposureLevel.bg} ${exposureLevel.color}`}>
          {exposureLevel.label} exposure
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-2">
          You consume and inhale approximately
        </h1>
        <div className="text-5xl sm:text-6xl font-bold text-teal-700 my-4 tabular-nums">
          {weeklyFormatted}
        </div>
        <p className="text-lg text-slate-500">microplastic particles per week</p>
      </div>

      {/* Share card — placed high so users see it while engaged */}
      <div className="rounded-2xl mb-6 overflow-hidden border border-slate-100 shadow-sm">
        {/* Visual card (screenshot-friendly) */}
        <div className="bg-gradient-to-br from-teal-700 to-teal-900 px-6 pt-8 pb-6 text-white text-center">
          <p className="text-xs uppercase tracking-widest text-teal-300 mb-3">My microplastic exposure</p>
          <div className="text-6xl font-extrabold tabular-nums mb-1">{weeklyFormatted}</div>
          <p className="text-teal-200 text-sm mb-3">microplastic particles per week</p>
          <div className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
            exposureLevel.label === "Low" ? "bg-emerald-400/20 text-emerald-200" :
            exposureLevel.label === "Moderate" ? "bg-amber-400/20 text-amber-200" :
            "bg-red-400/20 text-red-200"
          }`}>
            {exposureLevel.label} exposure
          </div>
          <p className="text-xs text-teal-400">bodyburdenlab.com</p>
        </div>
        {/* Share buttons */}
        <div className="bg-white px-6 py-4 flex flex-col sm:flex-row gap-3">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I consume ${weeklyFormatted} microplastic particles per week (${exposureLevel.label.toLowerCase()} exposure). Find out yours 👇`)}&url=${encodeURIComponent("https://bodyburdenlab.com/calculator")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-slate-900 text-white font-semibold py-2.5 rounded-full text-sm hover:bg-slate-700 transition-colors"
          >
            Share on X / Twitter
          </a>
          <button
            onClick={handleShare}
            className="flex-1 text-center border border-slate-200 text-slate-600 font-semibold py-2.5 rounded-full text-sm hover:bg-slate-50 transition-colors"
          >
            {copied ? "Copied!" : "Copy result text"}
          </button>
        </div>
      </div>

      {/* Annual + comparison */}
      <div className="bg-slate-50 rounded-2xl p-6 mb-6 text-center border border-slate-100">
        <p className="text-2xl font-bold text-slate-900 mb-1">{annualFormatted} microplastic particles per year</p>
        <p className="text-sm text-slate-500">
          This is{" "}
          <span className="font-semibold text-slate-700">{result.comparisonText}</span> the 74,000–121,000 particles per year calculated by Cox et al. (2019) — a figure based on a limited set of exposure pathways and widely considered an underestimate of true average exposure.
        </p>
        <p className="text-xs text-slate-400 mt-2">Source: Cox et al., Environmental Science & Technology, 2019</p>
      </div>

      {/* Health context */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-6 shadow-sm">
        <h2 className="font-semibold text-slate-900 mb-1">What this means for your health</h2>
        <p className="text-xs text-slate-400 mb-4">Based on peer-reviewed research — detection does not prove causation</p>
        <div className="flex flex-col gap-3 text-sm text-slate-600 leading-relaxed">
          {exposureLevel.label === "Low" && (
            <>
              <p>Your exposure is below the estimated average. Microplastics have been confirmed in human blood, lung tissue, and organs regardless of exposure level — there is no threshold below which accumulation stops entirely.</p>
              <p>At lower exposure levels, the current evidence does not clearly establish harm. The most important finding from lower-exposure groups is that accumulation occurs over a lifetime, making ongoing reduction worthwhile even at modest current levels.</p>
            </>
          )}
          {exposureLevel.label === "Moderate" && (
            <>
              <p>Your exposure is around the estimated average. Research has confirmed microplastics in the blood of 77% of healthy adults (Leslie et al., 2022) and in lung tissue of 85% of patients tested (Jenner et al., 2022) — suggesting this level of exposure is consistent with detectable tissue accumulation.</p>
              <p>The most significant study at typical population exposure levels — Marfella et al. (2024) in the New England Journal of Medicine — found microplastics in the arterial plaque of 58% of cardiovascular patients and linked their presence to a 4.5× higher risk of heart attack or stroke. This was an observational study and cannot prove causation.</p>
            </>
          )}
          {exposureLevel.label === "High" && (
            <>
              <p>Your exposure is above the estimated average. Studies have consistently found that microplastics accumulate in human organs including the brain, lungs, liver, and arterial plaque — with concentrations that have risen measurably over just the past decade (Nihart et al., Nature Medicine, 2025).</p>
              <p>At higher exposure levels, the research suggests the most actionable risk areas are cardiovascular health and reproductive health. The Marfella et al. (2024) NEJM study found people with microplastics in arterial plaque had a 4.5× higher risk of cardiovascular events. Zhang et al. (2024) found higher polymer exposure correlated with lower sperm count and motility in 100% of male samples tested.</p>
              <p className="text-xs text-slate-400">These are observational findings. Causation has not been established. See our <a href="/methodology" className="underline hover:text-teal-700">methodology page</a> for full citations.</p>
            </>
          )}
        </div>
      </div>

      {/* Nanoplastics callout */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-6">
        <div className="flex gap-3 items-start">
          <span className="text-amber-500 text-lg flex-shrink-0">⚠</span>
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-1">This is likely a significant underestimate</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              This calculator counts <strong>microplastic particles only</strong> (≥1 micron). Nanoplastic particles — which are far smaller and more numerous — are not included due to inconsistent measurement across studies. Research suggests nanoplastics may be present at <strong>10 to 100 times higher concentrations</strong> than microplastics. A single plastic tea bag, for example, releases approximately 11.6 billion nanoplastic particles per cup alongside the microplastics counted here.
            </p>
            <p className="text-xs text-slate-400 mt-2">Hernandez et al., Environmental Science & Technology, 2019</p>
          </div>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-6 shadow-sm">
        <h2 className="font-semibold text-slate-900 mb-4">Exposure by source</h2>
        <div className="flex flex-col gap-4">
          {result.categories.map((cat) => {
            const pct = maxCategory > 0 ? (cat.particles / maxCategory) * 100 : 0;
            const color = CATEGORY_COLORS[cat.category];
            return (
              <div key={cat.category}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-slate-700">{cat.label}</span>
                  <span className="text-sm text-slate-500 tabular-nums">
                    {cat.particles.toLocaleString()} particles/week
                  </span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top 3 sources */}
      {top3Questions.length > 0 && (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="font-semibold text-slate-900 mb-1">Your top {top3Questions.length} sources</h2>
          <p className="text-xs text-slate-400 mb-4">The habits contributing most to your score</p>
          <ol className="flex flex-col gap-3">
            {top3Questions.map((q, i) => (
              <li key={q.id} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-700 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-800">{q.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{q.value.toLocaleString()} particles/week</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Reduction tips */}
      {top3Questions.length > 0 && (
        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h2 className="font-semibold text-slate-900 mb-1">Reduce your exposure</h2>
          <p className="text-xs text-slate-500 mb-4">Personalised tips based on your top sources</p>
          <div className="flex flex-col gap-4">
            {top3Questions.map((q) => {
              const tip = REDUCTION_TIPS[q.tipKey];
              if (!tip) return null;
              return (
                <div key={q.id} className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 mt-0.5">→</span>
                  <p className="text-sm text-slate-700 leading-relaxed">{tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Confidence note */}
      <div className="border border-slate-100 rounded-xl p-5 mb-6 bg-slate-50">
        <p className="text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-600">About this estimate:</strong> The microplastic figures in this calculator carry an estimated margin of error of ±30% due to variation between studies and individual factors not captured here. Nanoplastic exposure is not included and may be significantly higher. Your score should be understood as a conservative floor, not a precise measurement.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/methodology"
          className="flex-1 text-center border border-teal-200 text-teal-700 font-medium py-3 rounded-xl text-sm hover:bg-teal-50 transition-colors"
        >
          See the science behind your score →
        </Link>
        <Link
          href="/calculator"
          className="flex-1 text-center border border-slate-200 text-slate-600 font-medium py-3 rounded-xl text-sm hover:bg-slate-50 transition-colors"
        >
          Retake the calculator
        </Link>
      </div>
    </div>
  );
}
