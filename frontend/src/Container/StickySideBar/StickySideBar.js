import React from "react";
import "./StickySideBar.css";
import Text from "../../components/Text/Text";
import Link from "../../components/Link/Link";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";
import { filters, categories } from "../../common/index";

const StickySideBar = ({
  typeCustomer = "Ladies",
  typeClothes = "Dresses",
  chosen = "Rompers / Jumpsuits",
}) => {
  return (
    <div className="sidebar d-flex flex-column">
      <div className="wrapper">
        <Text fontWeight="bold" fontSize="16px" color="dark-grey">
          Category
        </Text>
        <div className="cateList d-flex flex-column">
          <Text fontSize="14px" color="dark-grey">
            All {typeClothes.toLowerCase()}
          </Text>
          <hr className="linebreak headerLinebreak mt-2 ml-0 mb-0" />
          {categories[typeCustomer][typeClothes].map((item) => {
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
                  pointerEvent="visible"
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
            <div>
              <DropdownMenuItem>{item}</DropdownMenuItem>
              <hr className="linebreak filterLinebreak mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickySideBar;
