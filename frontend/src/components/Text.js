import React from "react";

import "../assets/fonts/Fonts.css";
import "../assets/stylesheets/Text.css";
import Colors from "../assets/colors/Colors";

const Text = ({
  children,
  fontWeight,
  textDecoration,
  fontSize,
  color,
  fontFam,
}) => {
  return (
    <span
      style={{
        fontWeight: fontWeight,
        textDecoration: textDecoration,
        fontSize: fontSize,
        color: Colors[color] || color,
        fontFamily: fontFam,
      }}
      className="textPara"
    >
      {children}
    </span>
  );
};

export default Text;
