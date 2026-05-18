import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology — How We Calculate Your Microplastic Exposure",
  description:
    "Full scientific methodology and source reference table for the Body Burden microplastics calculator. Every estimate is traceable to peer-reviewed research.",
  alternates: {
    canonical: "https://www.bodyburdenlab.com/methodology",
  },
  openGraph: {
    type: "website",
    title: "Methodology — How We Calculate Your Microplastic Exposure",
    description:
      "Full scientific methodology and source reference table for the Body Burden microplastics calculator. Every estimate is traceable to peer-reviewed research.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+Calculator+Methodology&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Methodology — How We Calculate Your Microplastic Exposure",
    description:
      "Full scientific methodology and source reference table for the Body Burden microplastics calculator. Every estimate is traceable to peer-reviewed research.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=Microplastics+Calculator+Methodology&tag=Science",
    ],
  },
};

const sources = [
  {
    author: "Mason et al.",
    year: 2018,
    title: "Synthetic Polymer Contamination in Bottled Water",
    journal: "Frontiers in Chemistry",
    doi: "10.3389/fchem.2018.00407",
    usedFor: "Drinking water question — 325 particles/litre average across 259 bottles from 11 brands in 9 countries (93% of bottles contaminated).",
    confidence: "High",
  },
  {
    author: "Hernandez et al.",
    year: 2019,
    title: "Plastic Teabags Release Billions of Microparticles and Nanoparticles into Tea",
    journal: "Environmental Science & Technology",
    doi: "10.1021/acs.est.9b02540",
    usedFor: "Plastic and nylon tea bag figures",
    confidence: "High",
  },
  {
    author: "Hussain et al.",
    year: 2023,
    title: "Assessing the Release of Microplastics and Nanoplastics from Plastic Containers and Reusable Food Pouches: Influence of Microwave Heating",
    journal: "Environmental Science & Technology",
    doi: "10.1021/acs.est.3c01942",
    usedFor: "Microwaving food in plastic containers",
    confidence: "Medium",
  },
  {
    author: "Chen et al.",
    year: 2022,
    title: "Release of microplastics from disposable cups in daily use",
    journal: "Science of the Total Environment",
    doi: "10.1016/j.scitotenv.2022.158606",
    usedFor: "Disposable cups question — 675–5,984 particles/litre released into hot beverages from PE-lined paper cups, tested across 90 commercial cup batches at 95°C.",
    confidence: "Medium",
  },
  {
    author: "Luo et al.",
    year: 2022,
    title: "Raman imaging for the identification of Teflon microplastics and nanoplastics released from non-stick cookware",
    journal: "Science of the Total Environment",
    doi: "10.1016/j.scitotenv.2022.158293",
    usedFor: "Non-stick pans question — ~9,100 PTFE particles released per cooking session from a single surface crack; up to 2,300,000 from a broken coating area.",
    confidence: "Medium",
  },
  {
    author: "Napper & Thompson",
    year: 2016,
    title: "Release of synthetic microplastic plastic fibres from domestic washing machines: Effects of fabric type, washing temperature and spin speed",
    journal: "Marine Pollution Bulletin",
    doi: "10.1016/j.marpolbul.2016.09.025",
    usedFor: "Synthetic clothing question — ~700,000 microplastic fibres released per wash cycle from a 6 kg acrylic load.",
    confidence: "Medium",
  },
  {
    author: "Yakovenko et al.",
    year: 2025,
    title: "Human exposure to PM10 microplastics in indoor air",
    journal: "PLoS ONE",
    doi: "10.1371/journal.pone.0328011",
    usedFor: "Indoor air quality and car commute questions — residential median 528 MPs/m³, car cabin median 2,238 MPs/m³. Measured using Raman spectroscopy in France.",
    confidence: "High",
  },
  {
    author: "Van Cauwenberghe & Janssen",
    year: 2014,
    title: "Microplastics in bivalves cultured for human consumption",
    journal: "Environmental Pollution",
    doi: "10.1016/j.envpol.2014.06.010",
    usedFor: "Mussels and oysters question — 0.36 particles/g in mussels, 0.47 particles/g in oysters (wet weight). Microplastics accumulate in digestive tissue consumed whole.",
    confidence: "High",
  },
  {
    author: "Karami et al.",
    year: 2017,
    title: "The presence of microplastics in commercial salts from different countries",
    journal: "Scientific Reports",
    doi: "10.1038/srep46173",
    usedFor: "Salt type question — Raman-confirmed microplastic counts across sea salt, rock salt and table salt. Most rigorous available methodology for salt MP analysis.",
    confidence: "High",
  },
  {
    author: "Yadav et al.",
    year: 2023,
    title: "Cutting Boards: An Overlooked Source of Microplastics in Human Food?",
    journal: "Environmental Science & Technology",
    doi: "10.1021/acs.est.3c00924",
    usedFor: "Cutting board question — microplastic release from plastic cutting boards during food preparation.",
    confidence: "Medium",
  },
  {
    author: "Bai et al.",
    year: 2022,
    title: "Microplastics in take-out food: Are we over taking it?",
    journal: "Environmental Research",
    doi: "10.1016/j.envres.2022.114390",
    usedFor: "Takeaway food question — mean of 639 MPs/kg across 146 takeaway food samples (rice, noodles, meat, beverages). Approximately 170–638 MPs per order.",
    confidence: "Medium",
  },
];

