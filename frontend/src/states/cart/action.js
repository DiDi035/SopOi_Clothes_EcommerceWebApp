import * as CartTypes from "./type";
import * as Fetch from "../../utils/Fetch";
import * as Common from "../../common/index";

export const AddToCart = (id, data) => {
  return {
    type: CartTypes.ADD_TO_CART,
    payload: { ...data, id: id },
  };
};

export const RemoveFromCart = (i) => {
  console.log(i);
  return { type: CartTypes.REMOVE_FROM_CART, payload: i };
};

export const UpdateCart = (data, index) => {
  return {
    type: CartTypes.UPDATE_CART,
    payload: {
      update: data,
      index: index,
    },
  };
};

export const submitCart = (cartItems, userId) => {
  return async (dispatch) => {
    try {
      dispatch(CartTypes.SUBMITING_START);
      const resp = await Fetch.post(
        `${Common.DOMAIN}${Common.PORT}/order/new`,
        { orders: cartItems, userId: userId }
      );
      if (!resp || !resp.data || !resp.data.valid)
        throw new Error(resp.data.message);
      dispatch(CartTypes.SUBMITING_SUCCESS);
    } catch (error) {
      dispatch(CartTypes.SUBMITING_FAILED);
    }
  };
};
