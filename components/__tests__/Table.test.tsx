import { render, screen } from "@testing-library/react";

import { CountryOverview } from "@/types/Country";

import { mockCountries, mockEconomicData } from "../__fixtures__/mockData";
import { Table } from "../overview/Table";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

describe(Table, () => {
  it("renders country data correctly", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("USA")).toBeInTheDocument();

    expect(screen.getAllByText("Americas").length).toBeGreaterThan(0);
    expect(screen.getByText("329484123")).toBeInTheDocument();
    expect(screen.getByText("41.4")).toBeInTheDocument();
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  it("truncates long country names", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    const longName = mockCountries[2].name.common;
    expect(longName.length).toBeGreaterThan(30);

    const truncatedName = `${longName.substring(0, 30)}...`;
    expect(screen.getByText(truncatedName)).toBeInTheDocument();
  });

  it("displays GDP values correctly", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    expect(screen.getByText("$25462700000000")).toBeInTheDocument();
    expect(screen.getByText("$2139930000000")).toBeInTheDocument();
  });

  it("displays inflation values correctly", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    expect(screen.getByText("8%")).toBeInTheDocument();
    expect(screen.getByText("6.8%")).toBeInTheDocument();
  });

  it("displays unemployment values correctly", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    expect(screen.getByText("3.6%")).toBeInTheDocument();
  });

  it("displays N/A when economic data is missing", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    const gdpCells = screen.getAllByText("N/A");
    expect(gdpCells.length).toBeGreaterThan(0);
  });

  it("displays currencies correctly", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    expect(screen.getByText("USD")).toBeInTheDocument();
    expect(screen.getByText("CAD")).toBeInTheDocument();
    expect(screen.getByText("MXN")).toBeInTheDocument();
  });

  it("handles empty countries array", () => {
    render(<Table countries={[]} economicData={mockEconomicData} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    // Should not crash and should render table structure
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  it("handles countries without gini data", () => {
    const countryWithoutGini: CountryOverview = {
      ...mockCountries[0],
      gini: {},
    };

    render(
      <Table countries={[countryWithoutGini]} economicData={mockEconomicData} />
    );

    expect(screen.getByText("United States")).toBeInTheDocument();
  });

  it("renders table with correct structure", () => {
    const { container } = render(
      <Table countries={mockCountries} economicData={mockEconomicData} />
    );

    const table = container.querySelector("table");
    expect(table).toBeInTheDocument();

    const thead = container.querySelector("thead");
    expect(thead).toBeInTheDocument();

    const tbody = container.querySelector("tbody");
    expect(tbody).toBeInTheDocument();

    const rows = container.querySelectorAll("tbody tr");
    expect(rows).toHaveLength(mockCountries.length);
  });
});
