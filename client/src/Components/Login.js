import { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

function Login({
  setShowLogin,
  setUser,
  setErrors,
  setIsLoading,
  errors,
  isLoading,
}) {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="loginForm ">
      <Form className="rounded p-4 p-sm-3 ">
        <h2 className="titleCard">LOGIN</h2>
        <Form.Group className="mb-3 shadow" controlId="formBasicUsername">
          {/* <Form.Label>Username</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) =>
              setLoginForm({ ...loginForm, username: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3 shadow" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3 checky" controlId="formBasicCheckBox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <div className="mb-3">
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="loginButton"
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
          {/* <Button
            color="primary"
            className="ms-5"
            onClick={() => setShowLogin(false)}
          >
            SignUp
          </Button> */}
        </div>
        <Form.Group className="errors rounded" controlId="formBasicErrors">
          {errors.map((err) => (
            <p className="signErrors" key={err}>
              ✖️ {err}✖️
            </p>
          ))}
        </Form.Group>
        <button className="astext" onClick={() => setShowLogin(false)}>
          <span className="astext">Don't have account yet?</span>{" "}
          <span className="asTextBold">Sign up!</span>
        </button>
      </Form>
    </div>
  );
}

export default Login;
