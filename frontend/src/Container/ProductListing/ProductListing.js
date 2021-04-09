import React from "react";
import "./ProductListing.css";
import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import * as ProductStates from "../../states/product/states";
import * as ProductActions from "../../states/product/action";

const ProductListing = ({ typeCustomer, typeClothes, types }) => {
  const product = useSelector(ProductStates.getData);
  const isFetching = useSelector(ProductStates.getIsFetching);
  const isFetchingSuccess = useSelector(ProductStates.getIsFetchingSuccess);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(ProductActions.fetchData(typeCustomer, typeClothes, types));
  }, []);
  return (
    <div className="listCon">
      {!isFetching && isFetchingSuccess
        ? product.map((item) => {
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
