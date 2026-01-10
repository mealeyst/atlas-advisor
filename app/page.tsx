import { AtlasTable } from "./components/AtlasTable";

export type Country = {
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
  }[];
};

export type EconomicData = [
  {
    page: number;
    pages: number;
    per_page: number;
    total: number;
    sourceid: string;
    lastupdated: string;
  },
  {
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
  }
];

const INDICATORS = [
  { key: "gdp", id: "NY.GDP.MKTP.CD" },
  { key: "inflation", id: "FP.CPI.TOTL.ZG" },
  { key: "unemployment", id: "SL.UEM.TOTL.ZS" },
];

async function getCountries() {
  const countries = (await fetch(
    "https://restcountries.com/v3.1/all?fields=cca3,name,region,flags,population,gini,currencies"
  ).then((res) => res.json())) as Country[];
  const worldBankApiPromises = INDICATORS.map(
    async (indicator) =>
      (await fetch(
        `https://api.worldbank.org/v2/country/all/indicator/${indicator.id}?format=json&per_page=300&mrv=1`
      ).then((res) => res.json())) as EconomicData
  );
  const economicData = await Promise.all(worldBankApiPromises);
  console.log(economicData);
  return countries;
}
export default async function Home() {
  const countries = await getCountries();
  return (
    <div className="relative flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-5">Atlas Advisory</h1>
      <AtlasTable countries={countries} />
    </div>
  );
}
