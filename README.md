import React from "react";
//import { useHistory  } from "react-router-dom";
import { getUser, removeUserSession } from "../Utils/Common";
import { Navbar,Container,Col,Row,Nav,NavDropdown, Button} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Redirect,Route } from "react-router-dom";
import {Link} from "react-router-dom";
import "./Home.css";
import Dashboard from "./Dashboard/Dashboard";
import Sport from "./Sport/Sport";
import Tournament from "./Tournament/Tournament";
import Category from "./Category/Category";
import { Card } from "react-bootstrap";
import TableChartIcon from '@material-ui/icons/TableChart';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
export const Home = (props) => {

     
  const user = JSON.parse(localStorage.getItem('user'));

  //let history = useHistory();
  const handleLogout = () => {
    removeUserSession();
    // navigate("/");
    props.history.push("/");
  };
  return (
    <>
    <Router>
    <div className="b-border">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">{user.fname} {user.lname}</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <Button onClick={handleLogout} className="btn-sm">Logout</Button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
 
</Navbar>

</div>
<div >
  <div className="container-fluid">
  <Row>
    <Col sm={12} md={2}  >
      <ul>
  <li><Link class="active" to="/dashboard"><TableChartIcon></TableChartIcon> dashboard</Link></li>
  <li><Link to="/sport"><SportsEsportsIcon></SportsEsportsIcon> Sport</Link></li>
  <li><Link to="/tournament"><SportsVolleyballIcon></SportsVolleyballIcon>Tournament</Link></li>
  <li><Link to="/category"><FormatIndentDecreaseIcon></FormatIndentDecreaseIcon>Category</Link></li>
</ul> 
    </Col>
    <Col sm={12} md={10} id="right-box" >
    <div >
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
<div className="text-center f-box">
 &copy; copy2021
</div>
      </Router>
    
    </>
  );
};
