import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import * as stories from "./Overview.stories";

const { Default } = composeStories(stories);

describe("Overview", () => {
  it("renders the Overview component", () => {
    const { container } = render(createElement(Default));
    expect(container).toMatchSnapshot();
  });
});