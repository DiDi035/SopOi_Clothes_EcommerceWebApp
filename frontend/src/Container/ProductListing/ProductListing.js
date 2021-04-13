import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Card from "../../components/Card/Card";
import * as ProductStates from "../../states/product/states";
import "./ProductListing.css";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";
import Text from "../../components/Text/Text";
import Pagination from "../../components/Pagination/Pagination";

const ProductListing = ({ typeCustomer, typeClothes, types }) => {
  const history = useHistory();
  const products = useSelector(ProductStates.getProducts);
  const categories = useSelector(ProductStates.getCategories);
  const curPage = useSelector(ProductStates.getPage);
  const [sort, setSort] = React.useState("Popularity");
  const [totalPage, setTotalPage] = React.useState(
    Math.trunc(products.length / 15) || 0
  );
  const handleItemClick = (id) => {
    console.log(id);
  };
  const filterProductByTypeClothes = () => {
    let mMap = new Map();
    for (let i = 0; i < categories.length; ++i) {
      if (categories[i].name == types) mMap.set(categories[i].productId, 1);
    }
    const chosenProducts = products.filter(
      (item) => mMap.get(item.id) !== undefined
    );
    if (chosenProducts.length <= 0) return null;
    return chosenProducts.map((item) => {
      return (
        <div className="listItem" key={item.id}>
          <Card
            onClick={() => handleItemClick(item.id)}
            name={item.name}
            price={item.price}
          />
        </div>
      );
    });
  };
  return (
    <div>
      <div className="sortCon">
        <DropdownMenuItem
          borderColor="white-four"
          fontSize="12px"
          width="179px"
          backgroundColor="white-five"
          focusBold={false}
        >
          Sort by:
          <Text color="dark-grey" fontWeight="bold" fontSize="12px">
            {"  " + sort}
          </Text>
        </DropdownMenuItem>
        <div style={{ marginLeft: "auto", marginRight: "14%" }}>
          <Pagination totalPage={totalPage} currentPage={curPage} />
        </div>
      </div>
      <div className="listCon">
        {types == undefined
          ? products.map((item) => {
              return (
                <div className="listItem" key={item.id}>
                  <Card
                    onClick={() => handleItemClick(item.id)}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              );
            })
          : filterProductByTypeClothes()}
      </div>
      <div className="sortCon">
        <div style={{ marginLeft: "auto", marginRight: "14%" }}>
          <Pagination currentPage={curPage} totalPage={totalPage} />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
