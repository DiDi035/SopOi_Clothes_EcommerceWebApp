import * as types from "./type";
import Fetch from "../../utils/Fetch";
import * as Common from "../../common/index";

export const addCuruserAction = (user, valid, token) => {
  return {
    type: types.ADD_CUR_USER,
    payload: { curUser: { valid: valid, data: { ...user, token: token } } },
  };
};

export const authenCurUser = (email, password) => {
  return async (dispatch) => {
    let res = await Fetch.post(`${Common.DOMAIN}${Common.PORT}/auth/login`, {
      email: email,
      password: password,
    });
    const token = res.headers["auth-token"];
    const acti = addCuruserAction(res.data.curUser, res.data.valid, token);
    console.log(acti);
    return acti;
  };
};
