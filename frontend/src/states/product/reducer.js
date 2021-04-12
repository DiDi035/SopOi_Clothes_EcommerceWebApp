import * as ProductTypes from "./type";
import ReduxUtils from "../utils";

const initState = {
  isFetching: false,
  isFetchingSucces: false,
  isFetchingCateSuccess: false,
  fetchingError: undefined,
  products: [],
  categories: [],
  page: 0,
};

const productReducer = (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ProductTypes.FETCH_START:
      return ReduxUtils.updateObject(state, {
        isFetching: true,
        isFetchingSucces: false,
      });
    case ProductTypes.FETCH_PRODUCT_SUCCES:
      return ReduxUtils.updateObject(state, {
        isFetching: false,
        isFetchingSucces: true,
        products: action.payload,
      });
    case ProductTypes.FETCH_FAIL:
      return ReduxUtils.updateObject(state, {
        isFetching: false,
        isFetchingSucces: false,
        fetchingError: action.error,
      });
    case ProductTypes.FETCH_CATEGORIES_SUCCESS:
      return ReduxUtils.updateObject(state, {
        isFetching: false,
        isFetchingCateSuccess: true,
        categories: action.payload,
      });
    case ProductTypes.INC_PAGE:
    case ProductTypes.DEC_PAGE:
    default:
      return state;
  }
};

export default productReducer;
