import React from "react";
import "./AdminDashboard.css";
import Brand from "../../assets/images/logo.svg";
import DashboardMenuItem from "../../components/DashboardMenuItem/DashboardMenuItem";
import Text from "../../components/Text/Text";

const AdminDashboard = () => {
  const menuIcon = ["icon-orders-dark", "icon-products-orange"];
  const menu = ["Orders", "Products"];
  const [selected, setSelected] = React.useState(0);
  const handleSelect = (i) => {
    setSelected(i);
  };
  return (
    <div className="dashboardCon">
      <div className="menuBar">
        <div className="brand">
          <img src={Brand} className="brandLogo" />
        </div>
        <div className="menuSection">
          {menu.map((item, i) => (
            <DashboardMenuItem
              onClick={() => handleSelect(i)}
              logo={menuIcon[i]}
              chosen={selected === i ? true : false}
            >
              {item}
            </DashboardMenuItem>
          ))}
        </div>
      </div>
      <div className="mainContent">
        <div className="dashboardHeader">
          <Text color="dark-grey" fontSize="28px" fontWeight="bold">
            Orders
          </Text>
          <div className="adminInfo"></div>
        </div>
        <div className="dashboardOption"></div>
        <div className="dashbaordCOntent">
          <div
            className="orderRow"
            style={{ borderBottom: "1px solid #ededed", height: "64px" }}
          >
            <div className="orderId">
              <Text color="greyish" fontSize="12px" fontWeight="bold">
                ORDER ID
              </Text>
            </div>
            <div className="orderDate">
              <Text color="greyish" fontSize="12px" fontWeight="bold">
                ORDERED DATE
              </Text>
            </div>
            <div className="orderDetail">
              <Text color="greyish" fontSize="12px" fontWeight="bold">
                DETAIL
              </Text>
            </div>
            <div className="orderTotal">
              <Text color="greyish" fontSize="12px" fontWeight="bold">
                TOTAL ($)
              </Text>
            </div>
            <div className="orderStatus">
              <Text color="greyish" fontSize="12px" fontWeight="bold">
                STATUS
              </Text>
            </div>
            <div className="orderAction"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