const referenceTable = [
  { question: "Drinking water", value: "~325 particles/litre (bottled water)", study: "Mason et al.", year: 2018, confidence: "High", doi: "10.3389/fchem.2018.00407" },
  { question: "Plastic tea bags", value: "11.6 billion particles/cup", study: "Hernandez et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b02540" },
  { question: "Disposable cups", value: "675–5,984 particles/litre released into hot beverages", study: "Chen et al.", year: 2022, confidence: "Medium", doi: "10.1016/j.scitotenv.2022.158606" },
  { question: "Microwaving in plastic", value: "4.22 million particles/cm² per use", study: "Hussain et al.", year: 2023, confidence: "Medium", doi: "10.1021/acs.est.3c01942" },
  { question: "Non-stick pans (scratched)", value: "~9,100 particles per cooking session (single crack); up to 2.3 million from broken coating", study: "Luo et al.", year: 2022, confidence: "Medium", doi: "10.1016/j.scitotenv.2022.158293" },
  { question: "Plastic cutting board", value: "14.5–79 million particles/year", study: "Yadav et al.", year: 2023, confidence: "Medium", doi: "10.1021/acs.est.3c00924" },
  { question: "Takeaway food", value: "170–638 particles/order", study: "Bai et al.", year: 2022, confidence: "Medium", doi: "10.1016/j.envres.2022.114390" },
  { question: "Mussels & oysters", value: "0.36 particles/g mussel tissue (~90 per 250g serving)", study: "Van Cauwenberghe & Janssen", year: 2014, confidence: "High", doi: "10.1016/j.envpol.2014.06.010" },
  { question: "Salt type", value: "Sea salt: 0–10 particles/kg; rock salt: lowest contamination", study: "Karami et al.", year: 2017, confidence: "High", doi: "10.1038/srep46173" },
  { question: "Synthetic clothing", value: "~700,000 fibres released per wash cycle (6 kg load)", study: "Napper & Thompson", year: 2016, confidence: "Medium", doi: "10.1016/j.marpolbul.2016.09.025" },
  { question: "Car commute", value: "2,238 particles/m³ (car cabin median) vs 528 particles/m³ (residential indoor)", study: "Yakovenko et al.", year: 2025, confidence: "Medium", doi: "10.1371/journal.pone.0328011" },
  { question: "Home air quality", value: "528 particles/m³ (residential indoor median)", study: "Yakovenko et al.", year: 2025, confidence: "Medium", doi: "10.1371/journal.pone.0328011" },
];

