import React from "react";
import Text from "../Text/Text";
import Colors from "../../assets/colors/Colors";
import "./SizeBtn.css";

const SizeBtn = ({ size, marginLeft, chosenSize, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="sizeBtn"
      style={{
        marginLeft: marginLeft,
        background: size == chosenSize ? Colors.primary : "",
        color: size == chosenSize ? "white" : "",
      }}
    >
      {size}
    </div>
  );
};

export default SizeBtn;
