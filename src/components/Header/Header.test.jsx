import { Header } from "./index";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("should render the Header component", () => {
    render(<Header />);
    expect(screen.getByRole("header")).toBeInTheDocument();
  });
});

