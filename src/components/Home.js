import React from "react";
import admin_logo from '../static/img/admin.png'
//import { useHistory  } from "react-router-dom";
import { getUser, removeUserSession } from "../Utils/Common";
import { Navbar, Col, Row, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import "./Home.css";
import Dashboard from "./Dashboard/Dashboard";
import Sport from "./Sport/Sport";
import Tournament from "./Tournament/Tournament";
import Category from "./Category/Category";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavigationItems } from "./Navigation/NavigationItems/NavigationItems";
import { SideDrawer } from "./Navigation/SideDrawer/SideDrawer";

export const Home = (props) => {
  const theme = useTheme();
  const chk = useMediaQuery(theme.breakpoints.down("md"));
  // const user = JSON.parse(localStorage.getItem("user"));
  const user = getUser();
  //let history = useHistory();
  const handleLogout = () => {
    removeUserSession();
    // navigate("/");
    props.history.push("/");
  };
  return (
    <Router>
      <div className="b-border">
        <Navbar className="Nav-res">
          <Navbar.Brand >
            
            {chk === true ? <SideDrawer /> :<><img src={admin_logo} alt="admin" height={30}/> Admin Dashboard</> }
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <img src={user.avatar} height={32} alt="user"/> &nbsp; {user.fname}{user.lname} &nbsp;
              <Button onClick={handleLogout} className="btn-sm btn-dark">
                <ExitToAppIcon></ExitToAppIcon> Logout
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <div className="container-fluid">
          <Row>
            <Col xs={12} md={2} xl={2}>
              {chk === true ? "" : <NavigationItems />}
            </Col>
            <Col xs={12} xl={10} md={10} id="right-box">
              <div>
                <Switch>
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/sport" component={Sport} />
                  <Route exact path="/tournament" component={Tournament} />
                  <Route exact path="/category" component={Category} />
                  <Redirect to="/" />
                </Switch>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="text-center f-box">&copy; copy2021</div>
    </Router>
  );
};
