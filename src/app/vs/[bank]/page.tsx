import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/schema/metadata";
import { JsonLd, generateFAQSchema } from "@/lib/schema/generate-schema";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { QuickVerdict } from "@/components/content/QuickVerdict";
import { ComparisonTable } from "@/components/content/ComparisonTable";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { AuthorCard } from "@/components/ui/AuthorCard";
import { CTABanner } from "@/components/conversion/CTABanner";
import { ReferralCodeBlock } from "@/components/conversion/ReferralCodeBlock";
import { BANK_COMPARISONS, AVAILABLE_COMPARISONS } from "@/lib/content/bank-comparisons";
import { SITE } from "@/lib/content/site";

type Props = {
  params: { bank: string };
};

export function generateStaticParams() {
  return AVAILABLE_COMPARISONS.map((bank) => ({ bank }));
}

export function generateMetadata({ params }: Props): Metadata {
  const comparison = BANK_COMPARISONS[params.bank];
  if (!comparison) return {};

  return generatePageMetadata({
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    path: `/vs/${params.bank}`,
  });
}

export default function BankComparisonPage({ params }: Props) {
  const comparison = BANK_COMPARISONS[params.bank];
  if (!comparison) notFound();

  return (
    <>
      <JsonLd data={generateFAQSchema(comparison.faqs)} />

      <div className="container-narrow py-12">
        <BreadcrumbNav
          items={[
            { label: "Compare", href: "/vs/capitec" },
            { label: `vs ${comparison.bankShortName}`, href: `/vs/${params.bank}` },
          ]}
        />
        <LastUpdated date={comparison.lastUpdated} />

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mt-4 mb-6">
          {comparison.title}
        </h1>

        <QuickVerdict
          winner={comparison.verdict.winner}
          summary={comparison.verdict.summary}
          details={comparison.verdict.details}
          competitorName={comparison.bankShortName}
        />

        <ComparisonTable
          categories={comparison.categories}
          competitorName={comparison.bankShortName}
        />

        {/* Mid-content CTA after comparison table */}
        <div className="mt-10">
          <ReferralCodeBlock />
        </div>

        {/* Who should choose Discovery */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            Choose Discovery Bank if you...
          </h2>
          <ul className="space-y-2">
            {comparison.discoveryBestFor.map((reason) => (
              <li key={reason} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {reason}
              </li>
            ))}
          </ul>
        </section>

        {/* Who should choose competitor */}
        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            Choose {comparison.bankShortName} if you...
          </h2>
          <ul className="space-y-2">
            {comparison.competitorBestFor.map((reason) => (
              <li key={reason} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {reason}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA after best-for sections */}
        <div className="mt-10">
          <CTABanner
            heading={`Decided on Discovery Bank?`}
            subtext={`Use referral code ${SITE.referralCode} when you sign up to earn up to 5,000 Discovery Miles.`}
          />
        </div>

        {/* Comparison disclaimer */}
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          {SITE.comparisonDisclaimer}
        </p>

        <FAQAccordion faqs={comparison.faqs} />

        <AuthorCard />

        <CTABanner
          heading={`Convinced by Discovery Bank?`}
          subtext={`If Discovery Bank is the right fit for you, use our referral code ${SITE.referralCode} when you open your account.`}
        />
      </div>
    </>
  );
}
