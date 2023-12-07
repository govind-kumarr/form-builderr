import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

function CreateForm() {
  const [formData, setFormData] = useState({});
  const addQuestion = () => {
    const newQuestionId = uuidv4();
    const newFormData = {
      ...formData,
      [newQuestionId]: {
        type: "category",
      },
    };
    setFormData(newFormData);
  };

  const addQuestionData = (questionId, data) => {
    if (formData[questionId] == undefined) return;

    const newFormData = { ...formData };
    newFormData[questionId] = { ...newFormData[questionId], ...data };
    console.log(newFormData);
    setFormData(newFormData);
  };

  return (
    <div>
      {Object.keys(formData).map((question) => {
        return (
          <Category
            key={question}
            questionId={question}
            addQuestionData={addQuestionData}
          />
        );
      })}
      <Button variant="contained" onClick={addQuestion}>
        Add Question
      </Button>
    </div>
  );
}

export { CreateForm };
