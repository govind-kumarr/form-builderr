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
    <div className="border-2 px-2 py-1 rounded-md">
      <select
        value={value}
        onChange={handleChange}
        className="w-full outline-none"
      >
        <option value="">select category</option>
        {category.map((c) => (
          <option value={c.id} key={c.id}>
            {c.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
