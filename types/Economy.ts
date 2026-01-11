type IndicatorMeta = {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  sourceid: string;
  lastupdated: string;
};

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

export type IndicatorResponse = [IndicatorMeta, IndicatorData[] | null];

export type EconomicData = {
  gdp: IndicatorData[];
  inflation: IndicatorData[];
  unemployment: IndicatorData[];
};
