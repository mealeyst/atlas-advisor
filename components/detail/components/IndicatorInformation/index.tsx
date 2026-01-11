"use client";

import {
  BriefcaseIcon,
  ChartLineIcon,
  CurrencyCircleDollarIcon,
} from "@phosphor-icons/react";

import { DataPoint } from "../DataPoints";

type IndicatorInformationProps = {
  gdp?: number;
  inflation?: number;
  unemployment?: number;
};

export const IndicatorInformation = ({
  gdp,
  inflation,
  unemployment,
}: IndicatorInformationProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Economic Indicators
      </h2>
      <dl className="space-y-3">
        <DataPoint
          icon={<CurrencyCircleDollarIcon className="w-4 h-4" />}
          label="GDP"
          value={gdp ? `$${Math.floor(gdp * 100) / 100}` : "N/A"}
        />
        <DataPoint
          icon={<ChartLineIcon className="w-4 h-4" />}
          label="Inflation Rate"
          value={inflation ? `${Math.round(inflation * 100) / 100}%` : "N/A"}
        />
        <DataPoint
          icon={<BriefcaseIcon className="w-4 h-4" />}
          label="Unemployment Rate"
          value={
            unemployment ? `${Math.round(unemployment * 100) / 100}%` : "N/A"
          }
        />
      </dl>
    </div>
  );
};
