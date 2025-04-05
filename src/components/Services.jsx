import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Services = () => (
  <Container id="services" className="py-5">
    <h2 className="text-center mb-4">Our Services</h2>
    <Row>
      <Col md={4}><Card className="p-3 shadow-sm text-center"><h5>UI/UX Design</h5></Card></Col>
      <Col md={4}><Card className="p-3 shadow-sm text-center"><h5>E-Commerce Solutions</h5></Card></Col>
      <Col md={4}><Card className="p-3 shadow-sm text-center"><h5>Web Development</h5></Card></Col>
    </Row>
  </Container>
);

export default Services;
