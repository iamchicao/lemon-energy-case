import { Home } from "./Home";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should render the Home component", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});