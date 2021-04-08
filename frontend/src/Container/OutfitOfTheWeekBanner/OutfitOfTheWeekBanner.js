import React from "react";
import Text from "../../components/Text/Text";
import ootwImg from "../../assets/images/outfitOfTheWeek.jpg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./OutfitOfTheWeekBanner.css";

const OutfitOfTheWeekBanner = ({ img }) => {
  return (
    <div className="OOTWcon">
      <div className="mr-5 mt-5">
        <Text fontFam="Domine" fontSize="48px" fontWeight="bold" color="white">
          OUTFIT OF THE WEEK
        </Text>
      </div>
      <div className="btn">
        <PrimaryButton width="180px" height="49px">
          <Text fontFam="Montserrat" fontSize="16px" fontWeight="bold">
            Shop now
          </Text>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default OutfitOfTheWeekBanner;
