import React from "react";
import "./BelowOOTW.css";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import itemImg1 from "../../assets/images/homePg_item_1.jpg";
import itemImg2 from "../../assets/images/homePg_item_2.jpg";
import itemImg3 from "../../assets/images/homePg_item_3.jpg";
import itemImg4 from "../../assets/images/homePg_item_4.jpg";
import { useHistory } from "react-router-dom";

const Item = ({ imgUrl, text, onClick }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPositionY: "center",
        backgroundSize: "cover",
      }}
      className="item"
    >
      <div className="pb-0">
        <Text fontFam="Domine" fontWeight="bold" fontSize="24px" color="white">
          {text}
        </Text>
      </div>
      <hr />
      <div className="mb-4">
        <PrimaryButton onClick={onClick} width="140px" height="40px">
          <Text fontWeight="bold" fontSize="14px">
            Shop now
          </Text>
        </PrimaryButton>
      </div>
    </div>
  );
};

const BelowOOTW = (props) => {
  const history = useHistory();
  const handleLadies = () => {
    history.push(`/Ladies/Dresses`);
  };
  return (
    <div className="con">
      <Item imgUrl={itemImg1} text="Men" />
      <Item imgUrl={itemImg2} text="Ladies" onClick={handleLadies} />
      <Item imgUrl={itemImg3} text="Girls" />
      <Item imgUrl={itemImg4} text="Boys" />
    </div>
  );
};

export default BelowOOTW;
