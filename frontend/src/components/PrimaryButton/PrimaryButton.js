import React from "react";
import Text from "../Text/Text";
import "./PrimaryButton.css";

const SubmitFormBtn = ({
  children,
  onClick,
  disabled,
  height,
  width,
  fontSize,
  color,
  bgColor,
}) => {
  let fontsize = fontSize || "16px";
  return (
    <button
      style={{ height: height, width: width, backgroundColor: bgColor }}
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
