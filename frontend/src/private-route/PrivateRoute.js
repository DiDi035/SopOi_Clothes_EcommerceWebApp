import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import * as UserStates from "../states/user/states";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isSuccess = useSelector(UserStates.getIsSuccess);
  return !isSuccess ? (
    <Redirect to="/homepage" />
  ) : (
    <Route {...rest} component={Component} />
  );
};

export const PrivateAminRoute = ({ component: Component, ...rest }) => {
  const isSuccess = useSelector(UserStates.getIsSuccess);
  const isloading = useSelector(UserStates.getIsLoading);
  const type = useSelector(UserStates.getType);
  return !isloading && isSuccess && type == "seller" ? (
    <Route {...rest} component={Component} />
  ) : (
    <Redirect to="/admin/login" />
  );
};
