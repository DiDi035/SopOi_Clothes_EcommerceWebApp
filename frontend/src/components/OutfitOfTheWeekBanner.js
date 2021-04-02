import React from "react";
import Text from "./Text";
import ootwImg from "../assets/images/outfitOfTheWeek.jpg";
import SubmitFormBtn from "./SubmitFormBtn";

const OutfitOfTheWeekBanner = ({ img }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${ootwImg})`,
        backgroundPositionY: "-170px",
        backgroundSize: "cover",
        height: "513px",
      }}
      className="w-100 d-flex flex-column align-items-end">
      <div className="mr-5 mt-5">
        <Text fontFam="Domine" fontSize="48px" fontWeight="bold" color="white">
          OUTFIT OF THE WEEK
        </Text>
      </div>
      <div style={{
          marginTop: "310px",
          marginRight: "60px"
      }}>
        <SubmitFormBtn width="180px" height="49px">
          <Text fontFam="Montserrat" fontSize="16px" fontWeight="bold">
            Shop now
          </Text>
        </SubmitFormBtn>
      </div>
    </div>
  );
};

export default OutfitOfTheWeekBanner;
