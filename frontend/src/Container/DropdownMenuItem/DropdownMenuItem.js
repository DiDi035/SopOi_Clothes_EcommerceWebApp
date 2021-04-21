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
  paddingLeft,
}) => {
  const [openSubMenu, setOpenSubMenu] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("500");
  const handleOpenSubMenu = () => {
    setOpenSubMenu((prev) => {
      if (prev) setFontWeight("500");
      else {
        if (focusBold) setFontWeight("bold");
      }
      return !prev;
    });
  };
  return (
    <div>
      <div
        className="filterBtn"
        style={{
          width: width,
          background: Colors[backgroundColor],
          border: `1px solid ${Colors[borderColor]}`,
          paddingLeft: `${paddingLeft ? paddingLeft : ""}`,
        }}
        onClick={handleOpenSubMenu}
      >
        <div className="menuDropdownEle">
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
