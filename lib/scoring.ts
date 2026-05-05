import { QUESTIONS, CATEGORY_LABELS, type Category } from "./questions";

export interface AnswerMap {
  [questionId: string]: number; // selected option index
}

export interface CategoryScore {
  category: Category;
  label: string;
  score: number;      // weighted score for this category
  maxScore: number;   // max possible weighted score for this category
  percentage: number; // score / maxScore * 100 — used for bar width
}

export interface ScoreResult {
  riskScore: number;   // 0–100 normalised
  exposureTier: "Low" | "Moderate" | "High" | "Very High";
  categories: CategoryScore[];
  topSources: CategoryScore[];
}

export type ExposureTier = ScoreResult["exposureTier"];

export function calculateScore(answers: AnswerMap): ScoreResult {
  let weightedTotal = 0;
  let maxPossible = 0;

  const categoryWeightedTotals: Partial<Record<Category, number>> = {};
  const categoryMaxTotals: Partial<Record<Category, number>> = {};

  for (const question of QUESTIONS) {
    const idx = answers[question.id] ?? 0;
    const riskScore = question.options[idx]?.riskScore ?? 0;
    const maxOptionScore = Math.max(...question.options.map((o) => o.riskScore));

    const contribution = riskScore * question.weight;
    const maxContribution = maxOptionScore * question.weight;

    weightedTotal += contribution;
    maxPossible += maxContribution;

    categoryWeightedTotals[question.category] =
      (categoryWeightedTotals[question.category] ?? 0) + contribution;
    categoryMaxTotals[question.category] =
      (categoryMaxTotals[question.category] ?? 0) + maxContribution;
  }

  const riskScore = maxPossible > 0 ? Math.round((weightedTotal / maxPossible) * 100) : 0;

  const exposureTier: ExposureTier =
    riskScore <= 25 ? "Low" :
    riskScore <= 50 ? "Moderate" :
    riskScore <= 75 ? "High" :
    "Very High";

  const categories: CategoryScore[] = (
    Object.entries(categoryWeightedTotals) as [Category, number][]
  )
    .map(([category, score]) => {
      const maxScore = categoryMaxTotals[category] ?? 0;
      return {
        category,
        label: CATEGORY_LABELS[category],
        score,
        maxScore,
        percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0,
      };
    })
    .sort((a, b) => b.percentage - a.percentage);

  const topSources = categories.slice(0, 3);

  return {
    riskScore,
    exposureTier,
    categories,
    topSources,
  };
}

export function formatRiskScore(score: number): string {
  if (score <= 25) return "Low";
  if (score <= 50) return "Moderate";
  if (score <= 75) return "High";
  return "Very High";
}
