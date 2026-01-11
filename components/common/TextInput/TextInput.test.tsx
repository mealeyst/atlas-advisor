import { composeStories } from "@storybook/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { createElement } from "react";

import { TextInput } from ".";
import * as stories from "./TextInput.stories";

const {
  Default,
  WithPlaceholder,
  WithValue,
  NumberInput,
  EmailInput,
  PasswordInput,
  SearchInput,
  DateInput,
  LongLabel,
  WithCustomClassName,
} = composeStories(stories);

describe(TextInput, () => {
  const composedStories = {
    Default,
    WithPlaceholder,
    WithValue,
    NumberInput,
    EmailInput,
    PasswordInput,
    SearchInput,
    DateInput,
    LongLabel,
    WithCustomClassName,
  };
  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });

  it("fires onChange event when input is changed", () => {
    const onChange = jest.fn();
    render(<Default data-testid="test-input" onChange={onChange} />);
    fireEvent.change(screen.getByTestId("test-input"), { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0].target.value).toBe("test");
  });
});
