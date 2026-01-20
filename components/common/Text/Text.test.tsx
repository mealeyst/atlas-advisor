import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { createElement } from "react";

import * as stories from "./Text.stories";

const {
    H1Default,
    H1LongText,
    H1WithCustomClassName,
    H2Default, H2LongText,
    H2WithCustomClassName,
    H3Default,
    H3LongText,
    H3WithCustomClassName,
    PDefault,
    PLongText,
    PWithCustomClassName
} = composeStories(stories);

describe("Text", () => {
    const composedStories = {
        H1Default,
        H1LongText,
        H1WithCustomClassName,
        H2Default,
        H2LongText,
        H2WithCustomClassName,
        H3Default,
        H3LongText,
        H3WithCustomClassName,
        PDefault,
        PLongText,
        PWithCustomClassName,
    };
    Object.entries(composedStories).forEach(([storyName, story]) => {
        it(`matches ${storyName} story snapshot`, () => {
            const { container } = render(createElement(story));
            expect(container).toMatchSnapshot();
        });
    });
});