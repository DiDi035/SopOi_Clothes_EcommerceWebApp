import React from "react";
import Text from "../Text/Text";
import "./Card.css";

const Card = () => {
  return (
    <div className="cardCon">
      <div className="proImg">
        <div className="popup">
          <Text color="white" fontSize="14px">
            + Quick shop
          </Text>
        </div>
      </div>
      <div>
        <Text fontSize="14px" color="dark-grey">
          Collete Stretch Line
        </Text>
      </div>
      <div>
        <Text fontSize="12px" color="greyish-brown">
          $69.00
        </Text>
      </div>
    </div>
  );
};

export default Card;
