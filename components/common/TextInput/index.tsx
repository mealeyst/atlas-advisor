import React from "react";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  wrapperClassName?: string;
};

export const TextInput = ({ label, wrapperClassName, className, id, ...inputProps }: TextInputProps) => {
  const inputId = id || `text-input-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const defaultInputClassName =
    "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const inputClassName = className || defaultInputClassName;

  return (
    <div className={wrapperClassName}>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input id={inputId} className={inputClassName} {...inputProps} />
    </div>
  );
};
