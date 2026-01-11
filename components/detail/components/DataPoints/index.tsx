import React from "react";

export const DataPoint = ({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) => {
  return (
    <div className="flex flex-wrap items-center gap-1 mb-2">
      <div className="flex w-full items-center gap-2">
        {icon && <div className="text-gray-500">{icon}</div>}
        <dt className="text-sm font-medium uppercase text-gray-500">{label}</dt>
      </div>
      <dd className="text-sm text-gray-900">{value}</dd>
    </div>
  );
};
