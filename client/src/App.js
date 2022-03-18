import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginDecider from "./Components/LoginDecider";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import BodyDiagram from "./Components/BodyDiagram";
import Exercises from "./Components/Exercises";
import Results from "./Components/Results";
import RoutineSelect from "./Components/RoutineSelect";
import SplashPage from "./Components/SplashPage";

function App() {
  const [user, setUser] = useState(null);
  const [buttonValue, setButtonValue] = useState(false);
  const [regionSelected, setRegionSelected] = useState({
    name: "",
    advanced: buttonValue,
    regionBackup: "",
    muscle_group_id: 0,
  });
  let navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
// Deleting session data to logout user.
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        localStorage.clear();
        navigate("/");
      }
    });
  }
// If user exists do not display login or signup 
  if (!user) return <LoginDecider setUser={setUser} />;

  return (
    <div className="App">
      <Navbar className="color-nav" expand="lg">
        <Container>
          <Navbar.Brand href="/bodydiagram">
            <img
              alt=""
              src="/images/logoWhite.png"
              width="20"
              className="d-inline-block align-top logo"
            />
            <span className="navTitle">Pain Point</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/bodydiagram">
                <span className="navLink">Home</span>
              </Nav.Link>
              <Nav.Link onClick={handleLogoutClick} className="navLink">
                <span className="navLink">Logout</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route
          path="/bodyDiagram"
          element={
            <BodyDiagram
              setRegionSelected={setRegionSelected}
              buttonValue={buttonValue}
              setButtonValue={setButtonValue}
              regionSelected={regionSelected}
            />
          }
        />

        <Route
          path="/exercises"
          element={
            <Exercises
              regionSelected={regionSelected}
              setRegionSelected={setRegionSelected}
            />
          }
        />
        <Route
          path="/routines/"
          element={
            <RoutineSelect
              regionSelected={regionSelected}
              setRegionSelected={setRegionSelected}
            />
          }
        />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
