import React from "react";

const Contact = () => (
  <section id="contact" className="py-5 text-center">
    <h2>Contact Us</h2>
    <p>Email: <a href="mailto:info@caramelwebstudios.com">info@caramelwebstudios.com</a></p>

    <form name="contact" method="POST" netlify>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>Name <input type="text" name="name" required /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" required /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </section>
);

export default Contact;
