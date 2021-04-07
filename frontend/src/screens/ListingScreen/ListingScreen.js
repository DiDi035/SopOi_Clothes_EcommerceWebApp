import React from "react";
import "./ListingScreen.css";
import StickySideBar from "../../Container/StickySideBar/StickySideBar";
import ProductListing from "../../Container/ProductListing/ProductListing";

const ListingScreen = () => {
  return (
    <div className="row">
      <div className="col-3 d-flex flex-row justify-content-end pt-5">
        <StickySideBar />
      </div>
      <div className="col-9 pt-5">
        <ProductListing />
      </div>
    </div>
  );
};

export default ListingScreen;
