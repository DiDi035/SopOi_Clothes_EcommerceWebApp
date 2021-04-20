import React from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as ProductStates from "../../states/product/states";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Text from "../../components/Text/Text";
import SizeBtn from "../../components/SizeBtn/SizeBtn";
import ColorBtn from "../../components/ColorBtn/ColorBtn";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import * as ProductActions from "../../states/product/action";
import * as CartActions from "../../states/cart/action";
import * as CartStates from "../../states/cart/states";
const ProductPage = ({}) => {
  const { id, typeCustomer, typeClothes, types } = useParams();
  const products = useSelector(ProductStates.getProducts);
  const isFetching = useSelector(ProductStates.getIsFetching);
  const isFetchingSuccess = useSelector(ProductStates.getIsFetchingSuccess);
  const [starHover, setStarHover] = React.useState(0);
  const [rating, setRating] = React.useState(0);
  const [size, setSize] = React.useState("");
  const [color, setColor] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [firstTimeFetch, setFirstTimeFetch] = React.useState(true);
  const dispatch = useDispatch();
  const cartItems = useSelector(CartStates.getItems);
  const [disable, setDisable] = React.useState(true);
  const filters = useSelector(ProductStates.getFilters);
  const handleClickSize = (clickSize) => {
    setSize(clickSize);
    setQuantity(0);
  };
  const handleColorClick = (clickColor) => {
    setColor(clickColor);
    setQuantity(0);
  };
  const inc = () => {
    let i = 0,
      j = 0;
    for (; i < filters.length; ++i) {
      if (filters[i].color == color && filters[i].size == size) {
        break;
      }
    }
    for (; j < cartItems.length; ++j) {
      if (cartItems[j].color == color && cartItems[j].size == size) {
        break;
      }
    }
    if (j < cartItems.length) {
      if (filters[i].stock > cartItems[j].quantity + quantity)
        setQuantity((prev) => prev + 1);
    } else {
      if (filters[i].stock > quantity) setQuantity((prev) => prev + 1);
    }
  };
  const dec = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleAddToCart = () => {
    for (let i = 0; i < cartItems.length; ++i) {
      if (
        cartItems[i].id == id &&
        cartItems[i].color == color &&
        cartItems[i].size == size
      ) {
        dispatch(CartActions.UpdateCart(quantity, i));
        setSize("");
        setColor("");
        setQuantity(0);
        return;
      }
    }
    dispatch(
      CartActions.AddToCart(id, {
        color,
        size,
        quantity,
        name: products[0].name,
        price: products[0].price,
        typeCustomer: typeCustomer,
        typeClothes: typeClothes,
        types: types,
      })
    );
    setSize("");
    setColor("");
    setQuantity(0);
  };
  React.useEffect(() => {
    if (firstTimeFetch) {
      dispatch(ProductActions.fetchProduct(id, 0, "ids"));
      dispatch(ProductActions.fetchFilters(id));
      setFirstTimeFetch(false);
    }
    if (color != "" && size != "" && quantity > 0) setDisable(false);
    else setDisable(true);
  }, [color, size, quantity]);
  return (
    <div className="proCon">
      <div className="breadCon">
        {!isFetching && (
          <Breadcrumb cumbs={[typeCustomer, typeClothes, products[0].name]} />
        )}
      </div>
      <div className="detailCon">
        <div className="picture">
          <div className="minorPicture">
            <div className="minorItem"></div>
            <div className="minorItem"></div>
            <div className="minorItem"></div>
            <div className="minorItem"></div>
          </div>
          <div className="mainPicture"></div>
        </div>
        <div className="filter">
          <div>
            {!isFetching && isFetchingSuccess && (
              <div>
                <Text color="dark-grey" fontWeight="normal" fontSize="24px">
                  {products[0].name}
                </Text>
              </div>
            )}
            {!isFetching && isFetchingSuccess && (
              <div>
                <Text color="dark-grey" fontWeight="lighter" fontSize="24px">
                  ${products[0].price}
                </Text>
              </div>
            )}
            <div>
              {[...Array(5)].map((item, i) => {
                const ratingValue = i + 1;
                return (
                  <span
                    key={i}
                    onMouseEnter={() => setStarHover(ratingValue)}
                    onMouseLeave={() => setStarHover(0)}
                    onClick={() => setRating(ratingValue)}
                    style={{
                      color:
                        ratingValue <= (starHover || rating) ? "#FFFF00" : "",
                    }}
                    className="icon-star"
                  ></span>
                );
              })}
              <Text color="dark-grey" fontSize="12px">
                {" "}
                | 0 review
              </Text>
            </div>
          </div>
          <div className="size">
            <Text color="dark-grey" fontSize="14px" fontWeight="normal">
              Size
            </Text>
            <div className="sizeBtns">
              <SizeBtn
                size="S"
                chosenSize={size}
                onClick={() => handleClickSize("S")}
              />
              <SizeBtn
                marginLeft="1rem"
                size="M"
                chosenSize={size}
                onClick={() => handleClickSize("M")}
              />
              <SizeBtn
                marginLeft="1rem"
                size="L"
                chosenSize={size}
                onClick={() => handleClickSize("L")}
              />
              <SizeBtn
                marginLeft="1rem"
                size="XL"
                chosenSize={size}
                onClick={() => handleClickSize("XL")}
              />
            </div>
          </div>
          <div className="color">
            <Text color="dark-grey" fontSize="14px" fontWeight="normal">
              Color
            </Text>
            <div className="colorBtns">
              <ColorBtn
                color="rgba(255, 195, 113, 0.5)"
                chosenColor={color}
                onClick={() => handleColorClick("rgba(255, 195, 113, 0.5)")}
              />
              <ColorBtn
                marginLeft="1rem"
                color="rgba(95, 109, 255, 0.5)"
                chosenColor={color}
                onClick={() => handleColorClick("rgba(95, 109, 255, 0.5)")}
              />
              <ColorBtn
                marginLeft="1rem"
                color="rgba(255, 161, 95, 0.5)"
                chosenColor={color}
                onClick={() => handleColorClick("rgba(255, 161, 95, 0.5)")}
              />
              <ColorBtn
                marginLeft="1rem"
                color="rgba(61, 61, 63, 0.5)"
                chosenColor={color}
                onClick={() => handleColorClick("rgba(61, 61, 63, 0.5)")}
              />
              <ColorBtn
                marginLeft="1rem"
                color="rgba(237, 237, 237, 0.5)"
                chosenColor={color}
                onClick={() => handleColorClick("rgba(237, 237, 237, 0.5)")}
              />
            </div>
          </div>
          <div className="quantity">
            <Text color="dark-grey" fontSize="14px" fontWeight="normal">
              Quantity
            </Text>
            <QuantitySelector
              marginLeft="1rem"
              quantity={quantity}
              inc={inc}
              dec={dec}
            />
          </div>
          <PrimaryButton
            disabled={disable}
            bgColor="#5f6dff"
            onClick={handleAddToCart}
          >
            Add to cart
          </PrimaryButton>
          <hr />
          <div className="modelInfo">
            <Text fontSize="12px" color="dark-grey">
              Model wearing size S
            </Text>
            <Text fontSize="12px" color="dark-grey" fontWeight="lighter">
              - Chest 36"
            </Text>
            <Text fontSize="12px" color="dark-grey" fontWeight="lighter">
              - Length 25.75"
            </Text>
          </div>
        </div>
        <div className="recomend">
          <div className="recommendText">
            <div className="moreFrom">
              <Text color="dark-grey" fontSize="14px">
                More from
              </Text>
            </div>
            <div className="shopName">
              <Text color="greyish-brown" fontSize="14px">
                Zara
              </Text>
            </div>
          </div>
          <div className="recomendImg">
            <div className="recomendImgItem"></div>
            <div className="recomendImgItem"></div>
            <div className="recomendImgItem"></div>
            <div className="recomendImgItem"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
