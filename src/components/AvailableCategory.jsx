import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DragableItem from "./DragableItem";

const AvailableCategory = ({ category }) => {
  return (
    <div style={{ display: "flex", gap: "1rem", margin: "auto" }}>
      {category.map((cat) => {
        return (
          <Droppable droppableId={cat.id} key={cat.id}>
            {(provided) => {
              return (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      margin: "auto",
                      flexDirection: "column",
                      width: "300px",
                      minHeight: "100px",
                      border: "1px solid grey",
                    }}
                  >
                    <h1
                      style={{
                        margin: "auto",
                      }}
                    >
                      {cat.value}
                    </h1>
                    {provided.placeholder}
                  </div>
                </div>
              );
            }}
          </Droppable>
        );
      })}
    </div>
  );
};

export default AvailableCategory;
