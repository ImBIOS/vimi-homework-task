import TemplateComponent from "./template-component";
import { render, screen } from "@testing-library/react";

test("renders copmonent", () => {
  render(<TemplateComponent />);
  const childrenElement = screen.getByText(/TemplateComponent/i);
  expect(childrenElement).toBeInTheDocument();
});
