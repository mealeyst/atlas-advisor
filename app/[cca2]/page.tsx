import Link from "next/link";

import { DetailContent } from "@/components/detail";
import { CountryDetailHeader } from "@/components/detail/components/CountryDetailHeader";
import { CountryDetail } from "@/types/Country";
import { EconomicData, IndicatorData, IndicatorResponse } from "@/types/Economy";

const INDICATORS = [
  { key: "gdp", id: "NY.GDP.MKTP.CD" },
  { key: "inflation", id: "FP.CPI.TOTL.ZG" },
  { key: "unemployment", id: "SL.UEM.TOTL.ZS" },
];

async function getCountryData(cca2: string) {
  // Fetch full country data using cca2 for REST Countries API
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${cca2}?fields=cca2,cca3,name,region,flags,population,gini,currencies,capital,area,subregion,languages,timezones`,
    {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch country data: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  // Handle both array and object responses from REST Countries API
  const countryData = Array.isArray(data) ? data[0] : data;

  if (!countryData || !countryData.cca3) {
    throw new Error("Country not found");
  }

  const country = countryData as CountryDetail & {
    capital?: string[];
    area?: number;
    subregion?: string;
    languages?: { [key: string]: string };
    timezones?: string[];
  };

  // Use cca3 from the response for World Bank API calls
  const cca3 = country.cca3;

  // Fetch economic data using cca3 for World Bank API (10 years of data)
  const worldBankApiPromises = INDICATORS.map(
    async (indicator) =>
      (await fetch(
        `https://api.worldbank.org/v2/country/${cca3}/indicator/${indicator.id}?format=json&per_page=10&mrv=10`
      ).then((res) => res.json())) as IndicatorResponse
  );

  // World bank api returns a metadata object and an array of data point, but we don't need the metadata
  const [[_gdpMeta, gdp], [_inflationMeta, inflation], [_unemploymentMeta, unemployment]] = await Promise.all(
    worldBankApiPromises
  );

  // Filter data for the specific country
  const countryGdp = gdp?.filter((data: IndicatorData) => data.countryiso3code === cca3) ?? [];
  const countryInflation = inflation?.filter((data: IndicatorData) => data.countryiso3code === cca3) ?? [];
  console.log({ gdp, inflation, unemployment });
  const countryUnemployment = unemployment?.filter((data: IndicatorData) => data.countryiso3code === cca3) ?? [];

  const economicData: EconomicData = {
    gdp: countryGdp,
    inflation: countryInflation,
    unemployment: countryUnemployment,
  };

  return { country, economicData };
}

export default async function CountryPage({ params }: { params: Promise<{ cca2: string }> }) {
  const { cca2 } = await params;
  const { country, economicData } = await getCountryData(cca2);

  // Get the most recent values (data is already filtered by country)
  const gdp = economicData.gdp
    .filter((d) => d.value != null)
    .sort((a, b) => parseInt(b.date) - parseInt(a.date))[0]?.value;
  const inflation = economicData.inflation
    .filter((d) => d.value != null)
    .sort((a, b) => parseInt(b.date) - parseInt(a.date))[0]?.value;
  const unemployment = economicData.unemployment
    .filter((d) => d.value != null)
    .sort((a, b) => parseInt(b.date) - parseInt(a.date))[0]?.value;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-8">
      <div className="w-full max-w-4xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          ← Back to Countries
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <CountryDetailHeader country={country} />
          <DetailContent country={country} economicData={economicData} />
        </div>
      </div>
    </div>
  );
}
