import * as ProductTypes from "./type";
import * as Fetch from "../../utils/Fetch";
import * as Common from "../../common/index";

export const fetchData = (typeCustomer) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ProductTypes.FETCH_PRODUCT_START });
      const resp = await Fetch.post(
        `${Common.DOMAIN}${Common.PORT}/${typeCustomer}`,
        {}
      );
      if (!resp || !resp.data || !resp.data.valid) throw "data not found";
      dispatch({
        type: ProductTypes.FETCH_PRODUCT_SUCCES,
        payload: {
          products: resp.data.products,
          categories: resp.data.categories,
        },
      });
    } catch (error) {
      dispatch({ type: ProductTypes.FETCH_PRODUCT_FAIL, error });
    }
  };
};
