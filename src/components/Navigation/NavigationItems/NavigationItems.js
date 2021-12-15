import React from "react";

import { Link,withRouter } from "react-router-dom";
import FormatIndentDecreaseIcon from "@material-ui/icons/FormatIndentDecrease";
import DashboardIcon from '@material-ui/icons/Dashboard';
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { getUser, removeUserSession } from "../../../Utils/Common";

 
 const NavigationItems = ({history}) => {
  
  console.log(history);
  const bgpath = (curr)=>{
    if(history.location.pathname===curr){
      return "#555"
    }

  }
 
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard" style={{backgroundColor:bgpath("/dashboard")}}>
            <DashboardIcon className="nav-link"></DashboardIcon> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/sport"  style={{backgroundColor:bgpath("/sport")}} >
            <SportsEsportsIcon className="nav-link"></SportsEsportsIcon> Sport
          </Link>
        </li>

        <li>
          <Link to="/category"  style={{backgroundColor:bgpath("/category")}}>
            <FormatIndentDecreaseIcon className="nav-link"></FormatIndentDecreaseIcon>Categories
          </Link>
        </li>
        <li>
          <Link to="/tournament"  style={{backgroundColor:bgpath("/tournament")}}>
            <SportsVolleyballIcon className="nav-link"></SportsVolleyballIcon>Tournaments
          </Link>
        </li>
        
        {/* <li><Link to=""><QueueIcon></QueueIcon>Add Option</Link></li>
  <li><Link to=""><SettingsIcon></SettingsIcon>Setting</Link></li> */}
  {/* <hr className="div_line" />
  <li><Link to="">user admin</Link></li>
  <hr className="div_line" />
  <li><Link to=""><AssignmentIndIcon></AssignmentIndIcon>User info</Link></li>
  <li><Link to=""><AutorenewIcon></AutorenewIcon>Profile Update</Link></li>
  <li><Link to="">< ExitToAppIcon></ExitToAppIcon>Logout</Link></li> */}
      </ul>
    </div>
  );
};
export default withRouter(NavigationItems) 