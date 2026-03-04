type GtagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent({ action, category, label, value }: GtagEvent) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

// --- Conversion events ---

export function trackReferralCodeCopy() {
  sendEvent({
    action: "referral_code_copy",
    category: "conversion",
    label: "DNJ001",
  });
}

export function trackOpenAccountClick(source: string) {
  sendEvent({
    action: "open_account_click",
    category: "conversion",
    label: source,
  });
}

export function trackAppDownloadClick(store: "app_store" | "google_play") {
  sendEvent({
    action: "app_download_click",
    category: "conversion",
    label: store,
  });
}

export function trackNewsletterSignup() {
  sendEvent({
    action: "newsletter_signup",
    category: "conversion",
  });
}

// --- Engagement events ---

export function trackFaqOpen(question: string) {
  sendEvent({
    action: "faq_open",
    category: "engagement",
    label: question,
  });
}

export function trackComparisonView(bank: string) {
  sendEvent({
    action: "comparison_view",
    category: "engagement",
    label: bank,
  });
}

export function trackCardTierView(tier: string) {
  sendEvent({
    action: "card_tier_view",
    category: "engagement",
    label: tier,
  });
}

export function trackOutboundLink(url: string) {
  sendEvent({
    action: "outbound_click",
    category: "engagement",
    label: url,
  });
}
