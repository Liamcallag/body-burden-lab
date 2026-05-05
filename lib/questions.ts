export type Category = "water" | "kitchen" | "food" | "air";

export interface StudyCallout {
  value: string;       // e.g. "4.22 million"
  unit: string;        // e.g. "microplastic particles per cm² per use"
  citation: string;    // e.g. "Hussain et al., ES&T, 2023"
  caveat: string;      // e.g. "Peak measurement · real food may release more"
}

export interface Option {
  label: string;
  riskScore: number; // 0–10
}

export interface Question {
  id: string;
  category: Category;
  question: string;
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
    weight: 8,
    tipKey: "water",
    studyCallout: {
      value: "~325",
      unit: "microplastic particles per litre of bottled water",
      citation: "Mason et al., Frontiers in Chemistry, 2018",
      caveat: "Average across 11 brands — varies significantly by brand and bottle type",
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
    weight: 13,
    tipKey: "tea",
    studyCallout: {
      value: "11.6 billion",
      unit: "microparticles per cup",
      citation: "Hernandez et al., Environmental Science & Technology, 2019",
      caveat: "Includes particles across a wide size range — methodology disputed, likely an overcount of true microplastics",
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
    weight: 15,
    tipKey: "microwave",
    studyCallout: {
      value: "4.22 million",
      unit: "microplastic particles per cm² per use",
      citation: "Hussain et al., Environmental Science & Technology, 2023",
      caveat: "Peak measurement under 3-min heating using food simulants · real food may release more",
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
    weight: 11,
    tipKey: "hotdrinks",
    studyCallout: {
      value: "~25,000",
      unit: "microplastic particles per cup",
      citation: "Estimated from polyethylene cup lining studies",
      caveat: "Peer-reviewed data on this specific source is limited — figure is an estimate",
    },
    options: [
      { label: "Yes, most days", riskScore: 10 },
      { label: "Yes, occasionally", riskScore: 4 },
      { label: "Never — I use a reusable cup or mug", riskScore: 0 },
    ],
  },
  {
    id: "utensils",
    category: "kitchen",
    question: "What do you mainly cook with?",
    weight: 4,
    tipKey: "utensils",
    studyCallout: {
      value: "~50,000",
      unit: "microplastic particles per year from plastic utensil use",
      citation: "Estimated from plastic leaching studies",
      caveat: "Direct peer-reviewed data on utensil MPs is limited — figure is a conservative estimate",
    },
    options: [
      { label: "Mostly plastic utensils — spatulas, spoons etc", riskScore: 10 },
      { label: "Mix of plastic and wood or metal", riskScore: 5 },
      { label: "Mostly wood, metal or silicone", riskScore: 0 },
    ],
  },
  {
    id: "nonstick",
    category: "kitchen",
    question: "Do you use non-stick coated pans?",
    weight: 4,
    tipKey: "nonstick",
    studyCallout: {
      value: "~2.3 million",
      unit: "microplastic particles per year from a damaged non-stick pan",
      citation: "Kjellin et al., Science of the Total Environment, 2023",
      caveat: "Based on scratched or worn PTFE coating — newer undamaged pans release significantly fewer particles",
    },
    options: [
      { label: "Yes, regularly — some are old or scratched", riskScore: 10 },
      { label: "Yes, but fairly new and in good condition", riskScore: 5 },
      { label: "Occasionally", riskScore: 2 },
      { label: "No — I use stainless steel, cast iron or ceramic", riskScore: 0 },
    ],
  },
  {
    id: "cuttingboard",
    category: "kitchen",
    question: "What cutting board do you use?",
    weight: 10,
    tipKey: "cuttingboard",
    studyCallout: {
      value: "7–14 million",
      unit: "microplastic particles per year",
      citation: "Environmental Science & Technology, 2023",
      caveat: "Varies by board age, material type and usage intensity",
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
    question: "How much of your food comes into contact with plastic packaging or wrapping?",
    weight: 7,
    tipKey: "diet",
    studyCallout: {
      value: "~74,000–121,000",
      unit: "microplastic particles per year for an average adult",
      citation: "Cox et al., Environmental Science & Technology, 2019",
      caveat: "Total dietary estimate across all food contact sources — packaging is one component of this figure",
    },
    options: [
      { label: "Most of it — cling film, plastic trays, canned food, plastic bags", riskScore: 10 },
      { label: "About half — some plastic, some paper, glass or loose", riskScore: 5 },
      { label: "Very little — mostly loose, unpackaged or stored in glass", riskScore: 1 },
    ],
  },
  {
    id: "seafood",
    category: "food",
    question: "How often do you eat seafood — fish, shellfish, mussels etc?",
    weight: 7,
    tipKey: "seafood",
    studyCallout: {
      value: "~90",
      unit: "microplastic particles per serving of shellfish (mussels)",
      citation: "Van Cauwenberghe & Janssen, Environmental Pollution, 2014",
      caveat: "Shellfish are significantly higher than finfish — MPs accumulate in digestive tissue that is consumed whole",
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
    id: "beer",
    category: "food",
    question: "How often do you drink beer?",
    weight: 2,
    tipKey: "beer",
    studyCallout: {
      value: "~32",
      unit: "microplastic particles per litre of beer",
      citation: "Schymanski et al., Food Additives & Contaminants, 2018",
      caveat: "Measured across 14 brands — attributed to airborne deposition during the brewing process",
    },
    options: [
      { label: "Daily", riskScore: 10 },
      { label: "A few times a week", riskScore: 5 },
      { label: "Occasionally", riskScore: 2 },
      { label: "Rarely or never", riskScore: 0 },
    ],
  },
  {
    id: "salt",
    category: "food",
    question: "What type of salt do you mainly use?",
    weight: 1,
    tipKey: "salt",
    studyCallout: {
      value: "~600",
      unit: "microplastic particles per kg of sea salt",
      citation: "Karami et al., Scientific Reports, 2017",
      caveat: "Sea salt consistently shows highest contamination — rock and mined salts are significantly lower",
    },
    options: [
      { label: "Sea salt", riskScore: 10 },
      { label: "Table salt or mixed", riskScore: 4 },
      { label: "Rock salt or Himalayan", riskScore: 1 },
      { label: "I don't use salt", riskScore: 0 },
    ],
  },
  {
    id: "canned",
    category: "food",
    question: "How often do you eat canned food or drink canned beverages?",
    weight: 4,
    tipKey: "canned",
    studyCallout: {
      value: "~1,000–2,000",
      unit: "microplastic particles per litre from can linings",
      citation: "Estimated from food contact material migration studies",
      caveat: "Specific particle count data is limited — epoxy can linings are a documented source, particularly for acidic foods",
    },
    options: [
      { label: "Daily", riskScore: 10 },
      { label: "Several times a week", riskScore: 6 },
      { label: "Occasionally", riskScore: 2 },
      { label: "Rarely or never", riskScore: 0 },
    ],
  },
  {
    id: "clothing",
    category: "air",
    question: "What does your wardrobe mostly consist of?",
    weight: 5,
    tipKey: "clothing",
    studyCallout: {
      value: "~700,000",
      unit: "synthetic fibres released per wash cycle",
      citation: "Browne et al., Environmental Science & Technology, 2011",
      caveat: "Measures fibres entering wastewater — airborne inhalation from wearing synthetic clothing adds additional exposure not yet well quantified",
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
    question: "Where do you spend most of your time?",
    weight: 5,
    tipKey: "environment",
    studyCallout: {
      value: "~14",
      unit: "microplastic particles per cubic metre of urban air",
      citation: "Dris et al., Environmental Chemistry, 2017",
      caveat: "Measured in Paris — varies significantly by city, season and proximity to industrial areas",
    },
    options: [
      { label: "Dense city centre", riskScore: 10 },
      { label: "Suburban or town", riskScore: 5 },
      { label: "Rural or coastal", riskScore: 2 },
    ],
  },
  {
    id: "airquality",
    category: "air",
    question: "How would you describe your home air quality habits?",
    weight: 5,
    tipKey: "airquality",
    studyCallout: {
      value: "~1,000–4,000",
      unit: "microplastic particles per cubic metre of indoor air",
      citation: "Dris et al., Environmental Pollution, 2017",
      caveat: "Indoor air can exceed outdoor levels due to synthetic textiles, carpets and furnishings — HEPA filtration significantly reduces this",
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
  hotdrinks: "Switching to a reusable ceramic or stainless steel cup eliminates microplastic release from disposable cup linings entirely.",
  utensils: "Replacing plastic cooking utensils with wood or stainless steel reduces microplastic release during cooking.",
  nonstick: "Replacing old or scratched non-stick pans with stainless steel or cast iron eliminates this exposure source.",
  cuttingboard: "Replacing plastic cutting boards with wood or bamboo significantly reduces microplastic ingestion from food prep.",
  diet: "Reducing packaged and processed food in favour of fresh, loose ingredients and glass storage removes several plastic contact points from your diet.",
  seafood: "Microplastics accumulate in the digestive tracts of fish and shellfish — reducing seafood intake or choosing larger fish over shellfish can lower ingestion.",
  canned: "Can linings contain epoxy resin and trace plastics that leach into food. Switching to fresh, frozen, or glass-jarred alternatives reduces this pathway.",
  hotdrinks: "Disposable paper cups have a thin plastic polyethylene lining that releases microplastics into hot liquids. A reusable cup eliminates this entirely.",
  clothing: "Washing synthetic clothing in a microfibre-catching laundry bag reduces fibre release. Natural fibres shed fewer microplastics overall.",
  environment: "Using an air purifier with a HEPA filter indoors can partially offset urban air exposure.",
  airquality: "Adding a HEPA air purifier reduces indoor microplastic inhalation from fibres, dust, and synthetic materials in the home.",
  beer: "Microplastic fibres in beer come from airborne deposition during brewing. Reducing consumption or choosing alternatives lowers this pathway.",
  salt: "Switching from sea salt to rock salt or Himalayan salt marginally reduces microplastic intake — sea salt consistently shows higher contamination in peer-reviewed studies.",
};
