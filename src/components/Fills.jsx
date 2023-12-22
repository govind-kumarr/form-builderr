import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Fills = ({ value }) => {
  return (
    <div className="flex gap-1 items-center justify-between border-2 w-28 border-gray-400 px-1 py-1 rounded-md">
      <p>{value}</p>
      {/* <CloseIcon /> */}
    </div>
  );
};

export default Fills;
