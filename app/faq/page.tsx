import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microplastics FAQ — Common Questions Answered",
  description:
    "Answers to the most common questions about microplastics — what they are, whether they're dangerous, how to reduce exposure, and what the science actually shows.",
};

const faqs = [
  {
    q: "Are microplastics dangerous?",
    a: "The honest answer is: the research is concerning but causation in humans has not been fully established. What is confirmed is that microplastics are now found in human blood, lungs, brain tissue, arterial plaque, testicular tissue, and placenta. The most significant study to date — Marfella et al. (2024) in the New England Journal of Medicine — found that people with microplastics in their arterial plaque had a 4.5× higher risk of heart attack, stroke, or death over three years. However, this was an observational study and cannot prove that microplastics directly caused these events. The scientific consensus is that presence is well-established, health effects are strongly suspected, and causation is still being investigated.",
  },
  {
    q: "Can you remove microplastics from your body?",
    a: "No proven method currently exists. The body's lymphatic system and immune cells can clear some particles over time, but microplastics have been found in tissues including the brain and lungs at concentrations that suggest significant accumulation. No supplement, treatment, sauna, or dietary protocol has been shown in peer-reviewed human trials to remove microplastics from body tissues. The most effective strategy is reducing ongoing intake, which slows accumulation rather than reversing it.",
  },
  {
    q: "What exactly are microplastics?",
    a: "Microplastics are plastic particles smaller than 5 millimetres (5,000 microns). They originate from two sources: primary microplastics, which are manufactured at small sizes (such as microbeads in cosmetics or plastic pellets used in industrial processes), and secondary microplastics, which form when larger plastic items break down through UV exposure, weathering, and mechanical action. The smallest microplastics — below 1 micron — are sometimes called nanoplastics, which are studied separately due to their ability to cross cellular barriers more easily.",
  },
  {
    q: "Are nanoplastics more dangerous than microplastics?",
    a: "Potentially yes, for two reasons. First, smaller particles can cross cellular barriers — including the blood-brain barrier — more readily than larger ones. Second, the higher surface-area-to-volume ratio of nanoplastics means more potential for chemical interaction with biological tissues. However, nanoplastics are extremely difficult to detect and measure reliably, which means they are significantly understudied compared to microplastics. Our calculator counts microplastic particles only (≥1 micron) and explicitly excludes nanoplastics — meaning real-world exposure is likely considerably higher than the figures we show.",
  },
  {
    q: "Does boiling water remove microplastics?",
    a: "Yes — for hard tap water, quite effectively. A 2024 study by Yu et al. in Environmental Science & Technology Letters found that simply boiling hard tap water removed 80–90% of free-floating microplastics and nanoplastics (0.1–150 µm) by causing calcium carbonate to encapsulate and precipitate the particles. Even soft water boiling removed approximately 25%. This is one of the cheapest and most accessible interventions in the literature. Allowing the boiled water to cool and then pouring it carefully — leaving the sediment behind — maximises the effect.",
  },
  {
    q: "Does a water filter remove microplastics?",
    a: "It depends on the filter type. Reverse osmosis removes more than 99% of microplastics — the most effective technology available for home use. Activated carbon block filters (such as Berkey or ZeroWater) remove 70–90% of larger particles but are less effective for particles below 10 microns. Standard pitcher filters (Brita-style) have inconsistent performance for smaller particles. Bottled water is not a solution — multiple studies have found it contains significantly more microplastics than filtered tap water, with contamination originating from the PET bottle and cap.",
  },
  {
    q: "Are some people more at risk than others?",
    a: "Yes. Children have higher microplastic intake relative to body weight than adults, partly because of higher food and water consumption per kilogram of body weight and greater time spent on floors where microplastic fibres settle. People in urban and industrial areas are exposed to higher airborne microplastic concentrations. Heavy seafood consumers — particularly those who eat shellfish regularly — have meaningfully higher intake, as shellfish are consumed whole including their digestive tracts where microplastics accumulate. People who regularly microwave food in plastic containers have significantly elevated kitchen-based exposure.",
  },
  {
    q: "How long have humans been consuming microplastics?",
    a: "Since mass plastic production began in the 1950s, though concentrations have increased dramatically over time. A 2024 Nature Medicine study comparing brain tissue from 2016 and 2024 found microplastic concentrations had risen significantly in just eight years — reflecting the rapid increase in global plastic production and the accumulating breakdown of plastics already in the environment. There is no meaningful baseline of 'zero' microplastic exposure for any living human.",
  },
  {
    q: "What is the difference between microplastics and PFAS?",
    a: "They are different things. Microplastics are physical particles — tiny fragments of plastic polymers. PFAS (per- and polyfluoroalkyl substances, sometimes called 'forever chemicals') are chemical compounds used in non-stick coatings, waterproof fabrics, food packaging, and firefighting foam. Both are pervasive environmental contaminants found in human tissue, and both are active areas of health research. PFAS are chemical pollutants that disrupt hormones and other biological processes; microplastics are physical particles that accumulate in organs. Some plastic items — particularly non-stick cookware — can be a source of both.",
  },
  {
    q: "How does the Body Burden calculator work?",
    a: "The calculator asks 13 questions about your daily habits covering the major documented microplastic exposure pathways: drinking water, food preparation, diet, clothing, and indoor air. Each answer maps to a weekly particle estimate derived from a specific peer-reviewed study. The estimates are expressed in microplastic particles per week (particles ≥1 micron) and are summed to give a total. Results are compared to the 74,000–121,000 particles/year figure from Cox et al. (2019), which researchers note is a conservative underestimate. The full methodology and all source studies are documented on our methodology page.",
  },
  {
    q: "Why doesn't the calculator include nanoplastics?",
    a: "Because the measurement methods used across studies are inconsistent, making it impossible to reliably aggregate figures from different sources. Microplastics (≥1 micron) can be detected using Fourier-transform infrared spectroscopy (FTIR) with reasonable consistency. Nanoplastics require different detection methods, and particle counts vary enormously depending on the technique used — making study-to-study comparisons unreliable. We would rather show you a conservative, defensible number than include figures that cannot be meaningfully compared. Research suggests nanoplastics may be present at 10 to 100 times higher concentrations than microplastics, so your true exposure is likely significantly higher than what we calculate.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <div className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          FAQ
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Common questions about microplastics
        </h1>
        <p className="text-slate-500 leading-relaxed">
          Answers based on the current peer-reviewed evidence — including honest acknowledgement of what the science does and doesn't yet show.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-slate-100">
        {faqs.map((faq, i) => (
          <div key={i} className="py-7">
            <h2 className="text-base font-semibold text-slate-900 mb-3">{faq.q}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-teal-50 border border-teal-100 rounded-2xl p-6 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-0.5">Find out your personal exposure</p>
          <p className="text-xs text-slate-500">13 questions · 2 minutes · peer-reviewed science</p>
        </div>
        <Link
          href="/calculator"
          className="bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-teal-800 transition-colors whitespace-nowrap"
        >
          Take the calculator →
        </Link>
      </div>
    </div>
  );
}
