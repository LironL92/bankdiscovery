import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/schema/metadata";
import { JsonLd, generateFAQSchema } from "@/lib/schema/generate-schema";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ReferralCodeBlock } from "@/components/conversion/ReferralCodeBlock";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { OPEN_ACCOUNT_FAQS } from "@/lib/content/faqs";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = generatePageMetadata({
  title: "How to Open a Discovery Bank Account (2025)",
  description:
    "Step-by-step guide to opening a Discovery Bank account. Requirements, documents needed, and what to expect. Use referral code DNJ001 to earn up to 5,000 Discovery Miles.",
  path: "/open-account",
});

export default function OpenAccountPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(OPEN_ACCOUNT_FAQS)} />

      <div className="container-narrow py-12">
        <BreadcrumbNav items={[{ label: "Open Account", href: "/open-account" }]} />
        <LastUpdated date={SITE.lastUpdated} />

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mt-4 mb-6">
          How to Open a Discovery Bank Account
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          Opening a Discovery Bank account takes about 10 minutes through the app.
          Here is everything you need to know before you start.
        </p>

        {/* Referral Code */}
        <ReferralCodeBlock />

        {/* App Store Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
            Step 1: Copy the code above. Step 2: Download the app.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://apps.apple.com/za/app/discovery-bank/id1453498838"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=za.co.discovery.bank"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.54c-.35-.55-.18-1.27-.18-1.92V2.38c0-.65-.17-1.37.18-1.92l11.19 11.54L3.18 23.54zM15.73 13.36l-2.6 2.6 8.37 4.71c.95.54 1.77.03 1.77-.03l-7.54-7.28zM15.73 10.64l7.54-7.28s-.82-.57-1.77-.03l-8.37 4.71 2.6 2.6zM4.21.22l10.16 10.42L4.21.22z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>

        {/* Requirements */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            What you need to apply
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "South African ID",
                description: "Valid SA ID book, smart ID card, or passport for non-residents",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                ),
              },
              {
                title: "Proof of income",
                description: "Latest payslip, employment letter, or 3 months of bank statements",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Proof of address",
                description: "Utility bill, bank statement, or lease agreement (under 3 months old)",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-3">
                  {item.icon}
                </div>
                <h3 className="font-medium text-navy-600 dark:text-cream mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Step-by-step process
          </h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Download the Discovery Bank app",
                description:
                  "Available on the App Store and Google Play Store. Search for 'Discovery Bank' and download the official app.",
              },
              {
                step: 2,
                title: "Start your application",
                description:
                  "Open the app and tap 'Open an account'. You will be asked to enter your ID number and basic details.",
              },
              {
                step: 3,
                title: "Verify your identity",
                description:
                  "Take a selfie for facial verification and scan your ID document. The app uses biometric technology to verify your identity in real time.",
              },
              {
                step: 4,
                title: "Upload your documents",
                description:
                  "Upload proof of income and proof of address. You can take photos of these documents directly in the app.",
              },
              {
                step: 5,
                title: `Enter referral code ${SITE.referralCode}`,
                description:
                  "When prompted, enter referral code DNJ001 to earn up to 5,000 Discovery Miles (for a Full Banking Suite) or 2,500 Discovery Miles (for a Credit Card Account). The code cannot be added after sign-up.",
              },
              {
                step: 6,
                title: "Choose your banking suite",
                description:
                  "Based on your income, you will be offered the appropriate card tier (Gold, Platinum, Black, or Purple). Select the banking suite or product that suits your needs.",
              },
              {
                step: 7,
                title: "Wait for approval",
                description:
                  "Discovery Bank reviews your application and runs a credit check. Most applicants are approved within minutes, though it can take up to 24 hours.",
              },
              {
                step: 8,
                title: "Receive your card",
                description:
                  "Your physical card is manufactured and delivered to your address within 3 to 5 business days. You can start using the app for transfers immediately after approval.",
              },
              {
                step: 9,
                title: "Make a transaction within 30 days",
                description:
                  "To qualify for your referral Discovery Miles, make at least one transaction using your virtual card or digital wallet (Apple Pay, Google Pay, Samsung Pay) within 30 days of opening your account. Bank-initiated transactions like fees do not count.",
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What happens after */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            What happens after you apply
          </h2>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="space-y-4">
              {[
                { time: "Immediately", event: "App access granted. You can start exploring features and setting up your profile." },
                { time: "Within 24 hours", event: "Application approved (most within minutes). You can make app transfers and payments." },
                { time: "3 to 5 business days", event: "Physical card arrives at your address. Full card functionality activated." },
                { time: "Within 30 days", event: "Make a transaction with your virtual card or digital wallet to unlock your referral Discovery Miles. Set up debit orders and salary deposit." },
                { time: "After ~30 business days", event: "Your Discovery Miles are paid into your Discovery Miles account. They show as 'Friend Referral Welcome Miles' in the app." },
                { time: "Ongoing", event: "Your Vitality Money status improves as you manage money better. Rewards and rate boosts increase." },
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

        {/* Second CTA */}
        <section className="mt-12">
          <ReferralCodeBlock />
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="https://apps.apple.com/za/app/discovery-bank/id1453498838"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=za.co.discovery.bank"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.54c-.35-.55-.18-1.27-.18-1.92V2.38c0-.65-.17-1.37.18-1.92l11.19 11.54L3.18 23.54zM15.73 13.36l-2.6 2.6 8.37 4.71c.95.54 1.77.03 1.77-.03l-7.54-7.28zM15.73 10.64l7.54-7.28s-.82-.57-1.77-.03l-8.37 4.71 2.6 2.6zM4.21.22l10.16 10.42L4.21.22z"/>
              </svg>
              Google Play
            </a>
          </div>
        </section>

        <FAQAccordion faqs={OPEN_ACCOUNT_FAQS} />
      </div>
    </>
  );
}
