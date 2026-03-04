import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/schema/metadata";
import { JsonLd, generateFAQSchema } from "@/lib/schema/generate-schema";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ReferralCodeBlock } from "@/components/conversion/ReferralCodeBlock";
import { CTABanner } from "@/components/conversion/CTABanner";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = generatePageMetadata({
  title: "How to Switch to Discovery Bank: Complete Guide (2025)",
  description:
    "Step-by-step guide to switching your bank account to Discovery Bank. Move debit orders, salary deposits, and close your old account safely. Use referral code DNJ001.",
  path: "/guides/switching-banks",
});

const SWITCHING_FAQS = [
  {
    question: "Can I switch to Discovery Bank if I still have a loan at my current bank?",
    answer:
      "Yes. A home loan, vehicle finance, or personal loan at another bank does not prevent you from opening a Discovery Bank account. Those loan agreements stay in place at your existing bank. You simply move your transactional banking (salary, debit orders, day-to-day spending) to Discovery Bank while your loan repayments continue as debit orders from the new account.",
  },
  {
    question: "Will switching banks affect my credit score?",
    answer:
      "Opening a new bank account does not directly lower your credit score. Discovery Bank will perform a credit check during the application, which may cause a small, temporary dip. The most important thing is to keep all your debit orders and payments running without interruption during the transition. Missed payments during the switch are what hurt your score.",
  },
  {
    question: "How do I move my debit orders to Discovery Bank?",
    answer:
      "Discovery Bank has a built-in debit order switching tool in the app. Go to the 'Switch' section, and the app will help you identify your existing debit orders and initiate the transfer to your new account. For some debit orders, you may need to contact the company directly (insurance providers, gym memberships, etc.) and provide your new Discovery Bank account details.",
  },
  {
    question: "Can I keep my old bank account open while I switch?",
    answer:
      "Yes, and we strongly recommend it. Run both accounts in parallel for at least one to two months. This ensures no payments are missed during the transition. Only close your old account once you have confirmed that all debit orders, salary deposits, and recurring payments have successfully moved to Discovery Bank.",
  },
  {
    question: "How long does the full switching process take?",
    answer:
      "The Discovery Bank account itself opens in about 10 minutes. The full switching process, including moving debit orders, updating salary deposits with your employer, and confirming everything works, typically takes two to four weeks. We recommend keeping your old account active for one to two months as a safety net.",
  },
];

