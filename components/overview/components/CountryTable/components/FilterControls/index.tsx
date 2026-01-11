import { ColumnFiltersState, Table } from "@tanstack/react-table";

import { Select } from "@/components/common/Select";
import { TextInput } from "@/components/common/TextInput";

import { TableRowData } from "../..";

export const FilterControls = ({
  globalFilter,
  setGlobalFilter,
  columnFilters,
  setColumnFilters,
  uniqueRegions,
  table,
  tableData,
}: {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  columnFilters: ColumnFiltersState;
  setColumnFilters: (value: ColumnFiltersState) => void;
  uniqueRegions: string[];
  table: Table<TableRowData>;
  tableData: TableRowData[];
}) => {
  return (
    <div className="bg-gray-50 p-4 border-b border-gray-200 space-y-4 mb-6 rounded-lg">
      <div className="flex flex-col sm:flex-row gap-4">
        <TextInput
          wrapperClassName="flex-1"
          label="Search"
          value={globalFilter ?? ""}
          type="text"
          data-testid="search-input"
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search by name, ISO code, or currency..."
        />
        <Select
          label="Region"
          value={(table.getColumn("region")?.getFilterValue() as string) ?? ""}
          data-testid="region-select"
          onChange={(value) => {
            const column = table.getColumn("region");
            column?.setFilterValue(value || undefined);
          }}
          options={uniqueRegions}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <TextInput
          label="Population (min)"
          type="number"
          data-testid="population-input"
          value={(table.getColumn("population")?.getFilterValue() as [number, number])?.[0] ?? ""}
          placeholder="Min"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const column = table.getColumn("population");
            const currentFilter = (column?.getFilterValue() as [number, number]) ?? [undefined, undefined];
            column?.setFilterValue([e.target.value ? Number(e.target.value) : undefined, currentFilter[1]]);
          }}
        />
        <TextInput
          label="GDP (min)"
          type="number"
          data-testid="gdp-input"
          value={(table.getColumn("gdpValue")?.getFilterValue() as [number, number])?.[0] ?? ""}
          placeholder="Min"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const column = table.getColumn("gdpValue");
            const currentFilter = (column?.getFilterValue() as [number, number]) ?? [undefined, undefined];
            column?.setFilterValue([e.target.value ? Number(e.target.value) : undefined, currentFilter[1]]);
          }}
        />
        <TextInput
          label="Inflation (min %)"
          type="number"
          data-testid="inflation-input"
          value={(table.getColumn("inflationValue")?.getFilterValue() as [number, number])?.[0] ?? ""}
          placeholder="Min"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const column = table.getColumn("inflationValue");
            const currentFilter = (column?.getFilterValue() as [number, number]) ?? [undefined, undefined];
            column?.setFilterValue([e.target.value ? Number(e.target.value) : undefined, currentFilter[1]]);
          }}
        />
        <TextInput
          label="Unemployment (min %)"
          type="number"
          value={(table.getColumn("unemploymentValue")?.getFilterValue() as [number, number])?.[0] ?? ""}
          placeholder="Min"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const column = table.getColumn("unemploymentValue");
            const currentFilter = (column?.getFilterValue() as [number, number]) ?? [undefined, undefined];
            column?.setFilterValue([e.target.value ? Number(e.target.value) : undefined, currentFilter[1]]);
          }}
        />
        <TextInput
          label="Gini (min)"
          type="number"
          data-testid="gini-input"
          value={(table.getColumn("gini")?.getFilterValue() as [number, number])?.[0] ?? ""}
          placeholder="Min"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const column = table.getColumn("gini");
            const currentFilter = (column?.getFilterValue() as [number, number]) ?? [undefined, undefined];
            column?.setFilterValue([e.target.value ? Number(e.target.value) : undefined, currentFilter[1]]);
          }}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {table.getFilteredRowModel().rows.length} of {tableData.length} countries
        </div>
        {(columnFilters.length > 0 || globalFilter) && (
          <button
            onClick={() => {
              setColumnFilters([]);
              setGlobalFilter("");
            }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};
