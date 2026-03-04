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
  "standard-bank": {
    slug: "standard-bank",
    bankName: "Standard Bank",
    bankShortName: "Standard Bank",
    title: "Discovery Bank vs Standard Bank: Honest Comparison (2025)",
    metaTitle: "Discovery Bank vs Standard Bank: Full Comparison (2025)",
    metaDescription:
      "Standard Bank or Discovery Bank? We compare fees, UCount vs Vitality Money, interest rates, branches, and more. Find out which bank suits you best.",
    lastUpdated: "2025-03-01",
    verdict: {
      winner: "tie",
      summary:
        "Standard Bank wins on branches, international presence, and business banking. Discovery wins on interest rates, dynamic rewards, and app experience.",
      details:
        "Standard Bank is Africa's largest bank by assets, with 600+ branches and deep expertise in business and international banking. Discovery Bank is the modern challenger: better savings rates, a unique health-meets-wealth rewards model, and a top-rated app. If you need a full-service bank with physical presence and global reach, go Standard Bank. If you want higher returns and value the Vitality ecosystem, Discovery Bank delivers more.",
    },
    categories: [
      {
        name: "Fees",
        rows: [
          {
            feature: "Monthly account fee (entry)",
            discovery: "R115 (Gold suite)",
            competitor: "R0 to R5.95 (Easy account)",
            winner: "competitor",
            tooltip:
              "Standard Bank's Easy account is one of the cheapest entry-level options. Discovery fees can drop significantly with Vitality status.",
          },
          {
            feature: "Monthly fee (premium)",
            discovery: "R295 (Black suite)",
            competitor: "R265 (Prestige account)",
            winner: "competitor",
          },
          {
            feature: "Monthly fee (private banking)",
            discovery: "R495 (Purple suite)",
            competitor: "R500+ (Private Banking Suite)",
            winner: "tie",
          },
          {
            feature: "Fee reduction programme",
            discovery: "Up to 75% via Vitality Money",
            competitor: "UCount Rewards points offset some costs",
            winner: "discovery",
            tooltip:
              "Discovery's Vitality Money discount is structured and predictable. Standard Bank's fee offsets through UCount are less direct.",
          },
          {
            feature: "Card swipe / tap fee",
            discovery: "Included in bundle or R1.30",
            competitor: "Included in bundle or R1.20",
            winner: "tie",
          },
        ],
      },
      {
        name: "Interest Rates",
        rows: [
          {
            feature: "Savings account rate",
            discovery: "Up to 7.35% (demand savings, Diamond)",
            competitor: "Up to 6.75% (fixed deposit)",
            winner: "discovery",
            tooltip:
              "Discovery's demand savings outperform Standard Bank's fixed deposits in most tiers.",
          },
          {
            feature: "Everyday account interest",
            discovery: "Up to 4% (Purple, Diamond)",
            competitor: "~4% (demand savings)",
            winner: "tie",
          },
          {
            feature: "Fixed deposit rate (12 month)",
            discovery: "Up to 7.5%",
            competitor: "Up to 6.75%",
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
            competitor: "UCount Rewards",
            winner: "tie",
            tooltip:
              "Different models: Vitality rewards healthy behaviour; UCount rewards banking activity and spending at partners.",
          },
          {
            feature: "Rewards partners",
            discovery: "Fuel, groceries, flights, gym",
            competitor: "Shoprite, Checkers, Clicks, Engen, and more",
            winner: "tie",
          },
          {
            feature: "Health integration",
            discovery: "Full Vitality ecosystem integration",
            competitor: "None",
            winner: "discovery",
          },
          {
            feature: "Points on card spend",
            discovery: "Vitality Money tiers based on status",
            competitor: "UCount points on every qualifying transaction",
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
            feature: "International banking",
            discovery: "Foreign currency account, no forex fees on travel card",
            competitor: "Africa's largest bank, global presence in 20+ countries",
            winner: "competitor",
          },
          {
            feature: "Business banking",
            discovery: "Limited business banking features",
            competitor: "Full commercial and business banking suite",
            winner: "competitor",
          },
        ],
      },
    ],
    discoveryBestFor: [
      "People already using Discovery Health, Vitality, or Discovery Insure",
      "Savers who want the highest possible demand savings rates",
      "Those who value health-integrated financial rewards",
      "People comfortable with digital-only banking and a top-rated app",
      "Anyone who wants dynamic fee discounts tied to healthy behaviour",
    ],
    competitorBestFor: [
      "People who need branch access across 600+ locations",
      "Business owners who need full commercial and business banking",
      "Those who value an established international banking presence",
      "Shoppers who earn UCount Rewards at Shoprite, Checkers, and Clicks",
      "Anyone who prefers Africa's largest and most established bank",
    ],
    faqs: [
      {
        question:
          "Is Discovery Bank better than Standard Bank?",
        answer:
          "It depends on your priorities. Discovery Bank offers better interest rates on savings and a unique health-rewards integration through Vitality Money. Standard Bank offers 600+ branches, a mature UCount Rewards programme, and deep business banking capabilities. For savings and digital banking, Discovery wins. For branch access and business banking, Standard Bank wins.",
      },
      {
        question:
          "Which has better interest rates, Discovery Bank or Standard Bank?",
        answer:
          "Discovery Bank generally offers better rates. Its demand savings rate can reach 7.35% at Diamond Vitality Money status, compared to Standard Bank's fixed deposit rate of up to 6.75%. Discovery also offers interest on everyday transaction balances, which Standard Bank does not match at the same level.",
      },
      {
        question:
          "How does UCount Rewards compare to Vitality Money?",
        answer:
          "UCount Rewards earns points on banking activity and lets you redeem at partners like Shoprite, Checkers, Clicks, and Engen. Vitality Money rewards healthy financial and physical behaviour with fuel cashback, grocery discounts, and flight savings. UCount is more traditional and partner-focused; Vitality Money is more dynamic and health-integrated.",
      },
      {
        question:
          "Does Standard Bank have a better app than Discovery Bank?",
        answer:
          "Discovery Bank's app is rated 4.7 out of 5, slightly higher than Standard Bank's 4.5. Discovery's app includes in-app investing through EasyEquities and detailed Vitality Money tracking. Standard Bank's app is comprehensive with a full suite of business and personal banking tools. Both are reliable and feature-rich.",
      },
      {
        question:
          "Can I switch from Standard Bank to Discovery Bank?",
        answer:
          "Yes. Discovery Bank offers a guided switching process in their app that helps you move debit orders, update salary deposits, and close your old account. The process takes about 2 to 4 weeks. You can run both accounts in parallel during the transition. Keep in mind that Discovery Bank has no branches, so all banking is done digitally.",
      },
    ],
  },
  nedbank: {
    slug: "nedbank",
    bankName: "Nedbank",
    bankShortName: "Nedbank",
    title: "Discovery Bank vs Nedbank: Honest Comparison (2025)",
    metaTitle: "Discovery Bank vs Nedbank: Full Comparison (2025)",
    metaDescription:
      "Nedbank or Discovery Bank? We compare fees, Greenbacks vs Vitality Money, interest rates, green banking, and more. Find out which bank suits you best.",
    lastUpdated: "2025-03-01",
    verdict: {
      winner: "tie",
      summary:
        "Nedbank wins on flexibility, branch access, and green banking initiatives. Discovery wins on interest rates and health-integrated rewards.",
      details:
        "Nedbank offers solid flexibility with its pay-as-you-use option, 500+ branches, and strong green banking credentials. Discovery Bank counters with better savings rates, the Vitality Money ecosystem, and a top-rated app. If you want a flexible, sustainability-conscious bank with physical presence, go Nedbank. If you want higher returns and value health-financial integration, Discovery Bank is the better fit.",
    },
    categories: [
      {
        name: "Fees",
        rows: [
          {
            feature: "Monthly account fee (entry)",
            discovery: "R115 (Gold suite)",
            competitor: "R0 (pay-as-you-use)",
            winner: "competitor",
            tooltip:
              "Nedbank's pay-as-you-use option has no monthly fee. Discovery fees can drop with Vitality status but start higher.",
          },
          {
            feature: "Monthly fee (bundled)",
            discovery: "R295 (Black suite)",
            competitor: "R199 (Bundle account)",
            winner: "competitor",
          },
          {
            feature: "Monthly fee (private banking)",
            discovery: "R495 (Purple suite)",
            competitor: "R400+ (Private Wealth)",
            winner: "competitor",
          },
          {
            feature: "Fee reduction programme",
            discovery: "Up to 75% via Vitality Money",
            competitor: "Greenbacks can offset some banking costs",
            winner: "discovery",
            tooltip:
              "Discovery's structured Vitality Money discounts are more predictable and can reach deeper reductions than Nedbank's Greenbacks offsets.",
          },
          {
            feature: "Card swipe / tap fee",
            discovery: "Included in bundle or R1.30",
            competitor: "Included in bundle or per transaction",
            winner: "tie",
          },
        ],
      },
      {
        name: "Interest Rates",
        rows: [
          {
            feature: "Savings account rate",
            discovery: "Up to 7.35% (demand savings, Diamond)",
            competitor: "Up to 7.25% (fixed deposit)",
            winner: "discovery",
            tooltip:
              "Discovery's demand savings rate at Diamond status edges out Nedbank's best fixed deposit rate, with the advantage of no lock-in period.",
          },
          {
            feature: "Everyday account interest",
            discovery: "Up to 4% (Purple, Diamond)",
            competitor: "~5.5% (Greenbacks Savings demand)",
            winner: "competitor",
          },
          {
            feature: "Fixed deposit rate (12 month)",
            discovery: "Up to 7.5%",
            competitor: "Up to 7.25%",
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
            competitor: "Greenbacks",
            winner: "tie",
            tooltip:
              "Different models: Vitality rewards healthy behaviour; Greenbacks rewards spending with flexible redemption options.",
          },
          {
            feature: "Rewards partners",
            discovery: "Fuel, groceries, flights, gym",
            competitor: "Checkers, Engen, Pick n Pay, and more",
            winner: "tie",
          },
          {
            feature: "Rewards flexibility",
            discovery: "Category-specific cashback and discounts",
            competitor: "Flexible redemption: cash, travel, shopping, charity",
            winner: "competitor",
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
            feature: "App rating",
            discovery: "4.7/5",
            competitor: "4.4/5",
            winner: "discovery",
          },
          {
            feature: "Branches",
            discovery: "None (digital only)",
            competitor: "500+ branches nationwide",
            winner: "competitor",
          },
          {
            feature: "Green banking",
            discovery: "Standard sustainability practices",
            competitor: "Dedicated green banking products and carbon tracking",
            winner: "competitor",
          },
          {
            feature: "Investment features",
            discovery: "EasyEquities in-app",
            competitor: "Nedbank Private Wealth investing",
            winner: "tie",
          },
        ],
      },
    ],
    discoveryBestFor: [
      "People already using Discovery Health, Vitality, or Discovery Insure",
      "Savers who want the highest possible demand savings rates",
      "Those who value health-integrated financial rewards and dynamic pricing",
      "People comfortable with digital-only banking and a top-rated app",
      "Anyone who wants structured fee discounts tied to Vitality status",
    ],
    competitorBestFor: [
      "People who want a pay-as-you-use account with no monthly fee",
      "Those who value branch access across 500+ locations",
      "Anyone passionate about green banking and sustainability initiatives",
      "People who prefer flexible Greenbacks redemption at multiple partners",
      "Those who want a traditional bank with strong private wealth management",
    ],
    faqs: [
      {
        question:
          "Is Discovery Bank better than Nedbank?",
        answer:
          "It depends on your priorities. Discovery Bank offers better interest rates and a unique health-rewards integration through Vitality Money. Nedbank offers more flexibility with its pay-as-you-use pricing, 500+ branches, strong green banking credentials, and the flexible Greenbacks programme. For savings and health integration, Discovery wins. For flexibility and branch access, Nedbank wins.",
      },
      {
        question:
          "Which has better interest rates, Discovery Bank or Nedbank?",
        answer:
          "Discovery Bank generally offers better rates on savings. Its demand savings rate can reach 7.35% at Diamond status, while Nedbank's best fixed deposit rate is up to 7.25%. However, Nedbank's Greenbacks Savings account offers around 5.5% on demand, which is competitive for everyday savings without Vitality status requirements.",
      },
      {
        question:
          "How does Greenbacks compare to Vitality Money?",
        answer:
          "Greenbacks earns points on spending at partners like Checkers, Engen, and Pick n Pay, with flexible redemption for cash, travel, shopping, or charity. Vitality Money rewards healthy financial and physical behaviour with fuel cashback, grocery discounts, and flight savings. Greenbacks is more flexible in how you redeem; Vitality Money is more dynamic in how you earn.",
      },
      {
        question:
          "Is Nedbank cheaper than Discovery Bank?",
        answer:
          "Yes, at face value. Nedbank's pay-as-you-use account has no monthly fee, compared to Discovery Bank's R115 starting fee for the Gold suite. Nedbank's Bundle account at R199 is also cheaper than Discovery's Black suite at R295. However, Discovery Bank fees can drop by up to 75% through Vitality Money, potentially making it cheaper for high-status Vitality members.",
      },
      {
        question:
          "Does Nedbank have green banking features?",
        answer:
          "Yes, Nedbank is a leader in green banking in South Africa. They offer carbon tracking tools, green investment products, and are committed to sustainability initiatives. Discovery Bank does not have dedicated green banking features, though its digital-only model naturally has a smaller physical footprint.",
      },
    ],
  },
  absa: {
    slug: "absa",
    bankName: "Absa Bank",
    bankShortName: "Absa",
    title: "Discovery Bank vs Absa: Honest Comparison (2025)",
    metaTitle: "Discovery Bank vs Absa: Full Comparison (2025)",
    metaDescription:
      "Absa or Discovery Bank? We compare fees, Absa Rewards vs Vitality Money, interest rates, branches, and more. Find out which bank suits you best.",
    lastUpdated: "2025-03-01",
    verdict: {
      winner: "tie",
      summary:
        "Absa wins on branches, established rewards, and business banking. Discovery wins on interest rates and health-financial integration.",
      details:
        "Absa is a traditional banking powerhouse with 600+ branches, a mature Absa Rewards programme, and comprehensive business banking. Discovery Bank counters with superior savings rates, the Vitality Money ecosystem, and a modern digital-first experience. If you need physical branches and an established rewards programme, go Absa. If you want higher returns and value health-integrated rewards, Discovery Bank is the stronger choice.",
    },
    categories: [
      {
        name: "Fees",
        rows: [
          {
            feature: "Monthly account fee (entry)",
            discovery: "R115 (Gold suite)",
            competitor: "R0 to R5.50 (Transact account)",
            winner: "competitor",
            tooltip:
              "Absa's Transact account is one of the cheapest entry-level options in South Africa. Discovery fees start higher but can be reduced with Vitality status.",
          },
          {
            feature: "Monthly fee (premium)",
            discovery: "R295 (Black suite)",
            competitor: "R179 (Premium account)",
            winner: "competitor",
          },
          {
            feature: "Monthly fee (wealth)",
            discovery: "R495 (Purple suite)",
            competitor: "R450+ (Wealth account)",
            winner: "competitor",
          },
          {
            feature: "Fee reduction programme",
            discovery: "Up to 75% via Vitality Money",
            competitor: "Absa Rewards offsets on selected fees",
            winner: "discovery",
            tooltip:
              "Discovery's Vitality Money discounts are more structured and can reach deeper reductions than Absa Rewards fee offsets.",
          },
          {
            feature: "Card swipe / tap fee",
            discovery: "Included in bundle or R1.30",
            competitor: "Included in bundle or R1.15",
            winner: "tie",
          },
        ],
      },
      {
        name: "Interest Rates",
        rows: [
          {
            feature: "Savings account rate",
            discovery: "Up to 7.35% (demand savings, Diamond)",
            competitor: "Up to 7.5% (fixed deposit)",
            winner: "tie",
            tooltip:
              "Absa's best rate requires a fixed deposit lock-in. Discovery's demand savings rate at Diamond status is competitive without any lock-in period.",
          },
          {
            feature: "Everyday account interest",
            discovery: "Up to 4% (Purple, Diamond)",
            competitor: "~5% (demand savings)",
            winner: "competitor",
          },
          {
            feature: "Fixed deposit rate (12 month)",
            discovery: "Up to 7.5%",
            competitor: "Up to 7.5%",
            winner: "tie",
          },
        ],
      },
      {
        name: "Rewards & Cashback",
        rows: [
          {
            feature: "Rewards programme",
            discovery: "Vitality Money",
            competitor: "Absa Rewards",
            winner: "tie",
            tooltip:
              "Different models: Vitality rewards healthy behaviour; Absa Rewards earns on card spend with partner redemption.",
          },
          {
            feature: "Earning mechanism",
            discovery: "Healthy financial and physical behaviour",
            competitor: "Earn on every qualifying card transaction",
            winner: "tie",
          },
          {
            feature: "Health integration",
            discovery: "Full Vitality ecosystem integration",
            competitor: "Linked to Vitality (separate from Discovery Vitality)",
            winner: "discovery",
            tooltip:
              "Absa has a Vitality partnership, but Discovery's integration is native and more deeply embedded across health, wealth, and insurance.",
          },
          {
            feature: "Partner redemption",
            discovery: "Fuel, groceries, flights, gym",
            competitor: "Redeem at selected retail and travel partners",
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
            competitor: "4.4/5",
            winner: "discovery",
          },
          {
            feature: "Branches",
            discovery: "None (digital only)",
            competitor: "600+ branches nationwide",
            winner: "competitor",
          },
          {
            feature: "Business banking",
            discovery: "Limited business banking features",
            competitor: "Full commercial and business banking suite",
            winner: "competitor",
          },
          {
            feature: "Investment features",
            discovery: "EasyEquities in-app",
            competitor: "Absa Stockbrokers and wealth management",
            winner: "tie",
          },
        ],
      },
    ],
    discoveryBestFor: [
      "People already using Discovery Health, Vitality, or Discovery Insure",
      "Savers who want the highest possible demand savings rates without lock-in",
      "Those who value deeply integrated health-financial rewards",
      "People comfortable with digital-only banking and a top-rated app",
      "Anyone who wants dynamic fee discounts tied to Vitality Money status",
    ],
    competitorBestFor: [
      "People who need branch access across 600+ locations",
      "Business owners who need full commercial banking capabilities",
      "Those who want an established rewards programme with broad partner redemption",
      "Anyone who prefers lower monthly fees on premium accounts",
      "People who want a traditional full-service bank with wealth management",
    ],
    faqs: [
      {
        question:
          "Is Discovery Bank better than Absa?",
        answer:
          "It depends on what you need. Discovery Bank offers better demand savings rates and a unique health-rewards integration through Vitality Money. Absa offers 600+ branches, a mature Absa Rewards programme, competitive premium account pricing, and comprehensive business banking. For savings and health integration, Discovery wins. For branch access and business banking, Absa wins.",
      },
      {
        question:
          "Which has better interest rates, Discovery Bank or Absa?",
        answer:
          "Discovery Bank generally wins on demand savings, offering up to 7.35% at Diamond status versus Absa's approximately 5% on demand. On fixed deposits, both offer up to 7.5% for 12 months, making them equal. The key difference is that Discovery's best demand rate has no lock-in period.",
      },
      {
        question:
          "How does Absa Rewards compare to Vitality Money?",
        answer:
          "Absa Rewards earns points on qualifying card transactions and lets you redeem at selected retail and travel partners. Vitality Money rewards healthy financial and physical behaviour with fuel cashback, grocery discounts, and flight savings. Absa also offers a separate Vitality partnership, but it is not as deeply integrated as Discovery Bank's native Vitality ecosystem.",
      },
      {
        question:
          "Is Absa cheaper than Discovery Bank?",
        answer:
          "Yes, at listed prices. Absa's Transact account starts at R0 to R5.50, and its Premium account is R179, compared to Discovery Bank's R115 Gold and R295 Black suites. However, Discovery Bank fees can drop by up to 75% through Vitality Money, which could make Discovery cheaper for members who achieve high Vitality status.",
      },
      {
        question:
          "Can I switch from Absa to Discovery Bank?",
        answer:
          "Yes. Discovery Bank has a guided switching process in their app that helps you move debit orders, update salary deposits, and close your old account. The process takes about 2 to 4 weeks. You can run both accounts in parallel during the transition. Note that Discovery Bank is fully digital with no branches, so ensure you are comfortable with app-based banking.",
      },
    ],
  },
  tymebank: {
    slug: "tymebank",
    bankName: "TymeBank",
    bankShortName: "TymeBank",
    title: "Discovery Bank vs TymeBank: Honest Comparison (2025)",
    metaTitle: "Discovery Bank vs TymeBank: Full Comparison (2025)",
    metaDescription:
      "TymeBank or Discovery Bank? We compare fees, savings rates, rewards, app features, and more. Find out which zero-fee or premium digital bank suits you best.",
    lastUpdated: "2025-03-01",
    verdict: {
      winner: "discovery",
      summary:
        "TymeBank only wins on fees (completely free). Discovery Bank wins on interest rates, rewards, features, and overall banking experience.",
      details:
        "TymeBank is South Africa's most affordable digital bank: R0 monthly fees, no minimum balance, and account opening at Pick n Pay or Boxer kiosks. But that is where the advantages end. Discovery Bank offers significantly better savings rates, a comprehensive rewards programme through Vitality Money, in-app investing, and a far richer feature set. TymeBank is ideal for ultra-budget-conscious users who need basic banking. Discovery Bank is the better choice for anyone who wants their bank to actively grow their wealth.",
    },
    categories: [
      {
        name: "Fees",
        rows: [
          {
            feature: "Monthly account fee",
            discovery: "R115 to R495 (up to 75% discount with Vitality)",
            competitor: "R0 (completely free)",
            winner: "competitor",
            tooltip:
              "TymeBank is one of the only banks in South Africa with truly zero monthly fees. Discovery fees start at R115 but can be reduced through Vitality Money.",
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
            competitor: "R4.00 at Pick n Pay/Boxer tills",
            winner: "tie",
          },
          {
            feature: "Online banking / app",
            discovery: "Free",
            competitor: "Free",
            winner: "tie",
          },
          {
            feature: "Account opening",
            discovery: "In-app (fully digital)",
            competitor: "At Pick n Pay/Boxer kiosks or in-app",
            winner: "tie",
          },
        ],
      },
      {
        name: "Interest Rates",
        rows: [
          {
            feature: "Savings account rate",
            discovery: "Up to 7.35% (demand savings, Diamond)",
            competitor: "Up to 7.5% (GoalSave, tiered)",
            winner: "tie",
            tooltip:
              "TymeBank's GoalSave rate is competitive but tiered by balance. Discovery's rate requires Diamond Vitality Money status but applies to demand savings with no lock-in.",
          },
          {
            feature: "Everyday account interest",
            discovery: "Up to 4% (Purple, Diamond)",
            competitor: "0%",
            winner: "discovery",
          },
          {
            feature: "Fixed deposit rate",
            discovery: "Up to 7.5% (12 month)",
            competitor: "Not available",
            winner: "discovery",
          },
        ],
      },
      {
        name: "Rewards & Cashback",
        rows: [
          {
            feature: "Rewards programme",
            discovery: "Vitality Money (fuel, groceries, flights)",
            competitor: "No rewards programme",
            winner: "discovery",
          },
          {
            feature: "Cashback",
            discovery: "Up to 20% on fuel and groceries",
            competitor: "No cashback",
            winner: "discovery",
          },
          {
            feature: "Health integration",
            discovery: "Full Vitality ecosystem integration",
            competitor: "None",
            winner: "discovery",
          },
          {
            feature: "Partner discounts",
            discovery: "Flights, gym, fuel, groceries, and more",
            competitor: "None",
            winner: "discovery",
          },
        ],
      },
      {
        name: "App & Features",
        rows: [
          {
            feature: "App rating",
            discovery: "4.7/5",
            competitor: "4.1/5",
            winner: "discovery",
          },
          {
            feature: "Branches / physical presence",
            discovery: "None (digital only)",
            competitor: "No branches; Pick n Pay/Boxer kiosks for account opening",
            winner: "tie",
          },
          {
            feature: "Credit card",
            discovery: "Visa credit card included with account",
            competitor: "No credit card available",
            winner: "discovery",
          },
          {
            feature: "Investment features",
            discovery: "EasyEquities in-app",
            competitor: "No investment features",
            winner: "discovery",
          },
        ],
      },
    ],
    discoveryBestFor: [
      "People who want a full-featured digital banking experience",
      "Savers who want the highest possible demand savings rates",
      "Those who value rewards, cashback, and health-financial integration",
      "Anyone who wants a credit card, investment features, and concierge services",
      "People already in the Discovery ecosystem (health, life, insure)",
    ],
    competitorBestFor: [
      "Ultra-budget-conscious South Africans who want completely free banking",
      "People who only need basic transactional banking with no frills",
      "Those who want to open an account quickly at a Pick n Pay or Boxer kiosk",
      "Anyone who cannot afford or does not want to pay monthly banking fees",
      "People who want a simple savings account with a competitive GoalSave rate",
    ],
    faqs: [
      {
        question:
          "Is Discovery Bank better than TymeBank?",
        answer:
          "For features, rewards, and savings rates, yes. Discovery Bank offers Vitality Money rewards, in-app investing, a credit card, and demand savings rates up to 7.35%. TymeBank offers completely free banking with no monthly fees and a competitive GoalSave rate, but lacks a rewards programme, credit card, or investment features. TymeBank is better only if your primary goal is zero fees.",
      },
      {
        question:
          "Is TymeBank really free?",
        answer:
          "Yes. TymeBank charges R0 per month with no minimum balance requirement. Card swipes and online payments are also free. You only pay for ATM withdrawals and a few other specific transactions. It is one of the most affordable banking options in South Africa.",
      },
      {
        question:
          "Which has better savings rates, Discovery Bank or TymeBank?",
        answer:
          "Both offer competitive rates. TymeBank's GoalSave account offers up to 7.5% but is tiered by balance amount. Discovery Bank's demand savings can reach 7.35% at Diamond Vitality Money status with no lock-in. Discovery also offers up to 4% on everyday transaction balances, while TymeBank pays 0% on its everyday account.",
      },
      {
        question:
          "Does TymeBank have a rewards programme?",
        answer:
          "No. TymeBank does not have a rewards programme, cashback, or partner discounts. This is one of the biggest differences compared to Discovery Bank, which offers the comprehensive Vitality Money programme with up to 20% cashback on fuel and groceries, flight discounts, and more.",
      },
      {
        question:
          "Can I use TymeBank as my primary bank?",
        answer:
          "Yes, but with limitations. TymeBank handles basic transactions, debit orders, and savings well. However, it lacks a credit card, investment features, airport lounge access, concierge services, and a rewards programme. For basic day-to-day banking on a budget, it works. For a full-service banking experience, Discovery Bank is more complete.",
      },
    ],
  },
};

export function getBankComparison(slug: string): BankComparison | undefined {
  return BANK_COMPARISONS[slug];
}

export const AVAILABLE_COMPARISONS = Object.keys(BANK_COMPARISONS);
