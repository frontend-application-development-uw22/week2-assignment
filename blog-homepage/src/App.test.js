import { render, screen } from "@testing-library/react";
import App from "./App";

test("Missed Articles Available", () => {
  render(<App />);
  const section = screen.getByText("In case you missed it");
  expect(section).toBeInTheDocument();
});
