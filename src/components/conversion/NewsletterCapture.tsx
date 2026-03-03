"use client";

import { useState, FormEvent } from "react";

export function NewsletterCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: Connect to email service
    console.log("Newsletter signup:", email);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-accent/5 dark:bg-accent/10 rounded-xl p-6 text-center">
        <svg className="w-8 h-8 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="font-medium text-navy-600 dark:text-cream">You are on the list.</p>
        <p className="text-sm text-slate-500 mt-1">We will send you updates when fees or features change.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
      <h3 className="font-serif text-lg font-semibold text-navy-600 dark:text-cream mb-1">
        Stay updated
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Get notified when Discovery Bank changes fees, launches new features, or when we publish new comparisons.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.co.za"
          required
          className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-navy-600 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-accent hover:bg-accent-600 text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-slate-400 mt-2">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
