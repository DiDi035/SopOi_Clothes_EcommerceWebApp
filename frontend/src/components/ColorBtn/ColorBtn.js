import React from "react";
import "./ColorBtn.css";
import Colors from "../../assets/colors/Colors";

const ColorBtn = ({ color, marginLeft, onClick, chosenColor }) => {
  return (
    <div
      onClick={onClick}
      className="corloBtn"
      style={{
        backgroundColor: color,
        marginLeft: marginLeft,
        border: `${color === chosenColor ? "2px solid " + Colors.primary : ""}`,
      }}
    ></div>
  );
};

export default ColorBtn;
