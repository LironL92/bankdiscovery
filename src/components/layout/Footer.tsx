import Link from "next/link";
import { SITE, FOOTER_LINKS } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="bg-navy-600 dark:bg-navy-700 text-slate-300 mt-20">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="font-serif text-xl font-bold text-cream">
              <span className="text-accent">Bank</span>Discovery
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Independent Discovery Bank guide for South Africans.
              Compare cards, fees, and rewards to make smarter banking decisions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream uppercase tracking-wider mb-4">
              Discovery Bank
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream uppercase tracking-wider mb-4">
              Compare Banks
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.compare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
            {SITE.disclaimer}
          </p>
          <p className="mt-4 text-xs text-slate-600">
            &copy; {new Date().getFullYear()} {SITE.name}. All information is provided for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
