import React from "react";
import { useParams } from "react-router-dom";
import { formData } from "./data";
import AvailableItems from "./components/AvailableItems";
import { DragDropContext } from "react-beautiful-dnd";
import AvailableCategory from "./components/AvailableCategory";

const FormRender = () => {
  const { formId } = useParams();
  const questionIds = Object.keys(formData);
  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    const { droppableId: srcDroppableId, index: srcIndex } = source;
    const { droppableId: destDroppableId, index: destIndex } = destination;
    console.log({
      draggableId,
      srcDroppableId,
      destDroppableId,
      srcIndex,
      destIndex,
    });
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div
          style={{
            border: "1px solid grey",
            borderRadius: "10px",
            padding: "1rem",
          }}
        >
          {Object.values(formData).map((question, index) => {
            const { items, category } = question;
            console.log({ category });
            return (
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
                  <AvailableItems
                    items={items}
                    itemRowId={questionIds[index]}
                  />
                </div>
                <div>
                  <h1>Category</h1>
                  <AvailableCategory category={category} />
                </div>
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default FormRender;
