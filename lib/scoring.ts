import { QUESTIONS, CATEGORY_LABELS, BENCHMARKS, type Category } from "./questions";

export interface AnswerMap {
  [questionId: string]: number; // selected option index
}

export interface CategoryScore {
  category: Category;
  label: string;
  particles: number;
}

export interface ScoreResult {
  weeklyTotal: number;
  annualTotal: number;
  categories: CategoryScore[];
  topSources: CategoryScore[];
  comparisonText: string;
  comparisonPercent: number; // relative to Cox et al. midpoint (97,500/yr)
}

export function calculateScore(answers: AnswerMap): ScoreResult {
  let weeklyTotal = 0;
  const categoryTotals: Partial<Record<Category, number>> = {};

  for (const question of QUESTIONS) {
    const idx = answers[question.id] ?? 0;
    const value = question.options[idx]?.value ?? 0;
    weeklyTotal += value;
    categoryTotals[question.category] = (categoryTotals[question.category] ?? 0) + value;
  }

  const annualTotal = weeklyTotal * 52;

  const categories: CategoryScore[] = (
    Object.entries(categoryTotals) as [Category, number][]
  )
    .map(([category, particles]) => ({
      category,
      label: CATEGORY_LABELS[category],
      particles,
    }))
    .sort((a, b) => b.particles - a.particles);

  const topSources = categories.slice(0, 3);

  // Compare to Cox et al. midpoint: ~97,500/year
  const midpoint = 97500;
  const comparisonPercent = Math.round((annualTotal / midpoint) * 100);

  let comparisonText: string;
  if (annualTotal < midpoint * 0.5) {
    comparisonText = `significantly lower than`;
  } else if (annualTotal < midpoint * 0.85) {
    comparisonText = `lower than`;
  } else if (annualTotal <= midpoint * 1.15) {
    comparisonText = `roughly in line with`;
  } else if (annualTotal <= midpoint * 2) {
    comparisonText = `higher than`;
  } else {
    comparisonText = `significantly higher than`;
  }

  return {
    weeklyTotal,
    annualTotal,
    categories,
    topSources,
    comparisonText,
    comparisonPercent,
  };
}

export function formatNumber(n: number): string {
  if (n >= 1_000_000) {
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + " million";
  }
  if (n >= 1_000) {
    return n.toLocaleString();
  }
  return n.toString();
}

export { BENCHMARKS };
