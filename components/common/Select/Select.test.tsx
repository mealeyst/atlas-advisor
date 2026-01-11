import { composeStories } from "@storybook/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { createElement } from "react";

import { Select } from ".";
import * as stories from "./Select.stories";

const { Default, WithManyOptions, WithFewOptions, LongLabel, LongOptionText } = composeStories(stories);

describe(Select, () => {
  const composedStories = {
    Default,
    WithManyOptions,
    WithFewOptions,
    LongLabel,
    LongOptionText,
  };

  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });
  it("fires onChange event when option is selected", () => {
    const onChange = jest.fn();
    render(<Default onChange={onChange} data-testid="test-select" />);
    fireEvent.change(screen.getByTestId("test-select"), { target: { value: "Africa" } });
    expect(onChange).toHaveBeenCalledWith("Africa");
  });
});
