import { render, screen } from "@testing-library/react";
import Title from "./title";

test("renders copmonent", () => {
  render(<Title>Title</Title>);
  const childrenElement = screen.getByText(/Title/i);
  expect(childrenElement).toBeInTheDocument();
});
