import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Button, Row, Col, Card } from "react-bootstrap";
import './App.css';

const App = () => {

  console.log("App component is rendering");
  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="shadow-sm p-3 fixed-top">
        <Container>
          <Navbar.Brand href="#">Caramel Web Studios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="hero-section text-center py-5 d-flex align-items-center justify-content-center">
        <div>
          <h1>Creating Beautiful & Functional Websites</h1>
          <p>Web development & design solutions tailored for your business.</p>
          <Button variant="warning" size="lg">Request a Quote</Button>
        </div>
      </Container>

      {/* Services */}
      <Container id="services" className="py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          <Col md={4}><Card className="p-3 shadow-sm text-center"><h5>UI/UX Design</h5></Card></Col>
          <Col md={4}><Card className="p-3 shadow-sm text-center"><h5>E-Commerce Solutions</h5></Card></Col>
          <Col md={4}><Card className="p-3 shadow-sm text-center"><h5>Web Development</h5></Card></Col>
        </Row>
      </Container>

      {/* Projects */}
      <Container id="projects" className="py-5">
        <h2 className="text-center mb-4">Our Projects</h2>
        <Row>
          <Col md={6}><Card className="p-3 shadow-sm text-center"><h5>Project 1</h5></Card></Col>
          <Col md={6}><Card className="p-3 shadow-sm text-center"><h5>Project 2</h5></Card></Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container id="contact" className="py-5 text-center">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:info@caramelwebstudios.com">info@caramelwebstudios.com</a></p>
      </Container>

      <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

      {/* Footer */}
      <footer className="text-center py-3 bg-light mt-4">&copy;2021 - {new Date().getFullYear()} Caramel Web Studios</footer>
    </>
  );
};

export default App;

