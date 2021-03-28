import React from "react";

import "../assets/fonts/Fonts.css";
import "./Link.css";
import Text from "./Text";

const Link = ({ children, fontSize, linkTo }) => {
  return (
    <a
      href={linkTo}
      style={{
        fontSize: fontSize,
      }}
      className="link">
      <Text fontWeight="bold" fontSize="14px" textDecoration="underline">
        {children}
      </Text>
    </a>
  );
};

export default Link;
