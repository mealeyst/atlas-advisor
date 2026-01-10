import { twMerge } from "tailwind-merge";
import type { Header } from "@tanstack/react-table";

export const TableHeader = <TData,>({
  children,
  className,
  header,
}: {
  children: React.ReactNode;
  className?: string;
  header?: Header<TData, unknown>;
}) => {
  const canSort = header?.column.getCanSort();
  const sortDirection = header?.column.getIsSorted();

  return (
    <th
      className={twMerge(
        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 z-20 bg-gray-50 shadow-sm",
        canSort && "cursor-pointer select-none hover:bg-gray-100",
        className
      )}
      onClick={canSort ? header?.column.getToggleSortingHandler() : undefined}
    >
      <div className="flex items-center gap-2">
        {children}
        {canSort && (
          <span className="text-gray-400">
            {sortDirection === "asc"
              ? "↑"
              : sortDirection === "desc"
              ? "↓"
              : "⇅"}
          </span>
        )}
      </div>
    </th>
  );
};
