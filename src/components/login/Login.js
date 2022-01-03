import React, { useState } from "react";
import { Form, Button,InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Login.css";
import axios from "axios";
import { setUserSession } from "../../Utils/Common";
import { registerUser } from "./api/api";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';


export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    registerUser();
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
        //console.log("response>>>", response);
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
  };

  return (
    <div className="Login">
      <div className="form">
        <div className="thumbnail">
          <AccountCircleIcon className="login-icon" />{" "}
        </div>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <InputGroup>
        <InputGroup.Text><AlternateEmailIcon/></InputGroup.Text>
        <Form.Control
              data-test="component-email"
              class-name="email"
              type="email"
              value={username}
              placeholder="Enter email"
              onChange={(e) => setUsername(e.target.value)}
            />
      </InputGroup>
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <InputGroup>
        <InputGroup.Text><VpnKeyIcon/></InputGroup.Text>
        <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
      </InputGroup>
           
          </Form.Group>
          {error && <Form.Text className="text-message">{error}</Form.Text>}{" "}
          <br />
          <Button
            className="Log-btn"
            role="button"
            variant="primary"
            type="submit"
            value={loading ? "loading..." : "login"}
            disabled={loading}
          >
            LOGIN
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;