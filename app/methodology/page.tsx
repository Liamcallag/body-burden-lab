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
    author: "Cox et al.",
    year: 2019,
    title: "Human Consumption of Microplastics",
    journal: "Environmental Science & Technology",
    doi: "10.1021/acs.est.9b01517",
    usedFor: "Drinking water exposure estimates across all water source types (bottled, tap, filtered). Used for scoring consistency across answer options.",
    confidence: "High",
  },
  {
    author: "Mason et al.",
    year: 2018,
    title: "Synthetic Polymer Contamination in Bottled Water",
    journal: "Frontiers in Chemistry",
    doi: "10.3389/fchem.2018.00407",
    usedFor: "Bottled water contamination — 325 particles/litre average across 259 bottles from 11 brands in 9 countries (93% of bottles contaminated). Higher than Cox et al. figures due to inclusion of smaller particles (6.5–100 µm). Cox et al. used for calculator scoring to maintain consistency across all water source answer options.",
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
    author: "Luo et al.",
    year: 2022,
    title: "Raman imaging for the identification of Teflon microplastics and nanoplastics released from non-stick cookware",
    journal: "Science of the Total Environment",
    doi: "10.1016/j.scitotenv.2022.158293",
    usedFor: "Non-stick cookware (PTFE particle release from scratched/damaged pans)",
    confidence: "Medium",
  },
  {
    author: "Dris et al.",
    year: 2017,
    title: "A first overview of textile fibers, including microplastics, in indoor and outdoor environments",
    journal: "Environmental Pollution",
    doi: "10.1016/j.envpol.2016.12.013",
    usedFor: "Supporting context for synthetic clothing as a source of airborne microplastic fibres indoors",
    confidence: "Medium",
  },
  {
    author: "Yakovenko et al.",
    year: 2025,
    title: "Human exposure to PM10 microplastics in indoor air",
    journal: "PLoS ONE",
    doi: "10.1371/journal.pone.0328011",
    usedFor: "Indoor air quality question (residential median 528 MPs/m³, car cabin median 2,238 MPs/m³) and car commute question. Measured using Raman spectroscopy in residential apartments and car cabins in France.",
    confidence: "High",
  },
  {
    author: "EFSA",
    year: 2016,
    title: "Presence of Microplastics and Nanoplastics in Food, with Particular Focus on Seafood",
    journal: "EFSA Journal",
    doi: "10.2903/j.efsa.2016.4501",
    usedFor: "Microplastic ingestion via seafood (supplementary data)",
    confidence: "High",
  },
  {
    author: "Jenner et al.",
    year: 2022,
    title: "Detection of microplastics in human lung tissue using μFTIR spectroscopy",
    journal: "Science of the Total Environment",
    doi: "10.1016/j.scitotenv.2022.154907",
    usedFor: "Direct evidence of microplastics in human lung tissue from living patients — supporting inhalation as a proven exposure route",
    confidence: "High",
  },
  {
    author: "Kim et al.",
    year: 2018,
    title: "Global Pattern of Microplastics (MPs) in Commercial Food-Grade Salts: Sea Salt as an Indicator of Seawater MP Pollution",
    journal: "Environmental Science & Technology",
    doi: "10.1021/acs.est.8b04180",
    usedFor: "Microplastic concentrations in sea salt vs rock salt",
    confidence: "High",
  },
  {
    author: "Liebezeit & Liebezeit",
    year: 2014,
    title: "Synthetic particles as contaminants in German beers",
    journal: "Food Additives & Contaminants: Part A",
    doi: "10.1080/19440049.2014.945099",
    usedFor: "Microplastic particles found in beer samples",
    confidence: "Medium",
  },
  {
    author: "Wang et al.",
    year: 2023,
    title: "Pouring hot water through drip bags releases thousands of microplastics into coffee",
    journal: "Food Chemistry",
    doi: "10.1016/j.foodchem.2023.135717",
    usedFor: "Microplastic release from plastic coffee filter bags and pod-style brewing",
    confidence: "Medium",
  },
  {
    author: "Yadav et al.",
    year: 2023,
    title: "Cutting Boards: An Overlooked Source of Microplastics in Human Food?",
    journal: "Environmental Science & Technology",
    doi: "10.1021/acs.est.3c00924",
    usedFor: "Microplastic release from plastic cutting boards during food preparation",
    confidence: "Medium",
  },
  {
    author: "Bai et al.",
    year: 2022,
    title: "Microplastics in take-out food: Are we over taking it?",
    journal: "Environmental Research",
    doi: "10.1016/j.envres.2022.114390",
    usedFor: "Takeaway food question — mean of 639 MPs/kg across 146 takeaway food samples (rice, noodles, meat, beverages). Approximately 170–638 MPs per order for 1–2 orders per week.",
    confidence: "Medium",
  },
];

