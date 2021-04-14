import React from "react";
import Text from "../Text/Text";
import "./SizeBtn.css";

const SizeBtn = ({ size, marginLeft }) => {
  return (
    <div className="sizeBtn" style={{ marginLeft: marginLeft }}>
      {size}
    </div>
  );
};

export default SizeBtn;
