import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { mockCountries, mockEconomicData } from "./__tests__/__fixtures__/mockData";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Empty: Story = {
  args: {
    countries: [],
    economicData: mockEconomicData,
  },
};

export const WithSingleCountry: Story = {
  args: {
    countries: [mockCountries[0]],
    economicData: mockEconomicData,
  },
};

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
