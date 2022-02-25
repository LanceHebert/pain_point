
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginDecider from "./Components/LoginDecider";
import {useEffect,useState} from "react";
import { Routes,Route } from "react-router-dom";
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import { Nav,Container,Navbar,NavDropdown } from "react-bootstrap";
import BodyDiagram from "./Components/BodyDiagram";

function App() {

  const [user, setUser] = useState(null);
  
  

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  if (!user) return <LoginDecider setUser={setUser} />;

  return (
    <div className="App">      
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Pain Point</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/" onClick={handleLogoutClick}>Logout</Nav.Link>          
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <header className="App-header">
      <BodyDiagram />
      </header>
    </div>
  );
}

export default App;
