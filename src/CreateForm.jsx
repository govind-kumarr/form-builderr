import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import { axios } from "./config/axiosConfig.js";
import Cloze from "./components/Cloze.jsx";

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

  const saveForm = async () => {
    await axios.post("/form", { form: formData });
    setFormData({});
  };

  return (
    <div className="max-w-[1200px] m-auto border-2 bg-gray-100 py-2 px-2 space-y-2">
      <div className="flex items-center gap-2 justify-center">
        <Button variant="contained" onClick={addQuestion}>
          Add Question
        </Button>
        <Button variant="contained" onClick={saveForm}>
          Save Form
        </Button>
      </div>
      {Object.keys(formData).map((question) => {
        return (
          <Cloze key={uuidv4()} />
          // <Category
          //   key={question}
          //   questionId={question}
          //   addQuestionData={addQuestionData}
          // />
        );
      })}
    </div>
  );
}

export { CreateForm };
