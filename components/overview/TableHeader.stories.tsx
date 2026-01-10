import type { Meta, StoryObj } from "@storybook/react";

import { TableHeader } from "./TableHeader";

const meta: Meta<typeof TableHeader> = {
  title: "Components/TableHeader",
  component: TableHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    children: "Header",
  },
  render: (args) => (
    <table>
      <thead>
        <tr>
          <TableHeader {...args} />
        </tr>
      </thead>
    </table>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    children: "Custom Header",
    className: "bg-gray-800 text-white",
  },
  render: (args) => (
    <table>
      <thead>
        <tr>
          <TableHeader {...args} />
        </tr>
      </thead>
    </table>
  ),
};

export const MultipleHeaders: Story = {
  render: () => (
    <table>
      <thead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>ISO Code</TableHeader>
          <TableHeader>Region</TableHeader>
        </tr>
      </thead>
    </table>
  ),
};
