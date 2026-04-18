"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/lib/questions";

export default function CalculatorClient() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number | null>(null);

  const question = QUESTIONS[currentQ];
  const total = QUESTIONS.length;
  const progress = ((currentQ) / total) * 100;
  const isLast = currentQ === total - 1;

  function handleSelect(idx: number) {
    setSelected(idx);
  }

  function handleNext() {
    if (selected === null) return;
    const updated = { ...answers, [question.id]: selected };
    setAnswers(updated);

    if (isLast) {
      // Save to localStorage and navigate to results
      localStorage.setItem("bbl_answers", JSON.stringify(updated));
      router.push("/results");
    } else {
      setCurrentQ(currentQ + 1);
      // Pre-fill with previous answer if returning
      const nextQ = QUESTIONS[currentQ + 1];
      setSelected(updated[nextQ.id] !== undefined ? updated[nextQ.id] : null);
    }
  }

  function handleBack() {
    if (currentQ === 0) return;
    const prev = currentQ - 1;
    setCurrentQ(prev);
    const prevId = QUESTIONS[prev].id;
    setSelected(answers[prevId] !== undefined ? answers[prevId] : null);
  }

  // Restore selected when going back
  const displaySelected =
    selected !== null
      ? selected
      : answers[question.id] !== undefined
      ? answers[question.id]
      : null;

  return (
    <div className="w-full max-w-xl">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-slate-400 font-medium">
            Question {currentQ + 1} of {total}
          </span>
          <span className="text-xs text-slate-400">{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 sm:p-8">
        <div className="mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
            {question.category === "water"
              ? "Drinking Water"
              : question.category === "kitchen"
              ? "Kitchen & Cooking"
              : question.category === "food"
              ? "Food"
              : "Air & Clothing"}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6 leading-snug">
          {question.question}
        </h2>

        <div className="flex flex-col gap-2.5">
          {question.options.map((option, idx) => {
            const isChosen = displaySelected === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all ${
                  isChosen
                    ? "border-teal-600 bg-teal-50 text-teal-800 shadow-sm"
                    : "border-slate-200 text-slate-700 hover:border-teal-300 hover:bg-slate-50"
                }`}
              >
                <span className={`inline-block w-5 h-5 rounded-full border-2 mr-3 align-middle flex-shrink-0 transition-colors ${
                  isChosen ? "border-teal-600 bg-teal-600" : "border-slate-300"
                }`} />
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="flex gap-3 mt-7">
          {currentQ > 0 && (
            <button
              onClick={handleBack}
              className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              ← Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={displaySelected === null}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
              displaySelected !== null
                ? "bg-teal-700 text-white hover:bg-teal-800 shadow-sm"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
            }`}
          >
            {isLast ? "See my results →" : "Next →"}
          </button>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 mt-5">
        No account needed. Results are calculated in your browser.
      </p>
    </div>
  );
}
