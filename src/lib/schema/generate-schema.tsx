import { SITE } from "@/lib/content/site";
import type { FAQ } from "@/lib/content/faqs";

type WithContext<T> = T & { "@context": "https://schema.org" };

export function generateOrganizationSchema(): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    logo: `${SITE.url}/images/logo.png`,
  };
}

export function generateWebSiteSchema(): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateFAQSchema(faqs: FAQ[]): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFinancialProductSchema(product: {
  name: string;
  description: string;
  url: string;
  provider?: string;
  category?: string;
  feesAndCommissionsSpecification?: string;
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: product.name,
    description: product.description,
    url: product.url,
    provider: {
      "@type": "BankOrCreditUnion",
      name: product.provider || "Discovery Bank",
      url: "https://www.discovery.co.za/bank",
    },
    ...(product.category && { category: product.category }),
    ...(product.feesAndCommissionsSpecification && {
      feesAndCommissionsSpecification: product.feesAndCommissionsSpecification,
    }),
  };
}

export function generateReviewSchema(review: {
  itemName: string;
  itemType: string;
  ratingValue: number;
  bestRating: number;
  author: string;
  description: string;
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": review.itemType,
      name: review.itemName,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.ratingValue,
      bestRating: review.bestRating,
    },
    author: {
      "@type": "Organization",
      name: review.author,
    },
    description: review.description,
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
