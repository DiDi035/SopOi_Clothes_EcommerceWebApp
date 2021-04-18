import ReduxUtils from "../utils";
import * as CartTypes from "./type";

const initState = {
  items: [],
  isSubmiting: false,
  submitingSuccess: false,
  error: undefined,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART: {
      const newItems = [...state.items, action.payload];
      return ReduxUtils.updateObject(state, {
        items: newItems,
      });
    }
    case CartTypes.REMOVE_FROM_CART: {
      const id = action.payload;
      const newItems = state.items.filter((item) => item.id !== id);
      return ReduxUtils.updateObject(state, {
        items: newItems,
      });
    }
    case CartTypes.UPDATE_CART: {
      let newItems = [...state.items];
      newItems[action.payload.index].quantity += action.payload.update;
      return ReduxUtils.updateObject(state, {
        items: newItems,
      });
    }
    default:
      return state;
  }
};

export default cartReducer;
