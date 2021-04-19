import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Text from "../../components/Text/Text";
import "./CartPage.css";
import { Link } from "react-router-dom";
import ColorBtn from "../../components/ColorBtn/ColorBtn";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import * as CartStates from "../../states/cart/states";
import { useSelector, useDispatch } from "react-redux";
import * as CartActions from "../../states/cart/action";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(CartStates.getItems);
  const handleRemoveFromCart = (i) => {
    console.log("asdasdadsa");
    dispatch(CartActions.RemoveFromCart(i));
  };
  const handleSubmitCart = () => {};
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div className="con">
        <div style={{ marginBottom: "2rem" }}>
          <Text color="dark-grey" fontSize="32px">
            My Bag
          </Text>
        </div>
        <div className="minorCon">
          <div className="list">
            <div className="ListItem">
              <div className="Product">
                <Text fontWeight="bold" fontSize="14px" color="dark-grey">
                  Product
                </Text>
              </div>
              <div className="Color center">
                <Text fontWeight="bold" fontSize="14px" color="dark-grey">
                  Color
                </Text>
              </div>
              <div className="Size center">
                <Text fontWeight="bold" fontSize="14px" color="dark-grey">
                  Size
                </Text>
              </div>
              <div className="Quantity center">
                <Text fontWeight="bold" fontSize="14px" color="dark-grey">
                  Quantity
                </Text>
              </div>
              <div className="Amount center">
                <Text fontWeight="bold" fontSize="14px" color="dark-grey">
                  Amount
                </Text>
              </div>
            </div>
            {cartItems.map((item, i) => {
              return (
                <div>
                  <hr
                    className="totalLineBreak"
                    style={{ width: "805px", marginLeft: "0" }}
                  />
                  <div className="ListItem" style={{ height: "150px" }}>
                    <div className="Product">
                      <div className="ProductImg"></div>
                      <div className="ProductName">
                        <Text fontSize="17px" color="dark-grey">
                          {item.name}
                        </Text>
                        <div className="productBtn">
                          <Link
                            to={`/${item.typeCustomer}/${item.typeClothes}/${item.types}/${item.id}`}
                          >
                            Change
                          </Link>
                          <Link onClick={() => handleRemoveFromCart(i)}>
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="Color center" style={{ paddingTop: "6px" }}>
                      <ColorBtn color={item.color} />
                    </div>
                    <div className="Size center" style={{ paddingTop: "6px" }}>
                      <Text fontSize="20px" color="dark-grey">
                        {item.size}
                      </Text>
                    </div>
                    <div className="Quantity center">
                      <QuantitySelector quantity={item.quantity} />
                    </div>
                    <div
                      className="Amount center"
                      style={{ paddingTop: "6px" }}
                    >
                      <Text fontSize="15px" color="dark-grey">
                        ${item.price * item.quantity}
                      </Text>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total">
            <Text fontSize="14px" fontWeight="bold" color="dark-grey">
              Total
            </Text>
            <div className="totalTable">
              <div className="totalTableRow">
                <div className="totalTableRowLeft">
                  <Text color="dark-grey">Shiping and Handling:</Text>
                </div>
                <div className="totalTableRowRight">
                  <Text color="dark-grey">Free</Text>
                </div>
              </div>
              <div className="totalTableRow">
                <div className="totalTableRowLeft">
                  <Text fontSize="14px" color="dark-grey">
                    Total product:
                  </Text>
                </div>
                <div className="totalTableRowRight">
                  <Text fontSize="14px" color="dark-grey">
                    ${cartItems.reduce((a, b) => a + b.price * b.quantity, 0)}
                  </Text>
                </div>
              </div>
              <hr className="totalLineBreak" />
              <div className="totalTableRow">
                <div className="totalTableRowLeft">
                  <Text fontSize="14px" fontWeight="bold" color="dark-grey">
                    Subtotal:
                  </Text>
                </div>
                <div className="totalTableRowRight">
                  <Text fontSize="14px" fontWeight="bold" color="dark-grey">
                    ${cartItems.reduce((a, b) => a + b.price * b.quantity, 0)}
                  </Text>
                </div>
              </div>
            </div>
            <PrimaryButton
              width="330px"
              bgColor="#ff5f6d"
              onClick={handleSubmitCart}
            >
              Check out
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
