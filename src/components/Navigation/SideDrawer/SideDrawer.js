import React, { useState } from "react";


import DehazeIcon from "@material-ui/icons/Dehaze";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormatIndentDecreaseIcon from "@material-ui/icons/FormatIndentDecrease";
import TableChartIcon from "@material-ui/icons/TableChart";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export const SideDrawer = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <DehazeIcon
        className="toggle"
        onClick={handleShow}
      ></DehazeIcon>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="admin-text">Admin Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li onClick={handleClose}>
              <Link to="/dashboard">
                <TableChartIcon></TableChartIcon> Dashboard
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/sport">
                <SportsEsportsIcon></SportsEsportsIcon> Sports
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/category">
                <FormatIndentDecreaseIcon></FormatIndentDecreaseIcon>
                Categories
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/tournament">
                <SportsVolleyballIcon></SportsVolleyballIcon>Tournaments
              </Link>
            </li>
            {/* <li><Link to=""><QueueIcon></QueueIcon>Add Option</Link></li>
  <li><Link to=""><SettingsIcon></SettingsIcon>Setting</Link></li> */}
  <hr className="div_line" />
  <li><Link to="">admin user</Link></li>
  <hr className="div_line" />
  <li><Link to=""><AssignmentIndIcon></AssignmentIndIcon>User info</Link></li>
  <li><Link to=""><AutorenewIcon></AutorenewIcon>Profile Update</Link></li>
  <li><Link to="">< ExitToAppIcon></ExitToAppIcon>Logout</Link></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
