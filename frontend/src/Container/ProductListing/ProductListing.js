import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { sortMenuTitle } from "../../common/index";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Text from "../../components/Text/Text";
import * as ProductActions from "../../states/product/action";
import * as ProductStates from "../../states/product/states";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";
import "./ProductListing.css";

const sortMenu = () => {
  return (
    <div>
      {sortMenuTitle.map((item) => {
        return (
          <DropdownMenuItem haveIcon={false} width="179px">
            {item}
          </DropdownMenuItem>
        );
      })}
    </div>
  );
};

const ProductListing = ({ typeCustomer, typeClothes, types }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(ProductStates.getProducts);
  const categories = useSelector(ProductStates.getCategories);
  const [page, setPage] = React.useState(0);
  const [sort, setSort] = React.useState("Popularity");
  const isFetching = useSelector(ProductStates.getIsFetching);
  const totalPage = useSelector(ProductStates.getTotalPage);
  const handleIncPage = () => {
    setPage((prev) => (prev < Math.trunc(totalPage / 15) ? prev + 1 : prev));
  };
  const handleDecPage = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleItemClick = (id) => {
    history.push(`/${typeCustomer}/${typeClothes}/${types}/${id}`);
  };
  React.useEffect(() => {
    if (types === undefined) {
      let ids = [];
      for (let i = 0; i < categories.length; ++i) {
        if (categories[i].type == typeClothes)
          ids.push(categories[i].productId);
      }
      dispatch(ProductActions.fetchProduct(ids, page, "ids"));
    } else {
      let ids = [];
      for (let i = 0; i < categories.length; ++i) {
        if (categories[i].name == types.replace(".", " "))
          ids.push(categories[i].productId);
      }
      dispatch(ProductActions.fetchProduct(ids, page, "ids"));
    }
  }, [page, types]);
  return (
    <div>
      <div className="sortCon">
        <DropdownMenuItem
          paddingLeft="0.5rem"
          subMenu={sortMenu}
          borderColor="white-four"
          fontSize="12px"
          width="179px"
          backgroundColor="white-five"
          focusBold={false}
        >
          Sort By: &nbsp;
          <Text fontWeight="bold" color="dark-grey" fontSize="12px">
            {sort}
          </Text>
        </DropdownMenuItem>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "10%",
            width: "12%",
          }}
        >
          <Pagination
            inc={handleIncPage}
            dec={handleDecPage}
            totalPage={Math.trunc(totalPage / 15)}
            currentPage={page}
          />
        </div>
      </div>
      {!isFetching && (
        <div className="listCon">
          {products.map((item) => {
            return (
              <div className="listItem" key={item.id}>
                <Card
                  onClick={() => handleItemClick(item.id)}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                />
              </div>
            );
          })}
        </div>
      )}
      <div className="sortCon">
        <div
          style={{
            marginLeft: "auto",
            marginRight: "10%",
            width: "12%",
          }}
        >
          <Pagination
            inc={handleIncPage}
            dec={handleDecPage}
            currentPage={page}
            totalPage={Math.trunc(totalPage / 15)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
