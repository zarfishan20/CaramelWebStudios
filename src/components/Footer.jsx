import React from "react";
import { Link } from 'react-router-dom'; 

const Footer = () => (
  <footer className="text-center py-3 bg-light mt-4">

<p>&copy; 2021 - {new Date().getFullYear()} Caramel Web Studios |
   <a href="/privacy-policy">Privacy Policy</a> |
    <a href="/terms-conditions">T&Cs</a></p>

  </footer>
);

export default Footer;
