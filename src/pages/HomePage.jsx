import React from 'react';
import { Container, Button, Row, Col, Card  } from 'react-bootstrap';
 
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection'; // Import HeroSection
import Projects from '../components/Projects';     // Import Projects
import Services from '../components/Services';     // Import Services
import Contact from '../components/Contact';   

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <Container id="services" className="py-5">
        <Services />
      </Container>
      
      {/* Projects Section */}
      <Container id="projects" className="py-5">
        <Projects />
      </Container>
      
      {/* Contact Section */}
      <Container id="contact" className="py-5">
        <Contact />
      </Container>
    </>
  );
};

export default HomePage;
