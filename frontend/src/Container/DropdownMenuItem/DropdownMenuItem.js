import React from "react";
import Text from "../../components/Text";
import Link from "../../components/Link";
import "./DropdownMenuItem.css";

const DropdownMenuItem = ({
  children,
  width,
  haveIcon = true,
  subMenu = null,
}) => {
  const [openSubMenu, setOpenSubMenu] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const handleOpenSubMenu = () => {
    setOpenSubMenu((prev) => {
      if (prev) setFontWeight("normal");
      else setFontWeight("bold");
      return !prev;
    });
  };
  return (
    <div>
      <div
        className="filterBtn d-flex flex-row justify-content-start"
        style={{ width: width }}
        onClick={handleOpenSubMenu}
      >
        <div className="filter">
          <Text color="greyish-brown" fontWeight={fontWeight} fontSize="14px">
            {children}
          </Text>
        </div>
        {haveIcon ? (
          <div className="iconCon">
            <span className="icon-downArrow"></span>
          </div>
        ) : null}
      </div>
      {openSubMenu ? subMenu : null}
    </div>
  );
};

export default DropdownMenuItem;
