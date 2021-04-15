import ReduxUtils from "../utils";
import * as CartTypes from "./type";

const initState = {
  items: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART: {
      const newItems = [...state.items, action.payload];
      console.log(newItems);
      return ReduxUtils.updateObject(state, {
        items: newItems,
      });
    }
    case CartTypes.REMOVE_FROM_CART: {
      const id = action.payload;
      return ReduxUtils.updateObject(state, {
        items: new Map([...state.items.entries()]).delete(id),
      });
    }
    case CartTypes.UPDATE_CART: {
      const { id } = action.payload;
      return ReduxUtils.updateObject(state, {
        items: new Map([...state.items.entries()]).set(id, {
          ...action.payload,
        }),
      });
    }
    default:
      return state;
  }
};

export default cartReducer;
