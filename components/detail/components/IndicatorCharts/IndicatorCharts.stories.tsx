import type { Meta, StoryObj } from "@storybook/react";

import { IndicatorCharts } from ".";
import {
  generateGDPData,
  generateInflationData,
  generateUnemploymentData,
} from "../../../__fixtures__/mockData";

const meta: Meta<typeof IndicatorCharts> = {
  title: "detail/EconomicCharts",
  component: IndicatorCharts,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IndicatorCharts>;

export const AllCharts: Story = {
  args: {
    gdp: generateGDPData("USA", 18000000000000),
    inflation: generateInflationData(
      "USA",
      [0.1, 1.3, 2.1, 2.4, 1.8, 0.6, 1.2, 4.7, 8.0, 3.2]
    ),
    unemployment: generateUnemploymentData("USA", 5.0),
  },
};

export const WithNegativeInflation: Story = {
  args: {
    gdp: generateGDPData("POL", 500000000000),
    inflation: generateInflationData(
      "POL",
      [-0.5, -0.2, 2.0, 1.8, 2.2, 3.4, 5.2, 14.5, 11.5, 3.8]
    ),
    unemployment: generateUnemploymentData("POL", 6.5),
  },
};

export const OnlyGDP: Story = {
  args: {
    gdp: generateGDPData("USA", 18000000000000),
    inflation: [],
    unemployment: [],
  },
};

export const OnlyInflation: Story = {
  args: {
    gdp: [],
    inflation: generateInflationData(
      "USA",
      [0.1, 1.3, 2.1, 2.4, 1.8, 0.6, 1.2, 4.7, 8.0, 3.2]
    ),
    unemployment: [],
  },
};

export const OnlyUnemployment: Story = {
  args: {
    gdp: [],
    inflation: [],
    unemployment: generateUnemploymentData("USA", 5.0),
  },
};

export const GDPAndInflation: Story = {
  args: {
    gdp: generateGDPData("USA", 18000000000000),
    inflation: generateInflationData(
      "USA",
      [0.1, 1.3, 2.1, 2.4, 1.8, 0.6, 1.2, 4.7, 8.0, 3.2]
    ),
    unemployment: [],
  },
};

export const NoData: Story = {
  args: {
    gdp: [],
    inflation: [],
    unemployment: [],
  },
};

export const HighValues: Story = {
  args: {
    gdp: generateGDPData("CHN", 12000000000000),
    inflation: generateInflationData(
      "CHN",
      [1.4, 2.0, 1.6, 2.1, 2.9, 2.4, 0.2, 0.9, 2.0, 0.7]
    ),
    unemployment: generateUnemploymentData("CHN", 4.5),
  },
};

export const SmallValues: Story = {
  args: {
    gdp: generateGDPData("LUX", 80000000000),
    inflation: generateInflationData(
      "LUX",
      [0.1, 0.0, 0.5, 1.0, 0.8, 0.2, 0.3, 6.3, 2.3, 0.9]
    ),
    unemployment: generateUnemploymentData("LUX", 5.5),
  },
};
