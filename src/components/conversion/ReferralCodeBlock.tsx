"use client";

import { useState } from "react";
import { SITE } from "@/lib/content/site";

export function ReferralCodeBlock() {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(SITE.referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = SITE.referralCode;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="bg-accent/5 dark:bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
      <p className="font-serif font-semibold text-navy-600 dark:text-cream mb-1">
        Earn up to 5,000 Discovery Miles
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
        Use this referral code when opening your account. You get up to 5,000 Discovery Miles for a Full Banking Suite, or 2,500 for a Credit Card Account.
      </p>
      <div className="flex items-center justify-center gap-3">
        <code className="text-2xl font-bold text-accent tracking-wider bg-white dark:bg-navy-600 px-6 py-3 rounded-lg border border-accent/20">
          {SITE.referralCode}
        </code>
        <button
          onClick={copyCode}
          className="px-4 py-3 bg-accent hover:bg-accent-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
        You must make a transaction using your virtual card or digital wallet within 30 days of opening your account to qualify. We also earn Discovery Miles from this referral. This does not affect our recommendations.
      </p>
    </div>
  );
}
