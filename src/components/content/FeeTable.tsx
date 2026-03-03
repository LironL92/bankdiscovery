import type { FeeCategory } from "@/lib/content/fees";

type Props = {
  categories: FeeCategory[];
};

export function FeeTable({ categories }: Props) {
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
                  <th className="text-left py-3 pr-4 font-medium text-slate-500 dark:text-slate-400">
                    Fee
                  </th>
                  <th className="text-center py-3 px-3 font-medium text-yellow-600 dark:text-yellow-400">
                    Gold
                  </th>
                  <th className="text-center py-3 px-3 font-medium text-slate-500 dark:text-slate-400">
                    Platinum
                  </th>
                  <th className="text-center py-3 px-3 font-medium text-navy-600 dark:text-cream">
                    Black
                  </th>
                  <th className="text-center py-3 pl-3 font-medium text-purple-600 dark:text-purple-400">
                    Purple
                  </th>
                </tr>
              </thead>
              <tbody>
                {category.fees.map((fee, i) => (
                  <tr
                    key={fee.name}
                    className={`border-b border-slate-100 dark:border-slate-800 ${
                      i % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/25" : ""
                    }`}
                  >
                    <td className="py-3 pr-4 text-slate-600 dark:text-slate-300 font-medium">
                      {fee.name}
                      {fee.tooltip && (
                        <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5 font-normal">
                          {fee.tooltip}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-center text-slate-700 dark:text-slate-200">{fee.gold}</td>
                    <td className="py-3 px-3 text-center text-slate-700 dark:text-slate-200">{fee.platinum}</td>
                    <td className="py-3 px-3 text-center text-slate-700 dark:text-slate-200">{fee.black}</td>
                    <td className="py-3 pl-3 text-center text-slate-700 dark:text-slate-200">{fee.purple}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
