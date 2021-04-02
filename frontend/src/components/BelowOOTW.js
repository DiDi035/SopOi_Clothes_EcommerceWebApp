import React from "react";
import "../assets/stylesheets/BelowOOTW.css";
import Text from "./Text";
import SubmitFormBtn from "./SubmitFormBtn";
import itemImg1 from "../assets/images/homePg_item_1.jpg";
import itemImg2 from "../assets/images/homePg_item_2.jpg";
import itemImg3 from "../assets/images/homePg_item_3.jpg";
import itemImg4 from "../assets/images/homePg_item_4.jpg";

const Item = ({ imgUrl, text }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPositionY: "center",
        backgroundSize: "cover",
      }}
      className="item d-flex flex-column justify-content-end align-items-lg-center">
      <div className="pb-0">
        <Text fontFam="Domine" fontWeight="bold" color="white">
          {text}
        </Text>
      </div>
      <hr/>
      <div className="mb-4">
        <SubmitFormBtn width="140px" height="40px">
          <Text fontWeight="bold" fontSize="14px">
            Shop now
          </Text>
        </SubmitFormBtn>
      </div>
    </div>
  );
};

const BelowOOTW = () => {
  return (
    <div
      className="w-100 d-flex flex-row justify-content-between align-items-end"
      style={{
        height: "405px",
        marginTop: "30px",
      }}>
      <Item imgUrl={itemImg1} text="Men" />
      <Item imgUrl={itemImg2} text="Ladies" />
      <Item imgUrl={itemImg3} text="Girls" />
      <Item imgUrl={itemImg4} text="Boys" />
    </div>
  );
};

export default BelowOOTW;
