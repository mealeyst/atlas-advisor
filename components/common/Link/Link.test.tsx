import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import { FooterLink, SiteHeaderLink } from ".";
import * as footerLinkStories from "./FooterLink.stories";
import * as siteHeaderLinkStories from "./SiteHeaderLink.stories";

const { Default, WithLongText, WithCustomClassName } = composeStories(footerLinkStories);
const { Default: SiteHeaderLinkDefault } = composeStories(siteHeaderLinkStories);

describe(FooterLink, () => {
  const composedStories = {
    Default,
    WithLongText,
    WithCustomClassName,
  };
  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });
});

describe(SiteHeaderLink, () => {
  const composedStories = {
    Default: SiteHeaderLinkDefault,
    WithLongText,
    WithCustomClassName,
  };
  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });
});
