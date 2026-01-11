import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import { DataPoint } from ".";
import * as stories from "./DataPoint.stories";

const { Default, WithoutIcon, WithGDP, WithInflationRate, WithNumericValue } =
  composeStories(stories);

describe(DataPoint, () => {
  const composedStories = {
    Default,
    WithoutIcon,
    WithGDP,
    WithInflationRate,
    WithNumericValue,
  };

  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });
});
