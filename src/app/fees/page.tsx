import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/schema/metadata";
import { JsonLd, generateFAQSchema } from "@/lib/schema/generate-schema";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { CTABanner } from "@/components/conversion/CTABanner";
import { ReferralCodeBlock } from "@/components/conversion/ReferralCodeBlock";
import { FeeTable } from "@/components/content/FeeTable";
import { FEE_SCHEDULE } from "@/lib/content/fees";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Discovery Bank Fees: Complete Breakdown by Card Tier (2025)",
  description:
    "Full Discovery Bank fee schedule for 2025. Monthly fees from R115 to R495, transaction costs, ATM charges, and how Vitality Money discounts can cut your fees by up to 75%.",
  path: "/fees",
});

const FEES_FAQS = [
  {
    question: "How much does Discovery Bank cost per month?",
    answer:
      "Discovery Bank monthly fees range from R115 for the Gold Full Banking Suite to R495 for the Purple suite. These are base fees before Vitality Money discounts. At Diamond Vitality Money status, you can reduce your monthly fee by up to 75%, bringing the Gold suite down to approximately R29 per month.",
  },
  {
    question: "Can I reduce my Discovery Bank fees?",
    answer:
      "Yes. Through the Vitality Money programme, you can earn fee discounts of up to 75% based on your financial behaviour. The five behaviours measured are: saving regularly, insuring your assets, managing credit well, contributing to retirement, and spending responsibly. The discount is applied automatically each month based on your status.",
  },
  {
    question: "Are Discovery Bank transaction fees included in the monthly fee?",
    answer:
      "If you are on a bundled transaction account or Full Banking Suite, a number of transactions are included in your monthly fee. Card swipes, online transfers, and debit orders beyond the bundled amount are charged individually. The bundled option is generally better value if you make more than 15 to 20 transactions per month.",
  },
  {
    question: "How do Discovery Bank fees compare to Capitec?",
    answer:
      "Capitec has no monthly account fee (R0) with a pay-per-transaction model where individual transactions cost between R1 and R6.50. Discovery Bank charges a monthly fee starting at R115, but this includes bundled transactions and access to the Vitality Money rewards ecosystem. At Diamond status, the effective monthly cost of Discovery Bank can drop below R30, making it competitive with Capitec when you factor in the rewards and higher interest rates.",
  },
  {
    question: "Does Discovery Bank charge for PayShap?",
    answer:
      "Yes. Discovery Bank charges up to R12 for PayShap payments. The fee is calculated as 0.4% of amounts above R1,500. For smaller PayShap payments under R1,500, the fee is minimal. This is consistent across all card tiers.",
  },
  {
    question: "Are there any hidden fees at Discovery Bank?",
    answer:
      "Discovery Bank publishes its full fee schedule publicly, and there are no hidden fees. The main charges to be aware of are: the monthly account fee, per-transaction fees if you exceed your bundle, ATM withdrawal fees (especially at other banks' ATMs at R10), international transaction fees at 3.5%, and international ATM withdrawal fees at R65. All fees are visible in the Discovery Bank app.",
  },
];

const VITALITY_FEE_DISCOUNTS = [
  { status: "Blue", discount: "0%", goldFee: "R115", platinumFee: "R170", blackFee: "R295", purpleFee: "R495" },
  { status: "Bronze", discount: "Up to 25%", goldFee: "~R86", platinumFee: "~R128", blackFee: "~R221", purpleFee: "~R371" },
  { status: "Silver", discount: "Up to 50%", goldFee: "~R58", platinumFee: "~R85", blackFee: "~R148", purpleFee: "~R248" },
  { status: "Gold", discount: "Up to 60%", goldFee: "~R46", platinumFee: "~R68", blackFee: "~R118", purpleFee: "~R198" },
  { status: "Diamond", discount: "Up to 75%", goldFee: "~R29", platinumFee: "~R43", blackFee: "~R74", purpleFee: "~R124" },
];

