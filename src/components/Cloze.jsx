import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import TextChunks from "./TextChunks";

const Cloze = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSelection = (e) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && selection.toString().length > 0) {
      const { selectionStart, selectionEnd } = e.target;
      const selectedText = text.substring(selectionStart, selectionEnd);
      console.log("Selected Text:", selectedText);
      console.log("Starting Index:", selectionStart);
      console.log("Ending Index:", selectionEnd);
      const selectedText2 = selection.toString();
      console.log("Selected Text2:", selectedText2);
    }
  };

  return (
    <div>
      <h1>Govind</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onMouseUp={handleSelection}
      />
    </div>
  );
};

export default Cloze;
