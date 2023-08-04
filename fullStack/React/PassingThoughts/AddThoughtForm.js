import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
  const [textInput, setTextInput] = useState("");
  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (textInput.length === 0) { return }
    props.addThought({
      id: generateId(),
      text: textInput,
      expiresAt: getNewExpirationTime(),
    });
    setTextInput("")
  };
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={textInput}
        onChange={handleTextChange}
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
