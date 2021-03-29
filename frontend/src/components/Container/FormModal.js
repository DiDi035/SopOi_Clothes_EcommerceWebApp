import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheets/FormModal.css";

const FormModal = ({ children }) => {
  return (
    <div className="popupContainer">
      <div className="d-flex flex-column justify-content-center align-items-center formModalContainer">
        {children}
      </div>
    </div>
  );
};

export default FormModal;
