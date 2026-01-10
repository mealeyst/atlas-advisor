import Link from "next/link";
import Image from "next/image";
import { Country, EconomicData, IndicatorResponse } from "../page";

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
    throw new Error(
      `Failed to fetch country data: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  // Handle both array and object responses from REST Countries API
  const countryData = Array.isArray(data) ? data[0] : data;

  if (!countryData || !countryData.cca3) {
    throw new Error("Country not found");
  }

  const country = countryData as Country & {
    capital?: string[];
    area?: number;
    subregion?: string;
    languages?: { [key: string]: string };
    timezones?: string[];
  };

  // Use cca3 from the response for World Bank API calls
  const cca3 = country.cca3;

  // Fetch economic data using cca3 for World Bank API
  const worldBankApiPromises = INDICATORS.map(
    async (indicator) =>
      (await fetch(
        `https://api.worldbank.org/v2/country/${cca3}/indicator/${indicator.id}?format=json&per_page=1&mrv=1`
      ).then((res) => res.json())) as IndicatorResponse
  );

  const [[, gdp], [, inflation], [, unemployment]] = await Promise.all(
    worldBankApiPromises
  );

  const economicData: EconomicData = {
    gdp,
    inflation,
    unemployment,
  };

  return { country, economicData };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ cca2: string }>;
}) {
  const { cca2 } = await params;
  const { country, economicData } = await getCountryData(cca2);

  const gdp = economicData.gdp.find(
    (data) => data.countryiso3code === country.cca3
  )?.value;
  const inflation = economicData.inflation.find(
    (data) => data.countryiso3code === country.cca3
  )?.value;
  const unemployment = economicData.unemployment.find(
    (data) => data.countryiso3code === country.cca3
  )?.value;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-8">
      <div className="w-full max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          ← Back to Countries
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header with flag and name */}
          <div className="bg-linear-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center gap-6">
              {country.flags?.svg && (
                <Image
                  src={country.flags.svg}
                  alt={country.flags.alt || country.name.common}
                  width={96}
                  height={64}
                  className="object-cover rounded border-2 border-gray-300"
                />
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {country.name.common}
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  {country.name.official}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ISO Code: {country.cca3}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Basic Information
                </h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Region
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {country.region}
                      {country.subregion && ` • ${country.subregion}`}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Population
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {country.population.toLocaleString()}
                    </dd>
                  </div>
                  {country.area && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Area
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {country.area.toLocaleString()} km²
                      </dd>
                    </div>
                  )}
                  {country.capital && country.capital.length > 0 && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Capital
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {country.capital.join(", ")}
                      </dd>
                    </div>
                  )}
                  {Object.keys(country.gini).length > 0 && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Gini Index
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {Object.values(country.gini)[0]}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Economic Data */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Economic Indicators
                </h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">GDP</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {gdp ? `$${Math.floor(gdp * 100) / 100}` : "N/A"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Inflation Rate
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {inflation
                        ? `${Math.round(inflation * 100) / 100}%`
                        : "N/A"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Unemployment Rate
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {unemployment
                        ? `${Math.round(unemployment * 100) / 100}%`
                        : "N/A"}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.keys(country.currencies).length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Currencies
                    </h3>
                    <ul className="space-y-2">
                      {Object.entries(country.currencies).map(
                        ([code, currency]) => (
                          <li key={code} className="text-sm text-gray-700">
                            <span className="font-medium">{code}</span>:{" "}
                            {currency.name} ({currency.symbol})
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {country.languages &&
                  Object.keys(country.languages).length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Languages
                      </h3>
                      <ul className="space-y-2">
                        {Object.entries(country.languages).map(
                          ([code, language]) => (
                            <li key={code} className="text-sm text-gray-700">
                              <span className="font-medium">{code}</span>:{" "}
                              {language}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
              </div>

              {country.timezones && country.timezones.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Timezones
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {country.timezones.map((timezone) => (
                      <span
                        key={timezone}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                      >
                        {timezone}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
