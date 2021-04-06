import * as types from "./type";
import ReduxUtils from "../utils";

let initState = {
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
    default:
      return state;
  }
};

export default userReducer;
