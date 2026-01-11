import type { Meta, StoryObj } from "@storybook/react";

import { CountryDetail } from "@/types/Country";

import { BasicInformation } from ".";
import { mockCountries } from "../../../__fixtures__/mockData";

const meta: Meta<typeof BasicInformation> = {
  title: "detail/BasicInformation",
  component: BasicInformation,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BasicInformation>;

export const AllFields: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: "North America",
      area: 9833520,
      capital: ["Washington, D.C."],
    } as CountryDetail,
  },
};

export const MinimalFields: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: undefined,
      area: undefined,
      capital: undefined,
      gini: {},
    } as CountryDetail,
  },
};

export const MultipleCapitals: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: "Southern Africa",
      area: 1221037,
      capital: ["Cape Town", "Bloemfontein", "Pretoria"],
    } as CountryDetail,
  },
};

export const WithoutSubregion: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: undefined,
      area: 9833520,
      capital: ["Washington, D.C."],
    } as CountryDetail,
  },
};

export const WithoutArea: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: "North America",
      area: undefined,
      capital: ["Washington, D.C."],
    } as CountryDetail,
  },
};

export const WithoutCapital: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: "North America",
      area: 9833520,
      capital: undefined,
    } as CountryDetail,
  },
};

export const LargeArea: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: "Northern Asia",
      area: 17098242,
      capital: ["Moscow"],
    } as CountryDetail,
  },
};

export const SmallArea: Story = {
  args: {
    country: {
      ...mockCountries[0],
      subregion: "Western Europe",
      area: 2.02,
      capital: ["Monaco"],
    } as CountryDetail,
  },
};
