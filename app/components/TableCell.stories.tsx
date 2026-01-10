import type { Meta, StoryObj } from "@storybook/react";
import { TableCell } from "./TableCell";

const meta: Meta<typeof TableCell> = {
  title: "Components/TableCell",
  component: TableCell,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: "Cell Content",
  },
  render: (args) => (
    <table>
      <tbody>
        <tr>
          <TableCell {...args} />
        </tr>
      </tbody>
    </table>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    children: "Custom Styled Cell",
    className: "bg-blue-100 text-blue-900",
  },
  render: (args) => (
    <table>
      <tbody>
        <tr>
          <TableCell {...args} />
        </tr>
      </tbody>
    </table>
  ),
};

export const WithLongContent: Story = {
  args: {
    children: "This is a very long cell content that might wrap or truncate depending on styling",
  },
  render: (args) => (
    <table>
      <tbody>
        <tr>
          <TableCell {...args} />
        </tr>
      </tbody>
    </table>
  ),
};
