import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuotePage from "./pages/QuotePage";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/Terms';
import NotFound from "./pages/NotFound";
const App = () => (
  <Router>
  <CustomNavbar />
  <Routes>
  <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
    <Route path="/quote" element={<QuotePage />} /> {/* Define the route for Quote Page */}
  </Routes>
 
  <Footer />
</Router>
);

export default App;
