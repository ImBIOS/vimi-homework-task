import data from "../../data/db";
import Table from "./table";
import { render, screen } from "@testing-library/react";

test("renders copmonent", () => {
  render(<Table data={data} />);
  const childrenElement = screen.getByText(/Table/i);
  expect(childrenElement).toBeInTheDocument();
});
