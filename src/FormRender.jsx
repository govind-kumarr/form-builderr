import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formData as initialFormData } from "./data";
import AvailableItems from "./components/AvailableItems";
import { DragDropContext } from "react-beautiful-dnd";
import AvailableCategory from "./components/AvailableCategory";
import { isQuestion } from "./utils";
import CategoryAnswer from "./components/CategoryAnswer";
import { axios } from "./config/axiosConfig.js";

const FormRender = () => {
  const { formId } = useParams();

  const getFormData = async () => {
    const res = await axios(`/form/${formId}`);
    console.log(res.data);
  };

  useEffect(() => {
    getFormData();
  }, []);

  const [formData, setFormData] = useState(initialFormData);
  const questionIds = Object.keys(formData);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const { droppableId: srcDroppableId, index: srcIndex } = source;
    const { droppableId: destDroppableId, index: destIndex } = destination;
    console.log({
      draggableId,
      srcDroppableId,
      destDroppableId,
      srcIndex,
      destIndex,
    });

    //Not yet implemented
    if (srcDroppableId === destDroppableId) return;

    // Check which question it is
    let question;
    if (
      isQuestion(srcDroppableId, formData) ||
      isQuestion(destDroppableId, formData)
    ) {
      //If the item is taken from item row
      if (isQuestion(srcDroppableId, formData)) {
        const newFormData = { ...formData };
        // Found item
        question = newFormData[srcDroppableId];
        const itemIndex = question.items.findIndex((i) => i.id === draggableId);
        const [newItem] = question.items.splice(itemIndex, 1);

        // Now find the category where this item will go
        const categoryIndex = question.category.findIndex(
          (c) => c.id === destDroppableId
        );
        const newCategory = question.category[categoryIndex];
        newCategory.items = [...newCategory.items, newItem];
        question.category[categoryIndex] = newCategory;
        setFormData(newFormData);
      }
      //If item is taken from category box
      if (isQuestion(destDroppableId, formData)) {
        //identify which category
        const newFormData = { ...formData };
        question = newFormData[destDroppableId];
        const categoryIndex = question.category.findIndex(
          (c) => c.id === srcDroppableId
        );
        const newCategory = question.category[categoryIndex];

        //Extract item and delete it from that category
        const item = newCategory.items[srcIndex];
        newCategory.items.splice(srcIndex, 1);

        // Add it to the item row at appropriate index
        question.items.splice(destIndex, 0, item);

        console.log(item);
      }
    }
  };

  return (
    <div>
      {/* <DragDropContext onDragEnd={handleDragEnd}> */}
      <div
        style={{
          border: "1px solid grey",
          borderRadius: "10px",
          padding: "1rem",
        }}
      >
        {Object.values(formData).map((question, index) => {
          return (
            <CategoryAnswer
              key={questionIds[index]}
              question={question}
              index={index}
              handleDragEnd={handleDragEnd}
            />
          );
          // const { items, category } = question;
          // return (
          //   <div
          //     key={questionIds[index]}
          //     style={{
          //       display: "flex",
          //       gap: "5px",
          //       flexDirection: "column",
          //       border: "1px solid grey",
          //       borderRadius: "10px",
          //       padding: "1rem",
          //     }}
          //   >
          //     <h1>Question {index + 1}</h1>
          //     <div>
          //       <h1>Items</h1>
          //       <AvailableItems
          //         items={items}
          //         itemRowId={questionIds[index]}
          //       />
          //     </div>
          //     <div>
          //       <h1>Category</h1>
          //       <AvailableCategory category={category} />
          //     </div>
          //   </div>
          // );
        })}
      </div>
      {/* </DragDropContext> */}
    </div>
  );
};

export default FormRender;
