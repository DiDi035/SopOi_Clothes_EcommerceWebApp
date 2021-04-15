import * as CartTypes from "./type";

export const AddToCart = (id, data) => {
  return {
    type: CartTypes.ADD_TO_CART,
    payload: { ...data, id: id },
  };
};

export const RemoveFromCart = (id) => {
  return { type: CartTypes.REMOVE_FROM_CART, payload: id };
};

export const UpdateCart = (id, data) => {
  return {
    type: CartTypes.UPDATE_CART,
    payload: { ...data, id: id },
  };
};
