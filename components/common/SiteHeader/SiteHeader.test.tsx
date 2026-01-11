import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import { SiteHeader } from ".";
import * as stories from "./SiteHeader.stories";

const { Default } = composeStories(stories);

describe(SiteHeader, () => {
  it("renders correctly", () => {
    render(<Default />);
  });
});
