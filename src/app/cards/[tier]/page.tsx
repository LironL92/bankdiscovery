import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/schema/metadata";
import {
  JsonLd,
  generateFAQSchema,
  generateFinancialProductSchema,
} from "@/lib/schema/generate-schema";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { AuthorCard } from "@/components/ui/AuthorCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CardTierVisual } from "@/components/content/CardTierVisual";
import { CTABanner } from "@/components/conversion/CTABanner";
import { ReferralCodeBlock } from "@/components/conversion/ReferralCodeBlock";
import { CARD_TIERS, getCardTier } from "@/lib/content/card-tiers";
import { FEE_SCHEDULE } from "@/lib/content/fees";
import { SITE } from "@/lib/content/site";
import type { FAQ } from "@/lib/content/faqs";

type Props = {
  params: { tier: string };
};

/* -------------------------------------------------------------------------- */
/*  Static params                                                              */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return CARD_TIERS.map((t) => ({ tier: t.slug }));
}

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export function generateMetadata({ params }: Props): Metadata {
  const tier = getCardTier(params.tier);
  if (!tier) return {};

  const title = `Discovery Bank ${tier.name} Card: Fees, Benefits & Review (2025)`;
  const description = `Everything you need to know about the Discovery Bank ${tier.name} card. Monthly fee R${tier.monthlyFee}, ${tier.savingsRate.toLowerCase()}, ${tier.fuelCashback.toLowerCase()} fuel cashback. Full fee schedule, benefits, and who the ${tier.name} tier is best for.`;

  return generatePageMetadata({
    title,
    description,
    path: `/cards/${tier.slug}`,
    ogType: "article",
  });
}

/* -------------------------------------------------------------------------- */
/*  Tier-specific FAQs                                                         */
/* -------------------------------------------------------------------------- */

