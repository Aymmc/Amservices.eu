// SubMenuInformatique.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import './SubmenuInformatique.css';
import { useNavigate } from "react-router-dom";

const SubMenuInformatique = () => {
    const navigate = useNavigate();

    return (
        <div className="navlink_with_submenu">
            <NavLink to="/informatique">Informatique</NavLink>
            <div className="submenu">
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
                    <NavLink to="/informatique/infogerance">Infogérance & Maintenance</NavLink>
                    <NavLink to="/informatique/reseaux">Réseaux & Infrastructure</NavLink>
                    <NavLink to="/informatique/materiel">Matériel & Vente</NavLink>
                    <NavLink to="https://media.amservices.eu/AnyDesk.exe">Depannage</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SubMenuInformatique;