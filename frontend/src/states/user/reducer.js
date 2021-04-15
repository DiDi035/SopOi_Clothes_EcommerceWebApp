import * as types from "./type";
import ReduxUtils from "../utils";

let initState = {
  isLoading: false,
  isSuccess: false,
  userId: null,
  error: undefined,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case types.START_LOGIN:
      return ReduxUtils.updateObject(state, {
        isLoading: true,
        isSuccess: false,
      });
    case types.LOGIN_SUCCESS:
      console.log(action.type);
      return ReduxUtils.updateObject(state, {
        isLoading: false,
        isSuccess: true,
        userId: action.payload.userId,
      });
    case types.LOGIN_FAIL:
      return ReduxUtils.updateObject(state, {
        isLoading: false,
        isSuccess: false,
        error: action.payload.error,
      });
      break;
    case types.LOGOUT:
      return ReduxUtils.updateObject(state, {
        isSuccess: false,
        isLoading: false,
        userId: null,
      });
    default:
      return state;
  }
};

export default userReducer;
