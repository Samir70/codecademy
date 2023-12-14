import { CopyCat } from "./CopyCat";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

it("Displays the provided name", () => {
  render(
    <CopyCat
      name="Mack"
      value=""
      handleChange={() => { }}
      toggleTape={() => { }}
      isCopying={true}
    />
  );
  const header = screen.getByText("Copy Cat Mack");
  expect(header).toHaveTextContent("Copy Cat Mack");
});

it("Should display input text in paragraph when isCopying is set to true", () => {
  render(
    <CopyCat
      name="Mack"
      value="Here is an input"
      handleChange={() => { }}
      toggleTape={() => { }}
      isCopying={true}
    />
  );
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("Here is an input")
  const paragraph = screen.getByText("Here is an input")
  expect(paragraph).toBeInTheDocument()
});

it("Should not display input text in paragraph when isCopying is set to false", () => {
  render(
    <CopyCat
      name="Mack"
      value="Here is an input"
      handleChange={() => { }}
      toggleTape={() => { }}
      isCopying={false}
    />
  );
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("Here is an input")
  const paragraph = screen.queryByText("Here is an input")
  expect(paragraph).toBeNull()
});
