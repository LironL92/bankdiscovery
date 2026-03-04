import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/schema/metadata";
import { JsonLd, generateFAQSchema } from "@/lib/schema/generate-schema";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { CTABanner } from "@/components/conversion/CTABanner";
import { ReferralCodeBlock } from "@/components/conversion/ReferralCodeBlock";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Discovery Bank Savings: Interest Rates & Account Guide (2025)",
  description:
    "Discovery Bank savings accounts offer up to 7.35% interest on demand savings. Compare rates by card tier and Vitality Money status. See how Discovery compares to Capitec, FNB, and TymeBank.",
  path: "/savings",
});

const SAVINGS_FAQS = [
  {
    question: "What interest rate does Discovery Bank pay on savings?",
    answer:
      "Discovery Bank pays up to 7.35% per annum on demand savings accounts. The exact rate depends on your card tier (Gold, Platinum, Black, or Purple) and your Vitality Money status (Blue through Diamond). At Blue status on the Gold tier, the base rate is lower. At Diamond status on the Purple tier, you receive the maximum 7.35%.",
  },
  {
    question: "Do I need to lock my money away to get the best rate?",
    answer:
      "No. Discovery Bank's headline savings rates are on demand savings accounts, meaning you can access your money at any time without penalty. This is a significant advantage over fixed deposits at other banks, where you typically need to lock your money away for 12 months or more to get comparable rates.",
  },
  {
    question: "Does Discovery Bank offer fixed deposits?",
    answer:
      "Yes. Discovery Bank offers fixed deposit accounts with terms ranging from 7 days to 60 months. Fixed deposit rates are generally higher than demand savings rates and also benefit from Vitality Money boosts. However, your money is locked for the full term and early withdrawal may attract penalties.",
  },
  {
    question: "How is interest calculated and paid on Discovery Bank savings?",
    answer:
      "Interest is calculated daily on your closing balance and paid monthly into your savings account. There is no minimum balance required to earn interest. The rate is variable and tied to your Vitality Money status, which is recalculated monthly.",
  },
  {
    question: "Can I earn interest on my everyday transaction account?",
    answer:
      "Yes. Discovery Bank pays interest on positive balances in your everyday transaction account. The rate goes up to 4% per annum at Diamond Vitality Money status on the Purple tier. This is unusual among South African banks and means your spending money earns returns while it sits in your account.",
  },
  {
    question: "How do Discovery Bank savings rates compare to Capitec?",
    answer:
      "Capitec offers up to 7.5% on fixed savings (money locked for 12+ months) and around 5% to 6% on flexible savings. Discovery Bank offers up to 7.35% on demand savings (instant access) with no lock-in. If you value flexibility and access to your money, Discovery Bank's demand savings rate is highly competitive. If you are happy locking money away, Capitec's fixed deposit rate is marginally higher.",
  },
];

const SAVINGS_RATES_BY_TIER = [
  {
    tier: "Gold",
    tierColor: "text-yellow-600 dark:text-yellow-400",
    blue: "3.50%",
    bronze: "4.25%",
    silver: "5.00%",
    gold: "5.75%",
    diamond: "6.50%",
  },
  {
    tier: "Platinum",
    tierColor: "text-slate-500 dark:text-slate-400",
    blue: "3.75%",
    bronze: "4.50%",
    silver: "5.25%",
    gold: "6.00%",
    diamond: "6.75%",
  },
  {
    tier: "Black",
    tierColor: "text-navy-600 dark:text-cream",
    blue: "4.00%",
    bronze: "4.75%",
    silver: "5.50%",
    gold: "6.25%",
    diamond: "7.00%",
  },
  {
    tier: "Purple",
    tierColor: "text-purple-600 dark:text-purple-400",
    blue: "4.25%",
    bronze: "5.10%",
    silver: "5.85%",
    gold: "6.60%",
    diamond: "7.35%",
  },
];

const EVERYDAY_RATES = [
  { tier: "Gold", diamond: "Up to 2.5%", tierColor: "text-yellow-600 dark:text-yellow-400" },
  { tier: "Platinum", diamond: "Up to 3%", tierColor: "text-slate-500 dark:text-slate-400" },
  { tier: "Black", diamond: "Up to 3.5%", tierColor: "text-navy-600 dark:text-cream" },
  { tier: "Purple", diamond: "Up to 4%", tierColor: "text-purple-600 dark:text-purple-400" },
];

