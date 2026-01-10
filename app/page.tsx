import { CountryList } from "./components/CountryList";
async function getCountries() {
  const [countriesRes, economyRes] = await Promise.all([
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
    ),
    fetch(
      "https://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json"
    ),
  ]);
  const countries = await countriesRes.json();
  const economyRaw = await economyRes.json();
  console.log(economyRaw);
  return countries;
}
export default async function Home() {
  const countries = await getCountries();
  return (
    <div className="relative flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-5">Atlas Advisory</h1>
      <CountryList countries={countries} />
    </div>
  );
}
