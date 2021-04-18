import React from "react";
import Text from "../Text/Text";
import "./Card.css";

const Card = ({ name, price, onClick }) => {
  return (
    <div className="cardCon">
      <div className="proImg">
        <div onClick={onClick} className="popup">
          <Text color="white" fontSize="14px">
            + Quick shop
          </Text>
        </div>
      </div>
      <div>
        <Text fontSize="14px" color="dark-grey">
          {name}
        </Text>
      </div>
      <div>
        <Text fontSize="12px" color="greyish-brown">
          ${price}
        </Text>
      </div>
    </div>
  );
};

export default Card;
