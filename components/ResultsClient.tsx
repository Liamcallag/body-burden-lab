"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { QUESTIONS, REDUCTION_TIPS, CATEGORY_LABELS, type Category } from "@/lib/questions";
import { calculateScore, type AnswerMap, type ScoreResult } from "@/lib/scoring";

type CategoryGroup = {
  cat: Category;
  items: { question: (typeof QUESTIONS)[number]; selected: { label: string; riskScore: number }; contribution: number }[];
  catPct: number;
};

const CAT_COLORS: Record<Category, string> = {
  kitchen: "#0d9488",
  water:   "#3b82f6",
  food:    "#f59e0b",
  air:     "#8b5cf6",
};

function PieChart({ groups, selected, onSelect }: {
  groups: CategoryGroup[];
  selected: Category | null;
  onSelect: (cat: Category) => void;
}) {
  const cx = 100, cy = 100, r = 80, holeR = 48;
  let angle = -Math.PI / 2;

  const slices = groups.map(({ cat, catPct }) => {
    const slice = (catPct / 100) * 2 * Math.PI;
    const start = angle;
    const end = angle + slice;
    angle = end;

    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);
    const ix1 = cx + holeR * Math.cos(end);
    const iy1 = cy + holeR * Math.sin(end);
    const ix2 = cx + holeR * Math.cos(start);
    const iy2 = cy + holeR * Math.sin(start);
    const large = slice > Math.PI ? 1 : 0;

    const midAngle = start + slice / 2;
    const labelR = (r + holeR) / 2;
    const lx = cx + labelR * Math.cos(midAngle);
    const ly = cy + labelR * Math.sin(midAngle);

    const d = [
      `M ${x1} ${y1}`,
      `A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`,
      `L ${ix1} ${iy1}`,
      `A ${holeR} ${holeR} 0 ${large} 0 ${ix2} ${iy2}`,
      "Z",
    ].join(" ");

    return { cat, catPct, d, lx, ly, color: CAT_COLORS[cat] };
  });

  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-[220px] mx-auto">
      {slices.map(({ cat, catPct, d, lx, ly, color }) => {
        const isSelected = selected === cat;
        return (
          <g key={cat} onClick={() => onSelect(cat)} style={{ cursor: "pointer" }}>
            <path
              d={d}
              fill={color}
              opacity={selected === null || isSelected ? 1 : 0.3}
              transform={isSelected ? `translate(${(lx - cx) * 0.06} ${(ly - cy) * 0.06})` : undefined}
              style={{ transition: "opacity 0.2s, transform 0.2s" }}
            />
            {catPct >= 8 && (
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fontWeight="700"
                fill="white"
                style={{ pointerEvents: "none" }}
              >
                {catPct}%
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function CategorySection({ groups, totalContribution }: { groups: CategoryGroup[]; totalContribution: number }) {
  const [selectedCat, setSelectedCat] = useState<Category | null>(null);

  function handleSliceClick(cat: Category) {
    setSelectedCat((prev) => (prev === cat ? null : cat));
  }

  const activeGroup = groups.find((g) => g.cat === selectedCat) ?? null;

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-6 shadow-sm">
      <h2 className="font-semibold text-slate-900 mb-1">What's driving your score</h2>
      <p className="text-xs text-slate-400 mb-5">Each category's share of your total risk score — tap a slice to see individual habits</p>

      {/* Pie chart + legend */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex-shrink-0 w-[160px]">
          <PieChart groups={groups} selected={selectedCat} onSelect={handleSliceClick} />
        </div>
        <div className="flex flex-col gap-2">
          {groups.map(({ cat, catPct }) => (
            <button
              key={cat}
              onClick={() => handleSliceClick(cat)}
              className="flex items-center gap-2 text-left"
            >
              <span
                className="flex-shrink-0 w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: CAT_COLORS[cat], opacity: selectedCat === null || selectedCat === cat ? 1 : 0.3 }}
              />
              <span className={`text-xs ${selectedCat === cat ? "font-bold text-slate-900" : "text-slate-600"}`}>
                {CATEGORY_LABELS[cat]}
              </span>
              <span className="text-xs font-bold tabular-nums text-slate-400 ml-auto pl-2">{catPct}%</span>
            </button>
          ))}
        </div>
      </div>

      {/* Expanded habit detail */}
      {activeGroup && (
        <div className="border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: CAT_COLORS[activeGroup.cat] }} />
            <p className="text-sm font-semibold text-slate-800">{CATEGORY_LABELS[activeGroup.cat]}</p>
            <span className="text-xs text-slate-400 ml-auto">{activeGroup.catPct}% of your score</span>
          </div>
          <div className="flex flex-col divide-y divide-slate-50">
            {activeGroup.items.map(({ question, selected }) => (
              <div key={question.id} className="py-3">
                <p className="text-sm font-medium text-slate-700 leading-snug">{question.resultLabel}</p>
                <p className="text-xs text-slate-400 mt-0.5 mb-1.5">"{selected.label}"</p>
                {question.studyCallout && (
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm text-slate-600">
                        <span className="font-extrabold text-slate-900 tabular-nums">{question.studyCallout.value} </span>
                        {question.studyCallout.unit}
                      </p>
                      {question.studyCallout.unitContext && (
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                          {question.studyCallout.unitContext}
                        </span>
                      )}
                    </div>
                    {question.studyCallout.url ? (
                      <a
                        href={question.studyCallout.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-teal-600 hover:text-teal-800 whitespace-nowrap shrink-0"
                      >
                        View study →
                      </a>
                    ) : (
                      <span className="text-[11px] text-slate-400 whitespace-nowrap shrink-0">Est.</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ResultsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sharedScore = searchParams.get("score");
  const sharedLevel = searchParams.get("level") ?? "Moderate";

  const [result, setResult] = useState<ScoreResult | null>(null);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [copied, setCopied] = useState(false);
  const [noAnswers, setNoAnswers] = useState(false);

  useEffect(() => {
    if (sharedScore) {
      setNoAnswers(true);
      return;
    }
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
    if (sharedScore) {
      const levelColor =
        sharedLevel === "Low" ? "text-emerald-600" :
        sharedLevel === "High" ? "text-red-600" :
        sharedLevel === "Very High" ? "text-red-800" :
        "text-amber-600";
      const levelBg =
        sharedLevel === "Low" ? "bg-emerald-50 border-emerald-100" :
        sharedLevel === "High" ? "bg-red-50 border-red-100" :
        sharedLevel === "Very High" ? "bg-red-100 border-red-200" :
        "bg-amber-50 border-amber-100";
      return (
        <div className="max-w-md mx-auto text-center py-16">
          <div className={`inline-block border text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6 ${levelBg} ${levelColor}`}>
            {sharedLevel} exposure
          </div>
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">Someone scored</p>
          <div className="text-7xl font-extrabold text-teal-700 tabular-nums my-3">{sharedScore}</div>
          <p className="text-slate-500 text-base mb-2">out of 100 on the microplastic risk index</p>
          <p className="text-slate-400 text-sm mb-8">{sharedLevel} exposure · bodyburdenlab.com</p>
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
        <h1 className="text-2xl font-bold text-slate-900 mb-3">No results yet</h1>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
          It looks like you haven't completed the calculator yet. Take the 2-minute quiz to get your personalised microplastic risk score.
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

  // Exposure level styling
  const exposureLevel =
    result.exposureTier === "Low"
      ? { color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100", barColor: "#10b981" }
      : result.exposureTier === "Moderate"
      ? { color: "text-amber-600", bg: "bg-amber-50 border-amber-100", barColor: "#f59e0b" }
      : result.exposureTier === "High"
      ? { color: "text-red-600", bg: "bg-red-50 border-red-100", barColor: "#ef4444" }
      : { color: "text-red-800", bg: "bg-red-100 border-red-200", barColor: "#b91c1c" };

  // Top 3 questions by reduction potential: (selectedRiskScore - minRiskScore) * weight
  const reductionOpportunities = QUESTIONS.map((q) => {
    const idx = answers[q.id] ?? 0;
    const selectedScore = q.options[idx]?.riskScore ?? 0;
    const minScore = Math.min(...q.options.map((o) => o.riskScore));
    const potential = (selectedScore - minScore) * q.weight;
    const tip = REDUCTION_TIPS[q.tipKey];
    return { question: q, potential, tip, selectedScore };
  })
    .filter((r) => r.potential > 0 && r.tip)
    .sort((a, b) => b.potential - a.potential)
    .slice(0, 3);

  function handleShare() {
    const shareUrl = `https://bodyburdenlab.com/results?score=${result!.riskScore}&level=${encodeURIComponent(result!.exposureTier)}`;
    if (navigator.share) {
      navigator.share({
        title: `My microplastic risk score is ${result!.riskScore}/100`,
        text: `I scored ${result!.riskScore}/100 on the microplastic risk index (${result!.exposureTier} exposure). Find out yours:`,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Your microplastic risk score
        </h1>
        <div className={`inline-flex items-center gap-2 border px-5 py-2.5 rounded-full mb-4 ${exposureLevel.bg} ${exposureLevel.color}`}>
          <span className={`text-3xl font-extrabold tabular-nums`}>{result.riskScore}</span>
          <span className="text-sm font-semibold">/ 100</span>
          <span className="w-px h-5 bg-current opacity-30 mx-1" />
          <span className="text-sm font-bold uppercase tracking-wide">{result.exposureTier}</span>
        </div>
        <p className="text-xs text-slate-400 mt-3 max-w-sm mx-auto">
          Based on your habits across 15 questions — higher score means higher relative exposure risk
        </p>
      </div>

      {/* Ranked question contributions */}
      {(() => {
        const allItems = QUESTIONS.map((q) => {
          const idx = answers[q.id] ?? 0;
          const selected = q.options[idx];
          const contribution = (selected?.riskScore ?? 0) * q.weight;
          return { question: q, selected, contribution };
        }).filter((r) => r.contribution > 0);

        const totalContribution = allItems.reduce((sum, r) => sum + r.contribution, 0) || 1;

        // Group by category, sorted by category total descending
        const categoryOrder: Category[] = ["kitchen", "water", "food", "air"];
        const groups = categoryOrder.map((cat) => {
          const items = allItems
            .filter((r) => r.question.category === cat)
            .sort((a, b) => b.contribution - a.contribution);
          const catTotal = items.reduce((sum, r) => sum + r.contribution, 0);
          const catPct = Math.round((catTotal / totalContribution) * 100);
          return { cat, items, catPct };
        }).filter((g) => g.items.length > 0)
          .sort((a, b) => b.catPct - a.catPct);

        if (groups.length === 0) return null;

        return (
          <CategorySection groups={groups} totalContribution={totalContribution} />
        );
      })()}

      {/* Share card */}
      <div className="rounded-2xl mb-6 overflow-hidden border border-slate-100 shadow-sm">
        <div className="bg-gradient-to-br from-teal-700 to-teal-900 px-6 pt-8 pb-6 text-white text-center">
          <p className="text-xs uppercase tracking-widest text-teal-300 mb-3">My microplastic risk score</p>
          <div className="text-7xl font-extrabold tabular-nums mb-1">{result.riskScore}</div>
          <p className="text-teal-200 text-sm mb-3">out of 100</p>
          <div className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
            result.exposureTier === "Low" ? "bg-emerald-400/20 text-emerald-200" :
            result.exposureTier === "Moderate" ? "bg-amber-400/20 text-amber-200" :
            result.exposureTier === "Very High" ? "bg-red-300/30 text-red-100" :
            "bg-red-400/20 text-red-200"
          }`}>
            {result.exposureTier} exposure
          </div>
          <p className="text-xs text-teal-400">bodyburdenlab.com</p>
        </div>
        <div className="bg-white px-6 py-4">
          <button
            onClick={handleShare}
            className="w-full text-center bg-slate-900 text-white font-semibold py-2.5 rounded-full text-sm hover:bg-slate-700 transition-colors"
          >
            {copied ? "Copied!" : "Share your result"}
          </button>
          <p className="text-xs text-slate-400 text-center mt-2">Opens share menu on mobile · copies link on desktop</p>
        </div>
      </div>

      {/* Health context */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-6 shadow-sm">
        <h2 className="font-semibold text-slate-900 mb-1">What this means for your health</h2>
        <p className="text-xs text-slate-400 mb-4">Based on peer-reviewed research — detection does not prove causation</p>
        <div className="flex flex-col gap-3 text-sm text-slate-600 leading-relaxed">
          {result.exposureTier === "Low" && (
            <>
              <p>Your exposure is below the estimated average. Microplastics have been confirmed in human blood, lung tissue, and organs regardless of exposure level — there is no threshold below which accumulation stops entirely.</p>
              <p>At lower exposure levels, the current evidence does not clearly establish harm. The most important finding from lower-exposure groups is that accumulation occurs over a lifetime, making ongoing reduction worthwhile even at modest current levels.</p>
            </>
          )}
          {result.exposureTier === "Moderate" && (
            <>
              <p>Your exposure is around the estimated average. Research has confirmed microplastics in the blood of 77% of healthy adults (Leslie et al., 2022) and in lung tissue of 85% of patients tested (Jenner et al., 2022) — suggesting this level of exposure is consistent with detectable tissue accumulation.</p>
              <p>The most significant study at typical population exposure levels — Marfella et al. (2024) in the New England Journal of Medicine — found microplastics in the arterial plaque of 58% of cardiovascular patients and linked their presence to a 4.5× higher risk of heart attack or stroke. This was an observational study and cannot prove causation.</p>
            </>
          )}
          {result.exposureTier === "High" && (
            <>
              <p>Your exposure is above the estimated average. Studies have consistently found that microplastics accumulate in human organs including the brain, lungs, liver, and arterial plaque — with concentrations that have risen measurably over just the past decade (Nihart et al., Nature Medicine, 2025).</p>
              <p>At higher exposure levels, the research suggests the most actionable risk areas are cardiovascular health and reproductive health. The Marfella et al. (2024) NEJM study found people with microplastics in arterial plaque had a 4.5× higher risk of cardiovascular events. Zhang et al. (2024) found higher polymer exposure correlated with lower sperm count and motility in 100% of male samples tested.</p>
              <p className="text-xs text-slate-400">These are observational findings. Causation has not been established. See our <a href="/methodology" className="underline hover:text-teal-700">methodology page</a> for full citations.</p>
            </>
          )}
          {result.exposureTier === "Very High" && (
            <>
              <p>Your score places you in the highest-exposure bracket. This is typically driven by a combination of daily microwaving in plastic, regular use of plastic tea bags, and reliance on bottled water — also the habits with the largest reduction potential.</p>
              <p>At this level, the research on microplastic accumulation in human organs is most directly relevant. Nihart et al. (2025, Nature Medicine) found that microplastic concentrations in human brain tissue increased by approximately 50% between 2016 and 2024. The Marfella et al. (2024) NEJM cardiovascular findings — a 4.5× elevated risk of heart attack or stroke in patients with detectable arterial microplastics — apply with particular force at higher cumulative exposure levels.</p>
              <p className="text-xs text-slate-400">These are observational findings. Causation has not been established. See our <a href="/methodology" className="underline hover:text-teal-700">methodology page</a> for full citations.</p>
            </>
          )}
        </div>
      </div>

      {/* Nanoplastics callout */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-6">
        <div className="flex gap-3 items-start">
          <span className="text-amber-500 text-xl flex-shrink-0">⚠</span>
          <div>
            <p className="text-base font-bold text-slate-900 mb-2">Your true exposure is likely far higher</p>
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              This score is based on microplastic exposure only. Nanoplastic particles — far smaller, more numerous, and more likely to penetrate cells and tissues — are not included because consistent measurement data across sources does not yet exist.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-2">
              For context: microwaving polypropylene containers releases up to <strong>2.11 billion nanoplastic particles</strong> per cm² in a single 3-minute session alongside the microplastics counted here — none of those nanoplastics appear in your score.
            </p>
            <p className="text-xs text-slate-400">Hussain et al., Environmental Science & Technology, 2023</p>
          </div>
        </div>
      </div>

      {/* Top 3 changes */}
      {reductionOpportunities.length > 0 && (
        <div className="bg-slate-900 rounded-2xl p-6 mb-6">
          <h2 className="font-semibold text-white mb-1">Your top {reductionOpportunities.length} changes</h2>
          <p className="text-xs text-slate-400 mb-5">The single habits that would reduce your risk score the most</p>
          <ol className="flex flex-col gap-4">
            {reductionOpportunities.map((r, i) => (
              <li key={r.question.id} className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <p className="text-sm font-semibold text-white mb-1">{r.question.question}</p>
                {r.tip && <p className="text-xs text-slate-400 leading-relaxed">{r.tip}</p>}
              </li>
            ))}
          </ol>
        </div>
      )}

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
