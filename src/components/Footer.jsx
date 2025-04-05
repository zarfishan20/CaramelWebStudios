import React from "react";
import { Link } from 'react-router-dom'; 

const Footer = () => (
  <footer className="text-center py-3 bg-light mt-4">
    <div>
    &copy; 2021 - {new Date().getFullYear()} Caramel Web Studios.
    </div>
    <div>
          <Link to="/privacy-policy" className="mx-3 text-decoration-none">Privacy Policy</Link>
          <Link to="/terms-conditions" className="mx-3 text-decoration-none">Terms and Conditions</Link>
        </div>
  </footer>
);

export default Footer;
