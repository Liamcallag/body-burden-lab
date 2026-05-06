"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS, CATEGORY_LABELS } from "@/lib/questions";

export default function CalculatorClient() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number | null>(null);

  const question = QUESTIONS[currentQ];
  const total = QUESTIONS.length;
  const isLast = currentQ === total - 1;
  const progress = ((currentQ + 1) / total) * 100;

  function trackEvent(name: string, params?: Record<string, string | number>) {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", name, params);
    }
  }

  function handleSelect(idx: number) {
    setSelected(idx);
    const updated = { ...answers, [question.id]: idx };
    setAnswers(updated);

    setTimeout(() => {
      if (isLast) {
        localStorage.setItem("bbl_answers", JSON.stringify(updated));
        trackEvent("calculator_completed");
        router.push("/results");
      } else {
        const nextIndex = currentQ + 1;
        setCurrentQ(nextIndex);
        const nextQ = QUESTIONS[nextIndex];
        setSelected(updated[nextQ.id] !== undefined ? updated[nextQ.id] : null);
        trackEvent("calculator_question_viewed", { question_number: nextIndex + 1, question_id: nextQ.id });
      }
    }, 300);
  }

  function handleBack() {
    if (currentQ === 0) return;
    const prev = currentQ - 1;
    setCurrentQ(prev);
    const prevId = QUESTIONS[prev].id;
    setSelected(answers[prevId] !== undefined ? answers[prevId] : null);
  }

  const displaySelected = selected !== null ? selected : answers[question.id] ?? null;
  const categoryLabel = CATEGORY_LABELS[question.category];

  /* ── Mobile layout (unchanged) ── */
  const mobileLayout = (
    <div className="md:hidden w-full max-w-xl">
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

      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="h-1 bg-teal-600 w-full" />
        <div className="p-6">
          <div className="mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">{categoryLabel}</span>
          </div>
          <h2 className="text-xl font-semibold text-slate-900 mb-6 leading-snug">{question.question}</h2>
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
          <div className="mt-7">
            <button onClick={handleBack} className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
              ← Back
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 mt-5">
        No account needed. Results are calculated in your browser.
      </p>
    </div>
  );

  /* ── Desktop layout (full screen) ── */
  const desktopLayout = (
    <div className="hidden md:flex fixed inset-x-0 bottom-0 top-[72px] z-40 flex-col bg-slate-900">
      {/* Progress bar — full width at top of overlay */}
      <div className="h-0.5 bg-slate-700 w-full flex-shrink-0">
        <div
          className="h-full bg-teal-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-12 py-5 flex-shrink-0">
        <span className="text-sm text-slate-400 tabular-nums">
          {currentQ + 1} <span className="text-slate-600">/ {total}</span>
        </span>
        <span className="text-sm text-slate-400 tabular-nums">{Math.round(progress)}%</span>
      </div>

      {/* Main content — vertically centred */}
      <div className="flex-1 flex items-center px-12 gap-16 min-h-0">
        {/* Left — question */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-4">{categoryLabel}</p>
          <h2 className="text-4xl xl:text-5xl font-bold text-white leading-tight">{question.question}</h2>
        </div>

        {/* Right — options */}
        <div className="w-[400px] xl:w-[460px] flex-shrink-0 flex flex-col gap-3">
          {question.options.map((option, idx) => {
            const isChosen = displaySelected === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all flex items-center gap-3 ${
                  isChosen
                    ? "border-teal-500 bg-teal-500/10 text-teal-300"
                    : "border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800"
                }`}
              >
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${
                  isChosen ? "border-teal-500 bg-teal-500 text-slate-900" : "border-slate-600 text-slate-500"
                }`}>
                  {idx + 1}
                </span>
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-12 py-5 border-t border-slate-800 flex-shrink-0">
        <button
          onClick={handleBack}
          className={`text-sm transition-colors ${currentQ === 0 ? "text-slate-700 cursor-default" : "text-slate-400 hover:text-white"}`}
          disabled={currentQ === 0}
        >
          ← Previous
        </button>
        <p className="text-xs text-slate-600">Click an option to continue</p>
      </div>
    </div>
  );

  return (
    <>
      {mobileLayout}
      {desktopLayout}
    </>
  );
}
