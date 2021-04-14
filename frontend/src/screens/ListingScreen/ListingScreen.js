import React from "react";
import "./ListingScreen.css";
import StickySideBar from "../../Container/StickySideBar/StickySideBar";
import ProductListing from "../../Container/ProductListing/ProductListing";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as ProductStates from "../../states/product/states";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const ListingScreen = () => {
  const { typeCustomer, typeClothes, types } = useParams();
  return (
    <div className="row">
      {
        <div className="col-3 d-flex flex-row justify-content-end sidebar">
          <StickySideBar
            typeClothes={typeClothes}
            typeCustomer={typeCustomer}
            types={types}
          />
        </div>
      }
      {
        <div className="col-9 proListCon">
          <Breadcrumb cumbs={[typeCustomer, typeClothes]} />
          <ProductListing
            typeClothes={typeClothes}
            typeCustomer={typeCustomer}
            types={types}
          />
        </div>
      }
    </div>
  );
};

export default ListingScreen;
