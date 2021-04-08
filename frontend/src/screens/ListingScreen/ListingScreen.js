import React from "react";
import "./ListingScreen.css";
import StickySideBar from "../../Container/StickySideBar/StickySideBar";
import ProductListing from "../../Container/ProductListing/ProductListing";
import Text from "../../components/Text/Text";
import { useParams } from "react-router-dom";

const ListingScreen = () => {
  const { typePer, typeClothes } = useParams();
  return (
    <div className="row">
      <div className="col-3 d-flex flex-row justify-content-end sidebar">
        <StickySideBar typeClothes={typeClothes} typeCustomer={typePer} />
      </div>
      <div className="col-9 proListCon">
        <div className="title">
          <Text color="dark-grey" fontSize="14px">
            {`${typePer} / ${typeClothes}`}
          </Text>
        </div>
        <ProductListing />
      </div>
    </div>
  );
};

export default ListingScreen;
