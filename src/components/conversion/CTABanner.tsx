import Link from "next/link";
import { SITE } from "@/lib/content/site";

type Props = {
  variant?: "inline" | "hero" | "sticky";
  heading?: string;
  subtext?: string;
};

export function CTABanner({
  variant = "inline",
  heading = "Ready to switch to Discovery Bank?",
  subtext,
}: Props) {
  if (variant === "sticky") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-navy-500 border-t border-slate-200 dark:border-slate-700 p-3 lg:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <Link
          href="/open-account"
          className="block w-full bg-accent hover:bg-accent-600 text-white text-center py-3 rounded-lg font-medium text-sm transition-colors"
        >
          Open Account with Code {SITE.referralCode} &mdash; Earn 5,000 Miles
        </Link>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/open-account"
          className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-600 text-white rounded-lg font-medium transition-colors"
        >
          Open Your Account
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/review"
          className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          Read Full Review
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-navy-600 dark:bg-navy-500 rounded-2xl p-8 text-center mt-12">
      <h3 className="font-serif text-xl font-bold text-cream mb-2">{heading}</h3>
      <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
        {subtext ||
          `Use referral code ${SITE.referralCode} when you sign up. You earn up to 5,000 Discovery Miles, and so do we.`}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/open-account"
          className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-600 text-white rounded-lg font-medium transition-colors"
        >
          Open Your Account
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/cards/compare"
          className="text-sm text-slate-400 hover:text-cream transition-colors"
        >
          Compare cards first
        </Link>
      </div>
      <p className="text-xs text-slate-500 mt-4">
        We earn Discovery Miles when you sign up with our code. This does not affect our recommendations.
      </p>
    </div>
  );
}