const referenceTable = [
  { question: "Drinking water", answer: "Only bottled", weekly: "1,730", study: "Cox et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b01517" },
  { question: "Drinking water", answer: "Mostly bottled", weekly: "1,300", study: "Cox et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b01517" },
  { question: "Drinking water", answer: "Mix of both", weekly: "850", study: "Cox et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b01517" },
  { question: "Drinking water", answer: "Mostly tap", weekly: "150", study: "Cox et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b01517" },
  { question: "Drinking water", answer: "Only tap / filtered", weekly: "77", study: "Cox et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b01517" },
  { question: "Tea & coffee", answer: "Plastic/nylon tea bags daily", weekly: "7,000", study: "Hernandez et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b02540" },
  { question: "Tea & coffee", answer: "Plastic/nylon tea bags few times/week", weekly: "3,000", study: "Hernandez et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b02540" },
  { question: "Tea & coffee", answer: "Plastic/nylon tea bags occasionally", weekly: "800", study: "Hernandez et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b02540" },

  { question: "Tea & coffee", answer: "Coffee machine / pods", weekly: "200", study: "Wang et al.", year: 2023, confidence: "Medium", doi: "10.1016/j.foodchem.2023.135717" },
  { question: "Microwaving plastic", answer: "Daily", weekly: "28,000", study: "Hussain et al.", year: 2023, confidence: "Medium", doi: "10.1021/acs.est.3c01942" },
  { question: "Microwaving plastic", answer: "Few times/week", weekly: "12,000", study: "Hussain et al.", year: 2023, confidence: "Medium", doi: "10.1021/acs.est.3c01942" },
  { question: "Microwaving plastic", answer: "Occasionally", weekly: "3,000", study: "Hussain et al.", year: 2023, confidence: "Medium", doi: "10.1021/acs.est.3c01942" },
  { question: "Non-stick pans", answer: "Visibly scratched or chipped", weekly: "~9,100 per session", study: "Luo et al.", year: 2022, confidence: "Medium", doi: "10.1016/j.scitotenv.2022.158293" },
  { question: "Non-stick pans", answer: "Light scratching", weekly: "Est.", study: "Luo et al.", year: 2022, confidence: "Low", doi: "10.1016/j.scitotenv.2022.158293" },
  { question: "Non-stick pans", answer: "Good condition", weekly: "Est.", study: "Luo et al.", year: 2022, confidence: "Low", doi: "10.1016/j.scitotenv.2022.158293" },
  { question: "Cutting board", answer: "Plastic", weekly: "400", study: "Yadav et al.", year: 2023, confidence: "Medium", doi: "10.1021/acs.est.3c00924" },
  { question: "Cutting board", answer: "Mix", weekly: "200", study: "Yadav et al.", year: 2023, confidence: "Medium", doi: "10.1021/acs.est.3c00924" },
  { question: "Takeaway food", answer: "Most days / several times a week", weekly: "638", study: "Bai et al.", year: 2022, confidence: "Medium", doi: "10.1016/j.envres.2022.114390" },
  { question: "Takeaway food", answer: "Once a week or so", weekly: "170", study: "Bai et al.", year: 2022, confidence: "Medium", doi: "10.1016/j.envres.2022.114390" },
  { question: "Takeaway food", answer: "Rarely or never", weekly: "0", study: "Bai et al.", year: 2022, confidence: "Medium", doi: "10.1016/j.envres.2022.114390" },
  { question: "Seafood", answer: "Daily", weekly: "2,100", study: "Cox et al. / EFSA", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b01517" },
  { question: "Seafood", answer: "Several times/week", weekly: "1,200", study: "Cox et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b01517" },
  { question: "Seafood", answer: "Once/week", weekly: "296", study: "Cox et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b01517" },
  { question: "Seafood", answer: "Few times/month", weekly: "100", study: "Cox et al.", year: 2019, confidence: "High", doi: "10.1021/acs.est.9b01517" },
  { question: "Beer / alcohol", answer: "Daily", weekly: "70", study: "Liebezeit & Liebezeit", year: 2014, confidence: "Medium", doi: "10.1080/19440049.2014.945099" },
  { question: "Beer / alcohol", answer: "Few times/week", weekly: "30", study: "Liebezeit & Liebezeit", year: 2014, confidence: "Medium", doi: "10.1080/19440049.2014.945099" },
  { question: "Beer / alcohol", answer: "Occasionally", weekly: "10", study: "Liebezeit & Liebezeit", year: 2014, confidence: "Medium", doi: "10.1080/19440049.2014.945099" },
  { question: "Salt type", answer: "Sea salt", weekly: "15", study: "Kim et al.", year: 2018, confidence: "High", doi: "10.1021/acs.est.8b04180" },
  { question: "Salt type", answer: "Table / mixed", weekly: "5", study: "Kim et al.", year: 2018, confidence: "High", doi: "10.1021/acs.est.8b04180" },
  { question: "Salt type", answer: "Rock / Himalayan", weekly: "2", study: "Kim et al.", year: 2018, confidence: "High", doi: "10.1021/acs.est.8b04180" },
  { question: "Clothing", answer: "Mostly synthetic", weekly: "800", study: "Dris et al.", year: 2017, confidence: "Medium", doi: "10.1016/j.envpol.2016.12.013" },
  { question: "Clothing", answer: "Half and half", weekly: "400", study: "Dris et al.", year: 2017, confidence: "Medium", doi: "10.1016/j.envpol.2016.12.013" },
  { question: "Clothing", answer: "Mostly natural fibres", weekly: "150", study: "Dris et al.", year: 2017, confidence: "Medium", doi: "10.1016/j.envpol.2016.12.013" },
  { question: "Car commute", answer: "By car, most days", weekly: "800", study: "Yakovenko et al.", year: 2025, confidence: "Medium", doi: "10.1371/journal.pone.0328011" },
  { question: "Car commute", answer: "By car, a few times/week", weekly: "400", study: "Yakovenko et al.", year: 2025, confidence: "Medium", doi: "10.1371/journal.pone.0328011" },
  { question: "Car commute", answer: "Rarely or never in a car", weekly: "80", study: "Yakovenko et al.", year: 2025, confidence: "Medium", doi: "10.1371/journal.pone.0328011" },
  { question: "Home air quality", answer: "No filter, carpet, rarely vacuum", weekly: "700", study: "Yakovenko et al.", year: 2025, confidence: "Medium", doi: "10.1371/journal.pone.0328011" },
  { question: "Home air quality", answer: "Vacuum, no HEPA", weekly: "400", study: "Yakovenko et al.", year: 2025, confidence: "Medium", doi: "10.1371/journal.pone.0328011" },
  { question: "Home air quality", answer: "Hard floors, regular vacuum", weekly: "200", study: "Yakovenko et al.", year: 2025, confidence: "Medium", doi: "10.1371/journal.pone.0328011" },
  { question: "Home air quality", answer: "HEPA filter/vacuum", weekly: "150", study: "Yakovenko et al.", year: 2025, confidence: "Medium", doi: "10.1371/journal.pone.0328011" },
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
            The calculator presents 12 questions covering the major documented pathways for human microplastic exposure: drinking water, food preparation, diet, clothing, and indoor air. Each answer maps to a weekly particle estimate derived from the relevant published study.
          </p>
          <p>
            Estimates are expressed as microplastic particles per week. To calculate annual exposure, weekly totals are multiplied by 52. Results are compared to the range of 74,000–121,000 particles per year reported by Cox et al. (2019) for the average American — researchers note this is likely a significant underestimate as many exposure pathways remain unstudied.
          </p>
          <p>
            Where a single high-quality study exists for a particular pathway (e.g. plastic tea bags, bottled water), we use that study directly. Where evidence is more limited or comes from multiple smaller studies, we note a lower confidence level and use a conservative mid-range figure.
          </p>
          <p>
            Individual exposure will vary depending on consumption volumes, product types, and geographic factors not captured by these questions. Figures are derived from published studies and should be understood as documented estimates, not precise measurements.
          </p>
          <p>
            <strong>A note on microplastics vs nanoplastics:</strong> This calculator counts microplastic particles only — defined as particles between 1 micron and 5mm in size. Nanoplastic particles (smaller than 1 micron) are not included. This is a deliberate methodological choice: nanoplastic research is newer, measurement techniques vary significantly between studies, and consistent comparable figures do not yet exist across all exposure pathways. Where nanoplastic data does exist — such as in the tea bag study by Hernandez et al. (2019), which found 11.6 billion nanoplastic particles released per bag — the numbers are substantially higher than microplastic counts alone. All scores in this calculator should therefore be understood as documented minimums. The true total particle exposure, including nanoplastics, is likely significantly higher.
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
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${confidenceBadge[s.confidence]}`}>
                    {s.confidence} confidence
                  </span>
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
        <p className="text-sm text-slate-500 mb-2">Every answer and its corresponding weekly particle estimate</p>
        <p className="text-xs text-slate-400 mb-5"><span className="font-semibold text-emerald-700">High confidence</span> — figure derives directly from a single well-cited study. <span className="font-semibold text-amber-700">Medium confidence</span> — figure is a reasoned estimate informed by the cited study but involves extrapolation (e.g. scaling from lab conditions to weekly exposure).</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-2.5 pr-4 font-semibold text-slate-600 whitespace-nowrap">Question</th>
                <th className="py-2.5 pr-4 font-semibold text-slate-600">Answer</th>
                <th className="py-2.5 pr-4 font-semibold text-slate-600 whitespace-nowrap text-right">Particles/week</th>
                <th className="py-2.5 pr-4 font-semibold text-slate-600 whitespace-nowrap">Study</th>
                <th className="py-2.5 font-semibold text-slate-600 whitespace-nowrap">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {referenceTable.map((row, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="py-2 pr-4 text-slate-700 whitespace-nowrap font-medium">{row.question}</td>
                  <td className="py-2 pr-4 text-slate-600">{row.answer}</td>
                  <td className="py-2 pr-4 text-slate-900 font-medium text-right tabular-nums whitespace-nowrap">{row.weekly}</td>
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
            Notably absent from this calculator due to limited published data: microplastics in processed food, canned goods, and personal care products. Their omission means our estimates are likely conservative.
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
