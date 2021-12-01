import React from "react";
//import { useHistory  } from "react-router-dom";
import { getUser, removeUserSession } from "../Utils/Common";
import { useState } from "react";
import { Navbar,Container,Col,Row,Nav,NavDropdown, Button,Offcanvas,} from "react-bootstrap";
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
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import { useTheme } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';

export const Home = (props) => {
  function LeftNav(){
    return(
<>
<ul>
  <li><Link class="active" to="/dashboard"><TableChartIcon></TableChartIcon> dashboard</Link></li>
  <li><Link to="/sport"><SportsEsportsIcon></SportsEsportsIcon> Sport</Link></li>
  <li><Link to="/tournament"><SportsVolleyballIcon></SportsVolleyballIcon>Tournament</Link></li>
  <li><Link to="/category"><FormatIndentDecreaseIcon></FormatIndentDecreaseIcon>Category</Link></li>
</ul> 

</>


    )
  }
  function Show(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
      <>
       
      <DehazeIcon style={{fontSize:"50px"}} onClick={handleShow}></DehazeIcon>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul>
       <li onClick={handleClose}><Link class="active" to="/dashboard"><TableChartIcon></TableChartIcon> dashboard</Link></li>
       <li  onClick={handleClose}><Link to="/sport"><SportsEsportsIcon></SportsEsportsIcon> Sport</Link></li>
        <li  onClick={handleClose}><Link to="/tournament"><SportsVolleyballIcon></SportsVolleyballIcon>Tournament</Link></li>
       <li  onClick={handleClose} ><Link to="/category"><FormatIndentDecreaseIcon></FormatIndentDecreaseIcon>Category</Link></li>
      </ul> 
        </Offcanvas.Body>
      </Offcanvas>
      </>
    )
  }
 
  const theme = useTheme();
  const chk = useMediaQuery(theme.breakpoints.down("md"))

     
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
    <Navbar className="Nav-res">
 
    <Navbar.Brand > {chk==true?<Show/>:"Admin Dashboard"} </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      {user.fname} {user.lname}:  <Button onClick={handleLogout} className="btn-sm">Logout</Button>
      </Navbar.Text>
    </Navbar.Collapse>
 
</Navbar>

</div>
<div >
  <div className="container-fluid">
  <Row>
    <Col xs={12} md={2} xl={2}  >
    {chk==true?"":<LeftNav/>}
    </Col>
    <Col xs={12} xl={10} md={10} id="right-box" >
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