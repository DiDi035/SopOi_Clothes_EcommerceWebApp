import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import brandIcon from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/cart.svg";
import searchIcon from "../../assets/images/search.svg";
import { Link } from "react-router-dom";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";
import { SubMenuForLadies } from "../../common/index";
import { useSelector, useDispatch } from "react-redux";
import * as UserStates from "../../states/user/states";
import * as UserActions from "../../states/user/action";
import * as CartStates from "../../states/cart/states";
import Text from "../../components/Text/Text";
import * as Common from "../../common/index";

const Header = ({ triggerForms }) => {
  const handleOpenDropDown = () => {
    setOpenDropdown((prev) => !prev);
  };
  const logout = () => {
    dispatch(UserActions.logout());
  };
  const handleCartClick = () => {
    setCartList((prev) => !prev);
  };
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const isLogin = useSelector(UserStates.getIsSuccess);
  const cartItems = useSelector(CartStates.getItems);
  const [cartList, setCartList] = React.useState(false);
  const ava = useSelector(UserStates.getUserAva);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="bottomBorder">
          <div className="container-fluid row navCoin">
            <div class="d-none col-lg-4 d-lg-flex flex-row justify-content-center w-25">
              <form method="POST" action="#" className="searchCon">
                <input type="text" placeholder="Search" />
                <span className="icon-search"></span>
              </form>
            </div>
            <div class="d-none col-sm-6 col-lg-4 pb-2 d-sm-flex flex-row justify-content-center">
              <Link to="/homepage">
                <img src={brandIcon} alt="" />
              </Link>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 d-flex flex-row justify-content-center">
              {!isLogin && (
                <button
                  className="regBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#formModal"
                  type="button"
                  onClick={() => triggerForms(true, false)}
                >
                  Register
                </button>
              )}
              {!isLogin && (
                <button
                  onClick={() => triggerForms(false, true)}
                  className="mx-3 logBtn"
                >
                  Log In
                </button>
              )}
              {isLogin && (
                <div>
                  <div
                    className="ava"
                    style={{
                      backgroundImage: `url(${Common.DOMAIN}${Common.PORT}${ava})`,
                    }}
                    onClick={handleOpenDropDown}
                  ></div>
                  {openDropdown && (
                    <div className="dropdown">
                      <div className="dowpdownItem">Account setting</div>
                      <div onClick={logout} className="dowpdownItem">
                        Log out
                      </div>
                    </div>
                  )}
                </div>
              )}
              <button className=" cartBtn" onClick={handleCartClick}>
                <span class="icon-cart"></span>
                {cartItems.length > 0 && isLogin && (
                  <div className="oval">{cartItems.length}</div>
                )}
              </button>
              {cartList && (
                <div className="cartDropdown">
                  {cartItems.map((item, i) => {
                    return (
                      <div key={i} className="cartDowpdownItem cartItems">
                        <div className="cartImg"></div>
                        <div className="cartInfo">
                          <Text
                            color="greyish-brown"
                            fontWeight="bold"
                            fontSize="14px"
                          >
                            {item.name}
                          </Text>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              paddingTop: "1rem",
                            }}
                          >
                            <div className="cartPrice">
                              <Text
                                fontSize="12px"
                                fontWeight="normal"
                                color="greyish-brown"
                              >
                                ${item.price}
                              </Text>
                            </div>
                            <div className="cartFilter">
                              <Text
                                fontSize="12px"
                                fontWeight="normal"
                                color="greyish-brown"
                              >
                                {item.size} . {item.quantity} pcs
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="cartDowpdownItem">
                    <Link to="/cart" className="viewCart">
                      View cart
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg">
        <div className="bottomBorder">
          <div className="w-100 d-flex flex-row justify-content-center downMenuCoin">
            <div className="px-3">
              <DropdownMenuItem width="50px">Men</DropdownMenuItem>
            </div>
            <div className="px-3">
              <DropdownMenuItem
                width="70px"
                subMenu={<SubMenuForLadies width="70px" />}
              >
                Ladies
              </DropdownMenuItem>
            </div>
            <div className="px-3">
              <DropdownMenuItem width="50px">Boys</DropdownMenuItem>
            </div>
            <div className="px-3">
              <DropdownMenuItem width="50px">Girls</DropdownMenuItem>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
