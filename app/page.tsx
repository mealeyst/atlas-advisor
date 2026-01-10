import { CountryOverview } from "@/types/Country";
import { EconomicData, IndicatorResponse } from "@/types/Economy";

import { Table } from "../components/overview/Table";

const INDICATORS = [
  { key: "gdp", id: "NY.GDP.MKTP.CD" },
  { key: "inflation", id: "FP.CPI.TOTL.ZG" },
  { key: "unemployment", id: "SL.UEM.TOTL.ZS" },
];

async function getCountries() {
  const countries = (await fetch(
    "https://restcountries.com/v3.1/all?fields=cca2,cca3,name,region,flags,population,gini,currencies"
  ).then((res) => res.json())) as CountryOverview[];
  const worldBankApiPromises = INDICATORS.map(
    async (indicator) =>
      (await fetch(
        `https://api.worldbank.org/v2/country/all/indicator/${indicator.id}?format=json&per_page=300&mrv=1`
      ).then((res) => res.json())) as IndicatorResponse
  );
  // World bank returns an array with the first item being metadata. We don't need the metadata, so we destructure the array and ignore the first item.
  const [
    [_gdpMeta, gdp],
    [_inflationMeta, inflation],
    [_unemploymentMeta, unemployment],
  ] = await Promise.all(worldBankApiPromises);

  const economicData: EconomicData = {
    gdp: gdp ?? [],
    inflation: inflation ?? [],
    unemployment: unemployment ?? [],
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
