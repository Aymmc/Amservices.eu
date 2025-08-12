import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './SubmenuInformatique.css';
import { HashLink } from "react-router-hash-link";

const SubMenuTelephonie = () => {
    const navigate = useNavigate();
    const [submenuOpen, setSubmenuOpen] = useState(false);

    return (
        <div
            className="navlink_with_submenu"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
        >
            <NavLink
                to="/telephonie"
                aria-haspopup="true"
                aria-expanded={submenuOpen}
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Téléphonie
            </NavLink>
            <div className={`submenu submenutel${submenuOpen ? ' open' : ''}`} >
                <div className="navlink_description">
                    <h3>Téléphonie</h3>
                    <p>
                        AM Services offre des solutions téléphoniques adaptées,
                        incluant la vente, l'installation et le dépannage d'appareils.
                    </p>
                    <button
                        className="submenu_button"
                        onClick={() => navigate("/telephonie/details")}
                    >
                        EN SAVOIR PLUS
                    </button>
                </div>
                <nav className="navlink_menu" aria-label="Sous-menu Téléphonie">
                    <HashLink
                        smooth to="/telephonie#equipement"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Matériel et Équipements
                    </HashLink>
                    <HashLink
                        smooth to="/telephonie#entreprise"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Téléphonie d'entreprise
                    </HashLink>

                    <HashLink
                        smooth to="/telephonie#voip"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Solutions VoIP
                    </HashLink>
                </nav>
            </div>
        </div>
    );
};

export default SubMenuTelephonie;
