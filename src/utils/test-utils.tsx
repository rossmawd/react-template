import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/index"; // import your Redux store

function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) {
  return rtlRender(<Provider store={store}>{ui}</Provider>, options);
}

export * from "@testing-library/react";
export { render };
