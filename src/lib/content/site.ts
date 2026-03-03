export const SITE = {
  name: "BankDiscovery",
  domain: "bankdiscovery.co.za",
  url: "https://bankdiscovery.co.za",
  description:
    "Independent Discovery Bank guide for South Africans. Compare cards, fees, and rewards. Make smarter banking decisions.",
  referralCode: "DNJ001",
  referralReward: {
    suite: 5000,
    creditCard: 2500,
    bonus3: 2500,
    bonus10: 5000,
    currency: "Discovery Miles",
    transactionDeadlineDays: 30,
    payoutDelay: "30 business days",
    minimumAccountDuration: "6 months",
  },
  lastUpdated: "2025-03-01",
  disclaimer:
    "bankdiscovery.co.za is an independent resource and is not affiliated with, endorsed by, or connected to Discovery Limited or Discovery Bank. We earn Discovery Miles when you open an account using our referral code. This does not affect our recommendations.",
  comparisonDisclaimer:
    "This comparison is based on publicly available information as of March 2025. Always verify current rates and fees directly with each bank.",
  author: {
    name: "BankDiscovery Team",
    description:
      "We are a team of South African finance enthusiasts who believe banking decisions should be based on facts, not marketing. We research, compare, and explain so you can choose with confidence.",
  },
} as const;

export const NAV_LINKS = [
  { label: "Review", href: "/review" },
  {
    label: "Cards",
    href: "/cards/compare",
    children: [
      { label: "Compare Cards", href: "/cards/compare" },
      { label: "Gold Card", href: "/cards/gold" },
      { label: "Platinum Card", href: "/cards/platinum" },
      { label: "Black Card", href: "/cards/black" },
      { label: "Purple Card", href: "/cards/purple" },
    ],
  },
  {
    label: "Compare",
    href: "/vs/capitec",
    children: [
      { label: "vs Capitec", href: "/vs/capitec" },
      { label: "vs FNB", href: "/vs/fnb" },
      { label: "vs Nedbank", href: "/vs/nedbank" },
      { label: "vs Standard Bank", href: "/vs/standard-bank" },
      { label: "vs Absa", href: "/vs/absa" },
      { label: "vs TymeBank", href: "/vs/tymebank" },
    ],
  },
  { label: "Vitality Money", href: "/vitality-money" },
  { label: "Open Account", href: "/open-account" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Full Review", href: "/review" },
    { label: "Compare Cards", href: "/cards/compare" },
    { label: "Fees Breakdown", href: "/fees" },
    { label: "Vitality Money", href: "/vitality-money" },
    { label: "Savings Account", href: "/savings" },
  ],
  compare: [
    { label: "vs Capitec", href: "/vs/capitec" },
    { label: "vs FNB", href: "/vs/fnb" },
    { label: "vs Nedbank", href: "/vs/nedbank" },
    { label: "vs Standard Bank", href: "/vs/standard-bank" },
    { label: "vs Absa", href: "/vs/absa" },
    { label: "vs TymeBank", href: "/vs/tymebank" },
  ],
  resources: [
    { label: "Open Account", href: "/open-account" },
    { label: "Switching Guide", href: "/guides/switching-banks" },
    { label: "Rewards Calculator", href: "/calculator/rewards" },
    { label: "About Us", href: "/about" },
  ],
} as const;
