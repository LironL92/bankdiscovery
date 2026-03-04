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
  title: "Vitality Money Explained: How Discovery Bank Rewards Work (2025)",
  description:
    "Complete guide to Vitality Money statuses, rewards, fee discounts, and interest rate boosts. Learn how to reach Diamond status and maximise your Discovery Bank benefits.",
  path: "/vitality-money",
});

const VITALITY_MONEY_FAQS = [
  {
    question: "Do I need a Discovery Vitality membership to use Vitality Money?",
    answer:
      "No. Vitality Money is built into every Discovery Bank account at no extra cost. However, if you do have a Discovery Vitality membership (through Discovery Health or purchased separately), your health activities contribute additional points that can accelerate your Vitality Money status progression.",
  },
  {
    question: "How long does it take to reach Diamond status?",
    answer:
      "It depends on your financial behaviour. Some customers reach Diamond within 3 to 6 months by actively managing all five financial behaviours. Others may take 12 months or more. The key actions are: saving at least 15% of income, having adequate insurance, managing credit well, contributing to retirement, and spending within budget.",
  },
  {
    question: "Can my Vitality Money status go down?",
    answer:
      "Yes. Vitality Money status is recalculated monthly based on your ongoing financial behaviour. If your financial habits decline, your status can drop. This means the rewards are tied to consistent good behaviour, not a one-time achievement.",
  },
  {
    question: "Does Vitality Money status affect my credit card interest rate?",
    answer:
      "No. Vitality Money status affects your savings interest rates, monthly fee discounts, and cashback rates. Credit card interest rates are determined by your credit profile and the prevailing market rates, not your Vitality Money status.",
  },
  {
    question: "What is the difference between Vitality Money and Vitality Health?",
    answer:
      "Vitality Money measures your financial wellness (saving, insuring, credit management, retirement planning, and responsible spending). Vitality Health measures your physical wellness (exercise, health checks, nutrition). They are separate programmes, but having both can boost your overall Discovery rewards as health activity contributes to your banking rewards.",
  },
  {
    question: "Are Vitality Money fee discounts applied automatically?",
    answer:
      "Yes. Once your Vitality Money status improves, the corresponding fee discount is applied automatically to your next billing cycle. You do not need to apply or claim the discount. The discount percentage is displayed in the Discovery Bank app.",
  },
];

const STATUS_LEVELS = [
  {
    name: "Blue",
    color: "bg-blue-400",
    textColor: "text-blue-600 dark:text-blue-400",
    feeDiscount: "0%",
    savingsBoost: "Base rate",
    cashback: "Base rate",
    description: "Starting status. You get access to Vitality Money but no additional rewards yet.",
  },
  {
    name: "Bronze",
    color: "bg-amber-600",
    textColor: "text-amber-700 dark:text-amber-400",
    feeDiscount: "Up to 25%",
    savingsBoost: "Small boost",
    cashback: "Small boost",
    description: "First reward tier. Start seeing benefits from improved financial behaviour.",
  },
  {
    name: "Silver",
    color: "bg-slate-400",
    textColor: "text-slate-500 dark:text-slate-400",
    feeDiscount: "Up to 50%",
    savingsBoost: "Moderate boost",
    cashback: "Moderate boost",
    description: "Meaningful fee reductions. Most active users reach Silver within a few months.",
  },
  {
    name: "Gold",
    color: "bg-gold",
    textColor: "text-gold dark:text-yellow-400",
    feeDiscount: "Up to 60%",
    savingsBoost: "Strong boost",
    cashback: "Strong boost",
    description: "Significant rewards. Your banking fees become genuinely competitive at this level.",
  },
  {
    name: "Diamond",
    color: "bg-accent",
    textColor: "text-accent",
    feeDiscount: "Up to 75%",
    savingsBoost: "Maximum rate",
    cashback: "Maximum rate",
    description: "Top tier. Maximum rewards across fees, interest rates, and cashback.",
  },
];

