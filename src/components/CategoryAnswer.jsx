import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { formData } from "../data";
import AvailableItems from "./AvailableItems";
import AvailableCategory from "./AvailableCategory";

const CategoryAnswer = ({ question, index, handleDragEnd }) => {
  const { category, items } = question;
  const questionIds = Object.keys(formData);

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div
          key={questionIds[index]}
          style={{
            display: "flex",
            gap: "5px",
            flexDirection: "column",
            border: "1px solid grey",
            borderRadius: "10px",
            padding: "1rem",
          }}
        >
          <h1>Question {index + 1}</h1>
          <div>
            <h1>Items</h1>
            <AvailableItems items={items} itemRowId={questionIds[index]} />
          </div>
          <div>
            <h1>Category</h1>
            <AvailableCategory category={category} />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default CategoryAnswer;
