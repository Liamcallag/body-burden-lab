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

  useEffect(() => {
    const raw = localStorage.getItem("bbl_answers");
    if (!raw) {
      router.replace("/calculator");
      return;
    }
    const parsed: AnswerMap = JSON.parse(raw);
    setAnswers(parsed);
    setResult(calculateScore(parsed));
  }, [router]);

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

      {/* Annual + comparison */}
      <div className="bg-slate-50 rounded-2xl p-6 mb-6 text-center border border-slate-100">
        <p className="text-2xl font-bold text-slate-900 mb-1">{annualFormatted} particles per year</p>
        <p className="text-sm text-slate-500">
          This is{" "}
          <span className="font-semibold text-slate-700">{result.comparisonText}</span> the 74,000–121,000 particles per year estimated by Cox et al. (2019) — though researchers note this figure likely significantly underestimates true exposure, as many pathways were not yet studied at the time.
        </p>
        <p className="text-xs text-slate-400 mt-2">Source: Cox et al., Environmental Science & Technology, 2019</p>
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

      {/* Share card */}
      <div className="bg-teal-700 rounded-2xl p-6 mb-6 text-white text-center">
        <p className="text-xs uppercase tracking-wider text-teal-200 mb-3">Share your result</p>
        <p className="text-2xl font-bold mb-1">{weeklyFormatted} particles/week</p>
        <p className="text-teal-200 text-sm mb-1">{annualFormatted} per year</p>
        <p className="text-xs text-teal-300 mb-5">bodyburdenlab.com</p>
        <button
          onClick={handleShare}
          className="bg-white text-teal-700 font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-teal-50 transition-colors"
        >
          {copied ? "Copied to clipboard!" : "Share my result"}
        </button>
        <p className="text-xs text-teal-300 mt-3">
          Sharing helps others discover their exposure
        </p>
      </div>

      {/* Confidence note */}
      <div className="border border-slate-100 rounded-xl p-5 mb-6 bg-slate-50">
        <p className="text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-600">About this estimate:</strong> This result carries an estimated margin of error of ±30% due to variation between studies and individual factors not captured here. It represents a reasonable approximation based on published research, not a precise measurement.
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
