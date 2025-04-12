import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => (
  <Navbar bg="light" expand="lg" className="shadow-sm p-3 fixed-top">
    <Container>
      <Navbar.Brand as={Link} to="/" className="navbar-brand">Caramel Web Studios</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          {/* Add the Request a Quote link that goes to the Quote page */}
          <Nav.Link as={Link} to="/quote">Request a Quote</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;