export default function SavingsPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(SAVINGS_FAQS)} />

      <div className="container-narrow py-12">
        <BreadcrumbNav items={[{ label: "Savings", href: "/savings" }]} />
        <LastUpdated date={SITE.lastUpdated} />

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mt-4 mb-6">
          Discovery Bank Savings: Interest Rates and Account Guide
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Discovery Bank offers some of the highest savings interest rates in South Africa, with
          up to 7.35% on demand savings accounts. The key difference is that you do not need to
          lock your money into a fixed deposit to earn a competitive rate. Your rate is dynamic,
          improving as your Vitality Money status rises.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          Here is exactly what you can earn, how the rates work across card tiers and Vitality Money
          statuses, and how Discovery Bank compares to other savings options in South Africa.
        </p>

        {/* Interest rate table */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            Demand savings interest rates by tier and status
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Your savings interest rate depends on two factors: your card tier (Gold, Platinum, Black,
            or Purple) and your Vitality Money status (Blue through Diamond). The table below shows
            the annual interest rate for each combination.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-5 font-medium text-slate-500 dark:text-slate-400">Card Tier</th>
                  <th className="text-center py-4 px-3 font-medium text-blue-600 dark:text-blue-400">Blue</th>
                  <th className="text-center py-4 px-3 font-medium text-amber-700 dark:text-amber-400">Bronze</th>
                  <th className="text-center py-4 px-3 font-medium text-slate-500 dark:text-slate-400">Silver</th>
                  <th className="text-center py-4 px-3 font-medium text-yellow-600 dark:text-yellow-400">Gold</th>
                  <th className="text-center py-4 px-3 font-medium text-accent">Diamond</th>
                </tr>
              </thead>
              <tbody>
                {SAVINGS_RATES_BY_TIER.map((row, i) => (
                  <tr key={row.tier} className={i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/25" : ""}>
                    <td className={`py-3 px-5 font-semibold ${row.tierColor}`}>{row.tier}</td>
                    <td className="py-3 px-3 text-center text-slate-700 dark:text-slate-200">{row.blue}</td>
                    <td className="py-3 px-3 text-center text-slate-700 dark:text-slate-200">{row.bronze}</td>
                    <td className="py-3 px-3 text-center text-slate-700 dark:text-slate-200">{row.silver}</td>
                    <td className="py-3 px-3 text-center text-slate-700 dark:text-slate-200">{row.gold}</td>
                    <td className="py-3 px-3 text-center font-semibold text-accent">{row.diamond}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            Rates are indicative and subject to change. Interest is calculated daily and paid monthly. These are demand savings rates with no lock-in period.
          </p>
        </section>

        <ReferralCodeBlock />

        {/* Demand vs fixed deposit */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Demand savings vs fixed deposits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-serif text-lg font-semibold text-navy-600 dark:text-cream mb-3">
                Demand Savings Account
              </h3>
              <ul className="space-y-2">
                {[
                  "Up to 7.35% interest per annum",
                  "Access your money anytime, no lock-in",
                  "Rate improves with Vitality Money status",
                  "No minimum balance required",
                  "Interest calculated daily, paid monthly",
                  "Rate is variable and can change",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-accent font-medium mt-4">
                Best for: Most savers who want flexibility and competitive returns.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-serif text-lg font-semibold text-navy-600 dark:text-cream mb-3">
                Fixed Deposit Account
              </h3>
              <ul className="space-y-2">
                {[
                  "Higher rates than demand savings",
                  "Terms from 7 days to 60 months",
                  "Rate locked for the full term",
                  "Vitality Money boosts still apply",
                  "Early withdrawal penalties may apply",
                  "Minimum deposit typically required",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-accent font-medium mt-4">
                Best for: Savers with a specific goal date who do not need access to funds.
              </p>
            </div>
          </div>
        </section>

        {/* Everyday account interest */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            Earn interest on your everyday account
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            One of Discovery Bank&apos;s most underrated features is that you earn interest on the
            money sitting in your everyday transaction account. Most South African banks pay 0% on
            transaction account balances. Discovery Bank pays up to 4% per annum at Diamond status
            on the Purple tier. This means your spending money is working for you even before you
            move it to savings.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {EVERYDAY_RATES.map((item) => (
              <div
                key={item.tier}
                className="bg-accent/5 dark:bg-accent/10 border border-accent/20 rounded-xl p-4 text-center"
              >
                <p className={`font-semibold text-sm ${item.tierColor}`}>{item.tier}</p>
                <p className="text-2xl font-bold text-accent mt-1">{item.diamond}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">at Diamond status</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <CTABanner
            heading="Start earning better interest"
            subtext={`Open your Discovery Bank account with referral code ${SITE.referralCode}. Your savings start earning competitive interest from day one.`}
          />
        </div>

        {/* Comparison with competitors */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            How Discovery Bank savings compare to other banks
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-5 font-medium text-slate-500 dark:text-slate-400">Feature</th>
                  <th className="text-center py-4 px-4 font-medium text-accent">Discovery Bank</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600 dark:text-slate-300">Capitec</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600 dark:text-slate-300">FNB</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600 dark:text-slate-300">TymeBank</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Best demand savings rate", discovery: "Up to 7.35%", capitec: "~5-6%", fnb: "Up to 5.25%", tyme: "Up to 6.5%" },
                  { feature: "Best fixed deposit rate", discovery: "Higher than demand", capitec: "Up to 7.5%", fnb: "~5.5-6%", tyme: "Up to 7.5%" },
                  { feature: "Everyday account interest", discovery: "Up to 4%", capitec: "0%", fnb: "0%", tyme: "0%" },
                  { feature: "Lock-in required for best rate", discovery: "No", capitec: "Yes (12+ months)", fnb: "Yes", tyme: "Yes (GoalSave)" },
                  { feature: "Rate linked to behaviour", discovery: "Yes (Vitality Money)", capitec: "No", fnb: "No", tyme: "No" },
                  { feature: "Monthly account fee", discovery: "R115 - R495", capitec: "R0", fnb: "R109+", tyme: "R0" },
                  { feature: "No. of savings accounts", discovery: "Multiple goals", capitec: "Flexible Save", fnb: "Savings Pocket", tyme: "GoalSave" },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/25" : ""}>
                    <td className="py-3 px-5 font-medium text-slate-600 dark:text-slate-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.discovery}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.capitec}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.fnb}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.tyme}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            {SITE.comparisonDisclaimer}
          </p>
        </section>

        {/* How to maximise savings */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            How to maximise your Discovery Bank savings rate
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Your savings rate is not fixed. It improves as your Vitality Money status rises. Here
            are the most effective ways to boost your status and earn the highest possible rate.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "1. Save at least 15% of your income",
                description:
                  "This is the single most impactful behaviour for your Vitality Money status. Set up an automatic transfer to your Discovery Bank savings account on payday. The system measures your savings ratio, so consistency matters more than the absolute amount.",
                iconPath: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "2. Ensure you have adequate insurance",
                description:
                  "Having car, home, and life insurance contributes to your Vitality Money status. Discovery Insure products count automatically. If you have third-party insurance, upload proof in the app so it is recognised.",
                iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "3. Keep credit utilisation below 30%",
                description:
                  "If you have a Discovery Bank credit card, keeping your utilisation low demonstrates good financial management. Pay your balance in full each month for maximum Vitality Money points in this category.",
                iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
              },
              {
                title: "4. Contribute to retirement",
                description:
                  "Even a small monthly retirement annuity contribution counts towards your Vitality Money status. This behaviour rewards long-term financial planning and can meaningfully boost your savings rate.",
                iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              },
              {
                title: "5. Stay within your monthly budget",
                description:
                  "Spending less than you earn is the fifth Vitality Money behaviour. Use the in-app spending tracker to monitor your budget. This is often the easiest behaviour to maintain once you are conscious of it.",
                iconPath: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tip.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-600 dark:text-cream">{tip.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <ReferralCodeBlock />
        </div>

        <FAQAccordion faqs={SAVINGS_FAQS} />

        <CTABanner
          heading="Ready to earn up to 7.35% on your savings?"
          subtext={`Open your Discovery Bank account with referral code ${SITE.referralCode}. Start building your Vitality Money status and watch your savings rate climb.`}
        />
      </div>
    </>
  );
}
