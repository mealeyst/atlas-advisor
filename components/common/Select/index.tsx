import React from "react";

type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> & {
  label: string;
  onChange: (value: string) => void;
  options: string[];
};

export const Select = ({ label, onChange, options, className, ...selectProps }: SelectProps) => {
  const defaultClassName =
    "w-full h-[42px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const mergedClassName = className ? `${defaultClassName} ${className}` : defaultClassName;

  return (
    <div className="sm:w-48">
      <label htmlFor={selectProps.id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select {...selectProps} onChange={(e) => onChange(e.target.value)} className={mergedClassName}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
