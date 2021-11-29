import React from "react";
import Login from "../components/login/Login";
import { Home } from "../components/Home";

import { BrowserRouter as Router, Switch, Redirect,Route } from "react-router-dom";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";


function App() {
  return (
    <div>
      <Router>
        {/* <div className="header">
          <Link to="/">login</Link>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </div> */}

        <div className="content">
          <Switch>
            <PublicRoute exact path="/" component={Login} />
            <PrivateRoute exact path="/home" component={Home} />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
