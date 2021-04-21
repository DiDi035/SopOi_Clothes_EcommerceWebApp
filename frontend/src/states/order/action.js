import * as OrderTypes from "./type";
import * as Common from "../../common/index";
import * as Fetch from "../../utils/Fetch";

export const fetchOrders = (page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: OrderTypes.FETCHING_ORDER_START });
      const resp = await Fetch.post(
        `${Common.DOMAIN}${Common.PORT}/order?page=${page}&limit=${Common.ORDER_LIMIT}`
      );
      if (!resp || !resp.data || !resp.data.valid)
        throw new Error("data not found");
      dispatch({
        type: OrderTypes.FETCHING_ORDER_SUCCESS,
        payload: {
          orders: resp.data.orders,
          totalPage: resp.data.totalPage,
        },
      });
    } catch (error) {
      dispatch({
        type: OrderTypes.FETCHING_ORDER_ERROR,
        payload: error.message,
      });
    }
  };
};

export const updateStatus = (index, id, status) => {
  return async (dispatch) => {
    try {
      const resp = await Fetch.post(
        `${Common.DOMAIN}${Common.PORT}/order/update/${status}`,
        {
          id,
        }
      );
      if (!resp || !resp.data || !resp.data.valid)
        throw new Error("Update failed");
      dispatch({ type: OrderTypes.UPDATE_STATUS, payload: { index, status } });
    } catch (error) {
      dispatch({
        type: OrderTypes.FETCHING_ORDER_ERROR,
        payload: error.message,
      });
    }
  };
};
