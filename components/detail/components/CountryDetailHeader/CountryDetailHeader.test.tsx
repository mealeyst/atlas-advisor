import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import React, { createElement } from "react";

import { mockCountries } from "@/components/__fixtures__/mockData";
import { CountryDetail } from "@/types/Country";

import { CountryDetailHeader } from ".";
import * as stories from "./CountryDetailHeader.stories";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<"img">) => {
    return <img {...props} alt={props.alt || ""} />;
  },
}));

const {
  Default,
  WithLongName,
  WithoutFlag,
  WithoutFlagAlt,
  Canada,
  ShortName,
  LongOfficialName,
} = composeStories(stories);

describe(CountryDetailHeader, () => {
  const composedStories = {
    Default,
    WithLongName,
    WithoutFlag,
    WithoutFlagAlt,
    Canada,
    ShortName,
    LongOfficialName,
  };
  Object.entries(composedStories).forEach(([storyName, story]) => {
    it(`matches ${storyName} story snapshot`, () => {
      const { container } = render(createElement(story));
      expect(container).toMatchSnapshot();
    });
  });

  it("renders flag image with correct alt text when flags.svg exists", () => {
    const country = mockCountries[0] as CountryDetail;
    render(<CountryDetailHeader country={country} />);

    const flagImage = screen.getByAltText(
      "The flag of the United States of America"
    );
    expect(flagImage).toBeInTheDocument();
    expect(flagImage).toHaveAttribute("src", country.flags.svg);
  });

  it("falls back to common name as alt text when flags.alt is not available", () => {
    const country: CountryDetail = {
      ...mockCountries[0],
      flags: {
        ...mockCountries[0].flags,
        alt: "",
      },
    } as CountryDetail;
    render(<CountryDetailHeader country={country} />);

    expect(screen.getByAltText("United States")).toBeInTheDocument();
  });

  it("does not render flag image when flags.svg is not available", () => {
    const country: CountryDetail = {
      ...mockCountries[0],
      flags: {
        ...mockCountries[0].flags,
        svg: "",
      },
    } as CountryDetail;
    render(<CountryDetailHeader country={country} />);

    const flagImage = screen.queryByRole("img");
    expect(flagImage).not.toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const country = mockCountries[0] as CountryDetail;
    const { container } = render(<CountryDetailHeader country={country} />);

    expect(container).toMatchSnapshot();
  });
});
