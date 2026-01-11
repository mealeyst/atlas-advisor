import type { Meta, StoryObj } from "@storybook/react";
import type { ColumnFiltersState } from "@tanstack/react-table";
import { useState } from "react";

import { mockCountries, mockEconomicData } from "@/components/__fixtures__/mockData";

import { FilterControls } from ".";
import type { TableRowData } from "../..";

const meta: Meta<typeof FilterControls> = {
  title: "overview/FilterControls",
  component: FilterControls,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FilterControls>;

// Helper function to create table data from mock data
const createTableData = (): TableRowData[] => {
  return mockCountries.map((country) => {
    const gdp = mockEconomicData.gdp.find((data) => data.countryiso3code === country.cca3)?.value;
    const inflation = mockEconomicData.inflation.find((data) => data.countryiso3code === country.cca3)?.value;
    const unemployment = mockEconomicData.unemployment.find((data) => data.countryiso3code === country.cca3)?.value;

    return {
      ...country,
      gdpValue: gdp ?? null,
      inflationValue: inflation ?? null,
      unemploymentValue: unemployment ?? null,
    };
  });
};

// Mock table object that provides only the methods FilterControls needs
const createMockTable = (
  columnFilters: ColumnFiltersState,
  setColumnFilters: (filters: ColumnFiltersState) => void,
  filteredRowCount: number
) => {
  const getColumnFilterValue = (columnId: string) => {
    const filter = columnFilters.find((f) => f.id === columnId);
    return filter?.value;
  };

  const setColumnFilterValue = (columnId: string, value: unknown) => {
    const newFilters = columnFilters.filter((f) => f.id !== columnId);
    if (value !== undefined && value !== null && value !== "") {
      newFilters.push({ id: columnId, value });
    }
    setColumnFilters(newFilters);
  };

  return {
    getColumn: (columnId: string) => ({
      getFilterValue: () => getColumnFilterValue(columnId),
      setFilterValue: (value: unknown) => setColumnFilterValue(columnId, value),
    }),
    getFilteredRowModel: () => ({
      rows: Array(filteredRowCount)
        .fill(null)
        .map((_, i) => ({ id: `row-${i}` })),
    }),
  };
};

export const Default: Story = {
  render: () => {
    const Component = () => {
      const [globalFilter, setGlobalFilter] = useState("");
      const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
      const uniqueRegions = Array.from(new Set(mockCountries.map((c) => c.region).filter(Boolean))).sort();
      const tableData = createTableData();
      const table = createMockTable(columnFilters, setColumnFilters, tableData.length) as Parameters<
        typeof FilterControls
      >[0]["table"];

      return (
        <FilterControls
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
          uniqueRegions={uniqueRegions}
          table={table}
          tableData={tableData}
        />
      );
    };
    return <Component />;
  },
};
