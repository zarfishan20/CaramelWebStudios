import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => (
  <footer className=" bg-light mt-4">
    <Container>
<Row className="g-4 ">
<Col md={3} >

<<<<<<< HEAD
<p >&copy; 2023 - {new Date().getFullYear()} Caramel Web Studios</p> 
=======
<p>&copy; 2023 - {new Date().getFullYear()} Caramel Web Studios |
   <p>
  <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
  <Link to="/terms-conditions">Terms & Conditions</Link>
</p>
>>>>>>> 181f50c22fffc1c72c27e5b4b78f8eab44d35290

</Col>
<Col md={3} >
<div>
<Link to="/privacy-policy">Privacy Policy</Link> |
<Link to="/terms-conditions">Terms & Conditions</Link>
</div>

</Col>


<Col md={3} >
  
 <p>  Email: 
    <a href="mailto:zali@caramelwebstudios.com"> info@caramelwebstudios.com</a>
 
    </p> 

</Col>


<Col md={3} >
<div className="social-icons">
              {/* Social Media Icons */}
              <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaFacebook className="icon-style" />
              </a>
              <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaInstagram className="icon-style" />
              </a>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaGithub className="icon-style" />
              </a>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaLinkedin className="icon-style" />
              </a>
            </div>


</Col>


</Row>

</Container>
  
  </footer>
);

export default Footer;
