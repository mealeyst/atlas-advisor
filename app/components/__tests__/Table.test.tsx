import { render, screen } from "@testing-library/react";
import { Table } from "../Table";
import { Country } from "../../page";
import { mockCountries, mockEconomicData } from "./__fixtures__/mockData";

describe("Table", () => {
  it("renders all table headers", () => {
    render(<Table countries={[]} economicData={mockEconomicData} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("ISO Code")).toBeInTheDocument();
    expect(screen.getByText("Region")).toBeInTheDocument();
    expect(screen.getByText("Population")).toBeInTheDocument();
    expect(screen.getByText("Gini")).toBeInTheDocument();
    expect(screen.getByText("Currencies")).toBeInTheDocument();
    expect(screen.getByText("GDP")).toBeInTheDocument();
    expect(screen.getByText("Inflation")).toBeInTheDocument();
    expect(screen.getByText("Unemployment")).toBeInTheDocument();
  });

  it("renders country data correctly", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("USA")).toBeInTheDocument();
    // Multiple countries have "Americas" region, so use getAllByText
    expect(screen.getAllByText("Americas").length).toBeGreaterThan(0);
    expect(screen.getByText("329484123")).toBeInTheDocument();
    expect(screen.getByText("41.4")).toBeInTheDocument();
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  it("renders multiple countries", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();
    // The long name is truncated, so check for the truncated version
    expect(
      screen.getByText("A Very Long Country Name That ...")
    ).toBeInTheDocument();
  });

  it("truncates long country names", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    const longName = mockCountries[2].name.common;
    expect(longName.length).toBeGreaterThan(30);
    // The component should truncate names longer than 30 characters
    const truncatedName = `${longName.substring(0, 30)}...`;
    expect(screen.getByText(truncatedName)).toBeInTheDocument();
  });

  it("displays GDP values correctly", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    // USA GDP should be formatted as currency
    expect(screen.getByText("$25462700000000")).toBeInTheDocument();
    // Canada GDP should be formatted as currency
    expect(screen.getByText("$2139930000000")).toBeInTheDocument();
  });

  it("displays inflation values correctly", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    // USA inflation should be formatted as percentage
    expect(screen.getByText("8%")).toBeInTheDocument();
    // Canada inflation should be formatted as percentage
    expect(screen.getByText("6.8%")).toBeInTheDocument();
  });

  it("displays unemployment values correctly", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    // USA unemployment should be formatted as percentage
    expect(screen.getByText("3.6%")).toBeInTheDocument();
  });

  it("displays N/A when economic data is missing", () => {
    render(<Table countries={mockCountries} economicData={mockEconomicData} />);

    // Mexico has no GDP data, should show N/A
    const gdpCells = screen.getAllByText("N/A");
    // Mexico has no inflation data, should show N/A
    // Mexico has no unemployment data, should show N/A
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
    const countryWithoutGini: Country = {
      ...mockCountries[0],
      gini: {},
    };

    render(
      <Table countries={[countryWithoutGini]} economicData={mockEconomicData} />
    );

    expect(screen.getByText("United States")).toBeInTheDocument();
    // Should not crash when gini is empty
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

    // Should have one row per country
    const rows = container.querySelectorAll("tbody tr");
    expect(rows).toHaveLength(mockCountries.length);
  });
});
