import React from "react";

import { Link,withRouter } from "react-router-dom";
import FormatIndentDecreaseIcon from "@material-ui/icons/FormatIndentDecrease";
import AllInboxIcon from '@material-ui/icons/AllInbox';
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";

 
 const NavigationItems = ({history}) => {
  
  
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
 
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard" style={{backgroundColor:bgpath("/dashboard"),borderLeft:borderpath("/dashboard"),color:colorpath("/dashboard")}}>
            <AllInboxIcon className="nav-link"></AllInboxIcon> Dashboard
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