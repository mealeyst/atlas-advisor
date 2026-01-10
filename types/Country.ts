// Data from the REST Countries API, we only specifiy specific fields that we need for the overview table
export type CountryOverview = {
  cca2: string;
  cca3: string;
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  region: string;
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  population: number;
  gini: {
    [key: string]: number;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
};

// Adding additional fields that are rendered on the detail page
export type CountryDetail = CountryOverview & {
  subregion?: string;
  area?: number;
  capital?: string[];
  timezones?: string[];
};
