import * as types from "./type";
import * as Fetch from "../../utils/Fetch";
import * as Common from "../../common/index";

export const addCuruserAction = (user, valid, token) => {
  return {
    type: types.ADD_CUR_USER,
    payload: { valid: valid, curUser: { ...user, token: token } },
  };
};

export const authenCurUser = (email, password) => {
  return (dispatch) => {
    return Fetch.post(`${Common.DOMAIN}${Common.PORT}/auth/login`, {
      email: email,
      password: password,
    }).then((res) => {
      if (res.data.valid) {
        const token = res.headers["auth-token"];
        console.log(token);
        dispatch(addCuruserAction(res.data.curUser, res.data.valid, token));
      } else throw new Error("invalid login");
    });
  };
};
