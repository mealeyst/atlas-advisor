import type { Meta, StoryObj } from "@storybook/react";

import { DataSource } from ".";

const meta: Meta<typeof DataSource> = {
  title: "about/DataSource",
  component: DataSource,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataSource>;

export const Default: Story = {
  args: {
    title: "REST Countries API",
    description: "Provides comprehensive country information including:",
    details: [
      "Country names and official names",
      "Geographic regions and subregions",
      "Population data",
      "Gini coefficient (income inequality metrics)",
      "Currency information",
      "Flag images",
    ],
    url: "https://restcountries.com/",
  },
};

export const WorldBank: Story = {
  args: {
    title: "World Bank API",
    description: "Supplies economic indicators including:",
    details: [
      "GDP (Gross Domestic Product)",
      "Inflation rate",
      "Unemployment rate",
      "Historical trend data",
      "Comparative analysis metrics",
    ],
    url: "https://datahelpdesk.worldbank.org/knowledgebase/articles/898581",
  },
};

export const SingleDetail: Story = {
  args: {
    title: "Simple Data Source",
    description: "A data source with minimal details:",
    details: ["Single data point"],
    url: "https://example.com",
  },
};

export const ManyDetails: Story = {
  args: {
    title: "Comprehensive Data Source",
    description: "A data source with extensive information:",
    details: [
      "First data point",
      "Second data point",
      "Third data point",
      "Fourth data point",
      "Fifth data point",
      "Sixth data point",
      "Seventh data point",
      "Eighth data point",
      "Ninth data point",
      "Tenth data point",
    ],
    url: "https://example.com",
  },
};

export const LongTitle: Story = {
  args: {
    title: "Very Long Data Source Name That Might Wrap Across Multiple Lines",
    description: "Provides comprehensive information:",
    details: [
      "First detail",
      "Second detail",
      "Third detail",
    ],
    url: "https://example.com",
  },
};

export const LongDescription: Story = {
  args: {
    title: "Data Source",
    description: "This is a very long description that demonstrates how the component handles extended text content. It provides comprehensive information about the data source and its capabilities, including detailed explanations of what kind of data it offers and how it can be used for various analytical purposes.",
    details: [
      "Detail one",
      "Detail two",
      "Detail three",
    ],
    url: "https://example.com",
  },
};

export const LongDetailItems: Story = {
  args: {
    title: "Data Source",
    description: "Provides information including:",
    details: [
      "This is a very long detail item that demonstrates how the component handles extended text content within individual list items",
      "Another long detail item that shows how multiple lengthy descriptions are displayed in the list format",
      "A third lengthy detail that continues to test the component's layout and styling capabilities",
    ],
    url: "https://example.com",
  },
};
