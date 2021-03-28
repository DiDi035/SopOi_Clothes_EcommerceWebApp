import React from "react";

import "../assets/fonts/Fonts.css";
import "./Text.css";

const Text = ({ children, fontWeight, textDecoration, fontSize }) => {
  return (
    <span
      style={{
        fontWeight: fontWeight,
        textDecoration: textDecoration,
        fontSize: fontSize,
      }}
      className="textPara">
      {children}
    </span>
  );
};

export default Text;
