import Image from "next/image";

import { CountryDetail } from "@/types/Country";

export const CountryDetailHeader = ({
  country,
}: {
  country: CountryDetail;
}) => {
  return (
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
          <p className="text-lg text-gray-600 mt-1">{country.name.official}</p>
          <p className="text-sm text-gray-500 mt-1">ISO Code: {country.cca3}</p>
        </div>
      </div>
    </div>
  );
};
