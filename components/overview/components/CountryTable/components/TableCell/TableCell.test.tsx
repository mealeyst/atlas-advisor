import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import { TableCell } from ".";
import * as stories from "./TableCell.stories";

const { Default, WithCustomClassName, WithLongContent } = composeStories(stories);

describe(TableCell, () => {
  const composedStories = {
    Default,
    WithCustomClassName,
    WithLongContent,
  };
  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });
});
