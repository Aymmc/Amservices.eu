// SubMenuTelephonie.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import './SubmenuInformatique.css'; // tu peux réutiliser le même CSS aussi
import { useNavigate } from "react-router-dom";
const SubMenuTelephonie = () => {

    const navigate = useNavigate();

    return (
        <div className="navlink_with_submenu">
            <NavLink to="/telephonie">Téléphonie</NavLink>
            <div className="submenu">
                <div className="navlink_description">
                    <h3>Téléphonie</h3>
                    <p>AM Services offre des solutions téléphoniques adaptées,
                        incluant la vente, l'installation et le dépannage d'appareils.</p>
                    <button
                        className="submenu_button"
                        onClick={() => navigate("/informatique/details")}
                    >
                        EN SAVOIR PLUS
                    </button>
                </div>
                <div className="navlink_menu">
                    <NavLink to="/telephonie/smartphones">Téléphonie d'entreprise</NavLink>
                    <NavLink to="/telephonie/accessoires">Matériel et Équipements</NavLink>
                    <NavLink to="/telephonie/accessoires">Solutions VoIP</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SubMenuTelephonie;
