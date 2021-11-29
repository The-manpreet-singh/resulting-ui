import React from "react";
//import { useHistory  } from "react-router-dom";
import { getUser, removeUserSession } from "../Utils/Common";
import { Navbar,Container,Col,Row} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Redirect,Route } from "react-router-dom";
import {Link} from "react-router-dom";
import "./Home.css";
import Dashboard from "./Dashboard/Dashboard";
import Sport from "./Sport/Sport";
import Tournament from "./Tournament/Tournament";
import Category from "./Category/Category";
export const Home = (props) => {


  const user = getUser();
  //let history = useHistory();
  const handleLogout = () => {
    removeUserSession();
    // navigate("/");
    props.history.push("/");
  };
  return (
    <>
    <Router>
    <div className="container-fluid border">
<Navbar>
<Container fluid>
    {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
       Welcome {user.fname} {user.lname} <input type="button" value="Logout" onClick={handleLogout} />
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>

</div>
<Container >
  <Row>
    <Col sm={4}>
    <Link to="/dashboard">dashboard</Link><br/>
    <Link to="/sport">Sport</Link><br/>
    <Link to="/tournament">Tournament</Link><br/>
    <Link to="/category">Category</Link><br/>
    
    
    </Col>
    <Col xs={8}>
    <div className="content">
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
 
</Container>
        
      </Router>
    
    </>
  );
};
