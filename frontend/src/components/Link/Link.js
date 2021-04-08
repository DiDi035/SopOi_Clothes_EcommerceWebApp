import React from "react";

import "../../assets/fonts/Fonts.css";
import "./Link.css";
import Colors from "../../assets/colors/Colors";
import Text from "../Text/Text";

const Link = ({
  children,
  fontSize,
  linkTo,
  color,
  underlined,
  fontFam,
  fontWeight,
  pointerEvent = "none",
}) => {
  let under = "underline";
  if (!underlined) {
    under = "none";
  }
  return (
    <a style={{ pointerEvents: pointerEvent }} href={linkTo} className="link">
      <Text
        fontWeight="bold"
        fontSize={fontSize}
        textDecoration={under}
        fontFam={fontFam}
        color={color}
        fontWeight={fontWeight}
      >
        {children}
      </Text>
    </a>
  );
};

export default Link;
