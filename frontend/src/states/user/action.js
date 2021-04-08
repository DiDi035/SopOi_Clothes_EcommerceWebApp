import * as types from "./type";
import * as Fetch from "../../utils/Fetch";
import * as Common from "../../common/index";

export const authenCurUser = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.START_LOGIN });
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
        type: types.LOGIN_SUCCESS,
        payload: { curUser: res.data.curUser, token: token },
      });
    } catch (error) {
      dispatch({ type: types.LOGIN_FAIL, payload: { error } });
    }
  };
};
