import { Country } from "../page";

const TableCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {children}
    </td>
  );
};

const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  );
};

export const AtlasTable = ({ countries }: { countries: Country[] }) => {
  return (
    <div className="overflow-auto shadow-md border-b border-gray-200 sm:rounded-lg">
      <table className="min-w-full divide-y  divide-gray-200">
        <thead className="bg-gray-50">
          <TableHeader>Name</TableHeader>
          <TableHeader>Region</TableHeader>
          <TableHeader>Population</TableHeader>
          <TableHeader>Gini</TableHeader>
          <TableHeader>Currencies</TableHeader>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {countries.map((country) => (
            <tr
              key={country.cca3}
              className="hover:bg-gray-100 hover:cursor-pointer transition-all duration-300"
            >
              <TableCell>{country.name.common}</TableCell>
              <TableCell>{country.region}</TableCell>
              <TableCell>{country.population}</TableCell>
              <TableCell>{Object.values(country.gini)[0]}</TableCell>
              <TableCell>
                {Object.keys(country.currencies).join(", ")}
              </TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
