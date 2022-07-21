import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Signup({ setUser, setIsLoading, setErrors, errors, isLoading }) {
  const [signupForm, setSignupForm] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });

  function handleSignupSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupForm),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        // Setting user here to avoid login/signup screen once user is set
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="loginForm">
      <Form className="rounded p-4 p-sm-3 ">
        <h2 className="titleCard">Register</h2>
        <Form.Group className="mb-3 shadow" controlId="formBasicUsername">
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) =>
              setSignupForm({ ...signupForm, username: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3 shadow" controlId="formBasicPassword">
          <Form.Control
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setSignupForm({ ...signupForm, password: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group
          className="mb-3 shadow"
          controlId="formBasicPasswordConfirmation"
        >
          <Form.Control
            type="password"
            placeholder="Re-Enter Password"
            id="password_confirmation"
            onChange={(e) =>
              setSignupForm({
                ...signupForm,
                password_confirmation: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3 checky" controlId="formBasicCheckBox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button
          className="mb-3 loginButton"
          variant="primary"
          type="submit"
          onClick={(e) => handleSignupSubmit(e)}
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </Button>
        <Form.Group className="mb-3 rounded" controlId="formBasicErrors">
          {errors.map((err) => (
            <p className="signErrors" key={err}>
              ✖️ {err}✖️
            </p>
          ))}
        </Form.Group>
      </Form>
    </div>
  );
}

export default Signup;
