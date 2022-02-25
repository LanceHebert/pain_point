import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Nav,Container,Navbar,NavDropdown } from "react-bootstrap";


function LoginDecider({ setUser,handleLogoutClick }) {
  const [showLogin, setShowLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Pain Point</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/" onClick={handleLogoutClick}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showLogin ? (
        <div className="App-header">
          <Login
            setUser={setUser}
            setShowLogin={setShowLogin}
            setIsLoading={setIsLoading}
            setErrors={setErrors}
            errors={errors}
            isLoading={isLoading}
          />
        </div>
      ) : (
        <div className="App-header">
          <Signup
            setUser={setUser}
            setIsLoading={setIsLoading}
            setErrors={setErrors}
            errors={errors}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
}

export default LoginDecider;
