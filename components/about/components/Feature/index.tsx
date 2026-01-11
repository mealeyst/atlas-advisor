"use client";

import { CheckCircleIcon } from "@phosphor-icons/react";

type FeatureProps = {
  title: string;
  description: string;
};

export const Feature = ({ title, description }: FeatureProps) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
        <CheckCircleIcon className="w-4 h-4 text-blue-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};
