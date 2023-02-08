import Title from "./title";
import { render, screen } from "@testing-library/react";

test("renders copmonent", () => {
  render(<Title>Title</Title>);
  const childrenElement = screen.getByText(/Title/i);
  expect(childrenElement).toBeInTheDocument();
});
