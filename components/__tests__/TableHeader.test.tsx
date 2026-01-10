import { render, screen } from "@testing-library/react";

import { TableHeader } from "../overview/TableHeader";

describe(TableHeader, () => {
  it("renders children correctly", () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeader>Test Header</TableHeader>
          </tr>
        </thead>
      </table>
    );

    expect(screen.getByText("Test Header")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <table>
        <thead>
          <tr>
            <TableHeader className="custom-class">Header Content</TableHeader>
          </tr>
        </thead>
      </table>
    );

    const header = container.querySelector("th");
    expect(header).toHaveClass("custom-class");
  });
});
