import React from "react";
import Logo from "./logo_amservices.png";
import "./header.css";
import { NavLink } from "react-router-dom";
import SubMenuInformatique from "./Menu/SubmenuInformatique";
import SubMenuTelephonie from "./Menu/SubmenuTelephonie";
import SubMenuInternet from "./Menu/SummenuInternet";
import Instagram from './instagram.png'
import Facebook from './facebook.png'

const Headers = () => {
  return (
    <header>
      <div className="div_content_header">
        <div className="div_header">
          <div className="div_logo">
            <NavLink to={"/"}>
              <img
                src={Logo}
                className="logo"
                alt="Voici le logo de l'entreprise AM Services"
              />
            </NavLink>
          </div>

          <div className="div_menu">
            <SubMenuInformatique />
            <SubMenuInternet />
            <SubMenuTelephonie />
          </div>
        </div>
        <div className="div_header_reseau">
          <a href="https://www.facebook.com/AMServices88/?locale=fr_FR">
            <img src={Facebook} alt="logo facebook" /></a>
          <a href="https://www.facebook.com/AMServices88/?locale=fr_FR">
            <img src={Instagram} alt="logo instagram" /></a>
        </div>
      </div>


    </header>
  );
};

export default Headers;
