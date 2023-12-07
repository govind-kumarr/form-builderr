import React from "react";
import Button from "@mui/material/Button";
import { Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const DragableItem = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div style={{ padding: "1rem" }}>
              <Button variant="contained">{item.value}</Button>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default DragableItem;
