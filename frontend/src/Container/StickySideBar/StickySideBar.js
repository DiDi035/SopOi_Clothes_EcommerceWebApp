import React from "react";
import "./StickySideBar.css";
import Text from "../../components/Text/Text";
import Link from "../../components/Link/Link";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";
import { filters, categories } from "../../common/index";

const MenuItems = ({ children, chosen }) => {
  return (
    <div className="mt-2 mb-3" key={new Date().toString()}>
      <Link
        fontWeight="normal"
        fontSize="14px"
        color={chosen ? "bright-orange" : "greyish-brown"}
        linkTo="#"
        pointerEvent="visible"
      >
        {children}
      </Link>
    </div>
  );
};

const StickySideBar = ({ typeCustomer, typeClothes, types }) => {
  return (
    <div className="sidebar d-flex flex-column">
      <div className="wrapper">
        <Text fontWeight="bold" fontSize="16px" color="dark-grey">
          Category
        </Text>
        <div className="cateList d-flex flex-column">
          <Text fontSize="14px" color="dark-grey">
            All {types != undefined ? typeClothes.toLowerCase() : null}
          </Text>
          <hr className="linebreak headerLinebreak mt-2 ml-0 mb-0" />
          {types == undefined
            ? Object.entries(categories[typeCustomer]).map((item) => {
                return (
                  <MenuItems chosen={item[0] == typeClothes}>
                    {item[0]}
                  </MenuItems>
                );
              })
            : categories[typeCustomer][typeClothes].map((item) => {
                return <MenuItems chosen={item == types}>{item}</MenuItems>;
              })}
        </div>
        <hr className="linebreak listLinebreak ml-0 mt-4 mb-4" />
        <Text fontWeight="bold" fontSize="16px" color="dark-grey">
          Filter
        </Text>
        <div className="cateList d-flex flex-column">
          {filters.map((item) => (
            <div key={new Date().toString()}>
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
