import React, { useState, useRef } from "react";

const Contact = () => {

  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000); // hide message after 5s
      })
      .catch(() => alert("Submission failed. Please try again."));
  };


return(
<>

<h2 className=" text-center mb-4">Contact Us</h2>

  <section id="contact" className="py-5 d-flex flex-column justify-content-center align-items-center">
 
  <div  className="w-40">
  {submitted ? (
            <div className="toast-success">
              <strong>Thank you!</strong> {'We’ll get back to you shortly.'}
            </div>
          ) : (
  <form name="contact" 
  method="POST" 
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  ref={formRef}
  onSubmit={handleSubmit}
  
  
  >
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
      <label>
        Message*
        <input type="text" name="message" required className="form-control"/>
      </label>
    </div>

    
    <div className="form-group">
      <button type="submit">Send</button>
    </div>
  </form>
   )}
</div>
</section>

</>

);
};
export default Contact;
