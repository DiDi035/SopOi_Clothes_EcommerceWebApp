import React from "react";
import "./CategoriesList.css";
import Text from "../../components/Text";
import Link from "../../components/Link";
import DownArrow from "../../assets/images/downArrow.svg";

const CategoriesList = ({
  typeClothes = "Dresses",
  chosen = "Rompers / Jumpsuits",
}) => {
  const cate = [
    "Rompers / Jumpsuits",
    "Casual dresses",
    "Going out dresses",
    "Party / Ocassion dresses",
    "Mini dresses",
    "Maxi / Midi dresses",
    "Sets",
  ];
  const filters = ["Size", "Color", "Brand", "Price", "Available"];
  return (
    <div>
      <div className="wrapper">
        <Text fontWeight="bold" fontSize="16px" color="dark-grey">
          Category
        </Text>
        <div className="cateList d-flex flex-column">
          <Text fontSize="14px" color="dark-grey">
            All {typeClothes.toLowerCase()}
          </Text>
          <hr className="linebreak headerLinebreak mt-2 ml-0 mb-0" />
          {cate.map((item) => {
            let color = "greyish-brown";
            if (item === chosen) {
              color = "bright-orange";
            }
            return (
              <div className="mt-2 mb-3">
                <Link
                  fontWeight="normal"
                  fontSize="14px"
                  color={color}
                  linkTo="#"
                >
                  {item}
                </Link>
              </div>
            );
          })}
        </div>
        <hr className="linebreak listLinebreak ml-0 mt-4 mb-4" />
        <Text fontWeight="bold" fontSize="16px" color="dark-grey">
          Filter
        </Text>
        <div className="cateList d-flex flex-column">
          {filters.map((item) => (
            <div className="filterBtn row">
              <div className="col-10">
                <Text color="greyish-brown" fontWeight="normal" fontSize="14px">
                  {item}
                </Text>
              </div>
              <div className="col-2">
                <span className="icon-downArrow"></span>
              </div>
              <hr className="linebreak filterLinebreak mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
