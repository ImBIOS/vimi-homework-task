import Dropdown from "./dropdown";
import { render, screen } from "@testing-library/react";

test("renders copmonent", () => {
  render(<Dropdown>Dropdown</Dropdown>);
  const childrenElement = screen.getByText(/Dropdown/i);
  expect(childrenElement).toBeInTheDocument();
});
