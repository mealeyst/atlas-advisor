import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import { Footer } from ".";
import * as stories from "./Footer.stories";

const { Default } = composeStories(stories);

describe(Footer, () => {
  it(`matches Default story snapshot`, () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
