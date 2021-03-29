import React from "react";

import "./SubmitFormBtn.css";

const SubmitFormBtn = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className="submitFormBtn">
      {children}
    </button>
  );
};

export default SubmitFormBtn;
