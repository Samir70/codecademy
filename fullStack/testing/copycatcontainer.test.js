import { CopyCatContainer } from "./CopyCatContainer";
import "regenerator-runtime";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

it("Should display copied text", async () => {
  render(<CopyCatContainer />)
  const input = screen.getByRole("textbox");
  userEvent.type(input, "Hello World!")
  const paragraph = await screen.findByText('Hello World!');
  expect(paragraph).toBeInTheDocument()
});

it("Should remove copied text after putting on tape", async () => {
  render(<CopyCatContainer />)
  const input = screen.getByRole("textbox");
  userEvent.type(input, "My mouth is shut")
  const paragraph = await screen.findByText('My mouth is shut');
  expect(paragraph).toBeInTheDocument()
  const catButton = screen.getByRole("button", { name: /copycat/i });
  userEvent.click(catButton)
  await waitFor(() => {
    const para2 = screen.queryByText('My mouth is shut');
    expect(para2).toBeNull()
  })
});

it("Should display copied text after removing tape", async () => {
  // Render CopyCatContainer
  render(<CopyCatContainer />);
  // Get the input textbox element
  const input = screen.getByRole("textbox");
  // Await typing "Eventually this will appear" into the input before moving on
  await userEvent.type(input, "Eventually this will appear");
  // Get the copycat image button
  const copyCatImage = screen.getByRole("button", { name: /copycat/i });
  // Simulate a click on the copycat image
  userEvent.click(copyCatImage);
  // Find and wait for the quiet cat image button to be displayed before moving on
  const quietCatImage = await screen.findByRole("button", { name: /quietcat/i });
  // Simulate a click on the quiet cat image
  userEvent.click(quietCatImage);
  // Find and wait for "Eventually this will appear" to be displayed
  const copiedText = await screen.findByText("Eventually this will appear");
});