export default function FeesPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(FEES_FAQS)} />

      <div className="container-narrow py-12">
        <BreadcrumbNav items={[{ label: "Fees", href: "/fees" }]} />
        <LastUpdated date={SITE.lastUpdated} />

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mt-4 mb-6">
          Discovery Bank Fees: Complete Breakdown by Card Tier
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Discovery Bank fees range from R115 to R495 per month depending on your card tier. That
          sounds expensive compared to banks like Capitec. But the headline number is misleading
          because Vitality Money discounts can cut your fees by up to 75%, and the rewards you earn
          often outweigh what you pay.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          Here is every fee Discovery Bank charges, broken down by card tier, with the real-world
          cost after Vitality Money discounts.
        </p>

        {/* Full fee schedule */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Complete Discovery Bank fee schedule
          </h2>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <FeeTable categories={FEE_SCHEDULE} />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            {SITE.comparisonDisclaimer}
          </p>
        </section>

        <ReferralCodeBlock />

        {/* Vitality Money discounts */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            How Vitality Money reduces your fees
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            The base fees above are what you pay at Blue (starting) Vitality Money status. As your
            financial behaviour improves and your status rises, your monthly fee drops automatically.
            At Diamond status, the discount reaches up to 75%. Here is what each tier actually costs
            after the Vitality Money discount:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-5 font-medium text-slate-500 dark:text-slate-400">Vitality Money Status</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-500 dark:text-slate-400">Discount</th>
                  <th className="text-center py-4 px-4 font-medium text-yellow-600 dark:text-yellow-400">Gold</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-500 dark:text-slate-400">Platinum</th>
                  <th className="text-center py-4 px-4 font-medium text-navy-600 dark:text-cream">Black</th>
                  <th className="text-center py-4 px-4 font-medium text-purple-600 dark:text-purple-400">Purple</th>
                </tr>
              </thead>
              <tbody>
                {VITALITY_FEE_DISCOUNTS.map((row, i) => (
                  <tr key={row.status} className={i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/25" : ""}>
                    <td className="py-3 px-5 font-medium text-slate-600 dark:text-slate-300">{row.status}</td>
                    <td className="py-3 px-4 text-center text-accent font-semibold">{row.discount}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.goldFee}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.platinumFee}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.blackFee}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.purpleFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            Approximate fees after Vitality Money discount on Full Banking Suite. Exact amounts may vary slightly.
          </p>
        </section>

        {/* Fee comparison */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Discovery Bank fees vs other South African banks
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-5 font-medium text-slate-500 dark:text-slate-400">Fee</th>
                  <th className="text-center py-4 px-4 font-medium text-accent">Discovery Bank</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600 dark:text-slate-300">Capitec</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600 dark:text-slate-300">FNB</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { fee: "Monthly account fee", discovery: "R115 - R495", capitec: "R0", fnb: "R109 - R925" },
                  { fee: "After max rewards/discounts", discovery: "~R29 - R124", capitec: "R0", fnb: "R109 - R925" },
                  { fee: "Card swipe / tap", discovery: "R1.30", capitec: "R0 (Global One)", fnb: "R0 (bundled)" },
                  { fee: "Online transfer (EFT)", discovery: "R4.50", capitec: "R6.50", fnb: "R0 (bundled)" },
                  { fee: "Own ATM withdrawal", discovery: "R4.00 - R8.50", capitec: "R0 (1 free/month)", fnb: "R4.50 - R11" },
                  { fee: "Other bank ATM", discovery: "R10.00", capitec: "R10.25", fnb: "R12.50+" },
                  { fee: "Rewards / cashback", discovery: "Up to 20%", capitec: "1% flat", fnb: "eBucks (variable)" },
                  { fee: "Savings interest", discovery: "Up to 7.35%", capitec: "Up to 7.5% (fixed)", fnb: "Up to 5.25%" },
                ].map((row, i) => (
                  <tr key={row.fee} className={i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/25" : ""}>
                    <td className="py-3 px-5 font-medium text-slate-600 dark:text-slate-300">{row.fee}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.discovery}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.capitec}</td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-200">{row.fnb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            {SITE.comparisonDisclaimer}
          </p>
        </section>

        <div className="mt-12">
          <CTABanner
            heading="Want lower fees?"
            subtext={`Open your Discovery Bank account with referral code ${SITE.referralCode} and start building your Vitality Money status to unlock fee discounts from day one.`}
          />
        </div>

        {/* Are fees worth it? */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-4">
            Are Discovery Bank fees worth it?
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-medium text-navy-600 dark:text-cream mb-2">
                If you are already in the Discovery ecosystem
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes, almost certainly. If you have Discovery Vitality (through Health or standalone),
                reaching Gold or Diamond status is significantly easier. At Diamond, your Gold suite
                costs around R29 per month and you earn up to 7.35% on savings, up to 20% cashback at
                partner merchants, and up to 4% interest on your everyday balance. The rewards far
                exceed the fee.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-medium text-navy-600 dark:text-cream mb-2">
                If you just want the cheapest possible banking
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Probably not. Capitec charges R0 per month with low per-transaction fees. TymeBank is
                also free. If your primary concern is paying as little as possible and you do not care
                about rewards, a zero-fee bank is the better choice. Discovery Bank only becomes
                cost-competitive once you engage with the Vitality Money programme.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-medium text-navy-600 dark:text-cream mb-2">
                If you are a high earner (Black or Purple tier)
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The value proposition is strongest here. The Black suite at R295 per month (or ~R74
                at Diamond) includes airport lounge access, concierge services, and device insurance
                that would cost hundreds of rands separately. Purple adds unlimited lounge access and
                the highest rewards rates. For earners above R850,000 per year, the premium tiers pay
                for themselves through the included perks alone.
              </p>
            </div>
          </div>
        </section>

        {/* Key takeaways */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Key takeaways on Discovery Bank fees
          </h2>
          <div className="bg-accent/5 dark:bg-accent/10 border border-accent/20 rounded-xl p-6">
            <ul className="space-y-3">
              {[
                "Base monthly fees range from R115 (Gold) to R495 (Purple) for the Full Banking Suite.",
                "Vitality Money discounts can reduce your fee by up to 75% at Diamond status.",
                "Transaction fees are low: R1.30 per swipe, R4.50 per transfer, R4.00 per own-ATM withdrawal.",
                "International transactions carry a 3.5% fee, which is standard for South African banks.",
                "The fee structure is most competitive for customers who actively engage with Vitality Money.",
                "Compared to Capitec (R0 monthly) the fees are higher, but Discovery Bank offers significantly more rewards.",
                "Compared to FNB (R109+ monthly) Discovery Bank offers better fee discounts through Vitality Money and higher savings rates.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-12">
          <ReferralCodeBlock />
        </div>

        <FAQAccordion faqs={FEES_FAQS} />

        <CTABanner
          heading="Ready to open your account?"
          subtext={`Use referral code ${SITE.referralCode} when you sign up. You earn up to 5,000 Discovery Miles, and your Vitality Money fee discounts start from day one.`}
        />
      </div>
    </>
  );
}
