import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";

function NavScrollExample(props) {
  return (
    <Navbar
      expand="lg"
      bg={props.mode}
      data-bs-theme={props.mode}
      className="shadow-sm py-2"
      style={{
        backgroundColor:
          props.mode === "dark" ? "#343a40" : props.theme.color,
      }}
    >
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/">
          {props.title}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Links */}
          <Nav className="me-auto" navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>

          {/* Theme Button */}
          <Button
            variant="light"
            size="sm"
            className="me-3"
            onClick={props.cycleTheme}
          >
            Theme
          </Button>

          {/* Dark/Light Mode Switch */}
          <Form.Check
            type="switch"
            id="darkModeSwitch"
            className="me-3"
            label={
              props.mode === "light"
                ? "Enable Dark Mode"
                : "Enable Light Mode"
            }
            onChange={props.toggleMode}
          />

          {/* Search Form */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

