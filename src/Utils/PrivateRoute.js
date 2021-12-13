import React from "react";

import { getToken } from "./Common";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  // const PrivateRoute = ({getToken,ownProps}) => {
  // const { component: Component, ...rest }= ownProps //this is for testing
  return (
    <Route
      {...rest}
      render={(props) => {
        return getToken() ? ( //  return getToken ?  this is for testing
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
