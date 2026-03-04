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
  title: "Discovery Bank App: Features, Setup & Review (2025)",
  description:
    "Complete guide to the Discovery Bank app. Features, security, Apple Pay, Google Pay, biometric login, in-app investing, and how to set up. Download and get started today.",
  path: "/app",
});

const APP_FAQS = [
  {
    question: "Is the Discovery Bank app available on iPhone and Android?",
    answer:
      "Yes. The Discovery Bank app is available on both the Apple App Store (iOS 15 or later) and Google Play Store (Android 8.0 or later). It is free to download and is the primary interface for all Discovery Bank services. There is no separate desktop app, but most features are accessible through the web portal at bank.discovery.co.za.",
  },
  {
    question: "Does Discovery Bank support Apple Pay?",
    answer:
      "Yes. Discovery Bank fully supports Apple Pay. You can add your Discovery Bank debit or credit card to your Apple Wallet and use it for contactless payments at any NFC terminal, in apps, and online. It works with iPhone, Apple Watch, iPad, and Mac. Transactions are secured with Face ID, Touch ID, or your device passcode.",
  },
  {
    question: "Is the Discovery Bank app safe to use?",
    answer:
      "Yes. The app uses bank-grade 256-bit encryption, biometric authentication (fingerprint and face recognition), device binding, and real-time fraud monitoring. You can freeze your card instantly in the app if you suspect fraud. Discovery Bank is regulated by the South African Reserve Bank and the Prudential Authority, and deposits are covered by deposit insurance.",
  },
  {
    question: "Can I open a Discovery Bank account entirely through the app?",
    answer:
      "Yes. The entire account opening process happens in the app. You verify your identity with a selfie, scan your ID document, upload proof of income and address, and choose your banking suite. Most applications are approved within minutes. You do not need to visit a branch at any point.",
  },
  {
    question: "What is PayShap and how do I use it on Discovery Bank?",
    answer:
      "PayShap is South Africa's instant payment system that lets you send and receive money in real time using a ShapID (linked to your phone number or email). In the Discovery Bank app, go to Payments, select PayShap, and enter the recipient's ShapID. Transfers are immediate, available 24/7, and cost less than traditional EFT payments. You can set up your own ShapID in the app under Settings.",
  },
];

