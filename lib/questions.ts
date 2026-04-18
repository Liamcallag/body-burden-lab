export type Category = "water" | "kitchen" | "food" | "air";

export interface Option {
  label: string;
  value: number; // weekly particles
}

export interface Question {
  id: string;
  category: Category;
  question: string;
  options: Option[];
  tipKey: string; // used to look up personalised tip
}

export interface ReductionTip {
  tip: string;
  saving: number; // max saving vs worst option
}

export const QUESTIONS: Question[] = [
  {
    id: "water",
    category: "water",
    question: "What is your main source of drinking water?",
    tipKey: "water",
    options: [
      { label: "Only bottled water", value: 1730 },
      { label: "Mostly bottled, sometimes tap", value: 1300 },
      { label: "Mix of both", value: 850 },
      { label: "Mostly tap water", value: 150 },
      { label: "Only tap water or filtered tap", value: 77 },
    ],
  },
  {
    id: "tea",
    category: "kitchen",
    question: "How do you make your tea or coffee?",
    tipKey: "tea",
    options: [
      { label: "Plastic or nylon tea bags daily", value: 7000 },
      { label: "Paper tea bags or loose leaf", value: 10 },
      { label: "Coffee machine with plastic parts or pods", value: 200 },
      { label: "I don't drink tea or coffee", value: 0 },
    ],
  },
  {
    id: "microwave",
    category: "kitchen",
    question: "How often do you microwave food in plastic containers?",
    tipKey: "microwave",
    options: [
      { label: "Daily or multiple times a day", value: 28000 },
      { label: "A few times a week", value: 12000 },
      { label: "Occasionally", value: 3000 },
      { label: "Rarely or never — I use glass or ceramic", value: 0 },
    ],
  },
  {
    id: "utensils",
    category: "kitchen",
    question: "What do you mainly cook with?",
    tipKey: "utensils",
    options: [
      { label: "Mostly plastic utensils — spatulas, spoons etc", value: 500 },
      { label: "Mix of plastic and wood or metal", value: 250 },
      { label: "Mostly wood, metal or silicone", value: 50 },
    ],
  },
  {
    id: "nonstick",
    category: "kitchen",
    question: "Do you use non-stick coated pans?",
    tipKey: "nonstick",
    options: [
      { label: "Yes, regularly — some are old or scratched", value: 400 },
      { label: "Yes, but fairly new and in good condition", value: 150 },
      { label: "Occasionally", value: 75 },
      { label: "No — I use stainless steel, cast iron or ceramic", value: 0 },
    ],
  },
  {
    id: "cuttingboard",
    category: "kitchen",
    question: "What cutting board do you use?",
    tipKey: "cuttingboard",
    options: [
      { label: "Plastic", value: 400 },
      { label: "Both plastic and wood", value: 200 },
      { label: "Wood, glass or bamboo only", value: 0 },
    ],
  },
  {
    id: "diet",
    category: "food",
    question: "How would you describe your typical diet?",
    tipKey: "diet",
    options: [
      { label: "Mostly packaged, canned, processed food or regular takeaway", value: 2000 },
      { label: "Mix of fresh and packaged or processed food", value: 1000 },
      { label: "Mostly fresh, home-cooked meals with unpackaged ingredients", value: 400 },
    ],
  },
  {
    id: "seafood",
    category: "food",
    question: "How often do you eat seafood — fish, shellfish, mussels etc?",
    tipKey: "seafood",
    options: [
      { label: "Daily", value: 2100 },
      { label: "Several times a week", value: 1200 },
      { label: "Once a week", value: 296 },
      { label: "A few times a month", value: 100 },
      { label: "Rarely or never", value: 0 },
    ],
  },
  {
    id: "clothing",
    category: "air",
    question: "What does your wardrobe mostly consist of?",
    tipKey: "clothing",
    options: [
      { label: "Mostly synthetic — polyester, nylon, acrylic", value: 800 },
      { label: "Roughly half and half", value: 400 },
      { label: "Mostly natural fibres — cotton, wool, linen", value: 150 },
    ],
  },
  {
    id: "environment",
    category: "air",
    question: "Where do you spend most of your time?",
    tipKey: "environment",
    options: [
      { label: "Dense city centre", value: 1050 },
      { label: "Suburban or town", value: 700 },
      { label: "Rural or coastal", value: 350 },
    ],
  },
  {
    id: "airquality",
    category: "air",
    question: "How would you describe your home air quality habits?",
    tipKey: "airquality",
    options: [
      { label: "No air filter, carpet floors, rarely vacuum", value: 700 },
      { label: "Vacuum regularly but no HEPA filter", value: 400 },
      { label: "Hard floors throughout and vacuum regularly", value: 200 },
      { label: "HEPA air purifier and/or vacuum with HEPA filter", value: 150 },
    ],
  },
];

export const CATEGORY_LABELS: Record<Category, string> = {
  water: "Drinking Water",
  kitchen: "Kitchen & Cooking",
  food: "Food",
  air: "Air & Clothing",
};

export const CATEGORY_COLORS: Record<Category, string> = {
  water: "#0F766E",
  kitchen: "#0E7490",
  food: "#1D4ED8",
  air: "#6D28D9",
};

// Benchmarks (weekly particles)
export const BENCHMARKS = {
  low: 1083,
  average: 42308, // ~2.2M/year ÷ 52
  highEnd: 121000 / 52, // Cox et al. upper bound ÷ 52
};

// Personalised reduction tips keyed by question id and selected option index
// tip shown when user has a high-value option selected
export const REDUCTION_TIPS: Record<string, string> = {
  water: "Switching to a quality water filter (e.g. Clearly Filtered) could reduce your water-based exposure by up to 1,653 particles per week.",
  tea: "Switching from plastic tea bags to paper bags or loose leaf tea could reduce your exposure by up to 6,990 particles per week.",
  microwave: "Transferring food to glass or ceramic containers before microwaving could reduce your exposure by up to 28,000 particles per week — one of the biggest single changes you can make.",
  utensils: "Replacing plastic cooking utensils with wood or stainless steel could reduce your exposure by up to 450 particles per week.",
  nonstick: "Replacing old or scratched non-stick pans with stainless steel or cast iron could reduce your exposure by up to 400 particles per week.",
  cuttingboard: "Replacing plastic cutting boards with wood or bamboo could reduce your exposure by up to 400 particles per week.",
  diet: "Reducing packaged and processed food in favour of fresh ingredients reduces exposure from plastic food packaging, can linings, and food contact materials. Buying loose produce and storing food in glass rather than plastic also helps.",
  seafood: "Microplastics accumulate in the digestive tracts of fish and shellfish — reducing seafood intake or choosing larger fish over shellfish can lower ingestion.",
  clothing: "Washing synthetic clothing in a microfibre-catching laundry bag reduces fibre release. Natural fibres shed fewer microplastics overall.",
  environment: "Using an air purifier with a HEPA filter indoors can capture microplastic fibres, partially offsetting urban air exposure.",
  airquality: "Adding a HEPA air purifier to your home could reduce your indoor microplastic inhalation by up to 550 particles per week.",
};
