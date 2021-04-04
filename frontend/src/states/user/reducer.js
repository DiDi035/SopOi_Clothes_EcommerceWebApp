import * as types from "../types/user";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_CUR_USER:
      return { ...action.payload.user };
      break;
    default:
      return state;
  }
};

export default userReducer;
