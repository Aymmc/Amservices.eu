import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './SubmenuInformatique.css';
import { HashLink } from 'react-router-hash-link';

const SubMenuInternet = () => {
    const navigate = useNavigate();
    const [submenuOpen, setSubmenuOpen] = useState(false);

    return (
        <div
            className="navlink_with_submenu"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
        >
            <NavLink
                to="/internet"
                aria-haspopup="true"
                aria-expanded={submenuOpen}
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Connectivité Internet
            </NavLink>
            <div className={`submenu submenuinter${submenuOpen ? ' open' : ''}`}>
                <div className="navlink_description">
                    <h3>Connectivité Internet</h3>
                    <p>
                        AM Services vous propose des solutions internet adaptées à chaque besoin,
                        incluant la fibre optique, la 4G et l'internet par satellite Starlink.
                    </p>
                    <button
                        className="submenu_button"
                        onClick={() => navigate("/internet")}
                    >
                        EN SAVOIR PLUS
                    </button>
                </div>
                <nav className="navlink_menu" aria-label="Sous-menu Connectivité Internet">

                    <HashLink
                        smooth to="/internet#fibre"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Fibre Optique
                    </HashLink>
                    <HashLink
                        smooth to="/internet#starlink"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Starlink (Satellite)
                    </HashLink>
                    <HashLink
                        smooth to="/internet#4g"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        4G / Box 4G
                    </HashLink>
                </nav>
            </div>
        </div>
    );
};

export default SubMenuInternet;
