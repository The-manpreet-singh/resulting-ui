import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link ,withRouter} from "react-router-dom";
import FormatIndentDecreaseIcon from "@material-ui/icons/FormatIndentDecrease";
import TableChartIcon from "@material-ui/icons/TableChart";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";
import BallotIcon from '@material-ui/icons/Ballot';
import { getUser, removeUserSession } from "../../../Utils/Common";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DashboardIcon from '@material-ui/icons/Dashboard';

// import AutorenewIcon from '@material-ui/icons/Autorenew';
// import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';


 const SideDrawer = ({history}) => {
  const bgpath = (curr)=>{
    if(history.location.pathname===curr){
      return "#555"
    }

  }
  const borderpath = (curr)=>{
    if(history.location.pathname===curr){
      return "5px solid #46CBFF"
    }

  }
  const colorpath = (curr)=>{
    if(history.location.pathname===curr){
      return "#ffffff"
    }

  }
  const handleLogout = () => {
    removeUserSession();
    // navigate("/");
    window.open('/')
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <BallotIcon
        className="toggle"
        onClick={handleShow}
      ></BallotIcon>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="admin-text">Admin Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
          <li>
          <Link to="/dashboard" style={{backgroundColor:bgpath("/dashboard"),borderLeft:borderpath("/dashboard"),color:colorpath("/dashboard")}}>
            <DashboardIcon className="nav-link"></DashboardIcon> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/sport"  style={{backgroundColor:bgpath("/sport"),borderLeft:borderpath("/sport"),color:colorpath("/sport")}} >
            <SportsEsportsIcon className="nav-link"></SportsEsportsIcon> Sport
          </Link>
        </li>

        <li>
          <Link to="/category"  style={{backgroundColor:bgpath("/category"),borderLeft:borderpath("/category"),color:colorpath("/category")}}>
            <FormatIndentDecreaseIcon className="nav-link"></FormatIndentDecreaseIcon>Categories
          </Link>
        </li>
        <li>
          <Link to="/tournament"  style={{backgroundColor:bgpath("/tournament"),borderLeft:borderpath("/tournament"),color:colorpath("/tournament")}}>
            <SportsVolleyballIcon className="nav-link"></SportsVolleyballIcon>Tournaments
          </Link>
        </li>
            <li>
          <Link onClick={handleLogout}>
          <ExitToAppIcon className="nav-link"></ExitToAppIcon>Logout
          </Link>
        </li>
            {/* <li><Link to=""><QueueIcon></QueueIcon>Add Option</Link></li>
  <li><Link to=""><SettingsIcon></SettingsIcon>Setting</Link></li> */}
  {/* <hr className="div_line" />
  <li><Link to="">admin user</Link></li>
  <hr className="div_line" />
  <li><Link to=""><AssignmentIndIcon></AssignmentIndIcon>User info</Link></li>
  <li><Link to=""><AutorenewIcon></AutorenewIcon>Profile Update</Link></li>
  <li><Link to="">< ExitToAppIcon></ExitToAppIcon>Logout</Link></li> */}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default withRouter(SideDrawer)