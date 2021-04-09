import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import * as USerStates from "../states/user/states";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isSuccess = useSelector(USerStates.getIsSuccess);
  return !isSuccess ? (
    <Redirect to="/homepage" />
  ) : (
    <Route {...rest} component={Component} />
  );
};
