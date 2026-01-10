import { twMerge } from "tailwind-merge";

export const TableCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <td
      className={twMerge(
        "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
        className
      )}
    >
      {children}
    </td>
  );
};
