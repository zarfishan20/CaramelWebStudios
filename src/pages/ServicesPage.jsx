import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  {
    title: 'Web Development & Design',
    description: 'Create stunning, responsive websites with modern design, SEO, and performance optimization.',
    features: [
      'Responsive design',
      'Custom web development',
      'SEO & Analytics setup',
      'CMS integration'
    ]
  },
  {
    title: 'E-Commerce',
    description: 'Build powerful online stores with secure payment integrations, product management, and more.',
    features: [
      'Product catalog setup',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking & reporting'
    ]
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance to ensure your website runs smoothly with regular updates, backups, and security checks.',
    features: [
      'Monthly backups',
      'Security checks & updates',
      'Performance monitoring',
      'Content updates'
    ]
  }
];

const ServicesPage = () => {
  return (
    <Container className="servicepage py-5">
      <h2 className="text-center mb-5 ">Our Services</h2>
      
      <Row className="g-4">
        {services.map((service, index) => (
          <Col md={4} key={index}>
            <Card className="servicepage-card h-100 d-flex flex-column shadow-sm border-0 rounded-4">
              <Card.Body >
                <Card.Title className="text-center fw-bold">{service.title}</Card.Title>
                <p className="text-center text-secondary">{service.description}</p>
                <ul className="flex-grow-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <div className='mt-auto'>
                <a href='/pricing'  className=" w-100 mt-auto">Learn More</a>
                </div>
                </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
