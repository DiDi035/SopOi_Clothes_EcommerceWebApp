import React from "react";
import Text from "./Text";
import "../assets/stylesheets/SubmitFormBtn.css";

const SubmitFormBtn = ({
  children,
  onClick,
  disabled,
  height,
  width,
  fontSize,
  color,
}) => {
  let fontsize = fontSize || "16px";
  return (
    <button
      style={{ height: height, width: width }}
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className="submitFormBtn"
    >
      <Text
        fontFam="Montserrat"
        textDecoration="none"
        fontWeight="bold"
        fontSize={fontsize}
        color={color}
      >
        {children}
      </Text>
    </button>
  );
};

export default SubmitFormBtn;
