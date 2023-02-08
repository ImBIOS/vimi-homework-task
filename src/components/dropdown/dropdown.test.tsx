import { render, screen } from "@testing-library/react";
import Dropdown from "./dropdown";

test("renders copmonent", () => {
  render(<Dropdown>Dropdown</Dropdown>);
  const childrenElement = screen.getByText(/Dropdown/i);
  expect(childrenElement).toBeInTheDocument();
});
