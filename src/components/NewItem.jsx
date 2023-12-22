import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

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
    <div className="w-full">
      <ModeEditIcon />
      <input
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="border-2 px-2 py-1 rounded-md outline-none"
      />
    </div>
  );
};

export default NewItem;
