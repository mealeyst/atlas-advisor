import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Select } from ".";

const meta: Meta<typeof Select> = {
  title: "common/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Region",
    value: "All",
    onChange: () => {},
    options: ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"],
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <Select
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            args.onChange(newValue);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const WithManyOptions: Story = {
  args: {
    label: "Country",
    value: "United States",
    onChange: () => {},
    options: [
      "United States",
      "Canada",
      "Mexico",
      "Brazil",
      "Argentina",
      "Chile",
      "United Kingdom",
      "France",
      "Germany",
      "Italy",
      "Spain",
      "Japan",
      "China",
      "India",
      "Australia",
    ],
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <Select
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            args.onChange(newValue);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const WithFewOptions: Story = {
  args: {
    label: "Status",
    value: "Active",
    onChange: () => {},
    options: ["Active", "Inactive"],
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <Select
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            args.onChange(newValue);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const LongLabel: Story = {
  args: {
    label: "Select a region to filter countries",
    value: "All",
    onChange: () => {},
    options: ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"],
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <Select
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            args.onChange(newValue);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const LongOptionText: Story = {
  args: {
    label: "Category",
    value: "Very Long Option Name That Might Wrap",
    onChange: () => {},
    options: ["Very Long Option Name That Might Wrap", "Another Extremely Long Option Name", "Short"],
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <Select
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            args.onChange(newValue);
          }}
        />
      );
    };
    return <Component />;
  },
};
