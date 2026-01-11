import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import * as stories from "./DataSource.stories";

const { Default, WorldBank, SingleDetail, ManyDetails, LongTitle, LongDescription, LongDetailItems } =
  composeStories(stories);

describe("DataSource", () => {
  const composedStories = {
    Default,
    WorldBank,
    SingleDetail,
    ManyDetails,
    LongTitle,
    LongDescription,
    LongDetailItems,
  };
  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });
});
