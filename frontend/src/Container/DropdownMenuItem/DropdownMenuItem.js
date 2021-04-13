import React from "react";
import Text from "../../components/Text/Text";
import Link from "../../components/Link/Link";
import "./DropdownMenuItem.css";
import Colors from "../../assets/colors/Colors";

const DropdownMenuItem = ({
  children,
  width,
  haveIcon = true,
  subMenu = null,
  fontSize = "14px",
  backgroundColor,
  borderColor,
  focusBold = true,
}) => {
  const [openSubMenu, setOpenSubMenu] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const handleOpenSubMenu = () => {
    setOpenSubMenu((prev) => {
      if (prev) setFontWeight("normal");
      else {
        if (focusBold) setFontWeight("bold");
      }
      return !prev;
    });
  };
  return (
    <div>
      <div
        className="filterBtn d-flex flex-row justify-content-start"
        style={{
          width: width,
          background: Colors[backgroundColor],
          border: `1px solid ${Colors[borderColor]}`,
          paddingLeft: "5%",
        }}
        onClick={handleOpenSubMenu}
      >
        <div className="filter">
          <Text
            color="greyish-brown"
            fontWeight={fontWeight}
            fontSize={fontSize}
          >
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
