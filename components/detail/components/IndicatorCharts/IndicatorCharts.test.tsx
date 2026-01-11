import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import { IndicatorCharts } from ".";
import * as stories from "./IndicatorCharts.stories";

const {
  AllCharts,
  WithNegativeInflation,
  OnlyGDP,
  OnlyInflation,
  OnlyUnemployment,
} = composeStories(stories);

describe(IndicatorCharts, () => {
  const composedStories = {
    AllCharts,
    WithNegativeInflation,
    OnlyGDP,
    OnlyInflation,
    OnlyUnemployment,
  };

  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });
});
