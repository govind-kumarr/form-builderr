import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateForm } from "./CreateForm";
import FormRender from "./FormRender";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route path="/form/:formId" element={<FormRender />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
