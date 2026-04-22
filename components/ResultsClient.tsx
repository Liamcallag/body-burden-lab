"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { QUESTIONS, REDUCTION_TIPS, CATEGORY_COLORS } from "@/lib/questions";
import { calculateScore, formatNumber, type AnswerMap, type ScoreResult } from "@/lib/scoring";

export default function ResultsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sharedScore = searchParams.get("score");
  const sharedLevel = searchParams.get("level") ?? "Moderate";

  const [result, setResult] = useState<ScoreResult | null>(null);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [copied, setCopied] = useState(false);

  const [noAnswers, setNoAnswers] = useState(false);
  const [ageData, setAgeData] = useState<{ label: string; midpoint: number; yearsTo80: number } | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("bbl_answers");
    if (!raw) {
      setNoAnswers(true);
      return;
    }
    const parsed: AnswerMap = JSON.parse(raw);
    setAnswers(parsed);
    setResult(calculateScore(parsed));

    const rawAge = localStorage.getItem("bbl_age");
    if (rawAge) setAgeData(JSON.parse(rawAge));
  }, [router]);

  if (noAnswers) {
    if (sharedScore) {
      const weekly = parseInt(sharedScore).toLocaleString("en-US");
      const levelColor =
        sharedLevel === "Low" ? "text-emerald-600" : sharedLevel === "High" ? "text-red-600" : "text-amber-600";
      const levelBg =
        sharedLevel === "Low" ? "bg-emerald-50 border-emerald-100" : sharedLevel === "High" ? "bg-red-50 border-red-100" : "bg-amber-50 border-amber-100";
      return (
        <div className="max-w-md mx-auto text-center py-16">
          <div className={`inline-block border text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6 ${levelBg} ${levelColor}`}>
            {sharedLevel} exposure
          </div>
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">Someone consumed</p>
          <div className="text-6xl font-extrabold text-teal-700 tabular-nums my-3">{weekly}</div>
          <p className="text-slate-500 text-base mb-8">microplastic particles per week</p>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">How does your exposure compare? Take the 2-minute calculator to find out.</p>
          <Link
            href="/calculator"
            className="inline-block bg-teal-700 text-white font-semibold px-8 py-3 rounded-full text-sm hover:bg-teal-800 transition-colors"
          >
            Find out yours →
          </Link>
          <p className="text-xs text-slate-400 mt-4">Built on peer-reviewed science · bodyburdenlab.com</p>
        </div>
      );
    }
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
    const minValue = Math.min(...q.options.map((o) => o.value));
    const bestOption = q.options.reduce((a, b) => (a.value <= b.value ? a : b));
    const saving = value - minValue;
    return { id: q.id, label: q.question, value, saving, bestOption, category: q.category, tipKey: q.tipKey };
  }).sort((a, b) => b.saving - a.saving);

  const top3Questions = questionContributions.slice(0, 3).filter((q) => q.saving > 0);

  const annualFormatted = formatNumber(result.annualTotal);
  const weeklyFormatted = result.weeklyTotal.toLocaleString();

  // Comparison bar
  const DISPLAY_MAX = 15000;
  const COX_BASELINE = 1875; // midpoint of Cox et al. 2019 (1,423–2,327/week)
  const coxPct = (COX_BASELINE / DISPLAY_MAX) * 100;
  const userPct = Math.min((result.weeklyTotal / DISPLAY_MAX) * 100, 97);
  const multiplier = (result.weeklyTotal / COX_BASELINE).toFixed(1);

  // Share text
  const shareText = `I consume approximately ${weeklyFormatted} microplastic particles per week (${annualFormatted} per year). Find out yours:`;

  function handleShare() {
    const shareUrl = `https://bodyburdenlab.com/results?score=${result!.weeklyTotal}&level=${encodeURIComponent(exposureLevel.label)}`;
    if (navigator.share) {
      navigator.share({
        title: `I consume ${weeklyFormatted} microplastic particles per week`,
        text: shareText,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
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

      {/* Comparison bar */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-6 shadow-sm">
        <p className="text-center text-sm text-slate-500 mb-5">
          {parseFloat(multiplier) < 1
            ? "Your exposure is below the estimated population baseline"
            : <>Your exposure is <span className="font-bold text-slate-900 text-base">{multiplier}×</span> the estimated population baseline</>
          }
        </p>

        {/* Bar */}
        <div className="relative mb-6">
          {/* Gradient track */}
          <div
            className="h-4 rounded-full"
            style={{ background: "linear-gradient(to right, #34d399, #fbbf24 40%, #f87171)" }}
          />

          {/* Cox baseline tick + label */}
          <div
            className="absolute top-0 h-4 flex flex-col items-center"
            style={{ left: `${coxPct}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-0.5 h-4 bg-white/80" />
          </div>
          <div
            className="absolute text-center"
            style={{ left: `${coxPct}%`, transform: "translateX(-50%)", top: "1.25rem" }}
          >
            <div className="text-[10px] text-slate-400 leading-tight whitespace-nowrap">Population<br />baseline</div>
          </div>

          {/* User marker */}
          <div
            className="absolute flex flex-col items-center"
            style={{ left: `${userPct}%`, transform: "translateX(-50%)", top: "-1.5rem" }}
          >
            <div className="text-[10px] font-semibold text-slate-700 whitespace-nowrap mb-0.5">You</div>
            <div className="w-0.5 h-3 bg-slate-800" />
            <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-white shadow-md -mt-px" />
          </div>
        </div>

        <div className="flex justify-between text-[10px] text-slate-300 mt-7">
          <span>Lower exposure</span>
          <span>Higher exposure</span>
        </div>
        <p className="text-[10px] text-slate-300 text-center mt-1">
          Scale capped at 15,000 particles/week · Baseline: Cox et al., Environmental Science &amp; Technology, 2019
        </p>
        <div className="border-t border-slate-100 mt-4 pt-4 text-center">
          <p className="text-sm text-slate-500">
            That's <span className="font-semibold text-slate-700">{annualFormatted} particles per year</span> —{" "}
            {result.comparisonText} the 74,000–121,000/year calculated by Cox et al. (2019)
          </p>
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
        <div className="bg-white px-6 py-4">
          <button
            onClick={handleShare}
            className="w-full text-center bg-slate-900 text-white font-semibold py-2.5 rounded-full text-sm hover:bg-slate-700 transition-colors"
          >
            {copied ? "Copied!" : "Share your result"}
          </button>
          <p className="text-xs text-slate-400 text-center mt-2">Opens share menu on mobile · copies text on desktop</p>
        </div>
      </div>

      {/* Lifetime accumulation */}
      {ageData && (
        <div className="bg-slate-900 rounded-2xl p-6 mb-6 text-white text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">Lifetime exposure</p>
          <div className="text-4xl sm:text-5xl font-extrabold tabular-nums text-white mb-2">
            {formatNumber(result.weeklyTotal * 52 * ageData.yearsTo80)}
          </div>
          <p className="text-slate-300 text-sm mb-1">microplastic particles ingested or inhaled over your remaining lifetime</p>
          <p className="text-xs text-slate-500 mt-3 max-w-sm mx-auto leading-relaxed">Based on the age you provided. This is total intake — the body excretes some fraction, though net tissue accumulation does occur over time.</p>
        </div>
      )}

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

      {/* Top 3 changes with savings */}
      {top3Questions.length > 0 && (
        <div className="bg-slate-900 rounded-2xl p-6 mb-6">
          <h2 className="font-semibold text-white mb-1">Your top {top3Questions.length} changes</h2>
          <p className="text-xs text-slate-400 mb-5">The single habits that would reduce your exposure the most</p>
          <ol className="flex flex-col gap-4">
            {top3Questions.map((q, i) => {
              const tip = REDUCTION_TIPS[q.tipKey];
              return (
                <li key={q.id} className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-xs font-semibold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                      −{q.saving.toLocaleString()} particles/week
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">{q.label}</p>
                  {tip && <p className="text-xs text-slate-400 leading-relaxed">{tip}</p>}
                </li>
              );
            })}
          </ol>
          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <p className="text-xs text-slate-400">
              All 3 changes together →{" "}
              <span className="font-semibold text-teal-400">
                −{top3Questions.reduce((sum, q) => sum + q.saving, 0).toLocaleString()} particles/week
              </span>
            </p>
          </div>
        </div>
      )}

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
