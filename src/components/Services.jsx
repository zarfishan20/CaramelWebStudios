import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPaintBrush, FaCode, FaServer, FaBullhorn } from "react-icons/fa";


const iconStyle = {
  color: "#c96f36",
  fontSize: "2.5rem",
  marginBottom: "1rem",
};


const Services = () => (

<>
<h2 className="text-center mb-4">Our Services</h2>

  <Container id="services" className="py-5">
    
    <Row className="g-4">
  <Col md={6}>
    <Card className="p-3 shadow-sm text-center h-100">
    <div className="d-flex justify-content-center">
    <FaPaintBrush style={iconStyle} />
    </div>
      <h5>UX/UI Design</h5>
      <p>Create intuitive and engaging user experiences with modern UI design principles.</p>
    </Card>
  </Col>
  <Col md={6}>
    <Card className="p-3 shadow-sm text-center h-100">
    <div className="d-flex justify-content-center">
    <FaCode style={iconStyle} />
    </div>
      <h5>Web Development</h5>
      <p>Custom websites, portfolios, and e-commerce solutions tailored to your needs.</p>
    </Card>
  </Col>
  <Col md={6}>
    <Card className="p-3 shadow-sm text-center h-100">
    <div className="d-flex justify-content-center">
    <FaServer style={iconStyle} />
    </div>
      <h5>Maintenance & Hosting</h5>
      <p>Reliable website maintenance, hosting, backups, and performance optimization.</p>
    </Card>
  </Col>
  <Col md={6}>
    <Card className="p-3 shadow-sm text-center h-100">
    <div className="d-flex justify-content-center">
    <FaBullhorn style={iconStyle} />
    </div>
      <h5>SEO & Digital Marketing</h5>
      <p>Increase visibility and drive traffic with SEO strategies and targeted digital marketing.</p>
    </Card>
  </Col>
</Row>


  </Container>

  </>
);

export default Services;
