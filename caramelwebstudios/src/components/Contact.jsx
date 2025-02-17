import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message Sent by ${formData.name}`);
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
    };

    return (
        <Container id="contact" className="text-center my-5">
            <h2 className="mb-4">Contact Us</h2>

            <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
                {/* Name Field */}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </Form.Group>

                {/* Email Field */}
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </Form.Group>

                {/* Message Field */}
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        required
                    />
                </Form.Group>

                {/* Submit Button */}
                <Button variant="primary" type="submit" className="w-100">
                    Send Message
                </Button>
            </Form>
        </Container>
    );
}

export default Contact;
