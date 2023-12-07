import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DragableItem from "./DragableItem";

const AvailableItems = ({ items, itemRowId }) => {
  return (
    <Droppable droppableId={itemRowId}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div style={{ display: "flex", gap: "1rem", margin: "auto" }}>
              {items.map((item, index) => (
                <DragableItem key={item.id} index={index} item={item} />
              ))}
            </div>
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default AvailableItems;
