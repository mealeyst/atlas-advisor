import {
  ChartPieSliceIcon,
  GlobeHemisphereWestIcon,
  RulerIcon,
  StarIcon,
  CurrencyCircleDollarIcon,
  ChartLineIcon,
  BriefcaseIcon,
} from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";

import { DataPoint } from ".";

const meta: Meta<typeof DataPoint> = {
  title: "detail/DataPoint",
  component: DataPoint,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataPoint>;

export const Default: Story = {
  args: {
    icon: <GlobeHemisphereWestIcon className="w-4 h-4" />,
    label: "Region",
    value: "North America • Northern America",
  },
};

export const WithoutIcon: Story = {
  args: {
    label: "Population",
    value: "331,000,000",
  },
};

export const WithArea: Story = {
  args: {
    icon: <RulerIcon className="w-4 h-4" />,
    label: "Area",
    value: "9,833,520 km²",
  },
};

export const WithCapital: Story = {
  args: {
    icon: <StarIcon className="w-4 h-4" />,
    label: "Capital",
    value: "Washington, D.C.",
  },
};

export const WithGiniIndex: Story = {
  args: {
    icon: <ChartPieSliceIcon className="w-4 h-4" />,
    label: "Gini Index",
    value: "41.5",
  },
};

export const WithGDP: Story = {
  args: {
    icon: <CurrencyCircleDollarIcon className="w-4 h-4" />,
    label: "GDP",
    value: "$25,500,000,000,000",
  },
};

export const WithInflationRate: Story = {
  args: {
    icon: <ChartLineIcon className="w-4 h-4" />,
    label: "Inflation Rate",
    value: "3.2%",
  },
};

export const WithUnemploymentRate: Story = {
  args: {
    icon: <BriefcaseIcon className="w-4 h-4" />,
    label: "Unemployment Rate",
    value: "5.0%",
  },
};

export const WithLongValue: Story = {
  args: {
    icon: <GlobeHemisphereWestIcon className="w-4 h-4" />,
    label: "Description",
    value:
      "This is a very long value that demonstrates how the component handles text wrapping and overflow scenarios",
  },
};

export const WithNumericValue: Story = {
  args: {
    icon: <ChartPieSliceIcon className="w-4 h-4" />,
    label: "Score",
    value: 95,
  },
};
