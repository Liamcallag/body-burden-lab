export type Category = "water" | "kitchen" | "food" | "air";

export interface StudyCallout {
  value: string;        // e.g. "4.22 million"
  unit: string;         // e.g. "microplastic particles per cm² per use"
  citation: string;     // e.g. "Hussain et al., ES&T, 2023"
  caveat: string;       // shown on methodology page, not in main UI
  url?: string;         // link to the study
  citation2?: string;   // optional second citation
  url2?: string;        // optional second study link
  unitContext?: string; // short label describing the measurement basis, e.g. "per use", "per year"
}

export interface Option {
  label: string;
  riskScore: number; // 0–10
}

export interface Question {
  id: string;
  category: Category;
  question: string;
  resultLabel: string; // short label used in results view
  weight: number; // relative importance multiplier — higher = more impact on total score
  options: Option[];
  tipKey: string;
  studyCallout?: StudyCallout;
}

export const QUESTIONS: Question[] = [
  {
    id: "water",
    category: "water",
    question: "What is your main source of drinking water?",
    resultLabel: "Drinking water",
    weight: 8,
    tipKey: "water",
    studyCallout: {
      value: "~325",
      unit: "microplastic particles per litre of bottled water",
      citation: "Mason et al., Frontiers in Chemistry, 2018",
      caveat: "Average across 11 brands — varies significantly by brand and bottle type",
      url: "https://www.frontiersin.org/articles/10.3389/fchem.2018.00407/full",
      unitContext: "per litre",
    },
    options: [
      { label: "Only bottled water", riskScore: 10 },
      { label: "Mostly bottled, sometimes tap", riskScore: 7 },
      { label: "Mix of both", riskScore: 5 },
      { label: "Mostly tap water", riskScore: 2 },
      { label: "Only tap water or filtered tap", riskScore: 0 },
    ],
  },
  {
    id: "tea",
    category: "kitchen",
    question: "Do you use plastic or nylon tea bags?",
    resultLabel: "Plastic tea bags",
    weight: 15,
    tipKey: "tea",
    studyCallout: {
      value: "11.6 billion",
      unit: "microplastic particles per cup at brewing temperature",
      citation: "Hernandez et al., Environmental Science & Technology, 2019",
      caveat: "A single plastic tea bag releases ~11.6 billion microplastic and ~3.1 billion nanoplastic particles per cup at brewing temperature",
      url: "https://pubs.acs.org/doi/10.1021/acs.est.9b02540",
      unitContext: "per cup",
    },
    options: [
      { label: "Yes, most days", riskScore: 10 },
      { label: "Yes, occasionally", riskScore: 4 },
      { label: "No — I use paper bags, loose leaf, or I don't drink tea", riskScore: 0 },
    ],
  },
  {
    id: "microwave",
    category: "kitchen",
    question: "Do you microwave food in plastic containers?",
    resultLabel: "Microwaving in plastic",
    weight: 13,
    tipKey: "microwave",
    studyCallout: {
      value: "4.22 million",
      unit: "microplastic particles per cm² per use",
      citation: "Hussain et al., Environmental Science & Technology, 2023",
      caveat: "Peak measurement under 3-min heating using food simulants · real food may release more",
      url: "https://pubs.acs.org/doi/10.1021/acs.est.3c01942",
      unitContext: "per use",
    },
    options: [
      { label: "Yes, several times a week or more", riskScore: 10 },
      { label: "Yes, occasionally (once a week or less)", riskScore: 5 },
      { label: "No — I use glass or ceramic", riskScore: 0 },
    ],
  },
  {
    id: "hotdrinks",
    category: "kitchen",
    question: "Do you drink hot drinks from disposable paper or plastic cups?",
    resultLabel: "Disposable cups",
    weight: 7,
    tipKey: "hotdrinks",
    studyCallout: {
      value: "675–5,984",
      unit: "microplastic particles per litre released into hot beverages from PE-lined paper cups",
      citation: "Chen et al., Science of the Total Environment, 2023",
      caveat: "Tested across 90 commercial cup batches at 95°C — higher temperatures and acidic drinks increase release significantly",
      url: "https://pubmed.ncbi.nlm.nih.gov/36089043/",
      unitContext: "per litre",
    },
    options: [
      { label: "Yes, most days", riskScore: 10 },
      { label: "Yes, occasionally", riskScore: 4 },
      { label: "Never — I use a reusable cup or mug", riskScore: 0 },
    ],
  },
  {
    id: "nonstick",
    category: "kitchen",
    question: "Are your non-stick pans scratched or damaged?",
    resultLabel: "Non-stick pans",
    weight: 2,
    tipKey: "nonstick",
    studyCallout: {
      value: "~9,100",
      unit: "PTFE microplastic particles potentially released per cooking session from a single surface crack",
      citation: "Luo et al., Science of the Total Environment, 2022",
      caveat: "Measured from pan surfaces using Raman imaging — broken coating areas can release up to 2,300,000 particles. Figures represent surface release, not confirmed ingestion.",
      url: "https://doi.org/10.1016/j.scitotenv.2022.158293",
      unitContext: "per session",
    },
    options: [
      { label: "Yes — visibly scratched, chipped or heavily worn", riskScore: 10 },
      { label: "Yes — some light scratching", riskScore: 5 },
      { label: "No — I use stainless steel, cast iron or ceramic", riskScore: 0 },
    ],
  },
  {
    id: "cuttingboard",
    category: "kitchen",
    question: "What cutting board do you use?",
    resultLabel: "Plastic cutting board",
    weight: 10,
    tipKey: "cuttingboard",
    studyCallout: {
      value: "7–14 million",
      unit: "microplastic particles per year from plastic cutting boards",
      citation: "Environmental Science & Technology, 2023",
      caveat: "Released into food through normal daily use of a plastic cutting board",
      url: "https://doi.org/10.1021/acs.est.3c00924",
      unitContext: "per year",
    },
    options: [
      { label: "Plastic, use it regularly", riskScore: 10 },
      { label: "Mix of plastic and wood", riskScore: 4 },
      { label: "Wood, glass or bamboo only", riskScore: 0 },
    ],
  },
  {
    id: "diet",
    category: "food",
    question: "How often do you order takeaway or food delivery?",
    resultLabel: "Takeaway food",
    weight: 7,
    tipKey: "diet",
    studyCallout: {
      value: "170–638",
      unit: "microplastic particles per takeaway order — detected across 146 food samples including rice, noodles, meat and beverages",
      citation: "Bai et al., Environmental Research, 2022",
      caveat: "Mean of 639 MPs/kg across popular takeaway foods in South China. Polyethylene was the dominant polymer, likely from disposable plastic containers. Western packaging standards may differ.",
      url: "https://doi.org/10.1016/j.envres.2022.114390",
      unitContext: "per order",
    },
    options: [
      { label: "Most days or several times a week", riskScore: 10 },
      { label: "Once a week or so", riskScore: 5 },
      { label: "Rarely or never", riskScore: 0 },
    ],
  },
  {
    id: "seafood",
    category: "food",
    question: "How often do you eat mussels or oysters?",
    resultLabel: "Mussels & oysters",
    weight: 7,
    tipKey: "seafood",
    studyCallout: {
      value: "~0.36",
      unit: "microplastic particles per gram of mussel tissue (~90 per 250g serving)",
      citation: "Van Cauwenberghe & Janssen, Environmental Pollution, 2014",
      caveat: "Mussels: 0.36 particles/g, oysters: 0.47 particles/g wet weight — microplastics accumulate in digestive tissue consumed whole. Finfish are significantly lower as the gut is typically removed.",
      url: "https://www.sciencedirect.com/science/article/pii/S0269749114002425",
      unitContext: "per gram",
    },
    options: [
      { label: "Daily", riskScore: 10 },
      { label: "Several times a week", riskScore: 7 },
      { label: "Once a week", riskScore: 4 },
      { label: "A few times a month", riskScore: 2 },
      { label: "Rarely or never", riskScore: 0 },
    ],
  },
{
    id: "salt",
    category: "food",
    question: "What type of salt do you mainly use?",
    resultLabel: "Salt type",
    weight: 1,
    tipKey: "salt",
    studyCallout: {
      value: "0–10",
      unit: "microplastic particles per kg of sea salt (max 37 particles per person per year)",
      citation: "Karami et al., Scientific Reports, 2017",
      caveat: "Only captures particles >149 µm — studies using finer filters report 100–700+ MPs/kg globally. Karami's Raman-confirmed figures are the most rigorous available but likely undercount smaller particles.",
      url: "https://www.nature.com/articles/srep46173",
      unitContext: "per kg",
    },
    options: [
      { label: "Sea salt", riskScore: 10 },
      { label: "Table salt or mixed", riskScore: 4 },
      { label: "Rock salt or Himalayan", riskScore: 1 },
      { label: "I don't use salt", riskScore: 0 },
    ],
  },
  {
    id: "clothing",
    category: "air",
    question: "What does your wardrobe mostly consist of?",
    resultLabel: "Synthetic clothing",
    weight: 5,
    tipKey: "clothing",
    studyCallout: {
      value: "~700,000",
      unit: "microplastic fibres released per wash cycle (6 kg load)",
      citation: "Napper & Thompson, Marine Pollution Bulletin, 2016",
      caveat: "Measured from a 6 kg acrylic load — fibres enter wastewater; airborne inhalation from wearing synthetic clothing adds additional exposure not yet well quantified",
      url: "https://doi.org/10.1016/j.marpolbul.2016.09.025",
      unitContext: "per wash",
    },
    options: [
      { label: "Mostly synthetic — polyester, nylon, acrylic", riskScore: 10 },
      { label: "Roughly half and half", riskScore: 5 },
      { label: "Mostly natural fibres — cotton, wool, linen", riskScore: 1 },
    ],
  },
  {
    id: "environment",
    category: "air",
    question: "How do you usually commute or travel?",
    resultLabel: "Car commute",
    weight: 5,
    tipKey: "environment",
    studyCallout: {
      value: "2,238",
      unit: "microplastic particles per cubic metre inside a car cabin — 4× higher than residential indoor air",
      citation: "Yakovenko et al., PLoS ONE, 2025",
      caveat: "Median car cabin concentration from active Raman sampling in France — likely driven by wear of synthetic interior materials (seats, dashboard, panels). Residential median was 528 MPs/m³ by comparison.",
      url: "https://doi.org/10.1371/journal.pone.0328011",
      unitContext: "per m³ of air",
    },
    options: [
      { label: "By car, most days", riskScore: 10 },
      { label: "By car, a few times a week", riskScore: 5 },
      { label: "Rarely or never in a car", riskScore: 1 },
    ],
  },
  {
    id: "airquality",
    category: "air",
    question: "How would you describe your home air quality habits?",
    resultLabel: "Indoor air quality",
    weight: 5,
    tipKey: "airquality",
    studyCallout: {
      value: "~528–4,300",
      unit: "microplastic particles per cubic metre of indoor air (inhalable 1–10 µm fraction)",
      citation: "Yakovenko et al., PLoS ONE, 2025",
      caveat: "Residential median 528 MPs/m³, car cabin median 2,238 MPs/m³, consensus estimate 4,300 MPs/m³ — measured using Raman spectroscopy in Toulouse, France. High-activity periods can spike to 34,000+ MPs/m³.",
      url: "https://doi.org/10.1371/journal.pone.0328011",
      unitContext: "per m³ of air",
    },
    options: [
      { label: "No air filter, carpet floors, rarely vacuum", riskScore: 10 },
      { label: "Vacuum regularly but no HEPA filter", riskScore: 6 },
      { label: "Hard floors throughout and vacuum regularly", riskScore: 3 },
      { label: "HEPA air purifier and/or vacuum with HEPA filter", riskScore: 0 },
    ],
  },
];

