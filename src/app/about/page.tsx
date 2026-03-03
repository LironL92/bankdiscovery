import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/schema/metadata";
import { JsonLd, generateFAQSchema } from "@/lib/schema/generate-schema";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ABOUT_FAQS } from "@/lib/content/faqs";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = generatePageMetadata({
  title: "About BankDiscovery",
  description:
    "Who we are, how we research, and why we built the most comprehensive independent Discovery Bank guide in South Africa.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(ABOUT_FAQS)} />

      <div className="container-narrow py-12">
        <BreadcrumbNav items={[{ label: "About", href: "/about" }]} />

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-navy-600 dark:text-cream mb-6">
          About BankDiscovery
        </h1>

        <div className="prose-custom">
          <p>
            BankDiscovery is an independent resource built by South Africans, for South Africans.
            We exist because choosing the right bank should not require a finance degree or hours of
            digging through marketing material.
          </p>

          <h2>Why we built this</h2>
          <p>
            Discovery Bank is a genuinely innovative product. The Vitality Money programme, dynamic
            interest rates, and health-integrated rewards are unlike anything else in South African
            banking. But the product is also complex. Fee structures vary by tier and Vitality status.
            Rewards depend on your behaviour. Interest rates are dynamic.
          </p>
          <p>
            We found that most people considering Discovery Bank had the same questions: Is it
            actually worth the fees? How does it compare to Capitec or FNB? Will I really save money?
            What is Vitality Money, actually?
          </p>
          <p>
            So we built the resource we wished existed: clear, honest, and detailed.
          </p>

          <h2>Our approach</h2>
          <p>
            Every fact on this site is sourced from publicly available information: official bank
            websites, published fee guides, regulatory filings, and reputable South African financial
            publications. We do not rely on press releases or marketing claims.
          </p>
          <p>
            We update our content regularly as banks change their fees and features. Every page
            displays a &quot;Last updated&quot; date so you always know how current the information is.
          </p>
          <p>
            We are genuinely balanced. When Discovery Bank is not the right choice, we say so.
            Our comparison pages acknowledge the strengths of every bank we cover. Trust is built
            by being honest, not by being promotional.
          </p>

          <h2>How we earn money</h2>
          <p>
            We may earn a referral reward when you open a Discovery Bank account using our referral
            code. This is how we fund the site and keep it free for everyone.
          </p>
          <p>
            <strong>This does not affect our recommendations.</strong> We recommend Discovery Bank
            where we genuinely believe it is the best option. We recommend other banks when they
            are a better fit. Our comparison pages are balanced precisely because our credibility
            depends on it.
          </p>

          <h2>Independence disclaimer</h2>
          <p>
            {SITE.disclaimer}
          </p>

          <h2>Contact</h2>
          <p>
            Have a question, correction, or suggestion? We would love to hear from you. Email us at{" "}
            <strong>hello@bankdiscovery.co.za</strong>.
          </p>
        </div>

        <FAQAccordion faqs={ABOUT_FAQS} />
      </div>
    </>
  );
}
