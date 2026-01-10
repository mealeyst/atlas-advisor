"use client";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

import { CountryOverview } from "@/types/Country";
import { EconomicData } from "@/types/Economy";

import { TableCell } from "./TableCell";
import { TableHeader } from "./TableHeader";

type TableRowData = CountryOverview & {
  gdpValue: number | null;
  inflationValue: number | null;
  unemploymentValue: number | null;
};

const columns: ColumnDef<TableRowData>[] = [
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
    enableSorting: true,
  },
];

export const Table = ({
  countries,
  economicData,
}: {
  countries: CountryOverview[];
  economicData: EconomicData;
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const router = useRouter();

  // Transform data to include economic values for sorting
  const tableData = useMemo<TableRowData[]>(() => {
    return countries.map((country) => {
      const gdp = economicData.gdp.find(
        (data) => data.countryiso3code === country.cca3
      )?.value;
      const inflation = economicData.inflation.find(
        (data) => data.countryiso3code === country.cca3
      )?.value;
      const unemployment = economicData.unemployment.find(
        (data) => data.countryiso3code === country.cca3
      )?.value;

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
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:shadow-md before:z-[-1]">
      <div className=" w-full max-w-full max-h-[calc(100vh-84px)] overflow-auto">
        <table className="min-w-full divide-y divide-gray-200 [&_th]:first:rounded-tl-lg [&_th]:last:rounded-tr-lg [&_tr]:last[&_td]:first:rounded-bl-lg [&_tr]:last:[&_td]:first:rounded-bl-lg [&_tr]:last:[&_td]:last:rounded-br-lg">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <TableHeader
                    key={header.id}
                    className={
                      index === 0
                        ? "max-w-[200px] truncate"
                        : index === 1
                        ? "sticky top-0 left-0 z-30 shadow-[2px_0_4px_rgba(0,0,0,0.1)]"
                        : ""
                    }
                    header={header}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
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
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={cell.id}
                    className={
                      index === 0
                        ? "max-w-[200px] truncate"
                        : index === 1
                        ? "sticky left-0 z-10 bg-white group-hover:bg-gray-100 transition-all duration-300 shadow-[2px_0_4px_rgba(0,0,0,0.1)]"
                        : ""
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
