import React, { useState } from 'react';
import './Contact.css'; // Ensure you've created this CSS file

const Contact = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div className="contact-container" id="contact">
            <div className="contact-background">
                <div className="parallax-background"></div>
            </div>
            <div className="contact-content">
                <h2>Let's Connect</h2>
                <p>Have a question or want to work together?</p>
                <form className="contact-form">
                    <div className="input-group" onFocus={handleFocus} onBlur={handleBlur}>
                        <label>Your Name</label>
                        <input type="text" required />
                    </div>
                    <div className="input-group" onFocus={handleFocus} onBlur={handleBlur}>
                        <label>Your Email</label>
                        <input type="email" required />
                    </div>
                    <div className="input-group textarea-group" onFocus={handleFocus} onBlur={handleBlur}>
                        <label>Your Message</label>
                        <textarea required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
