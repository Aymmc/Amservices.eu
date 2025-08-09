import React, { useEffect, useRef } from "react";
import AM from './Aurelien.png';
import CM from './Catherine.png';
import FH from './Frantz.png';
import GC from './Gaitan.png';
import './Personnages.css';

const Personnage = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    } else {
                        entry.target.classList.remove("animate"); // permet de relancer l'anim
                    }
                });
            },
            { threshold: 0.1 } // déclenchement quand 20% de l'élément est visible
        );

        const elements = containerRef.current.querySelectorAll(".personnage");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className='div_equipe' ref={containerRef}>
            <div className="personnage">
                <img src={AM} alt="Image de Aurelien " />
                <div className="div_equipe_titre">
                    <h3>AURELIEN</h3>
                    <p>Technicien Informatique et réseau confirmé.</p>
                </div>
                <p>Spécialité : Réseau - Téléphonie - Serveurs Mails - Cybersécurité</p>
            </div>

            <div className="personnage">
                <img src={CM} alt="Image de Catherine" />
                <div className="div_equipe_titre">
                    <h3>CATHERINE</h3>
                    <p>Assistante de gestion commerciale confirmée.</p>
                </div>
                <p>Spécialité : Gestion relation client - Experte audits contractuels</p>
            </div>

            <div className="personnage">
                <img src={FH} alt="Image de Frantz" />
                <div className="div_equipe_titre">
                    <h3>FRANTZ</h3>
                    <p>Spécialité : Dépannage PC - Administration serveurs - NAS.</p>
                </div>
                <p>Spécialité : Réseau - Téléphonie - Serveurs Mails - Cybersécurité</p>
            </div>

            <div className="personnage">
                <img src={GC} alt="Image de Gaetan" />
                <div className="div_equipe_titre">
                    <h3>GAËTAN</h3>
                    <p>Technicien Informatique et réseau.</p>
                </div>
                <p>Spécialité : Technicien informatique et réseau généraliste polyvalent.</p>
            </div>
        </div>
    );
};

export default Personnage;
