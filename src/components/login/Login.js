import React, { useState } from "react";
import { Form, Button,Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@material-ui/core";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Login.css";
import axios from "axios";
import { setUserSession } from "../../Utils/Common";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  //const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userER, setUserEr] = useState();
  const [passER, setPassEr] = useState();

  //let history = useHistory();

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("https://www.mecallapi.com/api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/dashboard");
        //console.log('submit')
        console.log("response>>>", response);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 400) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong. Please try agian later.");
        }
        console.log("error>>>", error);
      });
      if (username==="") {

        setUserEr("*Please enter your email-ID.")
      }
    else{
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(username)) {
    
         
          setUserEr("*Please enter valid email-ID.")
        }
        if(pattern.test(username)){
          setUserEr("")
        }
    }
    if (password==="") {

      setPassEr("*Please enter your Password.")
    }
    else{
      let pattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i);
      if (!pattern.test(password)) {
        setPassEr("*Please enter valid Password. EX aAbcdef4@")
      }
      if(pattern.test(password)){
        setPassEr("")
      }
      
    }
  };

  return (
    <div className="Login">
      {/* <Container>
<div className="info">
    <h1>Login Form</h1><span>Made with <FavoriteOutlinedIcon/> By <a href="#">EHRENFELD TECHNOLOGIES PRIVATE LIMITED</a></span>
</div>
</Container> */}
<div className="form">
<div className="thumbnail"><AccountCircleIcon style={{fontSize:100,color:"white"}} /> </div>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  
    <Form.Control  type="email"
            value={username}
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)} />
  </Form.Group>
  <Typography component="p" color="secondary">
            {userER}
  </Typography>

  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Control  type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} />
  </Form.Group>
  <Typography component="p" color="secondary">
            {passER}
  </Typography>
  {error && <Form.Text className="text-message">{error}</Form.Text>}{" "}
        <br />
  
  <Button className="Log-btn" 
   role="button"
   variant="primary"
   type="submit"
   value={loading ? "loading..." : "login"}
   disabled={loading}
   onClick={handleLogin}
  >
    Login
  </Button>
</Form>
</div>
    </div>
  );
};

export default Login;
