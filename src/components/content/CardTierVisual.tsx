import Link from "next/link";
import type { CardTier } from "@/lib/content/card-tiers";

type Props = {
  tier: CardTier;
  compact?: boolean;
};

const TIER_GRADIENTS: Record<string, string> = {
  gold: "from-yellow-600 via-yellow-500 to-amber-400",
  slate: "from-slate-500 via-slate-400 to-slate-300",
  navy: "from-navy-600 via-slate-800 to-slate-700",
  purple: "from-purple-800 via-purple-600 to-purple-500",
};

export function CardTierVisual({ tier, compact = false }: Props) {
  const gradient = TIER_GRADIENTS[tier.color] || TIER_GRADIENTS.gold;

  if (compact) {
    return (
      <Link href={`/cards/${tier.slug}`} className="group block">
        <div
          className={`relative bg-gradient-to-br ${gradient} rounded-xl p-5 text-white aspect-[1.6/1] flex flex-col justify-between shadow-lg group-hover:shadow-xl transition-shadow`}
        >
          <div>
            <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Discovery Bank</p>
            <p className="text-lg font-serif font-bold mt-1">{tier.name}</p>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-sm opacity-90">R{tier.monthlyFee}/mo</p>
            <div className="w-8 h-6 rounded border border-white/30 bg-white/10" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`bg-gradient-to-br ${gradient} p-6 text-white`}>
        <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Discovery Bank</p>
        <p className="text-2xl font-serif font-bold mt-1">{tier.name}</p>
        <p className="text-sm mt-2 opacity-90">{tier.tagline}</p>
      </div>
      <div className="p-6">
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-3xl font-bold text-navy-600 dark:text-cream">R{tier.monthlyFee}</span>
          <span className="text-sm text-slate-500">/month</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{tier.monthlyFeeNote}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">{tier.incomeRequirement}</p>
        <ul className="space-y-2 mb-6">
          {tier.benefits.slice(0, 5).map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
              <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
        <Link
          href={`/cards/${tier.slug}`}
          className="block text-center text-sm font-medium text-accent hover:text-accent-600 transition-colors"
        >
          View full details
        </Link>
      </div>
    </div>
  );
}
