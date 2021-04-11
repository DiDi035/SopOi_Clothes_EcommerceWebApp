import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import brandIcon from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/cart.svg";
import searchIcon from "../../assets/images/search.svg";
import { Link } from "react-router-dom";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";
import { SubMenuForLadies } from "../../common/index";
import { useSelector } from "react-redux";
import * as UserStates from "../../states/user/states";

const Header = ({ triggerForms }) => {
  const handleOpenDropDown = () => {
    setOpenDropdown((prev) => !prev);
  };
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const isLogin = useSelector(UserStates.getIsSuccess);
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
                  <div className="ava" onClick={handleOpenDropDown}></div>
                  {openDropdown && (
                    <div className="dropdown">
                      <div className="dowpdownItem">Account setting</div>
                      <div className="dowpdownItem">Log out</div>
                    </div>
                  )}
                </div>
              )}
              <button className=" cartBtn">
                <span class="icon-cart"></span>
              </button>
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
