// Including this type as the World Bank API returns a metadata object as well as an array of data point, but we don't need the metadata
type IndicatorMeta = {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  sourceid: string;
  lastupdated: string;
};

// This is the meat and potatoes of the data that we fetch from the World Bank API. Each indicator follows this format (e.g. GDP, inflation, unemployment).
export type IndicatorData = {
  indicator: {
    id: string;
    value: string;
  };
  country: {
    id: string;
    value: string;
  };
  countryiso3code: string;
  date: string;
  value: number;
  unit: string;
  obs_status: string;
  decimal: number;
};

// The actual response from the World Bank API (yeah, sometimes the IndicatorData is null if a coutry has not reported data)
export type IndicatorResponse = [IndicatorMeta, IndicatorData[] | null];

// Combined response from the World Bank API for all indicators (used on overview table and detail page)
export type EconomicData = {
  gdp: IndicatorData[];
  inflation: IndicatorData[];
  unemployment: IndicatorData[];
};
