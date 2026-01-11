import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import * as stories from "./Feature.stories";

const { Default, EconomicIndicators, UnifiedView, ResponsiveDesign, ShortDescription, LongDescription, LongTitle } =
  composeStories(stories);

describe("Feature", () => {
  const composedStories = {
    Default,
    EconomicIndicators,
    UnifiedView,
    ResponsiveDesign,
    ShortDescription,
    LongDescription,
    LongTitle,
  };
  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });
});
