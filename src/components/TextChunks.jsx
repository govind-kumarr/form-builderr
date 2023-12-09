import React from "react";

const TextChunks = ({ value, underline }) => {
  return <p className={`${underline ? "underline" : ""}`}>{value}</p>;
};

export default TextChunks;
