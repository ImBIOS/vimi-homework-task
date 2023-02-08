import { render, screen } from "@testing-library/react";
import TemplateComponent from "./template-component";

test("renders copmonent", () => {
  render(<TemplateComponent />);
  const childrenElement = screen.getByText(/TemplateComponent/i);
  expect(childrenElement).toBeInTheDocument();
});
