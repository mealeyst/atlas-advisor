import type { Meta, StoryObj } from "@storybook/react";

import { CountryTable } from ".";
import {
  mockCountries,
  mockEconomicData,
} from "../../../__fixtures__/mockData";

const meta: Meta<typeof CountryTable> = {
  title: "overview/CountryTable",
  component: CountryTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountryTable>;

export const WithMultipleCountries: Story = {
  args: {
    countries: mockCountries,
    economicData: mockEconomicData,
  },
};

export const WithPartialEconomicData: Story = {
  args: {
    countries: mockCountries,
    economicData: {
      gdp: mockEconomicData.gdp,
      inflation: [],
      unemployment: [],
    },
  },
};

export const WithNoEconomicData: Story = {
  args: {
    countries: mockCountries,
    economicData: {
      gdp: [],
      inflation: [],
      unemployment: [],
    },
  },
};

export const WithSingleCountry: Story = {
  args: {
    countries: [mockCountries[0]],
    economicData: mockEconomicData,
  },
};

export const Empty: Story = {
  args: {
    countries: [],
    economicData: mockEconomicData,
  },
};
