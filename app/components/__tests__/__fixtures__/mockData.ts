import { Country, EconomicData } from "../../../page";

export const mockCountries: Country[] = [
  {
    cca3: "USA",
    name: {
      common: "United States",
      official: "United States of America",
      nativeName: {
        eng: {
          official: "United States of America",
          common: "United States",
        },
      },
    },
    region: "Americas",
    flags: {
      svg: "https://flagcdn.com/us.svg",
      png: "https://flagcdn.com/w320/us.png",
      alt: "The flag of the United States of America",
    },
    population: 329484123,
    gini: {
      "2018": 41.4,
    },
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
  },
  {
    cca3: "CAN",
    name: {
      common: "Canada",
      official: "Canada",
      nativeName: {
        eng: {
          official: "Canada",
          common: "Canada",
        },
      },
    },
    region: "Americas",
    flags: {
      svg: "https://flagcdn.com/ca.svg",
      png: "https://flagcdn.com/w320/ca.png",
      alt: "The flag of Canada",
    },
    population: 38005238,
    gini: {
      "2017": 33.3,
    },
    currencies: {
      CAD: {
        name: "Canadian dollar",
        symbol: "$",
      },
    },
  },
  {
    cca3: "MEX",
    name: {
      common: "A Very Long Country Name That Should Be Truncated",
      official: "United Mexican States",
      nativeName: {
        spa: {
          official: "Estados Unidos Mexicanos",
          common: "México",
        },
      },
    },
    region: "Americas",
    flags: {
      svg: "https://flagcdn.com/mx.svg",
      png: "https://flagcdn.com/w320/mx.png",
      alt: "The flag of Mexico",
    },
    population: 128932753,
    gini: {
      "2018": 45.4,
    },
    currencies: {
      MXN: {
        name: "Mexican peso",
        symbol: "$",
      },
    },
  },
];

export const mockEconomicData: EconomicData = {
  gdp: [
    {
      indicator: { id: "NY.GDP.MKTP.CD", value: "GDP (current US$)" },
      country: { id: "US", value: "United States" },
      countryiso3code: "USA",
      date: "2022",
      value: 25462700000000,
      unit: "",
      obs_status: "",
      decimal: 0,
    },
    {
      indicator: { id: "NY.GDP.MKTP.CD", value: "GDP (current US$)" },
      country: { id: "CA", value: "Canada" },
      countryiso3code: "CAN",
      date: "2022",
      value: 2139930000000,
      unit: "",
      obs_status: "",
      decimal: 0,
    },
  ],
  inflation: [
    {
      indicator: {
        id: "FP.CPI.TOTL.ZG",
        value: "Inflation, consumer prices (annual %)",
      },
      country: { id: "US", value: "United States" },
      countryiso3code: "USA",
      date: "2022",
      value: 8.0,
      unit: "",
      obs_status: "",
      decimal: 1,
    },
    {
      indicator: {
        id: "FP.CPI.TOTL.ZG",
        value: "Inflation, consumer prices (annual %)",
      },
      country: { id: "CA", value: "Canada" },
      countryiso3code: "CAN",
      date: "2022",
      value: 6.8,
      unit: "",
      obs_status: "",
      decimal: 1,
    },
  ],
  unemployment: [
    {
      indicator: {
        id: "SL.UEM.TOTL.ZS",
        value: "Unemployment, total (% of total labor force)",
      },
      country: { id: "US", value: "United States" },
      countryiso3code: "USA",
      date: "2022",
      value: 3.6,
      unit: "",
      obs_status: "",
      decimal: 1,
    },
  ],
};
