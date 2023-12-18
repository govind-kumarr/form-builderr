import { useCallback, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import { axios } from "./config/axiosConfig.js";
import Cloze from "./components/Cloze.jsx";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Category from "./components/Category.jsx";

function CreateForm() {
  const [formData, setFormData] = useState({});
  const [save, setSave] = useState(false);

  const addQuestion = (type) => {
    const newQuestionId = uuidv4();
    const newFormData = {
      ...formData,
      [newQuestionId]: {
        type,
      },
    };
    setFormData(newFormData);
  };

  const addQuestionData = useCallback(
    (questionId, data) => {
      if (formData[questionId] == undefined) return;

      const newFormData = { ...formData };
      newFormData[questionId] = { ...newFormData[questionId], ...data };
      console.log(newFormData);
      setFormData(newFormData);
    },
    [formData]
  );

  const saveForm = async () => {
    await axios.post("/form", { form: formData });
    setFormData({});
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (!value || value === "none") return;

    if (value === "category" || value === "cloze" || value === "comprehensive")
      return addQuestion(value);

    return alert("Invalid Question Type");
  };

  return (
    <div className="max-w-[1200px] m-auto border-2 bg-gray-100 py-2 px-2 space-y-2">
      <div className="flex items-center gap-2 justify-center">
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          label="Age"
          value="none"
          onChange={handleChange}
        >
          <MenuItem value={"none"}>Add Question</MenuItem>
          <MenuItem value={"category"}>category</MenuItem>
          <MenuItem value={"cloze"}>cloze</MenuItem>
          <MenuItem value={"comprehensive"}>comprehensive</MenuItem>
        </Select>
        <Button variant="contained" onClick={() => setSave(!save)}>
          Save Form
        </Button>
      </div>
      {Object.keys(formData).map((question) => {
        const { type } = formData[question];

        if (type === "category")
          return (
            <Category
              key={question}
              questionId={question}
              addQuestionData={addQuestionData}
              save={save}
            />
          );

        if (type === "cloze")
          return (
            <Cloze
              key={question}
              questionId={question}
              addQuestionData={addQuestionData}
              save={save}
            />
          );
      })}
    </div>
  );
}

export { CreateForm };
