import { screen, fireEvent } from "@testing-library/react";
import { render } from "./utils/test-utils";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/About Page/i);
  expect(linkElement).toHaveAccessibleName("About page");
});

test("should increment the counter when the button is clicked", () => {
  render(<App />);

  const button: HTMLElement = screen.getByRole("button");

  fireEvent.click(button);

  const counter = screen.getByTestId("counter");

  expect(counter).toHaveTextContent("1 navigation events");
});
