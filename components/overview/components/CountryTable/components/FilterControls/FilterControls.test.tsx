import { composeStories } from "@storybook/react";
import type { ColumnFiltersState } from "@tanstack/react-table";
import { fireEvent, render, screen } from "@testing-library/react";
import { createElement } from "react";

import { mockCountries, mockEconomicData } from "@/components/__fixtures__/mockData";

import { FilterControls } from ".";
import * as stories from "./FilterControls.stories";
import type { TableRowData } from "../..";

const { Default } = composeStories(stories);

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

describe(FilterControls, () => {
  it("matches Default story snapshot", () => {
    const { container } = render(createElement(Default));
    expect(container).toMatchSnapshot();
  });

  describe("onChange events", () => {
    const setupTest = () => {
      const setGlobalFilter = jest.fn();
      const setColumnFilters = jest.fn();
      const columnFilters: ColumnFiltersState = [];
      const uniqueRegions = Array.from(new Set(mockCountries.map((c) => c.region).filter(Boolean))).sort();
      const tableData = createTableData();
      const table = createMockTable(columnFilters, setColumnFilters, tableData.length) as Parameters<
        typeof FilterControls
      >[0]["table"];

      render(
        <FilterControls
          globalFilter=""
          setGlobalFilter={setGlobalFilter}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
          uniqueRegions={uniqueRegions}
          table={table}
          tableData={tableData}
        />
      );

      return { setGlobalFilter, setColumnFilters };
    };

    it.each([
      {
        description: "search input",
        getElement: () => screen.getByTestId("search-input"),
        inputValue: "United States",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        assertion: (setGlobalFilter: jest.Mock, setColumnFilters: jest.Mock) => {
          expect(setGlobalFilter).toHaveBeenCalledWith("United States");
        },
      },
      {
        description: "population input",
        getElement: () => screen.getByTestId("population-input"),
        inputValue: "1000000",
        assertion: (setGlobalFilter: jest.Mock, setColumnFilters: jest.Mock) => {
          expect(setColumnFilters).toHaveBeenCalled();
          const lastCall = setColumnFilters.mock.calls[setColumnFilters.mock.calls.length - 1];
          expect(lastCall[0]).toEqual([{ id: "population", value: [1000000, undefined] }]);
        },
      },
      {
        description: "GDP input",
        getElement: () => screen.getByTestId("gdp-input"),
        inputValue: "5000000",
        assertion: (setGlobalFilter: jest.Mock, setColumnFilters: jest.Mock) => {
          expect(setColumnFilters).toHaveBeenCalled();
          const lastCall = setColumnFilters.mock.calls[setColumnFilters.mock.calls.length - 1];
          expect(lastCall[0]).toEqual([{ id: "gdpValue", value: [5000000, undefined] }]);
        },
      },
      {
        description: "inflation input",
        getElement: () => screen.getByTestId("inflation-input"),
        inputValue: "5.5",
        assertion: (setGlobalFilter: jest.Mock, setColumnFilters: jest.Mock) => {
          expect(setColumnFilters).toHaveBeenCalled();
          const lastCall = setColumnFilters.mock.calls[setColumnFilters.mock.calls.length - 1];
          expect(lastCall[0]).toEqual([{ id: "inflationValue", value: [5.5, undefined] }]);
        },
      },
      {
        description: "unemployment input",
        getElement: () => screen.getByLabelText("Unemployment (min %)"),
        inputValue: "3.0",
        assertion: (setGlobalFilter: jest.Mock, setColumnFilters: jest.Mock) => {
          expect(setColumnFilters).toHaveBeenCalled();
          const lastCall = setColumnFilters.mock.calls[setColumnFilters.mock.calls.length - 1];
          expect(lastCall[0]).toEqual([{ id: "unemploymentValue", value: [3.0, undefined] }]);
        },
      },
      {
        description: "Gini input",
        getElement: () => screen.getByTestId("gini-input"),
        inputValue: "40.0",
        assertion: (setGlobalFilter: jest.Mock, setColumnFilters: jest.Mock) => {
          expect(setColumnFilters).toHaveBeenCalled();
          const lastCall = setColumnFilters.mock.calls[setColumnFilters.mock.calls.length - 1];
          expect(lastCall[0]).toEqual([{ id: "gini", value: [40.0, undefined] }]);
        },
      },
      {
        description: "region select",
        getElement: () => screen.getByTestId("region-select"),
        inputValue: "Americas",
        assertion: (setGlobalFilter: jest.Mock, setColumnFilters: jest.Mock) => {
          expect(setColumnFilters).toHaveBeenCalled();
          const lastCall = setColumnFilters.mock.calls[setColumnFilters.mock.calls.length - 1];
          expect(lastCall[0]).toEqual([{ id: "region", value: "Americas" }]);
        },
      },
    ])("fires onChange event for $description when user interacts", ({ getElement, inputValue, assertion }) => {
      const { setGlobalFilter, setColumnFilters } = setupTest();
      const element = getElement();
      fireEvent.change(element, { target: { value: inputValue } });
      assertion(setGlobalFilter, setColumnFilters);
    });

    it("clears filters when clear button is clicked", () => {
      const setGlobalFilter = jest.fn();
      const setColumnFilters = jest.fn();
      const columnFilters: ColumnFiltersState = [{ id: "population", value: [1000000, undefined] }];
      const uniqueRegions = Array.from(new Set(mockCountries.map((c) => c.region).filter(Boolean))).sort();
      const tableData = createTableData();
      const table = createMockTable(columnFilters, setColumnFilters, tableData.length) as Parameters<
        typeof FilterControls
      >[0]["table"];

      render(
        <FilterControls
          globalFilter=""
          setGlobalFilter={setGlobalFilter}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
          uniqueRegions={uniqueRegions}
          table={table}
          tableData={tableData}
        />
      );

      const clearButton = screen.getByText("Clear Filters");
      fireEvent.click(clearButton);
      expect(setGlobalFilter).toHaveBeenCalledWith("");
      expect(setColumnFilters).toHaveBeenCalledWith([]);
    });
  });
});
