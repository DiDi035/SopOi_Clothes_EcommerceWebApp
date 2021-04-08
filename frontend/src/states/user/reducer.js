import * as types from "./type";
import ReduxUtils from "../utils";

let initState = {
  isLoading: false,
  isSuccess: false,
  curUser: {},
  token: undefined,
  error: undefined,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "start_login":
      return ReduxUtils.updateObject(state, {
        isLoading: true,
        isSuccess: false,
      });
    case "login_success":
      return ReduxUtils.updateObject(state, {
        isLoading: false,
        isSuccess: true,
        curUser: action.payload.curUser,
        token: action.payload.token,
      });
    case "login_fail":
      return ReduxUtils.updateObject(state, {
        isLoading: false,
        isSuccess: false,
        error: action.payload.error,
      });
      break;
    default:
      return state;
  }
};

export default userReducer;
