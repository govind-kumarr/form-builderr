import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const DragableTextBox = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        placeholder="Enter new Cat (Optional)"
        variant="outlined"
        value={"Cat 1"}
        style={{
          border: "2px solid black",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default DragableTextBox;
