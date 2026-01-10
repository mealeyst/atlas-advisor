import { Country, EconomicData } from "../page";
import { TableCell } from "./TableCell";
import { TableHeader } from "./TableHeader";

export const Table = ({
  countries,
  economicData,
}: {
  countries: Country[];
  economicData: EconomicData;
}) => {
  console.log(economicData.gdp[0]);
  return (
    <div className="w-full max-w-full h-screen overflow-auto shadow-md border-b border-gray-200 sm:rounded-lg">
      <table className="overflow-y-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <TableHeader className="max-w-[200px] truncate">Name</TableHeader>
            <TableHeader className="sticky top-0 left-0 z-30 border-r border-gray-200 shadow-[2px_0_4px_rgba(0,0,0,0.1)]">
              ISO Code
            </TableHeader>
            <TableHeader>Region</TableHeader>
            <TableHeader>Population</TableHeader>
            <TableHeader>Gini</TableHeader>
            <TableHeader>Currencies</TableHeader>
            <TableHeader>GDP</TableHeader>
            <TableHeader>Inflation</TableHeader>
            <TableHeader>Unemployment</TableHeader>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {countries.map((country) => (
            <tr
              key={country.cca3}
              className="group hover:bg-gray-100 hover:cursor-pointer transition-all duration-300"
            >
              <TableCell className="max-w-[200px] truncate">
                {country.name.common.length > 30
                  ? `${country.name.common.substring(0, 30)}...`
                  : country.name.common}
              </TableCell>
              <TableCell className="sticky left-0 z-10 bg-white group-hover:bg-gray-100 transition-all duration-300 border-r border-gray-200 shadow-[2px_0_4px_rgba(0,0,0,0.1)]">
                {country.cca3}
              </TableCell>
              <TableCell>{country.region}</TableCell>
              <TableCell>{country.population}</TableCell>
              <TableCell>{Object.values(country.gini)[0]}</TableCell>
              <TableCell>
                {Object.keys(country.currencies).join(", ")}
              </TableCell>
              <TableCell>
                {(() => {
                  const gdp = economicData.gdp.find(
                    (data) => data.countryiso3code === country.cca3
                  )?.value;
                  return gdp ? `$${Math.floor(gdp * 100) / 100}` : "N/A";
                })()}
              </TableCell>
              <TableCell>
                {(() => {
                  const inflation = economicData.inflation.find(
                    (data) => data.countryiso3code === country.cca3
                  )?.value;
                  return inflation
                    ? `${Math.round(inflation * 100) / 100}%`
                    : "N/A";
                })()}
              </TableCell>
              <TableCell>
                {(() => {
                  const unemployment = economicData.unemployment.find(
                    (data) => data.countryiso3code === country.cca3
                  )?.value;
                  return unemployment
                    ? `${Math.round(unemployment * 100) / 100}%`
                    : "N/A";
                })()}
              </TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
