import React from "react";

const Contact = () => (

<>

<h2 className=" text-center mb-4">Contact Us</h2>

  <section id="contact" className="py-5 d-flex flex-column justify-content-center align-items-center">
 
  <div  className="w-40">
  <form name="contact" method="POST" netlify>
    {/* Hidden input for Netlify */}
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="bot-field" />

    
    <div className="form-group">
    <label htmlFor="name">
        Name*
        <input type="text" name="name" required className="form-control" />
      </label>
    </div>
    
    <div className="form-group">
      <label>
        Email*
        <input type="email" name="email" required className="form-control"/>
      </label>
    </div>
    
    <div className="form-group">
      <button type="submit">Send</button>
    </div>
  </form>
</div>
</section>

</>

);

export default Contact;
