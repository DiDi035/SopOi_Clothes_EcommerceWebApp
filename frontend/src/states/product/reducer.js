import * as ProductTypes from "./type";
import ReduxUtils from "../utils";

const initState = {
  isFetching: false,
  isFetchingSuccess: false,
  isFetchingCateSuccess: false,
  fetchingError: undefined,
  products: [],
  categories: [],
  page: 0,
  totalPage: 0,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case ProductTypes.FETCH_START:
      return ReduxUtils.updateObject(state, {
        isFetching: true,
      });
    case ProductTypes.FETCH_PRODUCT_SUCCES:
      return ReduxUtils.updateObject(state, {
        isFetching: false,
        isFetchingSuccess: true,
        products: action.payload.products,
        totalPage: action.payload.totalPage,
      });
    case ProductTypes.FETCH_FAIL:
      return ReduxUtils.updateObject(state, {
        isFetching: false,
        isFetchingSucces: false,
        fetchingError: action.error,
        products: [],
        totalPage: 0,
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
