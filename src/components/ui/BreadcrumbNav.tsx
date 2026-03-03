import Link from "next/link";
import { SITE } from "@/lib/content/site";
import { JsonLd, generateBreadcrumbSchema } from "@/lib/schema/generate-schema";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export function BreadcrumbNav({ items }: Props) {
  const schemaItems = [
    { name: "Home", url: SITE.url },
    ...items.map((item) => ({
      name: item.label,
      url: `${SITE.url}${item.href}`,
    })),
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {i === items.length - 1 ? (
                <span className="text-slate-700 dark:text-slate-200 font-medium">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-accent transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
