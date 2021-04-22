import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormModal.css";

const FormModal = ({ children, height, bgColor, width }) => {
  return (
    <div className="popupContainer">
      <div
        className="d-flex flex-column justify-content-center align-items-center formModalContainer"
        style={{ height: height, backgroundColor: bgColor, width: width }}
      >
        {children}
      </div>
    </div>
  );
};

export default FormModal;
