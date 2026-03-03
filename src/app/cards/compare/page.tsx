import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/schema/metadata";
import { JsonLd, generateFinancialProductSchema } from "@/lib/schema/generate-schema";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { CardTierVisual } from "@/components/content/CardTierVisual";
import { FeeTable } from "@/components/content/FeeTable";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { CTABanner } from "@/components/conversion/CTABanner";
import { ReferralCodeBlock } from "@/components/conversion/ReferralCodeBlock";
import { CARD_TIERS, CARD_COMPARISON_FEATURES } from "@/lib/content/card-tiers";
import { FEE_SCHEDULE } from "@/lib/content/fees";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Compare Discovery Bank Cards: Gold vs Platinum vs Black vs Purple",
  description:
    "Side-by-side comparison of all Discovery Bank card tiers. Compare monthly fees, benefits, interest rates, and rewards for Gold, Platinum, Black, and Purple.",
  path: "/cards/compare",
});

export default function CardComparePage() {
  return (
    <>
      <JsonLd
        data={generateFinancialProductSchema({
          name: "Discovery Bank Card Tiers Comparison",
          description:
            "Compare all four Discovery Bank card tiers: Gold, Platinum, Black, and Purple. Fees, benefits, and rewards compared.",
          url: `${SITE.url}/cards/compare`,
          category: "Banking",
        })}
      />

      <div className="container-wide py-12">
        <BreadcrumbNav
          items={[
            { label: "Cards", href: "/cards/compare" },
            { label: "Compare", href: "/cards/compare" },
          ]}
        />
        <LastUpdated date={SITE.lastUpdated} />

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mt-4 mb-4">
          Compare Discovery Bank Cards
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-3xl">
          Discovery Bank offers four card tiers, each designed for a different income bracket.
          Here is a complete comparison to help you pick the right one.
        </p>

        {/* Visual Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {CARD_TIERS.map((tier) => (
            <CardTierVisual key={tier.slug} tier={tier} compact />
          ))}
        </div>

        {/* CTA after visual cards */}
        <div className="mb-12">
          <ReferralCodeBlock />
        </div>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Feature-by-feature comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 pr-4 font-medium text-slate-500 dark:text-slate-400">
                    Feature
                  </th>
                  {CARD_TIERS.map((tier) => (
                    <th key={tier.slug} className="text-center py-3 px-3 font-medium text-navy-600 dark:text-cream">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CARD_COMPARISON_FEATURES.map((feature, i) => (
                  <tr
                    key={feature.category}
                    className={`border-b border-slate-100 dark:border-slate-800 ${
                      i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/25" : ""
                    }`}
                  >
                    <td className="py-3 pr-4 text-slate-600 dark:text-slate-300 font-medium">
                      {feature.category}
                      {feature.description && (
                        <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5 font-normal">
                          {feature.description}
                        </span>
                      )}
                    </td>
                    {CARD_TIERS.map((tier) => {
                      const value = tier[feature.key as keyof typeof tier];
                      let display: string;
                      if (feature.format === "currency" && typeof value === "number") {
                        display = `R${value}`;
                      } else if (feature.format === "boolean") {
                        display = value ? "Yes" : "No";
                      } else {
                        display = String(value);
                      }
                      return (
                        <td key={tier.slug} className="py-3 px-3 text-center text-slate-700 dark:text-slate-200">
                          {feature.format === "boolean" ? (
                            value ? (
                              <span className="text-accent font-medium">Yes</span>
                            ) : (
                              <span className="text-slate-400">No</span>
                            )
                          ) : (
                            display
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Fee Schedule */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Complete fee schedule
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            All fees before Vitality Money discounts. At Diamond status, monthly fees can be reduced by up to 75%.
          </p>
          <FeeTable categories={FEE_SCHEDULE} />
        </section>

        {/* CTA after fee schedule */}
        <div className="mb-12">
          <CTABanner
            heading="Know which tier you want?"
            subtext={`Use referral code ${SITE.referralCode} when you open your account. Earn up to 5,000 Discovery Miles.`}
          />
        </div>

        {/* Which tier is right */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Which card tier is right for you?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CARD_TIERS.map((tier) => (
              <div
                key={tier.slug}
                className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-navy-600 dark:text-cream mb-2">
                  {tier.name}: {tier.tagline}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {tier.description}
                </p>
                <Link
                  href={`/cards/${tier.slug}`}
                  className="text-sm text-accent hover:text-accent-600 font-medium"
                >
                  Full {tier.name} card details
                </Link>
              </div>
            ))}
          </div>
        </section>

        <CTABanner heading="Found your tier?" subtext="Open your Discovery Bank account and start earning rewards today." />
      </div>
    </>
  );
}
