import { CountryCard, CountryCardProps } from "./CountryCard";

export const CountryList = ({
  countries,
}: {
  countries: CountryCardProps[];
}) => {
  return (
    <main className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </main>
  );
};
