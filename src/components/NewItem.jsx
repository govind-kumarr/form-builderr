import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const NewItem = ({ addNewData, placeholder }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = (e) => {
    const newValue = e.target.value;
    if (!newValue) return;
    addNewData(newValue);
    setValue("");
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        value={value}
        style={{
          border: "2px solid black",
          borderRadius: "4px",
        }}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default NewItem;
