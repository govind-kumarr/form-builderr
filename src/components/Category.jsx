import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Columns from "./Columns";
import { rearrangeArray } from "../utils";
import styled from "styled-components";
import SelectCategory from "./SelectCategory";
import { v4 as uuidv4 } from "uuid";

const Category = ({ addQuestionData, questionId }) => {
  const [category, setCategory] = useState([]);
  const [items, setItems] = useState([]);

  const categoryId = uuidv4();
  const itemId = uuidv4();

  const handleOnDragEnd = (result) => {
    console.log(result);
    const { source, destination } = result;
    const { droppableId: srcDroppableId, index: srcIndex } = source;
    const { droppableId: destDroppableId, index: destIndex } = destination;

    if (srcDroppableId != destDroppableId) return;

    if (srcDroppableId === categoryId) {
      const newArray = rearrangeArray(category, srcIndex, destIndex);
      addQuestionData(questionId, { category: newArray, items });
      setCategory(newArray);
    }
    if (srcDroppableId === itemId) {
      const newArray = rearrangeArray(items, srcIndex, destIndex);
      addQuestionData(questionId, { category, items: newArray });
      setItems(newArray);
    }
  };

  const mapItemToCategory = (itemId, categoryId) => {
    console.log({
      itemId,
      categoryId,
    });
    const itemInd = items.findIndex((i) => i.id === itemId);
    if (itemInd != -1) {
      const newArray = [...items];
      newArray[itemInd] = { ...newArray[itemInd], belongsTo: categoryId };
      addQuestionData(questionId, { category, items: newArray });
      setItems(newArray);
    }
  };

  useEffect(() => {
    addQuestionData(questionId, { category, items });
  }, [category, items]);
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <CategoryContainer>
        {/* Add Category Section  */}
        <UpperSection>
          <h1>Category</h1>
          <Columns
            data={category}
            setData={setCategory}
            columnTitle={"Category"}
            columnId={categoryId}
          />
        </UpperSection>
        {/* item to category map section  */}
        <BottomSection>
          <Items>
            <h1>Items</h1>
            <Columns
              data={items}
              setData={setItems}
              columnTitle={"Items"}
              columnId={itemId}
            />
          </Items>
          <BelongsToCategory>
            <h1>Belongs to</h1>
            {items.map((item, index) => (
              <SelectCategory
                key={item.id}
                category={category}
                mapItemToCategory={mapItemToCategory}
                item={item}
                index={index}
              />
            ))}
          </BelongsToCategory>
        </BottomSection>
      </CategoryContainer>
    </DragDropContext>
  );
};

const CategoryContainer = styled.div`
  border: 1px solid red;
  display: flex;
  gap: 5px;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 1rem;
`;

const UpperSection = styled.section`
  width: 300px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 1rem;
`;

const Items = styled.div`
  width: 300px;

  display: flex;
  gap: 5px;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 1rem;
`;

const BelongsToCategory = styled.div`
  width: 300px;

  display: flex;
  gap: 5px;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 1rem;
`;

const BottomSection = styled.section`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

export default Category;
