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

// Colors assigned by rank (largest slice → most alarming, then distinct hues)
const RANK_COLORS = ["#ef4444", "#3b82f6", "#10b981", "#8b5cf6"];

const PRODUCT_SWAPS: Record<string, { label: string; url: string }> = {
  microwave:    { label: "Shop glass containers", url: "https://www.amazon.com/s?k=glass+food+storage+containers" },
  tea:          { label: "Shop loose leaf tea", url: "https://www.amazon.com/s?k=loose+leaf+tea+infuser" },
  water:        { label: "Shop water filters", url: "https://www.amazon.com/s?k=clearly+filtered+water+pitcher" },
  nonstick:     { label: "Shop stainless pans", url: "https://www.amazon.com/s?k=stainless+steel+frying+pan" },
  cuttingboard: { label: "Shop wood boards", url: "https://www.amazon.com/s?k=bamboo+cutting+board" },
  utensils:     { label: "Shop wood utensils", url: "https://www.amazon.com/s?k=wooden+cooking+utensils" },
  hotdrinks:    { label: "Shop reusable cups", url: "https://www.amazon.com/s?k=reusable+travel+coffee+cup" },
  airquality:   { label: "Shop HEPA purifiers", url: "https://www.amazon.com/s?k=hepa+air+purifier" },
  clothing:     { label: "Shop laundry bags", url: "https://www.amazon.com/s?k=microfiber+laundry+bag+washing" },
};

function PieChart({ groups, selected, onSelect, score, tier, tierColor, colorsMap }: {
  groups: CategoryGroup[];
  selected: Category | null;
  onSelect: (cat: Category) => void;
  score: number;
  tier: string;
  tierColor: string;
  colorsMap: Record<string, string>;
}) {
  const cx = 200, cy = 200, r = 168, holeR = 96;
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

    // Pop-out direction vector (unit vector × 18px)
    const popX = Math.cos(midAngle) * 18;
    const popY = Math.sin(midAngle) * 18;

    const d = [
      `M ${x1} ${y1}`,
      `A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`,
      `L ${ix1} ${iy1}`,
      `A ${holeR} ${holeR} 0 ${large} 0 ${ix2} ${iy2}`,
      "Z",
    ].join(" ");

    return { cat, catPct, d, lx, ly, popX, popY, color: colorsMap[cat] };
  });

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[320px] mx-auto">
      {slices.map(({ cat, catPct, d, lx, ly, popX, popY, color }) => {
        const isSelected = selected === cat;
        const dimmed = selected !== null && !isSelected;
        return (
          <g
            key={cat}
            onClick={() => onSelect(cat)}
            style={{
              cursor: "pointer",
              transform: isSelected ? `translate(${popX}px, ${popY}px)` : "translate(0px, 0px)",
              transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <path
              d={d}
              fill={color}
              style={{
                opacity: dimmed ? 0.3 : 1,
                transition: "opacity 0.25s ease",
              }}
            />
            {catPct >= 7 && (
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="20"
                fontWeight="800"
                fill="white"
                style={{ pointerEvents: "none", opacity: dimmed ? 0.35 : 1, transition: "opacity 0.25s ease" }}
              >
                {catPct}%
              </text>
            )}
          </g>
        );
      })}

      {/* Center content */}
      {selected ? (() => {
        const g = groups.find(g => g.cat === selected);
        return g ? (
          <>
            <text x={cx} y={cy - 10} textAnchor="middle" fontSize="12" fill="#94a3b8" fontWeight="500">
              {CATEGORY_LABELS[selected]}
            </text>
            <text x={cx} y={cy + 22} textAnchor="middle" fontSize="32" fill={colorsMap[selected]} fontWeight="800">
              {g.catPct}%
            </text>
          </>
        ) : null;
      })() : (
        <>
          <text x={cx} y={cy - 26} textAnchor="middle" fontSize="10" fill="#94a3b8" fontWeight="600" letterSpacing="1.5">
            YOUR SCORE
          </text>
          <text x={cx} y={cy + 22} textAnchor="middle" fontSize="56" fill={tierColor} fontWeight="800">
            {score}
          </text>
          <text x={cx} y={cy + 44} textAnchor="middle" fontSize="11" fill={tierColor} fontWeight="700" letterSpacing="1">
            {tier.toUpperCase()}
          </text>
        </>
      )}
    </svg>
  );
}

