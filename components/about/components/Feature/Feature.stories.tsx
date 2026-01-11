import type { Meta, StoryObj } from "@storybook/react";

import { Feature } from ".";

const meta: Meta<typeof Feature> = {
  title: "about/Feature",
  component: Feature,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Feature>;

export const Default: Story = {
  args: {
    title: "Comprehensive Country Data",
    description: "View detailed information for all countries in a single, searchable table",
  },
};

export const EconomicIndicators: Story = {
  args: {
    title: "Economic Indicators",
    description: "Access real-time GDP, inflation, and unemployment data from the World Bank",
  },
};

export const UnifiedView: Story = {
  args: {
    title: "Unified View",
    description: "See country demographics and economic metrics side-by-side for easy comparison",
  },
};

export const ResponsiveDesign: Story = {
  args: {
    title: "Responsive Design",
    description: "Clean, modern interface built with Next.js and Tailwind CSS",
  },
};

export const ShortDescription: Story = {
  args: {
    title: "Quick Access",
    description: "Fast and easy",
  },
};

export const LongDescription: Story = {
  args: {
    title: "Advanced Analytics",
    description: "Our platform provides comprehensive market analysis tools that enable businesses to identify trends, compare economic indicators across multiple countries, and make data-driven decisions about international expansion opportunities with confidence.",
  },
};

export const LongTitle: Story = {
  args: {
    title: "Comprehensive International Market Opportunity Identification and Analysis",
    description: "View detailed information for all countries in a single, searchable table",
  },
};
