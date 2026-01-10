import { render, screen } from "@testing-library/react";
import React from "react";

import { mockCountries } from "@/components/__fixtures__/mockData";
import { CountryDetail } from "@/types/Country";

import { CountryDetailHeader } from "../components/CountryDetailHeader";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<"img">) => {
    return <img {...props} alt={props.alt || ""} />;
  },
}));

describe(CountryDetailHeader, () => {
  it("renders country content correctly", () => {
    const country = mockCountries[0] as CountryDetail;
    render(<CountryDetailHeader country={country} />);

    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("United States of America")).toBeInTheDocument();
    expect(screen.getByText("ISO Code: USA")).toBeInTheDocument();
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

    expect(container.firstChild).toMatchSnapshot();
  });
});
