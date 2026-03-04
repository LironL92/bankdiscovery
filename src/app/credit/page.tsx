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
  title: "Discovery Bank Credit Card: Features, Rates & How to Apply (2025)",
  description:
    "Complete guide to Discovery Bank credit cards. Compare Gold, Platinum, Black, and Purple credit card features, interest rates, Discovery Miles, and how to apply.",
  path: "/credit",
});

const CREDIT_FAQS = [
  {
    question: "What interest rate does Discovery Bank charge on credit cards?",
    answer:
      "Discovery Bank credit card interest rates vary based on your individual credit profile, income, and the prevailing repo rate. The rate is not determined by your Vitality Money status. As a guideline, rates in South Africa typically range from prime (currently around 11.75%) to prime plus 7% or more depending on risk. Your personalised rate is disclosed during the application process.",
  },
  {
    question: "Can I get a Discovery Bank credit card without the full banking suite?",
    answer:
      "Yes. Discovery Bank offers a standalone Credit Card Account. Monthly fees are R50 (Gold), R70 (Platinum), R100 (Black), or R145 (Purple). You still get access to Vitality Money rewards and Discovery Miles. However, the Full Banking Suite (which includes a transaction account and credit card) offers better overall value for most customers.",
  },
  {
    question: "How do Discovery Miles work on credit card spend?",
    answer:
      "You earn Discovery Miles on qualifying credit card transactions. The earning rate depends on your card tier and Vitality Money status. Miles can be redeemed for flights on partner airlines, car hire, hotel stays, and at Vitality partner merchants. Higher card tiers and higher Vitality Money status increase your miles earning rate by up to 50%.",
  },
  {
    question: "What credit limit can I expect from Discovery Bank?",
    answer:
      "Your credit limit is determined by your income, credit history, and affordability assessment as required by the National Credit Act. Discovery Bank does not publish fixed credit limit ranges per tier. Your offered limit is disclosed during the application process. You can request a limit increase through the app after demonstrating responsible credit use.",
  },
  {
    question: "How do I apply for a Discovery Bank credit card?",
    answer:
      "Download the Discovery Bank app, complete the application form with your personal details, provide proof of income (payslip or bank statements), and submit your South African ID. You will receive a credit decision, typically within minutes. If approved, your card is delivered within 3 to 5 business days. You can start using the virtual card immediately for online purchases.",
  },
];

const CREDIT_FEATURES_BY_TIER = [
  {
    tier: "Gold",
    tierColor: "text-yellow-600 dark:text-yellow-400",
    monthlyFee: "R50",
    suiteFee: "R115",
    income: "Up to R350,000/year",
    fuelCashback: "Up to 7.5%",
    groceryCashback: "Up to 7.5%",
    loungeAccess: "None",
    concierge: false,
    deviceInsurance: false,
    milesBoost: "Base rate",
  },
  {
    tier: "Platinum",
    tierColor: "text-slate-500 dark:text-slate-400",
    monthlyFee: "R70",
    suiteFee: "R170",
    income: "R350K - R850K/year",
    fuelCashback: "Up to 10%",
    groceryCashback: "Up to 10%",
    loungeAccess: "Limited domestic",
    concierge: false,
    deviceInsurance: false,
    milesBoost: "Enhanced rate",
  },
  {
    tier: "Black",
    tierColor: "text-navy-600 dark:text-cream",
    monthlyFee: "R100",
    suiteFee: "R295",
    income: "R850K - R2.5M/year",
    fuelCashback: "Up to 15%",
    groceryCashback: "Up to 15%",
    loungeAccess: "Domestic + international",
    concierge: true,
    deviceInsurance: true,
    milesBoost: "Premium rate",
  },
  {
    tier: "Purple",
    tierColor: "text-purple-600 dark:text-purple-400",
    monthlyFee: "R145",
    suiteFee: "R495",
    income: "Over R2.5M/year",
    fuelCashback: "Up to 20%",
    groceryCashback: "Up to 20%",
    loungeAccess: "Unlimited worldwide",
    concierge: true,
    deviceInsurance: true,
    milesBoost: "Maximum rate (up to 50% boost)",
  },
];

