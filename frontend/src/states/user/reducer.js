import * as types from "./type";
import ReduxUtils from "../utils";

let initState = {
  curUser: {
    valid: false,
    data: {},
  },
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_CUR_USER:
      console.log("vo day roi na");
      console.log(action);
      return ReduxUtils.updateObject(state, {
        curUser: {
          valid: action.payload.curUser.valid,
          data: action.payload.curUser.data,
        },
      });
      break;
    default:
      return state;
  }
};

export default userReducer;
