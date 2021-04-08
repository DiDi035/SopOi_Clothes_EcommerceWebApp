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
  return async (dispatch) => {
    try {
      dispatch({ type: "start_login" });
      const res = await Fetch.post(
        `${Common.DOMAIN}${Common.PORT}/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      if (!res || !res.data || !res.data.valid) throw "Login INVALID";
      const token = res.headers["auth-token"];
      dispatch({
        type: "login_success",
        payload: { curUser: res.data.curUser, token: token },
      });
    } catch (error) {
      dispatch({ type: "login_fail", payload: { error } });
    }
  };
};
