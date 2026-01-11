import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import * as stories from "./TechnologyStack.stories";

const { Default, WithoutLibraries, CustomTitle, ManyTechnologies, SingleTechnology, WithLongVersionNames } =
  composeStories(stories);

describe("TechnologyStack", () => {
  const composedStories = {
    Default,
    WithoutLibraries,
    CustomTitle,
    ManyTechnologies,
    SingleTechnology,
    WithLongVersionNames,
  };
  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });
});
