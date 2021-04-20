import React from "react";
import "./DashboardMenuItem.css";
import Text from "../../components/Text/Text";
import Colors from "../../assets/colors/Colors";

const DashboardMenuItem = ({ children, logo, chosen, onClick }) => {
  return (
    <div className="dbItem" onClick={onClick}>
      <div
        className="initRect"
        style={{
          backgroundColor: `${chosen ? Colors.primary : ""}`,
        }}
      ></div>
      <span
        className={logo + " lg"}
        style={{
          color: `${chosen ? Colors.primary : ""}`,
        }}
      ></span>
      <Text color={chosen ? "primary" : "charcoal-grey"}>{children}</Text>
    </div>
  );
};

export default DashboardMenuItem;
