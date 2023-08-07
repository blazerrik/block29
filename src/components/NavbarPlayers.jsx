import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import AllPlayers from "./AllPlayers";

export default function NavbarPlayers() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function callSearch(event) {
    event.preventDefault();

    try {
      navigate(`/Search/${search}`);

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          Poppy Bowl
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
          <Button
            variant="outline-primary"
            onClick={() => {
              navigate("/NewPlayer");
            }}
          >
            New Player
          </Button>
        </Nav>
        <Form className="d-flex" onSubmit={callSearch}>
          <Form.Control
            type="text"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}
