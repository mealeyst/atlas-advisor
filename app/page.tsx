import { Table } from "./components/Table";

export type Country = {
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
};

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

export type IndicatorResponse = [IndicatorMeta, IndicatorData[]];

export type EconomicData = {
  gdp: IndicatorData[];
  inflation: IndicatorData[];
  unemployment: IndicatorData[];
};

const INDICATORS = [
  { key: "gdp", id: "NY.GDP.MKTP.CD" },
  { key: "inflation", id: "FP.CPI.TOTL.ZG" },
  { key: "unemployment", id: "SL.UEM.TOTL.ZS" },
];

async function getCountries() {
  const countries = (await fetch(
    "https://restcountries.com/v3.1/all?fields=cca2,cca3,name,region,flags,population,gini,currencies"
  ).then((res) => res.json())) as Country[];
  const worldBankApiPromises = INDICATORS.map(
    async (indicator) =>
      (await fetch(
        `https://api.worldbank.org/v2/country/all/indicator/${indicator.id}?format=json&per_page=300&mrv=1`
      ).then((res) => res.json())) as IndicatorResponse
  );
  const [
    [_gdpMeta, gdp],
    [_inflationMeta, inflation],
    [_unemploymentMeta, unemployment],
  ] = await Promise.all(worldBankApiPromises);

  const economicData: EconomicData = {
    gdp,
    inflation,
    unemployment,
  };

  return { countries, economicData };
}
export default async function Home() {
  const { countries, economicData } = await getCountries();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-8">
      <h1 className="text-2xl font-bold mb-5">Atlas Advisory</h1>
      <div className="w-full max-w-full">
        <Table countries={countries} economicData={economicData} />
      </div>
    </div>
  );
}
