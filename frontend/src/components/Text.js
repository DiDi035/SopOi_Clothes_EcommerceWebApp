import React from "react";

import "../assets/fonts/Fonts.css";
import "../assets/stylesheets/Text.css";

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
        color: color,
        fontFamily: fontFam,
      }}>
      {children}
    </span>
  );
};

export default Text;
