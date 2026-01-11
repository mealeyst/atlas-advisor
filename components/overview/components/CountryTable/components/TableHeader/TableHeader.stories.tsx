import type { Meta, StoryObj } from "@storybook/react";
import { Column, Header, SortDirection } from "@tanstack/react-table";
import { useState } from "react";

import { TableHeader } from ".";

const meta: Meta<typeof TableHeader> = {
  title: "overview/TableHeader",
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

const SortableHeaderComponent = () => {
  const [sortDirection, setSortDirection] = useState<false | SortDirection>(false);

  const toggleSorting = () => {
    if (sortDirection === false) {
      setSortDirection("asc");
    } else if (sortDirection === "asc") {
      setSortDirection("desc");
    } else {
      setSortDirection(false);
    }
  };

  const mockColumn = {
    getCanSort: () => true,
    getIsSorted: () => sortDirection,
    getToggleSortingHandler: () => (event: React.MouseEvent) => {
      event.preventDefault();
      toggleSorting();
    },
    columnDef: undefined,
    columns: [],
    depth: 0,
    id: "sortable-column",
  } as unknown as Column<unknown, unknown>;

  const mockHeader = {
    column: mockColumn,
    colSpan: 1,
    depth: 0,
    id: "sortable-header",
    index: 0,
    isPlaceholder: false,
    rowSpan: 1,
    subHeaders: [],
  } as unknown as Header<unknown, unknown>;

  return (
    <table>
      <thead>
        <tr>
          <TableHeader header={mockHeader}>Sortable Header</TableHeader>
        </tr>
      </thead>
    </table>
  );
};

export const WithCanSort: Story = {
  render: () => <SortableHeaderComponent />,
};
