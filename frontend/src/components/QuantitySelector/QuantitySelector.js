import React from "react";
import Text from "../Text/Text";
import "./QuantitySelector.css";

const QuantitySelector = ({ quantity, marginLeft, dec, inc, marginTop }) => {
  return (
    <div
      className="quantitySelec"
      style={{ marginLeft: marginLeft, marginTop: marginTop }}
    >
      <span onClick={dec} className="icon-minus"></span>
      <div className="quan">
        <Text color="dark-grey" fontSize="14px">
          {quantity}
        </Text>
      </div>
      <span onClick={inc} className="icon-plus"></span>
    </div>
  );
};

export default QuantitySelector;
