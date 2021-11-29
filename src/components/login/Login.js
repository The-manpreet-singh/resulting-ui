import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import axios from "axios";
import { setUserSession } from "../../Utils/Common";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  //const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
  };

  return (
    <div className="Login">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={username}
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {error && <Form.Text className="text-message">{error}</Form.Text>}{" "}
        <br />
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button
          role="button"
          variant="primary"
          type="submit"
          value={loading ? "loading..." : "login"}
          disabled={loading}
          onClick={handleLogin}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
