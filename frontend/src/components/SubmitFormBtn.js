import React from "react";

import "../assets/stylesheets/SubmitFormBtn.css";

const SubmitFormBtn = ({ children, onClick, disabled, height, width }) => {
  return (
    <button
      style={{ height: height, width: width }}
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className="submitFormBtn">
      {children}
    </button>
  );
};

export default SubmitFormBtn;
