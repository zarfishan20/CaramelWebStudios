import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";


const projects = [
  {
    title: "Business Portfolio Website",
    client: "Flexipay",
    stack: "React, Node.js, Bootstrap",
    description:
      "Created a modern portfolio website to showcase Flexipay's business solutions. The website features a visually striking homepage, dynamic service showcase, and optimized for SEO.",
    results:
      "Increased traffic by 30% and higher conversion rates for quote requests.",
    image: "/images/flexipay.png", // Screenshot of the project
  },


  {
    title: "Accountancy Portfolio Website",
    client: "Alchemy Associates Ltd.",
    stack: "WordPress, Elementor",
    description:
      "Developed a modern portfolio website for Alchemy Associates, an accountancy firm. The website features a clean, professional design, dynamic service showcase, and is optimized for SEO to enhance online visibility and attract new clients.",
    results:
      "Increased client inquiries by 25% and improved the firm's online presence, resulting in higher engagement with potential clients.",
    image: "/images/alchemy.png", // Screenshot of the project
  },
  {
    title: "Carpet and Flooring Shop",
    client: "mfa floors",
    stack: "WordPress, WooCommerce, Stripe, PayPal",
    description:
      "Developed an e-commerce website with integrated product catalogs, shopping cart, AI chatbot and secure payment processing for mfa floors.",
    results:
      "The store saw a 15% increase in sales and positive customer feedback for the smooth shopping experience.",
    image: "/images/mfafloors.png", // Screenshot of the project
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
<>
<h2 className="text-center mb-4">Our Projects</h2>
    <Container className="py-5">
    <Row className="g-4">
      {projects.map((project, index) => (
        <Col md={6} lg={4} key={index} className="mb-4">
          <Card className="shadow-sm h-100">
            {/* Display Project Screenshot */}
            <Card.Img variant="top" className="img-fluid h-100" src={project.image} alt={project.title} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {project.client} 
              </Card.Subtitle>
              <Card.Text>
                <strong>Technology Stack:</strong> {project.stack}
              </Card.Text>
              <Card.Text>{project.description}</Card.Text>
              <Card.Text>
                <strong>Results:</strong> {project.results}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      
    </Container>
    </>
  );
};

export default ProjectsPage;
