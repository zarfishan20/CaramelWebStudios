import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroSection = () => (
    <Container className="hero-section text-center py-5 d-flex align-items-center justify-content-center">
    <div>
      <h1>Creating Beautiful & Functional Websites</h1>
      <p>Web development & design solutions tailored for your business.</p>
      {/* Use Link to go to the Quote Page */}
      <Button className="btn-warning" size="lg" as={Link} to="/quote">
        Request a Quote
      </Button>
    </div>
  </Container>
);

export default HeroSection;
