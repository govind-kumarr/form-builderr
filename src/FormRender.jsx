import React from "react";
import { useParams } from "react-router-dom";
import { formData } from "./data";

const FormRender = () => {
  const { formId } = useParams();
  return <div>FormRender</div>;
};

export default FormRender;
