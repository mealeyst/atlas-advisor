import { twMerge } from "tailwind-merge";

export const TableHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <th
      className={twMerge(
        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 z-20 bg-gray-50 shadow-sm",
        className
      )}
    >
      {children}
    </th>
  );
};
