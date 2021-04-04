import React from "react";

import "../assets/fonts/Fonts.css";
import "../assets/stylesheets/Link.css";
import "../assets/colors/Colors.css";
import Text from "./Text";

const Link = ({ children, fontSize, linkTo, color, underlined, fontFam }) => {
  let under = "underline";
  if (!underlined) {
    under = "none";
  }
  return (
    <a
      href={linkTo}
      style={{
        fontSize: fontSize,
      }}
      className="link"
    >
      <Text
        fontWeight="bold"
        fontSize={fontSize}
        textDecoration={under}
        fontFam={fontFam}
        color={color}
      >
        {children}
      </Text>
    </a>
  );
};

export default Link;
