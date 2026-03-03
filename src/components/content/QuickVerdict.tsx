type Props = {
  winner: "discovery" | "competitor" | "tie";
  summary: string;
  details: string;
  discoveryName?: string;
  competitorName?: string;
};

export function QuickVerdict({
  winner,
  summary,
  details,
  discoveryName = "Discovery Bank",
  competitorName,
}: Props) {
  const winnerLabel =
    winner === "discovery"
      ? discoveryName
      : winner === "competitor"
      ? competitorName
      : "It depends";

  const borderColor =
    winner === "discovery"
      ? "border-accent"
      : winner === "competitor"
      ? "border-blue-500"
      : "border-gold";

  return (
    <div
      className={`border-l-4 ${borderColor} bg-slate-50 dark:bg-slate-800/50 rounded-r-xl p-6 mb-10`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Quick Verdict
        </span>
        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-navy-600/10 dark:bg-cream/10 text-navy-600 dark:text-cream">
          {winnerLabel}
        </span>
      </div>
      <p className="font-serif text-lg font-semibold text-navy-600 dark:text-cream mb-2">
        {summary}
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {details}
      </p>
    </div>
  );
}
