import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormModal.css";

const FormModal = ({ children }) => {
  return <div className="d-flex flex-column justify-content-center align-items-center formModalContainer">{children}</div>;
};

export default FormModal;
