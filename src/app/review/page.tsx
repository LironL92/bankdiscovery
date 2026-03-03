import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/schema/metadata";
import { JsonLd, generateFAQSchema, generateReviewSchema } from "@/lib/schema/generate-schema";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { AuthorCard } from "@/components/ui/AuthorCard";
import { CTABanner } from "@/components/conversion/CTABanner";
import { ReferralCodeBlock } from "@/components/conversion/ReferralCodeBlock";
import { FeeTable } from "@/components/content/FeeTable";
import { REVIEW_FAQS } from "@/lib/content/faqs";
import { FEE_SCHEDULE } from "@/lib/content/fees";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Discovery Bank Review 2025: The Complete, Honest Assessment",
  description:
    "Our comprehensive review of Discovery Bank covers fees, Vitality Money rewards, interest rates, the app, and who the bank is best for. Updated for 2025.",
  path: "/review",
  ogType: "article",
});

export default function ReviewPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(REVIEW_FAQS)} />
      <JsonLd
        data={generateReviewSchema({
          itemName: "Discovery Bank",
          itemType: "BankOrCreditUnion",
          ratingValue: 4.2,
          bestRating: 5,
          author: SITE.name,
          description:
            "Comprehensive review of Discovery Bank covering fees, rewards, interest rates, and overall value for South African banking customers.",
        })}
      />

      <div className="container-narrow py-12">
        <BreadcrumbNav items={[{ label: "Review", href: "/review" }]} />
        <LastUpdated date={SITE.lastUpdated} />

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mt-4 mb-4">
          Discovery Bank Review 2025: The Complete, Honest Assessment
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Discovery Bank is not for everyone. But for the right person, it offers more value than any
          other bank in South Africa. Here is our full breakdown of who should switch, who should
          not, and why.
        </p>

        {/* Quick Rating Box */}
        <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6 mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Our Rating</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-bold text-navy-600 dark:text-cream">4.2</span>
                <span className="text-lg text-slate-400">/5</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { label: "Fees", score: "3.5/5" },
                { label: "Rewards", score: "4.8/5" },
                { label: "Interest Rates", score: "4.5/5" },
                { label: "App", score: "4.7/5" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="font-semibold text-navy-600 dark:text-cream">{item.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 mb-10">
          <h2 className="font-medium text-navy-600 dark:text-cream mb-3 text-sm uppercase tracking-wider">
            In this review
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { label: "Overview", href: "#overview" },
              { label: "Pros and Cons", href: "#pros-cons" },
              { label: "Vitality Money Rewards", href: "#vitality-money" },
              { label: "Fees and Pricing", href: "#fees" },
              { label: "Interest Rates", href: "#interest-rates" },
              { label: "The App", href: "#app" },
              { label: "Card Tiers", href: "#card-tiers" },
              { label: "Final Verdict", href: "#verdict" },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-accent hover:text-accent-600 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="prose-custom">
          {/* Overview */}
          <h2 id="overview">What is Discovery Bank?</h2>
          <p>
            Discovery Bank is a fully digital South African bank launched in 2019 by Discovery Limited,
            the same company behind Discovery Health and Vitality. It is built on a unique premise:
            your banking rewards improve when you manage your money well and live a healthier life.
          </p>
          <p>
            The bank offers transaction accounts, savings accounts, credit cards, and credit
            facilities across four tiers (Gold, Platinum, Black, and Purple). What sets it apart is
            Vitality Money, a behavioural programme that adjusts your interest rates, fee discounts,
            and cashback based on your financial and health behaviour.
          </p>
          <p>
            As of 2025, Discovery Bank serves approximately 1.5 million clients and has a 4.7/5 app
            rating, making it one of the highest-rated banking apps in South Africa.
          </p>

          {/* Pros and Cons */}
          <h2 id="pros-cons">Pros and cons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose mb-8">
            <div className="bg-accent/5 dark:bg-accent/10 rounded-xl p-5">
              <h3 className="font-serif text-lg font-semibold text-accent mb-3">What we like</h3>
              <ul className="space-y-2">
                {[
                  "Industry-leading demand savings rates (up to 7.35%)",
                  "Unique health-and-wealth rewards integration",
                  "Up to 75% fee discount at Diamond Vitality status",
                  "Excellent app rated 4.7/5",
                  "In-app investing through EasyEquities",
                  "High cashback on fuel and groceries (up to 20%)",
                  "Interest earned on everyday transaction balance",
                ].map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5">
              <h3 className="font-serif text-lg font-semibold text-red-600 dark:text-red-400 mb-3">What could be better</h3>
              <ul className="space-y-2">
                {[
                  "No physical branches (digital only)",
                  "Monthly fees higher than budget banks before discounts",
                  "Rewards system is complex and takes time to understand",
                  "Best value requires Discovery Vitality membership",
                  "PayShap fees higher than competitors",
                  "Limited international banking compared to traditional banks",
                ].map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        {/* Mid-content CTA after pros/cons */}
        <div className="not-prose my-10">
          <ReferralCodeBlock />
        </div>

          {/* Vitality Money */}
          <h2 id="vitality-money">How Vitality Money works</h2>
          <p>
            Vitality Money is Discovery Bank&apos;s behavioural rewards programme. It measures how well
            you manage your finances and rewards you with better rates, lower fees, and higher cashback.
          </p>
          <p>
            Your Vitality Money status is determined by points earned from five key financial behaviours:
            saving regularly, insuring your assets, managing your credit well, putting money aside for
            retirement, and spending responsibly. The status levels are Blue, Bronze, Silver, Gold,
            and Diamond.
          </p>
          <p>
            At each level, your rewards improve. At Diamond status, you unlock:
          </p>
          <ul>
            <li>Up to 75% discount on monthly account fees</li>
            <li>Up to 7.35% interest on demand savings (Purple tier)</li>
            <li>Up to 4% interest on your everyday transaction balance</li>
            <li>Up to 20% cashback on fuel and groceries at partner merchants</li>
            <li>Up to 75% off flights and gym memberships</li>
          </ul>
          <p>
            If you are already a Discovery Vitality member through your medical aid, your health
            activity also contributes to boosting your banking rewards. This is the &quot;health meets
            wealth&quot; model that makes Discovery Bank genuinely unique in global banking.
          </p>

        {/* Mid-content CTA after Vitality Money */}
        <div className="not-prose my-10">
          <CTABanner
            heading="Like what Vitality Money offers?"
            subtext={`Open your account with referral code ${SITE.referralCode} and start earning rewards from day one.`}
          />
        </div>

          {/* Fees */}
          <h2 id="fees">Fees and pricing</h2>
          <p>
            Discovery Bank&apos;s fees are higher than budget banks like Capitec and TymeBank before
            Vitality Money discounts are applied. The Gold suite starts at R115 per month, while the
            Purple suite costs R495 per month. However, the fee discount programme changes the
            calculation significantly.
          </p>
          <p>
            At Diamond Vitality Money status, fees are reduced by up to 75%. This means the Gold
            suite could cost as little as R29 per month, which is competitive with most banks in
            South Africa.
          </p>
        </div>

        <div className="my-8">
          <FeeTable categories={FEE_SCHEDULE.slice(0, 2)} />
        </div>

        <div className="text-center mb-8">
          <Link href="/cards/compare" className="text-sm text-accent hover:text-accent-600 font-medium">
            View the complete fee schedule across all tiers
          </Link>
        </div>

        <div className="prose-custom">
          {/* Interest Rates */}
          <h2 id="interest-rates">Interest rates</h2>
          <p>
            Discovery Bank offers some of the best demand savings rates in South Africa. Unlike fixed
            deposits, demand savings accounts allow you to withdraw your money at any time without
            penalty. The rates are dynamic, meaning they improve as your Vitality Money status increases.
          </p>
          <p>
            At Diamond status, the Purple tier offers up to 7.35% on demand savings, which is
            competitive with many fixed deposit rates at other banks. Even the Gold tier at Diamond
            status offers up to 6.5%, which beats most demand savings products in the market.
          </p>
          <p>
            One underappreciated feature is interest on everyday transaction balances. At Diamond
            status on the Purple tier, you earn up to 4% on the money sitting in your transaction
            account. This is money that would earn nothing at most other banks.
          </p>

          {/* App */}
          <h2 id="app">The Discovery Bank app</h2>
          <p>
            The Discovery Bank app is rated 4.7/5 on the App Store, making it one of the highest-rated
            banking apps in South Africa. Since Discovery Bank has no branches, the app is your
            entire banking experience, and Discovery has invested heavily to make it excellent.
          </p>
          <p>
            Key features include:
          </p>
          <ul>
            <li>Real-time transaction notifications and spending categorisation</li>
            <li>In-app investing through EasyEquities</li>
            <li>Vitality Money status tracking and progress insights</li>
            <li>Biometric login (fingerprint and face recognition)</li>
            <li>Card controls (freeze, limit changes, travel notifications)</li>
            <li>Money transfers to any South African bank account</li>
            <li>PayShap instant payments</li>
            <li>QR code payments</li>
          </ul>
          <p>
            The app handles everything you would normally need a branch for, including account
            management, card ordering, limit changes, and customer support chat.
          </p>

        {/* Mid-content CTA after app section */}
        <div className="not-prose my-10">
          <ReferralCodeBlock />
        </div>

          {/* Card Tiers */}
          <h2 id="card-tiers">Card tiers at a glance</h2>
          <p>
            Discovery Bank offers four card tiers based on your qualifying income. Each tier unlocks
            progressively better rewards, higher limits, and more premium benefits.
          </p>
          <ul>
            <li><strong>Gold</strong> (under R350K/yr, R115/mo): Entry tier with full Vitality Money access. Best for career starters.</li>
            <li><strong>Platinum</strong> (R350K to R850K/yr, R170/mo): Higher limits and better rates. Best for mid-career professionals.</li>
            <li><strong>Black</strong> (R850K to R2.5M/yr, R295/mo): Lounge access, concierge, device insurance. Best for high earners.</li>
            <li><strong>Purple</strong> (over R2.5M/yr, R495/mo): Maximum rewards, unlimited lounges. Best for top earners in the Discovery ecosystem.</li>
          </ul>
          <p>
            <Link href="/cards/compare" className="text-accent hover:text-accent-600 font-medium">
              See our full card tier comparison for a detailed breakdown.
            </Link>
          </p>

          {/* Verdict */}
          <h2 id="verdict">Final verdict</h2>
          <p>
            <strong>Discovery Bank scores 4.2 out of 5 in our assessment.</strong> It is genuinely
            innovative and offers more value than most South African banks for the right customer.
          </p>
          <p>
            That right customer is someone already in, or willing to join, the Discovery Vitality
            ecosystem. If you have Discovery Health, Vitality, or Discovery Insure products, adding
            Discovery Bank creates a compounding rewards loop that no other bank can match.
          </p>
          <p>
            If you are outside the Discovery ecosystem and want the cheapest possible banking, Capitec
            is a better choice. If you need branches and a traditional banking relationship, FNB or
            Standard Bank will serve you better.
          </p>
          <p>
            But if you value dynamic rewards, excellent savings rates, and a banking experience that
            genuinely improves as you manage your money better, Discovery Bank is the most interesting
            bank in South Africa right now.
          </p>
        </div>

        <FAQAccordion faqs={REVIEW_FAQS} />

        <AuthorCard />

        <CTABanner
          heading="Ready to try Discovery Bank?"
          subtext={`Open your account with referral code ${SITE.referralCode} and start earning Vitality Money rewards from day one.`}
        />
      </div>
    </>
  );
}
