import React from "react";
import "./StickySideBar.css";
import Text from "../../components/Text/Text";
import Link from "../../components/Link/Link";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";
import { filters, categories } from "../../common/index";
import { useHistory } from "react-router-dom";

const MenuItems = ({ children, chosen, onClick }) => {
  return (
    <div className="mt-2 mb-3" onClick={onClick}>
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
  const history = useHistory();
  const handleOnLickCategory = (item) => {
    history.push(`/${typeCustomer}/${typeClothes}/${item.replace(" ", ".")}`);
  };
  return (
    <div className="sidebar d-flex flex-column">
      <div className="wrapper">
        <Text fontWeight="bold" fontSize="16px" color="dark-grey">
          Category
        </Text>
        <div className="cateList d-flex flex-column">
          <Text fontSize="14px" color="bright-orange" fontWeight="normal">
            All {typeClothes}
          </Text>
          <hr className="linebreak headerLinebreak mt-2 ml-0 mb-0" />
          {categories[typeCustomer][typeClothes].map((item, index) => {
            return (
              <MenuItems
                key={index}
                onClick={() => handleOnLickCategory(item)}
                chosen={
                  types === undefined ? false : item == types.replace(".", " ")
                }
              >
                {item.replace("-", " / ")}
              </MenuItems>
            );
          })}
        </div>
        <hr className="linebreak listLinebreak ml-0 mt-4 mb-4" />
        <Text fontWeight="bold" fontSize="16px" color="dark-grey">
          Filter
        </Text>
        <div className="cateList d-flex flex-column">
          {filters.map((item, index) => (
            <div key={index}>
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
