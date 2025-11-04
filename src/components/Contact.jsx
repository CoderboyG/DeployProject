import React, { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-form">
                <h1>Contact</h1>
                {submitted ? (
                    <p>✅ Thank you! Your message has been sent.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required />
                        <button type="submit">Send Message</button>
                    </form>
                )}
            </div>
        </div>
    );
}
