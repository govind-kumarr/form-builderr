import React from "react";
import TextField from "@mui/material/TextField";
import { Draggable } from "react-beautiful-dnd";

const DragableTextBox = ({ value, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div style={{ padding: "1rem", border: "1px solid grey" }}>
            <TextField
              id="outlined-basic"
              placeholder="Enter new Cat (Optional)"
              variant="outlined"
              value={value}
              style={{
                border: "2px solid black",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DragableTextBox;
