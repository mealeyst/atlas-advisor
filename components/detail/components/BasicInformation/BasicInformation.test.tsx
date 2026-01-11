import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import { BasicInformation } from ".";
import * as stories from "./BasicInformation.stories";

const { AllFields, MinimalFields, MultipleCapitals } = composeStories(stories);

describe(BasicInformation, () => {
  const composedStories = {
    AllFields,
    MinimalFields,
    MultipleCapitals,
  };

  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });
});
