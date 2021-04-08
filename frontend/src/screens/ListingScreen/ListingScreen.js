import React from "react";
import "./ListingScreen.css";
import StickySideBar from "../../Container/StickySideBar/StickySideBar";
import ProductListing from "../../Container/ProductListing/ProductListing";

const ListingScreen = () => {
  return (
    <div className="row">
      <div className="col-3 d-flex flex-row justify-content-end mt-5">
        <StickySideBar />
      </div>
      <div className="col-9 mt-5 proListCon">
        <ProductListing />
      </div>
    </div>
  );
};

export default ListingScreen;
