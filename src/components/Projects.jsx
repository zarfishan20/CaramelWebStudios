import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Projects = () => (
  <Container id="projects" className="py-5">
    <h2 className="text-center mb-4">Our Work</h2>
    <Row className="g-4">
    <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top"
              src="/images/mfafloors.png"
              alt="MFA Flooring Project"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="text-center">
              <Card.Title>MFA Carpet & Flooring</Card.Title>
              <Card.Text>
                A bold site with quote request for a local flooring business.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top"
              src="/images/flexipay.png"
              alt="FlexiPay Project"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="text-center">
              <Card.Title>FlexiPay Accountancy</Card.Title>
              <Card.Text>
                A modern website for a payroll & bookkeeping firm.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
  </Container>
);

export default Projects;
