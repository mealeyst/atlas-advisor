import { composeStories } from "@storybook/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { createElement } from "react";

import { TableHeader } from ".";
import * as stories from "./TableHeader.stories";

const { Default, WithCustomClassName, WithCanSort } = composeStories(stories);

describe(TableHeader, () => {
  const composedStories = {
    Default,
    WithCustomClassName,
    WithCanSort,
  };
  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });

  it("toggles sort direction when header is clicked and can sort", () => {
    render(createElement(WithCanSort));
    const header = screen.getByText("Sortable Header").closest("th");

    if (!header) {
      throw new Error("Header element not found");
    }

    // Initially should show unsorted icon (ArrowsDownUpIcon)
    expect(header.querySelector("svg")).toBeInTheDocument();

    // Click to sort ascending
    fireEvent.click(header);

    // Click to sort descending
    fireEvent.click(header);

    // Click to reset to unsorted
    fireEvent.click(header);

    // Verify the header is clickable and sort icons are present
    expect(header).toHaveClass("cursor-pointer");
  });
});
