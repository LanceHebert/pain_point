import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";

function LoginDecider({ setUser, handleLogoutClick }) {
  const [showLogin, setShowLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  return (
    <div>
      <Navbar className="color-nav  justify-content-start" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/images/logoWhite.png"
              width="20"
              // height="30"
              className="d-inline-block align-top logo"
            />
            <span className="navTitle">Pain Point</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>

      {showLogin ? (
        <div>
          <video autoPlay loop id="video-background" muted>
            <source src="/videos/runningVid.mp4" type="video/mp4" />
          </video>
          <div className="App-headerColor">
            <Login
              setUser={setUser}
              setShowLogin={setShowLogin}
              setIsLoading={setIsLoading}
              setErrors={setErrors}
              errors={errors}
              isLoading={isLoading}
            />
          </div>
        </div>
      ) : (
        <div>
          <video autoPlay loop id="video-background" muted>
            <source src="/videos/runningVid.mp4" type="video/mp4" />
          </video>
          <div className="App-headerColor">
            <Signup
              setUser={setUser}
              setIsLoading={setIsLoading}
              setErrors={setErrors}
              errors={errors}
              isLoading={isLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginDecider;
