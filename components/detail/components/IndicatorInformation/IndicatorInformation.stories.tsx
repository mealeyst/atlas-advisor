import type { Meta, StoryObj } from "@storybook/react";

import { IndicatorInformation } from ".";

const meta: Meta<typeof IndicatorInformation> = {
  title: "detail/IndicatorInformation",
  component: IndicatorInformation,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IndicatorInformation>;

export const AllIndicators: Story = {
  args: {
    gdp: 18000000000000,
    inflation: 3.2,
    unemployment: 5.0,
  },
};

export const OnlyGDP: Story = {
  args: {
    gdp: 18000000000000,
    inflation: undefined,
    unemployment: undefined,
  },
};

export const OnlyInflation: Story = {
  args: {
    gdp: undefined,
    inflation: 3.2,
    unemployment: undefined,
  },
};

export const OnlyUnemployment: Story = {
  args: {
    gdp: undefined,
    inflation: undefined,
    unemployment: 5.0,
  },
};

export const GDPAndInflation: Story = {
  args: {
    gdp: 18000000000000,
    inflation: 3.2,
    unemployment: undefined,
  },
};

export const GDPAndUnemployment: Story = {
  args: {
    gdp: 18000000000000,
    inflation: undefined,
    unemployment: 5.0,
  },
};

export const InflationAndUnemployment: Story = {
  args: {
    gdp: undefined,
    inflation: 3.2,
    unemployment: 5.0,
  },
};

export const NoData: Story = {
  args: {
    gdp: undefined,
    inflation: undefined,
    unemployment: undefined,
  },
};

export const HighValues: Story = {
  args: {
    gdp: 25000000000000,
    inflation: 8.5,
    unemployment: 12.3,
  },
};

export const SmallValues: Story = {
  args: {
    gdp: 80000000000,
    inflation: 0.5,
    unemployment: 2.1,
  },
};

export const NegativeInflation: Story = {
  args: {
    gdp: 500000000000,
    inflation: -0.5,
    unemployment: 6.5,
  },
};

export const DecimalValues: Story = {
  args: {
    gdp: 1234567890123.45,
    inflation: 2.345,
    unemployment: 4.567,
  },
};

export const ZeroValues: Story = {
  args: {
    gdp: 0,
    inflation: 0,
    unemployment: 0,
  },
};
