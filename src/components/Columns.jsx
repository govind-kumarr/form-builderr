import React from "react";
import DragableTextBox from "./DragableTextBox";
import { Droppable } from "react-beautiful-dnd";
import NewItem from "./NewItem";
import { addItemToEnd } from "../utils";
import { v4 as uuidv4 } from "uuid";

const Columns = ({ data, setData, columnTitle, columnId }) => {
  const addNewData = (value) => {
    const newData = addItemToEnd(data, value);
    setData(newData);
  };

  const newItemPlaceholder = (title) => {
    return `Enter new ${title.toLowerCase()}(Optional)`;
  };
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {data.map(({ value, id }, index) => (
            <DragableTextBox key={id} value={value} id={id} index={index} />
          ))}
          {provided.placeholder}
          {
            <NewItem
              addNewData={addNewData}
              placeholder={newItemPlaceholder(columnTitle)}
            />
          }
        </div>
      )}
    </Droppable>
  );
};

export default Columns;
