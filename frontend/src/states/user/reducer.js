import * as types from "./type";
import ReduxUtils from "../utils";

let initState = {
  isLoading: false,
  isSuccess: false,
  userId: null,
  ava: null,
  error: undefined,
  type: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case types.START_LOGIN:
      return ReduxUtils.updateObject(state, {
        isLoading: true,
        isSuccess: false,
      });
    case types.LOGIN_SUCCESS:
      return ReduxUtils.updateObject(state, {
        isLoading: false,
        isSuccess: true,
        userId: action.payload.userId,
        ava: action.payload.ava,
        error: undefined,
        type: action.payload.type,
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
        error: undefined,
      });
    default:
      return state;
  }
};

export default userReducer;
