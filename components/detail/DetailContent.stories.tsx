import type { Meta, StoryObj } from "@storybook/react";

import { CountryDetail } from "@/types/Country";
import { EconomicData } from "@/types/Economy";

import { DetailContent } from ".";
import {
  generateGDPData,
  generateInflationData,
  generateUnemploymentData,
  mockCountries,
} from "../__fixtures__/mockData";

const meta: Meta<typeof DetailContent> = {
  title: "detail/DetailContent",
  component: DetailContent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DetailContent>;

const createEconomicData = (countryCode: string): EconomicData => ({
  gdp: generateGDPData(countryCode, 18000000000000),
  inflation: generateInflationData(
    countryCode,
    [0.1, 1.3, 2.1, 2.4, 1.8, 0.6, 1.2, 4.7, 8.0, 3.2]
  ),
  unemployment: generateUnemploymentData(countryCode, 5.0),
});

export const CompleteCountry: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: "North America",
      area: 9833520,
      capital: ["Washington, D.C."],
      timezones: ["UTC-10:00", "UTC-09:00", "UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00"],
      languages: {
        eng: "English",
      },
    } as CountryDetail,
    economicData: createEconomicData("USA"),
  },
};

export const WithMultipleCurrencies: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: "Western Europe",
      area: 357022,
      capital: ["Berlin"],
      timezones: ["UTC+01:00"],
      currencies: {
        EUR: {
          name: "Euro",
          symbol: "€",
        },
        DEM: {
          name: "German Mark",
          symbol: "DM",
        },
      },
      languages: {
        deu: "German",
      },
    } as CountryDetail,
    economicData: createEconomicData("DEU"),
  },
};

export const WithMultipleLanguages: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: "Southern Africa",
      area: 1221037,
      capital: ["Cape Town", "Bloemfontein", "Pretoria"],
      timezones: ["UTC+02:00"],
      languages: {
        afr: "Afrikaans",
        eng: "English",
        nbl: "Southern Ndebele",
        nso: "Northern Sotho",
        sot: "Southern Sotho",
        ssw: "Swati",
        tsn: "Tswana",
        ven: "Venda",
        xho: "Xhosa",
        zul: "Zulu",
      },
    } as CountryDetail,
    economicData: createEconomicData("ZAF"),
  },
};

export const MinimalData: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: undefined,
      area: undefined,
      capital: undefined,
      timezones: undefined,
      languages: undefined,
    } as CountryDetail,
    economicData: {
      gdp: [],
      inflation: [],
      unemployment: [],
    },
  },
};

export const WithoutEconomicData: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: "North America",
      area: 9833520,
      capital: ["Washington, D.C."],
      timezones: ["UTC-10:00", "UTC-09:00", "UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00"],
      languages: {
        eng: "English",
      },
    } as CountryDetail,
    economicData: {
      gdp: [],
      inflation: [],
      unemployment: [],
    },
  },
};

export const SmallCountry: Story = {
  args: {
    country: {
      ...mockCountries[0],
      cca3: "LUX",
      name: {
        ...mockCountries[0].name,
        common: "Luxembourg",
        official: "Grand Duchy of Luxembourg",
      },
      subregion: "Western Europe",
      area: 2586,
      capital: ["Luxembourg"],
      timezones: ["UTC+01:00"],
      languages: {
        ltz: "Luxembourgish",
        deu: "German",
        fra: "French",
      },
    } as CountryDetail,
    economicData: {
      gdp: generateGDPData("LUX", 80000000000),
      inflation: generateInflationData(
        "LUX",
        [0.1, 0.0, 0.5, 1.0, 0.8, 0.2, 0.3, 6.3, 2.3, 0.9]
      ),
      unemployment: generateUnemploymentData("LUX", 5.5),
    },
  },
};

export const LargeCountry: Story = {
  args: {
    country: {
      ...mockCountries[0],
      cca3: "RUS",
      name: {
        ...mockCountries[0].name,
        common: "Russia",
        official: "Russian Federation",
      },
      subregion: "Northern Asia",
      area: 17098242,
      capital: ["Moscow"],
      timezones: [
        "UTC+02:00",
        "UTC+03:00",
        "UTC+04:00",
        "UTC+05:00",
        "UTC+06:00",
        "UTC+07:00",
        "UTC+08:00",
        "UTC+09:00",
        "UTC+10:00",
        "UTC+11:00",
        "UTC+12:00",
      ],
      languages: {
        rus: "Russian",
      },
    } as CountryDetail,
    economicData: {
      gdp: generateGDPData("RUS", 2000000000000),
      inflation: generateInflationData(
        "RUS",
        [12.9, 5.4, 2.5, 4.3, 3.0, 2.9, 3.4, 4.9, 11.9, 5.8]
      ),
      unemployment: generateUnemploymentData("RUS", 4.8),
    },
  },
};