function DetailPanel({ activeGroup, colorsMap, onClose }: {
  activeGroup: CategoryGroup;
  colorsMap: Record<string, string>;
  onClose: () => void;
}) {
  const color = colorsMap[activeGroup.cat];
  return (
    <div className="rounded-t-2xl sm:rounded-2xl overflow-hidden" style={{ background: "#f0f7f5", animation: "fadeSlideIn 0.25s ease" }}>
      {/* Header */}
      <div className="px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
          <h3 className="font-bold text-slate-800">{CATEGORY_LABELS[activeGroup.cat]}</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: color + "22", color }}>
            {activeGroup.catPct}% of score
          </span>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl leading-none sm:hidden">×</button>
        </div>
      </div>
      {/* Habit cards — white pills on mint background */}
      <div className="grid grid-cols-2 gap-2 px-3 pb-4">
        {activeGroup.items.map(({ question, selected }) => (
          <div key={question.id} className="bg-white rounded-xl px-3.5 py-3 shadow-sm">
            <p className="text-xs font-semibold text-slate-800 leading-snug mb-0.5">{question.resultLabel}</p>
            <p className="text-[11px] text-slate-400 mb-2 italic">"{selected.label}"</p>
            {question.studyCallout && (
              <div className="flex flex-col gap-1">
                <p className="text-xs text-slate-600">
                  <span className="font-extrabold text-slate-900 tabular-nums">{question.studyCallout.value} </span>
                  {question.studyCallout.unit}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {question.studyCallout.unitContext && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                      {question.studyCallout.unitContext}
                    </span>
                  )}
                  {question.studyCallout.url ? (
                    <a href={question.studyCallout.url} target="_blank" rel="noopener noreferrer"
                      className="text-[11px] font-semibold hover:underline whitespace-nowrap" style={{ color }}>
                      View study →
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-400">Est.</span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CategorySection({ groups, score, tier, tierColor, colorsMap }: {
  groups: CategoryGroup[];
  totalContribution: number;
  score: number;
  tier: string;
  tierColor: string;
  colorsMap: Record<string, string>;
}) {
  const [selectedCat, setSelectedCat] = useState<Category | null>(null);

  function handleSliceClick(cat: Category) {
    setSelectedCat((prev) => (prev === cat ? null : cat));
  }

  function handleClose() { setSelectedCat(null); }

  const activeGroup = groups.find((g) => g.cat === selectedCat) ?? null;

  return (
    <div className="mb-12">
      {/* Desktop: side-by-side. Mobile: chart + legend, detail as bottom sheet */}
      <div className="flex flex-col sm:flex-row gap-6 items-start">

        {/* Left: chart + legend */}
        <div className="flex flex-col items-center w-full sm:w-auto sm:flex-shrink-0">
          <PieChart groups={groups} selected={selectedCat} onSelect={handleSliceClick} score={score} tier={tier} tierColor={tierColor} colorsMap={colorsMap} />
          <div className="flex flex-col gap-1.5 mt-4 w-full max-w-[300px]">
            {groups.map(({ cat, catPct }) => {
              const isActive = selectedCat === cat;
              const isDimmed = selectedCat !== null && !isActive;
              return (
                <button key={cat} onClick={() => handleSliceClick(cat)}
                  style={{ borderColor: isActive ? colorsMap[cat] : undefined, backgroundColor: isActive ? colorsMap[cat] + "10" : undefined, opacity: isDimmed ? 0.4 : 1, transition: "all 0.2s ease" }}
                  className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-sm w-full ${isActive ? "shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"}`}
                >
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: colorsMap[cat] }} />
                  <span className={`flex-1 text-left ${isActive ? "font-semibold text-slate-900" : "text-slate-600"}`}>{CATEGORY_LABELS[cat]}</span>
                  <span className="font-bold tabular-nums text-xs" style={{ color: isActive ? colorsMap[cat] : "#94a3b8" }}>{catPct}%</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: detail panel — desktop only */}
        <div className="hidden sm:block flex-1 w-full min-h-[320px]">
          {activeGroup ? (
            <DetailPanel activeGroup={activeGroup} colorsMap={colorsMap} onClose={handleClose} />
          ) : (
            <div className="h-full min-h-[320px] flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 text-center p-8">
              <p className="text-sm font-medium text-slate-400">Select a slice</p>
              <p className="text-xs text-slate-300 mt-1">to see what's driving that category</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile bottom sheet */}
      {activeGroup && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/30 z-40 sm:hidden" onClick={handleClose} style={{ animation: "fadeIn 0.2s ease" }} />
          {/* Sheet */}
          <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden rounded-t-2xl overflow-hidden max-h-[75vh] overflow-y-auto" style={{ animation: "slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}>
            <DetailPanel activeGroup={activeGroup} colorsMap={colorsMap} onClose={handleClose} />
          </div>
        </>
      )}

      <style>{`
        @keyframes fadeSlideIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes slideUp { from { transform:translateY(100%); } to { transform:translateY(0); } }
      `}</style>
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
    .slice(0, 5);

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

      {/* Minimal page label */}
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
        Your microplastic risk score
      </p>

      {/* Ranked question contributions */}
      {(() => {
        const allItems = QUESTIONS.map((q) => {
          const idx = answers[q.id] ?? 0;
          const selected = q.options[idx];
          const contribution = (selected?.riskScore ?? 0) * q.weight;
          return { question: q, selected, contribution };
        }).filter((r) => r.contribution > 0);

        const totalContribution = allItems.reduce((sum, r) => sum + r.contribution, 0) || 1;

        // Group by category
        const categoryOrder: Category[] = ["kitchen", "water", "food", "air"];
        const rawGroups = categoryOrder.map((cat) => {
          const items = allItems
            .filter((r) => r.question.category === cat)
            .sort((a, b) => b.contribution - a.contribution);
          const catTotal = items.reduce((sum, r) => sum + r.contribution, 0);
          const exact = (catTotal / totalContribution) * 100;
          return { cat, items, exact, catPct: Math.floor(exact) };
        }).filter((g) => g.items.length > 0);

        // Largest remainder method — ensures percentages always sum to 100
        const remainder = 100 - rawGroups.reduce((s, g) => s + g.catPct, 0);
        const groups = rawGroups
          .map((g) => ({ ...g, frac: g.exact - g.catPct }))
          .sort((a, b) => b.frac - a.frac)
          .map((g, i) => ({ ...g, catPct: g.catPct + (i < remainder ? 1 : 0) }))
          .sort((a, b) => b.catPct - a.catPct);

        if (groups.length === 0) return null;

        // Assign alarm colors by rank: largest slice = red, descending
        const colorsMap: Record<string, string> = {};
        groups.forEach((g, i) => { colorsMap[g.cat] = RANK_COLORS[i] ?? RANK_COLORS[RANK_COLORS.length - 1]; });

        return (
          <CategorySection
            groups={groups}
            totalContribution={totalContribution}
            score={result.riskScore}
            tier={result.exposureTier}
            tierColor={exposureLevel.barColor}
            colorsMap={colorsMap}
          />
        );
      })()}

      {/* ── Top 3 changes ── */}
      {reductionOpportunities.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-1">Your top {reductionOpportunities.length} changes</h2>
          <p className="text-sm text-slate-400 mb-5">The habits that would cut your score the most</p>
          <ol className="flex flex-col gap-3">
            {reductionOpportunities.map((r, i) => {
              const swap = PRODUCT_SWAPS[r.question.id];
              return (
                <li key={r.question.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="flex items-start gap-4 p-5">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 mb-1">{r.question.question}</p>
                      {r.tip && <p className="text-sm text-slate-500 leading-relaxed">{r.tip}</p>}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      {/* ── What the science says (scannable stats) ── */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-6 shadow-sm">
        <h2 className="font-bold text-slate-900 mb-1">What the science says</h2>
        <p className="text-xs text-slate-400 mb-5">Observational findings — detection does not prove causation</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-2xl font-extrabold text-slate-900 tabular-nums mb-1">77%</p>
            <p className="text-xs text-slate-600 leading-snug">of healthy adults tested had microplastics detected in their blood</p>
            <p className="text-[10px] text-slate-400 mt-2">Leslie et al., 2022</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-2xl font-extrabold text-slate-900 tabular-nums mb-1">4.5×</p>
            <p className="text-xs text-slate-600 leading-snug">higher risk of heart attack or stroke in patients with microplastics in arterial plaque</p>
            <p className="text-[10px] text-slate-400 mt-2">Marfella et al., NEJM 2024</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-2xl font-extrabold text-slate-900 tabular-nums mb-1">+50%</p>
            <p className="text-xs text-slate-600 leading-snug">increase in microplastic concentration in human brain tissue between 2016 and 2024</p>
            <p className="text-[10px] text-slate-400 mt-2">Nihart et al., Nature Medicine 2025</p>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-4">
          These are observational findings. Full citations on our <Link href="/methodology" className="underline hover:text-teal-700">methodology page</Link>.
        </p>
      </div>

      {/* ── Share card ── */}
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

      {/* ── Nanoplastics note ── */}
      <p className="text-xs text-slate-400 text-center mb-8 px-4">
        Note: this score covers microplastics only. Nanoplastics — smaller, more cell-penetrating — are not yet measurable across sources and are not included.{" "}
        <Link href="/methodology" className="underline hover:text-slate-600">Learn more</Link>
      </p>

      {/* ── CTAs ── */}
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
