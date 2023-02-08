import { render, screen } from "@testing-library/react";
import data from "../../data/db";
import Table from "./table";

test("renders copmonent", () => {
  render(<Table data={data} />);
  const childrenElement = screen.getByText(/Table/i);
  expect(childrenElement).toBeInTheDocument();
});