const TIER_FAQS: Record<string, FAQ[]> = {
  gold: [
    {
      question: "Is the Discovery Bank Gold card worth it?",
      answer:
        "Yes, for many South Africans the Gold card offers excellent value. At R115 per month (reducible to as low as R29 at Diamond Vitality Money status), you get access to the full Vitality Money rewards ecosystem, up to 6.5% on demand savings, and up to 7.5% cashback on fuel and groceries. If you engage with the Vitality Money programme, the rewards can far exceed the monthly cost.",
    },
    {
      question: "Can I get the Discovery Bank Gold card fee down to R0?",
      answer:
        "The Gold card monthly fee can be reduced by up to 75% through Vitality Money status, bringing it down to approximately R29 per month at Diamond status. While it cannot reach exactly R0, the discount makes it one of the most affordable full-service banking options in South Africa.",
    },
    {
      question: "What income do I need for the Discovery Bank Gold card?",
      answer:
        "The Gold card is available to individuals earning up to R350,000 per year (approximately R29,000 per month before tax). There is no minimum income requirement, making it accessible to young professionals, students with income, and anyone starting their banking journey.",
    },
    {
      question: "How does Discovery Bank Gold compare to Capitec?",
      answer:
        "While Capitec offers a lower monthly fee, Discovery Bank Gold provides a comprehensive rewards programme that Capitec cannot match. The Vitality Money programme offers cashback on fuel and groceries, dynamic interest rates on savings, and integration with Discovery Health and Vitality. If you actively engage with the rewards system, the Gold card delivers more net value despite the higher base fee.",
    },
  ],
  platinum: [
    {
      question: "Is the Discovery Bank Platinum card worth the extra cost over Gold?",
      answer:
        "If you earn between R350,000 and R850,000 per year, the Platinum card is generally worth the upgrade. For R55 more per month than Gold, you get higher savings rates (up to 6.75% vs 6.5%), better everyday interest (up to 3% vs 2.5%), higher fuel and grocery cashback (up to 10% vs 7.5%), and higher transaction limits. The enhanced rewards typically recover the fee difference within the first month.",
    },
    {
      question: "What income do I need for the Discovery Bank Platinum card?",
      answer:
        "The Platinum card requires a gross annual income between R350,000 and R850,000 (approximately R29,000 to R71,000 per month before tax). Discovery Bank verifies your income during the application process, so you need to meet this threshold to qualify.",
    },
    {
      question: "Does the Discovery Bank Platinum card include lounge access?",
      answer:
        "The Platinum card includes limited domestic airport lounge access. This is a step up from the Gold card (which has no lounge access) but does not include international lounges. If frequent international lounge access is important to you, consider the Black or Purple tiers.",
    },
    {
      question: "Can I reduce the Platinum card monthly fee?",
      answer:
        "Yes. Like all Discovery Bank tiers, the Platinum card fee of R170 per month can be reduced by up to 75% through the Vitality Money programme. At Diamond status, the fee drops to approximately R43 per month, making it highly competitive for the level of benefits provided.",
    },
  ],
  black: [
    {
      question: "Is the Discovery Bank Black card worth R295 per month?",
      answer:
        "For earners between R850,000 and R2.5 million per year, the Black card is often the best value tier in Discovery Bank's lineup. At R295 per month (reducible to approximately R74 at Diamond status), you get domestic and international lounge access, a concierge service, free device insurance, up to 7% on savings, and up to 15% cashback on fuel and groceries. The concierge and lounge access alone can justify the fee for frequent travellers.",
    },
    {
      question: "What lounge access does the Discovery Bank Black card include?",
      answer:
        "The Black card provides access to both domestic and international airport lounges. This includes major South African airport lounges (Johannesburg, Cape Town, Durban) as well as participating international lounges through the bank's global lounge network. The number of free visits may be subject to a cap depending on your Vitality Money status.",
    },
    {
      question: "Does the Discovery Bank Black card include device insurance?",
      answer:
        "Yes. The Black card includes free device insurance covering your smartphone and laptop. This is a significant benefit, as standalone device insurance in South Africa typically costs R100-R200 per month. The insurance covers accidental damage, theft, and mechanical breakdown, subject to Discovery Insure's terms and conditions.",
    },
    {
      question: "How does the Discovery Bank Black card compare to FNB Private Wealth?",
      answer:
        "Both target similar income brackets, but they differ in approach. Discovery Bank Black rewards healthy financial behaviour through Vitality Money, offering up to 15% cashback and dynamic interest rates. FNB Private Wealth focuses on eBucks rewards and a broader lifestyle offering. Discovery Bank Black typically offers higher savings rates and better cashback percentages, while FNB may offer more retail partner integrations through eBucks.",
    },
  ],
  purple: [
    {
      question: "Who qualifies for the Discovery Bank Purple card?",
      answer:
        "The Purple card is reserved for individuals earning over R2.5 million per year (approximately R208,000 per month before tax). It is Discovery Bank's most exclusive tier, designed for high-net-worth individuals who want the maximum possible rewards and premium banking benefits.",
    },
    {
      question: "Is the Discovery Bank Purple card worth R495 per month?",
      answer:
        "For high-net-worth individuals, the Purple card delivers exceptional value. At Diamond Vitality Money status, the fee reduces to approximately R124 per month. In return, you get the highest savings rates (up to 7.35%), maximum cashback (up to 20% on fuel and groceries), unlimited lounge access worldwide, a dedicated concierge team, comprehensive device insurance, and the highest transaction limits available. The rewards easily exceed the cost for active users.",
    },
    {
      question: "What makes the Purple card different from the Black card?",
      answer:
        "The Purple card upgrades every aspect of the Black card: savings rates increase from 7% to 7.35%, everyday interest from 3.5% to 4%, fuel and grocery cashback from 15% to 20%. Lounge access becomes unlimited (no visit caps), the concierge is a dedicated team rather than a shared service, and transaction and card limits are the highest available. For those who qualify, the incremental R200 per month is offset by significantly higher rewards.",
    },
    {
      question: "Does the Discovery Bank Purple card offer travel insurance?",
      answer:
        "The Purple card includes comprehensive device insurance and access to premium travel-related benefits, including unlimited domestic and international lounge access and a dedicated concierge that can assist with travel arrangements. For full travel insurance cover, Discovery recommends pairing your Purple banking suite with Discovery Insure's travel product for comprehensive protection.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Tier-specific "Who is this for?" copy                                      */
/* -------------------------------------------------------------------------- */

const TIER_RECOMMENDATIONS: Record<string, { audience: string; reasons: string[] }> = {
  gold: {
    audience:
      "The Gold card is ideal for young professionals, graduates entering the workforce, and anyone earning up to R350,000 per year who wants to start building good financial habits while earning meaningful rewards.",
    reasons: [
      "You are starting your career and want a bank that rewards financial discipline",
      "You want access to fuel and grocery cashback without a high monthly fee",
      "You are a Discovery Health or Vitality member and want to maximise your ecosystem benefits",
      "You value a modern banking app with spending insights and budgeting tools",
      "You want competitive savings rates without locking your money away",
    ],
  },
  platinum: {
    audience:
      "The Platinum card suits established professionals earning between R350,000 and R850,000 per year who want enhanced rewards and higher limits without jumping to a premium price point.",
    reasons: [
      "You have outgrown entry-level banking and want better interest rates on your savings",
      "You want meaningful fuel and grocery cashback (up to 10%) that offsets the monthly fee",
      "You travel domestically and would benefit from airport lounge access",
      "You need higher daily transaction limits for your lifestyle",
      "You want the best rewards-to-fee ratio in the Discovery Bank range",
    ],
  },
  black: {
    audience:
      "The Black card is built for high earners between R850,000 and R2.5 million per year who want premium perks, including lounge access, concierge, and device insurance, at a price point that still delivers strong value for money.",
    reasons: [
      "You travel frequently and want domestic and international lounge access included",
      "You want a concierge service for travel bookings, reservations, and errands",
      "You carry expensive devices and want free phone and laptop insurance",
      "You want up to 15% cashback on fuel and groceries to offset everyday expenses",
      "You value premium banking without the ultra-premium price tag of the Purple tier",
    ],
  },
  purple: {
    audience:
      "The Purple card is designed for South Africa's top earners, those making over R2.5 million per year, who demand the absolute best from their banking and want the highest possible rewards across every category.",
    reasons: [
      "You want the maximum savings rate (up to 7.35%) available at Discovery Bank",
      "You want up to 20% cashback on fuel and groceries, the highest in the range",
      "You travel extensively and want unlimited worldwide lounge access",
      "You expect a dedicated concierge team, not a shared service",
      "You need the highest transaction and card limits for high-value purchases and transfers",
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*  Page component                                                             */
/* -------------------------------------------------------------------------- */

export default function CardTierPage({ params }: Props) {
  const tier = getCardTier(params.tier);
  if (!tier) notFound();

  const faqs = TIER_FAQS[tier.slug] ?? [];
  const recommendation = TIER_RECOMMENDATIONS[tier.slug];

  return (
    <>
      {/* JSON-LD: FAQ + FinancialProduct */}
      <JsonLd
        data={[
          generateFAQSchema(faqs),
          generateFinancialProductSchema({
            name: `Discovery Bank ${tier.name} Card`,
            description: tier.description,
            url: `${SITE.url}/cards/${tier.slug}`,
            category: "Banking",
            feesAndCommissionsSpecification: `Monthly fee: R${tier.monthlyFee}. ${tier.monthlyFeeNote}.`,
          }),
        ]}
      />

      <div className="container-narrow py-12">
        {/* Breadcrumbs */}
        <BreadcrumbNav
          items={[
            { label: "Cards", href: "/cards/compare" },
            { label: `${tier.name} Card`, href: `/cards/${tier.slug}` },
          ]}
        />
        <LastUpdated date={SITE.lastUpdated} />

        {/* H1 */}
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mt-4 mb-4">
          Discovery Bank {tier.name} Card
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-3xl">
          {tier.description}
        </p>

        {/* Card Visual (full variant) */}
        <div className="max-w-sm mb-12">
          <CardTierVisual tier={tier} />
        </div>

        {/* Key Stats Grid */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            {tier.name} card at a glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <StatCard label="Monthly Fee" value={`R${tier.monthlyFee}`} note={tier.monthlyFeeNote} />
            <StatCard label="Income Requirement" value={tier.incomeRequirement} />
            <StatCard label="Savings Rate" value={tier.savingsRate} note="At Diamond Vitality Money status" />
            <StatCard label="Everyday Rate" value={tier.everydayRate} note="On transaction account balance" />
            <StatCard label="Fuel Cashback" value={tier.fuelCashback} note="At HealthyFuel partner stations" />
            <StatCard label="Grocery Cashback" value={tier.groceryCashback} note="At HealthyFood partner stores" />
          </div>
        </section>

        {/* Additional perks row for Black / Purple */}
        {(tier.concierge || tier.freeDeviceInsurance || tier.loungeAccess !== "None") && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
              Premium perks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {tier.loungeAccess !== "None" && (
                <PerkCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  }
                  title="Lounge Access"
                  description={tier.loungeAccess}
                />
              )}
              {tier.concierge && (
                <PerkCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  title="Concierge Service"
                  description={tier.slug === "purple" ? "Dedicated concierge team" : "Personal concierge service"}
                />
              )}
              {tier.freeDeviceInsurance && (
                <PerkCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  }
                  title="Device Insurance"
                  description={tier.slug === "purple" ? "Comprehensive phone and laptop cover" : "Free phone and laptop insurance"}
                />
              )}
            </div>
          </section>
        )}

        {/* Benefits list */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Full list of {tier.name} card benefits
          </h2>
          <ul className="space-y-3">
            {tier.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Mid-content CTA */}
        <div className="mb-12">
          <ReferralCodeBlock />
        </div>

        {/* Fee Schedule for this tier */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            {tier.name} card fee schedule
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            All fees shown are before Vitality Money discounts. At Diamond status, monthly account
            fees can be reduced by up to 75%.
          </p>
          <div className="space-y-8">
            {FEE_SCHEDULE.map((category) => (
              <div key={category.name}>
                <h3 className="font-serif text-lg font-semibold text-navy-600 dark:text-cream mb-3">
                  {category.name}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                        <th className="text-left py-3 pr-4 font-medium text-slate-500 dark:text-slate-400">
                          Fee
                        </th>
                        <th className="text-right py-3 pl-4 font-medium text-navy-600 dark:text-cream">
                          {tier.name} Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.fees.map((fee, i) => (
                        <tr
                          key={fee.name}
                          className={`border-b border-slate-100 dark:border-slate-800 ${
                            i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/25" : ""
                          }`}
                        >
                          <td className="py-3 pr-4 text-slate-600 dark:text-slate-300 font-medium">
                            {fee.name}
                            {fee.tooltip && (
                              <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5 font-normal">
                                {fee.tooltip}
                              </span>
                            )}
                          </td>
                          <td className="py-3 pl-4 text-right text-slate-700 dark:text-slate-200 font-medium">
                            {fee[tier.slug as keyof typeof fee]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who is this card for? */}
        {recommendation && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
              Who is the {tier.name} card for?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {recommendation.audience}
            </p>
            <p className="font-medium text-navy-600 dark:text-cream mb-3">
              The {tier.name} card is a good fit if:
            </p>
            <ul className="space-y-2">
              {recommendation.reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {reason}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Compare link */}
        <div className="mb-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-3">
            Not sure the {tier.name} card is right for you?
          </p>
          <Link
            href="/cards/compare"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-600 font-medium transition-colors"
          >
            Compare all Discovery Bank cards side by side
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* CTA Banner */}
        <CTABanner
          heading={`Ready to get the ${tier.name} card?`}
          subtext={`Use referral code ${SITE.referralCode} when you open your Discovery Bank ${tier.name} account. Earn up to 5,000 Discovery Miles.`}
        />

        {/* FAQs */}
        {faqs.length > 0 && (
          <FAQAccordion
            faqs={faqs}
            heading={`Discovery Bank ${tier.name} Card FAQ`}
          />
        )}

        {/* Author */}
        <AuthorCard />

        {/* Disclaimer */}
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          {SITE.disclaimer}
        </p>

        {/* Final CTA */}
        <CTABanner
          heading={`Open your Discovery Bank ${tier.name} account`}
          subtext={`Join thousands of South Africans earning rewards on everyday spending. Use code ${SITE.referralCode} for up to 5,000 Discovery Miles.`}
        />
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Helper components                                                          */
/* -------------------------------------------------------------------------- */

function StatCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="text-lg font-bold text-navy-600 dark:text-cream">{value}</p>
      {note && (
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{note}</p>
      )}
    </div>
  );
}

function PerkCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-5 flex items-start gap-4">
      <div className="text-accent flex-shrink-0">{icon}</div>
      <div>
        <p className="font-medium text-navy-600 dark:text-cream">{title}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{description}</p>
      </div>
    </div>
  );
}
