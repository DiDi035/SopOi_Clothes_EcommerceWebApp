import * as types from "../types/user";

export function addCurUser(user) {
  return {
    type: types.ADD_CUR_USER,
    payload: { user },
  };
}
