import * as ProductTypes from "./type";
import * as Fetch from "../../utils/Fetch";
import * as Common from "../../common/index";

export const fetchData = (typePerson, typeClothes, types) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ProductTypes.FETCH_PRODUCT_START });
      const resp = await Fetch.post(
        `${Common.DOMAIN}${Common.PORT}/${typePerson}/${typeClothes}/${types}`,
        {}
      );
      if (!resp || !resp.data || !resp.data.valid) throw "data not found";
      dispatch({
        type: ProductTypes.FETCH_PRODUCT_SUCCES,
        payload: resp.data.data,
      });
    } catch (error) {
      dispatch({ type: ProductTypes.FETCH_PRODUCT_FAIL, error });
    }
  };
};
