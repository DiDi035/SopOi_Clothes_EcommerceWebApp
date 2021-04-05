import * as types from "./type";
import ReduxUtils from "../utils";

let initState = {
  validLogin: true,
  curUser: {},
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_CUR_USER:
      console.log("vo day roi na");
      console.log(action);
      return ReduxUtils.updateObject(state, {
        validLogin: action.payload.valid,
        curUser: action.payload.curUser,
      });
      break;
    case types.LOGIN_FAILED:
      return ReduxUtils.updateObject(state, { validLogin: false });
      break;
    default:
      return state;
  }
};

export default userReducer;
