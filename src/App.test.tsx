import App from "./App";
import { render, screen } from "@testing-library/react";

test("renders Hello", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
