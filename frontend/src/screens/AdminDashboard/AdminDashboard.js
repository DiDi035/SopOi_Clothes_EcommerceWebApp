import React from "react";
import "./AdminDashboard.css";
import Brand from "../../assets/images/logo.svg";
import DashboardMenuItem from "../../components/DashboardMenuItem/DashboardMenuItem";
import Text from "../../components/Text/Text";
import ListOrders from "../../Container/ListOrders/ListOrders";
import { useSelector, useDispatch } from "react-redux";
import * as OrderStates from "../../states/order/states";
import * as OrderActions from "../../states/order/action";
import { ORDER_LIMIT } from "../../common/index";
import Pagination from "../../components/Pagination/Pagination";

const OrderPagination = ({ num }) => {
  return <div className="orderPagNum">{num}</div>;
};

const AdminDashboard = () => {
  const menuIcon = ["icon-orders-dark", "icon-products-orange"];
  const menu = ["Orders", "Products"];
  const [selected, setSelected] = React.useState(0);
  const page = useSelector(OrderStates.getPage);
  const totalPage = useSelector(OrderStates.getTotalPage);
  const isFetching = useSelector(OrderStates.getIsFetching);
  const orders = useSelector(OrderStates.getOrders);
  const handleSelect = (i) => {
    setSelected(i);
  };
  const handleIncPage = () => {};
  const handleDecPage = () => {};
  return (
    <div className="dashboardCon">
      <div className="menuBar">
        <div className="brand">
          <img src={Brand} className="brandLogo" />
        </div>
        <div className="menuSection">
          {menu.map((item, i) => (
            <DashboardMenuItem
              key={i}
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
          <div style={{ width: "100%", height: "85%" }}>
            <ListOrders />
          </div>
          {!isFetching && (
            <div className="orderPag">
              <div
                style={{
                  paddingLeft: "2rem",
                  height: "100%",
                  flex: "0 1 30%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Text
                  color="charcoal-grey"
                  fontSize="14px"
                  fontWeight="500"
                >{`Show ${page + 1} to ${
                  orders.length
                } of ${totalPage} entries`}</Text>
              </div>
              <div
                style={{
                  height: "100%",
                  flex: "0 1 15%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Pagination
                  inc={handleIncPage}
                  dec={handleDecPage}
                  totalPage={
                    totalPage % ORDER_LIMIT == 0
                      ? totalPage / ORDER_LIMIT
                      : Math.trunc(totalPage / ORDER_LIMIT) + 1
                  }
                  currentPage={page}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
