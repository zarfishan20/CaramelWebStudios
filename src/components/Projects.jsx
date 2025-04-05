import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Projects = () => (
  <Container id="projects" className="py-5">
    <h2 className="text-center mb-4">Our Projects</h2>
    <Row>
      <Col md={6}><Card className="p-3 shadow-sm text-center"><h5>Project 1</h5></Card></Col>
      <Col md={6}><Card className="p-3 shadow-sm text-center"><h5>Project 2</h5></Card></Col>
    </Row>
  </Container>
);

export default Projects;
