import React from "react";
import Logo from "./logo_amservices.png";
import "./header.css";
import { NavLink } from "react-router-dom";
import SubMenuInformatique from "./Menu/SubmenuInformatique";
import SubMenuTelephonie from "./Menu/SubmenuTelephonie";
import SubMenuInternet from "./Menu/SubmenuInternet";  // correction import
import Instagram from './instagram.png';
import Facebook from './facebook.png';

const Headers = () => {
  return (
    <header aria-label="En-tête principal du site">
      <div className="div_content_header">
        <div className="div_header">
          <div className="div_logo">
            <NavLink to="/">
              <img
                src={Logo}
                className="logo"
                alt="Logo de l'entreprise AM Services"
              />
            </NavLink>
          </div>

          <div className="div_menu">
            <SubMenuInformatique />
            <SubMenuInternet />
            <SubMenuTelephonie />

            <button
              className="submenu_button"
              aria-label="Ouvrir la page de dépannage dans un nouvel onglet"
              onClick={() =>
                window.open("https://media.amservices.eu/AnyDesk.exe", "_blank", "noopener,noreferrer")
              }
            >
              DEPANNAGE
            </button>
          </div>
        </div>

        <div className="div_header_reseau" aria-label="Liens vers réseaux sociaux">
          <a
            href="https://www.facebook.com/AMServices88/?locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Page Facebook de AM Services"
          >
            <img src={Facebook} alt="Logo Facebook" />
          </a>
          <a
            href="https://www.instagram.com/amservices88/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compte Instagram de AM Services"
          >
            <img src={Instagram} alt="Logo Instagram" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Headers;
