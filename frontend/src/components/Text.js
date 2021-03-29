import React from "react";

import "../assets/fonts/Fonts.css";
import "../assets/stylesheets/Text.css";

const Text = ({ children, fontWeight, textDecoration, fontSize, color }) => {
  return (
    <span
      style={{
        fontWeight: fontWeight,
        textDecoration: textDecoration,
        fontSize: fontSize,
        color: color
      }}
      className="textPara">
      {children}
    </span>
  );
};

export default Text;