const FINANCIAL_BEHAVIOURS = [
  {
    title: "Save regularly",
    description:
      "Maintain a healthy savings balance relative to your income. Aim to save at least 15% of your monthly income in your Discovery Bank savings account.",
    tip: "Set up an automatic monthly transfer to your savings account on payday.",
    iconPath: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Insure your assets",
    description:
      "Have appropriate insurance coverage for your car, home, and life. Discovery Insure products contribute directly, but third-party insurance also counts.",
    tip: "Upload proof of your existing insurance policies in the app if they are not with Discovery.",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Manage credit well",
    description:
      "Keep your credit utilisation low and make payments on time. Avoid using more than 30% of your available credit limit.",
    tip: "Pay your full credit card balance each month, or at minimum well above the required amount.",
    iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    title: "Plan for retirement",
    description:
      "Contribute to a retirement annuity or pension fund. This behaviour shows long-term financial planning and is rewarded accordingly.",
    tip: "Even a small monthly retirement contribution counts towards your Vitality Money status.",
    iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Spend responsibly",
    description:
      "Stay within your monthly budget and avoid unnecessary debt. Discovery tracks your spending-to-income ratio as a measure of financial discipline.",
    tip: "Use the in-app spending tracker to monitor your budget and stay within your means.",
    iconPath: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
];

export default function VitalityMoneyPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(VITALITY_MONEY_FAQS)} />

      <div className="container-narrow py-12">
        <BreadcrumbNav items={[{ label: "Vitality Money", href: "/vitality-money" }]} />
        <LastUpdated date={SITE.lastUpdated} />

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mt-4 mb-6">
          Vitality Money Explained: How Discovery Bank Rewards You
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Vitality Money is the engine behind Discovery Bank. It is a behavioural rewards programme
          that measures how well you manage your finances and rewards you with lower fees, higher
          interest rates, and better cashback. The better your financial behaviour, the more you earn.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          Unlike loyalty programmes at other banks, Vitality Money is dynamic. Your rewards change
          monthly based on five measurable financial behaviours. Here is exactly how it works.
        </p>

        {/* How it works overview */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            How Vitality Money works
          </h2>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div>
                  <p className="font-medium text-navy-600 dark:text-cream">You manage your money well</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Discovery measures five financial behaviours: saving, insuring, credit management, retirement planning, and spending responsibly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <div>
                  <p className="font-medium text-navy-600 dark:text-cream">Your status improves</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Points from these behaviours determine your status: Blue, Bronze, Silver, Gold, or Diamond. Status is recalculated monthly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <div>
                  <p className="font-medium text-navy-600 dark:text-cream">Your rewards increase</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Higher status unlocks: up to 75% off fees, up to 7.35% savings interest, up to 4% on everyday balances, and up to 20% cashback at partner merchants.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReferralCodeBlock />

        {/* Status levels */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            The five Vitality Money statuses
          </h2>
          <div className="space-y-4">
            {STATUS_LEVELS.map((status, i) => (
              <div
                key={status.name}
                className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-4 h-4 rounded-full ${status.color}`} />
                  <h3 className={`font-serif text-lg font-semibold ${status.textColor}`}>
                    {status.name}
                  </h3>
                  {i === STATUS_LEVELS.length - 1 && (
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      Best rewards
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{status.description}</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Fee discount</p>
                    <p className="text-sm font-semibold text-navy-600 dark:text-cream">{status.feeDiscount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Savings rate</p>
                    <p className="text-sm font-semibold text-navy-600 dark:text-cream">{status.savingsBoost}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Cashback</p>
                    <p className="text-sm font-semibold text-navy-600 dark:text-cream">{status.cashback}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diamond rewards highlight */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            What Diamond status unlocks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { value: "Up to 75%", label: "Monthly fee discount", detail: "Gold suite drops from R115 to ~R29/mo" },
              { value: "Up to 7.35%", label: "Demand savings rate", detail: "On Purple tier. No fixed deposit required" },
              { value: "Up to 4%", label: "Everyday account interest", detail: "Earn on money sitting in your transaction account" },
              { value: "Up to 20%", label: "Fuel and grocery cashback", detail: "At Discovery partner merchants" },
              { value: "Up to 75%", label: "Flight and gym discounts", detail: "Through the Discovery Vitality ecosystem" },
              { value: "Up to 50%", label: "Discovery Miles boost", detail: "Earn more miles on qualifying transactions" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-accent/5 dark:bg-accent/10 border border-accent/20 rounded-xl p-5"
              >
                <p className="text-2xl font-bold text-accent">{item.value}</p>
                <p className="font-medium text-navy-600 dark:text-cream mt-1">{item.label}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <CTABanner
            heading="Want these rewards?"
            subtext={`Open your Discovery Bank account with referral code ${SITE.referralCode} and start building your Vitality Money status from day one.`}
          />
        </div>

        {/* Five behaviours */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            The five financial behaviours that determine your status
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Each behaviour earns you points. The total points determine your Vitality Money status.
            You do not need to be perfect in all five areas — strong performance in three or four
            behaviours can still get you to Gold or Diamond status.
          </p>
          <div className="space-y-6">
            {FINANCIAL_BEHAVIOURS.map((behaviour) => (
              <div
                key={behaviour.title}
                className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={behaviour.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-600 dark:text-cream">{behaviour.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {behaviour.description}
                    </p>
                    <p className="text-sm text-accent mt-2 font-medium">
                      Tip: {behaviour.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Health integration */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            The health-meets-wealth advantage
          </h2>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              If you are a Discovery Vitality member (through Discovery Health medical aid or a standalone
              Vitality membership), your health activities directly boost your banking rewards. Exercise,
              health screenings, and healthy food purchases all contribute points that accelerate your
              Vitality Money status progression.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
              This &quot;health meets wealth&quot; model is what makes Discovery Bank genuinely unique in global banking.
              No other bank in the world connects your physical health to your financial rewards in this way.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
              <strong className="text-navy-600 dark:text-cream">Important:</strong> You do not need a
              Vitality membership to open a Discovery Bank account or earn Vitality Money rewards. The
              membership is an accelerator, not a requirement.
            </p>
          </div>
        </section>

        {/* Comparison with other bank rewards */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            How Vitality Money compares to other bank rewards
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-5 font-medium text-slate-500 dark:text-slate-400">Feature</th>
                  <th className="text-center py-4 px-4 font-medium text-accent">Vitality Money</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600 dark:text-slate-300">FNB eBucks</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600 dark:text-slate-300">Capitec</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Fee discounts", discovery: "Up to 75%", fnb: "Partial via eBucks", capitec: "None" },
                  { feature: "Savings rate boost", discovery: "Yes, dynamic", fnb: "No", capitec: "No" },
                  { feature: "Cashback", discovery: "Up to 20%", fnb: "eBucks rewards", capitec: "1% flat" },
                  { feature: "Health integration", discovery: "Yes", fnb: "No", capitec: "No" },
                  { feature: "Status recalculation", discovery: "Monthly", fnb: "Quarterly", capitec: "N/A" },
                  { feature: "Rewards on everyday balance", discovery: "Up to 4%", fnb: "No", capitec: "No" },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/25" : ""}>
                    <td className="py-3 px-5 font-medium text-slate-600 dark:text-slate-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.discovery}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.fnb}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.capitec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-12">
          <ReferralCodeBlock />
        </div>

        <FAQAccordion faqs={VITALITY_MONEY_FAQS} />

        <CTABanner
          heading="Ready to start earning?"
          subtext={`Open your Discovery Bank account with referral code ${SITE.referralCode}. Your Vitality Money journey starts the moment your account is active.`}
        />
      </div>
    </>
  );
}
