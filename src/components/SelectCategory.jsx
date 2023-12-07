import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const SelectCategory = ({ category, mapItemToCategory, item, index }) => {
  // console.log({ item });
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    mapItemToCategory(item.id, e.target.value);
    setValue(e.target.value);
  };
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "4px",
        padding: "1rem",
      }}
    >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Age"
        onChange={handleChange}
      >
        {category.map((c) => (
          <MenuItem value={c.id} key={c.id}>
            {c.value}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectCategory;
