import React, { useState } from "react";
import "./ContactSlides.css";

const ContactSlides = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={`contact-sidebar ${collapsed ? "collapsed" : ""}`}
            aria-labelledby="contact-title"
            itemScope
            itemType="https://schema.org/LocalBusiness"
        >
            <meta itemProp="name" content="AM Services" />
            <meta itemProp="addressLocality" content="Saint-Étienne-lès-Remiremont" />
            <meta itemProp="addressRegion" content="Grand Est" />
            <meta itemProp="postalCode" content="88200" />
            <meta itemProp="streetAddress" content="41 Rue des Poncées" />
            <meta itemProp="telephone" content="+33 3 29 22 16 01" />
            <meta itemProp="email" content="contact@amservices.com" />

            <button
                className="toggle-button"
                onClick={() => setCollapsed(!collapsed)}
                aria-label={collapsed ? "Ouvrir la section contact" : "Réduire la section contact"}
            >
                <span className={`arrow ${collapsed ? "collapsed" : ""}`}>&#9664;</span>
            </button>

            {!collapsed && (
                <>
                    <h2 id="contact-title">Contactez-nous</h2>
                    <address className="contact-item" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <strong>Adresse :</strong>
                        <br />
                        <span itemProp="streetAddress">41 Rue des Poncées</span>
                        <br />
                        <span itemProp="postalCode">88200</span> <span itemProp="addressLocality">Saint-Étienne-lès-Remiremont</span>
                    </address>

                    <div className="contact-item">
                        <strong>Téléphone :</strong>
                        <br />
                        <a href="tel:+33329221601" itemProp="telephone">+33 3 29 22 16 01</a>
                    </div>

                    <div className="contact-item">
                        <strong>Email :</strong>
                        <br />
                        <a href="mailto:contact@amservices.com" itemProp="email">contact@amservices.com</a>
                    </div>
                </>
            )}
        </aside>
    );
};

export default ContactSlides;
