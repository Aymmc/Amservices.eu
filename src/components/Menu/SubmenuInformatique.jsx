import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import './SubmenuInformatique.css';
import { HashLink } from 'react-router-hash-link';

const SubMenuInformatique = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Fonction pour savoir si on est sur une section spécifique
    const isHashActive = (hash) => location.hash === hash;

    return (
        <div className="navlink_with_submenu">
            <NavLink
                to="/informatique"
                className={({ isActive }) => (isActive ? "active" : "")}
                aria-haspopup="true"
            >
                Informatique
            </NavLink>

            <div className="submenu submenuinfo">
                <div className="navlink_description">
                    <h3>Services Informatiques</h3>
                    <p>
                        AM Services accompagne professionnels et particuliers avec des solutions informatiques complètes : maintenance, dépannage, sécurisation de réseaux et vente de matériel.
                    </p>
                    <button
                        className="submenu_button"
                        onClick={() => navigate("/informatique")}
                    >
                        EN SAVOIR PLUS
                    </button>
                </div>

                <div className="navlink_menu">
                    <HashLink
                        smooth
                        to="/informatique#materiel"
                        className={isHashActive("#materiel") ? "active" : ""}
                    >
                        Matériel & Vente
                    </HashLink>
                    <HashLink
                        smooth
                        to="/informatique#infogerance"
                        className={isHashActive("#infogerance") ? "active" : ""}
                    >
                        Infogérance & Maintenance
                    </HashLink>
                    <HashLink
                        smooth
                        to="/informatique#infrastructure"
                        className={isHashActive("#infrastructure") ? "active" : ""}
                    >
                        Réseaux & Infrastructure
                    </HashLink>
                </div>
            </div>
        </div>
    );
};

export default SubMenuInformatique;
