import React from "react";
import "./ColorBtn.css";

const ColorBtn = ({ color, marginLeft }) => {
  return (
    <div
      className="corloBtn"
      style={{ backgroundColor: color, marginLeft: marginLeft }}
    ></div>
  );
};

export default ColorBtn;
