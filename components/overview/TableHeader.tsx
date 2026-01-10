import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowsDownUpIcon,
} from "@phosphor-icons/react";
import type { Header } from "@tanstack/react-table";
import { twMerge } from "tailwind-merge";

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
        "px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider sticky top-0 z-20 bg-blue-500 shadow-sm",
        canSort && "cursor-pointer select-none hover:bg-blue-600",
        className
      )}
      onClick={canSort ? header?.column.getToggleSortingHandler() : undefined}
    >
      <div className="flex items-center gap-2">
        {children}
        {canSort && (
          <span className="text-gray-50">
            {sortDirection === "asc" ? (
              <ArrowUpIcon className="w-4 h-4" />
            ) : sortDirection === "desc" ? (
              <ArrowDownIcon className="w-4 h-4" />
            ) : (
              <ArrowsDownUpIcon className="w-4 h-4" />
            )}
          </span>
        )}
      </div>
    </th>
  );
};
