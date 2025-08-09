import React from 'react';
import './ContactSlides.css'
const ContactSidebar = () => {
    return (
        <>
            <aside className="contact-sidebar">
                <h2>Contactez-nous</h2>
                <div className="contact-item">
                    <strong>Adresse:</strong><br />
                    123 Rue Exemple<br />
                    75000 Paris
                </div>
                <div className="contact-item">
                    <strong>Téléphone:</strong><br />
                    <a href="tel:+33123456789">+33 1 23 45 67 89</a>
                </div>
                <div className="contact-item">
                    <strong>Email:</strong><br />
                    <a href="mailto:contact@example.com">contact@example.com</a>
                </div>
            </aside>
        </>
    );
};
export default ContactSidebar