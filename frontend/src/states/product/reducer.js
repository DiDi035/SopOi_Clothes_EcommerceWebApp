import * as ProductTypes from "./type";
import ReduxUtils from "../utils";

const initState = {
  isFetching: false,
  isFetchingSucces: false,
  data: {
    products: [],
    categories: [],
  },
  fetchingError: undefined,
};

const productReducer = (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ProductTypes.FETCH_PRODUCT_START:
      return ReduxUtils.updateObject(state, {
        isFetching: true,
        isFetchingSucces: false,
      });
    case ProductTypes.FETCH_PRODUCT_SUCCES:
      return ReduxUtils.updateObject(state, {
        isFetching: false,
        isFetchingSucces: true,
        data: action.payload,
      });
    case ProductTypes.FETCH_PRODUCT_FAIL:
      return ReduxUtils.updateObject(state, {
        isFetching: false,
        isFetchingSucces: false,
        fetchingError: action.error,
      });
    default:
      return state;
  }
};

export default productReducer;
