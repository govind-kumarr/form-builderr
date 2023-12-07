import { v4 as uuidv4 } from "uuid";

export function rearrangeArray(data, srcIndex, destIndex) {
  // Check if the indices are within the bounds of the array
  if (
    srcIndex < 0 ||
    srcIndex >= data.length ||
    destIndex < 0 ||
    destIndex >= data.length
  ) {
    console.error("Invalid source or destination index.");
    return data; // Return the original array if indices are invalid
  }

  // Create a shallow copy of the array to avoid modifying the original array
  const newArray = [...data];

  // Swap items at srcIndex and destIndex
  const temp = newArray[srcIndex];
  newArray[srcIndex] = newArray[destIndex];
  newArray[destIndex] = temp;

  return newArray;
}

export function addItemToEnd(data, newValue) {
  // Generate a new UUID for the id
  const newId = uuidv4();

  // Create a new item with the provided value and generated id
  const newItem = { value: newValue, id: newId };

  // Create a shallow copy of the array and push the new item to the end
  const newArray = [...data, newItem];

  return newArray;
}