export default function SwitchingBanksGuidePage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(SWITCHING_FAQS)} />

      <div className="container-narrow py-12">
        <BreadcrumbNav
          items={[
            { label: "Guides", href: "/guides" },
            { label: "Switching Banks", href: "/guides/switching-banks" },
          ]}
        />
        <LastUpdated date={SITE.lastUpdated} />

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mt-4 mb-6">
          How to Switch to Discovery Bank: Complete Guide
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Switching banks sounds daunting, but Discovery Bank has made it straightforward.
          The entire process can be completed in two to four weeks with no disruption to your
          finances if you follow the right steps.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          This guide walks you through every step, from opening your account to closing your
          old one, so nothing falls through the cracks.
        </p>

        {/* Referral Code */}
        <ReferralCodeBlock />

        {/* Before you switch checklist */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            What to do before you switch
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Spend 30 minutes preparing before you start. This avoids headaches later.
          </p>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="space-y-4">
              {[
                {
                  task: "Gather your documents",
                  detail:
                    "SA ID, latest payslip or proof of income, and proof of address (utility bill or bank statement under 3 months old).",
                },
                {
                  task: "List all your debit orders",
                  detail:
                    "Check your last 3 months of bank statements. Write down every recurring payment: insurance, subscriptions, loan repayments, gym, school fees, etc.",
                },
                {
                  task: "Note your salary deposit details",
                  detail:
                    "You will need to update your employer with your new banking details. Find out who handles payroll changes at your company and what the process is.",
                },
                {
                  task: "Check for any pending transactions",
                  detail:
                    "Make sure there are no pending card authorisations or disputed transactions on your current account that could complicate the switch.",
                },
                {
                  task: "Download your old bank statements",
                  detail:
                    "Download at least 12 months of statements from your current bank for your records. You may lose easy access to these once you close the account.",
                },
                {
                  task: "Check your current bank's notice period",
                  detail:
                    "Some banks require 30 days' notice to close an account or waive final fees. Check your terms or call your bank to confirm.",
                },
              ].map((item) => (
                <div key={item.task} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded border-2 border-accent flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-navy-600 dark:text-cream">{item.task}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step by step */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Step-by-step switching process
          </h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Download the Discovery Bank app",
                description:
                  "Search for 'Discovery Bank' on the App Store (iOS) or Google Play Store (Android). Download the official app. It is free and required for all Discovery Bank services.",
              },
              {
                step: 2,
                title: "Open your Discovery Bank account",
                description:
                  "Follow the in-app sign-up process. You will need to verify your identity with a selfie, scan your ID, and upload proof of income and address. The full process takes about 10 minutes.",
                link: { label: "See full account opening guide", href: "/open-account" },
              },
              {
                step: 3,
                title: `Enter referral code ${SITE.referralCode}`,
                description:
                  "When prompted during sign-up, enter referral code DNJ001 to earn up to 5,000 Discovery Miles. The code cannot be added after sign-up, so do not skip this step.",
              },
              {
                step: 4,
                title: "Wait for approval",
                description:
                  "Most applications are approved within minutes. Discovery Bank runs a credit check and verifies your documents. In some cases it may take up to 24 hours. You will receive a notification once approved.",
              },
              {
                step: 5,
                title: "Set up your salary deposit",
                description:
                  "Contact your employer's payroll department and provide your new Discovery Bank account details. Most employers need your account number, branch code (679000 for all Discovery Bank accounts), and account type. Ask them to update from the next pay cycle.",
              },
              {
                step: 6,
                title: "Move your debit orders",
                description:
                  "Use the Discovery Bank app's built-in switching tool. Navigate to the 'Switch' section, and the app will help you identify and transfer existing debit orders. For debit orders that cannot be switched automatically, contact each company directly with your new account details. Prioritise insurance, loan repayments, and other critical payments first.",
              },
              {
                step: 7,
                title: "Update payment details with other services",
                description:
                  "Beyond debit orders, update your banking details with: your employer (salary), SARS (tax refunds), medical aid, insurance companies, online shopping accounts, subscription services, and anyone else who pays into or debits from your account.",
              },
              {
                step: 8,
                title: "Run both accounts in parallel for 1-2 months",
                description:
                  "Keep your old bank account open and funded with a small buffer (a few hundred rand) for at least one to two months. This catches any debit orders or payments you may have missed during the switch. Check both accounts weekly for any stray transactions.",
              },
              {
                step: 9,
                title: "Confirm everything has moved",
                description:
                  "After one to two months, review your old account statements. If no new debit orders or credits have appeared for a full month, all your payments have successfully moved to Discovery Bank.",
              },
              {
                step: 10,
                title: "Close your old bank account",
                description:
                  "Contact your old bank to formally close the account. Transfer any remaining balance to your Discovery Bank account first. Request written confirmation that the account is closed and that there are no outstanding fees. Keep this confirmation for your records.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-medium text-navy-600 dark:text-cream">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                  {"link" in item && item.link && (
                    <Link
                      href={item.link.href}
                      className="text-sm text-accent hover:text-accent-600 font-medium mt-2 inline-block"
                    >
                      {item.link.label} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Switching timeline: how long it takes
          </h2>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="space-y-4">
              {[
                { time: "Day 1", event: "Open your Discovery Bank account and get approved (10 minutes to 24 hours)." },
                { time: "Day 1-3", event: "Receive your physical card. Start using the virtual card and digital wallet immediately." },
                { time: "Week 1", event: "Submit salary change to employer. Start moving debit orders using the in-app switching tool." },
                { time: "Week 2", event: "Contact remaining service providers to update payment details. Set up new debit orders where needed." },
                { time: "Week 3-4", event: "First salary arrives in Discovery Bank account. Confirm all debit orders run successfully from the new account." },
                { time: "Month 2-3", event: "Monitor old account for stray transactions. Once clear for a full month, close the old account." },
              ].map((item) => (
                <div key={item.time} className="flex gap-4 items-start">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {item.time}
                  </span>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-12">
          <CTABanner
            heading="Ready to make the switch?"
            subtext={`Open your Discovery Bank account with referral code ${SITE.referralCode} and earn up to 5,000 Discovery Miles. The whole process starts in the app.`}
          />
        </div>

        {/* Common mistakes */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Common mistakes to avoid when switching banks
          </h2>
          <div className="space-y-4">
            {[
              {
                mistake: "Closing your old account too early",
                consequence: "Missed debit orders, failed payments, and potential credit score damage.",
                fix: "Keep your old account open for at least one to two months after switching. Only close it once zero transactions have processed for a full month.",
              },
              {
                mistake: "Forgetting to update your employer",
                consequence: "Your salary goes to your old account, and you have to manually transfer it each month.",
                fix: "Submit your new banking details to payroll in the first week. Confirm the change date and check that the first payment lands correctly.",
              },
              {
                mistake: "Missing annual or quarterly debit orders",
                consequence: "Some payments only run every 3, 6, or 12 months and are easy to overlook when listing debit orders.",
                fix: "Check 12 months of statements, not just 1 or 2. Look for annual insurance premiums, subscription renewals, and quarterly payments.",
              },
              {
                mistake: "Not updating SARS banking details",
                consequence: "Tax refunds go to your old closed account and get bounced, delaying your refund.",
                fix: "Log into SARS eFiling and update your banking details before closing your old account.",
              },
              {
                mistake: "Skipping the referral code during sign-up",
                consequence: `You miss out on up to 5,000 free Discovery Miles. The code cannot be added after account creation.`,
                fix: `Enter referral code ${SITE.referralCode} when prompted during the application. Do it at sign-up, not later.`,
              },
              {
                mistake: "Not making a transaction within 30 days",
                consequence: "You forfeit your referral Discovery Miles even if you entered the code correctly.",
                fix: "Make at least one card transaction (virtual card, Apple Pay, Google Pay, or physical card) within 30 days of opening your account.",
              },
            ].map((item) => (
              <div
                key={item.mistake}
                className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
              >
                <h3 className="font-medium text-navy-600 dark:text-cream flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  {item.mistake}
                </h3>
                <p className="text-sm text-red-600 dark:text-red-400 mt-1 ml-7">
                  {item.consequence}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 ml-7">
                  <span className="font-medium text-accent">How to avoid it:</span> {item.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Second CTA */}
        <section className="mt-12">
          <ReferralCodeBlock />
        </section>

        <FAQAccordion faqs={SWITCHING_FAQS} />

        <CTABanner
          heading="Start your switch today"
          subtext={`Use referral code ${SITE.referralCode} when you open your Discovery Bank account. You will earn up to 5,000 Discovery Miles, and the switching tools in the app will guide you through the rest.`}
        />
      </div>
    </>
  );
}