const KEY_FEATURES = [
  {
    title: "Real-time notifications",
    description:
      "Get instant push notifications for every transaction: card swipes, debit orders, transfers, and online payments. Know immediately if an unauthorised transaction occurs.",
    iconPath: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    title: "Biometric login",
    description:
      "Log in with your fingerprint or face recognition. No passwords to remember. The app uses your device's biometric hardware for fast, secure access every time.",
    iconPath: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839-1.132c.645-2.266.99-4.659.99-7.127A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
  },
  {
    title: "Card controls",
    description:
      "Freeze and unfreeze your card instantly. Set transaction limits for ATM withdrawals, online purchases, and tap-to-pay. Enable travel mode before international trips to prevent blocks.",
    iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    title: "In-app investing with EasyEquities",
    description:
      "Buy shares, ETFs, and fractional investments directly within the Discovery Bank app through the EasyEquities integration. Start investing from as little as R5.",
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Vitality Money tracking",
    description:
      "Monitor your Vitality Money status in real time. See exactly which financial behaviours are boosting your status and what you need to do to reach the next level.",
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "QR payments",
    description:
      "Scan QR codes at supported merchants to pay directly from your bank account. No card required. Works at Masterpass and SnapScan-enabled stores across South Africa.",
    iconPath: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z",
  },
  {
    title: "PayShap instant payments",
    description:
      "Send and receive money instantly, 24/7, using a ShapID linked to your phone number or email address. Faster and cheaper than traditional EFT transfers.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Money transfers",
    description:
      "Send money to any South African bank account via EFT, make immediate payments, or transfer between your own Discovery Bank accounts instantly at no charge.",
    iconPath: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "Spending insights and budgeting",
    description:
      "The app automatically categorises your spending (groceries, fuel, entertainment, etc.) and shows monthly trends. Set budget limits per category and get alerts when you approach them.",
    iconPath: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
];

const DIGITAL_WALLETS = [
  {
    name: "Apple Pay",
    description: "iPhone, Apple Watch, iPad, Mac. Use Face ID or Touch ID for contactless payments.",
  },
  {
    name: "Google Pay",
    description: "Android phones and Wear OS watches. Tap to pay at any NFC terminal.",
  },
  {
    name: "Samsung Pay",
    description: "Samsung Galaxy phones and watches. Supports both NFC and MST for wider terminal compatibility.",
  },
  {
    name: "Garmin Pay",
    description: "Pay from your Garmin smartwatch. Perfect for runners and cyclists who leave their phone behind.",
  },
  {
    name: "Fitbit Pay",
    description: "Pay from your Fitbit smartwatch. Convenient for gym sessions and everyday purchases.",
  },
];

export default function DiscoveryBankAppPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(APP_FAQS)} />

      <div className="container-narrow py-12">
        <BreadcrumbNav items={[{ label: "Discovery Bank App", href: "/app" }]} />
        <LastUpdated date={SITE.lastUpdated} />

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mt-4 mb-6">
          Discovery Bank App: Features, Setup & Review
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          The Discovery Bank app is the core of your banking experience. There are no branches.
          Everything happens in the app: opening your account, managing cards, making payments,
          investing, and tracking your Vitality Money rewards.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          Here is a detailed breakdown of what the app can do, how to set it up, and why it
          consistently rates as one of the highest-rated banking apps in South Africa.
        </p>

        {/* App ratings */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            App overview and ratings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "App Store rating",
                value: "4.7/5",
                detail: "iOS (iPhone & iPad)",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
              },
              {
                label: "Google Play rating",
                value: "4.5/5",
                detail: "Android",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
              },
              {
                label: "App type",
                value: "Branchless",
                detail: "100% digital banking",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="bg-white dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-3 mx-auto">
                  {item.icon}
                </div>
                <p className="text-2xl font-bold text-navy-600 dark:text-cream">{item.value}</p>
                <p className="font-medium text-navy-600 dark:text-cream text-sm mt-1">{item.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <ReferralCodeBlock />
        </div>

        {/* Key features */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Key features
          </h2>
          <div className="space-y-4">
            {KEY_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-600 dark:text-cream">{feature.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Digital wallets */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Digital wallet support
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Discovery Bank supports every major digital wallet in South Africa. You can pay
            with your phone, watch, or any connected device. No physical card needed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIGITAL_WALLETS.map((wallet) => (
              <div
                key={wallet.name}
                className="bg-accent/5 dark:bg-accent/10 border border-accent/20 rounded-xl p-5"
              >
                <p className="font-semibold text-navy-600 dark:text-cream">{wallet.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{wallet.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <CTABanner
            heading="Start banking from your phone"
            subtext={`Download the Discovery Bank app and use referral code ${SITE.referralCode} to earn up to 5,000 Discovery Miles when you open your account.`}
          />
        </div>

        {/* How to download and set up */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            How to download and set up the app
          </h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Download from your app store",
                description:
                  "Search for 'Discovery Bank' on the Apple App Store or Google Play Store. Download the official app (published by Discovery Limited). It is free.",
              },
              {
                step: 2,
                title: "Open the app and start sign-up",
                description:
                  "If you are a new customer, tap 'Open an account.' If you already have an account, tap 'Log in' and follow the device registration prompts.",
              },
              {
                step: 3,
                title: "Verify your identity",
                description:
                  "New customers: take a selfie for facial verification, scan your SA ID, and upload proof of income and address. The whole process takes about 10 minutes.",
              },
              {
                step: 4,
                title: `Enter referral code ${SITE.referralCode}`,
                description:
                  "When prompted, enter referral code DNJ001 to earn up to 5,000 Discovery Miles. This step cannot be done after account creation.",
                link: { label: "Full account opening guide", href: "/open-account" },
              },
              {
                step: 5,
                title: "Set up biometric login",
                description:
                  "After your account is created, the app will prompt you to enable fingerprint or face recognition login. This is faster and more secure than a PIN.",
              },
              {
                step: 6,
                title: "Add your card to a digital wallet",
                description:
                  "Go to the 'Cards' section in the app and tap 'Add to wallet.' Choose Apple Pay, Google Pay, Samsung Pay, or any other supported wallet. You can start making contactless payments immediately.",
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

        {/* Security features */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-navy-600 dark:text-cream mb-6">
            Security features
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Discovery Bank was built as a digital-first bank, so security is embedded into
            every layer of the app. Here is how your money and data are protected.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "256-bit encryption",
                description: "All data transmitted between the app and Discovery Bank servers is encrypted using bank-grade TLS encryption.",
              },
              {
                title: "Biometric authentication",
                description: "Fingerprint and face recognition using your device's secure hardware. No biometric data is stored on Discovery's servers.",
              },
              {
                title: "Device binding",
                description: "Your account is tied to your specific device. If someone tries to log in from a new device, additional verification is required.",
              },
              {
                title: "Real-time fraud monitoring",
                description: "AI-powered transaction monitoring flags suspicious activity instantly. You receive immediate alerts for unusual transactions.",
              },
              {
                title: "Instant card freeze",
                description: "Lost your card? Freeze it in one tap from the app. Unfreeze it just as quickly if you find it. No need to call the bank.",
              },
              {
                title: "Transaction limits",
                description: "Set daily and per-transaction limits for ATM withdrawals, online purchases, and tap-to-pay. Adjust them anytime in the app.",
              },
              {
                title: "Secure OTP and in-app approvals",
                description: "Online purchases require one-time PIN verification or in-app transaction approval. No SMS OTP interception risk.",
              },
              {
                title: "Deposit insurance",
                description: "Discovery Bank is a licensed bank regulated by the South African Reserve Bank. Your deposits are protected under South African deposit insurance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
              >
                <h3 className="font-medium text-navy-600 dark:text-cream flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 ml-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <ReferralCodeBlock />
        </section>

        <FAQAccordion faqs={APP_FAQS} />

        <CTABanner
          heading="Ready to try the app?"
          subtext={`Open your Discovery Bank account with referral code ${SITE.referralCode}. Download the app, sign up in 10 minutes, and start banking from your phone.`}
        />
      </div>
    </>
  );
}
