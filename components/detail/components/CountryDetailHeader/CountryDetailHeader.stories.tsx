import type { Meta, StoryObj } from "@storybook/react";

import { CountryDetail } from "@/types/Country";

import { CountryDetailHeader } from ".";
import { mockCountries } from "../../../__fixtures__/mockData";

const meta: Meta<typeof CountryDetailHeader> = {
  title: "detail/CountryDetailHeader",
  component: CountryDetailHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountryDetailHeader>;

export const Default: Story = {
  args: {
    country: mockCountries[0] as CountryDetail,
  },
};

export const WithLongName: Story = {
  args: {
    country: mockCountries[2] as CountryDetail,
  },
};

export const WithoutFlag: Story = {
  args: {
    country: {
      ...mockCountries[0],
      flags: undefined,
    } as unknown as CountryDetail,
  },
};

export const WithoutFlagAlt: Story = {
  args: {
    country: {
      ...mockCountries[0],
      flags: {
        ...mockCountries[0].flags,
        alt: undefined,
      },
    } as unknown as CountryDetail,
  },
};

export const Canada: Story = {
  args: {
    country: mockCountries[1] as CountryDetail,
  },
};

export const ShortName: Story = {
  args: {
    country: {
      ...mockCountries[0],
      name: {
        ...mockCountries[0].name,
        common: "USA",
        official: "United States of America",
      },
    } as CountryDetail,
  },
};

export const LongOfficialName: Story = {
  args: {
    country: {
      ...mockCountries[0],
      name: {
        ...mockCountries[0].name,
        common: "United States",
        official: "The United States of America - A Very Long Official Name That Should Display Properly",
      },
    } as CountryDetail,
  },
};
