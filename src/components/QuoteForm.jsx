import React from 'react';

const QuoteForm = () => {
  return (



<>

<h2 className="text-center">Request a Quote</h2>




<div className="section-container py-5">
  
  <form
    name="quote-form"
    method="POST"
    netlify
    netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="quote-form" />
    <input type="hidden" name="bot-field" />
    <div className="form-group">
      <label htmlFor="name">Name*</label>
      <input type="text" name="name" required placeholder="Name" className="form-control" />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email*</label>
      <input type="email" name="email" required placeholder="Email"className="form-control" />
    </div>


    <div className="form-group">
      <label htmlFor="company">Company Name (optional)</label>
      <input type="text" name="company" placeholder="Your company name"className="form-control" />
    </div>

      {/* Type of Website */}
      <div className="form-group mb-3">
          <label htmlFor="website-type">Type of Website*</label>
          <select name="website-type" required className="form-control">
            <option value="">Select...</option>
            <option value="business">Business Website</option>
            <option value="ecommerce">E-commerce Website</option>
            <option value="portfolio">Portfolio Website</option>
            <option value="blog">Blog</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Features Required */}
        <div className="form-group mb-3">
          <label htmlFor="features">Required Features*</label>
          <textarea
            name="features"
            placeholder="e.g. Contact form, payment gateway, social media integration, etc."
            required
            className="form-control"
          />
        </div>

        {/* Budget Range */}
        <div className="form-group mb-3">
          <label htmlFor="budget">Budget Range*</label>
          <select name="budget" required className="form-control">
            <option value="">Select...</option>
            <option value="under-500">Under $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000-5000">$1000 - $5000</option>
            <option value="5000-10000">$5000 - $10000</option>
            <option value="above-10000">Above $10000</option>
          </select>
        </div>

        {/* Timeline */}
        <div className="form-group mb-3">
          <label htmlFor="timeline">Preferred Timeline*</label>
          <input type="text" name="timeline" placeholder="e.g. 4-6 weeks" required className="form-control" />
        </div>

        {/* Additional Notes */}
        <div className="form-group mb-3">
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            name="notes"
            placeholder="Any other details or requirements"
            className="form-control"
          />
        </div>

    <div className="form-group">
      <button type="submit" className="btn btn-warning">
        Send Request
      </button>
    </div>
  </form>
</div>
</>
  );
};

export default QuoteForm;
