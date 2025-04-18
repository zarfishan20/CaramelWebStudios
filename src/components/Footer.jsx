import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => (
  <footer className=" bg-light mt-4">
    <Container>
<Row className="g-4 ">
<Col md={6} lg={3}>

<p>&copy; 2023 - {new Date().getFullYear()} Caramel Web Studios</p>




</Col>




<Col md={6} lg={3} >
<div>
<Link to="/privacy-policy">Privacy Policy</Link> |
<Link to="/terms-conditions">Terms & Conditions</Link>
</div>

</Col>


<Col md={6} lg={3} >
  
 <p>  Email: 
    <a href="mailto:zali@caramelwebstudios.com"> info@caramelwebstudios.com</a>
 
    </p> 

</Col>


<Col md={6} lg={3}>
<div className="social-icons">
              {/* Social Media Icons */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaFacebook className="icon-style" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaInstagram className="icon-style" />
              </a>
              <a href="https://github.com"  target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaGithub className="icon-style" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaLinkedin className="icon-style" />
              </a>
            </div>


</Col>


</Row>

</Container>
  
  </footer>
);

export default Footer;
