import { twMerge } from "tailwind-merge";

export const TableCell = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <td
      className={twMerge(
        "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 first-of-type:max-w-[200px] first-of-type:truncate nth-of-type-2:sticky nth-of-type-2:left-0 nth-of-type-2:bg-white",
        className
      )}
    >
      {children}
    </td>
  );
};
