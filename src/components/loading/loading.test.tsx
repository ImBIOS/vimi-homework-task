import { render, screen } from "@testing-library/react";
import Loading from "./loading";

test("renders copmonent", () => {
  render(<Loading />);
  const childrenElement = screen.getByText(/Loading/i);
  expect(childrenElement).toBeInTheDocument();
});
