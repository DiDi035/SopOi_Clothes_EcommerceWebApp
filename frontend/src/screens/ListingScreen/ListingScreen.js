import React from "react";
import "./ListingScreen.css";
import StickySideBar from "../../Container/StickySideBar/StickySideBar";
import ProductListing from "../../Container/ProductListing/ProductListing";
import Text from "../../components/Text/Text";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as ProductActions from "../../states/product/action";
import * as ProductStates from "../../states/product/states";

const ListingScreen = () => {
  const { typeCustomer, typeClothes, types } = useParams();
  const products = useSelector(ProductStates.getProducts);
  const categories = useSelector(ProductStates.getCategories);
  const isFetching = useSelector(ProductStates.getIsFetching);
  const isFetchingSuccess = useSelector(ProductStates.getIsFetchingSuccess);
  const page = useSelector(ProductStates.getPage);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (types === undefined)
      dispatch(ProductActions.fetchProduct(typeCustomer, page));
  }, []);
  return (
    <div className="row">
      {!isFetching && (
        <div className="col-3 d-flex flex-row justify-content-end sidebar">
          <StickySideBar
            typeClothes={typeClothes}
            typeCustomer={typeCustomer}
            types={types}
          />
        </div>
      )}
      {!isFetching && (
        <div className="col-9 proListCon">
          <div className="title">{`${typeCustomer} / ${typeClothes}`}</div>
          <ProductListing
            typeClothes={typeClothes}
            typeCustomer={typeCustomer}
            types={types}
          />
        </div>
      )}
    </div>
  );
};

export default ListingScreen;