export default function CreditPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(CREDIT_FAQS)} />

      <div className="container-narrow py-12">
        <BreadcrumbNav items={[{ label: "Credit Card", href: "/credit" }]} />
        <LastUpdated date={SITE.lastUpdated} />

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mt-4 mb-6">
          Discovery Bank Credit Card: Features, Rates and How to Apply
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          The Discovery Bank credit card is not just a credit facility. It is your entry point into
          the Vitality Money rewards ecosystem, where responsible credit use earns you fee
          discounts, higher savings rates, Discovery Miles, and cashback of up to 20% at partner
          merchants.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          Here is everything you need to know about the credit card offering across all four tiers,
          including how interest rates work, what you earn on spend, and how to decide between a
          standalone credit card and the full banking suite.
        </p>

        {/* Credit card features by tier */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Credit card features by tier
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-5 font-medium text-slate-500 dark:text-slate-400">Feature</th>
                  {CREDIT_FEATURES_BY_TIER.map((t) => (
                    <th key={t.tier} className={`text-center py-4 px-3 font-medium ${t.tierColor}`}>{t.tier}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Credit card fee", key: "monthlyFee" as const },
                  { label: "Full suite fee", key: "suiteFee" as const },
                  { label: "Income requirement", key: "income" as const },
                  { label: "Fuel cashback", key: "fuelCashback" as const },
                  { label: "Grocery cashback", key: "groceryCashback" as const },
                  { label: "Lounge access", key: "loungeAccess" as const },
                  { label: "Discovery Miles boost", key: "milesBoost" as const },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/25" : ""}>
                    <td className="py-3 px-5 font-medium text-slate-600 dark:text-slate-300">{row.label}</td>
                    {CREDIT_FEATURES_BY_TIER.map((t) => (
                      <td key={t.tier} className="py-3 px-3 text-center text-slate-700 dark:text-slate-200">
                        {t[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="py-3 px-5 font-medium text-slate-600 dark:text-slate-300">Concierge</td>
                  {CREDIT_FEATURES_BY_TIER.map((t) => (
                    <td key={t.tier} className="py-3 px-3 text-center">
                      {t.concierge ? (
                        <svg className="w-5 h-5 text-accent mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="bg-slate-50/50 dark:bg-slate-800/25">
                  <td className="py-3 px-5 font-medium text-slate-600 dark:text-slate-300">Device insurance</td>
                  {CREDIT_FEATURES_BY_TIER.map((t) => (
                    <td key={t.tier} className="py-3 px-3 text-center">
                      {t.deviceInsurance ? (
                        <svg className="w-5 h-5 text-accent mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            All monthly fees can be reduced by up to 75% at Diamond Vitality Money status. Cashback rates shown are maximum rates at Diamond status.
          </p>
        </section>

        <ReferralCodeBlock />

        {/* Interest rates */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            Credit card interest rates
          </h2>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Unlike savings rates, your credit card interest rate is not determined by your
              Vitality Money status or card tier. It is based on your individual credit profile,
              including your credit score, income, existing debt, and the prevailing repo rate set
              by the South African Reserve Bank.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Important:</strong> Your personalised interest rate is disclosed during the
                application process before you accept. Discovery Bank is required by the National
                Credit Act to assess affordability and provide full cost disclosures before you commit.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-500 dark:text-slate-400">Typical range</p>
                <p className="text-lg font-bold text-navy-600 dark:text-cream">Prime to Prime + 7%</p>
                <p className="text-xs text-slate-400 mt-1">Based on credit profile</p>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-500 dark:text-slate-400">Current prime rate</p>
                <p className="text-lg font-bold text-navy-600 dark:text-cream">11.75%</p>
                <p className="text-xs text-slate-400 mt-1">As of March 2025</p>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-500 dark:text-slate-400">Interest-free period</p>
                <p className="text-lg font-bold text-navy-600 dark:text-cream">Up to 55 days</p>
                <p className="text-xs text-slate-400 mt-1">If balance paid in full</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-4">
              <strong className="text-navy-600 dark:text-cream">Pro tip:</strong> If you pay your
              full balance every month before the due date, you pay zero interest. The interest-free
              period of up to 55 days makes the credit card a powerful cash flow tool when used
              responsibly.
            </p>
          </div>
        </section>

        {/* Credit limit */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            Credit limits
          </h2>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Your credit limit is determined during the application process based on your income,
              expenses, existing credit obligations, and credit history. Discovery Bank is required
              by the National Credit Act to conduct a thorough affordability assessment, which means
              your limit will be tailored to what you can responsibly manage.
            </p>
            <div className="space-y-3">
              {[
                { label: "How it is determined", value: "Income, credit score, existing debt, and affordability assessment" },
                { label: "Minimum limit", value: "Varies by tier and credit profile" },
                { label: "Limit increases", value: "Can be requested through the app after demonstrating responsible use" },
                { label: "Temporary increases", value: "Available for travel or large purchases through the app" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <div>
                    <span className="font-medium text-navy-600 dark:text-cream">{item.label}: </span>
                    <span className="text-slate-600 dark:text-slate-300">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-12">
          <CTABanner
            heading="Apply for your credit card"
            subtext={`Open your Discovery Bank account with referral code ${SITE.referralCode}. Get a credit decision in minutes and start earning rewards on every swipe.`}
          />
        </div>

        {/* How to apply */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            How to apply for a Discovery Bank credit card
          </h2>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="space-y-4">
              {[
                { step: "1", title: "Download the Discovery Bank app", detail: "Available on iOS and Android. The entire application process happens in the app." },
                { step: "2", title: "Complete the application form", detail: "Provide your personal details, South African ID number, and employment information." },
                { step: "3", title: "Upload proof of income", detail: "Your latest payslip, letter of employment, or 3 months of bank statements. Self-employed applicants can provide tax returns." },
                { step: "4", title: "Enter your referral code", detail: `Use code ${SITE.referralCode} during sign-up to earn up to 5,000 Discovery Miles. This cannot be added after sign-up.` },
                { step: "5", title: "Receive your credit decision", detail: "Most applicants receive an instant decision. Some cases may take up to 24 hours for review." },
                { step: "6", title: "Start spending with your virtual card", detail: "Once approved, your virtual card is available immediately in the app. Your physical card arrives in 3 to 5 business days." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-medium text-navy-600 dark:text-cream">{item.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credit card vs full suite */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Credit card only vs Full Banking Suite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-serif text-lg font-semibold text-navy-600 dark:text-cream mb-3">
                Credit Card Account Only
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                R50 - R145/month (before Vitality Money discounts)
              </p>
              <ul className="space-y-2">
                {[
                  "Access to Discovery Bank credit facility",
                  "Vitality Money rewards on credit card spend",
                  "Discovery Miles earning",
                  "Cashback at partner merchants",
                  "Good option if you already have a transaction account elsewhere",
                  "No transaction account or savings account included",
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
                Best for: People who want Discovery rewards without switching banks.
              </p>
            </div>
            <div className="bg-accent/5 dark:bg-accent/10 border border-accent/20 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-navy-600 dark:text-cream mb-3">
                Full Banking Suite
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                R115 - R495/month (before Vitality Money discounts)
              </p>
              <ul className="space-y-2">
                {[
                  "Transaction account with bundled transactions",
                  "Credit card included",
                  "Savings account with up to 7.35% interest",
                  "Up to 4% interest on everyday balances",
                  "Full Vitality Money rewards across all behaviours",
                  "Higher referral bonus (5,000 vs 2,500 Discovery Miles)",
                  "Easier to reach Diamond status with all five behaviours tracked",
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
                Best for: Anyone ready to make Discovery Bank their primary bank. Better overall value.
              </p>
            </div>
          </div>
        </section>

        {/* Discovery Miles on credit */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            Earning Discovery Miles on credit card spend
          </h2>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Every qualifying credit card transaction earns Discovery Miles. Your earning rate
              increases with both your card tier and your Vitality Money status. At Diamond status
              on the Purple tier, you can earn up to 50% more miles than the base rate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                { title: "Everyday purchases", description: "Earn miles on every card swipe, tap, and online purchase. The base earning rate applies to all qualifying transactions." },
                { title: "Partner merchants", description: "Earn boosted miles at Discovery Vitality partner merchants including Woolworths, BP, and Engen. Combine with cashback for double rewards." },
                { title: "Travel bookings", description: "Earn enhanced miles when booking flights, hotels, and car hire through the Discovery Vitality travel platform." },
                { title: "Vitality Money boost", description: "Your miles earning rate increases as your Vitality Money status improves. Diamond status provides the maximum boost of up to 50%." },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                  <p className="font-medium text-navy-600 dark:text-cream text-sm">{item.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              <strong className="text-navy-600 dark:text-cream">How to redeem:</strong> Discovery
              Miles can be redeemed for flights on SAA, Emirates, and other partners, hotel stays,
              car hire, and at Vitality partner stores. Miles can also be used towards Discovery Life
              premiums or donated to charity.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <ReferralCodeBlock />
        </div>

        <FAQAccordion faqs={CREDIT_FAQS} />

        <CTABanner
          heading="Ready to apply?"
          subtext={`Open your Discovery Bank account with referral code ${SITE.referralCode}. Get your credit card, start earning Discovery Miles, and unlock Vitality Money rewards from your first transaction.`}
        />
      </div>
    </>
  );
}
