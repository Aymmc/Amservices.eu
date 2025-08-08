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

        </div>
      </div>

    </footer>
  );
};

export default Footer;