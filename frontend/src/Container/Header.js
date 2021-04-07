import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/stylesheets/Header.css";
import brandIcon from "../assets/images/logo.svg";
import cartIcon from "../assets/images/cart.svg";
import searchIcon from "../assets/images/search.svg";
import { Link } from "react-router-dom";
import DropdownMenuItem from "./DropdownMenuItem/DropdownMenuItem";

const Header = ({ triggerForms }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid row navCoin">
          <div class="d-none col-lg-4 d-lg-flex flex-row justify-content-center w-25">
            <form method="POST" action="#" className="searchCon">
              <input type="text" placeholder="Search" />
              <span className="icon-search"></span>
            </form>
          </div>
          <div class="d-none col-sm-6 col-lg-4 pb-2 d-sm-flex flex-row justify-content-center">
            <Link to="/">
              <img src={brandIcon} alt="" />
            </Link>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 d-flex flex-row justify-content-center">
            <button
              className="regBtn"
              data-bs-toggle="modal"
              data-bs-target="#formModal"
              type="button"
              onClick={() => triggerForms(true, false)}
            >
              Register
            </button>
            <button
              onClick={() => triggerForms(false, true)}
              className="mx-3 logBtn"
            >
              Log In
            </button>
            <button className=" cartBtn">
              <span class="icon-cart"></span>
            </button>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg">
        <div className="w-100 d-flex flex-row justify-content-center downMenuCoin">
          <div className="px-3">
            <DropdownMenuItem width="50px">Men</DropdownMenuItem>
          </div>
          <div className="px-3">
            <DropdownMenuItem width="70px">Ladies</DropdownMenuItem>
          </div>
          <div className="px-3">
            <DropdownMenuItem width="50px">Boys</DropdownMenuItem>
          </div>
          <div className="px-3">
            <DropdownMenuItem width="50px">Girls</DropdownMenuItem>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
