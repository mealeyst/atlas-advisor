"use client";

import {
  ChartPieSliceIcon,
  GlobeHemisphereWestIcon,
  RulerIcon,
  StarIcon,
} from "@phosphor-icons/react";

import { CountryDetail } from "@/types/Country";

import DataPoint from "./DataPoint";

export const BasicInformation = ({ country }: { country: CountryDetail }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Basic Information
      </h2>
      <dl className="space-y-3">
        <DataPoint
          icon={<GlobeHemisphereWestIcon className="w-4 h-4" />}
          label="Region"
          value={`${country.region} ${
            country.subregion && ` • ${country.subregion}`
          }`}
        />
        {country.area && (
          <DataPoint
            icon={<RulerIcon className="w-4 h-4" />}
            label="Area"
            value={`${country.area.toLocaleString()} km²`}
          />
        )}
        {country.capital && country.capital.length > 0 && (
          <DataPoint
            icon={<StarIcon className="w-4 h-4" />}
            label="Capital"
            value={country.capital.join(", ")}
          />
        )}
        {Object.keys(country.gini).length > 0 && (
          <DataPoint
            icon={<ChartPieSliceIcon className="w-4 h-4" />}
            label="Gini Index"
            value={Object.values(country.gini)[0]}
          />
        )}
      </dl>
    </div>
  );
};
