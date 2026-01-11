"use client";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

import { CountryOverview } from "@/types/Country";
import { EconomicData } from "@/types/Economy";

import { FilterControls } from "./components/FilterControls";
import { TableCell } from "./components/TableCell";
import { TableHeader } from "./components/TableHeader";

export type TableRowData = CountryOverview & {
  gdpValue: number | null;
  inflationValue: number | null;
  unemploymentValue: number | null;
};

export const CountryTable = ({
  countries,
  economicData,
}: {
  countries: CountryOverview[];
  economicData: EconomicData;
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const router = useRouter();

  const columns = useMemo<ColumnDef<TableRowData>[]>(
    () => [
      {
        accessorKey: "name.common",
        header: "Name",
        cell: (info) => {
          const name = info.getValue() as string;
          return name.length > 30 ? `${name.substring(0, 30)}...` : name;
        },
        enableSorting: true,
      },
      {
        accessorKey: "cca3",
        header: "ISO Code",
        enableSorting: true,
      },
      {
        accessorKey: "region",
        header: "Region",
        enableSorting: true,
      },
      {
        accessorKey: "population",
        header: "Population",
        enableSorting: true,
        filterFn: (row, id, value) => {
          const rowValue = row.getValue(id) as number;
          const [min] = (value as [number, number]) ?? [undefined, undefined];
          if (min === undefined) return true;
          return rowValue >= min;
        },
      },
      {
        accessorKey: "gini",
        header: "Gini",
        cell: (info) => {
          const gini = info.getValue() as { [key: string]: number };
          return Object.values(gini)[0] ?? "N/A";
        },
        sortingFn: (rowA, rowB) => {
          const giniA = Object.values(rowA.original.gini)[0] ?? -1;
          const giniB = Object.values(rowB.original.gini)[0] ?? -1;
          return giniA - giniB;
        },
        filterFn: (row, id, value) => {
          const gini = row.original.gini;
          const rowValue = Object.values(gini)[0];
          if (rowValue === undefined) return false;
          const [min] = (value as [number, number]) ?? [undefined, undefined];
          if (min === undefined) return true;
          return rowValue >= min;
        },
        enableSorting: true,
      },
      {
        accessorKey: "currencies",
        header: "Currencies",
        cell: (info) => {
          const currencies = info.getValue() as {
            [key: string]: { name: string; symbol: string };
          };
          return Object.keys(currencies).join(", ");
        },
        sortingFn: (rowA, rowB) => {
          const currenciesA = Object.keys(rowA.original.currencies).join(", ");
          const currenciesB = Object.keys(rowB.original.currencies).join(", ");
          return currenciesA.localeCompare(currenciesB);
        },
        enableSorting: true,
      },
      {
        accessorKey: "gdpValue",
        header: "GDP",
        cell: (info) => {
          const value = info.getValue() as number | null;
          return value ? `$${Math.floor(value * 100) / 100}` : "N/A";
        },
        sortingFn: (rowA, rowB) => {
          const gdpA = rowA.original.gdpValue ?? -1;
          const gdpB = rowB.original.gdpValue ?? -1;
          return gdpA - gdpB;
        },
        filterFn: (row, id, value) => {
          const rowValue = row.getValue(id) as number | null;
          if (rowValue === null) return false;
          const [min] = (value as [number, number]) ?? [undefined, undefined];
          if (min === undefined) return true;
          return rowValue >= min;
        },
        enableSorting: true,
      },
      {
        accessorKey: "inflationValue",
        header: "Inflation",
        cell: (info) => {
          const value = info.getValue() as number | null;
          return value ? `${Math.round(value * 100) / 100}%` : "N/A";
        },
        sortingFn: (rowA, rowB) => {
          const inflationA = rowA.original.inflationValue ?? -1;
          const inflationB = rowB.original.inflationValue ?? -1;
          return inflationA - inflationB;
        },
        filterFn: (row, id, value) => {
          const rowValue = row.getValue(id) as number | null;
          if (rowValue === null) return false;
          const [min] = (value as [number, number]) ?? [undefined, undefined];
          if (min === undefined) return true;
          return rowValue >= min;
        },
        enableSorting: true,
      },
      {
        accessorKey: "unemploymentValue",
        header: "Unemployment",
        cell: (info) => {
          const value = info.getValue() as number | null;
          return value ? `${Math.round(value * 100) / 100}%` : "N/A";
        },
        sortingFn: (rowA, rowB) => {
          const unemploymentA = rowA.original.unemploymentValue ?? -1;
          const unemploymentB = rowB.original.unemploymentValue ?? -1;
          return unemploymentA - unemploymentB;
        },
        filterFn: (row, id, value) => {
          const rowValue = row.getValue(id) as number | null;
          if (rowValue === null) return false;
          const [min] = (value as [number, number]) ?? [undefined, undefined];
          if (min === undefined) return true;
          return rowValue >= min;
        },
        enableSorting: true,
      },
    ],
    []
  );

  const tableData = useMemo<TableRowData[]>(() => {
    return countries.map((country) => {
      const gdp = economicData.gdp.find((data) => data.countryiso3code === country.cca3)?.value;
      const inflation = economicData.inflation.find((data) => data.countryiso3code === country.cca3)?.value;
      const unemployment = economicData.unemployment.find((data) => data.countryiso3code === country.cca3)?.value;

      return {
        ...country,
        gdpValue: gdp ?? null,
        inflationValue: inflation ?? null,
        unemploymentValue: unemployment ?? null,
      };
    });
  }, [countries, economicData]);
  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const searchValue = String(filterValue).toLowerCase();
      const name = row.original.name.common.toLowerCase();
      const isoCode = row.original.cca3.toLowerCase();
      const currencies = Object.keys(row.original.currencies).join(" ").toLowerCase();

      return name.includes(searchValue) || isoCode.includes(searchValue) || currencies.includes(searchValue);
    },
  });

  // Get unique regions for filter dropdown
  const uniqueRegions = useMemo(() => {
    const regions = new Set(countries.map((c) => c.region).filter(Boolean));
    return Array.from(regions).sort();
  }, [countries]);

  return (
    <div className="w-full max-w-full overflow-auto">
      <FilterControls
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
        uniqueRegions={uniqueRegions}
        table={table}
        tableData={tableData}
      />
      <div className="w-full max-h-dvh max-w-full overflow-auto">
        <table className="max-w-full overflow-auto divide-y divide-gray-200 [&_th]:first:rounded-tl-lg [&_th]:last:rounded-tr-lg [&_tr]:last[&_td]:first:rounded-bl-lg [&_tr]:last:[&_td]:first:rounded-bl-lg [&_tr]:last:[&_td]:last:rounded-br-lg">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeader key={header.id} header={header}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHeader>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                onClick={() => router.push(`/${row.original.cca2}`)}
                className="group hover:bg-gray-100 hover:cursor-pointer transition-all duration-300"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
