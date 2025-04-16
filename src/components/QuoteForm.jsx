import React from 'react';

const QuoteForm = () => {
  return (
<div className="section-container py-5">
  <h2 className="text-center">Request a Quote</h2>
  <form
    name="quote-form"
    method="POST"
    netlify
    netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="quote-form" />

    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" required className="form-control" />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required className="form-control" />
    </div>

    <div className="form-group">
      <label htmlFor="project-details">Project Details</label>
      <textarea name="project-details" required className="form-control" />
    </div>

    <div className="form-group">
      <button type="submit" className="btn btn-warning">
        Send Request
      </button>
    </div>
  </form>
</div>

  );
};

export default QuoteForm;
