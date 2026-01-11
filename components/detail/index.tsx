import { CountryDetail } from "@/types/Country";
import { EconomicData } from "@/types/Economy";

import { BasicInformation } from "./components/BasicInformation";
import { IndicatorCharts } from "./components/IndicatorCharts";
import { IndicatorInformation } from "./components/IndicatorInformation";

export const DetailContent = ({ country, economicData }: { country: CountryDetail; economicData: EconomicData }) => {
  const gdp = economicData.gdp.find((data) => data.countryiso3code === country.cca3)?.value;
  const inflation = economicData.inflation.find((data) => data.countryiso3code === country.cca3)?.value;
  const unemployment = economicData.unemployment.find((data) => data.countryiso3code === country.cca3)?.value;
  return (
    <div className="px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BasicInformation country={country} />
        <IndicatorInformation gdp={gdp} inflation={inflation} unemployment={unemployment} />
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(country.currencies).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Currencies</h3>
              <ul className="space-y-2">
                {Object.entries(country.currencies).map(([code, currency]) => (
                  <li key={code} className="text-sm text-gray-700">
                    <span className="font-medium">{code}</span>: {currency.name} ({currency.symbol})
                  </li>
                ))}
              </ul>
            </div>
          )}

          {country.languages && Object.keys(country.languages).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
              <ul className="space-y-2">
                {Object.entries(country.languages).map(([code, language]: [string, string]) => (
                  <li key={code} className="text-sm text-gray-700">
                    <span className="font-medium">{code}</span>: {language}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {country.timezones && country.timezones.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Timezones</h3>
            <div className="flex flex-wrap gap-2">
              {country.timezones.map((timezone: string) => (
                <span key={timezone} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                  {timezone}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <IndicatorCharts
        gdp={economicData.gdp}
        inflation={economicData.inflation}
        unemployment={economicData.unemployment}
      />
    </div>
  );
};
