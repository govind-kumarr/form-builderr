import React from "react";
import TextField from "@mui/material/TextField";
import { Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const DragableTextBox = ({ value, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="">
            <DragIndicatorIcon />
            <input
              id="outlined-basic"
              placeholder="Enter new Cat (Optional)"
              variant="outlined"
              value={value}
              className="outline-none border-2 border-gray-500 rounded-md py-1 px-2"
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DragableTextBox;
