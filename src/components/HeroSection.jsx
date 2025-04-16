import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroSection = () => (
    <Container className=" section-container text-center py-5 d-flex align-items-center justify-content-center">
    <div>
      <h1>Crafting beautiful, functional websites that grow your business.</h1>
      <p>Design-forward, responsive, and reliable web solutions for modern brands.</p>
      {/* Use Link to go to the Quote Page */}
      <Button className="custom-button" as={Link} to="/quote">
        Request a Quote
      </Button>
    </div>
  </Container>
);

export default HeroSection;
