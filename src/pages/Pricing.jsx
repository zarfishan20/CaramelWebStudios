import React from 'react';
import { Container, Row, Col, Card, Button, Tabs, Tab }  from 'react-bootstrap';


const packages = {
  webDevelopment: [
    {
      title: 'Starter Site',
      features: [
        '1–3 pages',
        'Responsive design',
        'Basic SEO',
        'Contact form'
      ]
    },
    {
      title: 'Professional Site',
      features: [
        '4–6 pages',
        'Custom design',
        'Blog or gallery',
        'Google Analytics & SEO setup'
      ]
    },
    {
      title: 'Premium Site',
      features: [
        '7+ pages',
        'CMS integration',
        'Advanced animations',
        'Full SEO & analytics'
      ]
    }
  ],
  ecommerce: [
    {
      title: 'Basic Store',
      features: [
        'Up to 10 products',
        'Payment gateway',
        'Mobile-ready design'
      ]
    },
    {
      title: 'Standard Store',
      features: [
        'Up to 50 products',
        'Inventory, coupons, user accounts'
      ]
    },
    {
      title: 'Advanced Store',
      features: [
        'Unlimited products',
        'Custom checkout flow',
        'Multi-vendor setup',
        'Email marketing integration'
      ]
    }
  ],
  maintenance: [
    {
      title: 'Basic Care',
      features: [
        'Monthly backups',
        'Plugin & platform updates',
        'Security scans'
      ]
    },
    {
      title: 'Standard Support',
      features: [
        'Everything in Basic',
        'Content updates',
        'Performance monitoring'
      ]
    },
    {
      title: 'Pro Plan',
      features: [
        'All of Standard',
        'SEO tweaks',
        'Analytics reports',
        'Small design changes'
      ]
    }
  ]
};

const PricingPage = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Our Packages</h2>

      <Tabs defaultActiveKey="webDevelopment" className="mb-4 justify-content-center" fill>
        <Tab eventKey="webDevelopment" title="Web Development & Design">
          <Section data={packages.webDevelopment} />
        </Tab>
        <Tab eventKey="ecommerce" title="E-Commerce">
          <Section data={packages.ecommerce} />
        </Tab>
        <Tab eventKey="maintenance" title="Maintenance (Monthly)">
          <Section data={packages.maintenance} />
        </Tab>
      </Tabs>
    </Container>
  );
};

const Section = ({ title, data }) => (
  <section className="mb-5">
    <h3 className="mb-4 text-center">{title}</h3>
    <Row className="g-4">
      {data.map((pkg, index) => (
        <Col md={4} key={index}>
          <Card className="h-100 shadow-sm pricing-card">
            <Card.Body >
              <Card.Title className="mb-3">{pkg.title}</Card.Title>
              <ul className="list-unstyled">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">• {feature}</li>
                ))}
              </ul>
              <Button  className="mt-3 w-100">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default PricingPage;
