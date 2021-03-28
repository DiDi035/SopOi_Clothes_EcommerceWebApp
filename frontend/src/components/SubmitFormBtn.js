import React from "react";

import "./SubmitFormBtn.css"

const SubmitFormBtn = ({ children, onClick }) => {
  return <button onClick={onClick} type="button" className="submitFormBtn">{children}</button>;
};

export default SubmitFormBtn;
