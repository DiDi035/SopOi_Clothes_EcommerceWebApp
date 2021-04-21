import * as OrderTypes from "./type";
import ReduxUtils from "../utils";

const initState = {
  isFetching: false,
  FetchingSuccess: false,
  error: undefined,
  orders: [],
  totalPage: 0,
  page: 0,
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case OrderTypes.FETCHING_ORDER_START:
      return ReduxUtils.updateObject(state, { isFetching: true });
    case OrderTypes.FETCHING_ORDER_SUCCESS:
      const { orders, totalPage } = action.payload;
      return ReduxUtils.updateObject(state, {
        orders,
        totalPage,
        isFetching: false,
        FetchingSuccess: true,
        page: 0,
      });
    case OrderTypes.FETCHING_ORDER_ERROR:
      return ReduxUtils.updateObject(state, {
        error: action.payload,
        isFetching: false,
        FetchingSuccess: false,
      });
    case OrderTypes.UPDATE_STATUS:
      const { index, status } = action.payload;
      let newData = [...state.orders];
      newData[index].status = status;
      return ReduxUtils.updateObject(state, { orders: newData });
    default:
      return state;
  }
};

export default orderReducer;
