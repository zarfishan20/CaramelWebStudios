import React, { useState } from "react";
import Header from './Header.jsx';
function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });



    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email format";
        }
        if (!formData.message.trim()) errors.message = "Message is required";
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {

            try {
                const response = await fetch("http://localhost:5000/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });


                if (response.ok) {
                    setSubmitted(true);
                } else {
                    alert("Failed to send email. Please try again.");
                }
            } catch (error) {
                console.error("Error sending email:", error);
            }
        } else {
            setErrors(validationErrors);
        }


    };


    return (


        <>
        <Header />
            <h1 className="text-center services-title">Contact Us</h1>
            <div className="contact-form-container">
             
                {submitted ? (
                    <p className="success-message">Thank you! Your message has been sent.</p>
                ) : (
                    <form onSubmit={handleSubmit} netlify>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-control"
                            ></textarea>
                            {errors.message && <p className="error">{errors.message}</p>}
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                )}
            </div>
        
        </>

    );
}

export default Contact;
