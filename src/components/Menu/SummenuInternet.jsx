// SubMenuInternet.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import './SubmenuInformatique.css';
import { useNavigate } from "react-router-dom";

const SubMenuInternet = () => {

    const navigate = useNavigate();

    return (
        <div className="navlink_with_submenu">
            <NavLink to="/internet">Internet</NavLink>
            <div className="submenu">
                <div className="navlink_description">
                    <h3>Internet</h3>
                    <p>AM Services vous propose des solutions internet adaptées à chaque besoin,
                        incluant la **fibre optique**, la **4G** et l'**internet par satellite Starlink**.</p>
                    <button
                        className="submenu_button"
                        onClick={() => navigate("/internet/details")}
                    >
                        EN SAVOIR PLUS
                    </button>
                </div>
                <div className="navlink_menu">
                    <NavLink to="/internet/fibre">Fibre Optique</NavLink>
                    <NavLink to="/internet/starlink">Starlink (Satellite)</NavLink>
                    <NavLink to="/internet/4g">4G / Box 4G</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SubMenuInternet;