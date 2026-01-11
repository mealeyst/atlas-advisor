import { composeStories } from "@storybook/react";
import { render, screen, fireEvent } from "@testing-library/react";
import { createElement } from "react";

import { CountryTable } from ".";
import * as stories from "./CountryTable.stories";

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

const { Empty, WithSingleCountry, WithMultipleCountries, WithNoEconomicData, WithPartialEconomicData } =
  composeStories(stories);

describe(CountryTable, () => {
  const composedStories = {
    Empty,
    WithSingleCountry,
    WithMultipleCountries,
    WithNoEconomicData,
    WithPartialEconomicData,
  };

  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });

  it("handles sorting when header is clicked", () => {
    render(createElement(WithMultipleCountries));
    const header = screen.getByTestId("table-header-gdpValue");
    if (!header) {
      throw new Error("Header element not found");
    }
    fireEvent.click(header);
    expect(header).toHaveAttribute("aria-sort", "descending");
    fireEvent.click(header);
    expect(header).toHaveAttribute("aria-sort", "ascending");
    fireEvent.click(header);
    expect(header).toHaveAttribute("aria-sort", "none");
  });

  it("handles filtering when input is changed", () => {
    render(createElement(WithMultipleCountries));
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });
});
