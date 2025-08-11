import React from "react";
import './footer.css'
import Logo from "./logo_amservices.png";
import { NavLink } from "react-router-dom";
const Footer = () => {

  return (
    <footer>
      <div className="div_content_footer">
        <div className="div_footer">
          <div className="div_logo">
            <NavLink to={"/"}>
              <img
                src={Logo}
                className="logo"
                alt="Voici le logo de l'entreprise AM Services"
              />
            </NavLink>
          </div>
          <div className="div_footer_content">
            <p>
              ©2025 Tous droits réservés AmServices
            </p>
            <NavLink className="mentionlegal" to={"/mentionlegal"}>
              Mention Légal
            </NavLink>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;