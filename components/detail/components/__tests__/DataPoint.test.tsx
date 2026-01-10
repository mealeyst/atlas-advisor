import { render } from "@testing-library/react";

import DataPoint from "../DataPoint";

describe(DataPoint, () => {
  it("matches snapshot with icon", () => {
    const { container } = render(
      <DataPoint
        icon={<span>📊</span>}
        label="Population"
        value="331,000,000"
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("matches snapshot without icon", () => {
    const { container } = render(
      <DataPoint label="GDP" value="$25.5 trillion" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