export const CATEGORY_LABELS: Record<Category, string> = {
  water: "Drinking Water",
  kitchen: "Kitchen & Cooking",
  food: "Food & Diet",
  air: "Air & Environment",
};

export const CATEGORY_COLORS: Record<Category, string> = {
  water: "#0F766E",
  kitchen: "#0E7490",
  food: "#1D4ED8",
  air: "#6D28D9",
};

export const REDUCTION_TIPS: Record<string, string> = {
  water: "Switching to a quality water filter (e.g. Clearly Filtered or a reverse osmosis system) significantly reduces microplastic intake from drinking water.",
  tea: "Switching from plastic or nylon tea bags to paper bags or loose leaf tea removes one of the highest-risk sources in your kitchen.",
  microwave: "Transferring food to glass or ceramic containers before microwaving is one of the single highest-impact changes you can make to reduce microplastic exposure.",
  hotdrinks: "Disposable paper cups have a thin plastic polyethylene lining that releases microplastics into hot liquids. A reusable cup eliminates this entirely.",
  utensils: "Replacing plastic cooking utensils with wood or stainless steel reduces microplastic release during cooking.",
  nonstick: "Replacing old or scratched non-stick pans with stainless steel or cast iron eliminates this exposure source.",
  cuttingboard: "Replacing plastic cutting boards with wood or bamboo significantly reduces microplastic ingestion from food prep.",
  diet: "Takeaway food served in disposable plastic containers is a direct source of microplastics. Cooking at home and using reusable containers significantly reduces this exposure.",
  seafood: "Microplastics accumulate in the digestive tissue of mussels and oysters, which are consumed whole. Reducing intake or switching to finfish (where the gut is removed) significantly lowers this exposure route.",
  clothing: "Washing synthetic clothing in a microfibre-catching laundry bag reduces fibre release. Natural fibres shed fewer microplastics overall.",
  environment: "Car cabins have some of the highest measured microplastic concentrations of any indoor environment. Opening windows briefly or using cabin air filters can reduce exposure.",
  airquality: "Adding a HEPA air purifier reduces indoor microplastic inhalation from fibres, dust, and synthetic materials in the home.",
salt: "Switching from sea salt to rock salt or Himalayan salt marginally reduces microplastic intake — sea salt consistently shows higher contamination in peer-reviewed studies.",
};
