import React from "react";
import "./ProductListing.css";
import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import * as ProductStates from "../../states/product/states";
import * as ProductActions from "../../states/product/action";

const ProductListing = ({ typeCustomer, typeClothes, types }) => {
  const products = useSelector(ProductStates.getProducts);
  const categories = useSelector(ProductStates.getCategories);
  return (
    <div className="listCon">
      {types == undefined
        ? products.map((item) => {
            return (
              <div className="listItem">
                <Card name={item.name} price={item.price} />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ProductListing;
