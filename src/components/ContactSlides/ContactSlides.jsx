import React, { useState } from "react";
import "./ContactSlides.css";

const ContactSlides = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className={`contact-sidebar ${collapsed ? "collapsed" : ""}`}>
            <button
                className="toggle-button"
                onClick={() => setCollapsed(!collapsed)}
                aria-label={collapsed ? "Ouvrir la sidebar contact" : "Fermer la sidebar contact"}
            >
                <span className={`arrow ${collapsed ? "collapsed" : ""}`}>&#9664;</span>
            </button>

            {!collapsed && (
                <>
                    <h2>Contactez-nous</h2>
                    <div className="contact-item">
                        <strong>Adresse:</strong>
                        <br />
                        41 Rue des Poncees
                        <br />
                        88200 Saint-Etienne Les Remiremont
                    </div>
                    <div className="contact-item">
                        <strong>Téléphone:</strong>
                        <br />
                        <a href="tel:+33329221601">+33 03 29 22 16 01</a>
                    </div>
                    <div className="contact-item">
                        <strong>Email:</strong>
                        <br />
                        <a href="mailto:contact@amservices.com">contact@amservices.com</a>
                    </div>
                </>
            )}
        </aside>
    );
};

export default ContactSlides;
