import React from 'react';
import HeroSection from '../components/HeroSection'; // Import HeroSection
import Projects from '../components/Projects';     // Import Projects
import Services from '../components/Services';     // Import Services
import Contact from '../components/Contact';   

const HomePage = () => {
  const sections = [
    { id: 1, title: "Hero Section", component: <HeroSection /> },
    { id: 2, title: "Services", component: <Services /> },
    { id: 3, title: "Projects", component: <Projects /> },
    { id: 4, title: "Contact", component: <Contact /> },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`section-container ${index % 2 === 0 ? "section-light" : "section-dark"}`}
        >
       
          {section.component}
        </div>
      ))}
    </>
  );
};

export default HomePage;
