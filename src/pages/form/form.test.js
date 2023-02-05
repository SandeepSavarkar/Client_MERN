import { render, screen } from "@testing-library/react";
import React from "react";
import MyForm from "./index.js";

global.React = React;
describe("MyForm component", () => {
  it("should render MyForm component correctly", () => {
    render(<MyForm />);
    const element = screen.getByTestId("title");
    expect(element).toBeInTheDocument();
  });
});
