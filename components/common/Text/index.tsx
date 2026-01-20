import { twMerge } from "tailwind-merge";

export const H1 = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h1 className={twMerge("text-4xl font-bold text-gray-900 mb-4", className)}>{children}</h1>;
};

export const H2 = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h2 className={twMerge("text-2xl font-semibold text-gray-900 mb-6", className)}>{children}</h2>;
};

export const H3 = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h3 className={twMerge("text-xl font-semibold text-gray-900 mb-3", className)}>{children}</h3>;
};

export const P = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={twMerge("text-gray-700 leading-relaxed mb-4", className)}>{children}</p>;
};