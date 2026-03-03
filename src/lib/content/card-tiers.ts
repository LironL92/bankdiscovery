export type CardTier = {
  slug: string;
  name: string;
  color: string;
  colorHex: string;
  monthlyFee: number;
  monthlyFeeNote: string;
  incomeRequirement: string;
  incomeMin: number;
  incomeMax: number | null;
  tagline: string;
  description: string;
  benefits: string[];
  savingsRate: string;
  everydayRate: string;
  loungeAccess: string;
  concierge: boolean;
  freeDeviceInsurance: boolean;
  fuelCashback: string;
  groceryCashback: string;
};

export const CARD_TIERS: CardTier[] = [
  {
    slug: "gold",
    name: "Gold",
    color: "gold",
    colorHex: "#C9A84C",
    monthlyFee: 115,
    monthlyFeeNote: "Can be reduced to R0 with Diamond Vitality Money status",
    incomeRequirement: "Up to R350,000 per year",
    incomeMin: 0,
    incomeMax: 350000,
    tagline: "Smart banking for everyday South Africans",
    description:
      "The Gold card is Discovery Bank's entry tier, offering access to the full Vitality Money rewards ecosystem at an affordable monthly fee. Ideal for individuals starting their career or those earning up to R350,000 per year.",
    benefits: [
      "Full Vitality Money rewards programme",
      "Up to 75% monthly fee discount at Diamond status",
      "Dynamic interest rates on savings",
      "Free Discovery Bank app with spending insights",
      "Contactless payments and tap to pay",
      "Integration with Discovery Health and Vitality",
    ],
    savingsRate: "Up to 6.5% on demand savings",
    everydayRate: "Up to 2.5% on everyday balances",
    loungeAccess: "None",
    concierge: false,
    freeDeviceInsurance: false,
    fuelCashback: "Up to 7.5%",
    groceryCashback: "Up to 7.5%",
  },
  {
    slug: "platinum",
    name: "Platinum",
    color: "slate",
    colorHex: "#6B7B8D",
    monthlyFee: 170,
    monthlyFeeNote: "Can be reduced to R0 with Diamond Vitality Money status",
    incomeRequirement: "R350,000 to R850,000 per year",
    incomeMin: 350000,
    incomeMax: 850000,
    tagline: "Enhanced rewards for growing professionals",
    description:
      "The Platinum tier unlocks higher transaction limits, better interest rates, and more generous rewards. Designed for professionals earning between R350,000 and R850,000 per year who want more from their banking.",
    benefits: [
      "All Gold benefits plus enhanced rewards",
      "Higher transaction and daily limits",
      "Better dynamic interest rates",
      "Up to 75% monthly fee discount at Diamond status",
      "Priority customer support",
      "Enhanced Vitality Money rewards tiers",
    ],
    savingsRate: "Up to 6.75% on demand savings",
    everydayRate: "Up to 3% on everyday balances",
    loungeAccess: "Limited domestic lounge access",
    concierge: false,
    freeDeviceInsurance: false,
    fuelCashback: "Up to 10%",
    groceryCashback: "Up to 10%",
  },
  {
    slug: "black",
    name: "Black",
    color: "navy",
    colorHex: "#0A1628",
    monthlyFee: 295,
    monthlyFeeNote: "Can be reduced to R0 with Diamond Vitality Money status",
    incomeRequirement: "R850,000 to R2.5 million per year",
    incomeMin: 850000,
    incomeMax: 2500000,
    tagline: "Premium banking with serious rewards",
    description:
      "The Black card is where Discovery Bank gets serious. Airport lounge access, concierge services, and significantly higher rewards make this the sweet spot for high earners who want premium perks without the top-tier price tag.",
    benefits: [
      "All Platinum benefits plus premium perks",
      "Domestic and international airport lounge access",
      "Concierge service",
      "Free device insurance",
      "Highest dynamic interest rate boosts",
      "Up to 75% monthly fee discount at Diamond status",
      "Priority banking support",
    ],
    savingsRate: "Up to 7% on demand savings",
    everydayRate: "Up to 3.5% on everyday balances",
    loungeAccess: "Domestic and international lounges",
    concierge: true,
    freeDeviceInsurance: true,
    fuelCashback: "Up to 15%",
    groceryCashback: "Up to 15%",
  },
  {
    slug: "purple",
    name: "Purple",
    color: "purple",
    colorHex: "#6B21A8",
    monthlyFee: 495,
    monthlyFeeNote: "Can be reduced to R0 with Diamond Vitality Money status",
    incomeRequirement: "Over R2.5 million per year",
    incomeMin: 2500000,
    incomeMax: null,
    tagline: "The pinnacle of Discovery banking",
    description:
      "The Purple card is Discovery Bank's most exclusive tier. With the highest rewards rates, unlimited lounge access, dedicated concierge, and premium lifestyle benefits, it is designed for South Africa's top earners.",
    benefits: [
      "All Black benefits at the highest level",
      "Unlimited domestic and international lounge access",
      "Dedicated concierge team",
      "Comprehensive device insurance",
      "Maximum dynamic interest rates",
      "Up to 75% monthly fee discount at Diamond status",
      "Exclusive lifestyle and travel benefits",
      "Highest transaction and card limits",
    ],
    savingsRate: "Up to 7.35% on demand savings",
    everydayRate: "Up to 4% on everyday balances",
    loungeAccess: "Unlimited domestic and international lounges",
    concierge: true,
    freeDeviceInsurance: true,
    fuelCashback: "Up to 20%",
    groceryCashback: "Up to 20%",
  },
];

export function getCardTier(slug: string): CardTier | undefined {
  return CARD_TIERS.find((t) => t.slug === slug);
}

export const CARD_COMPARISON_FEATURES = [
  {
    category: "Monthly Fee",
    key: "monthlyFee" as const,
    format: "currency",
    description: "Base monthly account fee before Vitality Money discounts",
  },
  {
    category: "Income Requirement",
    key: "incomeRequirement" as const,
    format: "text",
    description: "Gross annual income needed to qualify",
  },
  {
    category: "Savings Interest Rate",
    key: "savingsRate" as const,
    format: "text",
    description: "Maximum rate on demand savings at Diamond status",
  },
  {
    category: "Everyday Interest Rate",
    key: "everydayRate" as const,
    format: "text",
    description: "Interest earned on transaction account balances",
  },
  {
    category: "Fuel Cashback",
    key: "fuelCashback" as const,
    format: "text",
    description: "HealthyFuel cashback at partner fuel stations",
  },
  {
    category: "Grocery Cashback",
    key: "groceryCashback" as const,
    format: "text",
    description: "HealthyFood cashback at partner stores",
  },
  {
    category: "Lounge Access",
    key: "loungeAccess" as const,
    format: "text",
    description: "Airport lounge access included with your card",
  },
  {
    category: "Concierge",
    key: "concierge" as const,
    format: "boolean",
    description: "Access to a personal concierge service",
  },
  {
    category: "Device Insurance",
    key: "freeDeviceInsurance" as const,
    format: "boolean",
    description: "Free insurance for your phone and laptop",
  },
] as const;
