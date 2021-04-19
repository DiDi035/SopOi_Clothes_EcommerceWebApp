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
      console.log(res);
      const token = res.headers["auth-token"];
      localStorage.setItem("auth-token", token);
      localStorage.setItem("user-id", res.data.userId);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: { userId: res.data.userId, ava: res.data.ava },
      });
    } catch (error) {
      dispatch({ type: types.LOGIN_FAIL, payload: { error } });
    }
  };
};

export const logout = () => {
  localStorage.removeItem("auth-token");
  localStorage.removeItem("user-id");
  return { type: types.LOGOUT };
};

export const checkValidUser = () => {
  return (dispatch) => {
    const token = localStorage.getItem("auth-token");
    if (!token) dispatch(logout());
  };
};
