import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/stylesheets/Header.css";
import brandIcon from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/cart.svg";
import searchIcon from "../../assets/images/search.svg";
import { Link } from "react-router-dom";

const Header = ({ triggerForms }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid row navCoin">
        <div class="d-none col-lg-4 d-lg-flex flex-row justify-content-center w-25">
          <div className="searchCon">
            <input type="text" />
            <img src={searchIcon} />
          </div>
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
            onClick={() => triggerForms(true, false)}>
            Register
          </button>
          <button
            onClick={() => triggerForms(false, true)}
            className="mx-3 logBtn">
            Log In
          </button>
          <button className=" cartBtn">
            <img src={cartIcon} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
