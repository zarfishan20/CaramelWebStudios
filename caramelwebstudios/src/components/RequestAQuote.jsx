import React, { useState } from 'react';
import Header from './Header.jsx';

const RequestAQuote = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (send data to backend or API)
        console.log('Form Submitted', formData);

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
         <Header />
        <div className="quote-page">
            <div className="container">
                <h1 className="text-center mb-4 services-title">Request a Quote</h1>
                <p className="text-center">Tell us about your project, and we'll get back to you.</p>
                <div className="form-container">
                    <form onSubmit={handleSubmit} netlify>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Project Details</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Describe your project requirements"
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Submit Request</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
};

export default RequestAQuote;