const confidenceBadge: Record<string, string> = {
  High: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-red-100 text-red-700",
  "N/A": "bg-slate-100 text-slate-500",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <div className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          Science & Sources
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Methodology</h1>
        <p className="text-slate-500 leading-relaxed max-w-2xl">
          Every figure in the Body Burden calculator is derived from peer-reviewed research. This page documents each data point, its source, and our confidence level.
        </p>
      </div>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">How the calculator works</h2>
        <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-3">
          <p>
            The calculator presents 12 questions covering the major documented pathways for human microplastic exposure: drinking water, food preparation, diet, clothing, and indoor air. Each question is linked to a peer-reviewed study that measured microplastic release or concentration for that specific source.
          </p>
          <p>
            Because each study measures things differently — particles per litre, per gram, per wash cycle, per cooking session — we do not attempt to convert everything into a single weekly total. Instead, the calculator uses each answer to generate a relative risk score, weighted by the significance of that exposure pathway. The full reference table below shows the measured values from each source study with their original units.
          </p>
          <p>
            Where a single high-quality study exists for a particular pathway (e.g. plastic tea bags, bottled water), we use that study directly. Where evidence is more limited, we note a lower confidence level. Individual exposure will vary depending on consumption volumes, product types, and geographic factors not captured by these questions. Figures should be understood as documented estimates, not precise measurements.
          </p>
        </div>

        {/* Nanoplastics note */}
        <div className="mt-4 rounded-xl border-l-4 border-teal-400 bg-teal-50/50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">Microplastics vs nanoplastics</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            This calculator covers microplastic particles only (1 micron – 5mm). Nanoplastics (&lt;1 micron) are excluded because consistent data does not yet exist across all exposure pathways covered here, making fair comparisons impossible. All scores should be understood as documented minimums — true total particle exposure including nanoplastics is likely significantly higher.
          </p>
        </div>
      </section>

      {/* Key sources */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Primary sources</h2>
        <div className="flex flex-col gap-4">
          {sources.map((s) => (
            <div key={s.doi} className="border border-slate-100 rounded-xl p-5 bg-white">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="flex-1">
                  <p className="font-medium text-slate-900 text-sm">{s.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {s.author} · {s.journal} · {s.year}
                  </p>
                  <p className="text-xs text-slate-600 mt-2">
                    <span className="font-medium">Used for:</span> {s.usedFor}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={`https://doi.org/${s.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-teal-700 hover:underline"
                  >
                    DOI →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Further reading */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Further reading</h2>
        <p className="text-sm text-slate-500 mb-5">Landmark studies on microplastics in the human body — supporting context for this calculator</p>
        <div className="flex flex-col gap-4">
          {[
            {
              author: "Marfella et al.",
              year: 2024,
              title: "Microplastics and Nanoplastics in Atheromas and Cardiovascular Events",
              journal: "New England Journal of Medicine",
              doi: "10.1056/NEJMoa2309822",
              note: "Found microplastics and nanoplastics in human arterial plaques. Patients with detectable particles had a 4.5x higher risk of heart attack, stroke, or death over 34 months.",
            },
            {
              author: "Leslie et al.",
              year: 2022,
              title: "Discovery and quantification of plastic particle pollution in human blood",
              journal: "Environment International",
              doi: "10.1016/j.envint.2022.107199",
              note: "First study to detect and quantify microplastic particles in human blood. Found plastic particles in 77% of people tested.",
            },
            {
              author: "Ragusa et al.",
              year: 2021,
              title: "Plasticenta: First evidence of microplastics in human placenta",
              journal: "Environment International",
              doi: "10.1016/j.envint.2020.106274",
              note: "First study to detect microplastics in human placental tissue, demonstrating that particles can cross the placental barrier.",
            },
            {
              author: "Cox et al.",
              year: 2019,
              title: "Human Consumption of Microplastics",
              journal: "Environmental Science & Technology",
              doi: "10.1021/acs.est.9b01517",
              note: "Estimated that the average American ingests 74,000–121,000 microplastic particles per year — and notes this is likely a significant underestimate as many exposure pathways remain unstudied.",
            },
            {
              author: "World Health Organization",
              year: 2019,
              title: "Microplastics in Drinking-Water",
              journal: "WHO Report",
              doi: null,
              url: "https://iris.who.int/handle/10665/326499",
              note: "Comprehensive global review of microplastic contamination in drinking water sources, treatment processes, and human health implications.",
            },
          ].map((s) => (
            <div key={s.title} className="border border-slate-100 rounded-xl p-5 bg-white">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="flex-1">
                  <p className="font-medium text-slate-900 text-sm">{s.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {s.author} · {s.journal} · {s.year}
                  </p>
                  <p className="text-xs text-slate-600 mt-2">{s.note}</p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={s.doi ? `https://doi.org/${s.doi}` : s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-teal-700 hover:underline"
                  >
                    {s.doi ? "DOI →" : "Report →"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reference table */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Full reference table</h2>
        <p className="text-sm text-slate-500 mb-2">Every question and the measured value from the source study. Units vary by question — some are per litre, per gram, per wash, or per session depending on what the study measured.</p>
        <div className="flex flex-col gap-1.5 mb-5 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <span className="inline-block font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">High</span>
            Direct from a single well-cited study
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">Medium</span>
            Involves some extrapolation to real-world conditions
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-2.5 pr-4 font-semibold text-slate-600 whitespace-nowrap">Question</th>
                <th className="py-2.5 pr-4 font-semibold text-slate-600">Measured value</th>
                <th className="py-2.5 pr-4 font-semibold text-slate-600 whitespace-nowrap">Study</th>
                <th className="py-2.5 font-semibold text-slate-600 whitespace-nowrap">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {referenceTable.map((row, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="py-2 pr-4 text-slate-700 whitespace-nowrap font-medium">{row.question}</td>
                  <td className="py-2 pr-4 text-slate-900 font-medium">{row.value}</td>
                  <td className="py-2 pr-4 text-slate-500 whitespace-nowrap">
                    {row.doi ? (
                      <a href={`https://doi.org/${row.doi}`} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                        {row.study}{row.year ? ` (${row.year})` : ""}
                      </a>
                    ) : (
                      <>{row.study}{row.year ? ` (${row.year})` : ""}</>
                    )}
                  </td>
                  <td className="py-2">
                    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${confidenceBadge[row.confidence]}`}>
                      {row.confidence}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Limitations */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Limitations and transparency</h2>
        <div className="text-sm text-slate-600 leading-relaxed space-y-3">
          <p>
            Microplastics research is a rapidly evolving field. Many exposure pathways remain unstudied, and study methodologies vary significantly. The figures presented here represent best estimates at the time of publication and will be updated as new research emerges.
          </p>
          <p>
            Some exposure pathways are not captured here: plastic cooking utensils were excluded because no peer-reviewed study directly quantifies particle release under normal use conditions; nanoplastics are excluded due to inconsistent measurement coverage across pathways; and airborne indoor exposure is only partially represented by the Yakovenko et al. data. The calculator likely understates total exposure as a result.
          </p>
          <p>
            This tool is intended for educational purposes only. It does not constitute medical advice and should not be used to inform clinical decisions.
          </p>
        </div>
      </section>

      <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/calculator"
          className="inline-block bg-teal-700 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-teal-800 transition-colors text-center"
        >
          Take the calculator
        </Link>
        <Link
          href="/about"
          className="inline-block border border-slate-200 text-slate-600 font-medium px-6 py-3 rounded-full text-sm hover:bg-slate-50 transition-colors text-center"
        >
          About Body Burden
        </Link>
      </div>
    </div>
  );
}
