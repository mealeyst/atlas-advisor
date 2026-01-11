import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import { DetailContent } from ".";
import * as stories from "./DetailContent.stories";

const {
  CompleteCountry,
  WithMultipleCurrencies,
  WithMultipleLanguages,
  MinimalData,
  WithoutEconomicData,
  SmallCountry,
  LargeCountry,
} = composeStories(stories);

describe(DetailContent, () => {
  const composedStories = {
    CompleteCountry,
    WithMultipleCurrencies,
    WithMultipleLanguages,
    MinimalData,
    WithoutEconomicData,
    SmallCountry,
    LargeCountry,
  };
  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });
});
