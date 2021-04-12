import * as ProductTypes from "./type";
import * as Fetch from "../../utils/Fetch";
import * as Common from "../../common/index";

export const fetchProduct = (typeCustomer, page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ProductTypes.FETCH_START });
      const resp = await Fetch.post(
        `${Common.DOMAIN}${Common.PORT}/${typeCustomer}/${page}`,
        {}
      );
      if (!resp || !resp.data || !resp.data.valid) throw "data not found";
      dispatch({
        type: ProductTypes.FETCH_PRODUCT_SUCCES,
        payload: resp.data.products,
      });
    } catch (error) {
      dispatch({ type: ProductTypes.FETCH_FAIL, error });
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ProductTypes.FETCH_START });
      const resp = await Fetch.post(
        `${Common.DOMAIN}${Common.PORT}/category`,
        {}
      );
      console.log(resp);
      if (!resp || !resp.data || !resp.data.valid) throw "data not found";
      dispatch({
        type: ProductTypes.FETCH_CATEGORIES_SUCCESS,
        payload: resp.data.categories,
      });
    } catch (error) {
      dispatch({ type: ProductTypes.FETCH_FAIL, error });
    }
  };
};
