export type CountryCardProps = {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  flags: {
    svg: string;
  };
  population: number;
  region: string;
};

export const CountryCard = ({ country }: { country: CountryCardProps }) => {
  return (
    <div
      className="border border-gray-300 rounded-md p-4 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:transition-all hover:[&>.country-flag]:after:opacity-0"
      key={country.name.common}
    >
      <div
        className="country-flag relative w-full h-40 bg-gray-300 rounded-md mb-2 bg-cover bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-md after:opacity-100 after:bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,.5)_100%)] after:transition-all after:duration-300"
        style={{
          backgroundImage: `url(${country.flags.svg})`,
        }}
      />
      <h1 className="text-lg font-bold mb-2">{country.name.common}</h1>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Population:</strong> {country.population}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
    </div>
  );
};
