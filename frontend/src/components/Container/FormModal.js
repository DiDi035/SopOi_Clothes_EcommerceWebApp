import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheets/FormModal.css";

const FormModal = ({ children, height }) => {
  return (
    <div className="popupContainer">
      <div
        className="d-flex flex-column justify-content-center align-items-center formModalContainer"
        style={{ height: height }}>
        {children}
      </div>
    </div>
  );
};

export default FormModal;
