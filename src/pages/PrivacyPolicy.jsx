import React from "react";
import {Container} from "react-bootstrap";
import BackButton from "../components/BackButton";



const PrivacyPolicy = () => {

    return(
<>

<Container>

<BackButton />

<div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: '800px' }}>
        <h1 className="mb-4 border-bottom pb-2">Privacy Policy</h1>
        <p className="text-muted"><strong>Last updated:</strong> April 14, 2025</p>

        <p>
          At <strong>Caramel Web Studios</strong>, we value your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>

        <h4 className="mt-4">1. Information We Collect</h4>
        <p>
          We may collect personal information such as your name, email address, and any other details you provide through our contact form or by interacting with us.
        </p>

        <h4 className="mt-4">2. How We Use Your Information</h4>
        <ul>
          <li>Respond to inquiries and provide customer support</li>
          <li>Improve our website and services</li>
          <li>Send occasional updates if you opt in</li>
        </ul>

        <h4 className="mt-4">3. Data Security</h4>
        <p>We implement industry-standard security measures to protect your data from unauthorized access, use, or disclosure.</p>

        <h4 className="mt-4">4. Third-Party Links</h4>
        <p>Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.</p>

        <h4 className="mt-4">5. Cookies</h4>
        <p>We may use cookies to enhance user experience and gather usage data. You can disable cookies in your browser settings.</p>

        <h4 className="mt-4">6. Your Rights</h4>
        <p>You may request to access, update, or delete your personal data by contacting us at <strong>info@caramelwebstudios.com</strong>.</p>

        <h4 className="mt-4">7. Changes to This Policy</h4>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>

        <p>If you have any questions, feel free to contact us at <strong>info@caramelwebstudios.com</strong>.</p>
      </div>
    </div>



</Container>


</>




    );




};

export default PrivacyPolicy;