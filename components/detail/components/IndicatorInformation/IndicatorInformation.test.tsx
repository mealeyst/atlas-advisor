import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import { IndicatorInformation } from ".";
import * as stories from "./IndicatorInformation.stories";

const { AllIndicators, OnlyGDP, OnlyInflation, OnlyUnemployment } =
  composeStories(stories);

describe(IndicatorInformation, () => {
  const composedStories = {
    AllIndicators,
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
