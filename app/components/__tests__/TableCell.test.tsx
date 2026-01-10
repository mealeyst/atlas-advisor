import { render, screen } from "@testing-library/react";
import { TableCell } from "../TableCell";

describe(TableCell, () => {
  it("renders children correctly", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test Content</TableCell>
          </tr>
        </tbody>
      </table>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <TableCell className="custom-class">Content</TableCell>
          </tr>
        </tbody>
      </table>
    );

    const cell = container.querySelector("td");
    expect(cell).toHaveClass("custom-class");
  });
});
