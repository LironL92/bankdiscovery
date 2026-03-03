export type BankComparison = {
  slug: string;
  bankName: string;
  bankShortName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  verdict: {
    winner: "discovery" | "competitor" | "tie";
    summary: string;
    details: string;
  };
  categories: ComparisonCategory[];
  discoveryBestFor: string[];
  competitorBestFor: string[];
  faqs: { question: string; answer: string }[];
};

export type ComparisonCategory = {
  name: string;
  rows: ComparisonRow[];
};

export type ComparisonRow = {
  feature: string;
  discovery: string;
  competitor: string;
  winner: "discovery" | "competitor" | "tie";
  tooltip?: string;
};

export const BANK_COMPARISONS: Record<string, BankComparison> = {
  capitec: {
    slug: "capitec",
    bankName: "Capitec Bank",
    bankShortName: "Capitec",
    title: "Discovery Bank vs Capitec: Honest Comparison (2025)",
    metaTitle: "Discovery Bank vs Capitec: Full Comparison (2025)",
    metaDescription:
      "Detailed comparison of Discovery Bank and Capitec. We compare fees, interest rates, rewards, app features, and more to help you pick the right bank.",
    lastUpdated: "2025-03-01",
    verdict: {
      winner: "tie",
      summary:
        "Capitec wins on simplicity and low fees. Discovery wins on rewards and savings rates. Your best choice depends on whether you value low costs or ecosystem rewards.",
      details:
        "If you want the cheapest, simplest banking experience with solid cashback, Capitec is hard to beat. But if you are already in the Discovery ecosystem (health, life, insure) or you value dynamic interest rates and Vitality rewards, Discovery Bank offers significantly more value, especially at higher Vitality Money statuses.",
    },
    categories: [
      {
        name: "Fees",
        rows: [
          {
            feature: "Monthly account fee",
            discovery: "R115 to R495 (up to 75% discount with Vitality)",
            competitor: "R0 to R6.50",
            winner: "competitor",
            tooltip:
              "Capitec's Global One is one of SA's cheapest accounts. Discovery fees can drop to R0 at Diamond Vitality status.",
          },
          {
            feature: "Card swipe / tap fee",
            discovery: "Included in bundle or R1.30",
            competitor: "Free",
            winner: "competitor",
          },
          {
            feature: "ATM withdrawal (own)",
            discovery: "R4.00 to R8.50",
            competitor: "R0 (in-app cash send to ATM)",
            winner: "competitor",
          },
          {
            feature: "Online banking / app",
            discovery: "Free",
            competitor: "Free",
            winner: "tie",
          },
          {
            feature: "PayShap fee",
            discovery: "Up to R12.00",
            competitor: "R3.00",
            winner: "competitor",
          },
        ],
      },
      {
        name: "Interest Rates",
        rows: [
          {
            feature: "Savings account rate",
            discovery: "Up to 7.35% (Diamond status)",
            competitor: "Up to 7.5% (fixed deposit)",
            winner: "tie",
            tooltip:
              "Discovery's demand savings rate is excellent; Capitec's best rates require fixed deposits.",
          },
          {
            feature: "Everyday account interest",
            discovery: "Up to 4% (Purple, Diamond)",
            competitor: "Up to 6.75% (tiered balance)",
            winner: "competitor",
          },
          {
            feature: "Fixed deposit rate",
            discovery: "Up to 7.5% (12 month)",
            competitor: "Up to 7.63% (12 month)",
            winner: "competitor",
          },
        ],
      },
      {
        name: "Rewards & Cashback",
        rows: [
          {
            feature: "Cashback programme",
            discovery: "Vitality Money (fuel, groceries, flights)",
            competitor: "1% cashback on all card purchases",
            winner: "discovery",
            tooltip:
              "Capitec's cashback is simple and universal. Discovery's is higher in specific categories.",
          },
          {
            feature: "Fuel rewards",
            discovery: "Up to 20% HealthyFuel cashback",
            competitor: "1% cashback",
            winner: "discovery",
          },
          {
            feature: "Grocery rewards",
            discovery: "Up to 20% HealthyFood cashback",
            competitor: "1% cashback",
            winner: "discovery",
          },
          {
            feature: "Health integration",
            discovery: "Full Vitality ecosystem integration",
            competitor: "None",
            winner: "discovery",
          },
        ],
      },
      {
        name: "App & Features",
        rows: [
          {
            feature: "App rating (App Store)",
            discovery: "4.7/5",
            competitor: "4.6/5",
            winner: "tie",
          },
          {
            feature: "Branches",
            discovery: "None (digital only)",
            competitor: "850+ branches nationwide",
            winner: "competitor",
          },
          {
            feature: "Investment features",
            discovery: "EasyEquities integration in-app",
            competitor: "No in-app investing",
            winner: "discovery",
          },
          {
            feature: "Customer base",
            discovery: "~1.5 million clients",
            competitor: "~22 million clients",
            winner: "tie",
          },
        ],
      },
    ],
    discoveryBestFor: [
      "People already in the Discovery ecosystem (health, life, insure)",
      "Those who want dynamic interest rates that reward healthy financial behaviour",
      "Higher earners who can reach Gold or Diamond Vitality Money status",
      "Anyone who values fuel and grocery cashback over flat-rate rewards",
      "People comfortable with digital-only banking",
    ],
    competitorBestFor: [
      "Budget-conscious South Africans who want the lowest possible fees",
      "Anyone who prefers branch access and face-to-face service",
      "People who want a simple, predictable 1% cashback on everything",
      "Those who don't use Discovery Health or Vitality products",
      "Anyone who values simplicity over ecosystem integration",
    ],
    faqs: [
      {
        question:
          "Is Discovery Bank cheaper than Capitec?",
        answer:
          "No, Capitec is significantly cheaper for basic banking. Capitec's Global One account costs R0 to R6.50 per month, while Discovery Bank starts at R115 per month for the Gold suite. However, Discovery Bank fees can be reduced by up to 75% through the Vitality Money programme, potentially bringing the Gold fee down to about R29 per month at Diamond status.",
      },
      {
        question:
          "Does Capitec have better interest rates than Discovery Bank?",
        answer:
          "It depends on the account type. Capitec generally offers slightly better fixed deposit rates (7.63% vs 7.5% for 12 months on R1 million). However, Discovery Bank's dynamic interest rates on demand savings can reach 7.35% at Diamond Vitality Money status, which is competitive for an account with no lock-in period.",
      },
      {
        question:
          "Which has a better app, Discovery Bank or Capitec?",
        answer:
          "Both apps are excellent, rated 4.6 to 4.7 on the App Store. Discovery Bank's app offers in-app investing through EasyEquities and detailed Vitality Money tracking. Capitec's app is known for its simplicity and speed. It comes down to whether you prefer feature depth (Discovery) or straightforward usability (Capitec).",
      },
      {
        question:
          "Can I have both a Discovery Bank and Capitec account?",
        answer:
          "Yes, many South Africans use both. A common strategy is using Capitec for low-fee everyday transactions and Discovery Bank for its rewards ecosystem and higher savings rates. There is no restriction on holding accounts at multiple banks.",
      },
      {
        question:
          "Which bank is safer, Discovery Bank or Capitec?",
        answer:
          "Both banks are registered with the South African Reserve Bank and deposits at both are protected by the same banking regulations. Discovery Bank is backed by Discovery Limited, a JSE-listed company with a market cap of over R100 billion. Capitec is also JSE-listed and one of SA's largest banks by customer count. Both are considered safe.",
      },
    ],
  },
  fnb: {
    slug: "fnb",
    bankName: "First National Bank (FNB)",
    bankShortName: "FNB",
    title: "Discovery Bank vs FNB: Honest Comparison (2025)",
    metaTitle: "Discovery Bank vs FNB: Full Comparison (2025)",
    metaDescription:
      "FNB or Discovery Bank? We compare fees, eBucks vs Vitality Money, interest rates, app features, and more. Find out which bank suits you best.",
    lastUpdated: "2025-03-01",
    verdict: {
      winner: "tie",
      summary:
        "FNB wins on branch access, eBucks flexibility, and established ecosystem. Discovery wins on interest rates, health rewards, and dynamic pricing.",
      details:
        "FNB is the safe choice: massive branch network, mature eBucks programme, and decades of trust. Discovery Bank is the disruptor: better interest rates 94% of the time, a unique health-meets-wealth rewards model, and a modern app. If you want a traditional full-service bank with flexible rewards, go FNB. If you want higher returns and value the Vitality ecosystem, Discovery Bank is worth the switch.",
    },
    categories: [
      {
        name: "Fees",
        rows: [
          {
            feature: "Monthly account fee (entry)",
            discovery: "R115 (Gold suite)",
            competitor: "R109 (Gold account)",
            winner: "tie",
            tooltip:
              "Very similar pricing at entry level. Both offer bundled options.",
          },
          {
            feature: "Monthly fee (premium)",
            discovery: "R295 (Black suite)",
            competitor: "R365 (Premier account)",
            winner: "discovery",
          },
          {
            feature: "Card swipe / tap fee",
            discovery: "Included in bundle or R1.30",
            competitor: "Included in bundle or R1.10",
            winner: "tie",
          },
          {
            feature: "ATM withdrawal (own)",
            discovery: "R4.00 to R8.50",
            competitor: "R4.00 to R9.00",
            winner: "tie",
          },
          {
            feature: "Fee reduction programme",
            discovery: "Up to 75% via Vitality Money",
            competitor: "Up to 100% via eBucks on selected fees",
            winner: "tie",
          },
        ],
      },
      {
        name: "Interest Rates",
        rows: [
          {
            feature: "Savings account rate",
            discovery: "Up to 7.35% (demand savings)",
            competitor: "Up to 5.25% (demand savings)",
            winner: "discovery",
            tooltip:
              "Discovery Bank offers significantly better demand savings rates across all tiers.",
          },
          {
            feature: "Fixed deposit rate (12 month)",
            discovery: "Up to 7.5%",
            competitor: "Up to 7.5%",
            winner: "tie",
          },
          {
            feature: "Everyday account interest",
            discovery: "Up to 4% (Purple, Diamond)",
            competitor: "Up to 2% (Premier)",
            winner: "discovery",
          },
        ],
      },
      {
        name: "Rewards & Cashback",
        rows: [
          {
            feature: "Rewards programme",
            discovery: "Vitality Money",
            competitor: "eBucks Rewards",
            winner: "tie",
            tooltip:
              "Different models: Vitality rewards healthy behaviour; eBucks rewards banking activity and spending.",
          },
          {
            feature: "Rewards flexibility",
            discovery: "Fuel, groceries, flights, gym",
            competitor: "eBucks at 35,000+ stores, Takealot, flights, data",
            winner: "competitor",
          },
          {
            feature: "Health integration",
            discovery: "Full Vitality ecosystem",
            competitor: "None",
            winner: "discovery",
          },
          {
            feature: "Partner ecosystem",
            discovery: "Discovery Health, Life, Insure, Invest",
            competitor: "Udemy, Kauai, Wimpy, car hire, vouchers",
            winner: "tie",
          },
        ],
      },
      {
        name: "App & Features",
        rows: [
          {
            feature: "App rating",
            discovery: "4.7/5",
            competitor: "4.5/5",
            winner: "discovery",
          },
          {
            feature: "Branches",
            discovery: "None (digital only)",
            competitor: "600+ branches nationwide",
            winner: "competitor",
          },
          {
            feature: "Investment features",
            discovery: "EasyEquities in-app",
            competitor: "FNB Share Investing",
            winner: "tie",
          },
          {
            feature: "International banking",
            discovery: "Foreign currency account, no forex fees on travel card",
            competitor: "Global account, forex in-app",
            winner: "tie",
          },
        ],
      },
    ],
    discoveryBestFor: [
      "People already using Discovery Health, Vitality, or Discovery Insure",
      "Savers who want the highest possible demand savings rates",
      "Those who value health-integrated financial rewards",
      "People comfortable with digital-only banking",
      "Anyone who wants interest on their everyday transaction balance",
    ],
    competitorBestFor: [
      "People who need branch access for in-person banking",
      "Those who love the flexibility of eBucks at thousands of partners",
      "Existing FNB customers with a high eBucks level",
      "Anyone who prefers an established, traditional banking relationship",
      "Business owners who need a full commercial banking suite",
    ],
    faqs: [
      {
        question:
          "Is Discovery Bank better than FNB?",
        answer:
          "It depends on what you value. Discovery Bank offers better interest rates 94% of the time and a unique health-rewards integration through Vitality Money. FNB offers a broader rewards ecosystem with eBucks, 600+ branches, and decades of established service. For savings and interest rates, Discovery wins. For flexibility and branch access, FNB wins.",
      },
      {
        question:
          "Which has better rewards, eBucks or Vitality Money?",
        answer:
          "eBucks is more flexible: you can spend rewards at over 35,000 stores, buy data, pay for Uber, and more. Vitality Money is more focused: it rewards healthy financial and physical behaviour with fuel cashback, grocery discounts, and flight savings. If you are active in the Discovery Vitality programme, Vitality Money can be more valuable. Otherwise, eBucks offers more day-to-day utility.",
      },
      {
        question:
          "Are Discovery Bank's interest rates really better than FNB?",
        answer:
          "Yes, in most cases. Discovery Bank's demand savings rate can reach 7.35% at Diamond Vitality Money status, compared to FNB's maximum of about 5.25% on demand savings. On fixed deposits, both offer around 7.5% for 12 months. The real difference is in demand savings and everyday account interest, where Discovery is significantly ahead.",
      },
      {
        question:
          "Can I switch from FNB to Discovery Bank easily?",
        answer:
          "Yes. Discovery Bank has a guided switching process in their app that helps you move debit orders, update salary deposits, and close your old account. The process takes about 2 to 4 weeks to complete fully. You can also run both accounts in parallel during the transition.",
      },
      {
        question:
          "Does Discovery Bank have branches like FNB?",
        answer:
          "No. Discovery Bank is fully digital with no physical branches. All banking is done through the app or call centre. FNB has over 600 branches across South Africa. If you regularly need in-person banking services, this is a significant consideration.",
      },
    ],
  },
};

export function getBankComparison(slug: string): BankComparison | undefined {
  return BANK_COMPARISONS[slug];
}

export const AVAILABLE_COMPARISONS = Object.keys(BANK_COMPARISONS);
