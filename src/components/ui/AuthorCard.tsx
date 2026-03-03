import Link from "next/link";
import { SITE } from "@/lib/content/site";

export function AuthorCard() {
  return (
    <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mt-12">
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
        <span className="text-accent font-serif font-bold text-lg">BD</span>
      </div>
      <div>
        <p className="font-medium text-navy-600 dark:text-cream text-sm">
          Written by the {SITE.author.name}
        </p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {SITE.author.description}
        </p>
        <Link
          href="/about"
          className="mt-2 inline-block text-xs text-accent hover:text-accent-600 font-medium"
        >
          Learn more about us
        </Link>
      </div>
    </div>
  );
}
