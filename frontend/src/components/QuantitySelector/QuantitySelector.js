import React from "react";
import Text from "../Text/Text";
import "./QuantitySelector.css";

const QuantitySelector = ({ quantity, marginLeft }) => {
  return (
    <div className="quantitySelec" style={{ marginLeft: marginLeft }}>
      <span className="icon-minus"></span>
      <div className="quan">
        <Text color="dark-grey" fontSize="14px">
          3
        </Text>
      </div>
      <span className="icon-plus"></span>
    </div>
  );
};

export default QuantitySelector;
