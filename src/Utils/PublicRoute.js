import React from "react";

import { getToken } from "./Common";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  // const PublicRoute = ({ getToken, ownProps }) => {
  //   const { component: Component, ...rest } = ownProps; //this is for testing
  return (
    <Route
      {...rest}
      render={(props) => {
        return !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/home" }} />
        );
      }}
    />
  );
};

export default PublicRoute;
