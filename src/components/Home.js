import React from "react";
//import { useHistory  } from "react-router-dom";
import { getUser, removeUserSession } from "../Utils/Common";

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
    <div className="container-fluid">
      Welcome {user.fname}
      <br />
      <input type="button" value="Logout" onClick={handleLogout} />
    </div>
    
    </>
  );
};
