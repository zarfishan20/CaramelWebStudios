import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Services = () => (
  <Container id="services" className="py-5">
    <h2 className="text-center mb-4">Our Services</h2>
    <Row className="g-4">
  <Col md={6}>
    <Card className="p-3 shadow-sm text-center h-100">
      <h5>UX/UI Design</h5>
      <p>Create intuitive and engaging user experiences with modern UI design principles.</p>
    </Card>
  </Col>
  <Col md={6}>
    <Card className="p-3 shadow-sm text-center h-100">
      <h5>Web Development</h5>
      <p>Custom websites, portfolios, and e-commerce solutions tailored to your needs.</p>
    </Card>
  </Col>
  <Col md={6}>
    <Card className="p-3 shadow-sm text-center h-100">
      <h5>Maintenance & Hosting</h5>
      <p>Reliable website maintenance, hosting, backups, and performance optimization.</p>
    </Card>
  </Col>
  <Col md={6}>
    <Card className="p-3 shadow-sm text-center h-100">
      <h5>SEO & Digital Marketing</h5>
      <p>Increase visibility and drive traffic with SEO strategies and targeted digital marketing.</p>
    </Card>
  </Col>
</Row>



  </Container>
);

export default Services;
