import React, { useEffect, useRef, useState } from "react";
import TextChunks from "./TextChunks";
import Fills from "./Fills";
import { FaUnderline } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Cloze = ({ questionId, addQuestionData, save }) => {
  const initialSelectionDetails = {
    selectionStart: 0,
    selectionEnd: 0,
    placeHolder: "",
  };

  const [text, setText] = useState("");
  const [fills, setFills] = useState([]);
  const [selectionDetails, setSelectionDetails] = useState(
    initialSelectionDetails
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
    setSelectionDetails(initialSelectionDetails);
  };

  function placeNewWord(startIndex, endIndex, originalStr, newWord) {
    // Extract the substring before the start index
    const prefix = originalStr.substring(0, startIndex);

    // Extract the substring after the end index
    const suffix = originalStr.substring(endIndex);

    // Concatenate the parts with the new word
    const newString = prefix + newWord + suffix;

    return newString;
  }

  function constructPlaceholder(len) {
    let str = "";
    for (let i = 0; i < len; i++) str += "_";
    return str;
  }

  const handleSelection = (e) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && selection.toString().length > 0) {
      const { selectionStart, selectionEnd } = e.target;
      const selectedText = text.substring(selectionStart, selectionEnd);
      console.log("Select is done");
      setSelectionDetails({
        selectionStart,
        selectionEnd,
        placeHolder: constructPlaceholder(selectedText.length),
      });
    }
  };

  const handleDeselection = (e) => {
    // console.log("Handle Deselection");
  };

  // Function for applying selection
  function applySelection() {
    const { selectionStart, selectionEnd, placeHolder } = selectionDetails;
    const newWord = placeNewWord(
      selectionStart,
      selectionEnd,
      text,
      placeHolder
    );
    setFills((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          selectionStart,
          selectionEnd,
          word: text.substring(selectionStart, selectionEnd),
        },
      ];
    });
    setText(newWord);
    setSelectionDetails(initialSelectionDetails);
  }

  console.log("Cloze component renders");

  useEffect(() => {
    addQuestionData(questionId, { text, fills });
  }, [save]);

  return (
    <div className="border-2 p-2">
      <h1>Fill in the blanks</h1>
      <button
        className={`${
          selectionDetails.placeHolder.length === 0 ? "hidden" : ""
        }`}
        onClick={applySelection}
      >
        <FaUnderline />
      </button>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onMouseUp={handleSelection}
        onBlur={handleDeselection}
        className="w-full outline-none p-2"
      />
      {fills.length > 0 &&
        fills.map(({ id, word: value }) => <Fills key={id} value={value} />)}
    </div>
  );
};

export default React.memo(Cloze);
