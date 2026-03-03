import type { ComparisonCategory } from "@/lib/content/bank-comparisons";

type Props = {
  categories: ComparisonCategory[];
  discoveryName?: string;
  competitorName: string;
};

function WinnerBadge({ winner }: { winner: "discovery" | "competitor" | "tie" }) {
  if (winner === "tie") return null;
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full ml-1.5 ${
        winner === "discovery" ? "bg-accent" : "bg-blue-500"
      }`}
      title={winner === "discovery" ? "Discovery wins" : "Competitor wins"}
    />
  );
}

export function ComparisonTable({ categories, discoveryName = "Discovery Bank", competitorName }: Props) {
  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category.name}>
          <h3 className="font-serif text-lg font-semibold text-navy-600 dark:text-cream mb-3">
            {category.name}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 pr-4 font-medium text-slate-500 dark:text-slate-400 w-1/3">
                    Feature
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-accent w-1/3">
                    {discoveryName}
                  </th>
                  <th className="text-left py-3 pl-4 font-medium text-blue-600 dark:text-blue-400 w-1/3">
                    {competitorName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {category.rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-100 dark:border-slate-800 ${
                      i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/25" : ""
                    }`}
                  >
                    <td className="py-3 pr-4 text-slate-600 dark:text-slate-300 font-medium">
                      {row.feature}
                      {row.tooltip && (
                        <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5 font-normal">
                          {row.tooltip}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-700 dark:text-slate-200">
                      {row.discovery}
                      {row.winner === "discovery" && <WinnerBadge winner="discovery" />}
                    </td>
                    <td className="py-3 pl-4 text-slate-700 dark:text-slate-200">
                      {row.competitor}
                      {row.winner === "competitor" && <WinnerBadge winner="competitor" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400 pt-2">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-accent" /> Discovery wins
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500" /> Competitor wins
        </span>
      </div>
    </div>
  );
}
