import React from 'react';
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
      
        <Services />
     
      
      {/* Projects Section */}
      
        <Projects />
    
      
      {/* Contact Section */}

        <Contact />
   
    </>
  );
};

export default HomePage;
