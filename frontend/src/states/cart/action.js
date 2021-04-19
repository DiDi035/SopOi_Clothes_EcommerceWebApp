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

export const submitCart = () => {
  return async (dispatch) => {
    try {
      const resp = await Fetch.post(
        `${Common.DOMAIN}${Common.PORT}/submit`,
        {}
      );
    } catch (error) {}
  };
};
