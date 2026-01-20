import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import * as stories from "./PageHeader.stories";

const { Default } = composeStories(stories);

describe("PageHeader", () => {
  it("renders the PageHeader component", () => {
    const { container } = render(createElement(Default));
    expect(container).toMatchSnapshot();
  });
});