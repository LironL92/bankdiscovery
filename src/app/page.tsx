import Link from "next/link";
import { CARD_TIERS } from "@/lib/content/card-tiers";
import { CardTierVisual } from "@/components/content/CardTierVisual";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/conversion/CTABanner";
import { ReferralCodeBlock } from "@/components/conversion/ReferralCodeBlock";
import { NewsletterCapture } from "@/components/conversion/NewsletterCapture";
import { JsonLd, generateFAQSchema } from "@/lib/schema/generate-schema";
import { HOMEPAGE_FAQS } from "@/lib/content/faqs";

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(HOMEPAGE_FAQS)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-600 dark:bg-navy-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-cream leading-tight">
              The Independent Guide to{" "}
              <span className="text-accent">Discovery Bank</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Honest reviews, real fee comparisons, and clear explanations of Vitality Money rewards.
              Everything you need to decide if Discovery Bank is right for you.
            </p>
            <div className="mt-8">
              <CTABanner variant="hero" />
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Not affiliated with Discovery Limited. We may earn a referral reward.
            </p>
          </div>
        </div>
      </section>

      {/* Why Discovery Bank */}
      <section className="container-wide py-16 lg:py-20">
        <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-navy-600 dark:text-cream text-center mb-12">
          Why South Africans are choosing Discovery Bank
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Up to 75% fee discounts",
              description:
                "The Vitality Money programme rewards healthy financial behaviour with significant fee reductions. At Diamond status, fees can drop to near zero.",
              iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              title: "Up to 7.35% on savings",
              description:
                "Dynamic interest rates that increase as your Vitality Money status improves. Among the highest demand savings rates in South Africa.",
              iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
            },
            {
              title: "Health meets wealth",
              description:
                "The only bank that rewards you for living healthier. Your Vitality health status directly improves your banking rewards.",
              iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
            },
            {
              title: "Award-winning app",
              description:
                "Rated 4.7/5 on the App Store. Full banking, investing through EasyEquities, Vitality tracking, and spending insights in one app.",
              iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.iconPath} />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-navy-600 dark:text-cream mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Referral CTA after benefits */}
      <section className="container-narrow pb-4">
        <ReferralCodeBlock />
      </section>

      {/* Quick Comparison */}
      <section className="bg-slate-50 dark:bg-navy-700/50 py-16 lg:py-20">
        <div className="container-wide">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-navy-600 dark:text-cream text-center mb-4">
            How Discovery Bank stacks up
          </h2>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            A quick look at how Discovery Bank compares to South Africa&apos;s most popular banks.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-5 font-medium text-slate-500 dark:text-slate-400">Feature</th>
                  <th className="text-center py-4 px-4 font-medium text-accent">Discovery</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600 dark:text-slate-300">Capitec</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600 dark:text-slate-300">FNB</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Monthly fee (entry)", discovery: "R115", capitec: "R0-R6.50", fnb: "R109" },
                  { feature: "Savings rate (max)", discovery: "7.35%", capitec: "7.5%*", fnb: "5.25%" },
                  { feature: "Fee discounts", discovery: "Up to 75%", capitec: "None", fnb: "Via eBucks" },
                  { feature: "Cashback", discovery: "Up to 20%", capitec: "1% flat", fnb: "eBucks" },
                  { feature: "Branches", discovery: "Digital only", capitec: "850+", fnb: "600+" },
                  { feature: "App rating", discovery: "4.7/5", capitec: "4.6/5", fnb: "4.5/5" },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/25" : ""}>
                    <td className="py-3 px-5 font-medium text-slate-600 dark:text-slate-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.discovery}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.capitec}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.fnb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">*Capitec&apos;s best rate requires a fixed deposit. Discovery&apos;s rate is on demand savings.</p>
          <div className="flex justify-center gap-4 mt-6">
            <Link href="/vs/capitec" className="text-sm text-accent hover:text-accent-600 font-medium">
              Discovery vs Capitec details
            </Link>
            <Link href="/vs/fnb" className="text-sm text-accent hover:text-accent-600 font-medium">
              Discovery vs FNB details
            </Link>
          </div>
        </div>
      </section>

      {/* Card Tiers */}
      <section className="container-wide py-16 lg:py-20">
        <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-navy-600 dark:text-cream text-center mb-4">
          Choose your card tier
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Discovery Bank offers four card tiers based on your income. Each tier unlocks better rewards,
          higher interest rates, and more premium benefits.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARD_TIERS.map((tier) => (
            <CardTierVisual key={tier.slug} tier={tier} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/cards/compare"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-600 transition-colors"
          >
            Compare all card tiers in detail
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-narrow py-16 lg:py-20">
        <FAQAccordion faqs={HOMEPAGE_FAQS} />
      </section>

      {/* Newsletter + CTA */}
      <section className="container-narrow pb-16 space-y-8">
        <NewsletterCapture />
        <CTABanner />
      </section>
    </>
  );
}
