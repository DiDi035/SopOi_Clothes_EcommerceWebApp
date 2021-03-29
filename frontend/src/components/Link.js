import React from "react";

import "../assets/fonts/Fonts.css";
import "../assets/stylesheets/Link.css";
import "../assets/colors/Colors.css";
import Text from "./Text";

const Link = ({ children, fontSize, linkTo, color, underlined }) => {
  let Color = "#ffa15f";
  let under = "underline";
  if (color === "second") {
    Color = "#4d4d4d";
  }
  if (!underlined) {
    under = "none";
  }
  return (
    <a
      href={linkTo}
      style={{
        fontSize: fontSize,
        color: Color,
      }}
      className="link">
      <Text fontWeight="bold" fontSize={fontSize} textDecoration={under}>
        {children}
      </Text>
    </a>
  );
};

export default Link;
