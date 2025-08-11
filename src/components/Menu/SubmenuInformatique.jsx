import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './SubmenuInformatique.css';

const SubMenuInformatique = () => {
    const navigate = useNavigate();

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
                        onClick={() => navigate("/informatique/details")}
                    >
                        EN SAVOIR PLUS
                    </button>
                </div>
                <div className="navlink_menu">
                    <NavLink
                        to="/informatique/infogerance"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Infogérance & Maintenance
                    </NavLink>
                    <NavLink
                        to="/informatique/reseaux"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Réseaux & Infrastructure
                    </NavLink>
                    <NavLink
                        to="/informatique/materiel"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Matériel & Vente
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default SubMenuInformatique;
