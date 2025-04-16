import React from "react";

const Footer = () => (
  <footer className="text-center py-3 bg-light mt-4">

<p>&copy; 2023 - {new Date().getFullYear()} Caramel Web Studios |
   <p>
  <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
  <Link to="/terms-conditions">Terms & Conditions</Link>
</p>

  </footer>
);

export default Footer;
